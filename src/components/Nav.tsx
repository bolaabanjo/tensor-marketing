export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b hairline bg-ink/85 backdrop-blur-md">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 h-[60px] flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-8 h-8 bg-bone text-ink font-black text-[15px] tracking-tighter rounded-[6px] group-hover:bg-ember group-hover:text-white transition-colors">
            T
          </span>
          <span className="leading-none">
            <span className="block font-black tracking-[-0.02em] text-[17px]">
              TENSOR
            </span>
            <span className="block font-mono text-[10px] text-fog tracking-[0.18em] mt-[3px]">
              DESKTOP · macOS
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 font-mono text-[11.5px] tracking-[0.14em] text-fog">
          <a href="#thesis" className="hover:text-bone transition-colors">THESIS</a>
          <a href="#loop" className="hover:text-bone transition-colors">LOOP</a>
          <a href="#scene" className="hover:text-bone transition-colors">SCENE</a>
          <a href="#journey" className="hover:text-bone transition-colors">CAR&nbsp;DEMO</a>
          <a href="#spec" className="hover:text-bone transition-colors">SPEC</a>
          <a href="#not" className="hover:text-bone transition-colors">NOT</a>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden md:flex items-center gap-2 font-mono text-[10.5px] tracking-[0.12em] text-fog border hairline rounded-full px-3 py-[7px]">
            <span className="w-[7px] h-[7px] rounded-full bg-acid animate-blink" />
            SCENE rev 412 · LIVE
          </span>
          <a
            href="#download"
            className="font-mono text-[11.5px] tracking-[0.08em] bg-ember hover:bg-bone hover:text-ink text-white transition-colors rounded-full px-4 py-[9px] font-bold"
          >
            GET TENSOR ↓
          </a>
        </div>
      </div>
    </header>
  );
}
