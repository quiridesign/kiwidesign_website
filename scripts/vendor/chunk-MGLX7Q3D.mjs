import { f as tt } from "chunk-QT4K7WGQ.mjs";
import { d as et } from "chunk-XUP3VNZ4.mjs";
import { z as Qe } from "chunk-XLD7EJQD.mjs";
import { i as V, j as $e, k as qe, q as Je, r as Ze, u as Ye } from "chunk-RKH4M4Z3.mjs";
import { a as Z } from "chunk-A6YKEKT4.mjs";
import { g as Xe, h as N } from "chunk-NVCE7CKZ.mjs";
import { b as Ge } from "chunk-K7R2FMXE.mjs";
import {
  Aa as v,
  Bx as W,
  Da as ye,
  Dc as J,
  Ed as be,
  Fd as ve,
  G as $,
  Gy as De,
  Hl as Me,
  KE as Oe,
  NK as We,
  Nl as Ne,
  Og as xe,
  PK as He,
  Pg as Pe,
  Qg as Se,
  R as q,
  RH as Be,
  VG as _e,
  VI as H,
  Xg as Te,
  YF as ze,
  dc as ge,
  fa as fe,
  gl as Le,
  hh as we,
  ih as Ve,
  lo as Ee,
  mB as Ae,
  nh as ke,
  sf as Re,
  t as ce,
  uf as Ie,
  vL as Ue,
  va as Ce,
  vn as Fe,
  wL as je,
  wa as O,
  xa as he,
  ya as z,
} from "chunk-IXMBKHRL.mjs";
import { a as X } from "chunk-5WDLMAA7.mjs";
import { i as Ke } from "chunk-UCEQWTGT.mjs";
import { Ue as ue } from "chunk-P3ZYSNII.mjs";
import { a as C } from "chunk-JTCAKYEM.mjs";
import { b, f as _, h as B } from "chunk-LA34HORX.mjs";
import { a as w } from "chunk-W774OHJB.mjs";
import { Ba as me, ia as se, sa as pe, ta as le, ua as K, x as de } from "chunk-FVJDO2XD.mjs";
import { b as ae } from "chunk-4JY5UMT2.mjs";
import { e as c } from "chunk-WLHSDIGQ.mjs";
var Gt = "groundNodeWrapper",
  Kt = "d197x122",
  $t = "dpj2ndz",
  qt = "d1tskyf",
  Xt = "d74qriz",
  Jt = "dyirmfz",
  Zt = "gh7q592",
  Yt = "c880hsu";
var Y = c(C(), 1);
function ar({ tree: e, componentLoader: t, node: r, richTextProps: o, children: n }) {
  let i = r.getComponentPresets(),
    d = {},
    l = et();
  for (let [p, a] of i) {
    let s = e.get(a);
    if (!s) continue;
    s.linkTo(r.id);
    let m = t.reactComponentForIdentifier(s.componentIdentifier);
    if (((s.cache.isComponentLoaded = !!m), !m)) continue;
    let u = s.getRawControlProps(),
      f = Ge(m, "onlyPresets"),
      h = ze(f, u);
    d[p] = We(
      f,
      h,
      He({
        assetResolverWithHash: l,
        variableValueResolver: s.cache,
        getVariableControlByReference: (g) => s.cache.getVariableControlByReference(g),
        getResolvedFetchDataValue: void 0,
        getCanvasTree: () => e,
        componentLoader: t,
      })
    );
  }
  return (0, Y.jsx)(Re, { presets: d, children: (0, Y.jsx)(Te, { ...o, children: n }) });
}
function U(e) {
  return !(
    e.hasAttribute("data-debug") ||
    e.hasAttribute("data-frame-border") ||
    e.hasAttribute("data-empty-state") ||
    e.hasAttribute("data-framer-background-image-wrapper")
  );
}
function rt(e) {
  if (!e) return [];
  let t = Array.from(e.children),
    r = t.length;
  if (r === 0) return [];
  let o = t.map((d) => Array.from(d.children).filter(U)),
    n = o.reduce((d, l) => d + l.length, 0),
    i = [];
  for (let d = 0; i.length < n; d++) {
    let l = xe(r, d),
      p = o[l];
    if (p && p.length > 0) {
      let a = p.shift();
      if (!a) continue;
      i.push(a);
    }
  }
  return i;
}
var Q = c(w(), 1),
  ee = c(C(), 1);
