export default function SelectBox({ name, items }) {
  return (
    <div className="select-box">
      <label>{name}:</label>
      <select>
        {items.map((item) => (
          <option key={item.id}>{item.value}</option>
        ))}
      </select>
    </div>
  );
}
