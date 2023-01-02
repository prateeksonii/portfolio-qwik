import { component$ } from "@builder.io/qwik";
import Layout from "./common/layout";
import WorkItem from "./work-item";

export default component$(() => {
  return (
    <Layout id="work" title="Work Experience">
      <ul class="flex flex-col gap-16">
        <li>
          <WorkItem
            company="Miles Technologies"
            position="Software Developer"
            start="Nov, 2022"
            end="Present"
          >
            <ul class="list-disc list-inside pt-4 text-lg">
              <li>
                Worked as a full stack developer with Angular and .NET Core
              </li>
            </ul>
          </WorkItem>
        </li>
        <li>
          <WorkItem
            company="IBM"
            position="Application Developer"
            start="Jan, 2021"
            end="Oct, 2022"
          >
            <ul class="list-disc list-inside pt-4 text-lg leading-relaxed">
              <li>Worked as a backend developer with Spring boot.</li>
              <li>
                Recognized for top performance through promotion and selection
                for high-priority tasks.
              </li>
              <li>
                Optimized system architecture to easily handle 20 million
                requests per day.
              </li>
              <li>
                Added various new functionalities to multiple microservices.
                Worked on AI-powered chat bot used by 5000+ employees daily.
              </li>
            </ul>
          </WorkItem>
        </li>
      </ul>
    </Layout>
  );
});
