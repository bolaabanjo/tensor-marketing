import Reveal from "./Reveal";

const groups = [
  {
    k: "SURF",
    t: "Work-panel integration",
    items: ["Scene in the + menu", "Zero Review/Git chrome", "Full canvas ownership", "Detach + safe restore"],
  },
  {
    k: "COMP",
    t: "Composer continuity",
    items: ["Draft survives cover/detach", "⌘K compact composer", "Selection chips", "Interrupt + approvals inline"],
  },
  {
    k: "ASSET",
    t: "Permission-bound import",
    items: [".glb / .gltf + deps", "Hash dedupe, atomic writes", "Soft + hard resource limits", "Actionable errors"],
  },
  {
    k: "AGENT",
    t: "Validated operations",
    items: ["Bounded Scene reads", "Schema-checked transactions", "Atomic commit + summary", "One safe retry, then explain"],
  },
  {
    k: "PLAY",
    t: "Isolated runtime",
    items: ["Edit ⇄ Play, no export", "Follow cam + collision", "Gamepad where exposed", "Errors link back to cause"],
  },
  {
    k: "DATA",
    t: "Durable + reversible",
    items: ["tensor.scene.json in workspace", "Autosave, atomic writes", "Chrono undo across operators", "Recovery snapshots"],
  },
];

export default function Features() {
  return (
    <section id="spec" className="border-b hairline">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-ember">
            <span className="w-8 h-px bg-ember" /> 05 — MVP SPEC, NO HAND-WAVING
          </div>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-black tracking-[-0.03em] leading-[0.95] text-[clamp(2.2rem,4.8vw,4rem)] max-w-[18ch]">
              Everything the Scene{" "}
              <span className="font-display italic font-normal">promises.</span>
            </h2>
            <p className="font-mono text-[11.5px] tracking-[0.1em] text-dim max-w-[36ch] leading-[1.7]">
              P0 = SHIPS IN MVP. P1 = BEFORE PUBLIC BETA. FULL ACCEPTANCE SUITE
              A–J IN THE SPEC.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border hairline rounded-2xl overflow-hidden">
          {groups.map((g, i) => (
            <Reveal key={g.k} delay={(i % 3) * 80} className="bg-panel">
              <div className="p-7 h-full">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold tracking-[0.2em] bg-ink border hairline rounded-full px-3 py-[5px] text-acid">
                    {g.k}
                  </span>
                  <span className="font-mono text-[10px] text-dim">P0 ✓</span>
                </div>
                <h3 className="mt-4 font-extrabold tracking-tight text-[18px]">
                  {g.t}
                </h3>
                <ul className="mt-4 space-y-[10px]">
                  {g.items.map((x) => (
                    <li
                      key={x}
                      className="flex gap-3 text-fog text-[14px] leading-[1.55]"
                    >
                      <span className="text-ember">—</span> {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* pipeline strip */}
        <Reveal className="mt-5 border hairline rounded-2xl bg-ink p-7 md:p-8 overflow-hidden">
          <div className="font-mono text-[11px] tracking-[0.2em] text-dim">
            IMPORT PIPELINE — 9 REAL STAGES, REAL PROGRESS
          </div>
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px]">
            {["validate", "stage", "resolve deps", "hash + inspect", "copy", "metadata", "instantiate", "frame + light", "commit"].map(
              (s, i) => (
                <span key={s} className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-[7px] border ${
                      i < 8
                        ? "hairline text-bone"
                        : "bg-acid text-ink font-bold border-acid"
                    }`}
                  >
                    {i + 1}. {s}
                  </span>
                  {i < 8 && <span className="text-dim">→</span>}
                </span>
              )
            )}
          </div>
          <p className="mt-4 font-mono text-[11px] text-dim leading-[1.7]">
            REMOTE URIs NEVER AUTO-FETCH · ABSOLUTE PATHS + ../ REJECTED · STAGING
            FAILURE LEAVES NO PARTIAL ASSETS
          </p>
        </Reveal>
      </div>
    </section>
  );
}
