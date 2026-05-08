import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollAllToTop() {
  // window/body
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  document.scrollingElement && (document.scrollingElement.scrollTop = 0);

  // scroll any scrollable containers (common in layouts)
  const nodes = Array.from(document.querySelectorAll<HTMLElement>("*"));
  for (const el of nodes) {
    const style = window.getComputedStyle(el);
    const canScroll =
      (style.overflowY === "auto" || style.overflowY === "scroll") &&
      el.scrollHeight > el.clientHeight;

    if (canScroll) el.scrollTop = 0;
  }
}

function scrollToHashTarget(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const element = document.getElementById(id);
  if (!element) return false;

  element.scrollIntoView({ block: "start" });
  return true;
}

const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      if (scrollToHashTarget(location.hash)) return;

      requestAnimationFrame(() => {
        if (scrollToHashTarget(location.hash)) return;

        setTimeout(() => {
          scrollToHashTarget(location.hash);
        }, 0);
      });

      return;
    }

    // run immediately
    scrollAllToTop();

    // run again after next paint to avoid landing mid-page after re-render
    requestAnimationFrame(() => {
      scrollAllToTop();
    });

    // one more safety pass after route content mounts
    setTimeout(() => {
      scrollAllToTop();
    }, 0);
  }, [location.pathname, location.search, location.hash, location.key]);

  return null;
};

export default ScrollToTop;
