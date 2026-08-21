import { Pa as d, Ta as y, xb as c } from "chunk-PJ6FAON2.mjs";
import { Tc as a, gk as m, um as l, ze as p } from "chunk-QIEZ7GMD.mjs";
import { a as u } from "chunk-W774OHJB.mjs";
import { e as k } from "chunk-WLHSDIGQ.mjs";
var f = k(u(), 1);
function P(t) {
  return d(t) && y(t) && a(t);
}
function S(t) {
  let e = {};
  if (!t) return e;
  let i = t.children.filter(P).sort((r, s) => (r.breakpointWidth ?? 0) - (s.breakpointWidth ?? 0));
  for (let r of i) {
    let s = r.originalid,
      o = e[s] ?? [];
    (o.push(r), (e[s] = o));
  }
  return e;
}
function x(t) {
  let e = c.get(t);
  return (0, f.useMemo)(() => S(e), [e]);
}
function R(t, e) {
  return !m(e) || !p(e) ? "" : B(t, e.width);
}
function B(t, e) {
  let i = [],
    r = Object.values(t);
  for (let s of r) {
    let o = s.find((n) => (n.breakpointWidth ?? 0) > e);
    if (o) {
      let n = l(2, o.id);
      i.push(n);
    }
  }
  return i.join(" ");
}
export { S as a, x as b, R as c, B as d };
//# sourceMappingURL=chunk-N7E3JQUJ.mjs.map
