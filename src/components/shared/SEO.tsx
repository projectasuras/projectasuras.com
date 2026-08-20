import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  keywords?: string | string[];
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
  nofollow?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  children?: React.ReactNode;
}

const SITE_NAME = 'Project Asuras';
const SITE_URL = 'https://projectasuras.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/dark-logo.png`;
const DEFAULT_DESCRIPTION =
  'Project Asuras is an offensive cybersecurity and intelligence firm delivering enterprise penetration testing, red teaming, security training, and custom security software.';
const DEFAULT_KEYWORDS = [
  'cybersecurity',
  'offensive security',
  'penetration testing',
  'red teaming',
  'security training',
  'vulnerability assessment',
  'DevSecOps',
  'cyber defense',
  'Project Asuras',
];

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  keywords,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  ogImageAlt = 'Project Asuras - Offensive Security & Cyber Defense',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false,
  publishedTime,
  modifiedTime,
  author,
  schema,
  children,
}: SEOProps) {
  // Format formatted title
  const formattedTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  // Format canonical URL
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${SITE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : undefined;

  // Format image URL
  const absoluteImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  // Format keywords
  const keywordsString = Array.isArray(keywords)
    ? keywords.join(', ')
    : keywords || DEFAULT_KEYWORDS.join(', ');

  // Robots directive
  const robotsDirectives: string[] = [];
  if (noindex) {
    robotsDirectives.push('noindex');
  } else {
    robotsDirectives.push('index');
  }
  if (nofollow) {
    robotsDirectives.push('nofollow');
  } else {
    robotsDirectives.push('follow');
  }
  robotsDirectives.push('max-image-preview:large', 'max-snippet:-1', 'max-video-preview:-1');
  const robotsContent = robotsDirectives.join(', ');

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      <meta name="robots" content={robotsContent} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:alt" content={ogImageAlt} />

      {/* Article specific metadata */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@projectasuras" />
      <meta name="twitter:creator" content="@projectasuras" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {children}
    </Helmet>
  );
}

export default SEO;
