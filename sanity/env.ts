// Sanity environment configuration.
// PROJECT_ID intentionally falls back to a placeholder so the app builds and
// runs on static data when Sanity has not been configured yet.

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'

/** True only when a real Sanity project has been wired up via env vars. */
export const isSanityConfigured =
  Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) &&
  projectId !== 'placeholder' &&
  !projectId.includes('your_project_id')
