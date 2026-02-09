import CardBase from "./CardBase";

const CardServico = ({ servico }) => {
  const { Imagem, Titulo, Descricao } = servico;

  const API_URL = import.meta.env.VITE_API_URL;

  const imageUrl = Imagem?.url
    ? Imagem.url.startsWith("http")
      ? Imagem.url
      : `${API_URL}${Imagem.url}`
    : "/placeholder.jpg";

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
