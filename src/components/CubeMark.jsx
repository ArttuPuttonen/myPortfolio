// A 3×3 cube face. Plain ink at rest; when the surrounding `.group` is hovered
// or focused, the stickers flip to a scrambled face in real cube colours.
const scramble = ["#ff5800", "#0046ad", "#ffd500", "#009e60", "#ffffff", "#c41e3a", "#0046ad", "#ffd500", "#009e60"];

export default function CubeMark({ size = 18 }) {
  const cell = (size - 2 * 2) / 3;
  return (
    <span
      aria-hidden="true"
      className="grid shrink-0 grid-cols-3"
      style={{ width: size, height: size, gap: 2 }}
    >
      {scramble.map((color, i) => (
        <span
          key={i}
          className="bg-ink transition-colors duration-200 group-hover:bg-(--c) group-focus-visible:bg-(--c)"
          style={{
            width: cell,
            height: cell,
            borderRadius: 1,
            "--c": color,
            transitionDelay: `${i * 25}ms`,
          }}
        />
      ))}
    </span>
  );
}
