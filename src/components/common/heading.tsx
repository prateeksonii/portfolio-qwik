import { component$ } from "@builder.io/qwik";

interface HeadingProps {
  title: string;
}

export default component$((props: HeadingProps) => {
  return <h1 class="text-4xl pb-8">{props.title}</h1>;
});
