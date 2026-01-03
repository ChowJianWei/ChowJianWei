export default function Button({ children, variant = 'primary', ...props }) {
  const className = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
  return (
    <button className={className} type="button" {...props}>
      {children}
    </button>
  );
}
