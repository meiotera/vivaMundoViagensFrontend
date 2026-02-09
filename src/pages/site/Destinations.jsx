import { queryClient } from "../../App";
import { getDestinos } from "../../services/apiDestinations";
import Banner from "../../ui/Banner";
import Heading from "../../ui/Heading";
import Section from "../../ui/Section";
import Destinos from "../../features/destinos/Destinos";

const Destinations = () => {
  return (
    <>
      <Banner className={"flex h-36"}>
        <Heading tag="h1">Nossos destinos</Heading>
      </Banner>

      <Section>
        <Destinos />
      </Section>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  try {
    await queryClient.ensureQueryData({
      queryKey: ["destinos"],
      queryFn: getDestinos,
    });
  } catch (error) {
    console.error(error);
  }

  return null;
}

export default Destinations;
