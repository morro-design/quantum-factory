const vertexSource = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const fragmentSource = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_angle;
uniform float u_flow_a;
uniform float u_flow_b;
uniform sampler2D u_map;

void main() {
  vec2 point = (gl_FragCoord.xy - 0.5 * u_resolution) / (0.5 * min(u_resolution.x, u_resolution.y));
  float radius2 = dot(point, point);
  if (radius2 > 1.0) discard;

  vec3 normal = vec3(point, sqrt(max(0.0, 1.0 - radius2)));
  float sine = sin(u_angle);
  float cosine = cos(u_angle);
  vec3 local = vec3(
    cosine * normal.x - sine * normal.z,
    normal.y,
    sine * normal.x + cosine * normal.z
  );

  float flow = sin(local.y * 5.0 + u_flow_a) * sin(local.x * 4.0 - u_flow_b);
  // Mirror the image around the back of the sphere so unlike edges never meet.
  float phase = 0.25 + atan(local.x, local.z) / 6.2831853 + flow * 0.006;
  float u = 0.5 - 0.5 * cos(6.2831853 * phase);
  float v = clamp(0.5 + asin(clamp(local.y, -1.0, 1.0)) / 3.14159265 + flow * 0.008, 0.0, 1.0);
  vec3 pigment = texture2D(u_map, vec2(u, v)).rgb;
  // Compress the reference's gold and coral highlights into the orb's midtones.
  pigment = pigment / (1.0 + pigment);

  vec3 light = normalize(vec3(0.55, 0.68, 1.0));
  float diffuse = max(dot(normal, light), 0.0);
  float edge = smoothstep(0.0, 0.32, normal.z);
  vec3 color = pigment * (0.55 + 0.4 * diffuse) * mix(0.45, 1.0, edge);
  color += vec3(0.55, 0.22, 0.26) * pow(diffuse, 3.0) * 0.12;

  vec3 reflected = reflect(-light, normal);
  float specular = max(reflected.z, 0.0);
  color += vec3(0.55, 0.47, 0.48) * (
    pow(specular, 4.0) * 0.08 + pow(specular, 24.0) * 0.04
  );

  gl_FragColor = vec4(color, 1.0);
}`;

interface OrbState {
  element: HTMLElement;
  canvas: HTMLCanvasElement;
  draw?: (seconds: number) => void;
  active: boolean;
}

function compile(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
  gl.deleteShader(shader);
  return null;
}

function createRenderer(state: OrbState, image: HTMLImageElement, getElapsed: () => number): (() => void) | null {
  const gl = state.canvas.getContext('webgl', { alpha: true, antialias: true, powerPreference: 'low-power' });
  if (!gl) return null;

  const vertex = compile(gl, gl.VERTEX_SHADER, vertexSource);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertex || !fragment) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;

  const buffer = gl.createBuffer();
  const texture = gl.createTexture();
  if (!buffer || !texture) return null;

  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.uniform1i(gl.getUniformLocation(program, 'u_map'), 0);

  const resolution = gl.getUniformLocation(program, 'u_resolution');
  const angle = gl.getUniformLocation(program, 'u_angle');
  const flowA = gl.getUniformLocation(program, 'u_flow_a');
  const flowB = gl.getUniformLocation(program, 'u_flow_b');

  state.draw = (seconds) => {
    if (!state.canvas.width || !state.canvas.height) return;
    gl.viewport(0, 0, state.canvas.width, state.canvas.height);
    gl.uniform2f(resolution, state.canvas.width, state.canvas.height);
    gl.uniform1f(angle, (seconds * 0.14959965) % (2 * Math.PI)); // One turn every 42 seconds.
    gl.uniform1f(flowA, (seconds * 0.23) % (2 * Math.PI));
    gl.uniform1f(flowB, (seconds * 0.17) % (2 * Math.PI));
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  const resize = () => {
    const width = state.element.offsetWidth;
    const height = state.element.offsetHeight;
    if (!width || !height) return;
    const scale = Math.min(window.devicePixelRatio || 1, 1.5);
    state.canvas.width = Math.round(width * scale);
    state.canvas.height = Math.round(height * scale);
    state.draw?.(getElapsed());
    state.element.classList.add('liquid-orb--webgl');
  };

  const observer = new ResizeObserver(resize);
  observer.observe(state.element);
  resize();
  return () => observer.disconnect();
}

export function initLiquidOrbs(): void {
  const phaseKey = 'qf-liquid-orb-elapsed';
  let elapsed = 0;
  try {
    const saved = Number(sessionStorage.getItem(phaseKey));
    if (Number.isFinite(saved) && saved >= 0) elapsed = saved;
  } catch {
    // Storage may be unavailable; the orb can start from its initial phase.
  }

  const states: OrbState[] = Array.from(document.querySelectorAll<HTMLElement>('[data-liquid-orb]')).map((element) => ({
    element,
    canvas: element.querySelector<HTMLCanvasElement>('.liquid-orb__canvas')!,
    active: false,
  }));
  if (!states.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const intersecting = new Set<HTMLElement>();
  let frameId = 0;
  let lastFrame: number | null = null;

  const frame = (now: number) => {
    frameId = 0;
    if (lastFrame !== null) elapsed += Math.min(now - lastFrame, 50) / 1000;
    lastFrame = now;
    for (const state of states) {
      if (!state.active || !state.draw) continue;
      state.draw(elapsed);
    }
    if (states.some((state) => state.active && state.draw)) frameId = requestAnimationFrame(frame);
  };

  const sync = () => {
    for (const state of states) {
      state.active = intersecting.has(state.element) && !document.hidden && !reducedMotion.matches;
      state.element.classList.toggle('liquid-orb--active', state.active);
      if (state.active) state.draw?.(elapsed);
    }
    if (states.some((state) => state.active && state.draw)) {
      if (!frameId) frameId = requestAnimationFrame(frame);
    } else if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = 0;
    }
    if (!states.some((state) => state.active && state.draw)) lastFrame = null;
  };

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) intersecting.add(entry.target as HTMLElement);
      else intersecting.delete(entry.target as HTMLElement);
    }
    sync();
  });
  for (const state of states) observer.observe(state.element);
  document.addEventListener('visibilitychange', sync);
  reducedMotion.addEventListener('change', sync);
  window.addEventListener('pagehide', () => {
    try {
      sessionStorage.setItem(phaseKey, String(elapsed));
    } catch {
      // Storage may be unavailable; rendering still works without persistence.
    }
  });

  const image = new Image();
  image.onload = () => {
    for (const state of states) {
      if (!createRenderer(state, image, () => elapsed)) state.element.classList.add('liquid-orb--fallback');
    }
    sync();
  };
  image.onerror = () => {
    for (const state of states) state.element.classList.add('liquid-orb--fallback');
    sync();
  };
  image.src = '/corporate-gradient-map.png';
}
