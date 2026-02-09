// import { useNavigate } from "react-router-dom";
import CardViagem from "../../ui/CardViagem";
import Row from "../../ui/Row";

const PacoteCard = ({ pacote }) => {
  // const navigate = useNavigate();

  return (
    <Row>
      <CardViagem
        destino={pacote}
        ctaText="Falar com consultor"
        // onCtaClick={() => navigate(`/pacotes/${pacote.id}`)}
      />
    </Row>
  );
};

export default PacoteCard;
