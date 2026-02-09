import CardBase from "./CardBase";

const CardServico = ({ servico }) => {
  const { Imagem, Titulo, Descricao } = servico;

  const imageUrl = `http://localhost:1337${Imagem.url}`;
  return (
    <CardBase
      imageUrl={imageUrl}
      title={Titulo}
      description={Descricao}
      // footer={
      //   <span className="text-sm text-orange-500 font-semibold">
      //     Saiba mais →
      //   </span>
      // }
    />
  );
};

export default CardServico;
