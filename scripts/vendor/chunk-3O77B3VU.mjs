import { f as ot } from "chunk-K7K4JNNE.mjs";
import { c as rt } from "chunk-TK747F2A.mjs";
import { g as tt } from "chunk-RHLSOZ2K.mjs";
import { E as V, F as Xe, G as Je, M as Ze, N as Qe, Q as et } from "chunk-BNJBFYWR.mjs";
import { zb as $e } from "chunk-PJ6FAON2.mjs";
import { a as Y } from "chunk-S76EGIQT.mjs";
import { g as Ye, h as F } from "chunk-FABF35V2.mjs";
import { b as Ke } from "chunk-K7R2FMXE.mjs";
import {
  Aa as v,
  Ac as J,
  Bd as be,
  Cd as ve,
  Da as ye,
  G as $,
  IL as je,
  JL as Ge,
  Jh as Pe,
  Jl as Ne,
  Kh as Te,
  Lh as Se,
  Me as Re,
  Pl as Fe,
  R as q,
  Sh as we,
  TB as Oe,
  Uk as N,
  _K as We,
  aF as ze,
  aL as Ue,
  ac as ge,
  cI as He,
  di as Ve,
  ei as ke,
  fa as fe,
  fi as Le,
  gJ as W,
  hH as Be,
  il as Me,
  mo as Ee,
  oG as _e,
  ou as Ae,
  rg as xe,
  t as ce,
  tg as Ie,
  va as he,
  wa as z,
  wn as De,
  xa as Ce,
  ya as _,
} from "chunk-QIEZ7GMD.mjs";
import { a as X } from "chunk-5WDLMAA7.mjs";
import { i as qe } from "chunk-MUZUMAGY.mjs";
import { Ue as ue } from "chunk-P3ZYSNII.mjs";
import { a as h } from "chunk-JTCAKYEM.mjs";
import { b, f as B, h as H } from "chunk-LA34HORX.mjs";
import { a as w } from "chunk-W774OHJB.mjs";
import { Ba as le, ia as de, sa as pe, ta as me, ua as K, x as se } from "chunk-FCG35XJJ.mjs";
import { b as ae } from "chunk-4JY5UMT2.mjs";
import { e as c } from "chunk-WLHSDIGQ.mjs";
var Xt = "groundNodeWrapper",
  Jt = "d197x122",
  Yt = "dpj2ndz",
  Zt = "d1tskyf",
  Qt = "d74qriz",
  er = "dyirmfz",
  tr = "gh7q592",
  rr = "c880hsu";
var Z = c(h(), 1);
function mr({ tree: e, componentLoader: t, node: r, richTextProps: o, children: n }) {
  let i = r.getComponentPresets(),
    s = {},
    d = rt();
  for (let [m, a] of i) {
    let p = e.get(a);
    if (!p) continue;
    p.linkTo(r.id);
    let l = t.reactComponentForIdentifier(p.componentIdentifier);
    if (((p.cache.isComponentLoaded = !!l), !l)) continue;
    let u = p.getRawControlProps(),
      f = Ke(l, "onlyPresets"),
      C = _e(f, u);
    s[m] = We(
      f,
      C,
      Ue({
        assetResolverWithHash: d,
        variableValueResolver: p.cache,
        getVariableControlByReference: (g) => p.cache.getVariableControlByReference(g),
        getResolvedFetchDataValue: void 0,
        getCanvasTree: () => e,
        componentLoader: t,
      })
    );
  }
  return (0, Z.jsx)(xe, { presets: s, children: (0, Z.jsx)(we, { ...o, children: n }) });
}
function U(e) {
  return !(
    e.hasAttribute("data-debug") ||
    e.hasAttribute("data-frame-border") ||
    e.hasAttribute("data-empty-state") ||
    e.hasAttribute("data-framer-background-image-wrapper")
  );
}
function nt(e) {
  if (!e) return [];
  let t = Array.from(e.children),
    r = t.length;
  if (r === 0) return [];
  let o = t.map((s) => Array.from(s.children).filter(U)),
    n = o.reduce((s, d) => s + d.length, 0),
    i = [];
  for (let s = 0; i.length < n; s++) {
    let d = Pe(r, s),
      m = o[d];
    if (m && m.length > 0) {
      let a = m.shift();
      if (!a) continue;
      i.push(a);
    }
  }
  return i;
}
var Q = c(w(), 1),
  ee = c(h(), 1);
