"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const steps = [
  {
    t: "Prompt or grab",
    d: "Type “use the car I downloaded” or drag a .glb straight into Scene. Native picker grants permission — nothing is silently scanned.",
    tag: "◈ INPUT",
  },
  {
    t: "Visible Scene change",
    d: "Import stages for real: validate → stage → copy into assets/imported/ → frame, light, ground. Activity panel names each stage.",
    tag: "◈ COMMIT",
  },
  {
    t: "Inspect + adjust",
    d: "Orbit, click-select, move / rotate / scale with gizmos or numeric fields. Every gesture is one undoable transaction.",
    tag: "◈ DIRECT",
  },
  {
    t: "Another prompt",
    d: "“Make it metallic red.” Selection rides as context. Agent edits validate atomically — one bad op rejects the whole batch.",
    tag: "◈ AGENT",
  },
  {
    t: "Play",
    d: "Isolated runtime from saved state. Drive it. Physics mess doesn’t dirty your authored Scene — exit restores it.",
    tag: "▷ PLAY",
  },
];

export default function Loop() {
  const [active, setActive] = useState(1);
  return (
    <section id="loop" className="border-b hairline bg-panel">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-ember">
            <span className="w-8 h-px bg-ember" /> 02 — THE DEFINING LOOP
          </div>
          <h2 className="mt-6 font-black tracking-[-0.03em] leading-[0.95] text-[clamp(2.2rem,4.8vw,4rem)] max-w-[20ch]">
            Prompt.{" "}
            <span className="font-display italic font-normal">See it.</span>{" "}
            Touch it. Play it.
          </h2>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[380px_1fr] gap-6">
          <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2">
            {steps.map((s, i) => (
              <button
                key={s.t}
                onClick={() => setActive(i)}
                className={`text-left shrink-0 lg:shrink rounded-xl border px-5 py-4 transition-all min-w-[220px] ${
                  active === i
                    ? "bg-bone text-ink border-bone"
                    : "bg-ink text-bone hairline hover:border-fog"
                }`}
              >
                <div
                  className={`font-mono text-[10px] tracking-[0.18em] ${
                    active === i ? "text-ink/60" : "text-dim"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")} · {s.tag}
                </div>
                <div className="mt-1 font-extrabold tracking-tight text-[17px]">
                  {s.t}
                </div>
              </button>
            ))}
          </div>

          <Reveal key={active} className="bg-ink border hairline rounded-2xl p-8 md:p-12 relative overflow-hidden grain">
            <div className="absolute inset-0 bg-blueprint opacity-60 pointer-events-none" />
            <div className="relative">
              <div className="font-mono text-[11px] tracking-[0.2em] text-acid">
                STEP {active + 1} / 5 — {steps[active].tag}
              </div>
              <h3 className="mt-4 font-display italic text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.05]">
                {steps[active].t}
              </h3>
              <p className="mt-4 text-fog text-[16px] leading-[1.7] max-w-[56ch]">
                {steps[active].d}
              </p>
              <div className="mt-8 flex items-center gap-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`go to step ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-[6px] rounded-full transition-all ${
                      i === active ? "w-12 bg-ember" : "w-6 bg-line hover:bg-dim"
                    }`}
                  />
                ))}
                <button
                  onClick={() => setActive((active + 1) % steps.length)}
                  className="ml-auto font-mono text-[11px] tracking-[0.12em] border hairline rounded-full px-4 py-2 hover:border-bone/60"
                >
                  NEXT →
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
