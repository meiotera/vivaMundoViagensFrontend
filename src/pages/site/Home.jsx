import { getDestaques, getOfertas } from "../../services/apiDestinations";
import { getServicos } from "../../services/apiServicos";

// import Banner from "../../ui/Banner";
import Banner from "../../ui/Banner";
import Heading from "../../ui/Heading";
import Section from "../../ui/Section";
import Ofertas from "../../features/ofertas/Ofertas";
import Button from "../../ui/Button";
import Destaques from "../../features/destaques/Destaques";
import Servicos from "../../features/servicos/Servicos";

import { queryClient } from "../../App";
import { Toolbox } from "lucide-react";
import { Star } from "lucide-react";
import { Flame } from "lucide-react";

const Home = () => {
  return (
    <>
      <Banner background={"../banner.jpg"} className={"flex h-96"}>
        <Heading tag="h1">
          Movimento <br /> é o nosso destino!
        </Heading>
      </Banner>

      <Section
        icon={<Flame size={18} />}
        title="Ofertas Imperdíveis"
        className={"flex flex-nowrap mt-4 gap-6"}
      >
        <Ofertas />
      </Section>

      <Banner className={"flex flex-col items-center justify-center uppercase"}>
        <Heading tag="h2">receba ofertas exclusivas</Heading>
        <Button>Fazer parte do grupo</Button>
      </Banner>

      <Section
        icon={<Star size={18} />}
        title="Destaques"
        className="
        grid
        grid-cols-1
        gap-4
        mt-4

        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-4

        md:auto-rows-[180px]
        lg:auto-rows-[220px]
      "
      >
        <Destaques />
      </Section>

      <Section
        className="mt-4 gap-4 justify-items-center grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1"
        icon={<Toolbox size={18} />}
        title="Nós te ajudamos"
      >
        <Servicos />
      </Section>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  try {
    await queryClient.ensureQueryData({
      queryKey: ["ofertas"],
      queryFn: getOfertas,
    });
  } catch (error) {
    console.error("Failed to load ofertas:", error);
  }

  try {
    await queryClient.ensureQueryData({
      queryKey: ["destaques"],
      queryFn: getDestaques,
    });
  } catch (error) {
    console.error("Failed to load destaques:", error);
  }

  try {
    await queryClient.ensureQueryData({
      queryKey: ["servicos"],
      queryFn: getServicos,
    });
  } catch (error) {
    console.error("Failed to load servicos:", error);
  }

  return null;
}

export default Home;
