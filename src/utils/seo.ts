/**
 * Dynamic SEO and Metadata Manager
 * Updates document head, OpenGraph, Twitter, and canonical tags on client route transitions.
 */

export interface SEOMetadata {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
}

export function updatePageSEO({ title, description, canonicalPath = '', ogImage }: SEOMetadata) {
  // 1. Update Title
  if (title) {
    document.title = title;
    const ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const twTitle = document.getElementById('twitter-title');
    if (twTitle) twTitle.setAttribute('content', title);
  }

  // 2. Update Description
  if (description) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
    const ogDesc = document.getElementById('og-desc');
    if (ogDesc) ogDesc.setAttribute('content', description);
    const twDesc = document.getElementById('twitter-desc');
    if (twDesc) twDesc.setAttribute('content', description);
  }

  // 3. Update Canonical & OG URL
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://solugans.com';
  const fullUrl = `${origin}/${canonicalPath ? `#/${canonicalPath.replace(/^\/+/, '')}` : ''}`;

  const canonicalLink = document.getElementById('canonical-link');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', fullUrl);
  }
  const ogUrl = document.getElementById('og-url');
  if (ogUrl) {
    ogUrl.setAttribute('content', fullUrl);
  }

  // 4. Update OG / Twitter Image if custom
  if (ogImage) {
    const fullImgUrl = ogImage.startsWith('http') ? ogImage : `${origin}${ogImage}`;
    const ogImgEl = document.getElementById('og-image');
    if (ogImgEl) ogImgEl.setAttribute('content', fullImgUrl);
    const twImgEl = document.getElementById('twitter-image');
    if (twImgEl) twImgEl.setAttribute('content', fullImgUrl);
  }
}
