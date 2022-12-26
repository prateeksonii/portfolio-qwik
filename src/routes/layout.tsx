import { component$, Slot } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <Slot />;
});

export const head: DocumentHead = {
  title: "Prateek Soni",
  meta: [
    {
      name: "description",
      content: "Prateek Soni portfolio",
    },
  ],
};
