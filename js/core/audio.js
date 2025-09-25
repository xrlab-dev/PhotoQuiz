// js/audio.js — minimalísimo
export const Audio = (() => {
  let ctx, master, buffers = new Map(), unlocked = false;

  // —— rutas según tu screenshot
  const files = {
    general: "assets/audio/sfx/ui/button_general.mp3",
    answer:  "assets/audio/sfx/ui/answer_select.mp3",
    startup: "assets/audio/sfx/system/startup.mp3",
    music:   "assets/audio/music/main_loop.mp3"
  };

  function ensureCtx() {
    if (ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 1;
    master.connect(ctx.destination);
  }

  function installUnlockOnce() {
    if (unlocked) return;
    const unlock = async () => {
      try {
        ensureCtx();
        await ctx.resume();
        // beep silencioso para iOS
        const b = ctx.createBuffer(1, 1, 22050);
        const s = ctx.createBufferSource();
        s.buffer = b; s.connect(master); s.start(0);
        unlocked = true;
        off();
      } catch {}
    };
    const off = () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };
    window.addEventListener("pointerdown", unlock, { passive: true });
    window.addEventListener("keydown", unlock);
    window.addEventListener("touchstart", unlock, { passive: true });
  }

  async function load(url) {
    ensureCtx();
    const res = await fetch(url);
    const arr = await res.arrayBuffer();
    return await new Promise((ok, err) =>
      ctx.decodeAudioData(arr, ok, err)
    );
  }

  async function preload() {
    installUnlockOnce();
    // Pre-decoder: evita lag en el primer tap real
    buffers.set("general", await load(files.general));
    buffers.set("answer",  await load(files.answer));
    buffers.set("startup", await load(files.startup));
    buffers.set("music",   await load(files.music));
  }

  function play(name) {
    if (!ctx || !buffers.has(name)) return;
    const src = ctx.createBufferSource();
    src.buffer = buffers.get(name);
    src.connect(master);
    try { src.start(); } catch {}
  }

  // música en loop (reemplaza si ya hay una)
  let musicNode = null;
  function playMusic(volume = 0.7) {
    if (!ctx || !buffers.has("music")) return;
    if (musicNode) { try { musicNode.stop(); } catch{} }
    const gain = ctx.createGain(); gain.gain.value = volume;
    const src = ctx.createBufferSource();
    src.buffer = buffers.get("music");
    src.loop = true;
    src.connect(gain); gain.connect(master);
    try { src.start(); } catch {}
    musicNode = src;
  }

  function wireButtons() {
    document.querySelectorAll("[data-sfx]").forEach(el => {
      el.addEventListener("pointerdown", () => {
        const key = el.getAttribute("data-sfx") || "general";
        play(key);
      }, { passive: true });
    });
  }

  return { preload, play, playMusic, wireButtons };
})();
