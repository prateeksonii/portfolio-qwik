import { component$ } from "@builder.io/qwik";
import Layout from "./common/layout";
import { Github, LinkedIn, Mail } from "~/integrations/react/icons";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <Layout title="Contact me" id="contact">
      <div class="flex flex-col gap-4">
        <Link href="mailto:prateek_soni@outlook.com">
          Write to me at{" "}
          <span class="text-emerald-400">prateek_soni@outlook.com</span>
        </Link>
        <div class="flex items-center gap-4">
          <Mail className="h-8 w-8" />
          <LinkedIn className="h-8 w-8" />
          <Github className="h-8 w-8" />
        </div>
      </div>
    </Layout>
  );
});
