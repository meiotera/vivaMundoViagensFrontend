import CardViagem from "../../ui/CardViagem";
import Row from "../../ui/Row";

const BannerDestino = ({ destino }) => {
  return (
    <Row>
      <CardViagem destino={destino} ctaText="Falar com consultor" />
    </Row>
  );
};

export default BannerDestino;
