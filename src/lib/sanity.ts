import { createClient, type SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { apiVersion, dataset, projectId, isSanityConfigured } from '../../sanity/env'

export { isSanityConfigured }

/**
 * Sanity read client. `null` when Sanity is not configured, so callers can
 * gracefully fall back to the bundled static data.
 */
export const client: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: 'published',
    })
  : null

const builder = client ? imageUrlBuilder(client) : null

/** Build an optimised image URL from a Sanity image source. Returns '' if unconfigured. */
export function urlForImage(source: SanityImageSource): string {
  if (!builder) return ''
  return builder.image(source).auto('format').fit('max').url()
}
