export function getPrecoDestino(destino) {
  const agora = new Date();

  const inicio = destino.Promocao_Inicio
    ? new Date(destino.Promocao_Inicio)
    : null;

  const fim = destino.Promocao_Fim ? new Date(destino.Promocao_Fim) : null;

  const promocaoAtiva =
    destino.Promocao === true &&
    destino.Valor_Promocional != null &&
    inicio &&
    fim &&
    agora >= inicio &&
    agora <= fim;

  return {
    precoFinal: promocaoAtiva
      ? destino.Valor_Promocional
      : destino.Valor_por_Pessoa,

    precoOriginal: destino.Valor_por_Pessoa,
    isPromocao: promocaoAtiva,
  };
}