function ot(e, t) {
  let o = Q.default.Children.toArray(e).filter(
    (n) => Q.default.isValidElement(n) && (n.props.visible ?? !0)
  );
  if (t) {
    let n = 0;
    for (let {
      index: i,
      attributes: { width: d, height: l, style: p },
    } of t) {
      let a = (0, ee.jsx)(gt, { width: d, height: l, style: p }, n);
      ((n += 1), o.splice(i, 0, a));
    }
  }
  return o;
}
function gt({ width: e, height: t, style: r }) {
  return (0, ee.jsx)(v, {
    width: e,
    height: t,
    style: { position: "relative", ...r },
    background: Ke.tint,
    opacity: 0.1,
  });
}
var k = c(w(), 1);
var F = c(C(), 1),
  bt = Pe(v),
  Tr = k.default.forwardRef(function (t, r) {
    let {
        visible: o,
        placeholders: n,
        children: i,
        _needsMeasure: d,
        isRepeater: l = !1,
        style: p,
        ...a
      } = t,
      s = k.default.useContext(O),
      m = k.default.useRef(null),
      u = r ?? m,
      f = t.node && J(t.node) ? rt : vt;
    z(t, u, f);
    let h = ot(i, n);
    if ((de() && ((h = Rt(h)), nt(p || {})), o === !1)) return null;
    let g = t.node && J(t.node) ? bt : v;
    return s
      ? (0, F.jsx)(q, {
          parentSize: 1,
          children: (0, F.jsx)(g, { ...a, style: p, ref: u, children: h }),
        })
      : (0, F.jsx)(q, {
          parentSize: l ? 1 : 2,
          children: (0, F.jsx)(g, { ...a, style: p, ref: u, children: h }),
        });
  });
function vt(e) {
  return e ? Array.from(e.children).filter(U) : [];
}
function nt(e) {
  (!("rotate" in e) || e.rotate === 0) && (e.rotate = "0deg");
}
function Rt(e) {
  return e.map((t) => {
    if (!k.default.isValidElement(t)) return t;
    let r = t.props.style || {};
    return (nt(r), k.default.cloneElement(t, { style: r }));
  });
}
var it = c(w(), 1);
function Fr() {
  return { selectorCache: new Map(), breakpointCache: new Map() };
}
function It(e, t, r) {
  if (!t) return [];
  if (!e) return [];
  let o = r.get(e) ?? JSON.parse(e);
  return (r.set(e, o), o[t]);
}
function xt(e, t) {
  if (!e) return;
  let r = t.get(e) ?? JSON.parse(e);
  if (Ne(r)) return (t.set(e, r), r);
}
function Er(e, t, r, o) {
  let n = e.componentForIdentifier(t)?.annotations,
    i = n?.framerBreakpoints,
    d = n?.framerDefaultVariant,
    l = n?.framerHitTargets;
  return (0, it.useMemo)(() => {
    if (r === void 0) return;
    let p = xt(i, o.breakpointCache),
      a = Me(p, r) ?? d;
    if (a)
      return {
        activeVariant: a,
        selectors: It(l, a, o.selectorCache),
        className: p?.[a]?.canvasClassName,
        minHeight: p?.[a]?.minHeight ?? 1e3,
        rootFontSize: p?.[a]?.rootFontSize ?? ke,
      };
  }, [i, l, d, r, o]);
}
var T = c(w(), 1);
var j = c(w(), 1);
var E = c(C(), 1),
  Pt = se("SandboxComponentError");
