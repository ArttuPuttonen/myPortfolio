// Date ranges for experience and education. Dates are "YYYY-MM"; an entry
// without `to` is still ongoing. Shared by the site and the PDF CV script.
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const parse = (ym) => ym.split("-").map(Number);

export const isOngoing = (entry) => !entry.to;

// "2026–present", "May–Aug 2025", "2022–2023"
export function yearRange({ from, to }) {
  const [fy, fm] = parse(from);
  if (!to) return `${fy}–present`;
  const [ty, tm] = parse(to);
  if (fy === ty) return `${months[fm - 1]}–${months[tm - 1]} ${fy}`;
  return `${fy}–${ty}`;
}

// "Feb 2026 – present", "May 2025 – Aug 2025"
export function monthRange({ from, to }) {
  const [fy, fm] = parse(from);
  const start = `${months[fm - 1]} ${fy}`;
  if (!to) return `${start} – present`;
  const [ty, tm] = parse(to);
  return `${start} – ${months[tm - 1]} ${ty}`;
}
