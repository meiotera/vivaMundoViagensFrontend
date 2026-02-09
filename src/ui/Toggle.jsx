const Toggle = ({ register, title, label }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
      <div>
        <p className="text-sm font-medium text-gray-700">{title}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>

      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" {...register} />
        <div
          className="
        w-11 h-6 bg-gray-300 rounded-full
        peer-checked:bg-green-500
        transition-colors duration-300
        after:content-['']
        after:absolute after:top-0.5 after:left-0.5
        after:w-5 after:h-5 after:bg-white
        after:rounded-full after:transition-transform
        peer-checked:after:translate-x-5
      "
        />
      </label>
    </div>
  );
};

export default Toggle;
