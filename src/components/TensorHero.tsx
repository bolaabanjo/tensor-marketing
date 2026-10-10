export default function TensorHero() {
  return (
    <div className="relative isolate h-screen overflow-hidden bg-white text-black [color-scheme:light]">
      <main className="relative flex h-full flex-col justify-center overflow-hidden md:justify-start">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-full max-w-5xl -translate-x-1/2 px-5 md:px-8"
        >
          <div className="relative h-full">
            <span className="absolute inset-y-0 left-0 w-px bg-black/25" />
            <span className="absolute inset-y-0 right-0 w-px bg-black/25" />
          </div>
        </div>
        <div className="relative z-10 flex flex-none flex-col justify-center gap-6 pt-8 md:min-h-0 md:flex-1 md:gap-0 md:pt-20">
          <section className="relative mx-auto w-full max-w-5xl shrink-0 px-5 pb-10 pt-10 text-left md:px-8 md:pb-12 md:pt-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h1 className="max-w-3xl text-balance text-3xl font-normal leading-[1.15] tracking-tight text-black sm:text-4xl">
                The Agentic Development Environment for the ambitious
              </h1>
              <div className="flex shrink-0 justify-start md:justify-end md:pb-1">
                <a
                  href="#waitlist"
                  className="inline-flex min-h-[2.2rem] items-center rounded-full bg-black px-4 text-[0.92rem] font-medium tracking-[-0.005em] text-white transition-colors hover:bg-black/80"
                >
                  Join waitlist
                </a>
              </div>
            </div>
          </section>
          <section className="relative mx-auto w-full max-w-5xl flex-none px-5 md:px-8">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 z-10 h-px w-screen -translate-x-1/2 bg-black/25"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-px w-screen -translate-x-1/2 bg-black/25"
            />
            <video
              src="/tensor/hero-demo.mp4"
              className="block h-auto w-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              preload="auto"
            />
          </section>
        </div>

        <div className="mx-auto flex w-full max-w-5xl shrink-0 items-center justify-between px-5 pb-4 pt-8 md:px-8 md:pt-2">
          <div className="flex items-center gap-5">
            <a
              href="https://x.com/tensorade"
              target="_blank"
              rel="noreferrer"
              aria-label="Tensor on X"
              className="text-black/50 transition-colors hover:text-black"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/cencori"
              target="_blank"
              rel="noreferrer"
              aria-label="Cencori on LinkedIn"
              className="text-black/50 transition-colors hover:text-black"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <span className="text-xs text-black/40">© 2026 Cencori, Inc.</span>
        </div>
      </main>
    </div>
  );
}