function it(e, t) {
  let o = Q.default.Children.toArray(e).filter(
    (n) => Q.default.isValidElement(n) && (n.props.visible ?? !0)
  );
  if (t) {
    let n = 0;
    for (let {
      index: i,
      attributes: { width: s, height: d, style: m },
    } of t) {
      let a = (0, ee.jsx)(Rt, { width: s, height: d, style: m }, n);
      ((n += 1), o.splice(i, 0, a));
    }
  }
  return o;
}
function Rt({ width: e, height: t, style: r }) {
  return (0, ee.jsx)(v, {
    width: e,
    height: t,
    style: { position: "relative", ...r },
    background: qe.tint,
    opacity: 0.1,
  });
}
var k = c(w(), 1);
var D = c(h(), 1),
  xt = Te(v),
  Lr = k.default.forwardRef(function (t, r) {
    let {
        visible: o,
        placeholders: n,
        children: i,
        _needsMeasure: s,
        isRepeater: d = !1,
        style: m,
        ...a
      } = t,
      p = k.default.useContext(z),
      l = k.default.useRef(null),
      u = r ?? l,
      f = t.node && J(t.node) ? nt : It;
    _(t, u, f);
    let C = it(i, n);
    if ((se() && ((C = Pt(C)), at(m || {})), o === !1)) return null;
    let g = t.node && J(t.node) ? xt : v;
    return p
      ? (0, D.jsx)(q, {
          parentSize: 1,
          children: (0, D.jsx)(g, { ...a, style: m, ref: u, children: C }),
        })
      : (0, D.jsx)(q, {
          parentSize: d ? 1 : 2,
          children: (0, D.jsx)(g, { ...a, style: m, ref: u, children: C }),
        });
  });
function It(e) {
  return e ? Array.from(e.children).filter(U) : [];
}
function at(e) {
  (!("rotate" in e) || e.rotate === 0) && (e.rotate = "0deg");
}
function Pt(e) {
  return e.map((t) => {
    if (!k.default.isValidElement(t)) return t;
    let r = t.props.style || {};
    return (at(r), k.default.cloneElement(t, { style: r }));
  });
}
var st = c(w(), 1);
function Or() {
  return { selectorCache: new Map(), breakpointCache: new Map() };
}
function Tt(e, t, r) {
  if (!t) return [];
  if (!e) return [];
  let o = r.get(e) ?? JSON.parse(e);
  return (r.set(e, o), o[t]);
}
function St(e, t) {
  if (!e) return;
  let r = t.get(e) ?? JSON.parse(e);
  if (Fe(r)) return (t.set(e, r), r);
}
function zr(e, t, r, o) {
  let n = e.componentForIdentifier(t)?.annotations,
    i = n?.framerBreakpoints,
    s = n?.framerDefaultVariant,
    d = n?.framerHitTargets;
  return (0, st.useMemo)(() => {
    if (r === void 0) return;
    let m = St(i, o.breakpointCache),
      a = Ne(m, r) ?? s;
    if (a)
      return {
        activeVariant: a,
        selectors: Tt(d, a, o.selectorCache),
        className: m?.[a]?.canvasClassName,
        minHeight: m?.[a]?.minHeight ?? 1e3,
        rootFontSize: m?.[a]?.rootFontSize ?? Re,
      };
  }, [i, d, s, r, o]);
}
var S = c(w(), 1);
var j = c(w(), 1);
var E = c(h(), 1),
  wt = de("SandboxComponentError");
