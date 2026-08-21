import { a as V } from "chunk-UZNETSBG.mjs";
import { a as U } from "chunk-EQBCTBZ3.mjs";
import { b as h, h as N, m as S, p as F } from "chunk-LA34HORX.mjs";
import { a as M } from "chunk-W774OHJB.mjs";
import { Qa as f, Z as b, ab as w } from "chunk-FCG35XJJ.mjs";
import { b as g } from "chunk-4JY5UMT2.mjs";
import { e as B } from "chunk-WLHSDIGQ.mjs";
var W = {
  demoAnalytics: "off",
  disableAIAgentMessageRedaction: "off",
  disableLazyModuleLoading: "off",
  disablePartialDocumentLoading: "off",
  disablePartialTreeInSandbox: "off",
  editableLegacyProjects: "off",
  moduleTools: "off",
  openPrimaryForBuiltInModules: "on",
  sandboxExportDebugging: "off",
  sandboxNodeDebugging: "off",
  showAdditionalAutosaves: "off",
  showDOMLayoutDebuggingPanel: "off",
  showErrorForOutdatedBuiltInModules: "on",
  showImportMap: "off",
  showShaderTools: "off",
  showDebugBar: "off",
  showStatusBar: "on",
  suppressDocumentLoading: "off",
  suppressUIMount: "off",
  userIsViewer: "off",
};
function z(n, e) {
  let t = new Set(n);
  return (t.add("on"), t.add("off"), { variants: [...t], value: e });
}
var O = {};
function H(n) {
  return O[n];
}
function G(n) {
  let e = {};
  for (let t in n) {
    let o = n[t];
    if (typeof o == "object") ((e[t] = o.value), (O[t] = o.variants));
    else if (typeof o == "string") e[t] = o;
    else throw Error(`Invalid experiment value: ${o}`);
  }
  return e;
}
var x = G({
    addViewBox: "off",
    advancedAgentControls: "off",
    "agent-2026-w25": "on",
    "agent-2026-w26": "on",
    "agent-2026-w28": "on",
    "agent-2026-w29": "on",
    "agent-2026-w30": "on",
    "agent-2026-w31": "off",
    "agent-2026-w32": "off",
    agentCompactionLuna: "off",
    agentContextRow: "on",
    agentDefaultModelTerra: "on",
    agentEffortSelect: "on",
    agentFramerConvertTriggers: "off",
    agentGeneratedShaders: "off",
    agenticAnalyticsV2: "off",
    agentIntegrations: "off",
    agentModelSpecificChecklist: "on",
    agentNodeAttributeChangeTracking: "off",
    agentRating: "off",
    agentScriptComponentLookup: "off",
    agentSkills: "off",
    agentSkipDesignPlan: "off",
    agentStreamingEvaluation: "off",
    agentTerraLunaViaOpenRouter: "on",
    agentTransforms: "off",
    agentTsdocApi: "off",
    agentUseAnthropicMessagesAPI: "off",
    agentUseOpenAIResponsesAPI: "off",
    aiCreditsHideBillingPeriodToggle: "on",
    aiCreditsOverlay: "on",
    aiCreditsTopUps: "on",
    aiCreditsV2: "on",
    alignLocalizationAiModelPicker: "off",
    analyticsFunnelGroupBy: "off",
    appShortcutsWhileEditingText: "off",
    ariaProperties: "off",
    arrays: "off",
    automations: "off",
    betterStackGridItemMoving: "on",
    bryelTracing: "off",
    cmsDatabase: "off",
    cmsTablePlaceholderRow: "on",
    codeLinkPlugin: "off",
    collectionLocalModuleImportMapEntries: "off",
    compareFastTreeLibrary: "off",
    componentSlotsAreChildNodes: "off",
    contentEditor: "on",
    convertToOutline: "on",
    crdtAgentChangesetRows: "off",
    crdtInheritBranchValues: "on",
    crdtModuleControls: "off",
    crdtTreeEditUndo: "off",
    crdtWorker: "off",
    dashboardSettingsUpdate: "off",
    debugEditWhileLoadingRuntimeChecks: "off",
    deferNonVisibleModuleEvaluation: "off",
    disableLoadingIndicatorTimeout: "off",
    editorBarDisableFrameAncestorsSecurity: "off",
    effectsInDesignPages: "off",
    enableCrdtForNewProjects: "off",
    externalVectorIcons: "off",
    F1Keyboard: "on",
    F1KeyboardCreditsWidget: "off",
    fastLocalization: "off",
    fixedSizeImageSrcset: "off",
    gptCacheMiss: "on",
    greyFrameDefault: "off",
    gridBentoFit: "off",
    hydrationAutobahn: "on",
    importMapPruning: "off",
    jsonRichTextStorage: "off",
    killErrorRecovery: "off",
    layoutMenuStack: "on",
    layoutScroll: "off",
    lazySmartComponentLocales: "off",
    localCache: z(["syncWorker"], "on"),
    localizationCacheWarmup: "off",
    localizationModelUpdate: "off",
    localizationProgressSummaries: "off",
    localizationUiUpdate: "off",
    localizedLinks: "off",
    locationControl: "off",
    locationTriggerConditions: "off",
    mentionsInComments: "on",
    motionDivToDiv: "off",
    onDemandSSG: "on",
    onPageEnumVariableOnComponentInstanceEditTool: "on",
    onPageLocalizationSupport: "on",
    onPageLockedLayers: "on",
    onPageMoveTool: "on",
    onPageQuickAddRepeaterItems: "on",
    overridesWithPropertyControls: "off",
    pageLinkReferenceCheck: "on",
    paneEdgeDoubleClickReset: "off",
    passkeys: "off",
    pathRadiusSmoothing: "off",
    pinnedProjects: "off",
    preventVariableDeletion: "on",
    previewSharing: "off",
    prioritizedInitialModuleEvaluation: "on",
    prioritizedModuleEvaluation: "on",
    privateRouterReplaceState: "on",
    publishingRecoveryProgress: "off",
    publishStaleModuleErrors: "off",
    raindropSelfDiagnostics: "on",
    raindropTraceAgentCommands: "off",
    rebaseBranches: "off",
    redirectLondonTimezone: "on",
    removeProjectFontUploads: "on",
    renameLayers: "on",
    richTextBlockSelection: "on",
    richTextVideoModule: "on",
    scrollRestoration: "on",
    serverTimingRoute: "on",
    showCanonicalUrlAsDefault: "off",
    slabLatestMap: "off",
    smartComponentResolvesOwnDefaults: "off",
    squircle: "on",
    subscriptionNotInOrderDismiss: "on",
    synchronousNavigationOnDesktop: "off",
    transientLocalModuleTreeData: "off",
    unifiedStackActions: "off",
    verifyTreeOnCommit: "off",
    visibilityFromSandbox: "off",
    yieldOnTap: "off",
  }),
  K = ["deferNonVisibleModuleEvaluation", "jsonRichTextStorage"];
