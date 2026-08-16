import { _a as d } from "chunk-K6WOFN2G.mjs";
import { dD as v, e as i, vl as m, xl as T } from "chunk-IXMBKHRL.mjs";
import { b as p } from "chunk-4JY5UMT2.mjs";
function S(r) {
  let e = {};
  for (let o of d.getTokenNodes(r)) {
    e[i] || (e[i] = {});
    let t = e[i];
    (p(t, "Tokens entry must exist"), (t[o.id] = o));
  }
  return e;
}
function u(r) {
  let e = {};
  for (let o of d.getAllTokenNodes(r)) e[o.id] = o;
  return e;
}
function I(r, e, o) {
  let t = r.cloneWithIds(),
    s = Object.values(u(e));
  for (let n of t.walk()) Object.assign(n, m(n, s, o));
  return t;
}
function V(r, e, o) {
  if (!e) return;
  let t = Object.values(u(r)),
    s = {};
  for (let n of t) {
    let a = n.colorForMode(o);
    if (!a) return;
    s[n.id] = a;
  }
  for (let [n, a] of e) {
    let l = new v();
    for (let [f, k] of a) {
      let c = T(k, s);
      c ? l.set(f, c) : l.set(f, k);
    }
    e.set(n, l);
  }
}
export { S as a, u as b, I as c, V as d };
//# sourceMappingURL=chunk-MQJZXPR5.mjs.map
