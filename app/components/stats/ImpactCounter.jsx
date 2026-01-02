export default function ImpactCounter({ label, value }) {
  return (
    <div className="impact-counter">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
