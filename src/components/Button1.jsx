export default function Button1({ color, children }) {
  return (
    <div>
      <button style={{ color: color, marginBottom: 5 }}>{children}</button>
    </div>
  );
}
