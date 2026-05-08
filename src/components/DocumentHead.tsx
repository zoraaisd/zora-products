import { useEffect, useId } from "react";

type MetaDefinition = {
  name?: string;
  property?: string;
  content: string;
};

type LinkDefinition = {
  rel: string;
  href: string;
};

type ScriptDefinition = {
  type?: string;
  content: string;
};

type Props = {
  title?: string;
  metas?: MetaDefinition[];
  links?: LinkDefinition[];
  scripts?: ScriptDefinition[];
};

export default function DocumentHead({ title, metas = [], links = [], scripts = [] }: Props) {
  const scopeId = useId();

  useEffect(() => {
    const previousTitle = document.title;
    const created: HTMLElement[] = [];

    if (title) {
      document.title = title;
    }

    metas.forEach((meta) => {
      const element = document.createElement("meta");
      if (meta.name) element.setAttribute("name", meta.name);
      if (meta.property) element.setAttribute("property", meta.property);
      element.setAttribute("content", meta.content);
      element.setAttribute("data-head-scope", scopeId);
      document.head.appendChild(element);
      created.push(element);
    });

    links.forEach((link) => {
      const element = document.createElement("link");
      element.setAttribute("rel", link.rel);
      element.setAttribute("href", link.href);
      element.setAttribute("data-head-scope", scopeId);
      document.head.appendChild(element);
      created.push(element);
    });

    scripts.forEach((script) => {
      const element = document.createElement("script");
      if (script.type) element.type = script.type;
      element.text = script.content;
      element.setAttribute("data-head-scope", scopeId);
      document.head.appendChild(element);
      created.push(element);
    });

    return () => {
      if (title) {
        document.title = previousTitle;
      }

      created.forEach((element) => element.remove());
    };
  }, [links, metas, scopeId, scripts, title]);

  return null;
}
