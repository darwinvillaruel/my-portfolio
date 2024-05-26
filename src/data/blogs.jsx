const blogs = [
  {
    title: "Integrating Ironclad with Linear via Zapier",
    overview:
      "The goal of this project was to automate the process of creating projects in Linear when specific events occur in Ironclad, an advanced contract lifecycle management platform. Given that Linear’s integration in Zapier does not support a direct action to create a project, a workaround using webhooks was implemented.",
    challengesTitle: [
      "Limited Zapier Actions",
      "Data Synchronization",
      "Automation",
    ],
    challenges: [
      "Zapier's integration for Linear did not include an action to create a project directly.",
      "Ensuring that the data from Ironclad was accurately and efficiently transferred to Linear.",
      "Creating a seamless and automated workflow to reduce manual intervention.",
    ],
    approach:
      "To overcome the limitations, a webhook was used to bridge the gap between Ironclad and Linear. Here’s a step-by-step breakdown of the solution:",
    solutionsTitle: [
      "Trigger in Ironclad",
      "Zapier Webhook Configuration",
      "Project Creation in Linear",
      "Testing and Validation",
      "Deployment and Monitoring",
    ],
    process: [
      "Event Identification: Identify the specific events in Ironclad that should trigger the creation of a project in Linear. This could be the approval of a contract, a new contract submission, or any other relevant event.",
      "Webhook Setup: Configure Ironclad to send a webhook when the identified event occurs. This webhook would carry the necessary data required to create a project in Linear.",
      "Webhook Catch Hook: In Zapier, set up a new Zap with the Webhooks by Zapier trigger set to Catch Hook. This will be the endpoint that receives the data from Ironclad.",
      "Data Parsing: Ensure that the webhook data from Ironclad is correctly parsed in Zapier. Map out the fields needed for creating a project in Linear (e.g., project name, description, due date, etc.).",
      "Custom Request Setup: Use Zapier's Webhooks by Zapier action to send a custom POST request to Linear's API to create a new project.",
      "API Authentication: Ensure that the request includes necessary authentication, typically via an API token from Linear.",
      "Request Payload: Structure the JSON payload with the required parameters for project creation. The payload would include fields like name, description, team_id, and any other relevant project details.",
      "Initial Tests: Run several tests to ensure that the webhook from Ironclad triggers correctly and that the project is created in Linear with the correct data.",
      "Error Handling: Implement error handling in Zapier to manage cases where the webhook might fail or return errors.",
      "Live Deployment: Once testing is complete and the workflow is validated, deploy the integration.",
      "Continuous Monitoring: Set up monitoring to ensure the integration runs smoothly, and set up alerts for any failures or anomalies.",
    ],
    results:
      "This project demonstrates a successful workaround using webhooks to integrate Ironclad with Linear via Zapier, despite the limitations of existing actions in Zapier’s Linear integration. By leveraging custom webhooks and API calls, the solution not only achieved the desired automation but also provided a reliable and scalable process for future needs.",
  },
];

export default blogs;
