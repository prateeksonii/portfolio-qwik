import { component$ } from "@builder.io/qwik";
import Layout from "./common/layout";

export default component$(() => {
  return (
    <Layout id="about" title="About">
      <section class="grid grid-cols-2">
        <article class="text-lg w-[65ch] leading-relaxed">
          Hey, I&apos;m Prateek Soni, also known as WhiteCoal on Social Media.
          I&apos;m a full-stack web developer and UI/UX designer with more than
          2 years of experience at IBM and Miles Technologies. Passionate about
          games and music, I&apos;m always eager to enjoy new stories through
          video games and I&apos;m always curious to know more about new web
          technologies and stay up-to-date.
        </article>
        <div>image</div>
      </section>
    </Layout>
  );
});
