import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const DOMAIN = 'https://virontechnologiesx.vercel.app';
const DEFAULT_IMAGE = `${DOMAIN}/images/viron_logo.png`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website'
}) => {
  const location = useLocation();
  const canonicalUrl = canonical
    ? (canonical.startsWith('http') ? canonical : `${DOMAIN}${canonical}`)
    : `${DOMAIN}${location.pathname}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${DOMAIN}${ogImage}`;

  useEffect(() => {
    // Title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMetaTag('meta[name="title"]', 'name', 'title', title);
    updateMetaTag('meta[name="description"]', 'name', 'description', description);

    // Canonical Tag
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);

    // Open Graph / Facebook
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', fullOgImage);

    // Twitter
    updateMetaTag('meta[property="twitter:card"]', 'property', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[property="twitter:url"]', 'property', 'twitter:url', canonicalUrl);
    updateMetaTag('meta[property="twitter:title"]', 'property', 'twitter:title', title);
    updateMetaTag('meta[property="twitter:description"]', 'property', 'twitter:description', description);
    updateMetaTag('meta[property="twitter:image"]', 'property', 'twitter:image', fullOgImage);

  }, [title, description, canonicalUrl, fullOgImage, ogType]);

  return null;
};

export default SEO;
