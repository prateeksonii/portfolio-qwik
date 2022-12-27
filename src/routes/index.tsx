import { component$, useStore } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const navigate = useNavigate();
  const state = useStore({
    activeClasses:
      "min-h-screen flex flex-col container mx-auto justify-center px-8",
  });

  return (
    <div class={state.activeClasses}>
      <h6 class="tracking-wide text-lg font-extralight">Hi! My name is</h6>
      <h1 class="text-4xl md:text-8xl">Prateek Soni</h1>
      <p class="mt-4 md:text-2xl">
        I'm an experienced software developer who loves solving problems.
      </p>
      <div class="md:text-3xl flex gap-4 md:gap-16 mt-8 items-center justify-center absolute bottom-32">
        <button
          onClick$={() => {
            state.activeClasses += " animate-left-out";
            setTimeout(() => {
              navigate.path = "about";
            }, 200);
          }}
          class="hover:text-emerald-400 transition-all cursor-pointer hover:scale-110"
        >
          About
        </button>
        <div class="w-[1px] h-8 bg-white"></div>
        <a class="hover:text-emerald-400 transition-all cursor-pointer hover:scale-110">
          Work
        </a>
        <div class="w-[1px] h-8 bg-white"></div>
        <a class="hover:text-emerald-400 transition-all cursor-pointer hover:scale-110">
          Contact
        </a>
      </div>
    </div>
  );
});