function $(n) {
  return K.includes(n);
}
var v = {
    agentSkipDesignPlan: "on",
    appShortcutsWhileEditingText: "on",
    arrays: "on",
    codeLinkPlugin: "on",
    debugEditWhileLoadingRuntimeChecks: "on",
    enableCrdtForNewProjects: "on",
    externalVectorIcons: "on",
    killErrorRecovery: "on",
    layoutScroll: "on",
    pinnedProjects: "on",
    smartComponentResolvesOwnDefaults: "on",
    unifiedStackActions: "on",
  },
  E = {
    addViewBox: "on",
    "agent-2026-w31": "on",
    "agent-2026-w32": "on",
    agentIntegrations: "on",
    agentScriptComponentLookup: "on",
    agentSkills: "on",
    agentStreamingEvaluation: "on",
    agentTransforms: "on",
    agentTsdocApi: "on",
    alignLocalizationAiModelPicker: "on",
    automations: "on",
    bryelTracing: "on",
    crdtAgentChangesetRows: "on",
    crdtModuleControls: "on",
    crdtTreeEditUndo: "on",
    deferNonVisibleModuleEvaluation: "on",
    disableLoadingIndicatorTimeout: "on",
    effectsInDesignPages: "on",
    fastLocalization: "on",
    lazySmartComponentLocales: "on",
    localizationModelUpdate: "on",
    localizationProgressSummaries: "on",
    localizationUiUpdate: "on",
    localizedLinks: "on",
    locationTriggerConditions: "on",
    motionDivToDiv: "on",
    paneEdgeDoubleClickReset: "on",
    passkeys: "on",
    pathRadiusSmoothing: "on",
    rebaseBranches: "on",
    slabLatestMap: "on",
    synchronousNavigationOnDesktop: "on",
    verifyTreeOnCommit: "on",
    visibilityFromSandbox: "on",
    yieldOnTap: "on",
  },
  C = {
    agentSkipDesignPlan: { sample: 0.05, scope: "User", includeEnterprise: !1, variant: "on" },
    agentCompactionLuna: { sample: 0.5, scope: "User", includeEnterprise: !1, variant: "on" },
    jsonRichTextStorage: { sample: 0, scope: "Project", includeEnterprise: !1, variant: "on" },
  };
