import React from "react";

// Adicionamos 'type' e 'variant' para dar flexibilidade
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  ...props
}) => {
  // Mapeamento de estilos por variante
  const variants = {
    primary: "bg-primary hover:bg-orange-400 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-700",
    danger: "bg-red-500 hover:bg-red-400 text-white",
    outline: "border border-orange-400 text-orange-400 hover:bg-orange-50",
    success:
      "rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700",
  };

  return (
    <button
      {...props} // Passa props extras (ex: disabled, id, className)
      type={type} // Define se é 'submit' ou 'button'
      onClick={onClick} // Ação que será executada
      className={`py-2 px-4 rounded-md transition-all cursor-pointer font-medium ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
