import { Ra as p } from "chunk-KN3JEK6R.mjs";
import { d as c } from "chunk-FD4BH2A6.mjs";
import { n as d } from "chunk-ZGSYAT7B.mjs";
import { cr as m, fd as o, kr as f } from "chunk-IXMBKHRL.mjs";
import { fa as s } from "chunk-YTTFBDRE.mjs";
import { b as n } from "chunk-LA34HORX.mjs";
function R(e, i, r, l) {
  let { imageSize: t, originalFilename: u } = i,
    g = n(e.fillImage) ? s(e.fillImage)?.preferredSize : void 0,
    a = {
      fillType: "image",
      fillImage: c(i, l ?? g, r),
      fillImageOriginalName: u,
      fillImagePixelWidth: t.naturalWidth,
      fillImagePixelHeight: t.naturalHeight,
      ...P(e),
    };
  if ((m(e) && e.fillEnabled === !1 && (a.fillEnabled = !0), o(e))) {
    let { nonZeroNaturalWidth: h, nonZeroNaturalHeight: F } = d(t);
    ((a.intrinsicWidth = h), (a.intrinsicHeight = F));
  }
  e.set(a);
}
function P(e) {
  if (f(e)) return { fillImagePositionX: void 0, fillImagePositionY: void 0 };
}
function O(e, i, r) {
  if (!i && !r) return !1;
  for (let l of e) {
    let t = p[l];
    if (r) {
      if (r.includes(l)) return !0;
    } else if (i && t && i.includes(t)) return !0;
  }
  return !1;
}
export { R as a, O as b };
//# sourceMappingURL=chunk-T323UB4T.mjs.map
