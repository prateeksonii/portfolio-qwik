import { component$ } from "@builder.io/qwik";
import Layout from "./common/layout";

export default component$(() => {
  return (
    <Layout id="about" title="About">
      <section class="grid grid-cols-2">
        <article class="text-lg w-[65ch] leading-relaxed flex flex-col gap-4">
          <p>
            As a software developer with over 2 years of experience, I have a
            strong foundation in computer science principles and a track record
            of delivering successful projects. I have experience in a variety of
            programming languages, including C++, Java, and Python, and have
            worked on both front-end and back-end development. I am highly
            skilled in problem-solving and constantly strive to learn and
            improve my technical abilities.
          </p>
          <p>
            In my previous roles, I have successfully implemented software
            solutions for clients and have consistently received positive
            feedback for my attention to detail and ability to deliver
            high-quality work on time. I am excited to continue growing as a
            software developer and am eager to take on new challenges and
            responsibilities.
          </p>
        </article>
        <div>image</div>
      </section>
    </Layout>
  );
});
