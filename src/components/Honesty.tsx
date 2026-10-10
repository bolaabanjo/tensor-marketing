import Reveal from "./Reveal";

const nots = [
  "Not a Blender / Maya / Unity replacement",
  "No mesh, UV, rigging, or keyframe editing",
  "No asset marketplace or license verifier",
  "No silent filesystem scanning",
  "No multiplayer editor",
  "No store publisher or console builds",
  "No shader graphs or visual scripting",
];

export default function Honesty() {
  return (
    <section id="not" className="border-b hairline bg-panel">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-ember">
            <span className="w-8 h-px bg-ember" /> 06 — SCOPE HONESTY
          </div>
          <h2 className="mt-6 font-black tracking-[-0.03em] leading-[0.95] text-[clamp(2.2rem,4.6vw,3.8rem)]">
            What Tensor{" "}
            <span className="font-display italic font-normal">isn’t.</span>
          </h2>
          <p className="mt-5 text-fog text-[16px] leading-[1.7] max-w-[50ch]">
            The MVP holds its non-goals so it can actually ship. If it needs a
            full engine, an asset store, or a second hidden Scene
            representation — it doesn’t ship. FBX, OBJ, USD, terrain, and
            networking are follow-on decisions.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="border hairline rounded-2xl overflow-hidden bg-ink divide-y divide-line">
            {nots.map((n) => (
              <li
                key={n}
                className="flex items-center gap-4 px-6 py-[15px] font-mono text-[12.5px] tracking-[0.02em] text-fog"
              >
                <span className="w-6 h-6 shrink-0 grid place-items-center rounded-full border border-[#FF3B30]/60 text-[#FF3B30] text-[13px]">
                  ✕
                </span>
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