function St(e, t) {
  let r = me(e);
  return pe(r)
    ? Qe(r)
      ? !0
      : t === "canvasComponent"
    : !!(le(r) && (r.type === "canvasComponent" || r.type === "screen"));
}
var Tt = /\s*(?:at|in) (\S+)/;
function wt(e, t) {
  let r = [];
  for (let o of e.split(`
`)) {
    if (!o) continue;
    if (o.match(Tt)?.[1] === t.name) break;
    r.push(o);
  }
  return r;
}
function at(e) {
  class t extends j.default.Component {
    logsToSentry = !1;
    lastComponentIdentifier;
    state = { isOverBudget: !1 };
    shouldLogToSentry(o, n) {
      return this.lastComponentIdentifier === o
        ? this.logsToSentry
        : ((this.lastComponentIdentifier = o), (this.logsToSentry = St(o, n)));
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
      let i = n.componentStack ? wt(n.componentStack, this.constructor) : void 0;
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
          __logger: n = Pt,
          __externalModuleType: i,
          __rendering: d,
          forwardedRef: l,
          ...p
        } = this.props,
        a = this.props.componentIdentifier,
        { lastError: s } = this.state;
      if (Vt(this.props.children)) {
        let m = o.errorForIdentifier(a);
        if (m) {
          let u = Z(m, void 0);
          return this.renderErrorPlaceholder(u);
        }
      }
      if (this.state.isOverBudget) return this.renderErrorPlaceholder({ message: "", title: "" });
      if (s) {
        let m = o.componentForIdentifier(a),
          u = Z(m, s.error);
        if (this.shouldLogToSentry(a, i)) {
          let f = m ? m.file : "???";
          n.reportErrorOncePerMinute(s.error, { file: f, stack: s.stack });
        }
        return this.renderErrorPlaceholder(u);
      }
      return (0, E.jsx)(e, { ...p, ref: l });
    }
  }
  return j.default.forwardRef((r, o) => (0, E.jsx)(t, { ...r, forwardedRef: o }));
}
function Vt(e) {
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
  st = c(C(), 1),
  dt = (e) =>
    te.default.forwardRef((t, r) => {
      let { innerRef: o, ...n } = t,
        i = te.default.useRef(null),
        d = o ?? i;
      return (z(n, d, he), (0, st.jsx)(e, { ...t, innerRef: d, ref: r }));
    });
var S = c(C(), 1);
function kt(e) {
  return e ? e === "framer/Page" || e === "framer/Scroll" : !1;
}
var re = class extends T.default.Component {
    shouldComponentUpdate(t) {
      return !X(this.props, t, !0);
    }
    render() {
      return this.props.children;
    }
  },
  oe = class extends T.default.Component {
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
          isSlotContainer: d,
          ...l
        } = this.props,
        p = this.props.layoutId,
        a = fe(),
        s = !kt(n),
        { frameProps: m, childProps: u = {} } = Mt(l, {
          layoutId: p,
          forwardedRef: o,
          onCanvas: a,
        });
      (i && (u.width = l.width), window.__checkComponentBudget__?.());
      let f = t;
      return (
        (!a || i) &&
          (f = T.default.Children.map(t, (h) =>
            T.default.isValidElement(h) ? T.default.cloneElement(h, u) : h
          )),
        a
          ? (f = (0, S.jsx)(re, { children: f }))
          : s &&
            (f = (0, S.jsx)(ue, {
              inherit: !1,
              id: p,
              children: (0, S.jsx)(Ce, { enabled: !1, children: f }),
            })),
        (0, S.jsx)(O.Provider, {
          value: !d,
          children: (0, S.jsx)(v, {
            "data-framer-component-container": !0,
            background: null,
            overflow: "visible",
            ref: r,
            ...m,
            "data-framer-component-type": "ComponentContainer",
            style: { ...m.style, pointerEvents: void 0 },
            children: f,
          }),
        })
      );
    }
  },
  Lt = T.default.forwardRef((e, t) => (0, S.jsx)(oe, { ...e, forwardedRef: t })),
  ao = at(Ie(dt(Lt)));
function Mt(e, { layoutId: t, forwardedRef: r, onCanvas: o }) {
  if (o) return { frameProps: e };
  let {
    opacity: n,
    children: i,
    left: d,
    right: l,
    top: p,
    bottom: a,
    center: s,
    centerX: m,
    centerY: u,
    aspectRatio: f,
    parentSize: h,
    width: g,
    height: R,
    rotation: I,
    visible: L,
    _constraints: y,
    _initialStyle: x,
    name: P,
    positionSticky: M,
    positionStickyTop: D,
    positionStickyRight: A,
    positionStickyBottom: mt,
    positionStickyLeft: ct,
    style: ut,
    duplicatedFrom: ft,
    widthType: Ct,
    heightType: ht,
    ...yt
  } = e;
  return {
    childProps: Object.assign(yt, { ref: r }),
    frameProps: {
      id: e.id + "-container",
      layoutId: t,
      style: ut,
      _constraints: y,
      _initialStyle: x,
      left: d,
      right: l,
      top: p,
      bottom: a,
      center: s,
      centerX: m,
      centerY: u,
      aspectRatio: f,
      parentSize: h,
      width: g,
      height: R,
      rotation: I,
      visible: L,
      name: P,
      duplicatedFrom: ft,
      widthType: Ct,
      heightType: ht,
      positionSticky: M,
      positionStickyTop: D,
      positionStickyRight: A,
      positionStickyBottom: mt,
      positionStickyLeft: ct,
    },
  };
}
var ne = c(C(), 1),
  pt = "framer-viewport-portal-root";
