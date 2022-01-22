import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";

export const config = {
  // Find your project ID and dataset in 'sanity.json' in your studio project.
  // These are considered 'public', but you can use environment variables.
  // If you want differ between local dev and production.
  // https://nextjs.org/docs/basic-features/environment-variables

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",

  // Set useCdn to 'false' if your application require the freshest possible
  // Data always (potentially slightly slower and a bit more expensive).
  // Authenticated request (like preview) will always bypass the CDN

  useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data to the getProps page functions
export const sanityClient = createClient(config);

// Set up helper function for generating Image URLs with only the asset reference data in your docs.
// Read more: https://www.sanity.io/docs/image-url

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