function Vt(e, t) {
  let r = le(e);
  return pe(r)
    ? tt(r)
      ? !0
      : t === "canvasComponent"
    : !!(me(r) && (r.type === "canvasComponent" || r.type === "screen"));
}
var kt = /\s*(?:at|in) (\S+)/;
function Lt(e, t) {
  let r = [];
  for (let o of e.split(`
`)) {
    if (!o) continue;
    if (o.match(kt)?.[1] === t.name) break;
    r.push(o);
  }
  return r;
}
function dt(e) {
  class t extends j.default.Component {
    logsToSentry = !1;
    lastComponentIdentifier;
    state = { isOverBudget: !1 };
    shouldLogToSentry(o, n) {
      return this.lastComponentIdentifier === o
        ? this.logsToSentry
        : ((this.lastComponentIdentifier = o), (this.logsToSentry = Vt(o, n)));
    }
    scheduledTimer;
    scheduleRerenderDueToBudget() {
      this.scheduledTimer ||
        (this.scheduledTimer = window.setTimeout(() => {
          ((this.scheduledTimer = void 0), this.setState({ isOverBudget: !1 }));
        }, 0));
    }
    static getDerivedStateFromError(o) {
      return { lastError: { error: o } };
    }
    componentDidCatch(o, n) {
      if (o instanceof ce) {
        (this.setState({ isOverBudget: !0 }), this.scheduleRerenderDueToBudget());
        return;
      }
      let i = n.componentStack ? Lt(n.componentStack, this.constructor) : void 0;
      this.setState({ lastError: { error: o, stack: i } });
    }
    renderErrorPlaceholder(o) {
      let n = {};
      return (
        this.props.widthType === 2 && ((n.width = 200), (n.widthType = 0)),
        this.props.heightType === 2 && ((n.height = 200), (n.heightType = 0)),
        (0, E.jsx)(v, {
          ...this.props,
          layoutId: void 0,
          layoutIdKey: void 0,
          ...n,
          background: null,
          children: (0, E.jsx)(ye, { error: o }),
        })
      );
    }
    componentDidUpdate(o, n) {
      (this.props.__rendering?.setLastRenderingError(this.state.lastError?.error ?? null),
        this.state.lastError !== void 0 &&
          n.lastError === this.state.lastError &&
          this.setState({ lastError: void 0 }));
    }
    render() {
      let {
          componentLoader: o,
          __logger: n = wt,
          __externalModuleType: i,
          __rendering: s,
          forwardedRef: d,
          ...m
        } = this.props,
        a = this.props.componentIdentifier,
        { lastError: p } = this.state;
      if (Mt(this.props.children)) {
        let l = o.errorForIdentifier(a);
        if (l) {
          let u = Y(l, void 0);
          return this.renderErrorPlaceholder(u);
        }
      }
      if (this.state.isOverBudget) return this.renderErrorPlaceholder({ message: "", title: "" });
      if (p) {
        let l = o.componentForIdentifier(a),
          u = Y(l, p.error);
        if (this.shouldLogToSentry(a, i)) {
          let f = l ? l.file : "???";
          n.reportErrorOncePerMinute(p.error, { file: f, stack: p.stack });
        }
        return this.renderErrorPlaceholder(u);
      }
      return (0, E.jsx)(e, { ...m, ref: d });
    }
  }
  return j.default.forwardRef((r, o) => (0, E.jsx)(t, { ...r, forwardedRef: o }));
}
function Mt(e) {
  if (!e) return !0;
  if (Array.isArray(e)) {
    let t = j.default.Children.count(e);
    if (t === 0) return !0;
    let [r] = e;
    if (r === null && t === 1) return !0;
  }
  return !1;
}
var te = c(w(), 1),
  mt = c(h(), 1),
  pt = (e) =>
    te.default.forwardRef((t, r) => {
      let { innerRef: o, ...n } = t,
        i = te.default.useRef(null),
        s = o ?? i;
      return (_(n, s, Ce), (0, mt.jsx)(e, { ...t, innerRef: s, ref: r }));
    });
