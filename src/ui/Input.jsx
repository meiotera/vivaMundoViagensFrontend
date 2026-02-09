const Input = ({ type = "text", id, name, placeholder, ...props }) => {
  return (
    <input
      {...props}
      // ref={ref}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-viagem-laranja focus:ring-2 focus:ring-orange-100 outline-none transition-all placeholder:text-gray-400"
    />
  );
};
// Removido o parêntese extra que estava dentro da função

export default Input;
