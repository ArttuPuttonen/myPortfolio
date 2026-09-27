import { useEffect } from "react";

const base = "Arttu Puttonen";

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${base}` : `${base} | Developer for AI and automation`;
  }, [title]);
}
