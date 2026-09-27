import { useState } from "react";

const colors = ["#ffffff", "#ffd500", "#c41e3a", "#ff5800", "#0046ad", "#009e60"];
const solved = Array(9).fill(colors[0]);

function scrambled() {
  // The centre sticker never moves on a real cube, so it stays white.
  return solved.map((c, i) => (i === 4 ? c : colors[Math.floor(Math.random() * colors.length)]));
}

export default function CubeFace() {
  const [face, setFace] = useState(scrambled);
  const isSolved = face.every((c) => c === colors[0]);

  return (
    <div className="flex items-end gap-6">
      <div aria-hidden="true" className="grid grid-cols-3 gap-[5px] rounded-[6px] bg-[#14181d] p-[5px]">
        {face.map((c, i) => (
          <span
            key={i}
            className="block size-9 rounded-[3px] transition-colors duration-300 md:size-11"
            style={{ backgroundColor: c, transitionDelay: `${i * 30}ms` }}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => setFace(isSolved ? scrambled() : solved)}
        className="link cursor-pointer text-base"
      >
        {isSolved ? "Scramble it" : "Solve it"}
      </button>
    </div>
  );
}
