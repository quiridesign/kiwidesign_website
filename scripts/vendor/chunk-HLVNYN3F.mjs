import { Ab as p } from "chunk-R7O6B3MZ.mjs";
import { d as c } from "chunk-TACLCPXO.mjs";
import { n as d } from "chunk-TNHWGVQK.mjs";
import { cd as o, dr as m, lr as f } from "chunk-QIEZ7GMD.mjs";
import { ja as s } from "chunk-DHUNMEBO.mjs";
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
//# sourceMappingURL=chunk-HLVNYN3F.mjs.map
