import Reveal from "./Reveal";

export default function Modes() {
  return (
    <section id="scene" className="border-b hairline">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-ember">
            <span className="w-8 h-px bg-ember" /> 03 — SCENE SURFACE
          </div>
          <h2 className="mt-6 font-black tracking-[-0.03em] leading-[0.95] text-[clamp(2.2rem,4.8vw,4rem)]">
            One Scene.{" "}
            <span className="font-display italic font-normal">Two operators.</span>
          </h2>
          <p className="mt-5 text-fog max-w-[64ch] text-[16px] md:text-[18px] leading-[1.7]">
            Scene is a first-class work-panel view — opened from{" "}
            <span className="text-bone font-mono text-[13px] border hairline rounded px-2 py-[3px]">+</span>{" "}
            beside Review and Browser. When Scene is active, Git chrome is gone.
            The viewport owns the panel.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <Reveal className="bg-panel border hairline rounded-2xl p-8">
            <div className="font-mono text-[11px] tracking-[0.2em] text-acid">
              ◉ EDIT MODE
            </div>
            <h3 className="mt-3 font-extrabold text-[24px] tracking-tight">
              Author with your hands
            </h3>
            <ul className="mt-5 space-y-3 text-[14.5px] text-fog leading-[1.6]">
              {[
                "Orbit / pan / zoom, frame selection, reset camera",
                "Click-select, gizmo move · rotate · scale + numeric entry",
                "Add, duplicate, rename, hide, delete entities",
                "Grid, ground reference, selection outline, neutral light",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-acid mt-[2px]">→</span> {x}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2 font-mono text-[10.5px]">
              <span className="border hairline rounded-md px-2 py-[5px] text-bone">SELECT ⇖</span>
              <span className="bg-ember/15 text-ember border border-ember/40 rounded-md px-2 py-[5px]">MOVE ✥</span>
              <span className="border hairline rounded-md px-2 py-[5px] text-dim">ROTATE ⟳</span>
              <span className="border hairline rounded-md px-2 py-[5px] text-dim">SCALE ⤢</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="bg-ember text-white rounded-2xl p-8 relative overflow-hidden grain">
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="relative">
              <div className="font-mono text-[11px] tracking-[0.2em] opacity-80">
                ▷ PLAY MODE
              </div>
              <h3 className="mt-3 font-extrabold text-[24px] tracking-tight">
                Run it where you built it
              </h3>
              <ul className="mt-5 space-y-3 text-[14.5px] leading-[1.6] text-white/90">
                {[
                  "Disposable runtime from last saved Scene state",
                  "Gizmos + overlays hidden, input routed to the game",
                  "Runtime physics never dirties the authored document",
                  "Exit restores editor camera + selection exactly",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-[2px]">→</span> {x}
                  </li>
                ))}
              </ul>
              <div className="mt-6 inline-flex items-center gap-3 bg-ink text-bone rounded-full pl-2 pr-5 py-2 font-mono text-[11px]">
                <span className="bg-acid text-ink font-bold rounded-full px-3 py-[6px]">▷ PLAY</span>
                CLICK VIEWPORT TO CAPTURE · ESC TO EXIT
              </div>
            </div>
          </Reveal>
        </div>

        {/* layout states */}
        <div className="mt-5 grid md:grid-cols-3 gap-5">
          {[
            {
              k: "SPLIT",
              t: "Conversation + Scene side by side",
              d: "Full composer visible. Prompt, watch the commit land, keep history open.",
            },
            {
              k: "CANVAS FOCUS",
              t: "Scene covers the conversation",
              d: "Compact composer (⌘K) floats over the viewport. Latest exchange only — details one click away.",
            },
            {
              k: "DETACHED",
              t: "Scene on a second display",
              d: "Native window, same task + Scene revision. No copies, no divergent state. Safe restore if the monitor vanishes.",
            },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 90} className="border hairline rounded-2xl p-7 bg-ink">
              <div className="font-mono text-[11px] tracking-[0.2em] text-steel">
                {c.k}
              </div>
              <div className="mt-2 font-bold tracking-tight text-[17px]">{c.t}</div>
              <p className="mt-2 text-fog text-[14px] leading-[1.65]">{c.d}</p>
              {/* mini diagram */}
              <div className="mt-5 flex gap-1 h-[54px]">
                {c.k === "SPLIT" ? (
                  <>
                    <div className="flex-1 border hairline rounded-md grid place-items-center font-mono text-[9px] text-dim">CHAT</div>
                    <div className="flex-[1.3] border border-acid/50 rounded-md grid place-items-center font-mono text-[9px] text-acid bg-acid/5">VIEWPORT</div>
                  </>
                ) : c.k === "CANVAS FOCUS" ? (
                  <div className="flex-1 border border-acid/50 rounded-md relative grid place-items-center font-mono text-[9px] text-acid bg-acid/5">
                    VIEWPORT
                    <span className="absolute bottom-1 inset-x-6 bg-ink border hairline rounded text-[8px] py-[3px] text-center text-bone">⌘K COMPOSER</span>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 border hairline rounded-md grid place-items-center font-mono text-[9px] text-dim">TASK</div>
                    <div className="w-px bg-line" />
                    <div className="flex-1 border border-steel/50 rounded-md grid place-items-center font-mono text-[9px] text-steel bg-steel/5">SCENE ⧉</div>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
