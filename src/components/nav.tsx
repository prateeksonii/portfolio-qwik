import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface NavProps {
  label: string;
}

export default component$((props: NavProps) => {
  return (
    <nav class="mx-auto container py-8 flex gap-8 items-center">
      <Link href="..">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </Link>
      <h1 class="text-4xl">{props.label}</h1>
    </nav>
  );
});
