import Reveal from "./Reveal";

export default function Footer() {
  return (
    <>
      <section id="download" className="relative overflow-hidden grain">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(255,77,0,0.28), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 py-24 md:py-32 text-center">
          <Reveal>
            <div className="font-mono text-[11px] tracking-[0.24em] text-ember">
              07 — GET TENSOR
            </div>
            <h2 className="mt-6 mx-auto font-black tracking-[-0.035em] leading-[0.92] text-[clamp(2.8rem,7vw,6rem)] max-w-[16ch]">
              Stop describing worlds.{" "}
              <span className="font-display italic font-normal">Touch one.</span>
            </h2>
            <p className="mt-6 mx-auto text-fog text-[16px] md:text-[18px] leading-[1.7] max-w-[56ch]">
              Tensor Desktop for macOS. Open a task, add Scene from the{" "}
              <span className="text-bone font-mono text-[13px]">+</span> menu,
              drop your GLB — and build the game inside the game.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#top"
                className="bg-ember hover:bg-bone hover:text-ink text-white transition-colors font-bold text-[16px] rounded-full px-9 py-[16px]"
              >
                Download for macOS ↓
              </a>
              <a
                href="#journey"
                className="border hairline hover:border-bone/60 transition-colors font-mono text-[12px] tracking-[0.1em] rounded-full px-7 py-[16px]"
              >
                REPLAY THE CAR DEMO →
              </a>
            </div>
            <div className="mt-7 font-mono text-[11px] tracking-[0.14em] text-dim">
              macOS 14+ · APPLE SILICON · REFERENCE LOOP: 16 MB GLB → PLAY IN MINUTES
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t hairline bg-ink">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-8 h-8 bg-bone text-ink font-black text-[15px] rounded-[6px]">
              T
            </span>
            <div className="leading-tight">
              <div className="font-black tracking-tight text-[15px]">TENSOR</div>
              <div className="font-mono text-[10px] tracking-[0.18em] text-dim">
                SHARED LIVE ENVIRONMENT · SPEC 0003
              </div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.14em] text-dim">
            <a href="#thesis" className="hover:text-bone">THESIS</a>
            <a href="#loop" className="hover:text-bone">LOOP</a>
            <a href="#scene" className="hover:text-bone">SCENE</a>
            <a href="#spec" className="hover:text-bone">SPEC</a>
            <a href="#not" className="hover:text-bone">SCOPE</a>
          </nav>
          <div className="font-mono text-[10.5px] tracking-[0.12em] text-dim">
            © 2026 TENSOR · ARTIFACT PRIMARY
          </div>
        </div>
      </footer>
    </>
  );
}