var T = c(h(), 1);
function Nt(e) {
  return e ? e === "framer/Page" || e === "framer/Scroll" : !1;
}
var re = class extends S.default.Component {
    shouldComponentUpdate(t) {
      return !X(this.props, t, !0);
    }
    render() {
      return this.props.children;
    }
  },
  oe = class extends S.default.Component {
    shouldComponentUpdate(t) {
      let r = $.current() !== $.canvas;
      return t._needsMeasure || !X(this.props, t, r);
    }
    render() {
      let {
          children: t,
          innerRef: r,
          forwardedRef: o,
          componentIdentifier: n,
          __withWidth: i,
          isSlotContainer: s,
          ...d
        } = this.props,
        m = this.props.layoutId,
        a = fe(),
        p = !Nt(n),
        { frameProps: l, childProps: u = {} } = Dt(d, {
          layoutId: m,
          forwardedRef: o,
          onCanvas: a,
        });
      (i && (u.width = d.width), window.__checkComponentBudget__?.());
      let f = t;
      return (
        (!a || i) &&
          (f = S.default.Children.map(t, (C) =>
            S.default.isValidElement(C) ? S.default.cloneElement(C, u) : C
          )),
        a
          ? (f = (0, T.jsx)(re, { children: f }))
          : p &&
            (f = (0, T.jsx)(ue, {
              inherit: !1,
              id: m,
              children: (0, T.jsx)(he, { enabled: !1, children: f }),
            })),
        (0, T.jsx)(z.Provider, {
          value: !s,
          children: (0, T.jsx)(v, {
            "data-framer-component-container": !0,
            background: null,
            overflow: "visible",
            ref: r,
            ...l,
            "data-framer-component-type": "ComponentContainer",
            style: { ...l.style, pointerEvents: void 0 },
            children: f,
          }),
        })
      );
    }
  },
  Ft = S.default.forwardRef((e, t) => (0, T.jsx)(oe, { ...e, forwardedRef: t })),
  lo = dt(Ie(pt(Ft)));
function Dt(e, { layoutId: t, forwardedRef: r, onCanvas: o }) {
  if (o) return { frameProps: e };
  let {
    opacity: n,
    children: i,
    left: s,
    right: d,
    top: m,
    bottom: a,
    center: p,
    centerX: l,
    centerY: u,
    aspectRatio: f,
    parentSize: C,
    width: g,
    height: R,
    rotation: x,
    visible: L,
    _constraints: y,
    _initialStyle: I,
    name: P,
    positionSticky: M,
    positionStickyTop: A,
    positionStickyRight: O,
    positionStickyBottom: ft,
    positionStickyLeft: ht,
    style: Ct,
    duplicatedFrom: yt,
    widthType: gt,
    heightType: bt,
    ...vt
  } = e;
  return {
    childProps: Object.assign(vt, { ref: r }),
    frameProps: {
      id: e.id + "-container",
      layoutId: t,
      style: Ct,
      _constraints: y,
      _initialStyle: I,
      left: s,
      right: d,
      top: m,
      bottom: a,
      center: p,
      centerX: l,
      centerY: u,
      aspectRatio: f,
      parentSize: C,
      width: g,
      height: R,
      rotation: x,
      visible: L,
      name: P,
      duplicatedFrom: yt,
      widthType: gt,
      heightType: bt,
      positionSticky: M,
      positionStickyTop: A,
      positionStickyRight: O,
      positionStickyBottom: ft,
      positionStickyLeft: ht,
    },
  };
}
var ne = c(h(), 1),
  lt = "framer-viewport-portal-root";
function fo(e) {
  return e.id.startsWith(lt);
}
function Et(e, t = "none") {
  return `${lt}-${e}-${t}`;
}
var ho = ({ id: e, viewportHeight: t, type: r }) =>
    (0, ne.jsx)("div", {
      id: Et(e, r),
      style: { top: 0, left: 0, right: 0, position: "absolute", height: t, maxHeight: "100%" },
    }),
  At = "framer-portal-root";
function Ot(e, t = "none") {
  return `${At}-${e}-${t}`;
}
var Co = ({ id: e, type: t }) =>
  (0, ne.jsx)("div", {
    id: Ot(e, t),
    style: { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, zIndex: Ae },
  });
