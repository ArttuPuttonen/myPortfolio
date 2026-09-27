import portrait from "../assets/img/portrait.webp";

// The cut-out photo in a plain neutral frame, like a studio portrait.
export default function Portrait({ className = "" }) {
  return (
    <figure className={`bg-photo ${className}`}>
      <img src={portrait} alt="Arttu Puttonen" width="960" height="1340" className="block h-auto w-full" />
    </figure>
  );
}
