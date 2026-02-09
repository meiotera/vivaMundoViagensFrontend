// import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Toggle from "../../ui/Toggle";
import { useCreateDestino } from "./useCreateDestino";

const CreateDestinoForm = ({ onCloseModal }) => {
  const { register, handleSubmit, errors, isSubmitting, watch } =
    useCreateDestino(onCloseModal);

  const promocaoAtiva = watch("Promocao");

  const renderError = (name) =>
    errors[name] ? (
      <p className="mt-1 text-xs text-red-500">{errors[name].message}</p>
    ) : null;

  return (
    <div className="max-w-4xl p-2">
      <h3 className="text-1xl font-bold mb-6 text-gray-800 border-b pb-2">
        Adicionar Novo Destino
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Seção 1: Localização */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Origem</label>
            <Input
              type="text"
              placeholder="Ex: São Paulo"
              {...register("Origem", { required: "Campo obrigatório" })}
            />
            {renderError("Origem")}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Destino</label>
            <Input
              type="text"
              placeholder="Ex: Paris"
              {...register("Destino", { required: "Campo obrigatório" })}
            />
            {renderError("Destino")}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Companhia Aérea
            </label>
            <Input
              type="text"
              placeholder="Ex: Latam"
              {...register("Companhia_Aerea", {
                required: "Campo obrigatório",
              })}
            />
            {renderError("Companhia_Aerea")}
          </div>
        </div>

        {/* Seção 2: Datas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-50 rounded-lg">
          <div>
            <label className="text-sm font-medium text-gray-700">Partida</label>
            <Input
              type="date"
              {...register("Data_de_Saida", { required: "Obrigatório" })}
            />
            {renderError("Data_de_Saida")}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Retorno</label>
            <Input
              type="date"
              {...register("Data_de_Retorno", { required: "Obrigatório" })}
            />
            {renderError("Data_de_Retorno")}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Local de Partida
            </label>
            <Input
              type="text"
              placeholder="Ex: Aeroporto GRU"
              {...register("Local_de_Partida", { required: "Obrigatório" })}
            />
            {renderError("Local_de_Partida")}
          </div>
        </div>

        {/* Seção 3: Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Preço Base
            </label>
            <Input
              type="number"
              step="0.01"
              {...register("Valor_por_Pessoa", {
                required: "Obrigatório",
                valueAsNumber: true,
              })}
            />
            {renderError("Valor_por_Pessoa")}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Parcelas
            </label>
            <Input type="number" {...register("Parcelamento")} />
            {renderError("Parcelamento")}
          </div>

          <Toggle
            title={"Destacar"}
            label={"Ative para mostrar como destaque"}
            register={register("Destaque")}
          />
        </div>

        <Toggle
          title={"Promoção ativa"}
          label={"Ative para definir preço promocional"}
          register={register("Promocao")}
        />

        {promocaoAtiva && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-green-200 bg-green-50 rounded-lg">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Preço da Promoção
              </label>
              <Input
                type="number"
                step="0.01"
                {...register("Valor_Promocional", {
                  required: "Informe o valor promocional",
                  valueAsNumber: true,
                  validate: (value) =>
                    value < watch("Valor_por_Pessoa") ||
                    "Valor promocional deve ser menor que o preço base",
                })}
              />
              {errors.Valor_Promocional && (
                <p className="text-xs text-red-500">
                  {errors.Valor_Promocional.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Início da Promoção
              </label>
              <Input
                type="datetime-local"
                {...register("Promocao_Inicio", {
                  required: "Informe a data inicial",
                })}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Fim da Promoção
              </label>
              <Input
                type="datetime-local"
                {...register("Promocao_Fim", {
                  required: "Informe a data final",
                  validate: (value) =>
                    value > watch("Promocao_Inicio") ||
                    "Data final deve ser maior que a inicial",
                })}
              />
            </div>
          </div>
        )}

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <label className="text-sm font-bold text-blue-800">
            Capa do Destino (Imagem)
          </label>
          <input
            type="file"
            accept="image/*"
            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            {...register("Imagem")}
          />
          {/* {renderError("Imagem")} */}
        </div>

        {/* Descrição */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Descrição Detalhada
          </label>
          {/* Note: Se seu Input não suportar textarea, use a tag nativa ou ajuste o componente Input */}
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            rows="3"
            {...register("Descricao", { required: "Descreva o destino" })}
          />
          {renderError("Descricao")}
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="secondary" onClick={onCloseModal} type="button">
            Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting} variant="success">
            {isSubmitting ? "Salvando..." : "Salvar Destino"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateDestinoForm;
