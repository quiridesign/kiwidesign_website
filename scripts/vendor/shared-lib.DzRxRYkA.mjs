import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as n,
  E as r,
  L as i,
  N as a,
  O as o,
  P as s,
  _ as c,
  b as l,
  c as u,
  j as d,
  l as f,
  s as p,
  u as m,
  w as h,
  x as ee,
  y as te,
  z as g,
} from "./react.Dfbt0i5D.mjs";
import { C as _, a as v, n as ne, r as re, t as ie } from "./motion.COIfRbRd.mjs";
import {
  $ as ae,
  E as y,
  M as b,
  N as x,
  P as S,
  Q as oe,
  T as C,
  X as se,
  Y as ce,
  _ as w,
  b as T,
  ct as le,
  d as E,
  dt as ue,
  et as de,
  ft as fe,
  g as pe,
  i as me,
  it as he,
  l as D,
  lt as ge,
  m as O,
  mt as _e,
  n as ve,
  nt as ye,
  o as be,
  ot as xe,
  r as k,
  rt as Se,
  s as Ce,
  st as we,
  t as Te,
  tt as Ee,
  ut as De,
  v as Oe,
  w as A,
  x as ke,
  y as Ae,
  z as j,
} from "./framer.CoGcv929.mjs";
function M(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function je(e) {
  return K.call(sr, e) ? !0 : K.call(or, e) ? !1 : ar.test(e) ? (sr[e] = !0) : ((or[e] = !0), !1);
}
function N(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function Me(e) {
  return e[1].toUpperCase();
}
function P(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = dr.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      (i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t));
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function Ne(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Pe(e, t, n) {
  switch (t) {
    case `select`:
      return Ne(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Ne(2, null);
    case `math`:
      return Ne(3, null);
    case `foreignObject`:
      return Ne(1, null);
    case `table`:
      return Ne(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Ne(5, null);
    case `colgroup`:
      return Ne(7, null);
    case `tr`:
      return Ne(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Ne(1, null) : e;
}
function Fe(e, t, n) {
  if (typeof n != `object`) throw Error(M(62));
  for (var r in ((t = !0), n))
    if (K.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = P(r);
          i = P((`` + i).trim());
        } else {
          a = r;
          var o = hr.get(a);
          (o !== void 0 ||
            ((o = P(a.replace(fr, `-$1`).toLowerCase().replace(pr, `-ms-`))), hr.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || K.call(lr, r)
                  ? `` + i
                  : i + `px`
                : P((`` + i).trim())));
        }
        t ? ((t = !1), e.push(` style="`, a, `:`, i)) : e.push(`;`, a, `:`, i);
      }
    }
  t || e.push(`"`);
}
function F(e, t, n, r) {
  switch (n) {
    case `style`:
      Fe(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = q.hasOwnProperty(n) ? q[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = t.attributeName), t.type)) {
        case 3:
          r && e.push(` `, n, `=""`);
          break;
        case 4:
          !0 === r ? e.push(` `, n, `=""`) : !1 !== r && e.push(` `, n, `="`, P(r), `"`);
          break;
        case 5:
          isNaN(r) || e.push(` `, n, `="`, P(r), `"`);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(` `, n, `="`, P(r), `"`);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(` `, n, `="`, P(r), `"`));
      }
    } else if (je(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(` `, n, `="`, P(r), `"`);
    }
  }
}
function Ie(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(M(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(M(61));
    ((t = t.__html), t != null && e.push(`` + t));
  }
}
function Le(e) {
  var t = ``;
  return (
    ir.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Re(e, t, n, r) {
  e.push(ze(n));
  var i,
    a = (n = null);
  for (i in t)
    if (K.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            F(e, r, i, o);
        }
    }
  return (e.push(`>`), Ie(e, a, n), typeof n == `string` ? (e.push(P(n)), null) : n);
}
function ze(e) {
  var t = _r.get(e);
  if (t === void 0) {
    if (!gr.test(e)) throw Error(M(65, e));
    ((t = `<` + e), _r.set(e, t));
  }
  return t;
}
function Be(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(ze(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (K.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                F(e, r, u, s);
            }
        }
      return (e.push(`>`), Ie(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(ze(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (K.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                F(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? Le(s) : `` + c), mr(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(` selected=""`);
              break;
            }
        } else `` + o === n && e.push(` selected=""`);
      else l && e.push(` selected=""`);
      return (e.push(`>`), Ie(e, u, s), s);
    case `textarea`:
      for (s in (e.push(ze(`textarea`)), (u = o = a = null), n))
        if (K.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(M(91));
            default:
              F(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(`>`), u != null)) {
        if (a != null) throw Error(M(92));
        if (mr(u) && 1 < u.length) throw Error(M(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a !== null && e.push(P(`` + a)),
        null
      );
    case `input`:
      for (o in (e.push(ze(`input`)), (c = u = s = a = null), n))
        if (K.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(M(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              F(e, r, o, l);
          }
      return (
        u === null ? c !== null && F(e, r, `checked`, c) : F(e, r, `checked`, u),
        a === null ? s !== null && F(e, r, `value`, s) : F(e, r, `value`, a),
        e.push(`/>`),
        null
      );
    case `menuitem`:
      for (var f in (e.push(ze(`menuitem`)), n))
        if (K.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(M(400));
            default:
              F(e, r, f, a);
          }
      return (e.push(`>`), null);
    case `title`:
      for (d in (e.push(ze(`title`)), (a = null), n))
        if (K.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(M(434));
            default:
              F(e, r, d, o);
          }
      return (e.push(`>`), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(ze(t)), (o = a = null), n))
        if (K.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              F(e, r, c, s);
          }
      if ((e.push(`>`), o != null)) {
        if (a != null) throw Error(M(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(M(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(
                  `
`,
                  n
                )
              : e.push(`` + n)));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(ze(t)), n))
        if (K.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(M(399, t));
            default:
              F(e, r, p, a);
          }
      return (e.push(`/>`), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return Re(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(`<!DOCTYPE html>`), Re(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Re(e, n, t, r);
      for (l in (e.push(ze(t)), (o = a = null), n))
        if (K.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Fe(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              je(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(` `, l, `="`, P(s), `"`);
          }
      return (e.push(`>`), Ie(e, o, a), a);
  }
}
function Ve(e, t, n) {
  if ((e.push(`<!--$?--><template id="`), n === null)) throw Error(M(395));
  return (e.push(n), e.push(`"></template>`));
}
function He(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (
        e.push(`<div hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 2:
      return (
        e.push(`<svg aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 3:
      return (
        e.push(`<math aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 4:
      return (
        e.push(`<table hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 5:
      return (
        e.push(`<table hidden><tbody id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 6:
      return (
        e.push(`<table hidden><tr id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 7:
      return (
        e.push(`<table hidden><colgroup id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    default:
      throw Error(M(397));
  }
}
function Ue(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push(`</div>`);
    case 2:
      return e.push(`</svg>`);
    case 3:
      return e.push(`</math>`);
    case 4:
      return e.push(`</table>`);
    case 5:
      return e.push(`</tbody></table>`);
    case 6:
      return e.push(`</tr></table>`);
    case 7:
      return e.push(`</colgroup></table>`);
    default:
      throw Error(M(397));
  }
}
function We(e) {
  return JSON.stringify(e).replace(vr, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`
        );
    }
  });
}
function Ge(e, t) {
  return (
    (t = t === void 0 ? `` : t),
    {
      bootstrapChunks: [],
      startInlineScript: `<script>`,
      placeholderPrefix: t + `P:`,
      segmentPrefix: t + `S:`,
      boundaryPrefix: t + `B:`,
      idPrefix: t,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
      generateStaticMarkup: e,
    }
  );
}
function Ke(e, t, n, r) {
  return n.generateStaticMarkup
    ? (e.push(P(t)), !1)
    : (t === `` ? (e = r) : (r && e.push(`<!-- -->`), e.push(P(t)), (e = !0)), e);
}
function qe(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case Sr:
      return `Fragment`;
    case xr:
      return `Portal`;
    case wr:
      return `Profiler`;
    case Cr:
      return `StrictMode`;
    case Or:
      return `Suspense`;
    case kr:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Er:
        return (e.displayName || `Context`) + `.Consumer`;
      case Tr:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Dr:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case Ar:
        return ((t = e.displayName || null), t === null ? qe(e.type) || `Memo` : t);
      case jr:
        ((t = e._payload), (e = e._init));
        try {
          return qe(e(t));
        } catch {}
    }
  return null;
}
function Je(e, t) {
  if (((e = e.contextTypes), !e)) return Lr;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function Ye(e, t) {
  if (e !== t) {
    ((e.context._currentValue2 = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(M(401));
    } else {
      if (n === null) throw Error(M(401));
      Ye(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function Xe(e) {
  ((e.context._currentValue2 = e.parentValue), (e = e.parent), e !== null && Xe(e));
}
function Ze(e) {
  var t = e.parent;
  (t !== null && Ze(t), (e.context._currentValue2 = e.value));
}
function Qe(e, t) {
  if (((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null)) throw Error(M(402));
  e.depth === t.depth ? Ye(e, t) : Qe(e, t);
}
function $e(e, t) {
  var n = t.parent;
  if (n === null) throw Error(M(402));
  (e.depth === n.depth ? Ye(e, n) : $e(e, n), (t.context._currentValue2 = t.value));
}
function et(e) {
  var t = Rr;
  t !== e &&
    (t === null
      ? Ze(e)
      : e === null
        ? Xe(t)
        : t.depth === e.depth
          ? Ye(t, e)
          : t.depth > e.depth
            ? Qe(t, e)
            : $e(t, e),
    (Rr = e));
}
function tt(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = zr), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue2 : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : yr({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && zr.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = yr({}, a, s))) : yr(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function nt(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Vr(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - Vr(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - Vr(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function rt(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Hr(e) / Ur) | 0)) | 0);
}
function it(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function at() {
  if (Gr === null) throw Error(M(321));
  return Gr;
}
function ot() {
  if (0 < Qr) throw Error(M(312));
  return { memoizedState: null, queue: null, next: null };
}
function st() {
  return (
    J === null
      ? qr === null
        ? ((Jr = !1), (qr = J = ot()))
        : ((Jr = !0), (J = qr))
      : J.next === null
        ? ((Jr = !1), (J = J.next = ot()))
        : ((Jr = !0), (J = J.next)),
    J
  );
}
function ct() {
  ((Kr = Gr = null), (Yr = !1), (qr = null), (Qr = 0), (J = Zr = null));
}
function lt(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function ut(e, t, n) {
  if (((Gr = at()), (J = st()), Jr)) {
    var r = J.queue;
    if (((t = r.dispatch), Zr !== null && ((n = Zr.get(r)), n !== void 0))) {
      (Zr.delete(r), (r = J.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((J.memoizedState = r), [r, t]);
    }
    return [J.memoizedState, t];
  }
  return (
    (e = e === lt ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (J.memoizedState = e),
    (e = J.queue = { last: null, dispatch: null }),
    (e = e.dispatch = ft.bind(null, Gr, e)),
    [J.memoizedState, e]
  );
}
function dt(e, t) {
  if (((Gr = at()), (J = st()), (t = t === void 0 ? null : t), J !== null)) {
    var n = J.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!Wr(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), (J.memoizedState = [e, t]), e);
}
function ft(e, t, n) {
  if (25 <= Qr) throw Error(M(301));
  if (e === Gr)
    if (
      ((Yr = !0),
      (e = { action: n, next: null }),
      Zr === null && (Zr = new Map()),
      (n = Zr.get(t)),
      n === void 0)
    )
      Zr.set(t, e);
    else {
      for (t = n; t.next !== null; ) t = t.next;
      t.next = e;
    }
}
function pt() {
  throw Error(M(394));
}
function mt() {}
function ht(e) {
  return (console.error(e), null);
}
function gt() {}
function _t(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? ht : i,
      onAllReady: a === void 0 ? gt : a,
      onShellReady: o === void 0 ? gt : o,
      onShellError: s === void 0 ? gt : s,
      onFatalError: c === void 0 ? gt : c,
    }),
    (n = yt(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = vt(t, e, null, n, u, Lr, null, Br)),
    l.push(e),
    t
  );
}
function vt(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && Mt(e));
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return (i.add(c), c);
}
function yt(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function bt(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function xt(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), e.destination.destroy(t)));
}
function St(e, t, n, r, i) {
  for (Gr = {}, Kr = t, Xr = 0, e = n(r, i); Yr; )
    ((Yr = !1), (Xr = 0), (Qr += 1), (J = null), (e = n(r, i)));
  return (ct(), e);
}
function Ct(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(M(108, qe(r) || `Unknown`, s));
      r = yr({}, o, n);
    }
    ((t.legacyContext = r), I(e, t, i), (t.legacyContext = o));
  } else I(e, t, i);
}
function wt(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = yr({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Tt(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = Je(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue2 : i)),
        tt(a, n, r, i),
        Ct(e, t, a, n));
    } else {
      ((a = Je(n, t.legacyContext)), (i = St(e, t, n, r, a)));
      var o = Xr !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (tt(i, n, r, a), Ct(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = nt(r, 1, 0)));
        try {
          I(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else I(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Pr:
        case Nr:
        case Cr:
        case wr:
        case Sr:
          I(e, t, r.children);
          return;
        case kr:
          I(e, t, r.children);
          return;
        case Mr:
          throw Error(M(343));
        case Or:
          e: {
            ((n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set()));
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = yt(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = yt(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (Dt(e, t, r),
                e.responseState.generateStaticMarkup ||
                  (l.lastPushedText && l.textEmbedded && l.chunks.push(`<!-- -->`)),
                (l.status = 1),
                At(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = bt(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = vt(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case Dr:
            if (((r = St(e, t, n.render, r, i)), Xr !== 0)) {
              ((n = t.treeContext), (t.treeContext = nt(n, 1, 0)));
              try {
                I(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else I(e, t, r);
            return;
          case Ar:
            ((n = n.type), (r = wt(n, r)), Tt(e, t, n, r, i));
            return;
          case Tr:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue2),
              (n._currentValue2 = r),
              (o = Rr),
              (Rr = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              I(e, t, i),
              (e = Rr),
              e === null)
            )
              throw Error(M(403));
            ((r = e.parentValue),
              (e.context._currentValue2 = r === Fr ? e.context._defaultValue : r),
              (e = Rr = e.parent),
              (t.context = e));
            return;
          case Er:
            ((r = r.children), (r = r(n._currentValue2)), I(e, t, r));
            return;
          case jr:
            ((i = n._init), (n = i(n._payload)), (r = wt(n, r)), Tt(e, t, n, r, void 0));
            return;
        }
      throw Error(M(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = Be(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Pe(o, n, r)),
      Dt(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(`</`, n, `>`);
    }
    i.lastPushedText = !1;
  }
}
function I(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case br:
        Tt(e, t, n.type, n.props, n.ref);
        return;
      case xr:
        throw Error(M(257));
      case jr:
        var r = n._init;
        ((n = r(n._payload)), I(e, t, n));
        return;
    }
    if (mr(n)) {
      Et(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Ir && n[Ir]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        Et(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        M(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e)
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Ke(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Ke(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function Et(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = nt(a, r, i);
    try {
      Dt(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function Dt(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return I(e, t, n);
  } catch (c) {
    if ((ct(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        et(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = yt(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = vt(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      et(a));
  }
}
function Ot(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), jt(this, t, e));
}
function kt(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.push(null)))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(M(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return kt(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function At(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && At(e, n));
  } else e.completedSegments.push(t);
}
function jt(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(M(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = gt), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && At(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Ot, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (At(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function Mt(e) {
  if (e.status !== 2) {
    var t = Rr,
      n = ti.current;
    ti.current = $r;
    var r = ei;
    ei = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          et(o.context);
          try {
            (I(s, o, o.node),
              s.responseState.generateStaticMarkup ||
                (c.lastPushedText && c.textEmbedded && c.chunks.push(`<!-- -->`)),
              o.abortSet.delete(o),
              (c.status = 1),
              jt(s, o.blockedBoundary, c));
          } catch (e) {
            if ((ct(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = bt(s, d);
              if (
                (u === null
                  ? xt(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      (a.splice(0, i), e.destination !== null && Rt(e, e.destination));
    } catch (t) {
      (bt(e, t), xt(e, t));
    } finally {
      ((ei = r), (ti.current = n), n === $r && et(t));
    }
  }
}
function Nt(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        t.push(`<template id="`),
        t.push(e.placeholderPrefix),
        (e = r.toString(16)),
        t.push(e),
        t.push(`"></template>`)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) t.push(r[a]);
        i = Pt(e, t, i);
      }
      for (; a < r.length - 1; a++) t.push(r[a]);
      return (a < r.length && (i = t.push(r[a])), i);
    default:
      throw Error(M(390));
  }
}
function Pt(e, t, n) {
  var r = n.boundary;
  if (r === null) return Nt(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    return (
      e.responseState.generateStaticMarkup ||
        ((r = r.errorDigest),
        t.push(`<!--$!-->`),
        t.push(`<template`),
        r && (t.push(` data-dgst="`), (r = P(r)), t.push(r), t.push(`"`)),
        t.push(`></template>`)),
      Nt(e, t, n),
      (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)),
      e
    );
  if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    return (
      (i = i.boundaryPrefix + a.toString(16)),
      (r = r.id = i),
      Ve(t, e.responseState, r),
      Nt(e, t, n),
      t.push(`<!--/$-->`)
    );
  }
  if (r.byteSize > e.progressiveChunkSize)
    return (
      (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Ve(t, e.responseState, r.id),
      Nt(e, t, n),
      t.push(`<!--/$-->`)
    );
  if (
    (e.responseState.generateStaticMarkup || t.push(`<!--$-->`),
    (n = r.completedSegments),
    n.length !== 1)
  )
    throw Error(M(391));
  return (Pt(e, t, n[0]), (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)), e);
}
function Ft(e, t, n) {
  return (He(t, e.responseState, n.formatContext, n.id), Pt(e, t, n), Ue(t, n.formatContext));
}
function It(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Lt(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    t.push(e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? t.push(`$RC("`)
      : ((e.sentCompleteBoundaryFunction = !0),
        t.push(
          `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
        )),
    r === null)
  )
    throw Error(M(395));
  return (
    (n = n.toString(16)),
    t.push(r),
    t.push(`","`),
    t.push(e.segmentPrefix),
    t.push(n),
    t.push(`")<\/script>`)
  );
}
function Lt(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(M(392));
    return Ft(e, t, r);
  }
  return (
    Ft(e, t, r),
    (e = e.responseState),
    t.push(e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? t.push(`$RS("`)
      : ((e.sentCompleteSegmentFunction = !0),
        t.push(
          `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
        )),
    t.push(e.segmentPrefix),
    (i = i.toString(16)),
    t.push(i),
    t.push(`","`),
    t.push(e.placeholderPrefix),
    t.push(i),
    t.push(`")<\/script>`)
  );
}
function Rt(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Pt(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (r.push(s.startInlineScript),
        s.sentClientRenderFunction
          ? r.push(`$RX("`)
          : ((s.sentClientRenderFunction = !0),
            r.push(
              `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
            )),
        c === null)
      )
        throw Error(M(395));
      if ((r.push(c), r.push(`"`), l || u || d)) {
        r.push(`,`);
        var f = We(l || ``);
        r.push(f);
      }
      if (u || d) {
        r.push(`,`);
        var p = We(u || ``);
        r.push(p);
      }
      if (d) {
        r.push(`,`);
        var m = We(d);
        r.push(m);
      }
      if (!r.push(`)<\/script>`)) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var h = e.completedBoundaries;
    for (i = 0; i < h.length; i++)
      if (!It(e, t, h[i])) {
        ((e.destination = null), i++, h.splice(0, i));
        return;
      }
    h.splice(0, i);
    var ee = e.partialBoundaries;
    for (i = 0; i < ee.length; i++) {
      var te = ee[i];
      e: {
        ((a = e), (o = t));
        var g = te.completedSegments;
        for (s = 0; s < g.length; s++)
          if (!Lt(a, o, te, g[s])) {
            (s++, g.splice(0, s));
            var _ = !1;
            break e;
          }
        (g.splice(0, s), (_ = !0));
      }
      if (!_) {
        ((e.destination = null), i++, ee.splice(0, i));
        return;
      }
    }
    ee.splice(0, i);
    var v = e.completedBoundaries;
    for (i = 0; i < v.length; i++)
      if (!It(e, t, v[i])) {
        ((e.destination = null), i++, v.splice(0, i));
        return;
      }
    v.splice(0, i);
  } finally {
    e.allPendingTasks === 0 &&
      e.pingedTasks.length === 0 &&
      e.clientRenderedBoundaries.length === 0 &&
      e.completedBoundaries.length === 0 &&
      t.push(null);
  }
}
function zt(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return kt(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Rt(e, e.destination));
  } catch (t) {
    (bt(e, t), xt(e, t));
  }
}
function Bt() {}
function Vt(e, t, n, r) {
  var i = !1,
    a = null,
    o = ``,
    s = {
      push: function (e) {
        return (e !== null && (o += e), !0);
      },
      destroy: function (e) {
        ((i = !0), (a = e));
      },
    },
    c = !1;
  if (
    ((e = _t(
      e,
      Ge(n, t ? t.identifierPrefix : void 0),
      { insertionMode: 1, selectedValue: null },
      1 / 0,
      Bt,
      void 0,
      function () {
        c = !0;
      },
      void 0,
      void 0
    )),
    Mt(e),
    zt(e, r),
    e.status === 1)
  )
    ((e.status = 2), s.destroy(e.fatalError));
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      Rt(e, s);
    } catch (t) {
      (bt(e, t), xt(e, t));
    }
  }
  if (i) throw a;
  if (!c) throw Error(M(426));
  return o;
}
function L(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function R(e, t) {
  if (t.length !== 0)
    if (512 < t.length)
      (0 < X && (e.enqueue(new Uint8Array(Y.buffer, 0, X)), (Y = new Uint8Array(512)), (X = 0)),
        e.enqueue(t));
    else {
      var n = Y.length - X;
      (n < t.length &&
        (n === 0 ? e.enqueue(Y) : (Y.set(t.subarray(0, n), X), e.enqueue(Y), (t = t.subarray(n))),
        (Y = new Uint8Array(512)),
        (X = 0)),
        Y.set(t, X),
        (X += t.length));
    }
}
function z(e, t) {
  return (R(e, t), !0);
}
function Ht(e) {
  Y && 0 < X && (e.enqueue(new Uint8Array(Y.buffer, 0, X)), (Y = null), (X = 0));
}
function B(e) {
  return ai.encode(e);
}
function V(e) {
  return ai.encode(e);
}
function Ut(e, t) {
  typeof e.error == `function` ? e.error(t) : e.close();
}
function Wt(e) {
  return Z.call(ci, e) ? !0 : Z.call(si, e) ? !1 : oi.test(e) ? (ci[e] = !0) : ((si[e] = !0), !1);
}
function H(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function Gt(e) {
  return e[1].toUpperCase();
}
function U(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = fi.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      (i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t));
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function Kt(e, t, n, r) {
  return t + (n === `s` ? `\\u0073` : `\\u0053`) + r;
}
function qt(e, t, n, r, i) {
  ((e = e === void 0 ? `` : e), (t = t === void 0 ? gi : V(`<script nonce="` + U(t) + `">`)));
  var a = [];
  if ((n !== void 0 && a.push(t, B((`` + n).replace(xi, Kt)), _i), r !== void 0))
    for (n = 0; n < r.length; n++) a.push(vi, B(U(r[n])), bi);
  if (i !== void 0) for (r = 0; r < i.length; r++) a.push(yi, B(U(i[r])), bi);
  return {
    bootstrapChunks: a,
    startInlineScript: t,
    placeholderPrefix: V(e + `P:`),
    segmentPrefix: V(e + `S:`),
    boundaryPrefix: e + `B:`,
    idPrefix: e,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
  };
}
function Jt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Yt(e) {
  return Jt(
    e === `http://www.w3.org/2000/svg` ? 2 : e === `http://www.w3.org/1998/Math/MathML` ? 3 : 0,
    null
  );
}
function Xt(e, t, n) {
  switch (t) {
    case `select`:
      return Jt(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return Jt(2, null);
    case `math`:
      return Jt(3, null);
    case `foreignObject`:
      return Jt(1, null);
    case `table`:
      return Jt(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return Jt(5, null);
    case `colgroup`:
      return Jt(7, null);
    case `tr`:
      return Jt(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? Jt(1, null) : e;
}
function Zt(e, t, n, r) {
  return t === `` ? r : (r && e.push(Si), e.push(B(U(t))), !0);
}
function Qt(e, t, n) {
  if (typeof n != `object`) throw Error(L(62));
  for (var r in ((t = !0), n))
    if (Z.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = B(U(r));
          i = B(U((`` + i).trim()));
        } else {
          a = r;
          var o = Ci.get(a);
          (o !== void 0 ||
            ((o = V(U(a.replace(pi, `-$1`).toLowerCase().replace(mi, `-ms-`)))), Ci.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || Z.call(ui, r)
                  ? B(`` + i)
                  : B(i + `px`)
                : B(U((`` + i).trim()))));
        }
        t ? ((t = !1), e.push(wi, a, Ti, i)) : e.push(Ei, a, Ti, i);
      }
    }
  t || e.push(ki);
}
function W(e, t, n, r) {
  switch (n) {
    case `style`:
      Qt(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = Q.hasOwnProperty(n) ? Q[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = B(t.attributeName)), t.type)) {
        case 3:
          r && e.push(Di, n, Ai);
          break;
        case 4:
          !0 === r ? e.push(Di, n, Ai) : !1 !== r && e.push(Di, n, Oi, B(U(r)), ki);
          break;
        case 5:
          isNaN(r) || e.push(Di, n, Oi, B(U(r)), ki);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(Di, n, Oi, B(U(r)), ki);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(Di, n, Oi, B(U(r)), ki));
      }
    } else if (Wt(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(Di, B(n), Oi, B(U(r)), ki);
    }
  }
}
function $t(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(L(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(L(61));
    ((t = t.__html), t != null && e.push(B(`` + t)));
  }
}
function en(e) {
  var t = ``;
  return (
    ii.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function tn(e, t, n, r) {
  e.push(nn(n));
  var i,
    a = (n = null);
  for (i in t)
    if (Z.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            W(e, r, i, o);
        }
    }
  return (e.push(ji), $t(e, a, n), typeof n == `string` ? (e.push(B(U(n))), null) : n);
}
function nn(e) {
  var t = Ii.get(e);
  if (t === void 0) {
    if (!Fi.test(e)) throw Error(L(65, e));
    ((t = V(`<` + e)), Ii.set(e, t));
  }
  return t;
}
function rn(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(nn(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (Z.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                W(e, r, u, s);
            }
        }
      return (e.push(ji), $t(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(nn(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (Z.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                W(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? en(s) : `` + c), hi(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(Ni);
              break;
            }
        } else `` + o === n && e.push(Ni);
      else l && e.push(Ni);
      return (e.push(ji), $t(e, u, s), s);
    case `textarea`:
      for (s in (e.push(nn(`textarea`)), (u = o = a = null), n))
        if (Z.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(L(91));
            default:
              W(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(ji), u != null)) {
        if (a != null) throw Error(L(92));
        if (hi(u) && 1 < u.length) throw Error(L(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Pi),
        a !== null && e.push(B(U(`` + a))),
        null
      );
    case `input`:
      for (o in (e.push(nn(`input`)), (c = u = s = a = null), n))
        if (Z.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(L(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              W(e, r, o, l);
          }
      return (
        u === null ? c !== null && W(e, r, `checked`, c) : W(e, r, `checked`, u),
        a === null ? s !== null && W(e, r, `value`, s) : W(e, r, `value`, a),
        e.push(Mi),
        null
      );
    case `menuitem`:
      for (var f in (e.push(nn(`menuitem`)), n))
        if (Z.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(L(400));
            default:
              W(e, r, f, a);
          }
      return (e.push(ji), null);
    case `title`:
      for (d in (e.push(nn(`title`)), (a = null), n))
        if (Z.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(L(434));
            default:
              W(e, r, d, o);
          }
      return (e.push(ji), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(nn(t)), (o = a = null), n))
        if (Z.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              W(e, r, c, s);
          }
      if ((e.push(ji), o != null)) {
        if (a != null) throw Error(L(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(L(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(Pi, B(n))
              : e.push(B(`` + n))));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(Pi),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(nn(t)), n))
        if (Z.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(L(399, t));
            default:
              W(e, r, p, a);
          }
      return (e.push(Mi), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return tn(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(Li), tn(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return tn(e, n, t, r);
      for (l in (e.push(nn(t)), (o = a = null), n))
        if (Z.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Qt(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Wt(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(Di, B(l), Oi, B(U(s)), ki);
          }
      return (e.push(ji), $t(e, o, a), a);
  }
}
function an(e, t, n) {
  if ((R(e, Ui), n === null)) throw Error(L(395));
  return (R(e, n), z(e, Wi));
}
function on(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (R(e, Zi), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, Qi));
    case 2:
      return (R(e, ea), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, ta));
    case 3:
      return (R(e, ra), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, ia));
    case 4:
      return (R(e, oa), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, sa));
    case 5:
      return (R(e, la), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, ua));
    case 6:
      return (R(e, fa), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, pa));
    case 7:
      return (R(e, ha), R(e, t.segmentPrefix), R(e, B(r.toString(16))), z(e, ga));
    default:
      throw Error(L(397));
  }
}
function sn(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return z(e, $i);
    case 2:
      return z(e, na);
    case 3:
      return z(e, aa);
    case 4:
      return z(e, ca);
    case 5:
      return z(e, da);
    case 6:
      return z(e, ma);
    case 7:
      return z(e, _a);
    default:
      throw Error(L(397));
  }
}
function cn(e) {
  return JSON.stringify(e).replace(ja, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`
        );
    }
  });
}
function ln(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case Fa:
      return `Fragment`;
    case Pa:
      return `Portal`;
    case La:
      return `Profiler`;
    case Ia:
      return `StrictMode`;
    case Va:
      return `Suspense`;
    case Ha:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case za:
        return (e.displayName || `Context`) + `.Consumer`;
      case Ra:
        return (e._context.displayName || `Context`) + `.Provider`;
      case Ba:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case Ua:
        return ((t = e.displayName || null), t === null ? ln(e.type) || `Memo` : t);
      case Wa:
        ((t = e._payload), (e = e._init));
        try {
          return ln(e(t));
        } catch {}
    }
  return null;
}
function un(e, t) {
  if (((e = e.contextTypes), !e)) return Xa;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function dn(e, t) {
  if (e !== t) {
    ((e.context._currentValue = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(L(401));
    } else {
      if (n === null) throw Error(L(401));
      dn(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function fn(e) {
  ((e.context._currentValue = e.parentValue), (e = e.parent), e !== null && fn(e));
}
function pn(e) {
  var t = e.parent;
  (t !== null && pn(t), (e.context._currentValue = e.value));
}
function mn(e, t) {
  if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null)) throw Error(L(402));
  e.depth === t.depth ? dn(e, t) : mn(e, t);
}
function hn(e, t) {
  var n = t.parent;
  if (n === null) throw Error(L(402));
  (e.depth === n.depth ? dn(e, n) : hn(e, n), (t.context._currentValue = t.value));
}
function gn(e) {
  var t = Za;
  t !== e &&
    (t === null
      ? pn(e)
      : e === null
        ? fn(t)
        : t.depth === e.depth
          ? dn(t, e)
          : t.depth > e.depth
            ? mn(t, e)
            : hn(t, e),
    (Za = e));
}
function _n(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Qa), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : Ma({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && Qa.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = Ma({}, a, s))) : Ma(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function vn(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - eo(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - eo(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - eo(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function yn(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((to(e) / no) | 0)) | 0);
}
function bn(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function xn() {
  if (io === null) throw Error(L(321));
  return io;
}
function Sn() {
  if (0 < fo) throw Error(L(312));
  return { memoizedState: null, queue: null, next: null };
}
function Cn() {
  return (
    $ === null
      ? oo === null
        ? ((so = !1), (oo = $ = Sn()))
        : ((so = !0), ($ = oo))
      : $.next === null
        ? ((so = !1), ($ = $.next = Sn()))
        : ((so = !0), ($ = $.next)),
    $
  );
}
function wn() {
  ((ao = io = null), (co = !1), (oo = null), (fo = 0), ($ = uo = null));
}
function Tn(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function En(e, t, n) {
  if (((io = xn()), ($ = Cn()), so)) {
    var r = $.queue;
    if (((t = r.dispatch), uo !== null && ((n = uo.get(r)), n !== void 0))) {
      (uo.delete(r), (r = $.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return (($.memoizedState = r), [r, t]);
    }
    return [$.memoizedState, t];
  }
  return (
    (e = e === Tn ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    ($.memoizedState = e),
    (e = $.queue = { last: null, dispatch: null }),
    (e = e.dispatch = On.bind(null, io, e)),
    [$.memoizedState, e]
  );
}
function Dn(e, t) {
  if (((io = xn()), ($ = Cn()), (t = t === void 0 ? null : t), $ !== null)) {
    var n = $.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!ro(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), ($.memoizedState = [e, t]), e);
}
function On(e, t, n) {
  if (25 <= fo) throw Error(L(301));
  if (e === io)
    if (
      ((co = !0),
      (e = { action: n, next: null }),
      uo === null && (uo = new Map()),
      (n = uo.get(t)),
      n === void 0)
    )
      uo.set(t, e);
    else {
      for (t = n; t.next !== null; ) t = t.next;
      t.next = e;
    }
}
function kn() {
  throw Error(L(394));
}
function An() {}
function jn(e) {
  return (console.error(e), null);
}
function Mn() {}
function Nn(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? jn : i,
      onAllReady: a === void 0 ? Mn : a,
      onShellReady: o === void 0 ? Mn : o,
      onShellError: s === void 0 ? Mn : s,
      onFatalError: c === void 0 ? Mn : c,
    }),
    (n = Fn(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = Pn(t, e, null, n, u, Xa, null, $a)),
    l.push(e),
    t
  );
}
function Pn(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && Jn(e));
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return (i.add(c), c);
}
function Fn(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function In(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function Ln(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), Ut(e.destination, t)));
}
function Rn(e, t, n, r, i) {
  for (io = {}, ao = t, lo = 0, e = n(r, i); co; )
    ((co = !1), (lo = 0), (fo += 1), ($ = null), (e = n(r, i)));
  return (wn(), e);
}
function zn(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(L(108, ln(r) || `Unknown`, s));
      r = Ma({}, o, n);
    }
    ((t.legacyContext = r), G(e, t, i), (t.legacyContext = o));
  } else G(e, t, i);
}
function Bn(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = Ma({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Vn(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = un(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue : i)),
        _n(a, n, r, i),
        zn(e, t, a, n));
    } else {
      ((a = un(n, t.legacyContext)), (i = Rn(e, t, n, r, a)));
      var o = lo !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (_n(i, n, r, a), zn(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = vn(r, 1, 0)));
        try {
          G(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else G(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case qa:
        case Ka:
        case Ia:
        case La:
        case Fa:
          G(e, t, r.children);
          return;
        case Ha:
          G(e, t, r.children);
          return;
        case Ga:
          throw Error(L(343));
        case Va:
          e: {
            ((n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set()));
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = Fn(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = Fn(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (Un(e, t, r),
                l.lastPushedText && l.textEmbedded && l.chunks.push(Si),
                (l.status = 1),
                Kn(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = In(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = Pn(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case Ba:
            if (((r = Rn(e, t, n.render, r, i)), lo !== 0)) {
              ((n = t.treeContext), (t.treeContext = vn(n, 1, 0)));
              try {
                G(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else G(e, t, r);
            return;
          case Ua:
            ((n = n.type), (r = Bn(n, r)), Vn(e, t, n, r, i));
            return;
          case Ra:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue),
              (n._currentValue = r),
              (o = Za),
              (Za = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              G(e, t, i),
              (e = Za),
              e === null)
            )
              throw Error(L(403));
            ((r = e.parentValue),
              (e.context._currentValue = r === Ja ? e.context._defaultValue : r),
              (e = Za = e.parent),
              (t.context = e));
            return;
          case za:
            ((r = r.children), (r = r(n._currentValue)), G(e, t, r));
            return;
          case Wa:
            ((i = n._init), (n = i(n._payload)), (r = Bn(n, r)), Vn(e, t, n, r, void 0));
            return;
        }
      throw Error(L(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = rn(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Xt(o, n, r)),
      Un(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(Ri, B(n), zi);
    }
    i.lastPushedText = !1;
  }
}
function G(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case Na:
        Vn(e, t, n.type, n.props, n.ref);
        return;
      case Pa:
        throw Error(L(257));
      case Wa:
        var r = n._init;
        ((n = r(n._payload)), G(e, t, n));
        return;
    }
    if (hi(n)) {
      Hn(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Ya && n[Ya]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        Hn(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        L(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e)
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Zt(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Zt(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function Hn(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = vn(a, r, i);
    try {
      Un(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function Un(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return G(e, t, n);
  } catch (c) {
    if ((wn(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        gn(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = Fn(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = Pn(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      gn(a));
  }
}
function Wn(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), qn(this, t, e));
}
function Gn(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.close()))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(L(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Gn(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function Kn(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && Kn(e, n));
  } else e.completedSegments.push(t);
}
function qn(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(L(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = Mn), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && Kn(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Wn, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (Kn(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function Jn(e) {
  if (e.status !== 2) {
    var t = Za,
      n = ho.current;
    ho.current = po;
    var r = mo;
    mo = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          gn(o.context);
          try {
            (G(s, o, o.node),
              c.lastPushedText && c.textEmbedded && c.chunks.push(Si),
              o.abortSet.delete(o),
              (c.status = 1),
              qn(s, o.blockedBoundary, c));
          } catch (e) {
            if ((wn(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = In(s, d);
              if (
                (u === null
                  ? Ln(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      (a.splice(0, i), e.destination !== null && er(e, e.destination));
    } catch (t) {
      (In(e, t), Ln(e, t));
    } finally {
      ((mo = r), (ho.current = n), n === po && gn(t));
    }
  }
}
function Yn(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        R(t, Bi),
        R(t, e.placeholderPrefix),
        (e = B(r.toString(16))),
        R(t, e),
        z(t, Vi)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) R(t, r[a]);
        i = Xn(e, t, i);
      }
      for (; a < r.length - 1; a++) R(t, r[a]);
      return (a < r.length && (i = z(t, r[a])), i);
    default:
      throw Error(L(390));
  }
}
function Xn(e, t, n) {
  var r = n.boundary;
  if (r === null) return Yn(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    ((r = r.errorDigest),
      z(t, Gi),
      R(t, qi),
      r && (R(t, Yi), R(t, B(U(r))), R(t, Ji)),
      z(t, Xi),
      Yn(e, t, n));
  else if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    ((i = V(i.boundaryPrefix + a.toString(16))),
      (r = r.id = i),
      an(t, e.responseState, r),
      Yn(e, t, n));
  } else if (r.byteSize > e.progressiveChunkSize)
    ((r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      an(t, e.responseState, r.id),
      Yn(e, t, n));
  else {
    if ((z(t, Hi), (n = r.completedSegments), n.length !== 1)) throw Error(L(391));
    Xn(e, t, n[0]);
  }
  return z(t, Ki);
}
function Zn(e, t, n) {
  return (on(t, e.responseState, n.formatContext, n.id), Xn(e, t, n), sn(t, n.formatContext));
}
function Qn(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) $n(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    R(t, e.startInlineScript),
    e.sentCompleteBoundaryFunction ? R(t, Ca) : ((e.sentCompleteBoundaryFunction = !0), R(t, Sa)),
    r === null)
  )
    throw Error(L(395));
  return ((n = B(n.toString(16))), R(t, r), R(t, wa), R(t, e.segmentPrefix), R(t, n), z(t, Ta));
}
function $n(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(L(392));
    return Zn(e, t, r);
  }
  return (
    Zn(e, t, r),
    (e = e.responseState),
    R(t, e.startInlineScript),
    e.sentCompleteSegmentFunction ? R(t, ya) : ((e.sentCompleteSegmentFunction = !0), R(t, va)),
    R(t, e.segmentPrefix),
    (i = B(i.toString(16))),
    R(t, i),
    R(t, ba),
    R(t, e.placeholderPrefix),
    R(t, i),
    z(t, xa)
  );
}
function er(e, t) {
  ((Y = new Uint8Array(512)), (X = 0));
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Xn(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) R(t, r[n]);
      n < r.length && z(t, r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (R(r, s.startInlineScript),
        s.sentClientRenderFunction ? R(r, Da) : ((s.sentClientRenderFunction = !0), R(r, Ea)),
        c === null)
      )
        throw Error(L(395));
      if (
        (R(r, c),
        R(r, Oa),
        (l || u || d) && (R(r, Aa), R(r, B(cn(l || ``)))),
        (u || d) && (R(r, Aa), R(r, B(cn(u || ``)))),
        d && (R(r, Aa), R(r, B(cn(d)))),
        !z(r, ka))
      ) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++)
      if (!Qn(e, t, f[i])) {
        ((e.destination = null), i++, f.splice(0, i));
        return;
      }
    (f.splice(0, i), Ht(t), (Y = new Uint8Array(512)), (X = 0));
    var p = e.partialBoundaries;
    for (i = 0; i < p.length; i++) {
      var m = p[i];
      e: {
        ((a = e), (o = t));
        var h = m.completedSegments;
        for (s = 0; s < h.length; s++)
          if (!$n(a, o, m, h[s])) {
            (s++, h.splice(0, s));
            var ee = !1;
            break e;
          }
        (h.splice(0, s), (ee = !0));
      }
      if (!ee) {
        ((e.destination = null), i++, p.splice(0, i));
        return;
      }
    }
    p.splice(0, i);
    var te = e.completedBoundaries;
    for (i = 0; i < te.length; i++)
      if (!Qn(e, t, te[i])) {
        ((e.destination = null), i++, te.splice(0, i));
        return;
      }
    te.splice(0, i);
  } finally {
    (Ht(t),
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.close());
  }
}
function tr(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return Gn(n, e, t);
    }),
      n.clear(),
      e.destination !== null && er(e, e.destination));
  } catch (t) {
    (In(e, t), Ln(e, t));
  }
}
var nr,
  rr,
  ir,
  K,
  ar,
  or,
  sr,
  q,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  J,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  Y,
  X,
  ai,
  Z,
  oi,
  si,
  ci,
  Q,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  $,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo = t(() => {
    (h(),
      (nr = `default` in r ? ee : r),
      (rr = {}),
      (ir = nr),
      (K = Object.prototype.hasOwnProperty),
      (ar =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (or = {}),
      (sr = {}),
      (q = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          q[e] = new N(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        q[t] = new N(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        q[e] = new N(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          q[e] = new N(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          q[e] = new N(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        q[e] = new N(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        q[e] = new N(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        q[e] = new N(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        q[e] = new N(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (cr = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(cr, Me);
          q[t] = new N(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(cr, Me);
          q[t] = new N(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(cr, Me);
        q[t] = new N(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        q[e] = new N(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (q.xlinkHref = new N(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        q[e] = new N(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (lr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      }),
      (ur = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(lr).forEach(function (e) {
        ur.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (lr[t] = lr[e]));
        });
      }),
      (dr = /["'&<>]/),
      (fr = /([A-Z])/g),
      (pr = /^ms-/),
      (mr = Array.isArray),
      (hr = new Map()),
      (gr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (_r = new Map()),
      (vr = /[<\u2028\u2029]/g),
      (yr = Object.assign),
      (br = Symbol.for(`react.element`)),
      (xr = Symbol.for(`react.portal`)),
      (Sr = Symbol.for(`react.fragment`)),
      (Cr = Symbol.for(`react.strict_mode`)),
      (wr = Symbol.for(`react.profiler`)),
      (Tr = Symbol.for(`react.provider`)),
      (Er = Symbol.for(`react.context`)),
      (Dr = Symbol.for(`react.forward_ref`)),
      (Or = Symbol.for(`react.suspense`)),
      (kr = Symbol.for(`react.suspense_list`)),
      (Ar = Symbol.for(`react.memo`)),
      (jr = Symbol.for(`react.lazy`)),
      (Mr = Symbol.for(`react.scope`)),
      (Nr = Symbol.for(`react.debug_trace_mode`)),
      (Pr = Symbol.for(`react.legacy_hidden`)),
      (Fr = Symbol.for(`react.default_value`)),
      (Ir = Symbol.iterator),
      (Lr = {}),
      (Rr = null),
      (zr = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          ((e = e._reactInternals), e.queue !== null && e.queue.push(t));
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals), (e.replace = !0), (e.queue = [t]));
        },
        enqueueForceUpdate: function () {},
      }),
      (Br = { id: 1, overflow: `` }),
      (Vr = Math.clz32 ? Math.clz32 : rt),
      (Hr = Math.log),
      (Ur = Math.LN2),
      (Wr = typeof Object.is == `function` ? Object.is : it),
      (Gr = null),
      (Kr = null),
      (qr = null),
      (J = null),
      (Jr = !1),
      (Yr = !1),
      (Xr = 0),
      (Zr = null),
      (Qr = 0),
      ($r = {
        readContext: function (e) {
          return e._currentValue2;
        },
        useContext: function (e) {
          return (at(), e._currentValue2);
        },
        useMemo: dt,
        useReducer: ut,
        useRef: function (e) {
          ((Gr = at()), (J = st()));
          var t = J.memoizedState;
          return t === null ? ((e = { current: e }), (J.memoizedState = e)) : t;
        },
        useState: function (e) {
          return ut(lt, e);
        },
        useInsertionEffect: mt,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return dt(function () {
            return e;
          }, t);
        },
        useImperativeHandle: mt,
        useEffect: mt,
        useDebugValue: mt,
        useDeferredValue: function (e) {
          return (at(), e);
        },
        useTransition: function () {
          return (at(), [!1, pt]);
        },
        useId: function () {
          var e = Kr.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - Vr(e) - 1))).toString(32) + t));
          var n = ei;
          if (n === null) throw Error(M(404));
          return (
            (t = Xr++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (at(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(M(407));
          return n();
        },
      }),
      (ei = null),
      (ti = ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (rr.renderToNodeStream = function () {
        throw Error(M(207));
      }),
      (rr.renderToStaticMarkup = function (e, t) {
        return Vt(
          e,
          t,
          !0,
          `The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (rr.renderToStaticNodeStream = function () {
        throw Error(M(208));
      }),
      (rr.renderToString = function (e, t) {
        return Vt(
          e,
          t,
          !1,
          `The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (rr.version = `18.2.0`),
      (ni = `default` in r ? ee : r),
      (ri = {}),
      (ii = ni),
      (Y = null),
      (X = 0),
      (ai = new TextEncoder()),
      (Z = Object.prototype.hasOwnProperty),
      (oi =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (si = {}),
      (ci = {}),
      (Q = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          Q[e] = new H(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        Q[t] = new H(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        Q[e] = new H(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          Q[e] = new H(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          Q[e] = new H(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        Q[e] = new H(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        Q[e] = new H(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        Q[e] = new H(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        Q[e] = new H(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (li = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(li, Gt);
          Q[t] = new H(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(li, Gt);
          Q[t] = new H(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(li, Gt);
        Q[t] = new H(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        Q[e] = new H(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Q.xlinkHref = new H(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        Q[e] = new H(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (ui = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      }),
      (di = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(ui).forEach(function (e) {
        di.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ui[t] = ui[e]));
        });
      }),
      (fi = /["'&<>]/),
      (pi = /([A-Z])/g),
      (mi = /^ms-/),
      (hi = Array.isArray),
      (gi = V(`<script>`)),
      (_i = V(`<\/script>`)),
      (vi = V(`<script src="`)),
      (yi = V(`<script type="module" src="`)),
      (bi = V(`" async=""><\/script>`)),
      (xi = /(<\/|<)(s)(cript)/gi),
      (Si = V(`<!-- -->`)),
      (Ci = new Map()),
      (wi = V(` style="`)),
      (Ti = V(`:`)),
      (Ei = V(`;`)),
      (Di = V(` `)),
      (Oi = V(`="`)),
      (ki = V(`"`)),
      (Ai = V(`=""`)),
      (ji = V(`>`)),
      (Mi = V(`/>`)),
      (Ni = V(` selected=""`)),
      (Pi = V(`
`)),
      (Fi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (Ii = new Map()),
      (Li = V(`<!DOCTYPE html>`)),
      (Ri = V(`</`)),
      (zi = V(`>`)),
      (Bi = V(`<template id="`)),
      (Vi = V(`"></template>`)),
      (Hi = V(`<!--$-->`)),
      (Ui = V(`<!--$?--><template id="`)),
      (Wi = V(`"></template>`)),
      (Gi = V(`<!--$!-->`)),
      (Ki = V(`<!--/$-->`)),
      (qi = V(`<template`)),
      (Ji = V(`"`)),
      (Yi = V(` data-dgst="`)),
      V(` data-msg="`),
      V(` data-stck="`),
      (Xi = V(`></template>`)),
      (Zi = V(`<div hidden id="`)),
      (Qi = V(`">`)),
      ($i = V(`</div>`)),
      (ea = V(`<svg aria-hidden="true" style="display:none" id="`)),
      (ta = V(`">`)),
      (na = V(`</svg>`)),
      (ra = V(`<math aria-hidden="true" style="display:none" id="`)),
      (ia = V(`">`)),
      (aa = V(`</math>`)),
      (oa = V(`<table hidden id="`)),
      (sa = V(`">`)),
      (ca = V(`</table>`)),
      (la = V(`<table hidden><tbody id="`)),
      (ua = V(`">`)),
      (da = V(`</tbody></table>`)),
      (fa = V(`<table hidden><tr id="`)),
      (pa = V(`">`)),
      (ma = V(`</tr></table>`)),
      (ha = V(`<table hidden><colgroup id="`)),
      (ga = V(`">`)),
      (_a = V(`</colgroup></table>`)),
      (va = V(
        `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
      )),
      (ya = V(`$RS("`)),
      (ba = V(`","`)),
      (xa = V(`")<\/script>`)),
      (Sa = V(
        `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
      )),
      (Ca = V(`$RC("`)),
      (wa = V(`","`)),
      (Ta = V(`")<\/script>`)),
      (Ea = V(
        `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
      )),
      (Da = V(`$RX("`)),
      (Oa = V(`"`)),
      (ka = V(`)<\/script>`)),
      (Aa = V(`,`)),
      (ja = /[<\u2028\u2029]/g),
      (Ma = Object.assign),
      (Na = Symbol.for(`react.element`)),
      (Pa = Symbol.for(`react.portal`)),
      (Fa = Symbol.for(`react.fragment`)),
      (Ia = Symbol.for(`react.strict_mode`)),
      (La = Symbol.for(`react.profiler`)),
      (Ra = Symbol.for(`react.provider`)),
      (za = Symbol.for(`react.context`)),
      (Ba = Symbol.for(`react.forward_ref`)),
      (Va = Symbol.for(`react.suspense`)),
      (Ha = Symbol.for(`react.suspense_list`)),
      (Ua = Symbol.for(`react.memo`)),
      (Wa = Symbol.for(`react.lazy`)),
      (Ga = Symbol.for(`react.scope`)),
      (Ka = Symbol.for(`react.debug_trace_mode`)),
      (qa = Symbol.for(`react.legacy_hidden`)),
      (Ja = Symbol.for(`react.default_value`)),
      (Ya = Symbol.iterator),
      (Xa = {}),
      (Za = null),
      (Qa = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          ((e = e._reactInternals), e.queue !== null && e.queue.push(t));
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals), (e.replace = !0), (e.queue = [t]));
        },
        enqueueForceUpdate: function () {},
      }),
      ($a = { id: 1, overflow: `` }),
      (eo = Math.clz32 ? Math.clz32 : yn),
      (to = Math.log),
      (no = Math.LN2),
      (ro = typeof Object.is == `function` ? Object.is : bn),
      (io = null),
      (ao = null),
      (oo = null),
      ($ = null),
      (so = !1),
      (co = !1),
      (lo = 0),
      (uo = null),
      (fo = 0),
      (po = {
        readContext: function (e) {
          return e._currentValue;
        },
        useContext: function (e) {
          return (xn(), e._currentValue);
        },
        useMemo: Dn,
        useReducer: En,
        useRef: function (e) {
          ((io = xn()), ($ = Cn()));
          var t = $.memoizedState;
          return t === null ? ((e = { current: e }), ($.memoizedState = e)) : t;
        },
        useState: function (e) {
          return En(Tn, e);
        },
        useInsertionEffect: An,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return Dn(function () {
            return e;
          }, t);
        },
        useImperativeHandle: An,
        useEffect: An,
        useDebugValue: An,
        useDeferredValue: function (e) {
          return (xn(), e);
        },
        useTransition: function () {
          return (xn(), [!1, kn]);
        },
        useId: function () {
          var e = ao.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - eo(e) - 1))).toString(32) + t));
          var n = mo;
          if (n === null) throw Error(L(404));
          return (
            (t = lo++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (xn(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(L(407));
          return n();
        },
      }),
      (mo = null),
      (ho = ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (ri.renderToReadableStream = function (e, t) {
        return new Promise(function (n, r) {
          var i,
            a,
            o = new Promise(function (e, t) {
              ((a = e), (i = t));
            }),
            s = Nn(
              e,
              qt(
                t ? t.identifierPrefix : void 0,
                t ? t.nonce : void 0,
                t ? t.bootstrapScriptContent : void 0,
                t ? t.bootstrapScripts : void 0,
                t ? t.bootstrapModules : void 0
              ),
              Yt(t ? t.namespaceURI : void 0),
              t ? t.progressiveChunkSize : void 0,
              t ? t.onError : void 0,
              a,
              function () {
                var e = new ReadableStream(
                  {
                    type: `bytes`,
                    pull: function (e) {
                      if (s.status === 1) ((s.status = 2), Ut(e, s.fatalError));
                      else if (s.status !== 2 && s.destination === null) {
                        s.destination = e;
                        try {
                          er(s, e);
                        } catch (e) {
                          (In(s, e), Ln(s, e));
                        }
                      }
                    },
                    cancel: function () {
                      tr(s);
                    },
                  },
                  { highWaterMark: 0 }
                );
                ((e.allReady = o), n(e));
              },
              function (e) {
                (o.catch(function () {}), r(e));
              },
              i
            );
          if (t && t.signal) {
            var c = t.signal,
              l = function () {
                (tr(s, c.reason), c.removeEventListener(`abort`, l));
              };
            c.addEventListener(`abort`, l);
          }
          Jn(s);
        });
      }),
      (ri.version = `18.2.0`),
      (go = {}),
      (_o = rr),
      (vo = ri),
      (go.version = _o.version),
      (go.renderToString = _o.renderToString),
      (go.renderToStaticMarkup = _o.renderToStaticMarkup),
      (go.renderToNodeStream = _o.renderToNodeStream),
      (go.renderToStaticNodeStream = _o.renderToStaticNodeStream),
      (go.renderToReadableStream = vo.renderToReadableStream),
      go.version,
      go.renderToString,
      go.renderToStaticMarkup,
      go.renderToNodeStream,
      go.renderToStaticNodeStream,
      (yo = go.renderToReadableStream));
  });
function xo({ blur: e, borderRadius: t, direction: n }) {
  let r = (e) => {
      switch (e) {
        case `toBottom`:
        default:
          return `to bottom`;
        case `toTop`:
          return `to top`;
        case `toLeft`:
          return `to left`;
        case `toRight`:
          return `to right`;
      }
    },
    i = [
      {
        blur: `${e / 2 / 2 / 2 / 2 / 2 / 2 / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%`,
      },
      {
        blur: `${e / 2 / 2 / 2 / 2 / 2 / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%`,
      },
      {
        blur: `${e / 2 / 2 / 2 / 2 / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%`,
      },
      {
        blur: `${e / 2 / 2 / 2 / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%`,
      },
      {
        blur: `${e / 2 / 2 / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%`,
      },
      {
        blur: `${e / 2 / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%`,
      },
      {
        blur: `${e / 2}px`,
        gradient: `rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%`,
      },
      { blur: `${e}px`, gradient: `rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%` },
    ];
  return f(`div`, {
    style: { position: `relative`, width: `100%`, height: `100%`, borderRadius: `${t}px` },
    children: i.map((e, i) =>
      f(
        `div`,
        {
          style: {
            position: `absolute`,
            inset: 0,
            zIndex: i + 1,
            backdropFilter: `blur(${e.blur})`,
            WebkitBackdropFilter: `blur(${e.blur})`,
            maskImage: `linear-gradient(${r(n)}, ${e.gradient})`,
            WebkitMaskImage: `linear-gradient(${r(n)}, ${e.gradient})`,
            borderRadius: `${t}px`,
            pointerEvents: `none`,
          },
        },
        i
      )
    ),
  });
}
var So = t(() => {
    (p(),
      j(),
      (xo.defaultProps = { blur: 10, borderRadius: 0, direction: `toBottom` }),
      ke(xo, {
        blur: {
          title: `Blur`,
          type: k.Number,
          defaultValue: 10,
          min: 0,
          max: 100,
          step: 1,
          description: `Large blur values (10<) can impact performance.`,
        },
        borderRadius: {
          title: `Radius`,
          type: k.Number,
          defaultValue: 0,
          min: 0,
          max: 100,
          step: 1,
          description: `Blur Gradient component's parent frame can't have border radius (it will break the component). If you need corner radius, apply it directly to the Blur Gradient component here.`,
        },
        direction: {
          title: `Direction`,
          type: k.SegmentedEnum,
          options: [`toBottom`, `toTop`, `toLeft`, `toRight`],
          optionTitles: [`↓`, `↑`, `←`, `→`],
          defaultValue: `toBottom`,
        },
      }));
  }),
  Co,
  wo,
  To,
  Eo,
  Do,
  Oo,
  ko,
  Ao = t(() => {
    (p(),
      j(),
      h(),
      (Co = `var(--framer-icon-mask)`),
      (wo = c(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (To = _.create(wo)),
      (Eo = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(To, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (Do = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 2 0 L 0 1.9" fill="transparent" height="1.9000000000000004px" id="O5Q5oOSBq" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 4.1)" width="2px"/><path d="M 2.9 0.8 L 0 0" fill="transparent" height="1px" id="bLUrnu6Xa" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2.2 7.2)" width="2.9px"/><path d="M 1.9 0 L 0 2" fill="transparent" height="2px" id="T6wJOe5uz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4.1 12)" width="1.9000000000000004px"/><path d="M 0 0 L 0.8 2.9" fill="transparent" height="2.8999999999999995px" id="Vw0YQnHlx" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(7.2 2.2)" width="1px"/><path d="M 0.04 0.693 C -0.04 0.506 0.002 0.289 0.146 0.146 C 0.289 0.002 0.506 -0.04 0.693 0.04 L 11.693 4.54 C 11.893 4.622 12.018 4.825 12.001 5.041 C 11.984 5.258 11.83 5.438 11.619 5.489 L 7.27 6.53 C 6.904 6.617 6.618 6.903 6.53 7.269 L 5.49 11.619 C 5.44 11.831 5.259 11.986 5.042 12.003 C 4.825 12.02 4.622 11.894 4.54 11.693 Z" fill="transparent" height="12.004397001187371px" id="O22816X_Q" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8.997 8.997)" width="12.002845573328965px"/></svg>`),
      (Oo = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (ko = ge(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Oo(e),
            l = xe(`3028356511`, Do);
          return f(Eo, {
            ...c,
            className: A(`framer-Me9wI`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-Me9wI { -webkit-mask: ${Co}; aspect-ratio: 1; display: block; mask: ${Co}; width: 24px; }`,
        ],
        `framer-Me9wI`
      )),
      (ko.displayName = `Mouse Pointer Click`),
      ke(ko, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: k.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  });
function jo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Vo,
  Ho,
  Uo = t(() => {
    (p(),
      j(),
      ie(),
      h(),
      Ao(),
      (Mo = b(ko)),
      (No = [`n89U175W6`, `wmFvLQQ_E`]),
      (Po = `framer-P6k62`),
      (Fo = { n89U175W6: `framer-v-pwdhof`, wmFvLQQ_E: `framer-v-1y849zk` }),
      (Io = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Lo = ({ value: e, children: t }) => {
        let r = n(v),
          i = e ?? r.transition,
          a = d(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(v.Provider, { value: a, children: t });
      }),
      (Ro = { "Variant 1": `n89U175W6`, Variant: `wmFvLQQ_E` }),
      (zo = _.create(s)),
      (Bo = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ro[r.variant] ?? r.variant ?? `n89U175W6`,
      })),
      (Vo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ho = ge(
        c(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = te(),
            { activeLocale: a, setLocale: s } = Ee();
          se();
          let { style: c, className: l, layoutId: u, variant: d, ...p } = Bo(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: ee,
              gestureHandlers: g,
              gestureVariant: v,
              isLoading: ne,
              setGestureState: ie,
              setVariant: ae,
              variants: y,
            } = le({
              cycleOrder: No,
              defaultVariant: `n89U175W6`,
              ref: r,
              variant: d,
              variantClassNames: Fo,
            }),
            b = Vo(e, y),
            x = A(Po),
            S = () => m !== `wmFvLQQ_E`;
          return f(re, {
            id: u ?? i,
            children: f(zo, {
              animate: y,
              initial: !1,
              children: f(Lo, {
                value: Io,
                children: f(_.div, {
                  ...p,
                  ...g,
                  className: A(x, `framer-pwdhof`, l, h),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: b,
                  layoutId: `n89U175W6`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(255, 157, 46, 0.44)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backdropFilter: `none`,
                    backgroundColor: `rgb(255, 255, 255)`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    WebkitBackdropFilter: `none`,
                    ...c,
                  },
                  variants: {
                    wmFvLQQ_E: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      backdropFilter: `blur(4px)`,
                      backgroundColor: `rgba(255, 157, 46, 0.18)`,
                      WebkitBackdropFilter: `blur(4px)`,
                    },
                  },
                  ...jo({ wmFvLQQ_E: { "data-framer-name": void 0 } }, m, v),
                  children:
                    S() &&
                    f(ko, {
                      animated: !0,
                      className: `framer-h6jqbw`,
                      layoutDependency: b,
                      layoutId: `bEaZO3plo`,
                      style: { "--1m973uw": `rgb(46, 48, 53)`, "--js9iwy": 1.5 },
                    }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-P6k62.framer-7g6hcp, .framer-P6k62 .framer-7g6hcp { display: block; }`,
          `.framer-P6k62.framer-pwdhof { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 41px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 41px; }`,
          `.framer-P6k62 .framer-h6jqbw { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 23px; }`,
          `.framer-P6k62[data-border="true"]::after, .framer-P6k62 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-P6k62`
      )),
      (Ho.displayName = `Cursor`),
      (Ho.defaultProps = { height: 41, width: 41 }),
      ke(Ho, {
        variant: {
          options: [`n89U175W6`, `wmFvLQQ_E`],
          optionTitles: [`Variant 1`, `Variant`],
          title: `Variant`,
          type: k.Enum,
        },
      }),
      T(Ho, [{ explicitInter: !0, fonts: [] }, ...Mo], { supportsExplicitInterCodegen: !0 }));
  }),
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo = t(() => {
    (p(),
      j(),
      h(),
      (Wo = `var(--framer-icon-mask)`),
      (Go = c(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ko = _.create(Go)),
      (qo = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(Ko, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (Jo = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 14 0" fill="transparent" height="1px" id="For6a1EEX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 12)" width="14px"/><path d="M 0 0 L 0 14" fill="transparent" height="14px" id="TzsgOXd8_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 5)" width="1px"/></svg>`),
      (Yo = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (Xo = ge(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = Yo(e),
            l = xe(`3356954461`, Jo);
          return f(qo, {
            ...c,
            className: A(`framer-K11hZ`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-K11hZ { -webkit-mask: ${Wo}; aspect-ratio: 1; display: block; mask: ${Wo}; width: 24px; }`,
        ],
        `framer-K11hZ`
      )),
      (Xo.displayName = `Plus`),
      ke(Xo, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: k.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  });
function Qo(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var $o,
  es,
  ts,
  ns,
  rs,
  is,
  as,
  os,
  ss,
  cs,
  ls,
  us = t(() => {
    (p(),
      j(),
      ie(),
      h(),
      Zo(),
      ($o = b(Xo)),
      (es = [`rNo_3YN1A`, `NyEsmyyNT`]),
      (ts = `framer-viVzw`),
      (ns = { NyEsmyyNT: `framer-v-d5hcbm`, rNo_3YN1A: `framer-v-13mup2e` }),
      (rs = { bounce: 0.2, delay: 0, duration: 0.3, type: `spring` }),
      (is = ({ value: e, children: t }) => {
        let r = n(v),
          i = e ?? r.transition,
          a = d(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(v.Provider, { value: a, children: t });
      }),
      (as = { Closed: `NyEsmyyNT`, Open: `rNo_3YN1A` }),
      (os = _.create(s)),
      (ss = ({ height: e, id: t, pregunta: n, respuesta: r, width: i, ...a }) => ({
        ...a,
        EEtfskIwx: n ?? a.EEtfskIwx ?? `gdgagag`,
        q6rUJ8cz9: r ?? a.q6rUJ8cz9 ?? `dggfaga`,
        variant: as[a.variant] ?? a.variant ?? `rNo_3YN1A`,
      })),
      (cs = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ls = ge(
        c(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = te(),
            { activeLocale: a, setLocale: c } = Ee();
          se();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              EEtfskIwx: h,
              q6rUJ8cz9: ee,
              ...g
            } = ss(e),
            {
              baseVariant: v,
              classNames: ne,
              clearLoadingGesture: ie,
              gestureHandlers: ae,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: S,
              variants: oe,
            } = le({
              cycleOrder: es,
              defaultVariant: `rNo_3YN1A`,
              ref: r,
              variant: p,
              variantClassNames: ns,
            }),
            C = cs(e, oe),
            { activeVariantCallback: T, delay: E } = ce(v),
            ue = T(async (...e) => {
              S(me);
            }),
            de = A(ts),
            fe = () => v !== `NyEsmyyNT`;
          return f(re, {
            id: d ?? i,
            children: f(os, {
              animate: oe,
              initial: !1,
              children: f(is, {
                value: rs,
                children: m(_.div, {
                  ...g,
                  ...ae,
                  className: A(de, `framer-13mup2e`, u, ne),
                  "data-border": !0,
                  "data-framer-name": `Open`,
                  layoutDependency: C,
                  layoutId: `rNo_3YN1A`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(46, 48, 53, 0.18)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgb(247, 247, 244)`,
                    ...l,
                  },
                  ...Qo({ NyEsmyyNT: { "data-framer-name": `Closed` } }, v, y),
                  children: [
                    m(_.div, {
                      className: `framer-1pzees0`,
                      "data-framer-name": `Question Row`,
                      "data-highlight": !0,
                      layoutDependency: C,
                      layoutId: `OSrXElMm0`,
                      onTap: ue,
                      children: [
                        f(w, {
                          __fromCanvasComponent: !0,
                          children: f(s, {
                            children: f(_.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7TnVuaXRvLWV4dHJhYm9sZA==`,
                                "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                "--framer-font-size": `18px`,
                                "--framer-font-weight": `800`,
                                "--framer-line-height": `1.25em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, #2E3035)`,
                              },
                              children: `Question`,
                            }),
                          }),
                          className: `framer-166d2f6`,
                          "data-framer-name": `gdgdaga`,
                          fonts: [`FS;Nunito-extrabold`],
                          layoutDependency: C,
                          layoutId: `i7vSUIw2J`,
                          style: { "--extracted-r6o4lv": `#2E3035` },
                          text: h,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        f(Xo, {
                          animated: !0,
                          className: `framer-vhfeks`,
                          layoutDependency: C,
                          layoutId: `y8LjtoP8Y`,
                          style: { "--1m973uw": `rgb(46, 48, 53)`, "--js9iwy": 1.5 },
                        }),
                      ],
                    }),
                    fe() &&
                      f(w, {
                        __fromCanvasComponent: !0,
                        children: f(s, {
                          children: f(_.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `RlM7TnVuaXRvLW1lZGl1bQ==`,
                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                              "--framer-font-size": `15px`,
                              "--framer-font-weight": `500`,
                              "--framer-line-height": `1.45em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(74, 77, 86))`,
                            },
                            children: `We design brands, websites, content systems, and digital experiences with a clear point of view.`,
                          }),
                        }),
                        className: `framer-j58vb0`,
                        fonts: [`FS;Nunito-medium`],
                        layoutDependency: C,
                        layoutId: `T_8s6OcCl`,
                        style: { "--extracted-r6o4lv": `rgb(74, 77, 86)` },
                        text: ee,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-viVzw.framer-1c2u845, .framer-viVzw .framer-1c2u845 { display: block; }`,
          `.framer-viVzw.framer-13mup2e { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px 0px 24px 0px; position: relative; width: 400px; }`,
          `.framer-viVzw .framer-1pzees0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-viVzw .framer-166d2f6 { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-viVzw .framer-vhfeks { flex: none; height: auto; position: relative; width: 22px; }`,
          `.framer-viVzw .framer-j58vb0 { --framer-text-wrap: balance; -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-viVzw[data-border="true"]::after, .framer-viVzw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-viVzw`
      )),
      (ls.displayName = `FAQ Question`),
      (ls.defaultProps = { height: 104, width: 400 }),
      ke(ls, {
        variant: {
          options: [`rNo_3YN1A`, `NyEsmyyNT`],
          optionTitles: [`Open`, `Closed`],
          title: `Variant`,
          type: k.Enum,
        },
        EEtfskIwx: { defaultValue: `gdgagag`, title: `Pregunta`, type: k.String },
        onEEtfskIwxChange: { changes: `EEtfskIwx`, type: k.ChangeHandler },
        q6rUJ8cz9: { defaultValue: `dggfaga`, title: `Respuesta`, type: k.String },
        onq6rUJ8cz9Change: { changes: `q6rUJ8cz9`, type: k.ChangeHandler },
      }),
      T(
        ls,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Nunito`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Nunito`,
                url: `../../assets/misc/DA6SBKJCYG2VMA5IQWRWJEW6ZUKE3654.woff2`,
                weight: `800`,
              },
              {
                cssFamilyName: `Nunito`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Nunito`,
                url: `../../assets/misc/XZA7IBHUHTN5TQGW7L7CCGBY3MTQ4TPH.woff2`,
                weight: `500`,
              },
            ],
          },
          ...$o,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs = t(() => {
    (p(),
      j(),
      h(),
      (ds = `var(--framer-icon-mask)`),
      (fs = c(function (e, t) {
        return f(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ps = _.create(fs)),
      (ms = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? f(ps, { ...a, layoutId: r, ref: t, children: i })
          : f(`svg`, { ...a, ref: t, children: i });
      })),
      (hs = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 16 0" fill="transparent" height="1px" id="YnobPTYMb" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 5)" width="16px"/><path d="M 0 0 L 16 0" fill="transparent" height="1px" id="Cb0Gao21R" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 12)" width="16px"/><path d="M 0 0 L 16 0" fill="transparent" height="1px" id="oPtuyu4df" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 19)" width="16px"/></svg>`),
      (gs = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        JEeZYcamG: i ?? a.JEeZYcamG ?? 2,
        P_DcoRcrY: e ?? a.P_DcoRcrY ?? `rgb(0, 0, 0)`,
      })),
      (_s = ge(
        c(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              P_DcoRcrY: o,
              JEeZYcamG: s,
              ...c
            } = gs(e),
            l = xe(`3467097230`, hs);
          return f(ms, {
            ...c,
            className: A(`framer-grV1P`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1m973uw": o, "--js9iwy": s, ...n },
            viewBox: `0 0 24 24`,
            children: f(`use`, { href: l }),
          });
        }),
        [
          `.framer-grV1P { -webkit-mask: ${ds}; aspect-ratio: 1; display: block; mask: ${ds}; width: 24px; }`,
        ],
        `framer-grV1P`
      )),
      (_s.displayName = `Menu`),
      ke(_s, {
        P_DcoRcrY: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: k.Color },
        JEeZYcamG: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 16,
          min: 1,
          title: `Width`,
          type: k.Number,
        },
      }));
  }),
  ys,
  bs,
  xs,
  Ss = t(() => {
    (j(),
      C.loadFonts([]),
      (ys = [{ explicitInter: !0, fonts: [] }]),
      (bs = [
        `.framer-B7TfL .framer-styles-preset-7fb1fq:not(.rich-text-wrapper), .framer-B7TfL .framer-styles-preset-7fb1fq.rich-text-wrapper a { --framer-link-current-text-color: #1ddb7c; --framer-link-hover-text-color: #ff8a00; --framer-link-text-color: #ffffff; --framer-link-text-decoration: none; transition-delay: 0s; transition-duration: 0.2s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
      ]),
      (xs = `framer-B7TfL`));
  }),
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs = t(() => {
    (p(),
      j(),
      ie(),
      h(),
      vs(),
      Ss(),
      (Cs = b(_s)),
      (ws = ue(_.div)),
      (Ts = `framer-X1MNm`),
      (Es = { hxzUDMqmZ: `framer-v-c68tsi` }),
      (Ds = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Os = { bounce: 0.25, delay: 0, duration: 0.24, type: `spring` }),
      (ks = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.98,
        skewX: 0,
        skewY: 0,
        transition: Os,
        x: -8,
        y: 0,
      }),
      (As = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Os,
        x: 0,
        y: 0,
      }),
      (js = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.98,
        skewX: 0,
        skewY: 0,
        x: -8,
        y: 0,
      }),
      (Ms = ({ value: e, children: t }) => {
        let r = n(v),
          i = e ?? r.transition,
          a = d(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(v.Provider, { value: a, children: t });
      }),
      (Ns = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = Se({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (Ps = _.create(s)),
      (Fs = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Is = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ls = ge(
        c(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = te(),
            { activeLocale: a, setLocale: c } = Ee();
          se();
          let { style: l, className: d, layoutId: p, variant: h, ...ee } = Fs(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: ie,
              gestureHandlers: ae,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: S,
              variants: oe,
            } = le({ defaultVariant: `hxzUDMqmZ`, ref: r, variant: h, variantClassNames: Es }),
            C = Is(e, oe),
            { activeVariantCallback: T, delay: ue } = ce(g),
            de = ({ overlay: e }) =>
              T(async (...t) => {
                (x({ isPressed: !1 }), e.show());
              }),
            fe = A(Ts, xs),
            pe = o(null);
          return f(re, {
            id: p ?? i,
            children: f(Ps, {
              animate: oe,
              initial: !1,
              children: f(Ns, {
                blockDocumentScrolling: !1,
                dismissWithEsc: !1,
                children: (e) =>
                  f(u, {
                    children: f(Ms, {
                      value: Ds,
                      children: m(_.div, {
                        ...ee,
                        ...ae,
                        className: A(fe, `framer-c68tsi`, d, v),
                        "data-framer-name": `Variant 1`,
                        "data-highlight": !0,
                        id: `${p}-c68tsi`,
                        layoutDependency: C,
                        layoutId: `hxzUDMqmZ`,
                        onTap: de({ overlay: e }),
                        ref: r,
                        style: {
                          backgroundColor: `rgb(255, 255, 255)`,
                          borderBottomLeftRadius: 100,
                          borderBottomRightRadius: 100,
                          borderTopLeftRadius: 100,
                          borderTopRightRadius: 100,
                          ...l,
                        },
                        children: [
                          f(_s, {
                            animated: !0,
                            className: `framer-119a0a1`,
                            "data-framer-name": `Menu Icon`,
                            layoutDependency: C,
                            layoutId: `BLgYogfbQ`,
                            style: { "--1m973uw": `rgb(0, 87, 255)`, "--js9iwy": 2 },
                          }),
                          f(ne, {
                            children:
                              e.visible &&
                              f(be, {
                                alignment: `start`,
                                anchorRef: r,
                                className: A(fe, v),
                                collisionDetection: !0,
                                collisionDetectionPadding: 20,
                                "data-framer-portal-id": `${p}-c68tsi`,
                                offsetX: 18,
                                offsetY: 0,
                                onDismiss: e.hide,
                                placement: `right`,
                                safeArea: !0,
                                zIndex: 9,
                                children: m(ws, {
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: As,
                                  className: `framer-1gcqznr`,
                                  "data-border": !0,
                                  exit: ks,
                                  initial: js,
                                  layoutDependency: C,
                                  layoutId: `UBJ9yAZ38`,
                                  ref: pe,
                                  role: `dialog`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `rgba(255, 255, 255, 0.12)`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `rgb(46, 48, 53)`,
                                    borderBottomLeftRadius: 24,
                                    borderBottomRightRadius: 24,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    boxShadow: `0px 24px 70px 0px rgba(0, 0, 0, 0.24)`,
                                  },
                                  children: [
                                    m(_.div, {
                                      className: `framer-dhfhsd`,
                                      "data-framer-name": `Menu Header`,
                                      layoutDependency: C,
                                      layoutId: `CBIlhzaYP`,
                                      children: [
                                        f(_.div, {
                                          className: `framer-1b2fs1r`,
                                          layoutDependency: C,
                                          layoutId: `ANNXkf1tq`,
                                          style: {
                                            backgroundColor: `rgb(0, 87, 255)`,
                                            borderBottomLeftRadius: 100,
                                            borderBottomRightRadius: 100,
                                            borderTopLeftRadius: 100,
                                            borderTopRightRadius: 100,
                                          },
                                          children: f(w, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: f(_.p, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `RlM7U3R5cm8tdmFyaWFibGVWRj1JbmRuYUhRaUlEa3dNQT09`,
                                                  "--framer-font-family": `"Styro Variable", sans-serif`,
                                                  "--framer-font-size": `24px`,
                                                  "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 900)`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                                                },
                                                children: `Q`,
                                              }),
                                            }),
                                            className: `framer-cnm9is`,
                                            fonts: [`FS;Styro-variable`],
                                            layoutDependency: C,
                                            layoutId: `D2MScJ4zU`,
                                            style: {
                                              "--extracted-2gg91v": `"wght" 900`,
                                              "--extracted-r6o4lv": `#FFFFFF`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        m(_.div, {
                                          className: `framer-10xa2sc`,
                                          layoutDependency: C,
                                          layoutId: `nMmL7ZVdB`,
                                          children: [
                                            f(w, {
                                              __fromCanvasComponent: !0,
                                              children: f(s, {
                                                children: f(_.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                                    "--framer-font-family": `"Nunito", sans-serif`,
                                                    "--framer-font-size": `18px`,
                                                    "--framer-font-weight": `900`,
                                                    "--framer-line-height": `1em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                                                  },
                                                  children: `Explore the page`,
                                                }),
                                              }),
                                              className: `framer-ntenpf`,
                                              fonts: [`FS;Nunito-black`],
                                              layoutDependency: C,
                                              layoutId: `sXlFhonI3`,
                                              style: { "--extracted-r6o4lv": `#FFFFFF` },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            f(w, {
                                              __fromCanvasComponent: !0,
                                              children: f(s, {
                                                children: f(_.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `RlM7TnVuaXRvLXNlbWlib2xk`,
                                                    "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                                    "--framer-font-size": `13px`,
                                                    "--framer-font-weight": `600`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255,255,255,0.62))`,
                                                  },
                                                  children: `Jump to any section`,
                                                }),
                                              }),
                                              className: `framer-1mixx8g`,
                                              fonts: [`FS;Nunito-semibold`],
                                              layoutDependency: C,
                                              layoutId: `pfChlZ5xF`,
                                              style: {
                                                "--extracted-r6o4lv": `rgba(255,255,255,0.62)`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    m(_.div, {
                                      className: `framer-1q0wopy`,
                                      "data-framer-name": `Section Links`,
                                      layoutDependency: C,
                                      layoutId: `VSXRngoly`,
                                      children: [
                                        f(w, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(_.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                                "--framer-font-size": `32px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                              },
                                              children: f(E, {
                                                href: {
                                                  hash: `:AlZ9vDXO8`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `TASg8gnZq`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `VxjLoedS3`,
                                                smoothScroll: !0,
                                                children: f(_.a, {
                                                  className: `framer-styles-preset-7fb1fq`,
                                                  "data-styles-preset": `nrhNy1qDO`,
                                                  children: `Inicio`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1oqwyrv`,
                                          fonts: [`GF;Karantina-700`],
                                          layoutDependency: C,
                                          layoutId: `TASg8gnZq`,
                                          style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(w, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(_.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                "--framer-font-family": `"Karantina", sans-serif`,
                                                "--framer-font-size": `32px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                              },
                                              children: f(E, {
                                                href: {
                                                  hash: `:I2owgsAtB`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `qVDMcfCjt`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `VxjLoedS3`,
                                                smoothScroll: !0,
                                                children: f(_.a, {
                                                  className: `framer-styles-preset-7fb1fq`,
                                                  "data-styles-preset": `nrhNy1qDO`,
                                                  children: `Servicios`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-hhkna1`,
                                          fonts: [`GF;Karantina-700`],
                                          layoutDependency: C,
                                          layoutId: `qVDMcfCjt`,
                                          style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(w, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(_.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                                "--framer-font-size": `32px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                              },
                                              children: f(E, {
                                                href: {
                                                  hash: `:NxFfdCg0r`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `XrJfJRzHB`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `VxjLoedS3`,
                                                smoothScroll: !0,
                                                children: f(_.a, {
                                                  className: `framer-styles-preset-7fb1fq`,
                                                  "data-styles-preset": `nrhNy1qDO`,
                                                  children: `Quiénes somos`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1d4xiya`,
                                          fonts: [`GF;Karantina-700`],
                                          layoutDependency: C,
                                          layoutId: `XrJfJRzHB`,
                                          style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(w, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(_.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                "--framer-font-family": `"Karantina", sans-serif`,
                                                "--framer-font-size": `32px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                              },
                                              children: f(E, {
                                                href: {
                                                  hash: `:FafHf3TkE`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `pqk9iE7Vo`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `VxjLoedS3`,
                                                smoothScroll: !0,
                                                children: f(_.a, {
                                                  className: `framer-styles-preset-7fb1fq`,
                                                  "data-styles-preset": `nrhNy1qDO`,
                                                  children: `Proyectos destacados`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-14ammmt`,
                                          fonts: [`GF;Karantina-700`],
                                          layoutDependency: C,
                                          layoutId: `pqk9iE7Vo`,
                                          style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(w, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(_.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                "--framer-font-family": `"Karantina", sans-serif`,
                                                "--framer-font-size": `32px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                              },
                                              children: f(E, {
                                                href: {
                                                  hash: `:RR5gt5p8i`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `AAQZfQCMK`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `VxjLoedS3`,
                                                smoothScroll: !0,
                                                children: f(_.a, {
                                                  className: `framer-styles-preset-7fb1fq`,
                                                  "data-styles-preset": `nrhNy1qDO`,
                                                  children: `Cómo trabajamos`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1n9vd35`,
                                          fonts: [`GF;Karantina-700`],
                                          layoutDependency: C,
                                          layoutId: `AAQZfQCMK`,
                                          style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(w, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(_.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                                "--framer-font-size": `32px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                              },
                                              children: f(E, {
                                                href: {
                                                  hash: `:rNKbpcHQ1`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `uiQncnow4`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `VxjLoedS3`,
                                                smoothScroll: !0,
                                                children: f(_.a, {
                                                  className: `framer-styles-preset-7fb1fq`,
                                                  "data-styles-preset": `nrhNy1qDO`,
                                                  children: `Testimonios`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1220ae7`,
                                          fonts: [`GF;Karantina-700`],
                                          layoutDependency: C,
                                          layoutId: `uiQncnow4`,
                                          style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(w, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(_.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                                "--framer-font-size": `32px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                              },
                                              children: f(E, {
                                                href: {
                                                  hash: `:bLjUYaCNu`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `lZGwAvehm`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `VxjLoedS3`,
                                                smoothScroll: !0,
                                                children: f(_.a, {
                                                  className: `framer-styles-preset-7fb1fq`,
                                                  "data-styles-preset": `nrhNy1qDO`,
                                                  children: `Preguntas`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-1kt8ldt`,
                                          fonts: [`GF;Karantina-700`],
                                          layoutDependency: C,
                                          layoutId: `lZGwAvehm`,
                                          style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        f(w, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(_.p, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                "--framer-font-family": `"Karantina", sans-serif`,
                                                "--framer-font-size": `32px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-line-height": `1em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                              },
                                              children: f(E, {
                                                href: {
                                                  hash: `:jFu1eHBue`,
                                                  webPageId: `augiA20Il`,
                                                },
                                                motionChild: !0,
                                                nodeId: `WPoQxik7o`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `VxjLoedS3`,
                                                smoothScroll: !0,
                                                children: f(_.a, {
                                                  className: `framer-styles-preset-7fb1fq`,
                                                  "data-styles-preset": `nrhNy1qDO`,
                                                  children: `Contacto`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-l853yh`,
                                          fonts: [`GF;Karantina-700`],
                                          layoutDependency: C,
                                          layoutId: `WPoQxik7o`,
                                          style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    m(_.div, {
                                      className: `framer-q925l3`,
                                      layoutDependency: C,
                                      layoutId: `saq3n1hc2`,
                                      children: [
                                        f(_.div, {
                                          className: `framer-vy9zkz`,
                                          layoutDependency: C,
                                          layoutId: `z6XeEdGja`,
                                          style: {
                                            backgroundColor: `rgb(0, 87, 255)`,
                                            borderBottomLeftRadius: 100,
                                            borderBottomRightRadius: 100,
                                            borderTopLeftRadius: 100,
                                            borderTopRightRadius: 100,
                                          },
                                        }),
                                        f(_.div, {
                                          className: `framer-5eckrh`,
                                          layoutDependency: C,
                                          layoutId: `FuX3zvPWk`,
                                          style: {
                                            backgroundColor: `rgb(29, 219, 124)`,
                                            borderBottomLeftRadius: 100,
                                            borderBottomRightRadius: 100,
                                            borderTopLeftRadius: 100,
                                            borderTopRightRadius: 100,
                                          },
                                        }),
                                        f(_.div, {
                                          className: `framer-d530a1`,
                                          layoutDependency: C,
                                          layoutId: `G3mzx81Cr`,
                                          style: {
                                            backgroundColor: `rgb(255, 138, 0)`,
                                            borderBottomLeftRadius: 100,
                                            borderBottomRightRadius: 100,
                                            borderTopLeftRadius: 100,
                                            borderTopRightRadius: 100,
                                          },
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                          }),
                        ],
                      }),
                    }),
                  }),
              }),
            }),
          });
        }),
        [
          `.framer-X1MNm.framer-vvyzdp, .framer-X1MNm .framer-vvyzdp { display: block; }`,
          `.framer-X1MNm.framer-c68tsi { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-X1MNm .framer-119a0a1 { flex: none; height: auto; position: relative; width: 20px; }`,
          `.framer-X1MNm .framer-1gcqznr { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 340px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-X1MNm .framer-dhfhsd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-X1MNm .framer-1b2fs1r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 42px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 42px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-X1MNm .framer-cnm9is { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-X1MNm .framer-10xa2sc { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
          `.framer-X1MNm .framer-ntenpf, .framer-X1MNm .framer-1mixx8g, .framer-X1MNm .framer-1oqwyrv, .framer-X1MNm .framer-hhkna1, .framer-X1MNm .framer-1d4xiya, .framer-X1MNm .framer-14ammmt, .framer-X1MNm .framer-1n9vd35, .framer-X1MNm .framer-1220ae7, .framer-X1MNm .framer-1kt8ldt, .framer-X1MNm .framer-l853yh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-X1MNm .framer-1q0wopy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-X1MNm .framer-q925l3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-X1MNm .framer-vy9zkz, .framer-X1MNm .framer-5eckrh, .framer-X1MNm .framer-d530a1 { flex: none; height: 14px; position: relative; width: 14px; }`,
          ...bs,
          `.framer-X1MNm[data-border="true"]::after, .framer-X1MNm [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-X1MNm`
      )),
      (Ls.displayName = `Menu Button`),
      (Ls.defaultProps = { height: 40, width: 40 }),
      T(
        Ls,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Styro Variable`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Styro`,
                url: `../../assets/misc/7VJVVOZ5KBSLF6KBBXGIKDUV7RXGSM77.woff2`,
                variationAxes: [
                  { defaultValue: 900, maxValue: 900, minValue: 200, name: `Weight`, tag: `wght` },
                ],
                weight: `400`,
              },
              {
                cssFamilyName: `Nunito`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Nunito`,
                url: `../../assets/misc/W5V7CAN3UXPRAAGP4NZQP6AVRBJRK74M.woff2`,
                weight: `900`,
              },
              {
                cssFamilyName: `Nunito`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Nunito`,
                url: `../../assets/misc/MKTS7VJCH3IMUVTV3MN54KOVFE4Y43BD.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Karantina`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Karantina`,
                url: `https://fonts.gstatic.com/s/karantina/v13/buExpo24ccnh31GVMABxTC8f_f5Oaiw4cw.woff2`,
                weight: `700`,
              },
            ],
          },
          ...Cs,
          ...x(ys),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function zs(e, t) {
  return { robots: `max-image-preview:large`, title: `KiwiDesign` };
}
var Bs = t(() => {});
function Vs(e, t) {
  return {
    breakpoints: [
      { hash: `o1x8zi`, mediaQuery: `(min-width: 2000px)` },
      { hash: `72rtr7`, mediaQuery: `(min-width: 1200px) and (max-width: 1999.98px)` },
      { hash: `pnhjd`, mediaQuery: `(min-width: 800px) and (max-width: 1199.98px)` },
      { hash: `15dzkfq`, mediaQuery: `(max-width: 799.98px)` },
    ],
    description: zs(e, t).description,
    elements: {
      AlZ9vDXO8: `home`,
      bLjUYaCNu: `faq`,
      FafHf3TkE: `trabajo`,
      I2owgsAtB: `servicios`,
      jFu1eHBue: `contacto`,
      NxFfdCg0r: `nosotros`,
      rNKbpcHQ1: `testimonios`,
      RR5gt5p8i: `pasos`,
    },
    robots: `max-image-preview:large`,
    serializationId: `framer-jQJOI`,
    title: zs(e, t).title || `Home`,
    viewport: `width=device-width`,
  };
}
var Hs,
  Us,
  Ws = t(() => {
    (Bs(),
      (Hs = 1),
      (Us = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc,
  rc,
  ic,
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Cc = t(() => {
    (p(),
      j(),
      ie(),
      h(),
      So(),
      Uo(),
      us(),
      Rs(),
      Ss(),
      Ws(),
      (Gs = b(Ls)),
      (Ks = b(xo)),
      (qs = ue(_.div)),
      (Js = _e(_.div)),
      (Ys = fe(_.div)),
      (Xs = ue(w)),
      (Zs = b(ls)),
      (Qs = b(Ho)),
      ($s = {
        Pzb7nykTb: `(max-width: 799.98px)`,
        Syu0Zqy0H: `(min-width: 2000px)`,
        WQLkyLRf1: `(min-width: 1200px) and (max-width: 1999.98px)`,
        YMmTws0d3: `(min-width: 800px) and (max-width: 1199.98px)`,
      }),
      (ec = () => typeof document < `u`),
      (tc = [`amount`]),
      (nc = `framer-jQJOI`),
      (rc = {
        Pzb7nykTb: `framer-v-15dzkfq`,
        Syu0Zqy0H: `framer-v-o1x8zi`,
        WQLkyLRf1: `framer-v-72rtr7`,
        YMmTws0d3: `framer-v-pnhjd`,
      }),
      (ic = (e, t, n) => (e && t ? `position` : n)),
      (ac = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (oc = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        transition: ac,
      }),
      (sc = (e, t) => `translateY(-50%) ${t}`),
      (cc = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 150,
      }),
      (lc = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (uc = { bounce: 0.2, delay: 0, duration: 0.8, type: `spring` }),
      (dc = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: ac,
        x: 0,
        y: 0,
      }),
      (fc = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.5,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (pc = (e, t) => `translateX(-50%) ${t}`),
      (mc = { bounce: 0.25, delay: 0, duration: 2, type: `spring` }),
      (hc = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (gc = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (_c = { BigBoy: `Syu0Zqy0H`, Desktop: `WQLkyLRf1`, Phone: `Pzb7nykTb`, Tablet: `YMmTws0d3` }),
      (vc = ({ value: e }) =>
        de()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (yc = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: _c[r.variant] ?? r.variant ?? `WQLkyLRf1`,
      })),
      (bc = {
        alignment: `start`,
        component: Ho,
        offset: { x: -16, y: -16 },
        placement: `bottom`,
        transition: { bounce: 0, delay: 0, duration: 0.3, type: `spring` },
        variant: `wmFvLQQ_E`,
      }),
      (xc = ge(
        c(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = te(),
            { activeLocale: c, setLocale: l } = Ee(),
            u = se(),
            [p] = we({ initialValue: `100%`, parameterName: `amount` }),
            { style: h, className: ee, layoutId: g, variant: ne, ...ie } = yc(e);
          ye(d(() => Vs({}, c), [c]));
          let [y, b] = ae(ne, $s, !1),
            x = A(nc, xs),
            C = n(Ce)?.isLayoutTemplate,
            ce = !!n(v)?.transition?.layout,
            T = ic(C, ce),
            le = () => !ec() || ![`YMmTws0d3`, `Pzb7nykTb`].includes(y),
            ue = he(`AlZ9vDXO8`),
            de = o(null),
            fe = () => !ec() || y !== `Pzb7nykTb`,
            pe = () => !ec() || y === `Syu0Zqy0H`,
            me = he(`I2owgsAtB`),
            ge = o(null),
            _e = he(`FafHf3TkE`),
            be = o(null),
            xe = he(`RR5gt5p8i`),
            k = o(null),
            Se = he(`NxFfdCg0r`),
            De = o(null),
            ke = he(`rNKbpcHQ1`),
            j = o(null),
            M = he(`bLjUYaCNu`),
            je = o(null),
            N = he(`jFu1eHBue`),
            Me = o(null);
          return (
            oe({ "1ch3doc": bc }),
            f(Ce.Provider, {
              value: {
                activeVariantId: y,
                humanReadableVariantMap: _c,
                primaryVariantId: `WQLkyLRf1`,
                variantClassNames: rc,
              },
              children: m(re, {
                id: g ?? a,
                children: [
                  f(vc, {
                    value: `html body { background: rgb(247, 247, 244); } html { font-size: 112.5%; }`,
                  }),
                  m(_.div, {
                    ...ie,
                    className: A(x, `framer-72rtr7`, ee),
                    "data-framer-cursor": `1ch3doc`,
                    ref: i,
                    style: { ...h },
                    children: [
                      m(_.div, {
                        className: `framer-14ixeaw`,
                        "data-framer-name": `Color Side Rail`,
                        layout: T,
                        children: [
                          f(O, {
                            breakpoint: y,
                            overrides: {
                              Pzb7nykTb: { y: 15 },
                              YMmTws0d3: { height: 30, width: `30px`, y: 7 },
                            },
                            children: f(Te, {
                              height: 40,
                              width: `40px`,
                              y: 22,
                              children: f(O, {
                                breakpoint: y,
                                overrides: { Pzb7nykTb: { transformTemplate: sc } },
                                children: f(ve, {
                                  className: `framer-19tmy7x-container`,
                                  nodeId: `zyR6jZKt0`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  whileHover: oc,
                                  children: f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      YMmTws0d3: {
                                        style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      },
                                    },
                                    children: f(Ls, {
                                      height: `100%`,
                                      id: `zyR6jZKt0`,
                                      layoutId: `zyR6jZKt0`,
                                      style: { height: `100%`, width: `100%` },
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                          le() &&
                            f(`div`, {
                              className: `framer-186rdp hidden-pnhjd hidden-15dzkfq`,
                              "data-framer-name": `Vertical Brand`,
                              children: f(w, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                      "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                      "--framer-font-size": `22px`,
                                      "--framer-font-weight": `900`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-color": `rgb(255, 255, 255)`,
                                    },
                                    children: `KiwiDesign®`,
                                  }),
                                }),
                                className: `framer-k19rv5`,
                                "data-framer-name": `Rail Logo`,
                                fonts: [`FS;Nunito-black`],
                                style: { rotate: -90 },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
                      f(Te, {
                        children: f(ve, {
                          className: `framer-bfzzh2-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layout: T,
                          layoutScroll: !0,
                          nodeId: `AY7AzKSEe`,
                          scopeId: `augiA20Il`,
                          children: f(xo, {
                            blur: 5,
                            borderRadius: 0,
                            direction: `toBottom`,
                            height: `100%`,
                            id: `AY7AzKSEe`,
                            layoutId: `AY7AzKSEe`,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                      m(_.section, {
                        className: `framer-atk8df`,
                        "data-framer-name": `Home`,
                        id: ue,
                        layout: T,
                        ref: de,
                        children: [
                          m(qs, {
                            __framer__animate: { transition: lc },
                            __framer__animateOnce: !0,
                            __framer__enter: cc,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-3y74lh`,
                            "data-framer-name": `Home`,
                            children: [
                              f(w, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                      "--framer-font-family": `"Nunito", sans-serif`,
                                      "--framer-font-size": `26px`,
                                      "--framer-font-weight": `900`,
                                      "--framer-line-height": `1em`,
                                      "--framer-text-color": `rgb(46, 48, 53)`,
                                    },
                                    children: `Diseño gráfico y Branding`,
                                  }),
                                }),
                                className: `framer-1vwniup`,
                                "data-framer-name": `Opening Eyebrow`,
                                fonts: [`FS;Nunito-black`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              f(O, {
                                breakpoint: y,
                                overrides: {
                                  Pzb7nykTb: {
                                    children: m(s, {
                                      children: [
                                        f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7U3R5cm8tc2VtaWJvbGQ=`,
                                            "--framer-font-family": `"Styro", sans-serif`,
                                            "--framer-font-size": `142px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0.03em`,
                                            "--framer-line-height": `0.78em`,
                                            "--framer-text-color": `rgb(0, 87, 255)`,
                                          },
                                          children: `Kiwi`,
                                        }),
                                        f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7U3R5cm8tc2VtaWJvbGQ=`,
                                            "--framer-font-family": `"Styro", sans-serif`,
                                            "--framer-font-size": `88px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0.03em`,
                                            "--framer-line-height": `0.78em`,
                                            "--framer-text-color": `rgb(0, 87, 255)`,
                                          },
                                          children: `Design`,
                                        }),
                                      ],
                                    }),
                                  },
                                  Syu0Zqy0H: {
                                    children: m(s, {
                                      children: [
                                        f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7U3R5cm8tc2VtaWJvbGQ=`,
                                            "--framer-font-family": `"Styro", "Styro Placeholder", sans-serif`,
                                            "--framer-font-size": `160px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0.03em`,
                                            "--framer-line-height": `0.78em`,
                                            "--framer-text-color": `rgb(0, 87, 255)`,
                                          },
                                          children: `Kiwi`,
                                        }),
                                        f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7U3R5cm8tc2VtaWJvbGQ=`,
                                            "--framer-font-family": `"Styro", "Styro Placeholder", sans-serif`,
                                            "--framer-font-size": `160px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0.03em`,
                                            "--framer-line-height": `0.78em`,
                                            "--framer-text-color": `rgb(0, 87, 255)`,
                                          },
                                          children: `Design`,
                                        }),
                                      ],
                                    }),
                                  },
                                  YMmTws0d3: {
                                    children: m(s, {
                                      children: [
                                        f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7U3R5cm8tc2VtaWJvbGQ=`,
                                            "--framer-font-family": `"Styro", "Styro Placeholder", sans-serif`,
                                            "--framer-font-size": `155px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0.03em`,
                                            "--framer-line-height": `0.78em`,
                                            "--framer-text-color": `rgb(0, 87, 255)`,
                                          },
                                          children: `Kiwi`,
                                        }),
                                        f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7U3R5cm8tc2VtaWJvbGQ=`,
                                            "--framer-font-family": `"Styro", "Styro Placeholder", sans-serif`,
                                            "--framer-font-size": `155px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-letter-spacing": `0.03em`,
                                            "--framer-line-height": `0.78em`,
                                            "--framer-text-color": `rgb(0, 87, 255)`,
                                          },
                                          children: `Design`,
                                        }),
                                      ],
                                    }),
                                  },
                                },
                                children: f(w, {
                                  __fromCanvasComponent: !0,
                                  children: m(s, {
                                    children: [
                                      f(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7U3R5cm8tc2VtaWJvbGQ=`,
                                          "--framer-font-family": `"Styro", sans-serif`,
                                          "--framer-font-size": `142px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `0.03em`,
                                          "--framer-line-height": `0.78em`,
                                          "--framer-text-color": `rgb(0, 87, 255)`,
                                        },
                                        children: `Kiwi`,
                                      }),
                                      f(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7U3R5cm8tc2VtaWJvbGQ=`,
                                          "--framer-font-family": `"Styro", sans-serif`,
                                          "--framer-font-size": `142px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-letter-spacing": `0.03em`,
                                          "--framer-line-height": `0.78em`,
                                          "--framer-text-color": `rgb(0, 87, 255)`,
                                        },
                                        children: `Design`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-yk8ujx`,
                                  "data-framer-name": `Opening Headline`,
                                  fonts: [`FS;Styro-semibold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              f(`div`, {
                                className: `framer-8gwva6`,
                                "data-framer-name": `Creative Stamp`,
                                children: f(w, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: m(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                        "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-font-weight": `900`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                      },
                                      children: [
                                        `IDEAS `,
                                        f(`span`, {
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWV4dHJhYm9sZA==`,
                                            "--framer-font-weight": `800`,
                                          },
                                          children: `↓`,
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-3rzu9v`,
                                  "data-framer-name": `Stamp Text`,
                                  fonts: [`FS;Nunito-black`, `FS;Nunito-extrabold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              fe() && f(`div`, { className: `framer-ng1y9 hidden-15dzkfq` }),
                              f(w, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TnVuaXRvLW1lZGl1bQ==`,
                                      "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                      "--framer-font-weight": `500`,
                                      "--framer-line-height": `1.5em`,
                                      "--framer-text-color": `rgb(74, 77, 86)`,
                                    },
                                    children: `Diseñamos identidades visuales y contenido que se siente genuino, memorable y vivo.`,
                                  }),
                                }),
                                className: `framer-nyba5f`,
                                "data-framer-name": `Opening Intro`,
                                fonts: [`FS;Nunito-medium`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              pe() &&
                                f(`div`, {
                                  className: `framer-nesem6 hidden-72rtr7 hidden-pnhjd hidden-15dzkfq`,
                                  "data-framer-name": `Creative Stamp`,
                                  children: f(w, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: m(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                          "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                          "--framer-font-size": `18px`,
                                          "--framer-font-weight": `900`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                        },
                                        children: [
                                          `IDEAS `,
                                          f(`span`, {
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWV4dHJhYm9sZA==`,
                                              "--framer-font-weight": `800`,
                                            },
                                            children: `↓`,
                                          }),
                                        ],
                                      }),
                                    }),
                                    className: `framer-1uhhodp`,
                                    "data-framer-name": `Stamp Text`,
                                    fonts: [`FS;Nunito-black`, `FS;Nunito-extrabold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                            ],
                          }),
                          fe() &&
                            m(`div`, {
                              className: `framer-1isq3kk hidden-15dzkfq`,
                              "data-framer-name": `Collage`,
                              children: [
                                f(`div`, {
                                  className: `framer-avcw6p`,
                                  "data-border": !0,
                                  "data-framer-name": `Collage Panel`,
                                  children: f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      Syu0Zqy0H: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 768,
                                          intrinsicWidth: 1376,
                                          loading: S((u?.y || 0) + 0 + 0 + 120 + 0 + 0 + 0),
                                          pixelHeight: 768,
                                          pixelWidth: 1376,
                                          sizes: `742px`,
                                          src: `../../assets/images/UpSR8AEltzg4ybc32BE7Eno.png?width=1376&height=768`,
                                          srcSet: `../../assets/images/UpSR8AEltzg4ybc32BE7Eno.png?scale-down-to=512&width=1376&height=768 512w,../../assets/images/UpSR8AEltzg4ybc32BE7Eno.png 1024w,../../assets/images/UpSR8AEltzg4ybc32BE7Eno.png?width=1376&height=768 1376w`,
                                        },
                                      },
                                      YMmTws0d3: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 768,
                                          intrinsicWidth: 1376,
                                          loading: S((u?.y || 0) + 0 + 0 + 120 + 0 + 0 + 0),
                                          pixelHeight: 768,
                                          pixelWidth: 1376,
                                          sizes: `314px`,
                                          src: `../../assets/images/UpSR8AEltzg4ybc32BE7Eno.png?width=1376&height=768`,
                                          srcSet: `../../assets/images/UpSR8AEltzg4ybc32BE7Eno.png?scale-down-to=512&width=1376&height=768 512w,../../assets/images/UpSR8AEltzg4ybc32BE7Eno.png 1024w,../../assets/images/UpSR8AEltzg4ybc32BE7Eno.png?width=1376&height=768 1376w`,
                                        },
                                      },
                                    },
                                    children: f(D, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 768,
                                        intrinsicWidth: 1376,
                                        loading: S((u?.y || 0) + 0 + 0 + 120 + 0 + 0 + 0),
                                        pixelHeight: 768,
                                        pixelWidth: 1376,
                                        sizes: `600px`,
                                        src: `../../assets/images/UpSR8AEltzg4ybc32BE7Eno.png?width=1376&height=768`,
                                        srcSet: `../../assets/images/UpSR8AEltzg4ybc32BE7Eno.png?scale-down-to=512&width=1376&height=768 512w,../../assets/images/UpSR8AEltzg4ybc32BE7Eno.png 1024w,../../assets/images/UpSR8AEltzg4ybc32BE7Eno.png?width=1376&height=768 1376w`,
                                      },
                                      className: `framer-1n3x134`,
                                      "data-framer-name": `HomePic`,
                                    }),
                                  }),
                                }),
                                f(O, {
                                  breakpoint: y,
                                  overrides: {
                                    Syu0Zqy0H: {
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.867 96" overflow="visible"><g opacity="0.66"><defs><linearGradient id="idsSyu0Zqy0HiwpjKCyIi_1g1580838875" x1="0.4951243781094527" x2="0.5034825870646766" y1="-0.48" y2="1.2"><stop offset="0" stop-color="rgba(255, 255, 255, 0)" stop-opacity="0"></stop><stop offset="1" stop-color="rgb(255, 190, 115)" stop-opacity="1"></stop></linearGradient></defs><path d="M 22.297 0 C 19.535 0 17.297 2.239 17.297 5 C 17.297 15.299 17.297 37.92 17.297 37.92 C 17.297 37.92 9.943 37.92 4.825 37.92 C 2.602 37.92 1.152 40.253 2.135 42.247 C 8.783 55.716 28.663 96 28.663 96 C 28.663 96 46.261 55.448 52.047 42.114 C 52.907 40.133 51.455 37.92 49.296 37.92 C 44.171 37.92 36.57 37.92 36.57 37.92 C 36.57 37.92 36.57 15.299 36.57 5 C 36.57 2.239 34.332 0 31.57 0 C 28.716 0 25.15 0 22.297 0 Z" fill="url(#idsSyu0Zqy0HiwpjKCyIi_1g1580838875)" stroke="rgba(255, 255, 255, 0)" stroke-linejoin="round"></path></g></svg>`,
                                    },
                                    YMmTws0d3: {
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.867 96" overflow="visible"><g opacity="0.66"><defs><linearGradient id="idsYMmTws0d3iwpjKCyIi_1g1580838875" x1="0.4951243781094527" x2="0.5034825870646766" y1="-0.48" y2="1.2"><stop offset="0" stop-color="rgba(255, 255, 255, 0)" stop-opacity="0"></stop><stop offset="1" stop-color="rgb(255, 190, 115)" stop-opacity="1"></stop></linearGradient></defs><path d="M 22.297 0 C 19.535 0 17.297 2.239 17.297 5 C 17.297 15.299 17.297 37.92 17.297 37.92 C 17.297 37.92 9.943 37.92 4.825 37.92 C 2.602 37.92 1.152 40.253 2.135 42.247 C 8.783 55.716 28.663 96 28.663 96 C 28.663 96 46.261 55.448 52.047 42.114 C 52.907 40.133 51.455 37.92 49.296 37.92 C 44.171 37.92 36.57 37.92 36.57 37.92 C 36.57 37.92 36.57 15.299 36.57 5 C 36.57 2.239 34.332 0 31.57 0 C 28.716 0 25.15 0 22.297 0 Z" fill="url(#idsYMmTws0d3iwpjKCyIi_1g1580838875)" stroke="rgba(255, 255, 255, 0)" stroke-linejoin="round"></path></g></svg>`,
                                    },
                                  },
                                  children: f(Oe, {
                                    className: `framer-1djzmx`,
                                    requiresOverflowVisible: !0,
                                    style: { rotate: -90 },
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53.867 96" overflow="visible"><g opacity="0.66"><defs><linearGradient id="idsiwpjKCyIi_1g1580838875" x1="0.4951243781094527" x2="0.5034825870646766" y1="-0.48" y2="1.2"><stop offset="0" stop-color="rgba(255, 255, 255, 0)" stop-opacity="0"></stop><stop offset="1" stop-color="rgb(255, 190, 115)" stop-opacity="1"></stop></linearGradient></defs><path d="M 22.297 0 C 19.535 0 17.297 2.239 17.297 5 C 17.297 15.299 17.297 37.92 17.297 37.92 C 17.297 37.92 9.943 37.92 4.825 37.92 C 2.602 37.92 1.152 40.253 2.135 42.247 C 8.783 55.716 28.663 96 28.663 96 C 28.663 96 46.261 55.448 52.047 42.114 C 52.907 40.133 51.455 37.92 49.296 37.92 C 44.171 37.92 36.57 37.92 36.57 37.92 C 36.57 37.92 36.57 15.299 36.57 5 C 36.57 2.239 34.332 0 31.57 0 C 28.716 0 25.15 0 22.297 0 Z" fill="url(#idsiwpjKCyIi_1g1580838875)" stroke="rgba(255, 255, 255, 0)" stroke-linejoin="round"></path></g></svg>`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                f(w, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                        "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                        "--framer-font-size": `34px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `right`,
                                        "--framer-text-color": `rgb(46, 48, 53)`,
                                      },
                                      children: `Diseño Creativo.`,
                                    }),
                                  }),
                                  className: `framer-14ikpz8`,
                                  "data-framer-name": `Studio Wordmark`,
                                  fonts: [`GF;Karantina-700`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          f(O, {
                            breakpoint: y,
                            overrides: {
                              Pzb7nykTb: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 278.313 144" overflow="visible"><g opacity="0.66"><defs><linearGradient id="idsPzb7nykTbyg_KLQjKc_1g1580838875" x1="0.4951243781094527" x2="0.5034825870646766" y1="-0.48" y2="1.2"><stop offset="0" stop-color="rgba(255, 255, 255, 0)" stop-opacity="0"></stop><stop offset="1" stop-color="rgb(255, 190, 115)" stop-opacity="1"></stop></linearGradient></defs><path d="M 94.366 0 C 91.605 0 89.366 2.238 89.366 5 C 89.366 18.881 89.366 56.88 89.366 56.88 C 89.366 56.88 34.91 56.88 11.016 56.88 C 7.96 56.88 6.861 60.916 9.495 62.466 C 42.187 81.698 148.093 144 148.093 144 C 148.093 144 241.518 81.496 270.103 62.373 C 272.567 60.724 271.4 56.88 268.435 56.88 C 245.184 56.88 188.946 56.88 188.946 56.88 C 188.946 56.88 188.946 18.883 188.946 5.001 C 188.946 2.239 186.707 0 183.945 0 C 166.928 0 111.381 0 94.366 0 Z" fill="url(#idsPzb7nykTbyg_KLQjKc_1g1580838875)" stroke="rgba(255, 255, 255, 0)" stroke-linejoin="round"></path></g></svg>`,
                              },
                              Syu0Zqy0H: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 278.313 144" overflow="visible"><g opacity="0.66"><defs><linearGradient id="idsSyu0Zqy0Hyg_KLQjKc_1g1580838875" x1="0.4951243781094527" x2="0.5034825870646766" y1="-0.48" y2="1.2"><stop offset="0" stop-color="rgba(255, 255, 255, 0)" stop-opacity="0"></stop><stop offset="1" stop-color="rgb(255, 190, 115)" stop-opacity="1"></stop></linearGradient></defs><path d="M 94.366 0 C 91.605 0 89.366 2.238 89.366 5 C 89.366 18.881 89.366 56.88 89.366 56.88 C 89.366 56.88 34.91 56.88 11.016 56.88 C 7.96 56.88 6.861 60.916 9.495 62.466 C 42.187 81.698 148.093 144 148.093 144 C 148.093 144 241.518 81.496 270.103 62.373 C 272.567 60.724 271.4 56.88 268.435 56.88 C 245.184 56.88 188.946 56.88 188.946 56.88 C 188.946 56.88 188.946 18.883 188.946 5.001 C 188.946 2.239 186.707 0 183.945 0 C 166.928 0 111.381 0 94.366 0 Z" fill="url(#idsSyu0Zqy0Hyg_KLQjKc_1g1580838875)" stroke="rgba(255, 255, 255, 0)" stroke-linejoin="round"></path></g></svg>`,
                              },
                              YMmTws0d3: {
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 278.313 144" overflow="visible"><g opacity="0.66"><defs><linearGradient id="idsYMmTws0d3yg_KLQjKc_1g1580838875" x1="0.4951243781094527" x2="0.5034825870646766" y1="-0.48" y2="1.2"><stop offset="0" stop-color="rgba(255, 255, 255, 0)" stop-opacity="0"></stop><stop offset="1" stop-color="rgb(255, 190, 115)" stop-opacity="1"></stop></linearGradient></defs><path d="M 94.366 0 C 91.605 0 89.366 2.238 89.366 5 C 89.366 18.881 89.366 56.88 89.366 56.88 C 89.366 56.88 34.91 56.88 11.016 56.88 C 7.96 56.88 6.861 60.916 9.495 62.466 C 42.187 81.698 148.093 144 148.093 144 C 148.093 144 241.518 81.496 270.103 62.373 C 272.567 60.724 271.4 56.88 268.435 56.88 C 245.184 56.88 188.946 56.88 188.946 56.88 C 188.946 56.88 188.946 18.883 188.946 5.001 C 188.946 2.239 186.707 0 183.945 0 C 166.928 0 111.381 0 94.366 0 Z" fill="url(#idsYMmTws0d3yg_KLQjKc_1g1580838875)" stroke="rgba(255, 255, 255, 0)" stroke-linejoin="round"></path></g></svg>`,
                              },
                            },
                            children: f(Oe, {
                              className: `framer-1l4p64w`,
                              requiresOverflowVisible: !0,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 278.313 144" overflow="visible"><g opacity="0.66"><defs><linearGradient id="idsyg_KLQjKc_1g1580838875" x1="0.4951243781094527" x2="0.5034825870646766" y1="-0.48" y2="1.2"><stop offset="0" stop-color="rgba(255, 255, 255, 0)" stop-opacity="0"></stop><stop offset="1" stop-color="rgb(255, 190, 115)" stop-opacity="1"></stop></linearGradient></defs><path d="M 94.366 0 C 91.605 0 89.366 2.238 89.366 5 C 89.366 18.881 89.366 56.88 89.366 56.88 C 89.366 56.88 34.91 56.88 11.016 56.88 C 7.96 56.88 6.861 60.916 9.495 62.466 C 42.187 81.698 148.093 144 148.093 144 C 148.093 144 241.518 81.496 270.103 62.373 C 272.567 60.724 271.4 56.88 268.435 56.88 C 245.184 56.88 188.946 56.88 188.946 56.88 C 188.946 56.88 188.946 18.883 188.946 5.001 C 188.946 2.239 186.707 0 183.945 0 C 166.928 0 111.381 0 94.366 0 Z" fill="url(#idsyg_KLQjKc_1g1580838875)" stroke="rgba(255, 255, 255, 0)" stroke-linejoin="round"></path></g></svg>`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      m(_.section, {
                        className: `framer-1cfzlu8`,
                        "data-framer-name": `Servicios`,
                        id: me,
                        layout: T,
                        ref: ge,
                        children: [
                          m(`div`, {
                            className: `framer-1gj26sj`,
                            "data-framer-name": `Services Heading`,
                            children: [
                              f(w, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                      "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `700`,
                                      "--framer-text-color": `rgb(0, 87, 255)`,
                                    },
                                    children: `{ Servicios }`,
                                  }),
                                }),
                                className: `framer-9ey5qp`,
                                "data-framer-name": `Services Kicker`,
                                fonts: [`FS;Nunito-bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              f(w, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                      "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                      "--framer-font-size": `42px`,
                                      "--framer-font-weight": `700`,
                                      "--framer-letter-spacing": `-0.01em`,
                                      "--framer-line-height": `0.95em`,
                                      "--framer-text-color": `rgb(46, 48, 53)`,
                                    },
                                    children: `Descubre lo que podemos crear para ti de forma impactante, clara e inteligente.`,
                                  }),
                                }),
                                className: `framer-1c1oomb`,
                                "data-framer-name": `Services Title`,
                                fonts: [`GF;Karantina-700`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          m(`div`, {
                            className: `framer-gluupr`,
                            "data-framer-name": `Service Rows`,
                            children: [
                              m(qs, {
                                __framer__animate: { transition: uc },
                                __framer__animateOnce: !0,
                                __framer__enter: cc,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-a5ix5a`,
                                "data-border": !0,
                                "data-framer-name": `BRANDING`,
                                children: [
                                  m(`div`, {
                                    className: `framer-13yk0bc`,
                                    "data-framer-name": `Service Row Social`,
                                    children: [
                                      f(w, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWV4dHJhYm9sZA==`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-font-weight": `800`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-color": `rgb(0, 87, 255)`,
                                            },
                                            children: `01`,
                                          }),
                                        }),
                                        className: `framer-4enupe`,
                                        fonts: [`FS;Nunito-extrabold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      f(O, {
                                        breakpoint: y,
                                        overrides: {
                                          Pzb7nykTb: {
                                            children: f(s, {
                                              children: f(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                  "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                                  "--framer-font-size": `45px`,
                                                  "--framer-font-weight": `700`,
                                                  "--framer-line-height": `0.95em`,
                                                  "--framer-text-color": `rgb(46, 48, 53)`,
                                                },
                                                children: `BRANDING & GRAPHIC DESIGN`,
                                              }),
                                            }),
                                          },
                                          YMmTws0d3: {
                                            children: f(s, {
                                              children: f(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                  "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                                  "--framer-font-size": `55px`,
                                                  "--framer-font-weight": `700`,
                                                  "--framer-line-height": `0.95em`,
                                                  "--framer-text-color": `rgb(46, 48, 53)`,
                                                },
                                                children: `BRANDING & GRAPHIC DESIGN`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: f(w, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                                "--framer-font-size": `84px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-line-height": `0.95em`,
                                                "--framer-text-color": `rgb(46, 48, 53)`,
                                              },
                                              children: `BRANDING & GRAPHIC DESIGN`,
                                            }),
                                          }),
                                          className: `framer-1iagef`,
                                          fonts: [`GF;Karantina-700`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  f(w, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7TnVuaXRvLW1lZGl1bQ==`,
                                          "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                          "--framer-font-weight": `500`,
                                          "--framer-line-height": `1.45em`,
                                          "--framer-text-color": `rgb(74, 77, 86)`,
                                        },
                                        children: `Creamos la identidad visual de tu marca desde cero, asegurando que cada elemento comunique tu mensaje. Desde el logo hasta la paleta de colores y tipografía, construimos una base sólida que te acompañará en todos tus proyectos.`,
                                      }),
                                    }),
                                    className: `framer-16wnq9q`,
                                    "data-framer-name": `Branding`,
                                    fonts: [`FS;Nunito-medium`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              m(qs, {
                                __framer__animate: { transition: uc },
                                __framer__animateOnce: !0,
                                __framer__enter: cc,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1ys85hd`,
                                "data-border": !0,
                                "data-framer-name": `DISEÑO WEB`,
                                children: [
                                  m(`div`, {
                                    className: `framer-u9g13h`,
                                    "data-framer-name": `Service Row Social`,
                                    children: [
                                      f(w, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWV4dHJhYm9sZA==`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-font-weight": `800`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-color": `var(--token-79443a2b-6b83-4e9a-90fc-7ac0f2d6802e, rgb(20, 167, 95))`,
                                            },
                                            children: `02`,
                                          }),
                                        }),
                                        className: `framer-117y7u2`,
                                        fonts: [`FS;Nunito-extrabold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      f(O, {
                                        breakpoint: y,
                                        overrides: {
                                          Pzb7nykTb: {
                                            children: f(s, {
                                              children: f(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                  "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                                  "--framer-font-size": `45px`,
                                                  "--framer-font-weight": `700`,
                                                  "--framer-line-height": `0.95em`,
                                                  "--framer-text-color": `rgb(46, 48, 53)`,
                                                },
                                                children: `DISEÑO WEB`,
                                              }),
                                            }),
                                          },
                                          YMmTws0d3: {
                                            children: f(s, {
                                              children: f(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                  "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                                  "--framer-font-size": `55px`,
                                                  "--framer-font-weight": `700`,
                                                  "--framer-line-height": `0.95em`,
                                                  "--framer-text-color": `rgb(46, 48, 53)`,
                                                },
                                                children: `DISEÑO WEB`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: f(w, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                "--framer-font-family": `"Karantina", sans-serif`,
                                                "--framer-font-size": `84px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-line-height": `0.95em`,
                                                "--framer-text-color": `rgb(46, 48, 53)`,
                                              },
                                              children: `DISEÑO WEB`,
                                            }),
                                          }),
                                          className: `framer-sxmoz2`,
                                          "data-framer-name": `DISEÑO WEB`,
                                          fonts: [`GF;Karantina-700`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  f(w, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7TnVuaXRvLW1lZGl1bQ==`,
                                          "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                          "--framer-font-weight": `500`,
                                          "--framer-line-height": `1.45em`,
                                          "--framer-text-color": `rgb(74, 77, 86)`,
                                        },
                                        children: `Diseñamos sitios web estéticos y funcionales, pensados para que tus clientes encuentren lo que buscan sin esfuerzo. Tu página web es tu vitrina digital, y nos encargamos de que brille y convierta visitantes en clientes.`,
                                      }),
                                    }),
                                    className: `framer-1go5qzc`,
                                    "data-framer-name": `Diseño web`,
                                    fonts: [`FS;Nunito-medium`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              m(qs, {
                                __framer__animate: { transition: uc },
                                __framer__animateOnce: !0,
                                __framer__enter: cc,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-14xmk6d`,
                                "data-border": !0,
                                "data-framer-name": `REDES SOCIALES`,
                                children: [
                                  m(`div`, {
                                    className: `framer-3k6004`,
                                    "data-framer-name": `Service Row Social`,
                                    children: [
                                      f(w, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWV4dHJhYm9sZA==`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `13px`,
                                              "--framer-font-weight": `800`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-color": `var(--token-7ced9513-8d87-4197-ab0a-1b56969a6d43, rgb(255, 157, 46))`,
                                            },
                                            children: `03`,
                                          }),
                                        }),
                                        className: `framer-9ilau8`,
                                        fonts: [`FS;Nunito-extrabold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      f(O, {
                                        breakpoint: y,
                                        overrides: {
                                          Pzb7nykTb: {
                                            children: f(s, {
                                              children: f(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                  "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                                  "--framer-font-size": `45px`,
                                                  "--framer-font-weight": `700`,
                                                  "--framer-line-height": `0.95em`,
                                                  "--framer-text-color": `rgb(46, 48, 53)`,
                                                },
                                                children: `REDES SOCIALES`,
                                              }),
                                            }),
                                          },
                                          YMmTws0d3: {
                                            children: f(s, {
                                              children: f(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                  "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                                  "--framer-font-size": `55px`,
                                                  "--framer-font-weight": `700`,
                                                  "--framer-line-height": `0.95em`,
                                                  "--framer-text-color": `rgb(46, 48, 53)`,
                                                },
                                                children: `REDES SOCIALES`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: f(w, {
                                          __fromCanvasComponent: !0,
                                          children: f(s, {
                                            children: f(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                                "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                                "--framer-font-size": `84px`,
                                                "--framer-font-weight": `700`,
                                                "--framer-line-height": `0.95em`,
                                                "--framer-text-color": `rgb(46, 48, 53)`,
                                              },
                                              children: `REDES SOCIALES`,
                                            }),
                                          }),
                                          className: `framer-1bomwot`,
                                          "data-framer-name": `DISEÑO WEB`,
                                          fonts: [`GF;Karantina-700`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  f(w, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7TnVuaXRvLW1lZGl1bQ==`,
                                          "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                          "--framer-font-weight": `500`,
                                          "--framer-line-height": `1.45em`,
                                          "--framer-text-color": `rgb(74, 77, 86)`,
                                        },
                                        children: `Creamos contenido visual atractivo y estrategias que hacen que tu marca destaque en las redes. Desde diseños diarios hasta campañas especiales, te ayudamos a conectar con tu audiencia de manera auténtica y consistente.`,
                                      }),
                                    }),
                                    className: `framer-otx3z5`,
                                    "data-framer-name": `Diseño web`,
                                    fonts: [`FS;Nunito-medium`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      m(_.section, {
                        className: `framer-h7szov`,
                        "data-framer-name": `Proyectos`,
                        id: _e,
                        layout: T,
                        ref: be,
                        children: [
                          m(`div`, {
                            className: `framer-o9npc`,
                            "data-framer-name": `Logos`,
                            children: [
                              f(w, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                      "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `700`,
                                      "--framer-text-color": `rgb(0, 87, 255)`,
                                    },
                                    children: `{ Proyectos }`,
                                  }),
                                }),
                                className: `framer-16ji4hj`,
                                fonts: [`FS;Nunito-bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              m(`div`, {
                                className: `framer-7i0xie`,
                                "data-framer-name": `Logos`,
                                children: [
                                  f(w, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                          "--framer-font-family": `"Karantina", sans-serif`,
                                          "--framer-font-size": `42px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `0.95em`,
                                          "--framer-text-color": `rgb(46, 48, 53)`,
                                        },
                                        children: `Diseños de logos`,
                                      }),
                                    }),
                                    className: `framer-l6cqjm`,
                                    fonts: [`GF;Karantina-700`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      Pzb7nykTb: {
                                        tickerEffectGap: `33px`,
                                        tickerEffectVelocity: 102,
                                      },
                                    },
                                    children: m(Js, {
                                      className: `framer-5lol0`,
                                      "data-framer-name": `Logos`,
                                      tickerEffectAlign: `center`,
                                      tickerEffectDirectionModifier: `default`,
                                      tickerEffectDraggable: !1,
                                      tickerEffectEnabled: !0,
                                      tickerEffectGap: `28px 55px`,
                                      tickerEffectHoverModifier: 100,
                                      tickerEffectOverflow: `clip`,
                                      tickerEffectPosition: `relative`,
                                      tickerEffectStackDirection: `row`,
                                      tickerEffectVelocity: 98,
                                      children: [
                                        f(Ae, {
                                          children: f(O, {
                                            breakpoint: y,
                                            overrides: {
                                              Pzb7nykTb: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1622,
                                                  intrinsicWidth: 2048,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1867.25 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      229.5 +
                                                      53
                                                  ),
                                                  pixelHeight: 1622,
                                                  pixelWidth: 2048,
                                                  sizes: `78px`,
                                                  src: `../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png?width=2048&height=1622`,
                                                  srcSet: `../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png 512w,../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png?scale-down-to=1024&width=2048&height=1622 1024w,../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png?width=2048&height=1622 2048w`,
                                                },
                                              },
                                              Syu0Zqy0H: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1622,
                                                  intrinsicWidth: 2048,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1856.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      39.5
                                                  ),
                                                  pixelHeight: 1622,
                                                  pixelWidth: 2048,
                                                  sizes: `152px`,
                                                  src: `../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png?width=2048&height=1622`,
                                                  srcSet: `../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png 512w,../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png?scale-down-to=1024&width=2048&height=1622 1024w,../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png?width=2048&height=1622 2048w`,
                                                },
                                              },
                                              YMmTws0d3: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1622,
                                                  intrinsicWidth: 2048,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1634.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      39.5
                                                  ),
                                                  pixelHeight: 1622,
                                                  pixelWidth: 2048,
                                                  sizes: `152px`,
                                                  src: `../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png?width=2048&height=1622`,
                                                  srcSet: `../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png 512w,../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png?scale-down-to=1024&width=2048&height=1622 1024w,../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png?width=2048&height=1622 2048w`,
                                                },
                                              },
                                            },
                                            children: f(D, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1622,
                                                intrinsicWidth: 2048,
                                                loading: S(
                                                  (u?.y || 0) +
                                                    0 +
                                                    1868.5 +
                                                    60 +
                                                    0 +
                                                    0 +
                                                    96 +
                                                    28 +
                                                    229.5 +
                                                    39.5
                                                ),
                                                pixelHeight: 1622,
                                                pixelWidth: 2048,
                                                sizes: `152px`,
                                                src: `../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png?width=2048&height=1622`,
                                                srcSet: `../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png 512w,../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png?scale-down-to=1024&width=2048&height=1622 1024w,../../assets/images/SnN2MSC16PpjTDzL8fnVdqtxFjU.png?width=2048&height=1622 2048w`,
                                              },
                                              className: `framer-1810g1h`,
                                              "data-framer-name": `logo1`,
                                            }),
                                          }),
                                        }),
                                        f(Ae, {
                                          children: f(O, {
                                            breakpoint: y,
                                            overrides: {
                                              Pzb7nykTb: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 2048,
                                                  intrinsicWidth: 2048,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1867.25 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      229.5 +
                                                      43
                                                  ),
                                                  pixelHeight: 2048,
                                                  pixelWidth: 2048,
                                                  sizes: `82px`,
                                                  src: `../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png?width=2048&height=2048`,
                                                  srcSet: `../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png 512w,../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png?scale-down-to=1024&width=2048&height=2048 1024w,../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png?width=2048&height=2048 2048w`,
                                                },
                                              },
                                              Syu0Zqy0H: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 2048,
                                                  intrinsicWidth: 2048,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1856.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      25
                                                  ),
                                                  pixelHeight: 2048,
                                                  pixelWidth: 2048,
                                                  sizes: `150px`,
                                                  src: `../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png?width=2048&height=2048`,
                                                  srcSet: `../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png 512w,../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png?scale-down-to=1024&width=2048&height=2048 1024w,../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png?width=2048&height=2048 2048w`,
                                                },
                                              },
                                              YMmTws0d3: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 2048,
                                                  intrinsicWidth: 2048,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1634.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      25
                                                  ),
                                                  pixelHeight: 2048,
                                                  pixelWidth: 2048,
                                                  sizes: `150px`,
                                                  src: `../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png?width=2048&height=2048`,
                                                  srcSet: `../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png 512w,../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png?scale-down-to=1024&width=2048&height=2048 1024w,../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png?width=2048&height=2048 2048w`,
                                                },
                                              },
                                            },
                                            children: f(D, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 2048,
                                                intrinsicWidth: 2048,
                                                loading: S(
                                                  (u?.y || 0) +
                                                    0 +
                                                    1868.5 +
                                                    60 +
                                                    0 +
                                                    0 +
                                                    96 +
                                                    28 +
                                                    229.5 +
                                                    25
                                                ),
                                                pixelHeight: 2048,
                                                pixelWidth: 2048,
                                                sizes: `150px`,
                                                src: `../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png?width=2048&height=2048`,
                                                srcSet: `../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png 512w,../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png?scale-down-to=1024&width=2048&height=2048 1024w,../../assets/images/0qq5U9TsSaHzNo6jPiK4woc.png?width=2048&height=2048 2048w`,
                                              },
                                              className: `framer-nbc8kf`,
                                              "data-framer-name": `logo2`,
                                            }),
                                          }),
                                        }),
                                        f(Ae, {
                                          children: f(O, {
                                            breakpoint: y,
                                            overrides: {
                                              Pzb7nykTb: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 732,
                                                  intrinsicWidth: 804,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1867.25 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      229.5 +
                                                      51.5
                                                  ),
                                                  pixelHeight: 732,
                                                  pixelWidth: 804,
                                                  sizes: `71px`,
                                                  src: `../../assets/images/Z0T2ss44VoCQwEhhWAz11IGCayg.png?width=804&height=732`,
                                                  srcSet: `../../assets/images/Z0T2ss44VoCQwEhhWAz11IGCayg.png 512w,../../assets/images/Z0T2ss44VoCQwEhhWAz11IGCayg.png?width=804&height=732 804w`,
                                                },
                                              },
                                              Syu0Zqy0H: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 732,
                                                  intrinsicWidth: 804,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1856.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      42.5
                                                  ),
                                                  pixelHeight: 732,
                                                  pixelWidth: 804,
                                                  sizes: `127px`,
                                                  src: `../../assets/images/Z0T2ss44VoCQwEhhWAz11IGCayg.png?width=804&height=732`,
                                                  srcSet: `../../assets/images/Z0T2ss44VoCQwEhhWAz11IGCayg.png 512w,../../assets/images/Z0T2ss44VoCQwEhhWAz11IGCayg.png?width=804&height=732 804w`,
                                                },
                                              },
                                              YMmTws0d3: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 732,
                                                  intrinsicWidth: 804,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1634.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      42.5
                                                  ),
                                                  pixelHeight: 732,
                                                  pixelWidth: 804,
                                                  sizes: `127px`,
                                                  src: `../../assets/images/Z0T2ss44VoCQwEhhWAz11IGCayg.png?width=804&height=732`,
                                                  srcSet: `../../assets/images/Z0T2ss44VoCQwEhhWAz11IGCayg.png 512w,../../assets/images/Z0T2ss44VoCQwEhhWAz11IGCayg.png?width=804&height=732 804w`,
                                                },
                                              },
                                            },
                                            children: f(D, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 732,
                                                intrinsicWidth: 804,
                                                loading: S(
                                                  (u?.y || 0) +
                                                    0 +
                                                    1868.5 +
                                                    60 +
                                                    0 +
                                                    0 +
                                                    96 +
                                                    28 +
                                                    229.5 +
                                                    42.5
                                                ),
                                                pixelHeight: 732,
                                                pixelWidth: 804,
                                                sizes: `127px`,
                                                src: `../../assets/images/Z0T2ss44VoCQwEhhWAz11IGCayg.png?width=804&height=732`,
                                                srcSet: `../../assets/images/Z0T2ss44VoCQwEhhWAz11IGCayg.png 512w,../../assets/images/Z0T2ss44VoCQwEhhWAz11IGCayg.png?width=804&height=732 804w`,
                                              },
                                              className: `framer-pe7biq`,
                                              "data-framer-name": `logo3`,
                                            }),
                                          }),
                                        }),
                                        f(Ae, {
                                          children: f(O, {
                                            breakpoint: y,
                                            overrides: {
                                              Pzb7nykTb: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 318,
                                                  intrinsicWidth: 1e3,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1867.25 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      229.5 +
                                                      65.5
                                                  ),
                                                  pixelHeight: 318,
                                                  pixelWidth: 1e3,
                                                  sizes: `117px`,
                                                  src: `../../assets/images/mvdDnYDdM0hCLbQXb9tlRluzC0.png?width=1000&height=318`,
                                                  srcSet: `../../assets/images/mvdDnYDdM0hCLbQXb9tlRluzC0.png 512w,../../assets/images/mvdDnYDdM0hCLbQXb9tlRluzC0.png?width=1000&height=318 1000w`,
                                                },
                                              },
                                              Syu0Zqy0H: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 318,
                                                  intrinsicWidth: 1e3,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1856.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      57.5
                                                  ),
                                                  pixelHeight: 318,
                                                  pixelWidth: 1e3,
                                                  sizes: `265px`,
                                                  src: `../../assets/images/mvdDnYDdM0hCLbQXb9tlRluzC0.png?width=1000&height=318`,
                                                  srcSet: `../../assets/images/mvdDnYDdM0hCLbQXb9tlRluzC0.png 512w,../../assets/images/mvdDnYDdM0hCLbQXb9tlRluzC0.png?width=1000&height=318 1000w`,
                                                },
                                              },
                                              YMmTws0d3: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 318,
                                                  intrinsicWidth: 1e3,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1634.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      57.5
                                                  ),
                                                  pixelHeight: 318,
                                                  pixelWidth: 1e3,
                                                  sizes: `265px`,
                                                  src: `../../assets/images/mvdDnYDdM0hCLbQXb9tlRluzC0.png?width=1000&height=318`,
                                                  srcSet: `../../assets/images/mvdDnYDdM0hCLbQXb9tlRluzC0.png 512w,../../assets/images/mvdDnYDdM0hCLbQXb9tlRluzC0.png?width=1000&height=318 1000w`,
                                                },
                                              },
                                            },
                                            children: f(D, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 318,
                                                intrinsicWidth: 1e3,
                                                loading: S(
                                                  (u?.y || 0) +
                                                    0 +
                                                    1868.5 +
                                                    60 +
                                                    0 +
                                                    0 +
                                                    96 +
                                                    28 +
                                                    229.5 +
                                                    57.5
                                                ),
                                                pixelHeight: 318,
                                                pixelWidth: 1e3,
                                                sizes: `265px`,
                                                src: `../../assets/images/mvdDnYDdM0hCLbQXb9tlRluzC0.png?width=1000&height=318`,
                                                srcSet: `../../assets/images/mvdDnYDdM0hCLbQXb9tlRluzC0.png 512w,../../assets/images/mvdDnYDdM0hCLbQXb9tlRluzC0.png?width=1000&height=318 1000w`,
                                              },
                                              className: `framer-91w6ls`,
                                              "data-framer-name": `logo4`,
                                            }),
                                          }),
                                        }),
                                        f(Ae, {
                                          children: f(O, {
                                            breakpoint: y,
                                            overrides: {
                                              Pzb7nykTb: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1103,
                                                  intrinsicWidth: 2048,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1867.25 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      229.5 +
                                                      59.5
                                                  ),
                                                  pixelHeight: 1103,
                                                  pixelWidth: 2048,
                                                  sizes: `92px`,
                                                  src: `../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png?width=2048&height=1103`,
                                                  srcSet: `../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png 512w,../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png?scale-down-to=1024&width=2048&height=1103 1024w,../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png?width=2048&height=1103 2048w`,
                                                },
                                              },
                                              Syu0Zqy0H: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1103,
                                                  intrinsicWidth: 2048,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1856.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      46
                                                  ),
                                                  pixelHeight: 1103,
                                                  pixelWidth: 2048,
                                                  sizes: `200px`,
                                                  src: `../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png?width=2048&height=1103`,
                                                  srcSet: `../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png 512w,../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png?scale-down-to=1024&width=2048&height=1103 1024w,../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png?width=2048&height=1103 2048w`,
                                                },
                                              },
                                              YMmTws0d3: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 1103,
                                                  intrinsicWidth: 2048,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1634.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      46
                                                  ),
                                                  pixelHeight: 1103,
                                                  pixelWidth: 2048,
                                                  sizes: `200px`,
                                                  src: `../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png?width=2048&height=1103`,
                                                  srcSet: `../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png 512w,../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png?scale-down-to=1024&width=2048&height=1103 1024w,../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png?width=2048&height=1103 2048w`,
                                                },
                                              },
                                            },
                                            children: f(D, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1103,
                                                intrinsicWidth: 2048,
                                                loading: S(
                                                  (u?.y || 0) +
                                                    0 +
                                                    1868.5 +
                                                    60 +
                                                    0 +
                                                    0 +
                                                    96 +
                                                    28 +
                                                    229.5 +
                                                    46
                                                ),
                                                pixelHeight: 1103,
                                                pixelWidth: 2048,
                                                sizes: `200px`,
                                                src: `../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png?width=2048&height=1103`,
                                                srcSet: `../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png 512w,../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png?scale-down-to=1024&width=2048&height=1103 1024w,../../assets/images/ROuDRHGKWJj5OZJJDulTiD6xeI.png?width=2048&height=1103 2048w`,
                                              },
                                              className: `framer-137w8o2`,
                                              "data-framer-name": `logo5`,
                                            }),
                                          }),
                                        }),
                                        f(Ae, {
                                          children: f(O, {
                                            breakpoint: y,
                                            overrides: {
                                              Pzb7nykTb: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 200,
                                                  intrinsicWidth: 250,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1867.25 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      229.5 +
                                                      46.5
                                                  ),
                                                  pixelHeight: 200,
                                                  pixelWidth: 250,
                                                  sizes: `94px`,
                                                  src: `https://framerusercontent.com/images/1noPAM1qFQuAtXu4lWvCueyzM.png?width=250&height=200`,
                                                },
                                              },
                                              Syu0Zqy0H: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 200,
                                                  intrinsicWidth: 250,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1856.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      12
                                                  ),
                                                  pixelHeight: 200,
                                                  pixelWidth: 250,
                                                  sizes: `220px`,
                                                  src: `https://framerusercontent.com/images/1noPAM1qFQuAtXu4lWvCueyzM.png?width=250&height=200`,
                                                },
                                              },
                                              YMmTws0d3: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 200,
                                                  intrinsicWidth: 250,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1634.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      12
                                                  ),
                                                  pixelHeight: 200,
                                                  pixelWidth: 250,
                                                  sizes: `220px`,
                                                  src: `https://framerusercontent.com/images/1noPAM1qFQuAtXu4lWvCueyzM.png?width=250&height=200`,
                                                },
                                              },
                                            },
                                            children: f(D, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 200,
                                                intrinsicWidth: 250,
                                                loading: S(
                                                  (u?.y || 0) +
                                                    0 +
                                                    1868.5 +
                                                    60 +
                                                    0 +
                                                    0 +
                                                    96 +
                                                    28 +
                                                    229.5 +
                                                    12
                                                ),
                                                pixelHeight: 200,
                                                pixelWidth: 250,
                                                sizes: `220px`,
                                                src: `https://framerusercontent.com/images/1noPAM1qFQuAtXu4lWvCueyzM.png?width=250&height=200`,
                                              },
                                              className: `framer-51cc6d`,
                                              "data-framer-name": `logo6`,
                                            }),
                                          }),
                                        }),
                                        f(Ae, {
                                          children: f(O, {
                                            breakpoint: y,
                                            overrides: {
                                              Pzb7nykTb: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 200,
                                                  intrinsicWidth: 250,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1867.25 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      229.5 +
                                                      0
                                                  ),
                                                  pixelHeight: 200,
                                                  pixelWidth: 250,
                                                  sizes: `210px`,
                                                  src: `https://framerusercontent.com/images/47YDOGp8FCQMqYpPczKK2eMDfo.png?width=250&height=200`,
                                                },
                                              },
                                              Syu0Zqy0H: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 200,
                                                  intrinsicWidth: 250,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1856.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      16
                                                  ),
                                                  pixelHeight: 200,
                                                  pixelWidth: 250,
                                                  sizes: `210px`,
                                                  src: `https://framerusercontent.com/images/47YDOGp8FCQMqYpPczKK2eMDfo.png?width=250&height=200`,
                                                },
                                              },
                                              YMmTws0d3: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  intrinsicHeight: 200,
                                                  intrinsicWidth: 250,
                                                  loading: S(
                                                    (u?.y || 0) +
                                                      0 +
                                                      1634.5 +
                                                      60 +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      28 +
                                                      229.5 +
                                                      16
                                                  ),
                                                  pixelHeight: 200,
                                                  pixelWidth: 250,
                                                  sizes: `210px`,
                                                  src: `https://framerusercontent.com/images/47YDOGp8FCQMqYpPczKK2eMDfo.png?width=250&height=200`,
                                                },
                                              },
                                            },
                                            children: f(D, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 200,
                                                intrinsicWidth: 250,
                                                loading: S(
                                                  (u?.y || 0) +
                                                    0 +
                                                    1868.5 +
                                                    60 +
                                                    0 +
                                                    0 +
                                                    96 +
                                                    28 +
                                                    229.5 +
                                                    16
                                                ),
                                                pixelHeight: 200,
                                                pixelWidth: 250,
                                                sizes: `210px`,
                                                src: `https://framerusercontent.com/images/47YDOGp8FCQMqYpPczKK2eMDfo.png?width=250&height=200`,
                                              },
                                              className: `framer-2yciub`,
                                              "data-framer-name": `logo7`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f(w, {
                            __fromCanvasComponent: !0,
                            children: f(s, {
                              children: f(`p`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                  "--framer-font-family": `"Karantina", sans-serif`,
                                  "--framer-font-size": `42px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-line-height": `0.95em`,
                                  "--framer-text-color": `rgb(46, 48, 53)`,
                                },
                                children: `Branding`,
                              }),
                            }),
                            className: `framer-12pt1kn`,
                            fonts: [`GF;Karantina-700`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          m(`div`, {
                            className: `framer-qod665`,
                            "data-framer-name": `Project Cards`,
                            children: [
                              f(O, {
                                breakpoint: y,
                                overrides: {
                                  Pzb7nykTb: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 2299,
                                      intrinsicWidth: 3568,
                                      loading: S((u?.y || 0) + 0 + 1867.25 + 60 + 801 + 0 + 0),
                                      pixelHeight: 2299,
                                      pixelWidth: 3568,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 40px)`,
                                      src: `../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?width=3568&height=2299`,
                                      srcSet: `../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?scale-down-to=512&width=3568&height=2299 512w,../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg 1024w,../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?scale-down-to=2048&width=3568&height=2299 2048w,../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?width=3568&height=2299 3568w`,
                                    },
                                  },
                                  Syu0Zqy0H: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 2299,
                                      intrinsicWidth: 3568,
                                      loading: S((u?.y || 0) + 0 + 1856.5 + 60 + 861 + 0 + 0),
                                      pixelHeight: 2299,
                                      pixelWidth: 3568,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1600px) - 152px)`,
                                      src: `../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?width=3568&height=2299`,
                                      srcSet: `../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?scale-down-to=512&width=3568&height=2299 512w,../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg 1024w,../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?scale-down-to=2048&width=3568&height=2299 2048w,../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?width=3568&height=2299 3568w`,
                                    },
                                  },
                                  YMmTws0d3: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 2299,
                                      intrinsicWidth: 3568,
                                      loading: S((u?.y || 0) + 0 + 1634.5 + 60 + 861 + 0 + 0),
                                      pixelHeight: 2299,
                                      pixelWidth: 3568,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 80px)`,
                                      src: `../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?width=3568&height=2299`,
                                      srcSet: `../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?scale-down-to=512&width=3568&height=2299 512w,../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg 1024w,../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?scale-down-to=2048&width=3568&height=2299 2048w,../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?width=3568&height=2299 3568w`,
                                    },
                                  },
                                },
                                children: f(D, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 2299,
                                    intrinsicWidth: 3568,
                                    loading: S((u?.y || 0) + 0 + 1868.5 + 60 + 861 + 0 + 0),
                                    pixelHeight: 2299,
                                    pixelWidth: 3568,
                                    sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 152px)`,
                                    src: `../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?width=3568&height=2299`,
                                    srcSet: `../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?scale-down-to=512&width=3568&height=2299 512w,../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg 1024w,../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?scale-down-to=2048&width=3568&height=2299 2048w,../../assets/images/TfcRQglEyOhqko32qiQafXborng.jpg?width=3568&height=2299 3568w`,
                                  },
                                  className: `framer-1iii2je`,
                                  "data-framer-name": `1`,
                                  children: f(`div`, {
                                    className: `framer-rf8n05`,
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `14px`,
                                            "--framer-font-weight": `900`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-color": `rgb(23, 73, 45)`,
                                          },
                                          children: `Web design`,
                                        }),
                                      }),
                                      className: `framer-lftfvo`,
                                      fonts: [`FS;Nunito-black`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              }),
                              f(O, {
                                breakpoint: y,
                                overrides: {
                                  Pzb7nykTb: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3e3,
                                      intrinsicWidth: 4500,
                                      loading: S((u?.y || 0) + 0 + 1867.25 + 60 + 801 + 0 + 878),
                                      pixelHeight: 3e3,
                                      pixelWidth: 4500,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 40px)`,
                                      src: `../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?width=4500&height=3000`,
                                      srcSet: `../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?scale-down-to=512&width=4500&height=3000 512w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg 1024w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?scale-down-to=2048&width=4500&height=3000 2048w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?scale-down-to=4096&width=4500&height=3000 4096w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?width=4500&height=3000 4500w`,
                                    },
                                  },
                                  Syu0Zqy0H: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3e3,
                                      intrinsicWidth: 4500,
                                      loading: S((u?.y || 0) + 0 + 1856.5 + 60 + 861 + 0 + 878),
                                      pixelHeight: 3e3,
                                      pixelWidth: 4500,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1600px) - 152px)`,
                                      src: `../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?width=4500&height=3000`,
                                      srcSet: `../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?scale-down-to=512&width=4500&height=3000 512w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg 1024w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?scale-down-to=2048&width=4500&height=3000 2048w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?scale-down-to=4096&width=4500&height=3000 4096w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?width=4500&height=3000 4500w`,
                                    },
                                  },
                                  YMmTws0d3: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3e3,
                                      intrinsicWidth: 4500,
                                      loading: S((u?.y || 0) + 0 + 1634.5 + 60 + 861 + 0 + 878),
                                      pixelHeight: 3e3,
                                      pixelWidth: 4500,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 80px)`,
                                      src: `../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?width=4500&height=3000`,
                                      srcSet: `../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?scale-down-to=512&width=4500&height=3000 512w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg 1024w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?scale-down-to=2048&width=4500&height=3000 2048w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?scale-down-to=4096&width=4500&height=3000 4096w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?width=4500&height=3000 4500w`,
                                    },
                                  },
                                },
                                children: f(D, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 3e3,
                                    intrinsicWidth: 4500,
                                    loading: S((u?.y || 0) + 0 + 1868.5 + 60 + 861 + 0 + 878),
                                    pixelHeight: 3e3,
                                    pixelWidth: 4500,
                                    sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 152px)`,
                                    src: `../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?width=4500&height=3000`,
                                    srcSet: `../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?scale-down-to=512&width=4500&height=3000 512w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg 1024w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?scale-down-to=2048&width=4500&height=3000 2048w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?scale-down-to=4096&width=4500&height=3000 4096w,../../assets/images/xaGHyDD2aN6JBZJDaxVCCdwUgk.jpeg?width=4500&height=3000 4500w`,
                                  },
                                  className: `framer-12apxoo`,
                                  "data-framer-name": `2`,
                                  children: f(`div`, {
                                    className: `framer-69ei5c`,
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `14px`,
                                            "--framer-font-weight": `900`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-color": `rgb(0, 87, 255)`,
                                          },
                                          children: `Ilustración e Iconografía`,
                                        }),
                                      }),
                                      className: `framer-w4pgf8`,
                                      fonts: [`FS;Nunito-black`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              }),
                              f(O, {
                                breakpoint: y,
                                overrides: {
                                  Pzb7nykTb: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1080,
                                      intrinsicWidth: 1920,
                                      loading: S((u?.y || 0) + 0 + 1867.25 + 60 + 801 + 0 + 1756),
                                      pixelHeight: 1080,
                                      pixelWidth: 1920,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 40px)`,
                                      src: `../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png?width=1920&height=1080`,
                                      srcSet: `../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png?scale-down-to=512&width=1920&height=1080 512w,../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png 1024w,../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png?width=1920&height=1080 1920w`,
                                    },
                                  },
                                  Syu0Zqy0H: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1080,
                                      intrinsicWidth: 1920,
                                      loading: S((u?.y || 0) + 0 + 1856.5 + 60 + 861 + 0 + 1756),
                                      pixelHeight: 1080,
                                      pixelWidth: 1920,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1600px) - 152px)`,
                                      src: `../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png?width=1920&height=1080`,
                                      srcSet: `../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png?scale-down-to=512&width=1920&height=1080 512w,../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png 1024w,../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png?width=1920&height=1080 1920w`,
                                    },
                                  },
                                  YMmTws0d3: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1080,
                                      intrinsicWidth: 1920,
                                      loading: S((u?.y || 0) + 0 + 1634.5 + 60 + 861 + 0 + 1756),
                                      pixelHeight: 1080,
                                      pixelWidth: 1920,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 80px)`,
                                      src: `../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png?width=1920&height=1080`,
                                      srcSet: `../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png?scale-down-to=512&width=1920&height=1080 512w,../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png 1024w,../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png?width=1920&height=1080 1920w`,
                                    },
                                  },
                                },
                                children: f(D, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1080,
                                    intrinsicWidth: 1920,
                                    loading: S((u?.y || 0) + 0 + 1868.5 + 60 + 861 + 0 + 1756),
                                    pixelHeight: 1080,
                                    pixelWidth: 1920,
                                    sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 152px)`,
                                    src: `../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png?width=1920&height=1080`,
                                    srcSet: `../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png?scale-down-to=512&width=1920&height=1080 512w,../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png 1024w,../../assets/images/Y0ldWNT8AV7gshKbXXZhHawzSGU.png?width=1920&height=1080 1920w`,
                                  },
                                  className: `framer-1muv6kc`,
                                  "data-framer-name": `3`,
                                  children: f(`div`, {
                                    className: `framer-ms9dyk`,
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `14px`,
                                            "--framer-font-weight": `900`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-color": `rgb(23, 73, 45)`,
                                          },
                                          children: `Diseño de logo`,
                                        }),
                                      }),
                                      className: `framer-ht9j0i`,
                                      fonts: [`FS;Nunito-black`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              }),
                              f(O, {
                                breakpoint: y,
                                overrides: {
                                  Pzb7nykTb: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 443,
                                      intrinsicWidth: 788,
                                      loading: S((u?.y || 0) + 0 + 1867.25 + 60 + 801 + 0 + 2634),
                                      pixelHeight: 443,
                                      pixelWidth: 788,
                                      positionX: `left`,
                                      positionY: `center`,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 40px)`,
                                      src: `../../assets/images/1dQBwrBTbwIedbVvQSLtBGXQSv4.png`,
                                      srcSet: `../../assets/images/1dQBwrBTbwIedbVvQSLtBGXQSv4.png?scale-down-to=512&width=788&height=443 512w,../../assets/images/1dQBwrBTbwIedbVvQSLtBGXQSv4.png 788w`,
                                    },
                                  },
                                  Syu0Zqy0H: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 443,
                                      intrinsicWidth: 788,
                                      loading: S((u?.y || 0) + 0 + 1856.5 + 60 + 861 + 0 + 2634),
                                      pixelHeight: 443,
                                      pixelWidth: 788,
                                      positionX: `left`,
                                      positionY: `center`,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1600px) - 152px)`,
                                      src: `../../assets/images/1dQBwrBTbwIedbVvQSLtBGXQSv4.png`,
                                      srcSet: `../../assets/images/1dQBwrBTbwIedbVvQSLtBGXQSv4.png?scale-down-to=512&width=788&height=443 512w,../../assets/images/1dQBwrBTbwIedbVvQSLtBGXQSv4.png 788w`,
                                    },
                                  },
                                  YMmTws0d3: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 443,
                                      intrinsicWidth: 788,
                                      loading: S((u?.y || 0) + 0 + 1634.5 + 60 + 861 + 0 + 2634),
                                      pixelHeight: 443,
                                      pixelWidth: 788,
                                      positionX: `left`,
                                      positionY: `center`,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 80px)`,
                                      src: `../../assets/images/1dQBwrBTbwIedbVvQSLtBGXQSv4.png`,
                                      srcSet: `../../assets/images/1dQBwrBTbwIedbVvQSLtBGXQSv4.png?scale-down-to=512&width=788&height=443 512w,../../assets/images/1dQBwrBTbwIedbVvQSLtBGXQSv4.png 788w`,
                                    },
                                  },
                                },
                                children: m(D, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 443,
                                    intrinsicWidth: 788,
                                    loading: S((u?.y || 0) + 0 + 1868.5 + 60 + 861 + 0 + 2634),
                                    pixelHeight: 443,
                                    pixelWidth: 788,
                                    positionX: `left`,
                                    positionY: `center`,
                                    sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 152px)`,
                                    src: `../../assets/images/1dQBwrBTbwIedbVvQSLtBGXQSv4.png`,
                                    srcSet: `../../assets/images/1dQBwrBTbwIedbVvQSLtBGXQSv4.png?scale-down-to=512&width=788&height=443 512w,../../assets/images/1dQBwrBTbwIedbVvQSLtBGXQSv4.png 788w`,
                                  },
                                  className: `framer-1tz5ypw`,
                                  "data-framer-name": `4`,
                                  children: [
                                    f(`div`, {
                                      className: `framer-1vah9q6`,
                                      "data-framer-name": `Project Badge`,
                                      children: f(w, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                              "--framer-font-family": `"Nunito", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `900`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-color": `#17492D`,
                                            },
                                            children: `Branding`,
                                          }),
                                        }),
                                        className: `framer-1qtudmx`,
                                        fonts: [`FS;Nunito-black`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    f(`div`, {
                                      className: `framer-16c0aku`,
                                      "data-framer-name": `Checkered Detail`,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      m(_.section, {
                        className: `framer-icafno`,
                        "data-framer-name": `Pasos`,
                        id: xe,
                        layout: T,
                        ref: k,
                        children: [
                          f(`div`, {
                            className: `framer-1ee2iw6`,
                            "data-framer-name": `Process Timeline Block`,
                            children: m(`div`, {
                              className: `framer-7unl73`,
                              "data-framer-name": `Process Visual Intro`,
                              children: [
                                f(w, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                        "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                        "--framer-font-size": `14px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-text-color": `rgb(0, 87, 255)`,
                                      },
                                      children: `{ Proceso }`,
                                    }),
                                  }),
                                  className: `framer-178syf3`,
                                  fonts: [`FS;Nunito-bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(w, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                        "--framer-font-family": `"Karantina", sans-serif`,
                                        "--framer-font-size": `42px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-line-height": `0.95em`,
                                        "--framer-text-color": `rgb(46, 48, 53)`,
                                      },
                                      children: `Pasos estratégicos.`,
                                    }),
                                  }),
                                  className: `framer-13e8sg9`,
                                  fonts: [`GF;Karantina-700`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          m(`div`, {
                            className: `framer-husery`,
                            children: [
                              m(`div`, {
                                className: `framer-1h42dlf`,
                                "data-border": !0,
                                "data-framer-name": `ProcesoSteps`,
                                children: [
                                  m(`div`, {
                                    className: `framer-q7lgr9`,
                                    "data-framer-name": `Step 1`,
                                    children: [
                                      f(w, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7U3R5cm8tdmFyaWFibGVWRj1JbmRuYUhRaUlEa3dNQT09`,
                                              "--framer-font-family": `"Styro Variable", sans-serif`,
                                              "--framer-font-size": `64px`,
                                              "--framer-font-variation-axes": `"wght" 900`,
                                              "--framer-line-height": `0.9em`,
                                              "--framer-text-color": `#0057FF`,
                                            },
                                            children: `1`,
                                          }),
                                        }),
                                        className: `framer-1shdxph`,
                                        fonts: [`FS;Styro-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      m(`div`, {
                                        className: `framer-fr7clr`,
                                        children: [
                                          f(w, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: m(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                                  "--framer-font-family": `"Nunito", sans-serif`,
                                                  "--framer-font-size": `25px`,
                                                  "--framer-font-weight": `900`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-color": `rgb(46, 48, 53)`,
                                                },
                                                children: [
                                                  `Escuchamos tu `,
                                                  f(`span`, {
                                                    style: {
                                                      "--framer-text-decoration": `underline`,
                                                    },
                                                    children: `visión`,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            className: `framer-1d55vmo`,
                                            fonts: [`FS;Nunito-black`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(w, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: f(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `RlM7TnVuaXRvLW1lZGl1bQ==`,
                                                  "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                                  "--framer-font-size": `17px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.45em`,
                                                  "--framer-text-color": `rgb(74, 77, 86)`,
                                                },
                                                children: `Comienzamos por comprender tus objetivos, público objetivo y lo que esperas del proyecto, asegurándonos de que cada decisión se alinee con la esencia de la marca.`,
                                              }),
                                            }),
                                            className: `framer-tzbrgf`,
                                            fonts: [`FS;Nunito-medium`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  m(`div`, {
                                    className: `framer-1sewpnp`,
                                    "data-framer-name": `Step 2`,
                                    children: [
                                      f(w, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7U3R5cm8tdmFyaWFibGVWRj1JbmRuYUhRaUlEa3dNQT09`,
                                              "--framer-font-family": `"Styro Variable", "Styro Variable Placeholder", sans-serif`,
                                              "--framer-font-size": `64px`,
                                              "--framer-font-variation-axes": `"wght" 900`,
                                              "--framer-line-height": `0.9em`,
                                              "--framer-text-color": `var(--token-79443a2b-6b83-4e9a-90fc-7ac0f2d6802e, rgb(20, 167, 95))`,
                                            },
                                            children: `2`,
                                          }),
                                        }),
                                        className: `framer-9nkovv`,
                                        fonts: [`FS;Styro-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      m(`div`, {
                                        className: `framer-ivjwvr`,
                                        children: [
                                          f(w, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: m(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                                  "--framer-font-family": `"Nunito", sans-serif`,
                                                  "--framer-font-size": `25px`,
                                                  "--framer-font-weight": `900`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-color": `rgb(46, 48, 53)`,
                                                },
                                                children: [
                                                  `Planificamos con `,
                                                  f(`span`, {
                                                    style: {
                                                      "--framer-text-decoration": `underline`,
                                                    },
                                                    children: `propósito`,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            className: `framer-2dv1a8`,
                                            fonts: [`FS;Nunito-black`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(w, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: f(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `RlM7TnVuaXRvLW1lZGl1bQ==`,
                                                  "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                                  "--framer-font-size": `17px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.45em`,
                                                  "--framer-text-color": `rgb(74, 77, 86)`,
                                                },
                                                children: `Analizamos el contexto, las oportunidades y la ruta estratégica más adecuada para construir una hoja de ruta clara adaptada a la situación actual de la marca.`,
                                              }),
                                            }),
                                            className: `framer-8ofhyr`,
                                            fonts: [`FS;Nunito-medium`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  m(`div`, {
                                    className: `framer-rj52p8`,
                                    "data-framer-name": `Step 3`,
                                    children: [
                                      f(w, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7U3R5cm8tdmFyaWFibGVWRj1JbmRuYUhRaUlEa3dNQT09`,
                                              "--framer-font-family": `"Styro Variable", sans-serif`,
                                              "--framer-font-size": `64px`,
                                              "--framer-font-variation-axes": `"wght" 900`,
                                              "--framer-line-height": `0.9em`,
                                              "--framer-text-color": `var(--token-7ced9513-8d87-4197-ab0a-1b56969a6d43, rgb(232, 132, 19))`,
                                            },
                                            children: `3`,
                                          }),
                                        }),
                                        className: `framer-nczq2h`,
                                        fonts: [`FS;Styro-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      m(`div`, {
                                        className: `framer-15i8r6g`,
                                        children: [
                                          f(w, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: m(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                                  "--framer-font-family": `"Nunito", sans-serif`,
                                                  "--framer-font-size": `25px`,
                                                  "--framer-font-weight": `900`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-color": `rgb(46, 48, 53)`,
                                                },
                                                children: [
                                                  `Damos forma a `,
                                                  f(`span`, {
                                                    style: {
                                                      "--framer-text-decoration": `underline`,
                                                    },
                                                    children: `tus ideas`,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            className: `framer-1rw4ydz`,
                                            fonts: [`FS;Nunito-black`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(w, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: f(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `RlM7TnVuaXRvLW1lZGl1bQ==`,
                                                  "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                                  "--framer-font-size": `17px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.45em`,
                                                  "--framer-text-color": `rgb(74, 77, 86)`,
                                                },
                                                children: `Transformamos tus ideas en propuestas funcionales, atractivas y coherentes. Asegurando que cada elemento comunique con intención.`,
                                              }),
                                            }),
                                            className: `framer-12rx573`,
                                            fonts: [`FS;Nunito-medium`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  m(`div`, {
                                    className: `framer-1y3mbqj`,
                                    "data-framer-name": `Step 4`,
                                    children: [
                                      f(w, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7U3R5cm8tdmFyaWFibGVWRj1JbmRuYUhRaUlEa3dNQT09`,
                                              "--framer-font-family": `"Styro Variable", "Styro Variable Placeholder", sans-serif`,
                                              "--framer-font-size": `64px`,
                                              "--framer-font-variation-axes": `"wght" 900`,
                                              "--framer-line-height": `0.9em`,
                                              "--framer-text-color": `rgb(0, 87, 255)`,
                                            },
                                            children: `4`,
                                          }),
                                        }),
                                        className: `framer-iggks2`,
                                        fonts: [`FS;Styro-variable`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      m(`div`, {
                                        className: `framer-z70g16`,
                                        children: [
                                          f(w, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: m(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                                  "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                                  "--framer-font-size": `25px`,
                                                  "--framer-font-weight": `900`,
                                                  "--framer-line-height": `1em`,
                                                  "--framer-text-color": `rgb(46, 48, 53)`,
                                                },
                                                children: [
                                                  `Tu pryecto está `,
                                                  f(`span`, {
                                                    style: {
                                                      "--framer-text-decoration": `underline`,
                                                    },
                                                    children: `listo`,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            className: `framer-a65d3c`,
                                            fonts: [`FS;Nunito-black`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(w, {
                                            __fromCanvasComponent: !0,
                                            children: f(s, {
                                              children: f(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `RlM7TnVuaXRvLW1lZGl1bQ==`,
                                                  "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                                  "--framer-font-size": `17px`,
                                                  "--framer-font-weight": `500`,
                                                  "--framer-line-height": `1.45em`,
                                                  "--framer-text-color": `rgb(74, 77, 86)`,
                                                },
                                                children: `Una vez completado el proyecto, te lo entregamos en los formatos profesionales necesarios. Además, te acompañamos durante la adaptación con asesoramiento sobre cómo implementarlo según tus necesidades.`,
                                              }),
                                            }),
                                            className: `framer-1un7nfc`,
                                            fonts: [`FS;Nunito-medium`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              fe() &&
                                f(O, {
                                  breakpoint: y,
                                  overrides: {
                                    Syu0Zqy0H: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1667,
                                        intrinsicWidth: 800,
                                        loading: S((u?.y || 0) + 0 + 6345.5 + 60 + 363.5 + 328.5),
                                        pixelHeight: 1667,
                                        pixelWidth: 800,
                                        sizes: `251px`,
                                        src: `../../assets/images/LdTFyycMaW6kSa8cJvSxGBZc.png`,
                                        srcSet: `../../assets/images/LdTFyycMaW6kSa8cJvSxGBZc.png 800w`,
                                      },
                                    },
                                    YMmTws0d3: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1667,
                                        intrinsicWidth: 800,
                                        loading: S((u?.y || 0) + 0 + 6123.5 + 60 + 363.5 + 302.5),
                                        pixelHeight: 1667,
                                        pixelWidth: 800,
                                        sizes: `229px`,
                                        src: `../../assets/images/LdTFyycMaW6kSa8cJvSxGBZc.png`,
                                        srcSet: `../../assets/images/LdTFyycMaW6kSa8cJvSxGBZc.png 800w`,
                                      },
                                    },
                                  },
                                  children: f(D, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1667,
                                      intrinsicWidth: 800,
                                      loading: S((u?.y || 0) + 0 + 6357.5 + 60 + 363.5 + 328.5),
                                      pixelHeight: 1667,
                                      pixelWidth: 800,
                                      sizes: `251px`,
                                      src: `../../assets/images/LdTFyycMaW6kSa8cJvSxGBZc.png`,
                                      srcSet: `../../assets/images/LdTFyycMaW6kSa8cJvSxGBZc.png 800w`,
                                    },
                                    className: `framer-ya96fe hidden-15dzkfq`,
                                    "data-framer-name": `PicProceso`,
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                      m(_.section, {
                        className: `framer-195mnjx`,
                        "data-framer-name": `Sobre nosotros`,
                        id: Se,
                        layout: T,
                        ref: De,
                        children: [
                          m(`div`, {
                            className: `framer-17a2cg0`,
                            "data-framer-name": `Nosotros`,
                            children: [
                              f(w, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                      "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                      "--framer-font-size": `14px`,
                                      "--framer-font-weight": `700`,
                                      "--framer-text-color": `rgb(0, 87, 255)`,
                                    },
                                    children: `{ Nosotros }`,
                                  }),
                                }),
                                className: `framer-1pysmf6`,
                                fonts: [`FS;Nunito-bold`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              f(w, {
                                __fromCanvasComponent: !0,
                                children: f(s, {
                                  children: f(`p`, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                      "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                      "--framer-font-size": `42px`,
                                      "--framer-font-weight": `700`,
                                      "--framer-line-height": `0.95em`,
                                      "--framer-text-color": `rgb(46, 48, 53)`,
                                    },
                                    children: `Conócenos.`,
                                  }),
                                }),
                                className: `framer-1ky406o`,
                                fonts: [`GF;Karantina-700`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          m(Ys, {
                            animate: dc,
                            className: `framer-15b0793`,
                            "data-framer-appear-id": `15b0793`,
                            "data-framer-name": `Stats Row`,
                            initial: fc,
                            optimized: !0,
                            children: [
                              m(`div`, {
                                className: `framer-1gqjnha`,
                                children: [
                                  f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      Pzb7nykTb: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `48px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `30+`,
                                          }),
                                        }),
                                      },
                                      Syu0Zqy0H: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `65px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `30+`,
                                          }),
                                        }),
                                      },
                                      YMmTws0d3: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `48px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `30+`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `56px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `30+`,
                                        }),
                                      }),
                                      className: `framer-1mudtbx`,
                                      fonts: [`FS;Nunito-bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      Syu0Zqy0H: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `22px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgba(255, 255, 255, 0.72)`,
                                            },
                                            children: `Diseños completados`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgba(255,255,255,0.72)`,
                                          },
                                          children: `Diseños completados`,
                                        }),
                                      }),
                                      className: `framer-6nq1sn`,
                                      fonts: [`FS;Nunito-bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              m(`div`, {
                                className: `framer-e3l8ot`,
                                children: [
                                  f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      Pzb7nykTb: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `48px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `7+`,
                                          }),
                                        }),
                                      },
                                      Syu0Zqy0H: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `65px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `7+`,
                                          }),
                                        }),
                                      },
                                      YMmTws0d3: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `48px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `7+`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `56px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `7+`,
                                        }),
                                      }),
                                      className: `framer-8itm1r`,
                                      fonts: [`FS;Nunito-bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      Syu0Zqy0H: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `22px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgba(255, 255, 255, 0.72)`,
                                            },
                                            children: `Trabajos en Branding`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgba(255,255,255,0.72)`,
                                          },
                                          children: `Trabajos en Branding`,
                                        }),
                                      }),
                                      className: `framer-1uy403n`,
                                      fonts: [`FS;Nunito-bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              m(`div`, {
                                className: `framer-7ycudf`,
                                children: [
                                  f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      Syu0Zqy0H: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `65px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `6+`,
                                          }),
                                        }),
                                      },
                                      YMmTws0d3: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `48px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `6+`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `56px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `6+`,
                                        }),
                                      }),
                                      className: `framer-1yqg0j5`,
                                      fonts: [`FS;Nunito-bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      Syu0Zqy0H: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `22px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgba(255, 255, 255, 0.72)`,
                                            },
                                            children: `Años diseñando`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgba(255,255,255,0.72)`,
                                          },
                                          children: `Años diseñando`,
                                        }),
                                      }),
                                      className: `framer-1qlgxi1`,
                                      fonts: [`FS;Nunito-bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              m(`div`, {
                                className: `framer-4iczfl`,
                                children: [
                                  f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      Pzb7nykTb: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `46px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `100%`,
                                          }),
                                        }),
                                      },
                                      Syu0Zqy0H: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `65px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `100%`,
                                          }),
                                        }),
                                      },
                                      YMmTws0d3: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `48px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `100%`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `56px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `#FFFFFF`,
                                          },
                                          children: `100%`,
                                        }),
                                      }),
                                      className: `framer-sslxqk`,
                                      fonts: [`FS;Nunito-bold`],
                                      text: p,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      Syu0Zqy0H: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `22px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgba(255, 255, 255, 0.72)`,
                                            },
                                            children: `Diseño Original`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `15px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgba(255,255,255,0.72)`,
                                          },
                                          children: `Diseño Original`,
                                        }),
                                      }),
                                      className: `framer-fv96ok`,
                                      fonts: [`FS;Nunito-bold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m(`div`, {
                            className: `framer-lpy1hn`,
                            children: [
                              f(O, {
                                breakpoint: y,
                                overrides: {
                                  Pzb7nykTb: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1152,
                                      intrinsicWidth: 921,
                                      loading: S((u?.y || 0) + 0 + 7940.75 + 60 + 1361.5 + 0 + 0),
                                      pixelHeight: 1152,
                                      pixelWidth: 921,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 40px)`,
                                      src: `../../assets/images/i1jPVyMSmQEKJECQvQiGACpSjk.png?width=921&height=1152`,
                                      srcSet: `../../assets/images/i1jPVyMSmQEKJECQvQiGACpSjk.png 818w,../../assets/images/i1jPVyMSmQEKJECQvQiGACpSjk.png?width=921&height=1152 921w`,
                                    },
                                  },
                                  Syu0Zqy0H: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1152,
                                      intrinsicWidth: 921,
                                      loading: S((u?.y || 0) + 0 + 8034 + 60 + 912.5 + 0),
                                      pixelHeight: 1152,
                                      pixelWidth: 921,
                                      sizes: `calc((min(${u?.width || `100vw`} * 0.8667, 1600px) - 152px) * 0.65)`,
                                      src: `../../assets/images/i1jPVyMSmQEKJECQvQiGACpSjk.png?width=921&height=1152`,
                                      srcSet: `../../assets/images/i1jPVyMSmQEKJECQvQiGACpSjk.png 818w,../../assets/images/i1jPVyMSmQEKJECQvQiGACpSjk.png?width=921&height=1152 921w`,
                                    },
                                  },
                                  YMmTws0d3: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1152,
                                      intrinsicWidth: 921,
                                      loading: S((u?.y || 0) + 0 + 7713 + 60 + 1139.5 + 0),
                                      pixelHeight: 1152,
                                      pixelWidth: 921,
                                      sizes: `calc((min(${u?.width || `100vw`} * 0.8667, 1040px) - 80px) * 0.65)`,
                                      src: `../../assets/images/i1jPVyMSmQEKJECQvQiGACpSjk.png?width=921&height=1152`,
                                      srcSet: `../../assets/images/i1jPVyMSmQEKJECQvQiGACpSjk.png 818w,../../assets/images/i1jPVyMSmQEKJECQvQiGACpSjk.png?width=921&height=1152 921w`,
                                    },
                                  },
                                },
                                children: m(D, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1152,
                                    intrinsicWidth: 921,
                                    loading: S((u?.y || 0) + 0 + 8046 + 60 + 825.5 + 0),
                                    pixelHeight: 1152,
                                    pixelWidth: 921,
                                    sizes: `calc((min(${u?.width || `100vw`} * 0.8667, 1040px) - 152px) * 0.65)`,
                                    src: `../../assets/images/i1jPVyMSmQEKJECQvQiGACpSjk.png?width=921&height=1152`,
                                    srcSet: `../../assets/images/i1jPVyMSmQEKJECQvQiGACpSjk.png 818w,../../assets/images/i1jPVyMSmQEKJECQvQiGACpSjk.png?width=921&height=1152 921w`,
                                  },
                                  className: `framer-1hw6s2c`,
                                  "data-framer-name": `Designer Card`,
                                  children: [
                                    f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `22px`,
                                            "--framer-font-weight": `900`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `Dali`,
                                        }),
                                      }),
                                      className: `framer-1x5lal`,
                                      "data-framer-name": `Nombre`,
                                      fonts: [`FS;Nunito-black`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLXNlbWlib2xk`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `14px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-line-height": `1.25em`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `Diseñadora visual con experiencia en Identidad visual de marcas y webdesign.`,
                                        }),
                                      }),
                                      className: `framer-fipqpe`,
                                      "data-framer-name": `Yo`,
                                      fonts: [`FS;Nunito-semibold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                              f(O, {
                                breakpoint: y,
                                overrides: {
                                  Pzb7nykTb: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1216,
                                      intrinsicWidth: 1084,
                                      loading: S((u?.y || 0) + 0 + 7940.75 + 60 + 1361.5 + 0 + 229),
                                      pixelHeight: 1216,
                                      pixelWidth: 1084,
                                      sizes: `calc(min(${u?.width || `100vw`} * 0.8667, 1040px) - 40px)`,
                                      src: `../../assets/images/yo5JGGKPWAMOa1uC2P0hc0kccU.png?width=1084&height=1216`,
                                      srcSet: `../../assets/images/yo5JGGKPWAMOa1uC2P0hc0kccU.png 912w,../../assets/images/yo5JGGKPWAMOa1uC2P0hc0kccU.png?width=1084&height=1216 1084w`,
                                    },
                                  },
                                  Syu0Zqy0H: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1216,
                                      intrinsicWidth: 1084,
                                      loading: S((u?.y || 0) + 0 + 8034 + 60 + 912.5 + 0),
                                      pixelHeight: 1216,
                                      pixelWidth: 1084,
                                      sizes: `max((min(${u?.width || `100vw`} * 0.8667, 1600px) - 152px) * 0.35 - 7px, 1px)`,
                                      src: `../../assets/images/yo5JGGKPWAMOa1uC2P0hc0kccU.png?width=1084&height=1216`,
                                      srcSet: `../../assets/images/yo5JGGKPWAMOa1uC2P0hc0kccU.png 912w,../../assets/images/yo5JGGKPWAMOa1uC2P0hc0kccU.png?width=1084&height=1216 1084w`,
                                    },
                                  },
                                  YMmTws0d3: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1216,
                                      intrinsicWidth: 1084,
                                      loading: S((u?.y || 0) + 0 + 7713 + 60 + 1139.5 + 0),
                                      pixelHeight: 1216,
                                      pixelWidth: 1084,
                                      sizes: `max((min(${u?.width || `100vw`} * 0.8667, 1040px) - 80px) * 0.35 - 7px, 1px)`,
                                      src: `../../assets/images/yo5JGGKPWAMOa1uC2P0hc0kccU.png?width=1084&height=1216`,
                                      srcSet: `../../assets/images/yo5JGGKPWAMOa1uC2P0hc0kccU.png 912w,../../assets/images/yo5JGGKPWAMOa1uC2P0hc0kccU.png?width=1084&height=1216 1084w`,
                                    },
                                  },
                                },
                                children: m(D, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1216,
                                    intrinsicWidth: 1084,
                                    loading: S((u?.y || 0) + 0 + 8046 + 60 + 825.5 + 0),
                                    pixelHeight: 1216,
                                    pixelWidth: 1084,
                                    sizes: `max((min(${u?.width || `100vw`} * 0.8667, 1040px) - 152px) * 0.35 - 7px, 1px)`,
                                    src: `../../assets/images/yo5JGGKPWAMOa1uC2P0hc0kccU.png?width=1084&height=1216`,
                                    srcSet: `../../assets/images/yo5JGGKPWAMOa1uC2P0hc0kccU.png 912w,../../assets/images/yo5JGGKPWAMOa1uC2P0hc0kccU.png?width=1084&height=1216 1084w`,
                                  },
                                  className: `framer-uy8jf7`,
                                  "data-framer-name": `Pato`,
                                  children: [
                                    f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `22px`,
                                            "--framer-font-weight": `900`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `Pato`,
                                        }),
                                      }),
                                      className: `framer-u39cws`,
                                      "data-framer-name": `Nombre`,
                                      fonts: [`FS;Nunito-black`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7TnVuaXRvLXNlbWlib2xk`,
                                            "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                            "--framer-font-size": `14px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-line-height": `1.25em`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `La mascota del estudio.`,
                                        }),
                                      }),
                                      className: `framer-1uypidr`,
                                      "data-framer-name": `Yo`,
                                      fonts: [`FS;Nunito-semibold`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      fe() &&
                        m(_.div, {
                          className: `framer-zg1l4 hidden-15dzkfq`,
                          "data-framer-name": `Testimonios`,
                          id: ke,
                          layout: T,
                          ref: j,
                          children: [
                            m(`div`, {
                              className: `framer-1wfrf32`,
                              children: [
                                f(w, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                        "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                        "--framer-font-size": `14px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-text-color": `rgb(0, 87, 255)`,
                                      },
                                      children: `{ Nuestros clientes }`,
                                    }),
                                  }),
                                  className: `framer-v6ko0v`,
                                  fonts: [`FS;Nunito-bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(w, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                        "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                        "--framer-font-size": `42px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-line-height": `0.95em`,
                                        "--framer-text-color": `rgb(46, 48, 53)`,
                                      },
                                      children: `Palabras de nuestros clientes.`,
                                    }),
                                  }),
                                  className: `framer-18zum80`,
                                  fonts: [`GF;Karantina-700`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            m(`div`, {
                              className: `framer-dkvm93`,
                              children: [
                                m(`div`, {
                                  className: `framer-spkf2b`,
                                  "data-framer-name": `TestimonialsWA`,
                                  children: [
                                    f(O, {
                                      breakpoint: y,
                                      overrides: {
                                        Syu0Zqy0H: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 69,
                                            intrinsicWidth: 479,
                                            loading: S(
                                              (u?.y || 0) + 0 + 9532.5 + 60 + 324.5 + 28.5 + 128
                                            ),
                                            pixelHeight: 69,
                                            pixelWidth: 479,
                                            sizes: `479px`,
                                            src: `../../assets/images/1f28Kie46WEQKzu9PN9w84ZBNs8.jpg`,
                                          },
                                          transformTemplate: void 0,
                                        },
                                        YMmTws0d3: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 69,
                                            intrinsicWidth: 479,
                                            loading: S(
                                              (u?.y || 0) + 0 + 9366.5 + 60 + 324.5 + 0 + 0 + 17.5
                                            ),
                                            pixelHeight: 69,
                                            pixelWidth: 479,
                                            sizes: `479px`,
                                            src: `../../assets/images/1f28Kie46WEQKzu9PN9w84ZBNs8.jpg`,
                                          },
                                          transformTemplate: void 0,
                                        },
                                      },
                                      children: f(D, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 69,
                                          intrinsicWidth: 479,
                                          loading: S(
                                            (u?.y || 0) + 0 + 9457.5 + 60 + 324.5 + 19.5 + 148
                                          ),
                                          pixelHeight: 69,
                                          pixelWidth: 479,
                                          sizes: `479px`,
                                          src: `../../assets/images/1f28Kie46WEQKzu9PN9w84ZBNs8.jpg`,
                                        },
                                        className: `framer-rqn7bf`,
                                        "data-framer-name": `Screenshot 2026-08-05 193823`,
                                        transformTemplate: pc,
                                      }),
                                    }),
                                    f(O, {
                                      breakpoint: y,
                                      overrides: {
                                        Syu0Zqy0H: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 161,
                                            intrinsicWidth: 481,
                                            loading: S(
                                              (u?.y || 0) +
                                                0 +
                                                9532.5 +
                                                60 +
                                                324.5 +
                                                28.5 +
                                                447 -
                                                208
                                            ),
                                            pixelHeight: 161,
                                            pixelWidth: 481,
                                            sizes: `481px`,
                                            src: `../../assets/images/DId4bttiCIU3gEt8iLe3RgIYgbw.jpg`,
                                          },
                                        },
                                        YMmTws0d3: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 161,
                                            intrinsicWidth: 481,
                                            loading: S(
                                              (u?.y || 0) + 0 + 9366.5 + 60 + 324.5 + 0 + 0 + 137.5
                                            ),
                                            pixelHeight: 161,
                                            pixelWidth: 481,
                                            sizes: `481px`,
                                            src: `../../assets/images/DId4bttiCIU3gEt8iLe3RgIYgbw.jpg`,
                                          },
                                        },
                                      },
                                      children: f(D, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 161,
                                          intrinsicWidth: 481,
                                          loading: S(
                                            (u?.y || 0) + 0 + 9457.5 + 60 + 324.5 + 19.5 + 433 - 165
                                          ),
                                          pixelHeight: 161,
                                          pixelWidth: 481,
                                          sizes: `481px`,
                                          src: `../../assets/images/DId4bttiCIU3gEt8iLe3RgIYgbw.jpg`,
                                        },
                                        className: `framer-1xfrm6q`,
                                        "data-framer-name": `Screenshot 2026-08-05 193705`,
                                      }),
                                    }),
                                    f(O, {
                                      breakpoint: y,
                                      overrides: {
                                        Syu0Zqy0H: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 66,
                                            intrinsicWidth: 472,
                                            loading: S(
                                              (u?.y || 0) + 0 + 9532.5 + 60 + 324.5 + 28.5 + 0
                                            ),
                                            pixelHeight: 66,
                                            pixelWidth: 472,
                                            sizes: `472px`,
                                            src: `../../assets/images/ieq2f0glTUBgxfYWOSXyyoJu7xM.jpg`,
                                          },
                                        },
                                        YMmTws0d3: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 66,
                                            intrinsicWidth: 472,
                                            loading: S(
                                              (u?.y || 0) + 0 + 9366.5 + 60 + 324.5 + 0 + 0 + 349.5
                                            ),
                                            pixelHeight: 66,
                                            pixelWidth: 472,
                                            sizes: `472px`,
                                            src: `../../assets/images/ieq2f0glTUBgxfYWOSXyyoJu7xM.jpg`,
                                          },
                                          transformTemplate: void 0,
                                        },
                                      },
                                      children: f(D, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 66,
                                          intrinsicWidth: 472,
                                          loading: S(
                                            (u?.y || 0) + 0 + 9457.5 + 60 + 324.5 + 19.5 + 31
                                          ),
                                          pixelHeight: 66,
                                          pixelWidth: 472,
                                          sizes: `472px`,
                                          src: `../../assets/images/ieq2f0glTUBgxfYWOSXyyoJu7xM.jpg`,
                                        },
                                        className: `framer-1cefv9`,
                                        "data-framer-name": `Screenshot 2026-08-05 193951`,
                                        transformTemplate: pc,
                                      }),
                                    }),
                                  ],
                                }),
                                f(O, {
                                  breakpoint: y,
                                  overrides: {
                                    Syu0Zqy0H: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 420,
                                        intrinsicWidth: 407,
                                        loading: S((u?.y || 0) + 0 + 9532.5 + 60 + 324.5 + 0),
                                        pixelHeight: 420,
                                        pixelWidth: 407,
                                        positionX: `left`,
                                        positionY: `center`,
                                        sizes: `280px`,
                                        src: `../../assets/images/UJJNspkUj8A5YtszqnMN3i9u0l8.png`,
                                      },
                                    },
                                    YMmTws0d3: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 420,
                                        intrinsicWidth: 407,
                                        loading: S((u?.y || 0) + 0 + 9366.5 + 60 + 324.5 + 53.5),
                                        pixelHeight: 420,
                                        pixelWidth: 407,
                                        positionX: `left`,
                                        positionY: `center`,
                                        sizes: `181px`,
                                        src: `../../assets/images/UJJNspkUj8A5YtszqnMN3i9u0l8.png`,
                                      },
                                    },
                                  },
                                  children: f(D, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 420,
                                      intrinsicWidth: 407,
                                      loading: S((u?.y || 0) + 0 + 9457.5 + 60 + 324.5 + 0),
                                      pixelHeight: 420,
                                      pixelWidth: 407,
                                      positionX: `left`,
                                      positionY: `center`,
                                      sizes: `262px`,
                                      src: `../../assets/images/UJJNspkUj8A5YtszqnMN3i9u0l8.png`,
                                    },
                                    className: `framer-ue367m`,
                                    "data-framer-name": `Shape`,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      f(_.section, {
                        className: `framer-2v6kwu`,
                        "data-framer-name": `FAQ`,
                        id: M,
                        layout: T,
                        ref: je,
                        children: m(`div`, {
                          className: `framer-jcmk2f`,
                          "data-framer-name": `FAQ Block`,
                          children: [
                            m(`div`, {
                              className: `framer-1nvkshj`,
                              "data-framer-name": `FAQ Visual`,
                              children: [
                                f(w, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                        "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                        "--framer-font-size": `14px`,
                                        "--framer-font-weight": `700`,
                                        "--framer-text-color": `rgb(0, 87, 255)`,
                                      },
                                      children: `{ Preguntas y Respuestas }`,
                                    }),
                                  }),
                                  className: `framer-1bccb2x`,
                                  fonts: [`FS;Nunito-bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                f(w, {
                                  __fromCanvasComponent: !0,
                                  children: m(s, {
                                    children: [
                                      f(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                          "--framer-font-family": `"Karantina", sans-serif`,
                                          "--framer-font-size": `42px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `0.95em`,
                                          "--framer-text-color": `rgb(46, 48, 53)`,
                                        },
                                        children: `Respuestas a tus`,
                                      }),
                                      f(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                          "--framer-font-family": `"Karantina", sans-serif`,
                                          "--framer-font-size": `42px`,
                                          "--framer-font-weight": `700`,
                                          "--framer-line-height": `0.95em`,
                                          "--framer-text-color": `rgb(46, 48, 53)`,
                                        },
                                        children: `preguntas.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-1jjolet`,
                                  fonts: [`GF;Karantina-700`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                m(`div`, {
                                  className: `framer-i3rpzr`,
                                  "data-framer-name": `FAQ Illustration`,
                                  children: [
                                    f(_.div, { className: `framer-ya8yur`, style: { rotate: 45 } }),
                                    f(Xs, {
                                      __framer__loop: hc,
                                      __framer__loopEffectEnabled: !0,
                                      __framer__loopPauseOffscreen: !0,
                                      __framer__loopRepeatDelay: 3,
                                      __framer__loopRepeatType: `mirror`,
                                      __framer__loopTransition: mc,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `RlM7U3R5cm8tdmFyaWFibGVWRj1JbmRuYUhRaUlEa3dNQT09`,
                                            "--framer-font-family": `"Styro Variable", sans-serif`,
                                            "--framer-font-size": `150px`,
                                            "--framer-font-variation-axes": `"wght" 900`,
                                            "--framer-line-height": `0.8em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `?`,
                                        }),
                                      }),
                                      className: `framer-1u1vrn`,
                                      fonts: [`FS;Styro-variable`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            m(`div`, {
                              className: `framer-8m7nfh`,
                              "data-framer-name": `FAQ Rows`,
                              children: [
                                f(O, {
                                  breakpoint: y,
                                  overrides: {
                                    Pzb7nykTb: {
                                      width: `max(min(${u?.width || `100vw`} * 0.87, 1040px) - 40px, 300px)`,
                                      y: (u?.y || 0) + 0 + 10075.25 + 40 + 0 + 0 + 768 + 0 + 0,
                                    },
                                    Syu0Zqy0H: {
                                      width: `max((min(${u?.width || `100vw`}, 1600px) - 206px) / 2, 300px)`,
                                      y: (u?.y || 0) + 0 + 10505 + 60 + 0 + 0 + 0 + 0 + 0,
                                    },
                                    YMmTws0d3: {
                                      width: `max((min(min(${u?.width || `100vw`}, 1040px) - 152px, 1040px) - 54px) / 2, 300px)`,
                                      y: (u?.y || 0) + 0 + 10028.5 + 60 + 0 + 0 + 0 + 0 + 0,
                                    },
                                  },
                                  children: f(Te, {
                                    height: 104,
                                    width: `max((min(${u?.width || `100vw`}, 1040px) - 206px) / 2, 300px)`,
                                    y: (u?.y || 0) + 0 + 10222.5 + 60 + 0 + 0 + 0 + 0 + 0,
                                    children: f(ve, {
                                      className: `framer-1a92vgp-container`,
                                      nodeId: `GRo_s2t9v`,
                                      scopeId: `augiA20Il`,
                                      children: f(ls, {
                                        EEtfskIwx: `¿Qué tipo de proyectos realizan?`,
                                        height: `100%`,
                                        id: `GRo_s2t9v`,
                                        layoutId: `GRo_s2t9v`,
                                        q6rUJ8cz9: `Diseñamos marcas, sitios web, diseños visuales y experiencias digitales.`,
                                        style: { width: `100%` },
                                        variant: gc(`NyEsmyyNT`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                f(O, {
                                  breakpoint: y,
                                  overrides: {
                                    Pzb7nykTb: {
                                      width: `max(min(${u?.width || `100vw`} * 0.87, 1040px) - 40px, 300px)`,
                                      y: (u?.y || 0) + 0 + 10075.25 + 40 + 0 + 0 + 768 + 0 + 118,
                                    },
                                    Syu0Zqy0H: {
                                      width: `max((min(${u?.width || `100vw`}, 1600px) - 206px) / 2, 300px)`,
                                      y: (u?.y || 0) + 0 + 10505 + 60 + 0 + 0 + 0 + 0 + 129,
                                    },
                                    YMmTws0d3: {
                                      width: `max((min(min(${u?.width || `100vw`}, 1040px) - 152px, 1040px) - 54px) / 2, 300px)`,
                                      y: (u?.y || 0) + 0 + 10028.5 + 60 + 0 + 0 + 0 + 0 + 142,
                                    },
                                  },
                                  children: f(Te, {
                                    height: 104,
                                    width: `max((min(${u?.width || `100vw`}, 1040px) - 206px) / 2, 300px)`,
                                    y: (u?.y || 0) + 0 + 10222.5 + 60 + 0 + 0 + 0 + 0 + 142,
                                    children: f(ve, {
                                      className: `framer-1kfm41k-container`,
                                      nodeId: `GD4k0u__h`,
                                      scopeId: `augiA20Il`,
                                      children: f(ls, {
                                        EEtfskIwx: `¿Ofrecen estrategia o solo diseño visual?`,
                                        height: `100%`,
                                        id: `GD4k0u__h`,
                                        layoutId: `GD4k0u__h`,
                                        q6rUJ8cz9: `Nos gusta entender qué necesitás antes de ponernos a diseñar. Así sabemos que lo que hacemos va a funcionar, no solo que se vea lindo.`,
                                        style: { width: `100%` },
                                        variant: gc(`NyEsmyyNT`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                f(O, {
                                  breakpoint: y,
                                  overrides: {
                                    Pzb7nykTb: {
                                      width: `max(min(${u?.width || `100vw`} * 0.87, 1040px) - 40px, 300px)`,
                                      y: (u?.y || 0) + 0 + 10075.25 + 40 + 0 + 0 + 768 + 0 + 236,
                                    },
                                    Syu0Zqy0H: {
                                      width: `max((min(${u?.width || `100vw`}, 1600px) - 206px) / 2, 300px)`,
                                      y: (u?.y || 0) + 0 + 10505 + 60 + 0 + 0 + 0 + 0 + 258,
                                    },
                                    YMmTws0d3: {
                                      width: `max((min(min(${u?.width || `100vw`}, 1040px) - 152px, 1040px) - 54px) / 2, 300px)`,
                                      y: (u?.y || 0) + 0 + 10028.5 + 60 + 0 + 0 + 0 + 0 + 284,
                                    },
                                  },
                                  children: f(Te, {
                                    height: 104,
                                    width: `max((min(${u?.width || `100vw`}, 1040px) - 206px) / 2, 300px)`,
                                    y: (u?.y || 0) + 0 + 10222.5 + 60 + 0 + 0 + 0 + 0 + 284,
                                    children: f(ve, {
                                      className: `framer-197crse-container`,
                                      nodeId: `vplhdIspK`,
                                      scopeId: `augiA20Il`,
                                      children: f(O, {
                                        breakpoint: y,
                                        overrides: {
                                          YMmTws0d3: {
                                            EEtfskIwx: `¿Puedo consultar por un proyecto urgente?`,
                                          },
                                        },
                                        children: f(ls, {
                                          EEtfskIwx: `¿Puedo consultar para un proyecto urgente?`,
                                          height: `100%`,
                                          id: `vplhdIspK`,
                                          layoutId: `vplhdIspK`,
                                          q6rUJ8cz9: `Absolutamnte, aceptamos proyectos de última hora.`,
                                          style: { width: `100%` },
                                          variant: gc(`NyEsmyyNT`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                f(O, {
                                  breakpoint: y,
                                  overrides: {
                                    Pzb7nykTb: {
                                      width: `max(min(${u?.width || `100vw`} * 0.87, 1040px) - 40px, 300px)`,
                                      y: (u?.y || 0) + 0 + 10075.25 + 40 + 0 + 0 + 768 + 0 + 354,
                                    },
                                    Syu0Zqy0H: {
                                      width: `max((min(${u?.width || `100vw`}, 1600px) - 206px) / 2, 300px)`,
                                      y: (u?.y || 0) + 0 + 10505 + 60 + 0 + 0 + 0 + 0 + 387,
                                    },
                                    YMmTws0d3: {
                                      width: `max((min(min(${u?.width || `100vw`}, 1040px) - 152px, 1040px) - 54px) / 2, 300px)`,
                                      y: (u?.y || 0) + 0 + 10028.5 + 60 + 0 + 0 + 0 + 0 + 426,
                                    },
                                  },
                                  children: f(Te, {
                                    height: 104,
                                    width: `max((min(${u?.width || `100vw`}, 1040px) - 206px) / 2, 300px)`,
                                    y: (u?.y || 0) + 0 + 10222.5 + 60 + 0 + 0 + 0 + 0 + 426,
                                    children: f(ve, {
                                      className: `framer-12nmkhv-container`,
                                      nodeId: `KCw1kuuLg`,
                                      scopeId: `augiA20Il`,
                                      children: f(ls, {
                                        EEtfskIwx: `¿En qué formato entregan los productos?`,
                                        height: `100%`,
                                        id: `KCw1kuuLg`,
                                        layoutId: `KCw1kuuLg`,
                                        q6rUJ8cz9: `Entregamos archivos optimizados según el caso. Si es para imprenta, web, redes o todo junto, adaptamos la entrega. Además, te asesoramos sobre cómo implementarlo sin complicaciones.`,
                                        style: { width: `100%` },
                                        variant: gc(`NyEsmyyNT`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      m(_.section, {
                        className: `framer-xkko2d`,
                        "data-framer-name": `Contacto`,
                        id: N,
                        layout: T,
                        ref: Me,
                        children: [
                          m(`div`, {
                            className: `framer-18d8xe0`,
                            "data-framer-name": `Contact Copy`,
                            children: [
                              fe() &&
                                f(O, {
                                  breakpoint: y,
                                  overrides: {
                                    Syu0Zqy0H: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 621,
                                        intrinsicWidth: 687,
                                        loading: S((u?.y || 0) + 0 + 11418 + 80 + 0 + 0),
                                        pixelHeight: 621,
                                        pixelWidth: 687,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `289px`,
                                        src: `../../assets/images/BqcCnivqeb0yjLvBXPb1ykueHE8.png?width=687&height=621`,
                                        srcSet: `../../assets/images/BqcCnivqeb0yjLvBXPb1ykueHE8.png 512w,../../assets/images/BqcCnivqeb0yjLvBXPb1ykueHE8.png?width=687&height=621 687w`,
                                      },
                                    },
                                    YMmTws0d3: {
                                      background: {
                                        alt: ``,
                                        fit: `fit`,
                                        intrinsicHeight: 621,
                                        intrinsicWidth: 687,
                                        loading: S((u?.y || 0) + 0 + 10973.5 + 80 + 0 + 0),
                                        pixelHeight: 621,
                                        pixelWidth: 687,
                                        positionX: `center`,
                                        positionY: `center`,
                                        sizes: `calc((${u?.width || `100vw`} - 120px) * 0.3708)`,
                                        src: `../../assets/images/BqcCnivqeb0yjLvBXPb1ykueHE8.png?width=687&height=621`,
                                        srcSet: `../../assets/images/BqcCnivqeb0yjLvBXPb1ykueHE8.png 512w,../../assets/images/BqcCnivqeb0yjLvBXPb1ykueHE8.png?width=687&height=621 687w`,
                                      },
                                    },
                                  },
                                  children: f(D, {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      intrinsicHeight: 621,
                                      intrinsicWidth: 687,
                                      loading: S((u?.y || 0) + 0 + 11187.5 + 80 + 0 + 0),
                                      pixelHeight: 621,
                                      pixelWidth: 687,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `272px`,
                                      src: `../../assets/images/BqcCnivqeb0yjLvBXPb1ykueHE8.png?width=687&height=621`,
                                      srcSet: `../../assets/images/BqcCnivqeb0yjLvBXPb1ykueHE8.png 512w,../../assets/images/BqcCnivqeb0yjLvBXPb1ykueHE8.png?width=687&height=621 687w`,
                                    },
                                    className: `framer-1szc4p7 hidden-15dzkfq`,
                                    "data-framer-name": `Kiwi`,
                                  }),
                                }),
                              m(`div`, {
                                className: `framer-16ulukj`,
                                children: [
                                  f(w, {
                                    __fromCanvasComponent: !0,
                                    children: f(s, {
                                      children: f(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7TnVuaXRvLWV4dHJhYm9sZA==`,
                                          "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                          "--framer-font-size": `14px`,
                                          "--framer-font-weight": `800`,
                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                        },
                                        children: `{ Contacto }`,
                                      }),
                                    }),
                                    className: `framer-1m4mxxc`,
                                    fonts: [`FS;Nunito-extrabold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      Pzb7nykTb: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                              "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                              "--framer-font-size": `36px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `0.9em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: `Cuéntanos sobre tu proyecto ↓`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7S2FyYW50aW5hLTcwMA==`,
                                            "--framer-font-family": `"Karantina", "Karantina Placeholder", sans-serif`,
                                            "--framer-font-size": `48px`,
                                            "--framer-font-weight": `700`,
                                            "--framer-line-height": `0.9em`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `Cuéntanos sobre tu proyecto ↓`,
                                        }),
                                      }),
                                      className: `framer-12ss1jg`,
                                      fonts: [`GF;Karantina-700`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  f(O, {
                                    breakpoint: y,
                                    overrides: {
                                      Pzb7nykTb: {
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `R0Y7S2FuaXQtMzAw`,
                                              "--framer-font-family": `"Kanit", "Kanit Placeholder", sans-serif`,
                                              "--framer-font-size": `38px`,
                                              "--framer-font-weight": `300`,
                                              "--framer-line-height": `0.9em`,
                                              "--framer-text-color": `rgb(255, 255, 255)`,
                                            },
                                            children: f(E, {
                                              href: `mailto:kiwiturquesa@gmail.com`,
                                              motionChild: !0,
                                              nodeId: `Q_UMT3qKe`,
                                              openInNewTab: !0,
                                              relValues: [],
                                              scopeId: `augiA20Il`,
                                              smoothScroll: !1,
                                              children: m(_.a, {
                                                className: `framer-styles-preset-7fb1fq`,
                                                "data-styles-preset": `nrhNy1qDO`,
                                                children: [
                                                  `kiwiturquesa`,
                                                  f(`br`, {}),
                                                  `@ gmail.com`,
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                      YMmTws0d3: {
                                        children: m(s, {
                                          children: [
                                            f(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FuaXQtMzAw`,
                                                "--framer-font-family": `"Kanit", "Kanit Placeholder", sans-serif`,
                                                "--framer-font-size": `52px`,
                                                "--framer-font-weight": `300`,
                                                "--framer-line-height": `0.9em`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: f(E, {
                                                href: `mailto:kiwiturquesa@gmail.com`,
                                                motionChild: !0,
                                                nodeId: `Q_UMT3qKe`,
                                                openInNewTab: !0,
                                                relValues: [],
                                                scopeId: `augiA20Il`,
                                                smoothScroll: !1,
                                                children: f(_.a, {
                                                  className: `framer-styles-preset-7fb1fq`,
                                                  "data-styles-preset": `nrhNy1qDO`,
                                                  children: `kiwiturquesa`,
                                                }),
                                              }),
                                            }),
                                            f(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7S2FuaXQtMzAw`,
                                                "--framer-font-family": `"Kanit", "Kanit Placeholder", sans-serif`,
                                                "--framer-font-size": `52px`,
                                                "--framer-font-weight": `300`,
                                                "--framer-line-height": `0.9em`,
                                                "--framer-text-color": `rgb(255, 255, 255)`,
                                              },
                                              children: f(E, {
                                                href: `mailto:kiwiturquesa@gmail.com`,
                                                motionChild: !0,
                                                nodeId: `Q_UMT3qKe`,
                                                openInNewTab: !0,
                                                relValues: [],
                                                scopeId: `augiA20Il`,
                                                smoothScroll: !1,
                                                children: f(_.a, {
                                                  className: `framer-styles-preset-7fb1fq`,
                                                  "data-styles-preset": `nrhNy1qDO`,
                                                  children: `@ gmail.com`,
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      },
                                    },
                                    children: f(w, {
                                      __fromCanvasComponent: !0,
                                      children: f(s, {
                                        children: f(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `R0Y7S2FuaXQtMzAw`,
                                            "--framer-font-family": `"Kanit", "Kanit Placeholder", sans-serif`,
                                            "--framer-font-size": `52px`,
                                            "--framer-font-weight": `300`,
                                            "--framer-line-height": `0.9em`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: f(E, {
                                            href: `mailto:kiwiturquesa@gmail.com`,
                                            motionChild: !0,
                                            nodeId: `Q_UMT3qKe`,
                                            openInNewTab: !0,
                                            relValues: [],
                                            scopeId: `augiA20Il`,
                                            smoothScroll: !1,
                                            children: f(_.a, {
                                              className: `framer-styles-preset-7fb1fq`,
                                              "data-styles-preset": `nrhNy1qDO`,
                                              children: `kiwiturquesa@gmail.com`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      className: `framer-12b0b1k`,
                                      fonts: [`GF;Kanit-300`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          f(`footer`, {
                            className: `framer-tw1sdg`,
                            "data-framer-name": `Footer`,
                            children: m(`div`, {
                              className: `framer-ub0tav`,
                              "data-framer-name": `Footer Inner`,
                              children: [
                                f(w, {
                                  __fromCanvasComponent: !0,
                                  children: f(s, {
                                    children: f(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7TnVuaXRvLWJsYWNr`,
                                        "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                        "--framer-font-size": `30px`,
                                        "--framer-font-weight": `900`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `rgb(46, 48, 53)`,
                                      },
                                      children: `KiwiDesign®`,
                                    }),
                                  }),
                                  className: `framer-1eots62`,
                                  "data-framer-name": `Kiwidesign`,
                                  fonts: [`FS;Nunito-black`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                fe() &&
                                  m(`div`, {
                                    className: `framer-1ry1dlv hidden-15dzkfq`,
                                    children: [
                                      f(w, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(74, 77, 86)`,
                                            },
                                            children: f(E, {
                                              href: { hash: `:AlZ9vDXO8`, webPageId: `augiA20Il` },
                                              motionChild: !0,
                                              nodeId: `s5sju3LG8`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `augiA20Il`,
                                              smoothScroll: !1,
                                              children: f(_.a, { children: `Home` }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-1lpi3a`,
                                        fonts: [`FS;Nunito-bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      f(w, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(74, 77, 86)`,
                                            },
                                            children: f(E, {
                                              href: { hash: `:I2owgsAtB`, webPageId: `augiA20Il` },
                                              motionChild: !0,
                                              nodeId: `h_5wNpHms`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `augiA20Il`,
                                              smoothScroll: !1,
                                              children: f(_.a, { children: `Servicios` }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-18h1qtv`,
                                        fonts: [`FS;Nunito-bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      f(w, {
                                        __fromCanvasComponent: !0,
                                        children: f(s, {
                                          children: f(`p`, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `RlM7TnVuaXRvLWJvbGQ=`,
                                              "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                              "--framer-font-size": `14px`,
                                              "--framer-font-weight": `700`,
                                              "--framer-line-height": `1em`,
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `rgb(74, 77, 86)`,
                                            },
                                            children: f(E, {
                                              href: { hash: `:FafHf3TkE`, webPageId: `augiA20Il` },
                                              motionChild: !0,
                                              nodeId: `ZIGqFDYJP`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `augiA20Il`,
                                              smoothScroll: !1,
                                              children: f(_.a, { children: `Trabajo` }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-1eltyz0`,
                                        fonts: [`FS;Nunito-bold`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                f(w, {
                                  __fromCanvasComponent: !0,
                                  children: m(s, {
                                    children: [
                                      f(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7TnVuaXRvLXNlbWlib2xk`,
                                          "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                          "--framer-font-size": `13px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `rgb(107, 112, 123)`,
                                        },
                                        children: `© 2026 KiwiDesign. Todos los derechos reservados, excepto las ideas aburridas. `,
                                      }),
                                      f(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7TnVuaXRvLXNlbWlib2xk`,
                                          "--framer-font-family": `"Nunito", "Nunito Placeholder", sans-serif`,
                                          "--framer-font-size": `13px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `rgb(107, 112, 123)`,
                                        },
                                        children: `Bs.As., Argentina.`,
                                      }),
                                    ],
                                  }),
                                  className: `framer-elx07c`,
                                  fonts: [`FS;Nunito-semibold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  f(`div`, { id: `overlay` }),
                ],
              }),
            })
          );
        }),
        [
          `.framer-jQJOI.framer-lux5qc, .framer-jQJOI .framer-lux5qc { display: block; }`,
          `.framer-jQJOI.framer-72rtr7 { align-content: center; align-items: center; background-color: #f7f7f4; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
          `.framer-jQJOI .framer-14ixeaw { align-content: center; align-items: center; background-color: #0057ff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 170px; height: 100vh; justify-content: flex-start; left: 0px; min-height: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 22px 0px 22px 0px; position: fixed; top: 0px; width: 72px; z-index: 5; }`,
          `.framer-jQJOI .framer-19tmy7x-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 40px; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-jQJOI .framer-186rdp { align-content: center; align-items: center; bottom: 50px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50px; transform: translateX(-50%); width: min-content; z-index: 1; }`,
          `.framer-jQJOI .framer-k19rv5, .framer-jQJOI .framer-3rzu9v, .framer-jQJOI .framer-1uhhodp, .framer-jQJOI .framer-14ikpz8, .framer-jQJOI .framer-4enupe, .framer-jQJOI .framer-117y7u2, .framer-jQJOI .framer-9ilau8, .framer-jQJOI .framer-lftfvo, .framer-jQJOI .framer-w4pgf8, .framer-jQJOI .framer-ht9j0i, .framer-jQJOI .framer-1qtudmx, .framer-jQJOI .framer-1shdxph, .framer-jQJOI .framer-9nkovv, .framer-jQJOI .framer-nczq2h, .framer-jQJOI .framer-iggks2, .framer-jQJOI .framer-1lpi3a, .framer-jQJOI .framer-18h1qtv, .framer-jQJOI .framer-1eltyz0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-jQJOI .framer-bfzzh2-container { aspect-ratio: 9.6 / 1; bottom: 0px; flex: none; height: auto; left: 50%; position: fixed; transform: translateX(-50%); width: 100%; z-index: 9; }`,
          `.framer-jQJOI .framer-atk8df { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 54px; height: 800px; justify-content: flex-start; max-width: 1180px; overflow: var(--overflow-clip-fallback, clip); padding: 120px 40px 60px 112px; position: relative; width: 98%; }`,
          `.framer-jQJOI .framer-3y74lh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-jQJOI .framer-1vwniup, .framer-jQJOI .framer-13e8sg9, .framer-jQJOI .framer-18zum80, .framer-jQJOI .framer-1jjolet, .framer-jQJOI .framer-12ss1jg { --framer-text-wrap: balance; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-jQJOI .framer-yk8ujx { --framer-text-wrap: balance; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 454px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-jQJOI .framer-8gwva6 { align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: var(--token-7ced9513-8d87-4197-ab0a-1b56969a6d43, #e88413); border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; bottom: 99px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 20px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; width: 131px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-jQJOI .framer-ng1y9 { flex: none; height: 222px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-nyba5f { --framer-text-wrap: balance; flex: none; height: auto; max-width: 560px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-jQJOI .framer-nesem6 { align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: var(--token-7ced9513-8d87-4197-ab0a-1b56969a6d43, #e88413); border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; bottom: 130px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; left: 20px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; width: 131px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-jQJOI .framer-1isq3kk { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 600px; }`,
          `.framer-jQJOI .framer-avcw6p { --border-bottom-width: 1px; --border-color: rgba(46, 48, 53, 0.08); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; aspect-ratio: 1.6666666666666667 / 1; background: linear-gradient(135deg, #ddf4ff 0%, rgb(255, 255, 255) 38%, rgb(215, 255, 232) 100%); border-bottom-left-radius: 46px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 600px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-jQJOI .framer-1n3x134 { flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-jQJOI .framer-1djzmx { height: 96px; left: 261px; position: absolute; top: 351px; width: 54px; }`,
          `.framer-jQJOI .framer-1l4p64w { height: 144px; left: 126px; position: absolute; top: 571px; width: 279px; }`,
          `.framer-jQJOI .framer-1cfzlu8, .framer-jQJOI .framer-icafno { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: flex-start; max-width: 1040px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 40px 60px 112px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-1gj26sj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-9ey5qp, .framer-jQJOI .framer-16wnq9q, .framer-jQJOI .framer-1go5qzc, .framer-jQJOI .framer-otx3z5, .framer-jQJOI .framer-16ji4hj, .framer-jQJOI .framer-178syf3, .framer-jQJOI .framer-1d55vmo, .framer-jQJOI .framer-tzbrgf, .framer-jQJOI .framer-2dv1a8, .framer-jQJOI .framer-8ofhyr, .framer-jQJOI .framer-1rw4ydz, .framer-jQJOI .framer-12rx573, .framer-jQJOI .framer-a65d3c, .framer-jQJOI .framer-1un7nfc, .framer-jQJOI .framer-1pysmf6, .framer-jQJOI .framer-1mudtbx, .framer-jQJOI .framer-6nq1sn, .framer-jQJOI .framer-8itm1r, .framer-jQJOI .framer-1uy403n, .framer-jQJOI .framer-1yqg0j5, .framer-jQJOI .framer-1qlgxi1, .framer-jQJOI .framer-sslxqk, .framer-jQJOI .framer-fv96ok, .framer-jQJOI .framer-v6ko0v, .framer-jQJOI .framer-1bccb2x, .framer-jQJOI .framer-1m4mxxc, .framer-jQJOI .framer-12b0b1k, .framer-jQJOI .framer-1eots62, .framer-jQJOI .framer-elx07c { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-jQJOI .framer-1c1oomb { --framer-text-wrap: balance; flex: none; height: auto; max-width: 540px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-jQJOI .framer-gluupr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-a5ix5a, .framer-jQJOI .framer-1ys85hd, .framer-jQJOI .framer-14xmk6d { --border-bottom-width: 1px; --border-color: rgba(33, 33, 33, 0.15); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 33px; height: 181px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 20px 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-13yk0bc, .framer-jQJOI .framer-u9g13h, .framer-jQJOI .framer-3k6004 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: 100px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 38px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-1iagef { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-jQJOI .framer-sxmoz2, .framer-jQJOI .framer-1bomwot { flex: 1 0 0px; height: 79px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-jQJOI .framer-h7szov, .framer-jQJOI .framer-195mnjx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: flex-start; max-width: 1040px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 40px 60px 112px; position: relative; width: 87%; }`,
          `.framer-jQJOI .framer-o9npc, .framer-jQJOI .framer-17a2cg0, .framer-jQJOI .framer-1wfrf32 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-7i0xie { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 28px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-l6cqjm, .framer-jQJOI .framer-12pt1kn, .framer-jQJOI .framer-1ky406o { --framer-text-wrap: balance; flex: none; height: auto; max-width: 620px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-jQJOI .framer-5lol0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 28px 55px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 12px 0px 12px 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-1810g1h { aspect-ratio: 1.2626387176325524 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 152px; }`,
          `.framer-jQJOI .framer-nbc8kf { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 150px; }`,
          `.framer-jQJOI .framer-pe7biq { aspect-ratio: 1.098360655737705 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 127px; }`,
          `.framer-jQJOI .framer-91w6ls { aspect-ratio: 3.1446540880503147 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 265px; }`,
          `.framer-jQJOI .framer-137w8o2 { aspect-ratio: 1.85675430643699 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 200px; }`,
          `.framer-jQJOI .framer-51cc6d { aspect-ratio: 1.25 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 220px; }`,
          `.framer-jQJOI .framer-2yciub { aspect-ratio: 1.25 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 210px; }`,
          `.framer-jQJOI .framer-qod665 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-1iii2je { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 34px; border-bottom-right-radius: 34px; border-top-left-radius: 34px; border-top-right-radius: 34px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 170px; height: 85vh; justify-content: flex-start; overflow: visible; padding: 34px; position: sticky; top: 60px; width: 100%; z-index: 1; }`,
          `.framer-jQJOI .framer-rf8n05, .framer-jQJOI .framer-ms9dyk, .framer-jQJOI .framer-1vah9q6 { align-content: center; align-items: center; background-color: #d7ffe8; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 10px 18px 10px 18px; position: relative; width: min-content; }`,
          `.framer-jQJOI .framer-12apxoo { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 34px; border-bottom-right-radius: 34px; border-top-left-radius: 34px; border-top-right-radius: 34px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 170px; height: 85vh; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 34px; position: sticky; top: 60px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-jQJOI .framer-69ei5c { align-content: center; align-items: center; background-color: #ddf4ff; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 10px 18px 10px 18px; position: relative; width: min-content; }`,
          `.framer-jQJOI .framer-1muv6kc { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 34px; border-bottom-right-radius: 34px; border-top-left-radius: 34px; border-top-right-radius: 34px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 170px; height: 85vh; justify-content: flex-start; overflow: visible; padding: 34px; position: sticky; top: 60px; width: 100%; z-index: 3; }`,
          `.framer-jQJOI .framer-1tz5ypw { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 34px; border-bottom-right-radius: 34px; border-top-left-radius: 34px; border-top-right-radius: 34px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 170px; height: 85vh; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 34px; position: sticky; top: 60px; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 4; }`,
          `.framer-jQJOI .framer-16c0aku { border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; flex: none; height: 52px; position: absolute; right: 36px; top: 48px; width: 360px; }`,
          `.framer-jQJOI .framer-1ee2iw6 { display: grid; flex: none; gap: 54px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(300px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-7unl73 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 26px; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-husery { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-1h42dlf { --border-bottom-width: 0px; --border-color: rgba(46, 48, 53, 0.22); --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 44px; position: relative; width: 1px; }`,
          `.framer-jQJOI .framer-q7lgr9, .framer-jQJOI .framer-1sewpnp, .framer-jQJOI .framer-rj52p8, .framer-jQJOI .framer-1y3mbqj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-fr7clr, .framer-jQJOI .framer-ivjwvr, .framer-jQJOI .framer-15i8r6g, .framer-jQJOI .framer-z70g16 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
          `.framer-jQJOI .framer-ya96fe { aspect-ratio: 0.4799685781618225 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 251px; }`,
          `.framer-jQJOI .framer-15b0793 { background-color: #141414; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: grid; flex: none; gap: 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(150px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-jQJOI .framer-1gqjnha, .framer-jQJOI .framer-e3l8ot, .framer-jQJOI .framer-7ycudf, .framer-jQJOI .framer-4iczfl { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-lpy1hn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-1hw6s2c { align-content: center; align-items: center; border-bottom-left-radius: 34px; border-bottom-right-radius: 34px; border-top-left-radius: 34px; border-top-right-radius: 34px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 442px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 65%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-jQJOI .framer-1x5lal, .framer-jQJOI .framer-u39cws { bottom: 80px; flex: none; height: auto; left: 25px; position: absolute; white-space: pre-wrap; width: 229px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-jQJOI .framer-fipqpe, .framer-jQJOI .framer-1uypidr { bottom: 35px; flex: none; height: auto; left: 25px; position: absolute; white-space: pre-wrap; width: 80%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-jQJOI .framer-uy8jf7 { align-content: center; align-items: center; border-bottom-left-radius: 34px; border-bottom-right-radius: 34px; border-top-left-radius: 34px; border-top-right-radius: 34px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 442px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-jQJOI .framer-zg1l4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 29px; height: 741px; justify-content: flex-start; max-width: 1040px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 40px 60px 112px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-dkvm93 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 33px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-spkf2b { flex: 1 0 0px; height: 433px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
          `.framer-jQJOI .framer-rqn7bf { aspect-ratio: 6.942028985507246 / 1; flex: none; height: auto; left: 48%; overflow: visible; position: absolute; top: 148px; transform: translateX(-50%); width: 479px; }`,
          `.framer-jQJOI .framer-1xfrm6q { aspect-ratio: 2.987577639751553 / 1; bottom: 4px; flex: none; height: auto; left: 82px; overflow: visible; position: absolute; width: 481px; }`,
          `.framer-jQJOI .framer-1cefv9 { aspect-ratio: 7.151515151515151 / 1; flex: none; height: auto; left: 50%; overflow: visible; position: absolute; top: 31px; transform: translateX(-50%); width: 472px; }`,
          `.framer-jQJOI .framer-ue367m { aspect-ratio: 0.555 / 1; border-bottom-left-radius: 34px; border-bottom-right-radius: 34px; border-top-left-radius: 34px; border-top-right-radius: 34px; flex: none; height: auto; overflow: visible; position: relative; width: 262px; }`,
          `.framer-jQJOI .framer-2v6kwu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: flex-start; max-width: 1040px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 40px 80px 112px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-jcmk2f { display: grid; flex: none; gap: 54px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(300px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-1nvkshj { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-i3rpzr { align-content: center; align-items: center; background: linear-gradient(135deg, #0057ff 0%, rgb(29, 219, 124) 100%); border-bottom-left-radius: 34px; border-bottom-right-radius: 34px; border-top-left-radius: 34px; border-top-right-radius: 34px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 270px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-jQJOI .framer-ya8yur { background-color: var(--token-7ced9513-8d87-4197-ab0a-1b56969a6d43, #e88413); border-bottom-left-radius: 42px; border-bottom-right-radius: 42px; border-top-left-radius: 42px; border-top-right-radius: 42px; flex: none; height: 180px; position: relative; width: 180px; }`,
          `.framer-jQJOI .framer-1u1vrn { flex: none; height: auto; left: 0px; position: absolute; top: 68px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-jQJOI .framer-8m7nfh { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 38px; height: 100%; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-1a92vgp-container, .framer-jQJOI .framer-1kfm41k-container, .framer-jQJOI .framer-197crse-container, .framer-jQJOI .framer-12nmkhv-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-xkko2d { align-content: center; align-items: center; background: linear-gradient(180deg, #f7aa52 43.53448275862069%, rgb(227, 213, 204) 63.36206896551724%, rgb(250, 248, 245) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 54px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-18d8xe0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 40px; position: relative; width: 1048px; }`,
          `.framer-jQJOI .framer-1szc4p7 { -webkit-filter: hue-rotate(289deg); align-content: center; align-items: center; aspect-ratio: 0.97 / 1; display: flex; filter: hue-rotate(289deg); flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 272px; }`,
          `.framer-jQJOI .framer-16ulukj { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; padding: 40px 0px 0px 0px; position: relative; width: 1px; }`,
          `.framer-jQJOI .framer-tw1sdg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 42px; height: min-content; justify-content: flex-start; max-width: 100%; overflow: var(--overflow-clip-fallback, clip); padding: 60px 40px 90px 40px; position: relative; width: 103%; }`,
          `.framer-jQJOI .framer-ub0tav { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 42px; height: min-content; justify-content: flex-start; max-width: 1040px; padding: 0px; position: relative; width: 100%; }`,
          `.framer-jQJOI .framer-1ry1dlv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 37px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
          ...bs,
          `.framer-jQJOI[data-border="true"]::after, .framer-jQJOI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
          `@media (min-width: 800px) and (max-width: 1199.98px) { .framer-jQJOI.framer-72rtr7 { width: 800px; } .framer-jQJOI .framer-14ixeaw { align-content: flex-start; align-items: flex-start; aspect-ratio: 20.454545454545453 / 1; flex-direction: row; height: auto; max-height: 44px; min-height: 44px; width: 100%; } .framer-jQJOI .framer-19tmy7x-container { bottom: 7px; max-width: 30px; position: absolute; right: 17px; width: 30px; z-index: 1; } .framer-jQJOI .framer-atk8df { height: 548px; padding: 120px 40px 60px 40px; } .framer-jQJOI .framer-yk8ujx { width: 328px; } .framer-jQJOI .framer-8gwva6 { bottom: -150px; left: unset; right: 0px; } .framer-jQJOI .framer-1isq3kk { width: 316px; } .framer-jQJOI .framer-avcw6p { width: 314px; } .framer-jQJOI .framer-1djzmx { left: 53px; top: 202px; } .framer-jQJOI .framer-1cfzlu8 { gap: 30px; padding: 30px 40px 60px 40px; width: 87%; } .framer-jQJOI .framer-a5ix5a { gap: 20px; height: 231px; } .framer-jQJOI .framer-1ys85hd, .framer-jQJOI .framer-14xmk6d { gap: 20px; height: 192px; } .framer-jQJOI .framer-h7szov, .framer-jQJOI .framer-195mnjx { padding: 60px 40px 60px 40px; } .framer-jQJOI .framer-icafno { padding: 60px 40px 60px 40px; width: 87%; } .framer-jQJOI .framer-1h42dlf { gap: 19px; } .framer-jQJOI .framer-ya96fe { width: 229px; } .framer-jQJOI .framer-15b0793 { gap: 24px 19px; grid-template-columns: repeat(2, minmax(150px, 1fr)); padding: 22px; } .framer-jQJOI .framer-1mudtbx, .framer-jQJOI .framer-6nq1sn, .framer-jQJOI .framer-8itm1r, .framer-jQJOI .framer-1uy403n, .framer-jQJOI .framer-1yqg0j5, .framer-jQJOI .framer-1qlgxi1, .framer-jQJOI .framer-sslxqk, .framer-jQJOI .framer-fv96ok { width: 150px; } .framer-jQJOI .framer-1hw6s2c, .framer-jQJOI .framer-uy8jf7 { height: 370px; } .framer-jQJOI .framer-zg1l4 { height: 638px; padding: 60px 40px 60px 40px; width: 87%; } .framer-jQJOI .framer-dkvm93 { gap: 15px; width: min-content; } .framer-jQJOI .framer-spkf2b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 51px; justify-content: center; padding: 0px; width: min-content; } .framer-jQJOI .framer-rqn7bf, .framer-jQJOI .framer-1cefv9 { left: unset; position: relative; top: unset; transform: unset; } .framer-jQJOI .framer-1xfrm6q { bottom: unset; left: unset; position: relative; } .framer-jQJOI .framer-ue367m { width: 181px; } .framer-jQJOI .framer-2v6kwu { padding: 60px 40px 60px 112px; } .framer-jQJOI .framer-jcmk2f { max-width: 1040px; } .framer-jQJOI .framer-xkko2d { align-content: flex-start; align-items: flex-start; padding: 80px 40px 0px 40px; } .framer-jQJOI .framer-18d8xe0 { gap: 28px; order: 0; width: 100%; } .framer-jQJOI .framer-1szc4p7 { aspect-ratio: 1 / 1; order: 0; width: 37%; } .framer-jQJOI .framer-16ulukj { order: 1; padding: 0px 0px 14px 0px; } .framer-jQJOI .framer-tw1sdg { order: 1; width: 100%; }}`,
          `@media (max-width: 799.98px) { .framer-jQJOI.framer-72rtr7 { width: 390px; } .framer-jQJOI .framer-14ixeaw { align-content: flex-start; align-items: flex-start; aspect-ratio: 5.571428571428571 / 1; flex-direction: row; height: auto; max-height: 70px; min-height: 70px; order: 0; width: 100%; } .framer-jQJOI .framer-19tmy7x-container { position: absolute; right: 15px; top: 50%; transform: translateY(-50%); z-index: 1; } .framer-jQJOI .framer-bfzzh2-container { order: 1; } .framer-jQJOI .framer-atk8df { flex-direction: column; height: 430px; order: 2; padding: 120px 20px 60px 20px; } .framer-jQJOI .framer-3y74lh { flex: none; width: 100%; } .framer-jQJOI .framer-yk8ujx { width: 178px; } .framer-jQJOI .framer-8gwva6 { bottom: 70px; left: unset; right: 20px; } .framer-jQJOI .framer-1cfzlu8 { gap: 36px; max-width: unset; order: 3; padding: 60px 20px 0px 20px; width: 87%; } .framer-jQJOI .framer-gluupr { max-width: 1040px; padding: 22px 0px 22px 0px; } .framer-jQJOI .framer-a5ix5a { gap: 36px; height: min-content; } .framer-jQJOI .framer-13yk0bc, .framer-jQJOI .framer-u9g13h, .framer-jQJOI .framer-3k6004 { height: min-content; } .framer-jQJOI .framer-1ys85hd, .framer-jQJOI .framer-14xmk6d { gap: 8px; height: min-content; } .framer-jQJOI .framer-h7szov { order: 4; padding: 60px 20px 40px 20px; } .framer-jQJOI .framer-7i0xie { padding: 0px; } .framer-jQJOI .framer-5lol0 { gap: 33px; padding: 0px; } .framer-jQJOI .framer-1810g1h { width: 78px; } .framer-jQJOI .framer-nbc8kf { width: 82px; } .framer-jQJOI .framer-pe7biq { width: 71px; } .framer-jQJOI .framer-91w6ls { width: 117px; } .framer-jQJOI .framer-137w8o2 { width: 92px; } .framer-jQJOI .framer-51cc6d { width: 94px; } .framer-jQJOI .framer-icafno { gap: 70px; order: 5; padding: 40px 20px 40px 20px; width: 87%; } .framer-jQJOI .framer-1ee2iw6 { grid-template-columns: repeat(1, minmax(300px, 1fr)); } .framer-jQJOI .framer-7unl73 { align-self: center; height: 100%; justify-self: center; z-index: 1; } .framer-jQJOI .framer-1h42dlf { flex: none; padding: 0px 20px 0px 20px; width: 346px; z-index: 1; } .framer-jQJOI .framer-195mnjx { gap: 16px; order: 6; padding: 60px 20px 60px 20px; } .framer-jQJOI .framer-1ky406o { width: 350px; } .framer-jQJOI .framer-15b0793 { gap: 21px 24px; grid-template-columns: repeat(1, minmax(150px, 1fr)); grid-template-rows: repeat(3, minmax(0, 1fr)); padding: 20px 0px 0px 0px; } .framer-jQJOI .framer-1gqjnha, .framer-jQJOI .framer-7ycudf { padding: 0px 0px 0px 10px; } .framer-jQJOI .framer-1mudtbx, .framer-jQJOI .framer-8itm1r, .framer-jQJOI .framer-1yqg0j5 { height: 46px; } .framer-jQJOI .framer-e3l8ot, .framer-jQJOI .framer-4iczfl { align-self: center; grid-row: span 2; padding: 0px 0px 0px 10px; } .framer-jQJOI .framer-lpy1hn { flex-direction: column; } .framer-jQJOI .framer-1hw6s2c { aspect-ratio: 1.3423423423423424 / 1; height: auto; width: 100%; } .framer-jQJOI .framer-1x5lal { bottom: 90px; } .framer-jQJOI .framer-uy8jf7 { aspect-ratio: 0.875 / 1; flex: none; height: auto; width: 100%; } .framer-jQJOI .framer-u39cws { bottom: 60px; } .framer-jQJOI .framer-2v6kwu { gap: 80px; order: 8; padding: 40px 20px 40px 20px; width: 87%; } .framer-jQJOI .framer-jcmk2f { gap: 0px 54px; grid-template-columns: repeat(1, minmax(300px, 1fr)); } .framer-jQJOI .framer-i3rpzr { height: 237px; } .framer-jQJOI .framer-ya8yur { height: 155px; width: 155px; } .framer-jQJOI .framer-8m7nfh { gap: 14px; } .framer-jQJOI .framer-xkko2d { gap: 40px; order: 9; padding: 40px 20px 0px 20px; } .framer-jQJOI .framer-18d8xe0 { gap: 15px; padding: 0px; width: 100%; } .framer-jQJOI .framer-16ulukj { padding: 0px 0px 14px 0px; } .framer-jQJOI .framer-1m4mxxc, .framer-jQJOI .framer-12ss1jg, .framer-jQJOI .framer-12b0b1k { white-space: pre; width: auto; } .framer-jQJOI .framer-tw1sdg { gap: 0px; padding: 40px 40px 90px 40px; } .framer-jQJOI .framer-ub0tav { gap: 30px; width: 101%; }}`,
          `@media (min-width: 2000px) { .framer-jQJOI.framer-72rtr7 { width: 2000px; } .framer-jQJOI .framer-14ixeaw { gap: 0px; min-height: 1000px; } .framer-jQJOI .framer-atk8df { height: 788px; max-width: 1600px; width: 80%; } .framer-jQJOI .framer-3y74lh { padding: 13px 0px 13px 0px; } .framer-jQJOI .framer-1vwniup { order: 0; } .framer-jQJOI .framer-yk8ujx { order: 1; } .framer-jQJOI .framer-8gwva6 { bottom: -147px; left: -767px; order: 2; } .framer-jQJOI .framer-ng1y9 { order: 3; } .framer-jQJOI .framer-nyba5f { order: 5; } .framer-jQJOI .framer-nesem6 { order: 4; } .framer-jQJOI .framer-avcw6p { width: 742px; } .framer-jQJOI .framer-1cfzlu8, .framer-jQJOI .framer-h7szov, .framer-jQJOI .framer-icafno, .framer-jQJOI .framer-195mnjx, .framer-jQJOI .framer-2v6kwu { max-width: 1600px; } .framer-jQJOI .framer-husery { gap: 70px; } .framer-jQJOI .framer-zg1l4 { height: min-content; max-width: 1600px; width: 80%; } .framer-jQJOI .framer-spkf2b { height: 447px; } .framer-jQJOI .framer-rqn7bf { left: 70px; top: 128px; transform: unset; } .framer-jQJOI .framer-1xfrm6q { bottom: 47px; left: 512px; } .framer-jQJOI .framer-1cefv9 { left: 53%; top: 0px; } .framer-jQJOI .framer-ue367m { width: 280px; } .framer-jQJOI .framer-1nvkshj { max-width: 600px; } .framer-jQJOI .framer-i3rpzr { height: 218px; } .framer-jQJOI .framer-ya8yur { height: 157px; width: 157px; } .framer-jQJOI .framer-1u1vrn { top: 45px; } .framer-jQJOI .framer-8m7nfh { gap: 25px; } .framer-jQJOI .framer-xkko2d { gap: 100px; max-width: 100%; padding: 80px 80px 0px 80px; } .framer-jQJOI .framer-18d8xe0 { gap: 55px; } .framer-jQJOI .framer-1szc4p7 { width: 289px; } .framer-jQJOI .framer-1m4mxxc, .framer-jQJOI .framer-12ss1jg, .framer-jQJOI .framer-12b0b1k { white-space: pre; width: auto; } .framer-jQJOI .framer-tw1sdg { width: 100%; } .framer-jQJOI .framer-ub0tav { width: 1040px; }}`,
        ],
        `framer-jQJOI`
      )),
      (xc.displayName = `Home`),
      (xc.defaultProps = { height: 8925, width: 1200 }),
      T(
        xc,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Nunito`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Nunito`,
                url: `../../assets/misc/W5V7CAN3UXPRAAGP4NZQP6AVRBJRK74M.woff2`,
                weight: `900`,
              },
              {
                cssFamilyName: `Styro`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Styro`,
                url: `../../assets/misc/3EPMQZHLHYZC6WTMUJCOOFX4KMTM6RDC.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Nunito`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Nunito`,
                url: `../../assets/misc/DA6SBKJCYG2VMA5IQWRWJEW6ZUKE3654.woff2`,
                weight: `800`,
              },
              {
                cssFamilyName: `Nunito`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Nunito`,
                url: `../../assets/misc/XZA7IBHUHTN5TQGW7L7CCGBY3MTQ4TPH.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Karantina`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Karantina`,
                url: `https://fonts.gstatic.com/s/karantina/v13/buExpo24ccnh31GVMABxTC8f_f5Oaiw4cw.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Nunito`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Nunito`,
                url: `../../assets/misc/4V6IAVOQFOLXHZMSUY7BQKCWJG5N4TWB.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Styro Variable`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Styro`,
                url: `../../assets/misc/7VJVVOZ5KBSLF6KBBXGIKDUV7RXGSM77.woff2`,
                variationAxes: [
                  { defaultValue: 900, maxValue: 900, minValue: 200, name: `Weight`, tag: `wght` },
                ],
                weight: `400`,
              },
              {
                cssFamilyName: `Nunito`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Nunito`,
                url: `../../assets/misc/MKTS7VJCH3IMUVTV3MN54KOVFE4Y43BD.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Kanit`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Kanit`,
                url: `https://fonts.gstatic.com/s/kanit/v17/nKKU-Go6G5tXcr4-OSWlX6BJNUJy.woff2`,
                weight: `300`,
              },
            ],
          },
          ...Gs,
          ...Ks,
          ...Zs,
          ...Qs,
          ...x(ys),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (xc.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([y(Ls, {}, t), y(ls, {}, t)])),
      }),
      (Sc = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerIntrinsicHeight: `8925`,
              framerAutoSizeImages: `true`,
              framerImmutableVariables: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerColorSyntax: `true`,
              framerComponentViewportWidth: `true`,
              framerContractVersion: `1`,
              framerIntrinsicWidth: `1200`,
              framerRootFontSize: `18`,
              framerScrollSections: `{"AlZ9vDXO8":{"pattern":":AlZ9vDXO8","name":"home"},"I2owgsAtB":{"pattern":":I2owgsAtB","name":"servicios"},"FafHf3TkE":{"pattern":":FafHf3TkE","name":"trabajo"},"RR5gt5p8i":{"pattern":":RR5gt5p8i","name":"pasos"},"NxFfdCg0r":{"pattern":":NxFfdCg0r","name":"nosotros"},"rNKbpcHQ1":{"pattern":":rNKbpcHQ1","name":"testimonios"},"bLjUYaCNu":{"pattern":":bLjUYaCNu","name":"faq"},"jFu1eHBue":{"pattern":":jFu1eHBue","name":"contacto"}}`,
              framerDisplayContentsDiv: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"YMmTws0d3":{"layout":["fixed","auto"]},"Pzb7nykTb":{"layout":["fixed","auto"]},"Syu0Zqy0H":{"layout":["fixed","auto"]}}}`,
              framerResponsiveScreen: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
async function wc(e, t, n) {
  let r = Ec[e],
    i = r ? await r(t, n) : void 0,
    a = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of Tc) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(i);
    n && a[t.placement].push({ ...t, code: n });
  }
  return a;
}
var Tc,
  Ec,
  Dc,
  Oc,
  kc = t(() => {
    ((Tc = []),
      (Ec = {}),
      (Dc = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] }),
      (Oc = {
        exports: {
          snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
          getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Ac,
  jc,
  Mc,
  Nc = t(() => {
    (p(),
      h(),
      j(),
      (Ac = () => (
        a(() => {
          let e = document.querySelector(`meta[name="robots"]`);
          e
            ? e.setAttribute(`content`, `noindex`)
            : ((e = document.createElement(`meta`)),
              e.setAttribute(`name`, `robots`),
              e.setAttribute(`content`, `noindex`),
              document.head.appendChild(e));
        }, []),
        f(`div`, {
          className: `__framer-not-found-page`,
          style: {
            display: `flex`,
            height: `100vh`,
            alignItems: `center`,
            justifyContent: `center`,
            backgroundColor: `var(--color-primary)`,
            background: `var(--color-background)`,
            fontSize: `var(--font-size-body)`,
            boxSizing: `border-box`,
            fontFeatureSettings: `"liga", "clig"`,
            fontVariantLigatures: `common-ligatures`,
            textRendering: `optimizeLegibility`,
          },
          children: m(`main`, {
            style: {
              boxSizing: `border-box`,
              fontFamily: `"Inter", sans-serif`,
              fontWeight: 500,
              maxWidth: `240px`,
              width: `100%`,
              display: `flex`,
              alignItems: `center`,
              flexDirection: `column`,
              padding: `0 20px`,
              textWrap: `balance`,
            },
            children: [
              f(`svg`, {
                xmlns: `http://www.w3.org/2000/svg`,
                width: `14`,
                height: `21`,
                style: {
                  verticalAlign: `middle`,
                  color: `var(--color-primary)`,
                  marginBottom: `20px`,
                },
                children: f(`path`, {
                  d: `M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z`,
                  fill: `currentColor`,
                }),
              }),
              f(`h1`, {
                style: {
                  margin: `0 0 10px 0`,
                  fontSize: `var(--font-size-title)`,
                  color: `var(--color-primary)`,
                  textAlign: `center`,
                },
                children: `Page Not Found`,
              }),
              f(`div`, {
                style: {
                  color: `var(--color-secondary)`,
                  marginBottom: `20px`,
                  lineHeight: `1.5em`,
                  textAlign: `center`,
                },
                children: `The page you are looking for does not exist or may have been moved.`,
              }),
              f(`a`, {
                href: `/`,
                role: `button`,
                style: {
                  backgroundColor: `var(--color-tint)`,
                  color: `#ffffff`,
                  paddingLeft: `8px`,
                  paddingRight: `8px`,
                  borderRadius: `8px`,
                  lineHeight: `30px`,
                  height: `30px`,
                  textDecoration: `none`,
                  verticalAlign: `baseline`,
                },
                children: `Back to Home`,
              }),
            ],
          }),
        })
      )),
      (jc = ge(Ac, [
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter Placeholder;
      src: local("Arial");
      ascent-override: 89.79%;
      descent-override: 22.36%;
      line-gap-override: 0%;
      size-adjust: 107.89%;
    }`,
        `.__framer-not-found-page {
      --color-background: #ffffff;
      --color-primary: #333;
      --color-secondary: #888;
      --color-tint: #0099ff;
      --font-size-body: 12px;
      --font-size-title: 12px;
    }`,
        `@media (prefers-color-scheme: dark) {
      .__framer-not-found-page {
        --color-background: #000000;
        --color-primary: #fff;
        --color-secondary: #888;
      }
    }`,
      ])),
      (Mc = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `component`,
            slots: [],
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Pc = e({ __FramerMetadata__: () => Mc, default: () => jc }),
  Fc = t(() => {
    (Nc(), Nc());
  });
function Ic() {
  let e = !1;
  try {
    e = g.self !== g.top;
  } catch {
    e = !0;
  }
  if (!e) return !1;
  let t = null,
    n = !1;
  if (g.location.ancestorOrigins && g.location.ancestorOrigins.length > 0) {
    let e = g.location.ancestorOrigins[0];
    try {
      t = new URL(e).host;
    } catch {}
  } else if (document.referrer)
    try {
      t = new URL(document.referrer).host;
    } catch {}
  return (t && (n = t === zc || t.endsWith(`.${zc}`)), n);
}
function Lc(e) {
  return c((t, n) => {
    let r = l(Bc, Vc, Hc),
      i = pe.current() === pe.canvas;
    return r && !i
      ? null
      : f(e, {
          ...t,
          ref: n,
          onClick: (e) => {
            (e.preventDefault(),
              g.open(
                `https://www.framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(g?.location?.origin)}`
              ));
          },
          style: { ...t.style, pointerEvents: `auto` },
          title: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
          className: t.className + ` __framer-badge`,
        });
  });
}
function Rc(e) {
  return c((t, n) =>
    m(u, {
      children: [
        f(`p`, {
          style: { position: `absolute`, transform: `scale(0.001)` },
          children: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
        }),
        f(e, { ...t, ref: n }),
      ],
    })
  );
}
var zc,
  Bc,
  Vc,
  Hc,
  Uc = t(() => {
    (i(),
      p(),
      h(),
      j(),
      (zc = `framer.com`),
      (Bc = () => () => {}),
      (Vc = () => Ic()),
      (Hc = () => !1));
  }),
  Wc,
  Gc,
  Kc,
  qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc = t(() => {
    (p(),
      j(),
      h(),
      (Wc = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 97 10" xmlns="http://www.w3.org/2000/svg"><path d="M 91.736 9.781 L 91.736 2.818 L 93.316 2.818 L 93.316 3.98 L 93.374 3.98 C 93.501 3.577 93.714 3.269 94.014 3.053 C 94.328 2.833 94.704 2.72 95.087 2.729 C 95.185 2.729 95.287 2.733 95.392 2.742 C 95.498 2.75 95.587 2.759 95.659 2.767 L 95.659 4.253 C 95.552 4.23 95.444 4.215 95.335 4.209 C 95.188 4.192 95.039 4.184 94.891 4.184 C 94.603 4.184 94.343 4.247 94.11 4.374 C 93.882 4.497 93.702 4.674 93.57 4.907 C 93.434 5.16 93.366 5.445 93.374 5.732 L 93.374 9.782 L 91.736 9.782 Z M 87.286 9.927 C 86.588 9.927 85.985 9.779 85.477 9.483 C 84.969 9.183 84.577 8.761 84.303 8.22 C 84.032 7.678 83.897 7.048 83.897 6.328 C 83.897 5.618 84.032 4.988 84.303 4.443 C 84.56 3.917 84.96 3.475 85.458 3.167 C 85.953 2.858 86.531 2.704 87.191 2.704 C 87.64 2.704 88.059 2.78 88.448 2.932 C 88.841 3.08 89.186 3.305 89.482 3.605 C 89.779 3.901 90.009 4.272 90.174 4.715 C 90.344 5.155 90.428 5.67 90.428 6.258 L 90.428 6.748 L 84.627 6.748 L 84.627 5.629 L 89.609 5.629 L 88.86 5.946 C 88.868 5.594 88.801 5.243 88.664 4.918 C 88.549 4.641 88.355 4.404 88.105 4.238 C 87.86 4.074 87.559 3.991 87.204 3.991 C 86.852 3.991 86.55 4.074 86.296 4.239 C 86.042 4.404 85.847 4.629 85.712 4.912 C 85.576 5.213 85.509 5.54 85.515 5.87 L 85.515 6.62 C 85.515 7.047 85.587 7.413 85.731 7.717 C 85.879 8.017 86.089 8.248 86.359 8.409 C 86.63 8.566 86.948 8.644 87.312 8.644 C 87.562 8.644 87.786 8.608 87.984 8.536 C 88.177 8.467 88.353 8.356 88.499 8.212 C 88.642 8.072 88.749 7.906 88.816 7.711 L 90.326 7.921 C 90.228 8.313 90.032 8.673 89.756 8.968 C 89.476 9.268 89.125 9.503 88.702 9.672 C 88.282 9.842 87.811 9.926 87.286 9.926 Z M 72.643 9.781 L 72.643 2.818 L 74.191 2.818 L 74.235 4.443 L 74.115 4.443 C 74.225 4.041 74.385 3.713 74.597 3.459 C 74.798 3.212 75.055 3.016 75.347 2.888 C 75.63 2.761 75.928 2.698 76.241 2.698 C 76.753 2.698 77.177 2.854 77.511 3.167 C 77.849 3.48 78.074 3.922 78.184 4.494 L 77.987 4.494 C 78.066 4.132 78.232 3.795 78.469 3.51 C 78.691 3.248 78.972 3.041 79.289 2.907 C 79.615 2.766 79.968 2.695 80.323 2.697 C 80.746 2.697 81.127 2.79 81.465 2.977 C 81.808 3.159 82.077 3.429 82.272 3.789 C 82.47 4.149 82.57 4.591 82.57 5.116 L 82.57 9.781 L 80.939 9.781 L 80.939 5.363 C 80.939 4.923 80.818 4.602 80.577 4.398 C 80.333 4.19 80.021 4.08 79.701 4.088 C 79.434 4.088 79.204 4.145 79.009 4.258 C 78.816 4.371 78.66 4.536 78.559 4.735 C 78.449 4.953 78.394 5.195 78.399 5.439 L 78.399 9.781 L 76.813 9.781 L 76.813 5.287 C 76.813 4.923 76.698 4.633 76.47 4.417 C 76.246 4.197 75.958 4.087 75.606 4.087 C 75.366 4.087 75.143 4.145 74.94 4.259 C 74.737 4.374 74.569 4.543 74.458 4.748 C 74.339 4.963 74.28 5.23 74.28 5.548 L 74.28 9.781 L 72.642 9.781 Z M 67.291 9.915 C 66.724 9.915 66.221 9.771 65.781 9.483 C 65.344 9.191 65 8.776 64.746 8.239 C 64.496 7.701 64.371 7.059 64.371 6.309 C 64.371 5.552 64.498 4.904 64.752 4.367 C 65.01 3.829 65.359 3.419 65.799 3.135 C 66.244 2.851 66.763 2.703 67.291 2.71 C 67.668 2.71 67.987 2.771 68.25 2.894 C 68.516 3.013 68.736 3.164 68.91 3.351 C 69.083 3.533 69.22 3.719 69.322 3.91 L 69.38 3.91 L 69.38 2.818 L 70.998 2.818 L 70.998 9.781 L 69.38 9.781 L 69.38 8.696 L 69.322 8.696 C 69.211 8.908 69.07 9.102 68.903 9.273 C 68.726 9.46 68.503 9.614 68.237 9.737 C 67.938 9.863 67.615 9.923 67.291 9.915 Z M 67.723 8.563 C 68.078 8.563 68.383 8.469 68.637 8.283 C 68.901 8.079 69.101 7.804 69.215 7.49 C 69.35 7.147 69.418 6.751 69.418 6.303 C 69.418 5.85 69.35 5.456 69.214 5.123 C 69.103 4.811 68.902 4.539 68.637 4.341 C 68.387 4.155 68.083 4.062 67.723 4.062 C 67.363 4.062 67.058 4.155 66.809 4.342 C 66.559 4.528 66.369 4.788 66.237 5.122 C 66.107 5.456 66.041 5.85 66.041 6.302 C 66.041 6.752 66.106 7.145 66.237 7.483 C 66.369 7.822 66.559 8.086 66.809 8.277 C 67.063 8.467 67.367 8.563 67.723 8.563 Z M 59.909 9.781 L 59.909 2.818 L 61.489 2.818 L 61.489 3.98 L 61.546 3.98 C 61.673 3.577 61.887 3.269 62.188 3.053 C 62.488 2.837 62.846 2.729 63.26 2.729 C 63.358 2.729 63.46 2.733 63.565 2.742 C 63.671 2.75 63.76 2.759 63.832 2.767 L 63.832 4.253 C 63.725 4.23 63.617 4.215 63.508 4.209 C 63.361 4.192 63.212 4.184 63.064 4.184 C 62.776 4.184 62.516 4.247 62.283 4.374 C 62.054 4.497 61.875 4.674 61.743 4.907 C 61.607 5.16 61.539 5.445 61.546 5.732 L 61.546 9.782 L 59.909 9.782 Z M 52.647 9.781 L 52.647 0.323 L 58.804 0.323 L 58.804 1.758 L 54.336 1.758 L 54.336 4.513 L 58.411 4.513 L 58.411 5.928 L 54.336 5.928 L 54.336 9.781 Z M 43.265 5.744 L 43.265 9.781 L 41.628 9.781 L 41.628 2.818 L 43.195 2.818 L 43.215 4.551 L 43.024 4.551 C 43.223 3.946 43.517 3.489 43.906 3.18 C 44.296 2.867 44.78 2.71 45.36 2.71 C 45.842 2.71 46.263 2.814 46.623 3.021 C 46.987 3.228 47.268 3.531 47.467 3.929 C 47.67 4.322 47.772 4.805 47.772 5.376 L 47.772 9.781 L 46.141 9.781 L 46.141 5.63 C 46.141 5.147 46.018 4.775 45.773 4.513 C 45.531 4.246 45.195 4.113 44.763 4.113 C 44.475 4.113 44.217 4.176 43.989 4.303 C 43.762 4.429 43.576 4.619 43.456 4.849 C 43.329 5.09 43.266 5.389 43.266 5.744 Z M 38.353 9.781 L 38.353 2.818 L 39.99 2.818 L 39.99 9.781 L 38.352 9.781 Z M 39.171 1.815 C 38.919 1.821 38.675 1.728 38.491 1.555 C 38.31 1.389 38.208 1.153 38.212 0.907 C 38.208 0.663 38.31 0.43 38.492 0.267 C 38.674 0.091 38.918 -0.005 39.171 0 C 39.438 0 39.664 0.088 39.851 0.266 C 40.041 0.44 40.136 0.653 40.136 0.907 C 40.136 1.161 40.041 1.377 39.85 1.555 C 39.667 1.728 39.423 1.821 39.171 1.815 Z M 30.741 9.927 C 30.043 9.927 29.44 9.779 28.932 9.483 C 28.426 9.185 28.018 8.746 27.758 8.22 C 27.488 7.678 27.352 7.048 27.352 6.328 C 27.352 5.618 27.487 4.988 27.758 4.443 C 28.015 3.917 28.415 3.475 28.913 3.167 C 29.408 2.858 29.986 2.704 30.646 2.704 C 31.095 2.704 31.514 2.78 31.903 2.932 C 32.293 3.079 32.646 3.308 32.938 3.605 C 33.234 3.901 33.464 4.272 33.629 4.715 C 33.799 5.155 33.883 5.67 33.883 6.258 L 33.883 6.748 L 28.083 6.748 L 28.083 5.629 L 33.066 5.629 L 32.316 5.946 C 32.316 5.553 32.251 5.21 32.12 4.918 C 32.005 4.641 31.811 4.404 31.561 4.238 C 31.316 4.074 31.015 3.991 30.66 3.991 C 30.34 3.983 30.024 4.069 29.752 4.239 C 29.498 4.404 29.303 4.629 29.168 4.912 C 29.032 5.213 28.965 5.54 28.971 5.87 L 28.971 6.62 C 28.971 7.047 29.043 7.413 29.187 7.717 C 29.335 8.017 29.545 8.248 29.816 8.409 C 30.086 8.566 30.404 8.644 30.768 8.644 C 31.018 8.644 31.242 8.608 31.441 8.536 C 31.634 8.467 31.809 8.356 31.955 8.212 C 32.099 8.072 32.205 7.906 32.272 7.711 L 33.782 7.921 C 33.684 8.313 33.488 8.673 33.212 8.968 C 32.932 9.268 32.581 9.503 32.158 9.672 C 31.707 9.847 31.226 9.934 30.742 9.926 Z M 22.312 9.915 C 21.777 9.924 21.251 9.774 20.801 9.483 C 20.361 9.191 20.016 8.776 19.766 8.239 C 19.516 7.701 19.392 7.059 19.392 6.309 C 19.392 5.552 19.519 4.904 19.772 4.367 C 20.027 3.829 20.374 3.419 20.814 3.135 C 21.254 2.852 21.751 2.71 22.305 2.71 C 22.682 2.71 23.001 2.771 23.264 2.894 C 23.53 3.013 23.748 3.164 23.918 3.351 C 24.091 3.533 24.228 3.721 24.33 3.916 L 24.381 3.916 L 24.381 0.323 L 26.019 0.323 L 26.019 9.781 L 24.413 9.781 L 24.413 8.689 L 24.343 8.689 C 24.233 8.904 24.091 9.101 23.923 9.273 C 23.734 9.468 23.51 9.626 23.263 9.737 C 23.001 9.855 22.684 9.915 22.312 9.915 Z M 22.737 8.563 C 23.092 8.563 23.397 8.469 23.651 8.283 C 23.915 8.079 24.115 7.804 24.229 7.49 C 24.364 7.147 24.432 6.751 24.432 6.303 C 24.432 5.85 24.364 5.456 24.229 5.123 C 24.118 4.811 23.917 4.539 23.651 4.341 C 23.385 4.151 23.064 4.053 22.737 4.062 C 22.41 4.053 22.089 4.152 21.823 4.342 C 21.573 4.528 21.383 4.79 21.252 5.128 C 21.118 5.505 21.054 5.903 21.062 6.303 C 21.062 6.751 21.127 7.145 21.258 7.483 C 21.389 7.822 21.58 8.086 21.829 8.277 C 22.079 8.467 22.381 8.563 22.737 8.563 Z M 14.352 9.915 C 13.817 9.924 13.291 9.774 12.841 9.483 C 12.405 9.191 12.061 8.776 11.806 8.239 C 11.556 7.701 11.432 7.059 11.432 6.309 C 11.432 5.552 11.559 4.904 11.812 4.367 C 12.071 3.829 12.42 3.419 12.86 3.135 C 13.3 2.852 13.797 2.71 14.352 2.71 C 14.728 2.71 15.048 2.771 15.31 2.894 C 15.577 3.013 15.797 3.164 15.97 3.351 C 16.144 3.533 16.281 3.719 16.383 3.91 L 16.44 3.91 L 16.44 2.818 L 18.059 2.818 L 18.059 9.781 L 16.44 9.781 L 16.44 8.696 L 16.383 8.696 C 16.272 8.908 16.131 9.102 15.964 9.273 C 15.786 9.46 15.564 9.614 15.298 9.737 C 14.999 9.863 14.676 9.923 14.352 9.915 Z M 14.783 8.563 C 15.139 8.563 15.443 8.469 15.697 8.283 C 15.951 8.093 16.144 7.828 16.275 7.49 C 16.41 7.147 16.478 6.751 16.478 6.303 C 16.478 5.85 16.41 5.456 16.275 5.123 C 16.164 4.811 15.963 4.539 15.697 4.341 C 15.447 4.155 15.143 4.062 14.783 4.062 C 14.423 4.062 14.119 4.155 13.869 4.342 C 13.608 4.543 13.41 4.813 13.298 5.122 C 13.167 5.456 13.101 5.85 13.101 6.302 C 13.101 6.752 13.167 7.145 13.298 7.483 C 13.429 7.822 13.62 8.086 13.869 8.277 C 14.123 8.467 14.428 8.563 14.783 8.563 Z M 0 9.781 L 0 0.323 L 2.507 0.323 L 4.322 5.236 C 4.382 5.418 4.452 5.646 4.532 5.922 C 4.612 6.197 4.695 6.493 4.779 6.811 C 4.864 7.124 4.942 7.428 5.014 7.725 C 5.09 8.017 5.154 8.273 5.204 8.493 L 4.843 8.493 C 5.045 7.633 5.267 6.778 5.509 5.928 C 5.589 5.648 5.662 5.418 5.725 5.236 L 7.509 0.323 L 10.023 0.323 L 10.023 9.781 L 8.347 9.781 L 8.347 4.989 C 8.35 4.443 8.358 3.897 8.372 3.351 L 8.398 2.38 C 8.406 2.054 8.412 1.743 8.417 1.447 L 8.563 1.447 C 8.473 1.773 8.379 2.107 8.277 2.45 L 7.979 3.446 C 7.886 3.764 7.795 4.056 7.706 4.322 C 7.636 4.546 7.561 4.768 7.483 4.989 L 5.719 9.781 L 4.303 9.781 L 2.513 4.989 L 2.291 4.329 C 2.198 4.04 2.107 3.75 2.018 3.459 L 1.713 2.469 C 1.613 2.129 1.514 1.788 1.415 1.447 L 1.593 1.447 C 1.597 1.73 1.603 2.035 1.612 2.361 C 1.62 2.682 1.627 3.006 1.631 3.332 C 1.639 3.654 1.646 3.958 1.65 4.246 C 1.658 4.534 1.663 4.781 1.663 4.989 L 1.663 9.781 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="9.927205036163329px" id="LLqmOOyHA" transform="translate(0 -0.25)" width="95.65900006103517px"/></svg>'), var(--framer-icon-mask, none)`),
      (Gc = `alpha, var(--framer-icon-mask-mode, add)`),
      (Kc = `no-repeat`),
      (qc = `center`),
      (Jc = `auto`),
      (Yc = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? f(_.div, { ...a, layoutId: r, ref: t }) : f(`div`, { ...a, ref: t });
      })),
      (Xc = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (Zc = ge(
        c(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = Xc(e);
          return f(Yc, {
            ...c,
            className: A(`framer-g7oZR`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-g7oZR { -webkit-mask-image: ${Wc}; -webkit-mask-position: ${qc}; -webkit-mask-repeat: ${Kc}; -webkit-mask-size: ${Jc}; aspect-ratio: 9.7; background-color: var(--1bd4d3i); mask-image: ${Wc}; mask-mode: ${Gc}; mask-position: ${qc}; mask-repeat: ${Kc}; mask-size: ${Jc}; width: 97px; }`,
        ],
        `framer-g7oZR`
      )),
      (Zc.displayName = `Text`),
      ke(Zc, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: k.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: k.Color },
      }));
  }),
  $c,
  el,
  tl,
  nl,
  rl,
  il,
  al,
  ol,
  sl = t(() => {
    (p(),
      j(),
      h(),
      ($c = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 12 0 L 12 6 L 6 6 Z M 0 6 L 6 6 L 12 12 L 6 12 L 6 18 L 0 12 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="18px" id="td4SVg2I8" transform="translate(0 1.5)" width="12px"/></svg>'), var(--framer-icon-mask, none)`),
      (el = `alpha, var(--framer-icon-mask-mode, add)`),
      (tl = `no-repeat`),
      (nl = `center`),
      (rl = `auto`),
      (il = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? f(_.div, { ...a, layoutId: r, ref: t }) : f(`div`, { ...a, ref: t });
      })),
      (al = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (ol = ge(
        c(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = al(e);
          return f(il, {
            ...c,
            className: A(`framer-hcsc7`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-hcsc7 { -webkit-mask-image: ${$c}; -webkit-mask-position: ${nl}; -webkit-mask-repeat: ${tl}; -webkit-mask-size: ${rl}; aspect-ratio: 0.6; background-color: var(--1bd4d3i); mask-image: ${$c}; mask-mode: ${el}; mask-position: ${nl}; mask-repeat: ${tl}; mask-size: ${rl}; width: 12px; }`,
        ],
        `framer-hcsc7`
      )),
      (ol.displayName = `Framer`),
      ke(ol, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: k.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: k.Color },
      }));
  }),
  cl = e({ __FramerMetadata__: () => Tl, default: () => wl }),
  ll,
  ul,
  dl,
  fl,
  pl,
  ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  bl,
  xl,
  Sl,
  Cl,
  wl,
  Tl,
  El = t(() => {
    (p(),
      j(),
      ie(),
      h(),
      Uc(),
      Qc(),
      sl(),
      (ll = b(ol)),
      (ul = b(Zc)),
      (dl = De(Zc, { nodeId: `pBR1Ew0r8`, override: Rc, scopeId: `PX9hIOIVM` })),
      (fl = fe(ue(De(_.a, { nodeId: `HK2sXlagE`, override: Lc, scopeId: `PX9hIOIVM` })))),
      (pl = `framer-6jWyo`),
      (ml = { HK2sXlagE: `framer-v-n0ccwk` }),
      (hl = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 40, delay: 1, mass: 1.5, stiffness: 350, type: `spring` },
        x: 0,
        y: 0,
      }),
      (gl = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (_l = { duration: 0, type: `tween` }),
      (vl = (e, t) => `translate(-50%, -50%) ${t}`),
      (yl = (e, t) => `translateX(-50%) ${t}`),
      (bl = ({ value: e, children: t }) => {
        let r = n(v),
          i = e ?? r.transition,
          a = d(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(v.Provider, { value: a, children: t });
      }),
      (xl = _.create(s)),
      (Sl = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Cl = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (wl = ge(
        c(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = te(),
            { activeLocale: a, setLocale: s } = Ee();
          se();
          let { style: c, className: l, layoutId: u, variant: d, ...p } = Sl(e),
            {
              baseVariant: h,
              classNames: ee,
              clearLoadingGesture: g,
              gestureHandlers: v,
              gestureVariant: ne,
              isLoading: ie,
              setGestureState: ae,
              setVariant: y,
              variants: b,
            } = le({ defaultVariant: `HK2sXlagE`, ref: r, variant: d, variantClassNames: ml }),
            x = Cl(e, b),
            S = A(pl);
          return f(re, {
            id: u ?? i,
            children: f(xl, {
              animate: b,
              initial: !1,
              children: f(bl, {
                value: _l,
                children: f(E, {
                  href: `https://www.framer.com`,
                  motionChild: !0,
                  nodeId: `HK2sXlagE`,
                  openInNewTab: !1,
                  relValues: [],
                  scopeId: `PX9hIOIVM`,
                  children: m(fl, {
                    ...p,
                    ...v,
                    __framer__presenceAnimate: hl,
                    __framer__presenceInitial: gl,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `${A(S, `framer-n0ccwk`, l, ee)} framer-bmpgw8`,
                    "data-framer-appear-id": `n0ccwk`,
                    "data-framer-name": `Light`,
                    "data-nosnippet": !0,
                    layoutDependency: x,
                    layoutId: `HK2sXlagE`,
                    optimized: !0,
                    ref: r,
                    style: { ...c },
                    children: [
                      f(_.div, {
                        className: `framer-13yxzio`,
                        "data-framer-name": `Backdrop`,
                        layoutDependency: x,
                        layoutId: `IH1cvP0s5`,
                        style: {
                          backgroundColor: `rgb(255, 255, 255)`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          boxShadow: `0px 0.6021873017743928px 1.5656869846134214px -1.5px rgba(0, 0, 0, 0.17), 0px 2.288533303243457px 5.950186588432988px -3px rgba(0, 0, 0, 0.14), 0px 10px 26px -4.5px rgba(0, 0, 0, 0.02)`,
                        },
                      }),
                      m(_.div, {
                        className: `framer-19yaanm`,
                        "data-framer-name": `Content`,
                        layoutDependency: x,
                        layoutId: `U6HIU1IEW`,
                        transformTemplate: vl,
                        children: [
                          f(_.div, {
                            className: `framer-1kflzx5`,
                            layoutDependency: x,
                            layoutId: `roMJYXHnO`,
                            children: f(ol, {
                              animated: !0,
                              className: `framer-e50co`,
                              "data-framer-name": `Logo`,
                              layoutDependency: x,
                              layoutId: `O3s3GcxMZ`,
                              style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                              transformTemplate: yl,
                            }),
                          }),
                          f(dl, {
                            animated: !0,
                            className: `framer-1um7t9d`,
                            "data-framer-name": `Text`,
                            layoutDependency: x,
                            layoutId: `pBR1Ew0r8`,
                            style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                          }),
                        ],
                      }),
                      f(_.div, {
                        className: `framer-j4ugry`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: x,
                        layoutId: `vCwsHyUh8`,
                        style: {
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                          mask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                          opacity: 0.06,
                          WebkitMask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                        },
                      }),
                      f(_.div, {
                        className: `framer-jnuwbw`,
                        "data-framer-name": `Border`,
                        layoutDependency: x,
                        layoutId: `ZirFGX8Eh`,
                        style: {
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                          opacity: 0.04,
                        },
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-6jWyo.framer-bmpgw8, .framer-6jWyo .framer-bmpgw8 { display: block; }`,
          `.framer-6jWyo.framer-n0ccwk { gap: 10px; height: 38px; overflow: visible; position: relative; text-decoration: none; width: 140px; }`,
          `.framer-6jWyo .framer-13yxzio { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-6jWyo .framer-19yaanm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }`,
          `.framer-6jWyo .framer-1kflzx5 { flex: none; height: 16px; overflow: visible; position: relative; width: 12px; }`,
          `.framer-6jWyo .framer-e50co { flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 50%; position: absolute; top: -2px; }`,
          `.framer-6jWyo .framer-1um7t9d { flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; }`,
          `.framer-6jWyo .framer-j4ugry, .framer-6jWyo .framer-jnuwbw { bottom: 0px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
        ],
        `framer-6jWyo`
      )),
      (wl.displayName = `Badge`),
      (wl.defaultProps = { height: 38, width: 140 }),
      T(wl, [{ explicitInter: !0, fonts: [] }, ...ll, ...ul], { supportsExplicitInterCodegen: !0 }),
      (Tl = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerPX9hIOIVM`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,
              framerIntrinsicWidth: `140`,
              framerIntrinsicHeight: `38`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export {
  yo as _,
  Oc as a,
  Dc as c,
  Cc as d,
  tc as f,
  Hs as g,
  Vs as h,
  Fc as i,
  xc as l,
  Ws as m,
  El as n,
  wc as o,
  Us as p,
  Pc as r,
  kc as s,
  cl as t,
  Sc as u,
  bo as v,
};
//# sourceMappingURL=shared-lib.DzRxRYkA.mjs.map