var J = {
  canPublishToCustomDomain: "upsell",
  canUsePasswordProtection: "upsell",
  canUseAnalytics: "upsell",
  canUseStagingEnvironment: "upsell",
  canUseVersioning: "upsell",
  showBannerOnPublishedSite: "on",
  canUseRedirects: "upsell",
  canUseCustomCanonicalUrl: "upsell",
  canUseRewriteCanonicalUrl: "off",
  canUseWellKnown: "upsell",
  canUseEditorPermissions: "off",
  canInviteEditors: "on",
  canUsePrivateLink: "upsell",
  canUsePrototypePassword: "upsell",
  canPublishTeamPackages: "upsell",
  canChangeProjectAccess: "off",
  canChangePrototypeAccess: "off",
  canInviteAnyDomain: "off",
  canInviteAnyDomainToPrototype: "off",
  canExportToHtml: "off",
  canHidePreviewInterface: "off",
  showSitesUpsell: "off",
  canUseBatchAITranslation: "upsell",
  canUseCustomLocaleRegions: "upsell",
  canUseLocalizationVariables: "upsell",
  canUseLocalizationCustomAiInstructions: "upsell",
  canUseBetaChannel: "off",
  canUseUTMTracking: "off",
  canUseTeamPlugins: "off",
  canUseWorkspacePlugins: "off",
  blockEditorBar: "off",
  canUseAdvancedAnalytics: "off",
  canUseFunnels: "off",
  canUseSpamProtectionAdvanced: "off",
  canUseBranching: "off",
  canUseAdvancedHosting: "off",
  canUseTriggers: "off",
  canUseExternalRewrites: "off",
  canUseInternalRewrites: "off",
  canUseCustomHeaders: "off",
  canUseAdvancedHeaders: "off",
};
var s = B(M(), 1);
var u = !1,
  y = class {
    activeConfig;
    activeOverrides = [];
    initialConfig;
    listeners = new Map();
    assertOnUse;
    updated;
    #e;
    constructor(e, { assertIfUsedBeforeUpdate: t = !1 } = {}) {
      ((this.initialConfig = q(e)),
        (this.activeConfig = { ...this.initialConfig }),
        (this.assertOnUse = !1),
        (this.updated = new Promise((o) => {
          this.#e = o;
        })));
    }
    addListener(e, t) {
      let o = this.listeners.get(e);
      (o || ((o = new Set()), this.listeners.set(e, o)), o.add(t));
    }
    get(e) {
      this.assertOnUse &&
        g(u, () => `Tried to read state of ${e} before update, await on .updated first`);
      for (let t = this.activeOverrides.length - 1; t >= 0; t--) {
        let o = this.activeOverrides[t][e];
        if (h(o)) return o;
      }
      return this.activeConfig[e];
    }
    getInitial(e) {
      return this.initialConfig[e];
    }
    is(e, t) {
      this.assertOnUse &&
        g(u, () => `Tried to read state of ${e} before update, await on .updated first`);
      let o = this.isActiveByOverrides(e, t);
      return S(o) ? this.activeConfig[e] === t : o;
    }
    isOn(e) {
      return (
        this.assertOnUse &&
          g(u, () => `Tried to read the state of ${e} before update, await on .updated first`),
        this.is(e, "on")
      );
    }
    getVariantName(e) {
      this.assertOnUse &&
        g(u, () => `Tried to read the state of ${e} before update, await on .updated first`);
      let t = this.get(e);
      return t === "on" || t === "off" ? e : `${e}_${t}`;
    }
    async didUpdateAndIsOn(e) {
      return (await this.updated, this.isOn(e));
    }
    overrideForTest(e) {
      let t = this.assertOnUse;
      ((this.assertOnUse = !1), this.activeOverrides.push(e));
      let o = !1,
        a = Object.assign(
          () => {
            if (!o) {
              if (this.activeOverrides.pop() !== e)
                throw Error("Something went wrong with experiment overrides");
              ((o = !0), (this.assertOnUse = t));
            }
          },
          {
            [w()]() {
              a();
            },
          }
        );
      return a;
    }
    removeListener(e, t) {
      this.listeners.get(e)?.delete(t);
    }
    update(e) {
      this.assertOnUse = !1;
      for (let t in e) {
        let o = R(e[t]);
        if (!h(o) || o === this.activeConfig[t]) continue;
        this.activeConfig[t] = o;
        let a = this.listeners.get(t);
        a && a.forEach((r) => r(o, t));
      }
      this.#e && (this.#e(), (this.#e = void 0));
    }
    withOverridesForTest(e, t) {
      let o = this.overrideForTest(e);
      try {
        return (this.signalForTests(e), t());
      } finally {
        (o(), this.signalForTests(e));
      }
    }
    signalForTests(e) {
      for (let t in e) {
        let o = this.listeners.get(t);
        if (!o) continue;
        let a = this.get(t);
        o.forEach((r) => r(a, t));
      }
    }
    isActiveByOverrides(e, t) {
      for (let o = this.activeOverrides.length - 1; o >= 0; o--) {
        let a = this.activeOverrides[o];
        if (e in a) return a[e] === t;
      }
    }
    serialize() {
      let e = {};
      for (let t in this.activeConfig) e[t] = this.get(t);
      return e;
    }
    diffFromInitial() {
      let e = {};
      for (let t in this.initialConfig) {
        let o = this.get(t);
        this.initialConfig[t] !== o && (e[t] = o);
      }
      return e;
    }
  };
