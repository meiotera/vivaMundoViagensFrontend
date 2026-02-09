import React from "react";
import Banner from "../../ui/Banner";
import Section from "../../ui/Section";
import Heading from "../../ui/Heading";
import Pacotes from "../../features/pacotes/pacotes";
import { queryClient } from "../../App";
import { getPacotes } from "../../services/apiPacotes";

const Packages = () => {
  return (
    <>
      <Banner className={"flex h-36"}>
        <Heading tag="h1">Nossos pacotes</Heading>
      </Banner>

      <Section>
        <Pacotes />
      </Section>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  try {
    await queryClient.ensureQueryData({
      queryKey: ["pacotes"],
      queryFn: getPacotes,
    });
  } catch (error) {
    console.error(error);
  }

  return null;
}

export default Packages;
