export default function Ticker({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="border-y hairline bg-panel overflow-hidden">
      <div className="fade-x">
        <div className="flex w-max animate-marquee gap-0 py-[13px]">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0" aria-hidden={half === 1}>
              {row.map((t, i) => (
                <span
                  key={`${half}-${i}`}
                  className="font-mono text-[11px] tracking-[0.18em] text-fog whitespace-nowrap px-6 flex items-center gap-6"
                >
                  {t}
                  <span className="text-ember">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
