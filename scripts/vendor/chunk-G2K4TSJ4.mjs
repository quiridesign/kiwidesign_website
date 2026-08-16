import { Ub as s } from "chunk-K6WOFN2G.mjs";
var t = new WeakMap();
function i(n, e) {
  let o = t.get(e);
  if (o) return o;
  let a = [];
  if ((s(n, e, "includeInherited", "readsRawNodeData", void 0, (r) => a.push(r)), e.children))
    for (let r of e.children) {
      let c = i(n, r);
      a.push(...c);
    }
  return (t.set(e, a), a);
}
export { i as a };
//# sourceMappingURL=chunk-G2K4TSJ4.mjs.map
