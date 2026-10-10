export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-blueprint grain">
      <div className="absolute inset-0 bg-scan pointer-events-none" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,77,0,0.22), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-8 pt-[112px] md:pt-[132px] pb-14 md:pb-20 grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-8 items-center">
        {/* left */}
        <div>
          <div className="rise-1 inline-flex items-center gap-2 border hairline rounded-full pl-2 pr-4 py-[6px] bg-panel/80">
            <span className="font-mono text-[10px] tracking-[0.14em] bg-acid text-ink font-bold rounded-full px-2 py-[3px]">
              SPEC 0003
            </span>
            <span className="font-mono text-[11px] tracking-[0.14em] text-fog">
              TENSOR DESKTOP FOR macOS — GAMING MVP
            </span>
          </div>

          <h1 className="rise-2 mt-7 font-black tracking-[-0.035em] leading-[0.92] text-[clamp(3rem,7.2vw,5.8rem)]">
            Build the game
            <br />
            <span className="font-display italic font-normal tracking-[-0.02em]">
              inside
            </span>{" "}
            the game.
          </h1>

          <p className="rise-3 mt-6 max-w-[52ch] text-fog text-[16px] md:text-[18px] leading-[1.7]">
            Tensor is a{" "}
            <span className="text-bone font-semibold">
              shared live environment
            </span>{" "}
            where you and the agent manipulate the same 3D Scene. Import a
            model, grab it with gizmos, prompt in place — then press Play. No
            app-switching, no dead previews.
          </p>

          <div className="rise-4 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="bg-bone text-ink hover:bg-ember hover:text-white transition-colors font-bold text-[15px] rounded-full px-7 py-[14px]"
            >
              Download for macOS ↓
            </a>
            <a
              href="#loop"
              className="border hairline hover:border-bone/60 transition-colors font-mono text-[12px] tracking-[0.1em] rounded-full px-6 py-[14px] text-bone"
            >
              SEE THE LOOP →
            </a>
          </div>

          <div className="rise-4 mt-9 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[11px] tracking-[0.14em] text-dim">
            <span>
              <span className="text-acid">■</span> .GLB / .GLTF IMPORT
            </span>
            <span>
              <span className="text-ember">■</span> EDIT / PLAY MODES
            </span>
            <span>
              <span className="text-steel">■</span> ⌘Z UNDO EVERYTHING
            </span>
          </div>
        </div>

        {/* right : viewport mock */}
        <div className="rise-3 relative">
          <div className="absolute -inset-4 bg-dots opacity-40 rounded-3xl pointer-events-none" />
          <div className="relative border hairline rounded-2xl overflow-hidden bg-panel shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]">
            {/* tab strip */}
            <div className="flex items-center gap-2 px-4 h-[44px] border-b hairline bg-ink/60">
              <span className="flex gap-[6px] mr-2">
                <i className="w-[10px] h-[10px] rounded-full bg-[#FF5F57] block" />
                <i className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E] block" />
                <i className="w-[10px] h-[10px] rounded-full bg-[#28C840] block" />
              </span>
              <span className="font-mono text-[11px] text-dim px-3 py-[6px] rounded-md">
                Review
              </span>
              <span className="font-mono text-[11px] text-dim px-3 py-[6px] rounded-md">
                Browser
              </span>
              <span className="font-mono text-[11px] font-bold text-ink bg-acid px-3 py-[6px] rounded-md">
                Scene ●
              </span>
              <span className="ml-auto font-mono text-[10px] tracking-[0.12em] text-dim hidden sm:block">
                ent_car · rev 412
              </span>
            </div>

            {/* toolbar */}
            <div className="flex items-center gap-2 px-4 h-[46px] border-b hairline text-[11px] font-mono">
              <span className="bg-bone text-ink font-bold rounded-full px-3 py-[5px]">
                EDIT
              </span>
              <span className="text-dim px-2">PLAY ▷</span>
              <span className="w-px h-5 bg-line mx-1" />
              <span className="text-bone border hairline rounded-md px-2 py-[4px]">⇖</span>
              <span className="text-ember border border-ember/60 rounded-md px-2 py-[4px]">✥ MOVE</span>
              <span className="text-dim px-1">⟳</span>
              <span className="text-dim px-1">⤢</span>
              <span className="ml-auto text-dim hidden md:flex items-center gap-2">
                <span className="border hairline rounded-md px-2 py-[4px]">⌘Z</span>
                <span className="border hairline rounded-md px-2 py-[4px]">⌘⇧Z</span>
              </span>
            </div>

            {/* canvas */}
            <div className="relative h-[340px] md:h-[380px] overflow-hidden bg-[#0A0D13]">
              <div className="absolute inset-x-[-20%] bottom-[-30%] top-[38%] floor-grid" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 45% at 50% 62%, rgba(216,255,62,0.12), transparent 70%), radial-gradient(ellipse 50% 40% at 50% 30%, rgba(255,77,0,0.14), transparent 70%)",
                }}
              />
              {/* horizon */}
              <div className="absolute left-0 right-0 top-[38%] h-px bg-acid/30" />

              {/* car card */}
              <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative border-2 border-acid rounded-xl bg-ink/70 backdrop-blur px-6 py-5 w-[240px] text-center shadow-[0_0_60px_rgba(216,255,62,0.25)]">
                  <div className="font-mono text-[10px] tracking-[0.2em] text-acid">
                    ◈ SELECTED — ENT_CAR
                  </div>
                  {/* wireframe car glyph */}
                  <svg viewBox="0 0 200 64" className="mt-3 w-full h-[54px]">
                    <g fill="none" stroke="#D8FF3E" strokeWidth="1.6">
                      <path d="M12 44 L28 24 L72 22 L96 8 L148 10 L168 24 L188 26 L186 44 Z" />
                      <circle cx="56" cy="46" r="12" />
                      <circle cx="148" cy="46" r="12" />
                      <path d="M72 22 L70 44 M96 8 L94 44 M148 10 L146 44" opacity="0.5" />
                    </g>
                    <g fill="#FF4D00">
                      <circle cx="56" cy="46" r="3" />
                      <circle cx="148" cy="46" r="3" />
                    </g>
                  </svg>
                  <div className="mt-2 font-bold tracking-tight text-[15px]">
                    Player car
                  </div>
                  <div className="font-mono text-[10.5px] text-fog mt-1">
                    sports-car.glb · 16.2 MB · framed + lit
                  </div>
                  {/* gizmo */}
                  <div className="absolute -right-9 top-1/2 -translate-y-1/2 flex flex-col gap-1 font-mono text-[10px] font-bold">
                    <span className="w-7 h-7 grid place-items-center rounded-full bg-[#FF3B30] text-white">X</span>
                    <span className="w-7 h-7 grid place-items-center rounded-full bg-[#28C840] text-white">Y</span>
                    <span className="w-7 h-7 grid place-items-center rounded-full bg-[#0A84FF] text-white">Z</span>
                  </div>
                </div>
                {/* ground shadow */}
                <div className="mx-auto mt-2 h-[14px] w-[200px] rounded-[100%] bg-black/70 blur-[6px]" />
              </div>

              {/* badges */}
              <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.12em] bg-ink/80 border hairline rounded-full px-3 py-[6px] text-fog">
                ☀ NEUTRAL HDRI · GRID ON
              </div>
              <div className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.12em] bg-ember text-white rounded-full px-3 py-[6px] font-bold">
                ● AGENT: updating material…
              </div>

              {/* compact composer */}
              <div className="absolute bottom-3 inset-x-3">
                <div className="bg-ink/90 backdrop-blur border hairline rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] bg-steel/20 text-steel border border-steel/40 rounded-full px-2 py-[3px]">
                      ◉ CarBody ×
                    </span>
                    <span className="font-mono text-[10px] text-dim">
                      selection attached
                    </span>
                    <span className="ml-auto font-mono text-[10px] text-dim">
                      ⌘K
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-fog text-[14px] flex-1">
                      Make the paint metallic red, lower suspension…
                    </span>
                    <span className="bg-acid text-ink font-mono text-[11px] font-bold rounded-full px-3 py-[7px]">
                      ⏎ RUN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* floating chips */}
          <div className="absolute -left-3 md:-left-8 top-16 rotate-[-6deg] bg-bone text-ink font-mono text-[10.5px] font-bold tracking-[0.08em] rounded-lg px-3 py-2 shadow-xl">
            ✓ TRANSACTION 411 · ATOMIC
          </div>
          <div className="absolute -right-2 md:-right-6 bottom-24 rotate-[4deg] bg-ink border border-acid/60 font-mono text-[10.5px] tracking-[0.08em] rounded-lg px-3 py-2 text-acid shadow-xl">
            UNDO READY — ⌘Z
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="relative border-t hairline">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {[
            ["70%", "imports reach a rendered Scene"],
            ["5s", "16 MB GLB to first useful frame"],
            ["60 FPS", "edit · 30+ FPS in Play"],
            ["99.5%", "crash-free Scene sessions"],
          ].map(([v, l]) => (
            <div key={l} className="bg-ink px-6 py-6">
              <div className="font-black tracking-tight text-[30px] md:text-[36px] leading-none">
                {v}
              </div>
              <div className="mt-2 font-mono text-[11px] tracking-[0.12em] text-fog uppercase">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
