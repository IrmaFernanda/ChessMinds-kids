import image from "../assets/pngegg (1).png";

export default function Button({ label }) {
  return (
    <div className="relative gap-[25px]">
      <button className="w-[250px] h-[50px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-[10%] py-[2%] cursor-pointer bg-opacity-75 rounded-full border-amber-400 border-4 bg-blue-900 text-2xl hover:bg-blue-700 hover:bg-opacity-100 shadow-2xl shadow-indigo-500/40 text-white">
        {label}
      </button>
    </div>
  );
}