function R(n) {
  return typeof n == "boolean" ? (n ? "on" : "off") : n;
}
function q(n) {
  let e = {};
  for (let t in n) e[t] = R(n[t]);
  return e;
}
function Q(n) {
  if ("isOn" in n) return [n.isOn, "on", !0];
  if ("isNotOn" in n) return [n.isNotOn, "on", !1];
  if ("isActive" in n) return [n.isActive, n.variant, !0];
  if ("isNotActive" in n) return [n.isNotActive, n.variant, !1];
  if ("condition" in n) return [n.name, n.condition];
  throw Error("invalid props");
}
function A(n) {
  return function ({ children: t, ...o }) {
    let a, r;
    if ("condition" in o) ((a = o.condition), (r = o.name));
    else {
      let [l, m, p] = Q(o);
      ((a = (j) => (j === m) === p), (r = l));
    }
    return T(n, r, a) ? s.default.createElement(s.default.Fragment, null, t) : null;
  };
}
function X(n, e) {
  u = !0;
  try {
    return n.get(e);
  } finally {
    u = !1;
  }
}
function T(n, e, t) {
  let [, o] = (0, s.useReducer)((l) => l + 1, 0),
    a = (0, s.useRef)(!1),
    r = (0, s.useRef)(t);
  r.current = t;
  let c = X(n, e);
  return (
    (a.current = r.current(c)),
    (0, s.useLayoutEffect)(() => {
      let l = (m) => {
        let p = r.current(m);
        p !== a.current && ((a.current = p), o());
      };
      return (n.addListener(e, l), () => n.removeListener(e, l));
    }, [n, e]),
    a.current
  );
}
var Y = 4294967295,
  i = {
    hashes: { Project: null, Team: null, User: null },
    isEnterprise: { Project: null, Team: null, User: null },
    channel: null,
  };