function lo(e) {
  return e.id.startsWith(pt);
}
function Nt(e, t = "none") {
  return `${pt}-${e}-${t}`;
}
var mo = ({ id: e, viewportHeight: t, type: r }) =>
    (0, ne.jsx)("div", {
      id: Nt(e, r),
      style: { top: 0, left: 0, right: 0, position: "absolute", height: t, maxHeight: "100%" },
    }),
  Ft = "framer-portal-root";
function Et(e, t = "none") {
  return `${Ft}-${e}-${t}`;
}
var co = ({ id: e, type: t }) =>
  (0, ne.jsx)("div", {
    id: Et(e, t),
    style: { position: "fixed", width: "100%", height: "100%", top: 0, left: 0, zIndex: De },
  });
var ie = c(C(), 1);
function Dt(e, t, r, o, n, i, d) {
  let l = d ?? e.getProps(t, r),
    p = e.resolveValue("visible", r) !== !1;
  if ((o.setVisible(n, p), ve(e)))
    return (0, ie.jsx)(Ve, {
      ...l,
      isRootVectorNode: i,
      children: e.children.map((a) => {
        let s = V(n, a.id);
        return Dt(a, t, r, o, s, !1, void 0);
      }),
    });
  if (Le(e)) {
    if (be(e))
      for (let a of e.walk()) {
        if (a === e) continue;
        let s = V(n, a.id);
        o.setVisible(s, a.resolveValue("visible", r) !== !1);
      }
    return (0, ie.jsx)(we, { ...l, isRootVectorNode: i });
  }
  throw Error(`WARNING: Unknown vector node: ${e.__class}`);
}
function At({
  tree: e,
  node: t,
  renderId: r,
  componentLoader: o,
  componentLoaderHash: n,
  sandboxRepeaterData: i,
  combinedValueMap: d,
  combinedControlMap: l,
  trackLoaded: p,
  maxItems: a,
}) {
  let s = t.repeatArray,
    m = s.providerId;
  ae(m, "Variable must have providerId");
  let u = Oe(t, m);
  if (!u) {
    let { controlMap: P } = H(void 0);
    return (i.set(r, void 0, P), null);
  }
  let f = u.getProvidedControlMap(e, t, o, n),
    h = l?.get(m)?.get(s.id),
    g = f?.get(s.id),
    R = h ?? g,
    { controlMap: I } = H(R);
  p?.(r);
  let L = u.getProvidedValueMap(e, t, o, i, n),
    y = d?.get(m)?.get(s.id) ?? L?.get(s.id);
  return !B(y) || !y.every(_)
    ? (i.set(r, void 0, I), null)
    : (i.set(r, y, I),
      y.length === 0
        ? null
        : {
            items: (a === void 0 ? y : y.slice(0, a)).map((P, M) => {
              let D = b(P.id) ? P.id : M,
                A = $e(r, t.id, D, M);
              return { id: D, index: M, value: P, parentRenderId: A, renderId: V(A, t.id) };
            }),
            arrayControl: R,
            itemCount: y.length,
          });
}
function wo({
  tree: e,
  node: t,
  itemValue: r,
  itemIndex: o,
  arrayControl: n,
  itemCount: i,
  combinedValueMap: d,
  combinedControlMap: l,
}) {
  let { controlMap: p } = H(n),
    a = new Map(l);
  a.set(t.getPrimaryId(), p);
  let s = new Map(d),
    m = tt(e, p, r, o, i);
  return (s.set(t.getPrimaryId(), m), { combinedValueMap: s, combinedControlMap: a });
}
function Ot(e, t) {
  return `${e}-${t}`;
}
function Vo({
  tree: e,
  componentNodeId: t,
  componentRenderId: r,
  slotKey: o,
  slotItems: n,
  maxItemCount: i,
  componentLoader: d,
  componentLoaderHash: l,
  sandboxRepeaterData: p,
  combinedValueMap: a,
  combinedControlMap: s,
  trackLoaded: m,
}) {
  let u = [];
  for (let f of n) {
    let h = i === void 0 ? void 0 : i - u.length,
      g = qe(r, t, o, f.key),
      R = f.node;
    if (!Fe(R)) {
      if (h === 0) continue;
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
    let I = R,
      L = V(g, I.id),
      y = At({
        tree: e,
        node: I,
        renderId: L,
        componentLoader: d,
        componentLoaderHash: l,
        sandboxRepeaterData: p,
        combinedValueMap: a,
        combinedControlMap: s,
        trackLoaded: m,
        maxItems: h,
      });
    if (y)
      for (let x of y.items)
        u.push({
          key: Ot(f.key, x.id),
          node: I,
          parentRenderId: x.parentRenderId,
          renderId: x.renderId,
          repeatItem: x,
          repeatArrayControl: y.arrayControl,
          repeatItemCount: y.itemCount,
        });
  }
  return u;
}
function zt(e) {
  let t = e.cache;
  if (
    t.lastUpdate !== e.update &&
    ((t.lastUpdate = e.update), (t.calculatedPaths = null), e.children)
  )
    for (let r of e.children) zt(r);
}
var lt = c(C(), 1);
function Ho(e, t, r) {
  if (e.htmlContent) {
    let i = e.resolveValue("htmlContent", t);
    return b(i) ? N(i) : W(i) ? Xe(i) : i;
  }
  let o = e.html,
    n = Ee(r, e.htmlLocalized);
  if (n) {
    let i = Ze(o),
      d = Je(i, n, o);
    d && (o = Ye(e.html, d));
  }
  return N(o);
}
function Uo(e, t, r) {
  let o = e.textContent;
  if (!ge(o)) return;
  let n = o.transforms[0],
    i = Be(o, t, e.cache, r);
  if (b(i))
    return (0, lt.jsx)(Se, {
      date: i,
      dateFormat: n.format,
      dateStyle: n.dateStyle,
      dateCapitalize: n.capitalize,
      locale: n.locale,
    });
}
function jo(e, t) {
  if (!t?.id || !e.textFitViewBoxSize || !e.textFitViewBoxSizeLocalized) return;
  let r = e.textFitViewBoxSizeLocalized[t.id];
  if (r) return Ae(r);
}
function G(e, t, r, o) {
  let n = t.getControlPropSourceIdentifier();
  if (!n) return;
  let i = r.getPropertyControlsForIdentifier(n);
  if (!i) return;
  let d = Ue(r, n);
  for (let l in i) {
    let p = i[l];
    if (!_e(p)) continue;
    let a = d ? je(d, l) : l,
      s = e[a],
      m = Bt(s, p.control.controls, o);
    m !== s && (e[a] = m);
  }
}
function Bt(e, t, r) {
  if (!B(e)) return e;
  let o;
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    if (!_(i)) continue;
    let d;
    for (let l in t) {
      let p = t[l];
      if (!p) continue;
      let a = i[l],
        s = r(p, a);
      s !== a && ((d ??= { ...i }), (d[l] = s));
    }
    d && ((o ??= [...e]), (o[n] = d));
  }
  return o ?? e;
}
function Zo(e, t, r, o) {
  G(e, t, r, (n, i) => (n.type === "vectorsetitem" && b(i) && K(i) ? o(i) : i));
}
function Yo(e, t, r) {
  let o = [];
  return (G(e, t, r, (n, i) => (n.type === "vectorsetitem" && b(i) && K(i) && o.push(i), i)), o);
}
function an(e, t, r) {
  G(e, t, r.componentLoader, (o, n) => (o.type === "richtext" ? Wt(n, r) : n));
}
function Wt(e, t) {
  return !b(e) && !W(e)
    ? e
    : N(
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
  ar as a,
  rt as b,
  gt as c,
  Tr as d,
  vt as e,
  Fr as f,
  Er as g,
  at as h,
  ao as i,
  lo as j,
  Nt as k,
  mo as l,
  Et as m,
  co as n,
  Dt as o,
  At as p,
  wo as q,
  Vo as r,
  zt as s,
  Ho as t,
  Uo as u,
  jo as v,
  Zo as w,
  Yo as x,
  an as y,
  Wt as z,
  Gt as A,
  Kt as B,
  $t as C,
  qt as D,
  Xt as E,
  Jt as F,
  Zt as G,
  Yt as H,
};
//# sourceMappingURL=chunk-MGLX7Q3D.mjs.map
