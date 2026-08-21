import { g as o } from "chunk-H2IHWR7I.mjs";
import { b as n } from "chunk-4JY5UMT2.mjs";
function i(e) {
  let t = new Date();
  return (t.setDate(t.getDate() + e), o(t, "yyyy-MM-dd"));
}
function s(e) {
  let [t, a, r] = e.split("-").map(Number);
  return (n(t && a && r, "day must be a valid yyyy-MM-dd string"), new Date(t, a - 1, r));
}
export { i as a, s as b };
//# sourceMappingURL=chunk-VNTEUYRZ.mjs.map