var ie = c(h(), 1);
function Po(e) {
  if (!e.__unsafeIsGroundNode()) return;
  let { contentOffsetX: t, contentOffsetY: r } = Ve(e.x, e.y);
  return { left: t, top: r };
}
function zt(e, t, r, o, n, i, s) {
  let d = s ?? e.getProps(t, r),
    m = e.resolveValue("visible", r) !== !1;
  if ((o.setVisible(n, m), ve(e)))
    return (0, ie.jsx)(Le, {
      ...d,
      isRootVectorNode: i,
      children: e.children.map((a) => {
        let p = V(n, a.id);
        return zt(a, t, r, o, p, !1, void 0);
      }),
    });
  if (Me(e)) {
    if (be(e))
      for (let a of e.walk()) {
        if (a === e) continue;
        let p = V(n, a.id);
        o.setVisible(p, a.resolveValue("visible", r) !== !1);
      }
    return (0, ie.jsx)(ke, { ...d, isRootVectorNode: i });
  }
  throw Error(`WARNING: Unknown vector node: ${e.__class}`);
}
function _t({
  tree: e,
  node: t,
  renderId: r,
  componentLoader: o,
  componentLoaderHash: n,
  sandboxRepeaterData: i,
  combinedValueMap: s,
  combinedControlMap: d,
  trackLoaded: m,
  maxItems: a,
}) {
  let p = t.repeatArray,
    l = p.providerId;
  ae(l, "Variable must have providerId");
  let u = ze(t, l);
  if (!u) {
    let { controlMap: P } = W(void 0);
    return (i.set(r, void 0, P), null);
  }
  let f = u.getProvidedControlMap(e, t, o, n),
    C = d?.get(l)?.get(p.id),
    g = f?.get(p.id),
    R = C ?? g,
    { controlMap: x } = W(R);
  m?.(r);
  let L = u.getProvidedValueMap(e, t, o, i, n),
    y = s?.get(l)?.get(p.id) ?? L?.get(p.id);
  return !H(y) || !y.every(B)
    ? (i.set(r, void 0, x), null)
    : (i.set(r, y, x),
      y.length === 0
        ? null
        : {
            items: (a === void 0 ? y : y.slice(0, a)).map((P, M) => {
              let A = b(P.id) ? P.id : M,
                O = Xe(r, t.id, A, M);
              return { id: A, index: M, value: P, parentRenderId: O, renderId: V(O, t.id) };
            }),
            arrayControl: R,
            itemCount: y.length,
          });
}
function Fo({
  tree: e,
  node: t,
  itemValue: r,
  itemIndex: o,
  arrayControl: n,
  itemCount: i,
  combinedValueMap: s,
  combinedControlMap: d,
}) {
  let { controlMap: m } = W(n),
    a = new Map(d);
  a.set(t.getPrimaryId(), m);
  let p = new Map(s),
    l = ot(e, m, r, o, i);
  return (p.set(t.getPrimaryId(), l), { combinedValueMap: p, combinedControlMap: a });
}
function Bt(e, t) {
  return `${e}-${t}`;
}
function Do({
  tree: e,
  componentNodeId: t,
  componentRenderId: r,
  slotKey: o,
  slotItems: n,
  maxItemCount: i,
  componentLoader: s,
  componentLoaderHash: d,
  sandboxRepeaterData: m,
  combinedValueMap: a,
  combinedControlMap: p,
  trackLoaded: l,
}) {
  let u = [];
  for (let f of n) {
    let C = i === void 0 ? void 0 : i - u.length,
      g = Je(r, t, o, f.key),
      R = f.node;
    if (!De(R)) {
      if (C === 0) continue;
      u.push({
        key: f.key,
        node: R,
        parentRenderId: g,
        renderId: g,
        repeatItem: void 0,
        repeatArrayControl: void 0,
        repeatItemCount: void 0,
      });
      continue;
    }
    let x = R,
      L = V(g, x.id),
      y = _t({
        tree: e,
        node: x,
        renderId: L,
        componentLoader: s,
        componentLoaderHash: d,
        sandboxRepeaterData: m,
        combinedValueMap: a,
        combinedControlMap: p,
        trackLoaded: l,
        maxItems: C,
      });
    if (y)
      for (let I of y.items)
        u.push({
          key: Bt(f.key, I.id),
          node: x,
          parentRenderId: I.parentRenderId,
          renderId: I.renderId,
          repeatItem: I,
          repeatArrayControl: y.arrayControl,
          repeatItemCount: y.itemCount,
        });
  }
  return u;
}
function Ht(e) {
  let t = e.cache;
  if (
    t.lastUpdate !== e.update &&
    ((t.lastUpdate = e.update), (t.calculatedPaths = null), e.children)
  )
    for (let r of e.children) Ht(r);
}
var ut = c(h(), 1),
  ct = new WeakMap();
