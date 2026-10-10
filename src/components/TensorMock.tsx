"use client";

import { useEffect, useRef, useState } from "react";

type MockTask = {
  id: string;
  label: string;
  prompt: string;
  workedFor: string;
  feedback1: string;
  feedback2: string;
  feedback3: string;
  finalLead: string;
  finalHeading: string;
  finalBody: string;
};

const TASKS: MockTask[] = [
  {
    id: "auth",
    label: "Refactor auth middleware",
    prompt:
      "Refactor the auth middleware — split session parsing, refresh rotation, and redirect handling into isolated, testable units.",
    workedFor: "Worked for 2m 41s",
    feedback1:
      "I'll split the auth middleware into focused units, keeping every existing redirect contract intact. Starting with a full read of the current flow.",
    feedback2:
      "Session parsing, refresh rotation, and redirects are tangled in one module — separating them now with narrow boundaries.",
    feedback3:
      "Units are split — verifying with tests and type checks before handoff, including legacy callback URLs.",
    finalLead:
      "Done — lib/tensor-auth.ts is now three focused units with redirect contracts untouched.",
    finalHeading: "The refactor",
    finalBody:
      "Session parsing, rotation, and redirects are independently testable — 14 new cases cover expired sessions and concurrent refreshes.",
  },
  {
    id: "webhook",
    label: "Fix checkout webhook retry",
    prompt:
      "Fix the checkout webhook retry — retries are creating duplicate provisions when the first attempt is just slow.",
    workedFor: "Worked for 1m 18s",
    feedback1:
      "I'll make webhook provisioning idempotent so a slow first attempt can't double-provision.",
    feedback2:
      "The handlers share no dedupe key — adding one keyed off the checkout ID before any entitlement write.",
    feedback3:
      "Dedupe is in — running the billing suite plus a simulated retry storm to confirm single provisioning.",
    finalLead:
      "Done — lib/tensor-billing.ts provisions exactly once per checkout, no matter how many retries arrive.",
    finalHeading: "The fix",
    finalBody:
      "Provisioning keys off checkout-id with a short claim window — 9 cases cover duplicates and out-of-order retries.",
  },
  {
    id: "hero",
    label: "Add tensor landing hero",
    prompt:
      "Add the tensor landing hero — black canvas, bold header, and a live product mock visitors can click through.",
    workedFor: "Worked for 58s",
    feedback1:
      "I'll build the hero as a black canvas with the new headline, then frame the product mock visitors can click around in.",
    feedback2:
      "Header and backdrop are set — wiring the sidebar histories so the mock reads like the real workspace.",
    feedback3:
      "Interactions are live — verifying spacing, contrast, and scroll behavior before handoff.",
    finalLead:
      "Done — app/tensor ships a black hero with the new headline and a clickable product mock.",
    finalHeading: "The hero",
    finalBody:
      "Three threads drive the mock through real state — histories are buttons, and content always matches the selection.",
  },
];

