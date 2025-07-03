export default function Widget({ title, value, color, icon: Icon }) {
  return (
    <div
      className={`${color} p-4 rounded-lg shadow-md text-white flex items-center gap-4`}
    >
      <div className="text-5xl opacity-70">
        <Icon />
      </div>
      <div>
        <h3 className="text-md">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
