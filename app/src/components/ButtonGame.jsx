export default function ButtonGame({ label, description }) {
  return (
    <div className="w-[400px] bg-green-800 rounded shadow-sm p-3">
      <div>
        <h3 className="text-[25px] text-white cursor-pointer">
          {label}
        </h3>
        <label className="text-[16px] text-black">{description}</label>
      </div>
    </div>
  );
}
