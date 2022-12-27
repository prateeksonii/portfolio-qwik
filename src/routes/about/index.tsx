import { component$ } from "@builder.io/qwik";
import Nav from "~/components/nav";

export default component$(() => {
  return (
    <>
      <div class="animate-left overflow-hidden flex flex-col min-h-screen">
        <Nav label="About" />
        <section class="mx-auto container flex-1 grid grid-cols-2 place-items-center">
          <p class="text-lg w-[65ch] leading-normal">
            Hey, I&apos;m Prateek Soni, also known as WhiteCoal on Social Media.
            I&apos;m a full-stack web developer and UI/UX designer with more
            than 2 years of experience at IBM and Miles Technologies. Passionate
            about games and music, I&apos;m always eager to enjoy new stories
            through video games and I&apos;m always curious to know more about
            new web technologies and stay up-to-date.
          </p>
          <div>image</div>
        </section>
      </div>
    </>
  );
});
