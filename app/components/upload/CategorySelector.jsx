export default function CategorySelector({ categories = [], onSelect }) {
  return (
    <div>
      <h3>Manual Category</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button type="button" onClick={() => onSelect?.(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