export function TensorMock() {
  const [selectedId, setSelectedId] = useState(TASKS[0].id);
  const [input, setInput] = useState("");
  const [live, setLive] = useState<Record<string, { id: number; prompt: string }[]>>({});
  const idRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const task = TASKS.find((t) => t.id === selectedId) ?? TASKS[0];
  const liveExchanges = live[selectedId] ?? [];

  function send() {
    const prompt = input.trim();
    if (!prompt) return;
    idRef.current += 1;
    const id = idRef.current;
    setLive((p) => ({ ...p, [selectedId]: [...(p[selectedId] ?? []), { id, prompt }] }));
    setInput("");
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [live, selectedId]);

  return (
    <div
      className="flex h-[540px] w-full items-center justify-center rounded-xl bg-black p-6 md:h-[680px] md:p-10"
      style={{
        backgroundImage:
          "image-set(url('/tensor/heroback-bg.avif') type('image/avif'), url('/tensor/heroback-bg.webp') type('image/webp'))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex h-full w-full overflow-hidden rounded-lg bg-black/85">
        {/* sidebar */}
        <div className="flex w-52 shrink-0 flex-col border-r border-white/10 px-3.5 pb-3.5 pt-1 md:w-56">
          <div className="flex items-center gap-2.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="mt-5 px-1">
            <p className="text-[13px] font-semibold tracking-tight text-[#EDE6D9]">Tensor</p>
          </div>
          <div className="mt-4 grid gap-1 px-1 text-[12px] text-[#EDE6D9]/90">
            <div className="rounded-md px-1 py-1 hover:bg-white/5">＋ New task</div>
            <div className="rounded-md px-1 py-1 hover:bg-white/5">Runs</div>
            <div className="rounded-md px-1 py-1 hover:bg-white/5">Pull requests</div>
          </div>
          <div className="mt-6 px-1 text-[12px]">
            <p className="font-medium text-[#EDE6D9]/40">Workspaces</p>
          </div>
          <div className="mt-3">
            <div className="px-1 text-[12px] text-[#EDE6D9]/90">⌁ cencori</div>
            <div className="mt-1.5 grid gap-1 text-[12px]" role="listbox" aria-label="Threads">
              {TASKS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="option"
                  aria-selected={t.id === selectedId}
                  onClick={() => {
                    setSelectedId(t.id);
                    setInput("");
                  }}
                  className={`truncate px-2 py-1 pl-8 text-left transition-colors ${
                    t.id === selectedId
                      ? "rounded-md bg-white/10 text-[#EDE6D9]"
                      : "text-[#EDE6D9]/45 hover:text-[#EDE6D9]/80"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="-mx-3.5 -mb-3.5 mt-auto flex items-center gap-2 border-t border-white/10 px-3.5 pb-3.5 pt-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/15 text-[10px] font-bold text-white">
              B
            </span>
            <p className="min-w-0 flex-1 truncate text-[12px] text-[#EDE6D9]/90">Bola Banjo</p>
          </div>
        </div>

        {/* thread */}
        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <div ref={scrollRef} className="scrollbar-hide min-h-0 flex-1 overflow-y-auto px-5 pb-2 pt-5 md:px-8">
            <div className="mx-auto flex w-full max-w-lg flex-col" key={task.id}>
              <p className="ml-auto w-fit max-w-[75%] rounded-[1.15rem] rounded-br-[0.4rem] border border-white bg-white px-3 py-2 text-[10px] leading-[1.45] text-black">
                {task.prompt}
              </p>
              <p className="mt-4 text-[9px] text-[#EDE6D9]/40">{task.workedFor}</p>
              <div className="my-2 border-t border-white/10" />
              <div className="grid gap-2 py-1 text-[10px] leading-relaxed">
                <p className="text-white/75">{task.feedback1}</p>
                <p className="text-[#EDE6D9]/55">▤ Read files</p>
                <p className="text-white/75">{task.feedback2}</p>
                <p className="text-[#EDE6D9]/55">✎ Edited files →</p>
                <p className="text-white/75">{task.feedback3}</p>
                <p className="text-[#EDE6D9]/55">⌁ Ran commands</p>
              </div>
              <div className="text-[10px] leading-relaxed text-white/75">
                <p>{task.finalLead}</p>
                <p className="mt-2 text-[11px] font-semibold text-white">{task.finalHeading}</p>
                <p className="mt-1">{task.finalBody}</p>
              </div>
              {liveExchanges.map((e) => (
                <p
                  key={e.id}
                  className="ml-auto mt-4 w-fit max-w-[75%] rounded-[1.15rem] rounded-br-[0.4rem] border border-white bg-white px-3 py-2 text-[10px] leading-[1.45] text-black"
                >
                  {e.prompt}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-end p-6 pb-4 pt-2 md:p-10 md:pb-4 md:pt-2">
            <form
              className="mx-auto w-full max-w-lg"
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
              <div className="flex min-h-[5rem] w-full flex-col rounded-[1.5rem] border border-white/10 bg-[#1c1c1e]">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send();
                    }
                  }}
                  placeholder="Plan, Build, Ship."
                  rows={1}
                  aria-label="Ask Tensor"
                  className="w-full resize-none bg-transparent px-[1.1rem] pb-[0.1rem] pt-[0.95rem] text-[0.75rem] leading-[1.55] text-white placeholder:text-white/30 focus:outline-none"
                />
                <div className="flex min-h-[2.8rem] items-center justify-between px-[0.55rem] pb-[0.4rem] pt-[0.2rem]">
                  <div className="flex items-center gap-1 text-[0.65rem] text-white/60">
                    <span className="rounded-[0.65rem] px-[0.4rem]">＋</span>
                    <span className="rounded-[0.65rem] px-[0.4rem]">Maximo Atlas 1.3 ⌄</span>
                    <span className="rounded-[0.65rem] px-[0.4rem]">Auto ⌄</span>
                  </div>
                  <button
                    type="submit"
                    aria-label="Send request"
                    className="grid h-[1.8rem] w-[1.8rem] place-items-center rounded-full bg-[#f0f0f2] text-[#1c1c1e] transition-transform hover:scale-105 active:scale-95"
                  >
                    ↑
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
