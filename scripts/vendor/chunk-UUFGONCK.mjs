import { a as o, cg as r } from "chunk-XSTGUTXE.mjs";
import { i } from "chunk-Z37QFYCB.mjs";
import { a as e } from "chunk-JTCAKYEM.mjs";
import { e as s } from "chunk-WLHSDIGQ.mjs";
var n = "cq2i6r2",
  p = "o199fue7",
  c = "o16gpm6";
var t = s(e(), 1);
function A({ avatar: l, displayName: m, organization: a }) {
  let f = r.extractInitials(m);
  return (0, t.jsxs)("div", {
    className: n,
    children: [
      (0, t.jsx)(o, { color: i.tint, src: l || void 0, text: f }),
      a &&
        (0, t.jsx)(o, {
          size: "small",
          src: a.avatar || void 0,
          textCustomStyles: c,
          avatarCustomStyles: p,
          color: "#fff",
          text: r.extractInitials(a.displayName),
        }),
    ],
  });
}
export { A as a };
//# sourceMappingURL=chunk-UUFGONCK.mjs.map