function Fe(n) {
  ((i.isEnterprise.Project = n.license.type === "enterpriseSite"), (i.hashes.Project = f(n.id)));
}
function L(n) {
  ((i.isEnterprise.User = n.spaces.some((e) => e.license?.type === "enterprise")),
    (i.hashes.User = f(n.id)));
}
function Ee(n, e) {
  ((i.isEnterprise.Team = e === "enterprise"), (i.hashes.Team = f(n)));
}
function Ce(n) {
  i.channel = n;
}
function Z(n, { sample: e, scope: t, variant: o, includeEnterprise: a, channels: r }) {
  if (r)
    if (i.channel) {
      if (!r.includes(i.channel)) return !1;
    } else return !1;
  let c = e * Y,
    l = f(n),
    m = f(o);
  return F(i.hashes[t]) || F(i.isEnterprise[t]) || (!a && i.isEnterprise[t])
    ? !1
    : (i.hashes[t] ^ l ^ m) >>> 0 < c;
}
function I(n = C) {
  let e = {};
  return (
    Object.keys(n).forEach((t) => {
      if (!n[t]) return;
      let o = N(n[t]) ? n[t] : [n[t]];
      for (let a of o) {
        if (!Z(t, a)) continue;
        [t, ...(a.dependencies ?? [])].forEach((c) => {
          e[c] = a.variant;
        });
        break;
      }
    }),
    e
  );
}
typeof window < "u" && window.framerUser && L(window.framerUser);
var d = new y(ie());
d.update(D());
var Se = A(d),
  ne = ["agentSkipDesignPlan"];
function Oe() {
  let n = {};
  for (let e of ne) n[`experiment_${e}`] = d.isOn(e);
  return n;
}
function Re(n) {
  return T(d, n, (e) => e === "on");
}
function P() {
  if (typeof window > "u") return "experiments";
  let n = U(window)?.channel;
  return n ? `experiments-${n}` : "experiments";
}
function k() {
  let n = {};
  if (typeof window > "u") return {};
  let e = U(window);
  if (!e) return n;
  let { channel: t, override: o } = e,
    a = o === "tunnel" && b.isDevelopment;
  return (
    (t === "alpha" || t === "local" || a) && Object.assign(n, v, E),
    t === "beta" && Object.assign(n, v),
    n
  );
}
function te() {
  let n = {};
  try {
    let e = JSON.parse(localStorage[P()] || "{}");
    Object.assign(n, e);
  } catch {}
  return n;
}
function oe() {
  if (typeof window > "u") return {};
  if (!ae(window)) return {};
  try {
    return JSON.parse(window.experiments);
  } catch {}
  return {};
}
function ae(n) {
  return "experiments" in n && h(n.experiments);
}
function re() {
  let n = {};
  if (typeof window > "u") return {};
  for (let e of new URLSearchParams(window?.location.search).getAll("experiment")) {
    let [t, o = "on"] = e.split("=");
    n[t] = o;
  }
  return n;
}
function ie() {
  return { ...x, ...k() };
}
function Ae({ resetStorage: n, resetSession: e } = {}) {
  if (!(typeof window > "u")) {
    if ((n && localStorage.removeItem(P()), e)) {
      let t = new URL(window.location.href);
      (t.searchParams.delete("experiment"),
        window.history.replaceState(window.history.state, "", t.href));
    }
    d.update({ ...x, ...D() });
  }
}
function D() {
  return { ...I(), ...k(), ...te(), ...oe(), ...re() };
}
typeof window < "u" && window.localStorage.removeItem("useThemeLogo");
function Le(n) {
  let e = P(),
    t = {};
  try {
    t = JSON.parse(localStorage[e] || "{}");
  } catch {}
  let o = { ...t, ...n };
  for (let a of V(o)) d.getInitial(a) === o[a] && delete o[a];
  try {
    Object.keys(o).length === 0
      ? localStorage.removeItem(e)
      : localStorage.setItem(e, JSON.stringify(o));
  } catch {}
}
export {
  W as a,
  H as b,
  x as c,
  $ as d,
  v as e,
  E as f,
  C as g,
  J as h,
  y as i,
  A as j,
  T as k,
  Fe as l,
  Ee as m,
  Ce as n,
  d as o,
  Se as p,
  Oe as q,
  Re as r,
  ie as s,
  Ae as t,
  Le as u,
};
//# sourceMappingURL=chunk-HSJM72PS.mjs.map
