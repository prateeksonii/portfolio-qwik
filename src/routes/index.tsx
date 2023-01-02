import { component$ } from "@builder.io/qwik";
import About from "~/components/about";
import Header from "~/components/header";
import Work from "~/components/work";

export default component$(() => {
  return (
    <>
      <Header />
      <About />
      <Work />
    </>
  );
});
