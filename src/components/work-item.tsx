import { component$, Slot } from "@builder.io/qwik";

interface WorkItemProps {
  company: string;
  position: string;
  start: string;
  end: string;
}

export default component$((props: WorkItemProps) => {
  const { company, end, position, start } = props;
  return (
    <>
      <h2 class="font-sans font-extrabold text-6xl">{company}</h2>
      <div class="text-2xl pt-1">
        {position}{" "}
        <em class="text-lg">
          ({start} - {end})
        </em>
      </div>
      <Slot />
    </>
  );
});
