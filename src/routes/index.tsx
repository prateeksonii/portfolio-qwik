import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col container mx-auto justify-center px-8">
      <h6 class="tracking-wide text-lg font-extralight">Hi! My name is</h6>
      <h1 class="text-4xl md:text-8xl">Prateek Soni</h1>
      <p class="mt-4 md:text-2xl">
        I'm an experienced software developer who loves solving problems.
      </p>
      <div class="md:text-3xl flex gap-4 md:gap-16 mt-8 items-center justify-center absolute bottom-32">
        <h4 class="hover:text-emerald-400 transition-all cursor-pointer">
          About
        </h4>
        <div class="w-[1px] h-8 bg-white"></div>
        <h4 class="hover:text-emerald-400 transition-all cursor-pointer">
          Work
        </h4>
        <div class="w-[1px] h-8 bg-white"></div>
        <h4 class="hover:text-emerald-400 transition-all cursor-pointer">
          Contact
        </h4>
      </div>
    </div>
  );
});