function Wt(e, t) {
  let r = ct.get(e);
  if (r !== void 0) return r;
  let o = $e(e, t.getProseMirrorSchema());
  return (ct.set(e, o), o);
}
function Xo(e, t, r) {
  if (e.htmlContent) {
    let i = e.resolveValue("htmlContent", t);
    return b(i) ? F(i) : N(i) ? Ye(i) : i;
  }
  let o = e.html,
    n = Ee(r, e.htmlLocalized);
  if (n) {
    let i = N(o) ? Wt(o, e) : o,
      s = Qe(i),
      d = Ze(s, n, i);
    d && (o = et(i, d));
  }
  return F(o);
}
function Jo(e, t, r) {
  let o = e.textContent;
  if (!ge(o)) return;
  let n = o.transforms[0],
    i = He(o, t, e.cache, r);
  if (b(i))
    return (0, ut.jsx)(Se, {
      date: i,
      dateFormat: n.format,
      dateStyle: n.dateStyle,
      dateCapitalize: n.capitalize,
      locale: n.locale,
    });
}
function Yo(e, t) {
  if (!t?.id || !e.textFitViewBoxSize || !e.textFitViewBoxSizeLocalized) return;
  let r = e.textFitViewBoxSizeLocalized[t.id];
  if (r) return Oe(r);
}
function G(e, t, r, o) {
  let n = t.getControlPropSourceIdentifier();
  if (!n) return;
  let i = r.getPropertyControlsForIdentifier(n);
  if (!i) return;
  let s = je(r, n);
  for (let d in i) {
    let m = i[d];
    if (!Be(m)) continue;
    let a = s ? Ge(s, d) : d,
      p = e[a],
      l = jt(p, m.control.controls, o);
    l !== p && (e[a] = l);
  }
}
function jt(e, t, r) {
  if (!H(e)) return e;
  let o;
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    if (!B(i)) continue;
    let s;
    for (let d in t) {
      let m = t[d];
      if (!m) continue;
      let a = i[d],
        p = r(m, a);
      p !== a && ((s ??= { ...i }), (s[d] = p));
    }
    s && ((o ??= [...e]), (o[n] = s));
  }
  return o ?? e;
}
function nn(e, t, r, o) {
  G(e, t, r, (n, i) => (n.type === "vectorsetitem" && b(i) && K(i) ? o(i) : i));
}
function an(e, t, r) {
  let o = [];
  return (G(e, t, r, (n, i) => (n.type === "vectorsetitem" && b(i) && K(i) && o.push(i), i)), o);
}
function un(e, t, r) {
  G(e, t, r.componentLoader, (o, n) => (o.type === "richtext" ? Gt(n, r) : n));
}
function Gt(e, t) {
  return !b(e) && !N(e)
    ? e
    : F(
        e,
        {
          componentLoader: t.componentLoader,
          resolveVectorSetItem: t.resolveVectorSetItem,
          tree: t.tree,
        },
        t.cacheKey
      );
}
export {
  mr as a,
  nt as b,
  Rt as c,
  Lr as d,
  It as e,
  Or as f,
  zr as g,
  dt as h,
  lo as i,
  fo as j,
  Et as k,
  ho as l,
  Ot as m,
  Co as n,
  Po as o,
  zt as p,
  _t as q,
  Fo as r,
  Do as s,
  Ht as t,
  Xo as u,
  Jo as v,
  Yo as w,
  nn as x,
  an as y,
  un as z,
  Gt as A,
  Xt as B,
  Jt as C,
  Yt as D,
  Zt as E,
  Qt as F,
  er as G,
  tr as H,
  rr as I,
};
//# sourceMappingURL=chunk-3O77B3VU.mjs.map
