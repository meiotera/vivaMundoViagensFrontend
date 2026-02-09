import Button from "./Button";

// Adicionamos a prop onClose para o botão Cancelar funcionar
const Form = ({ children, onSubmit, titleForm = "", onClose }) => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="p-8">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-xl font-bold text-gray-800">{titleForm}</h2>
          {/* Botão X para fechar (opcional) */}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {children}

          <div className="md:col-span-2 flex justify-end gap-4 mt-6 pt-6 border-t">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose} // Agora o botão cancelar realmente fecha o form
              className="px-6 py-2.5 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-all cursor-pointer"
            >
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
