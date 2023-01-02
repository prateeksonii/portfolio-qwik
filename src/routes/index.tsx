import { component$ } from "@builder.io/qwik";
import About from "~/components/about";
import Contact from "~/components/contact";
import Header from "~/components/header";
import Work from "~/components/work";

export default component$(() => {
  return (
    <div class="scroll-smooth snap-mandatory">
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  );
});
