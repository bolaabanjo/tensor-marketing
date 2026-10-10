import Reveal from "./Reveal";

const principles = [
  {
    n: "01",
    title: "Artifact is primary",
    body: "When Scene is active, the Scene gets the space. No Git chrome, no file trees competing with the viewport.",
  },
  {
    n: "02",
    title: "One Scene, two operators",
    body: "Human and agent share entity IDs, persistence, and undo history. No hidden parallel representation.",
  },
  {
    n: "03",
    title: "Direct manipulation is context",
    body: "Select CarBody, say “make this metallic red.” Selection rides along as a removable composer chip.",
  },
  {
    n: "04",
    title: "Permission is explicit",
    body: "Native picker or drag-and-drop grants access. Tensor never silently enumerates your Downloads.",
  },
  {
    n: "05",
    title: "Changes are reversible",
    body: "Every agent transaction checkpoints. Every gesture coalesces to one undo. Failures leave no half-state.",
  },
  {
    n: "06",
    title: "First import looks intentional",
    body: "Framed, lit, grounded, scaled. Never off-screen, microscopic, unlit, or clipped.",
  },
];

export default function Thesis() {
  return (
    <section id="thesis" className="relative border-b hairline">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20 md:py-28">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-ember">
            <span className="w-8 h-px bg-ember" /> 01 — PRODUCT THESIS
          </div>
          <h2 className="mt-6 max-w-[16ch] font-black tracking-[-0.03em] leading-[0.95] text-[clamp(2.4rem,5.4vw,4.6rem)]">
            Conversation beside the artifact is{" "}
            <span className="font-display italic font-normal">over.</span>
          </h2>
          <p className="mt-6 max-w-[62ch] text-fog text-[16px] md:text-[18px] leading-[1.7]">
            Most AI dev tools park a chat panel next to your work. Tensor flips
            it: the artifact is the workspace. Language is a command interface
            embedded in the work — not a destination you must return to. The
            full transcript stays for history and approvals, but moment-to-moment
            creation lives in the viewport.
          </p>
          <div className="mt-8 inline-flex items-start gap-4 border-l-2 border-ember pl-5">
            <p className="font-display italic text-[20px] md:text-[26px] leading-[1.35] max-w-[46ch]">
              “Tensor is a shared live environment where humans and AI directly
              manipulate the same work together.”
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border hairline rounded-2xl overflow-hidden">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={(i % 3) * 90} className="bg-panel">
              <div className="p-7 h-full hover:bg-panel2 transition-colors group">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-dim">
                    {p.n}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-line group-hover:bg-acid transition-colors" />
                </div>
                <h3 className="mt-5 font-extrabold tracking-tight text-[18px]">
                  {p.title}
                </h3>
                <p className="mt-3 text-fog text-[14.5px] leading-[1.65]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
