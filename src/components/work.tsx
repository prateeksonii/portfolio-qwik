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
                I was recognized for top performance through promotion and
                selection for high-priority tasks.
              </li>
              <li>
                I refined the system architecture to easily handle 20 million
                requests per day.
              </li>
              <li>
                I added various new functionalities to multiple microservices.
                This included features such as generating daily reports,
                archiving data that is more than 30 days old and fulfilling new
                requirements.
              </li>
              <li>
                I also worked on an AI-powered chat bot that is used by over
                10,000 employees every day. The chat bot is used for tasks such
                as applying leaves, sending notifications and answer basic
                queries."
              </li>
            </ul>
          </WorkItem>
        </li>
      </ul>
    </Layout>
  );
});
