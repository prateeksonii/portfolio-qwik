import { component$, Slot } from "@builder.io/qwik";
import Heading from "./heading";

interface LayoutProps {
  title: string;
  id?: string;
}

export default component$((props: LayoutProps) => {
  return (
    <div id={props.id} class="flex flex-col min-h-screen">
      <section class="mx-auto container flex-1 flex flex-col justify-center">
        <Heading title={props.title} />
        <Slot />
      </section>
    </div>
  );
});
