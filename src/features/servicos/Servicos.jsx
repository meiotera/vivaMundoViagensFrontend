// import Card from "../../ui/Card";
import CardServico from "../../ui/CardServico";
import { useServicos } from "./useServicos";

const Servicos = () => {
  const { servicos } = useServicos();

  if (!servicos || servicos.length === 0) {
    return (
      <p className="text-center py-8 text-gray-500">
        Nenhum serviço disponível no momento.
      </p>
    );
  }

  return (
    <>
      {servicos.map((servico) => (
        <CardServico key={servico.id} servico={servico} />
      ))}
    </>
  );
};

export default Servicos;
