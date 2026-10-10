import Reveal from "./Reveal";

const items = [
  ["01", "Say it", "“Use the car model I downloaded to build a driving game.”"],
  ["02", "Choose it", "Tensor offers Choose car model — you pick the .glb. No silent Downloads scan, ever."],
  ["03", "Watch import", "Real progress + warnings. Copied to assets/imported/sports-car/ with hash + import.json."],
  ["04", "See it framed", "Camera frames bounds, neutral light + ground. Useful first frame, no vertex rewriting."],
  ["05", "Agent sets up play", "Vehicle controls, follow camera, colliders, test ground — one checkpointed transaction."],
  ["06", "Grab + nudge", "Select the car, drag it into place. One gesture, one undo."],
  ["07", "Prompt covered", "Expand over chat, ⌘K: “metallic red, lower suspension.” Validated, applied, Undo offered."],
  ["08", "Drive", "▷ Play. Dirty runtime, clean document. Exit restores your authored Scene."],
];

export default function Journey() {
  return (
    <section id="journey" className="border-b hairline bg-panel">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <div className="lg:sticky lg:top-[100px] self-start">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-ember">
              <span className="w-8 h-px bg-ember" /> 04 — PROOF RUN
            </div>
            <h2 className="mt-6 font-black tracking-[-0.03em] leading-[0.95] text-[clamp(2.2rem,4.6vw,3.8rem)]">
              Downloaded car →{" "}
              <span className="font-display italic font-normal">drivable</span>{" "}
              in minutes.
            </h2>
            <p className="mt-5 text-fog text-[16px] leading-[1.7] max-w-[46ch]">
              The reference run from the spec. Every step is production
              behavior — no simulated progress, no demo-only state.
            </p>
            <a
              href="#download"
              className="mt-7 inline-block bg-bone text-ink hover:bg-ember hover:text-white transition-colors font-bold text-[14px] rounded-full px-6 py-[12px]"
            >
              Try it with your own GLB ↓
            </a>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-3">
            {items.map(([n, t, d], i) => (
              <Reveal key={n} delay={Math.min(i * 40, 200)}>
                <div className="relative flex gap-5 bg-ink border hairline rounded-xl p-5 hover:border-fog/50 transition-colors">
                  <span
                    className={`relative z-10 shrink-0 w-10 h-10 grid place-items-center rounded-full font-mono text-[12px] font-bold border ${
                      i === items.length - 1
                        ? "bg-acid text-ink border-acid"
                        : "bg-panel text-bone hairline"
                    }`}
                  >
                    {n}
                  </span>
                  <span>
                    <span className="font-extrabold tracking-tight text-[16px]">
                      {t}
                    </span>
                    <span className="block mt-1 text-fog text-[14px] leading-[1.6]">
                      {d}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
