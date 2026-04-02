import { useEffect } from "react";

const SITE_NAME = "Nashnal Trend Decor LLP";
const SITE_URL = "https://nashnal.com";
const DEFAULT_IMAGE = `${SITE_URL}/nashnal-logo.png`;

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  robots?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const upsertMeta = (selector: string, attributes: Record<string, string>, content: string) => {
  let meta = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => meta?.setAttribute(key, value));
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let link = document.head.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

const Seo = ({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  robots = "index,follow",
  jsonLd,
}: SeoProps) => {
  useEffect(() => {
    const url = new URL(path, SITE_URL).toString();
    const schemaId = "seo-json-ld";

    document.title = title;

    upsertMeta("meta[name='description']", { name: "description" }, description);
    upsertMeta("meta[name='author']", { name: "author" }, SITE_NAME);
    upsertMeta("meta[name='robots']", { name: "robots" }, robots);
    upsertMeta("meta[name='theme-color']", { name: "theme-color" }, "#141414");

    upsertMeta("meta[property='og:site_name']", { property: "og:site_name" }, SITE_NAME);
    upsertMeta("meta[property='og:title']", { property: "og:title" }, title);
    upsertMeta("meta[property='og:description']", { property: "og:description" }, description);
    upsertMeta("meta[property='og:type']", { property: "og:type" }, type);
    upsertMeta("meta[property='og:url']", { property: "og:url" }, url);
    upsertMeta("meta[property='og:image']", { property: "og:image" }, image);

    upsertMeta("meta[name='twitter:card']", { name: "twitter:card" }, "summary_large_image");
    upsertMeta("meta[name='twitter:title']", { name: "twitter:title" }, title);
    upsertMeta("meta[name='twitter:description']", { name: "twitter:description" }, description);
    upsertMeta("meta[name='twitter:image']", { name: "twitter:image" }, image);

    upsertLink("canonical", url);

    const existingScript = document.getElementById(schemaId);
    if (existingScript) {
      existingScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement("script");
      script.id = schemaId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [description, image, jsonLd, path, robots, title, type]);

  return null;
};

export default Seo;