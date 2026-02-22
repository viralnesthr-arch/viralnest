import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "p3a0k8he",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});



