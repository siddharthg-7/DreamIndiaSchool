import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2023-05-03';

// Only instantiate the client if projectId is provided
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // `false` if you want to ensure fresh data
    })
  : null;

/**
 * Helper to check if Sanity is configured and active
 */
export const isSanityConfigured = () => {
  return !!client;
};

/**
 * Fetch notices from Sanity with absolute error tolerance.
 * Falls back to null if fetch fails or Sanity is not configured.
 */
export async function getSanityNotices() {
  if (!client) return null;
  try {
    const query = `*[_type == "notice"] | order(date desc) {
      date,
      category,
      title,
      desc,
      linkText,
      iconName
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : null;
  } catch (error) {
    console.error('Error fetching notices from Sanity:', error);
    return null;
  }
}

/**
 * Fetch FAQs from Sanity.
 * Falls back to null if fetch fails or Sanity is not configured.
 */
export async function getSanityFAQs() {
  if (!client) return null;
  try {
    const query = `*[_type == "faq"] | order(_createdAt asc) {
      q,
      a
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : null;
  } catch (error) {
    console.error('Error fetching FAQs from Sanity:', error);
    return null;
  }
}

/**
 * Fetch Featured Programs from Sanity.
 * Falls back to null if fetch fails or Sanity is not configured.
 */
export async function getSanityPrograms() {
  if (!client) return null;
  try {
    // We fetch the image URL using Sanity's asset reference
    const query = `*[_type == "featuredProgram"] | order(_createdAt asc) {
      title,
      category,
      desc,
      "image": image.asset->url,
      iconName
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : null;
  } catch (error) {
    console.error('Error fetching programs from Sanity:', error);
    return null;
  }
}
