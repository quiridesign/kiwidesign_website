import { a as n } from "chunk-W774OHJB.mjs";
import { e as a } from "chunk-WLHSDIGQ.mjs";
var r = a(n(), 1);
function o() {
  return document.body.dataset.framerTheme === "dark";
}
function u(t) {
  let e = new MutationObserver(t);
  return (
    e.observe(document.body, { attributes: !0, attributeFilter: ["data-framer-theme"] }),
    () => e.disconnect()
  );
}
function c() {
  return (0, r.useSyncExternalStore)(u, o);
}
export { o as a, c as b };
//# sourceMappingURL=chunk-DNC3WC76.mjs.map
