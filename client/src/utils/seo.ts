import { PageId } from '../types';
import { SEO_PAGES, normalizePageId, getPagePath } from '../data/seoData';

const BASE_URL = 'https://aptivoai.in';

/**
 * Sets or creates a meta tag by name or property
 */
function setMetaTag(selector: string, attributeName: string, attributeValue: string, content: string) {
  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Sets or creates a link tag (like canonical)
 */
function setLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

/**
 * Injects or updates Schema.org JSON-LD structured data for the active page
 */
function setJsonLdSchema(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

/**
 * Updates full SEO meta tags and Schema.org structured data whenever the page changes
 */
export function updatePageSeo(pageId: PageId) {
  const meta = SEO_PAGES[pageId] || SEO_PAGES.home;

  // 1. Document Title
  document.title = meta.title;

  // 2. Standard Meta Tags
  setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
  setMetaTag('meta[name="keywords"]', 'name', 'keywords', meta.keywords.join(', '));
  setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  setMetaTag('meta[name="author"]', 'name', 'author', 'Aptivo AI (Founded by Pritam Lohar)');

  // 3. Canonical URL
  setLinkTag('canonical', meta.canonicalUrl);

  // 4. Open Graph Tags (Facebook, LinkedIn, Discord, etc.)
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.description);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', meta.canonicalUrl);
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', meta.ogType);
  setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Aptivo AI');
  setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');
  if (meta.ogImage) {
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', meta.ogImage);
  }

  // 5. Twitter Card Tags
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
  if (meta.ogImage) {
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', meta.ogImage);
  }

  // 6. Structured Data: Organization & Founder Person Entity
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Aptivo AI',
    url: BASE_URL,
    logo: `${BASE_URL}/aptivo-logo.png`,
    founder: {
      '@type': 'Person',
      '@id': `${BASE_URL}/#founder`,
      name: 'Pritam Lohar',
      jobTitle: 'Founder & Architect',
      url: `${BASE_URL}/company`,
      image: `${BASE_URL}/prittt.jpg`,
      sameAs: [
        'https://www.linkedin.com/in/pritam-lohar',
        'https://github.com/pritamsklohar'
      ],
      description: 'Founder & Architect of Aptivo AI, building autonomous career intelligence infrastructure and custom AI software.',
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'Full Stack Software Engineering',
        'Career Intelligence Systems',
        'Cloud Architecture'
      ]
    },
    sameAs: [
      'https://www.linkedin.com/in/pritam-lohar'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'pritam@aptivo.ai',
      contactType: 'customer support'
    }
  };

  // 7. Structured Data: Breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: meta.breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.path === '/' ? '' : crumb.path}`
    }))
  };

  // 8. Structured Data: Page-specific schema
  const pageSchema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': meta.schemaType,
    name: meta.title,
    description: meta.description,
    url: meta.canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Aptivo AI',
      url: BASE_URL
    },
    ...meta.specificSchema
  };

  // Inject composite JSON-LD graph into document head
  setJsonLdSchema('aptivo-seo-graph', {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, breadcrumbSchema, pageSchema]
  });
}

export { normalizePageId, getPagePath };
