import image from "../assets/pngegg (1).png";

export default function ButtonGame({ label, description }) {
  return (
    <div className="w-[400px] bg-slate-900 rounded shadow-sm p-3">
      <div>
        <h3 className="text-[25px] text-white cursor-pointer">
          {label}
        </h3>
        <label className="text-[16px] text-white">{description}</label>
      </div>
    </div>
  );
}
