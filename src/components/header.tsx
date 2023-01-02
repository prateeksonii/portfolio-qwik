import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col container mx-auto justify-center items-center px-8">
      <h6 class="tracking-wide text-lg font-extralight">
        Hi! My name is Prateek Soni and I Build
      </h6>
      <h1 class="text-4xl md:text-7xl md:leading-normal text-center">
        beautiful and highly efficient solutions.
      </h1>
      <div class="md:text-2xl flex gap-4 md:gap-16 mt-8 items-center justify-center absolute bottom-32 font-head">
        <a
          href="#about"
          class="hover:text-emerald-400 transition-all cursor-pointer hover:scale-110"
        >
          About
        </a>
        <div class="w-[1px] h-8 bg-white"></div>
        <a
          href="#work"
          class="hover:text-emerald-400 transition-all cursor-pointer hover:scale-110"
        >
          Work
        </a>
        <div class="w-[1px] h-8 bg-white"></div>
        <a
          href="#contact"
          class="hover:text-emerald-400 transition-all cursor-pointer hover:scale-110"
        >
          Contact
        </a>
      </div>
    </div>
  );
});
