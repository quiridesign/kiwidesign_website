import { d as q } from "chunk-P5X3UCBP.mjs";
import { i as X } from "chunk-Q3WX3LWW.mjs";
import { b as I, i as M } from "chunk-XMKSXIWJ.mjs";
import { c as W, e as Y } from "chunk-VNAJ22F5.mjs";
import { a as A } from "chunk-XD24P57D.mjs";
import { c as z } from "chunk-AFIDN3ND.mjs";
import { b as G, e as H, f as P, g as Q, m as O } from "chunk-LA34HORX.mjs";
import { c as f } from "chunk-4JY5UMT2.mjs";
function Z(e, n, t) {
  if (n.pages > (t.maxPages ?? 1 / 0)) return "pages";
  if (n.cmsCollections > (t.maxCmsCollections ?? 1 / 0)) return "cmsCollections";
  if (n.cmsItems > (t.maxCmsItems ?? 1 / 0)) return "cmsItems";
  if (n.locales > (t.maxLocales ?? 1 / 0)) return "locales";
  if (n.editors > (t.maxEditors ?? 1 / 0)) return "editors";
  if (e !== "freeSite" && n.abTests > (t.maxAbTests ?? 1 / 0)) return "abTests";
  let a = t.maxBandwidthInGB ?? 1 / 0,
    { previousMonth: m, twoMonthsAgo: h, currentMonth: o } = n.bandwidthInGB,
    p = m > a && h > a,
    g = m > a && o > a;
  if ((p || g) && !(X === a)) return "bandwidth";
}
var pe = {
  pages: "You currently have more pages than this plan allows for.",
  cmsCollections: "You currently have more CMS collections than this plan allows for.",
  cmsItems: "You currently have more CMS items than this plan allows for.",
  locales: "You currently have more locales than this plan allows for.",
  editors: "You currently have more editors in your project than this plan allows for.",
  abTests: "You currently have more A/B tests in your project than this plan allows for.",
  bandwidth: "Your current bandwidth usage exceeds this plan\u2019s limit.",
};
function He(e) {
  return pe[e];
}
function Ye({ isEnterprise: e, count: n, maxLimit: t, selfServeMax: a }) {
  return e ? 3 : n <= t ? 1 : n <= a ? 0 : 2;
}
var J = ((i) => (
  (i.fileUploadLimitInMB = "fileUploadLimitInMB"),
  (i.pages = "pages"),
  (i.cmsCollections = "cmsCollections"),
  (i.cmsItems = "cmsItems"),
  (i.localeAddon = "localeAddon"),
  (i.abTests = "abTests"),
  (i.trackingEventsLimit = "trackingEventsLimit"),
  (i.translatableWords = "translatableWords"),
  (i.bandwidthInGB = "bandwidthInGB"),
  (i.analyticsRangeInDays = "analyticsRangeInDays"),
  (i.staticFiles = "staticFiles"),
  (i.aiCredits = "aiCredits"),
  (i.canUseFunnels = "canUseFunnels"),
  (i.canUseTriggers = "canUseTriggers"),
  (i.canInviteEditors = "canInviteEditors"),
  (i.canInviteProjectEditors = "canInviteProjectEditors"),
  (i.canPublishToCustomDomain = "canPublishToCustomDomain"),
  (i.canUseBatchAITranslation = "canUseBatchAITranslation"),
  (i.canUseBranching = "canUseBranching"),
  (i.canUseCustomCanonicalUrl = "canUseCustomCanonicalUrl"),
  (i.canUseCustomHeaders = "canUseCustomHeaders"),
  (i.canUseCustomLocaleRegions = "canUseCustomLocaleRegions"),
  (i.canUseEditorPermissions = "canUseEditorPermissions"),
  (i.canUseInternalRewrites = "canUseInternalRewrites"),
  (i.canUsePasswordProtection = "canUsePasswordProtection"),
  (i.canUseRedirects = "canUseRedirects"),
  (i.canUseStagingEnvironment = "canUseStagingEnvironment"),
  (i.canUseUTMTracking = "canUseUTMTracking"),
  (i.canUseWellKnown = "canUseWellKnown"),
  (i.customDomainRecoverUpsell = "customDomainRecoverUpsell"),
  (i.domainToBuyUpsell = "domainToBuyUpsell"),
  i
))(J || {});
function Xe(e) {
  return e in J;
}
function qe(e, n) {
  return e !== null ? e : n.abTests > 0 ? "abTests" : null;
}
function d(e, n, t) {
  return e.find(({ resourceLimits: a }) => (a[t] ?? 1 / 0) > (n[t] ?? 1 / 0))?.licenseType ?? null;
}
function u(e, n, t) {
  return e.find(({ featureFlags: a }) => a[n] === t)?.licenseType ?? null;
}
function Ze(e, n, t, a, m) {
  let o = t
    .filter(({ licenseType: p }) => Y(p, n) && W(p) && p !== "basicSite2025")
    .filter(({ resourceLimits: p, licenseType: g }) => !Z(n, m, p) && g !== "enterpriseSite");
  switch (e) {
    case "pages":
      return d(o, a, "pages");
    case "fileUploadLimitInMB":
      return d(o, a, "fileUploadLimitInMB");
    case "staticFiles":
      return d(o, a, "staticFiles");
    case "cmsCollections":
      return d(o, a, "cmsCollections");
    case "cmsItems":
      return d(o, a, "cmsItems");
    case "canUseEditorPermissions":
      return u(o, "canUseEditorPermissions", "on");
    case "canPublishToCustomDomain":
    case "customDomainRecoverUpsell":
    case "domainToBuyUpsell":
      return u(o, "canPublishToCustomDomain", "on");
    case "canInviteEditors":
    case "canInviteProjectEditors":
      return d(o, a, "maxEditors");
    case "translatableWords":
    case "localeAddon":
      return d(o, a, "maxLocales");
    case "canUseBatchAITranslation":
      return u(o, "canUseBatchAITranslation", "on");
    case "canUseBranching":
      return u(o, "canUseBranching", "on");
    case "canUseUTMTracking":
      return u(o, "canUseUTMTracking", "on");
    case "canUseFunnels":
      return u(o, "canUseFunnels", "upsell");
    case "canUseTriggers":
      return u(o, "canUseTriggers", "upsell");
    case "abTests":
      return d(o, a, "maxAbTests");
    case "trackingEventsLimit":
      return d(o, a, "maxTrackingEventsLimit");
    case "canUseRedirects":
      return u(o, "canUseRedirects", "on");
    case "canUseInternalRewrites":
      return u(o, "canUseInternalRewrites", "on");
    case "canUseCustomHeaders":
      return u(o, "canUseCustomHeaders", "on");
    case "canUseCustomCanonicalUrl":
      return u(o, "canUseCustomCanonicalUrl", "upsell");
    case "canUseCustomLocaleRegions":
      return u(o, "canUseCustomLocaleRegions", "on");
    case "canUsePasswordProtection":
      return u(o, "canUsePasswordProtection", "on");
    case "canUseStagingEnvironment":
      return u(o, "canUseStagingEnvironment", "on");
    case "canUseWellKnown":
      return u(o, "canUseWellKnown", "on");
    case "analyticsRangeInDays":
      return d(o, a, "analyticsRangeInDays");
    case "bandwidthInGB":
      return d(o, a, "bandwidthInGB");
    case "aiCredits":
      return d(o, a, "aiCredits");
  }
}
var fe = ["baseten", "fireworks"],
  r = { provider: "baseten", modelId: "contour-1", environment: "production", deployment: "" };
function ge(e) {
  return fe.some((n) => n === e);
}
function E(e, n, t) {
  let a = e[n];
  return G(a) ? a : t;
}
function tn(e) {
  return P(e)
    ? {
        provider: ge(e.provider) ? e.provider : r.provider,
        modelId: E(e, "modelId", r.modelId),
        environment: E(e, "environment", r.environment),
        deployment: E(e, "deployment", r.deployment),
      }
    : { ...r };
}
function an() {
  return z()?.stores.persistedUserDefaults.contourOverride ?? r;
}
function B(e, n) {
  return e.trim() || n;
}
function ee(e = r) {
  return B(e.modelId, r.modelId);
}
function ne(e = r) {
  let n = ee(e),
    t = e.deployment.trim();
  if (t) return `${n}:${t}`;
  if (e.provider === "fireworks") return n;
  let a = B(e.environment, r.environment);
  return a === "production" ? n : `${n}:${a}`;
}
function Ce(e = r) {
  return e.deployment.trim().length > 0;
}
function on(e = r) {
  return (
    e.provider !== r.provider ||
    ee(e) !== r.modelId ||
    B(e.environment, r.environment) !== r.environment ||
    Ce(e)
  );
}
var te = [
    {
      languageModel: "contour/dev",
      displayName: "Contour Dev",
      base: "dev",
      selection: { override: "debug-bar" },
    },
    {
      languageModel: "contour/iris-latest",
      displayName: "Contour Iris Latest",
      base: "iris",
      selection: { provider: "baseten", alias: "contour-iris" },
    },
    {
      languageModel: "contour/triton-latest",
      displayName: "Contour Triton Latest",
      base: "triton",
      selection: { provider: "fireworks", modelId: "contour-triton" },
    },
  ],
  Te = [
    ...te,
    {
      languageModel: "contour/iris-v8",
      displayName: "Contour Iris v8",
      base: "iris",
      selection: { provider: "baseten", modelId: "qvvy52rq", deployment: "w6pyrm2" },
    },
    {
      languageModel: "contour/iris-v8.1",
      displayName: "Contour Iris v8.1",
      base: "iris",
      selection: { provider: "baseten", modelId: "qvvy52rq", deployment: "3yv1jvl" },
    },
    {
      languageModel: "contour/iris-v8.2",
      displayName: "Contour Iris v8.2",
      base: "iris",
      selection: { provider: "baseten", modelId: "w7p2ke6w", deployment: "wozddm7" },
    },
    {
      languageModel: "contour/iris-v12",
      displayName: "Contour Iris v12",
      base: "iris",
      selection: { provider: "baseten", alias: "contour-v12think-jul19" },
    },
    {
      languageModel: "contour-1",
      displayName: "Contour",
      base: "hex",
      selection: { provider: "baseten", alias: "contour-1" },
    },
  ],
  L = Te,
  dn = te.map((e) => e.languageModel),
  V = new Map(L.map((e) => [e.languageModel, e]));
function x(e) {
  return V.has(e);
}
function cn(e, n) {
  let t = V.get(e);
  A(t, "Unknown Contour variant");
  let { selection: a } = t;
  return "override" in a
    ? ne(n ?? r)
    : "alias" in a
      ? a.alias
      : a.provider === "fireworks"
        ? a.modelId
        : `${a.modelId}:${a.deployment}`;
}
function mn(e) {
  let n = V.get(e);
  return (A(n, "Unknown Contour variant"), "override" in n.selection);
}
function K(e) {
  let n = L.map((t) => [t.languageModel, e]);
  return Object.fromEntries(n);
}
function w(e) {
  let n = L.map((t) => [t.languageModel, e(t)]);
  return Object.fromEntries(n);
}
function pn(e, n) {
  let t = L.filter((a) => "override" in a.selection || a.selection.provider === e).map((a) => [
    a.languageModel,
    n(a),
  ]);
  return Object.fromEntries(t);
}
var ie = {
    "openai/gpt-3.5-turbo-1106": !1,
    "openai/gpt-4": !1,
    "openai/gpt-4o-2024-08-06": !1,
    "openai/gpt-4o-mini-2024-07-18": !1,
    "google/gemini-2.0-flash-001": !1,
    "google/gemini-2.5-flash": !1,
    "google/gemini-2.5-flash-lite": !1,
    "google/gemini-2.5-pro": !1,
    "google/gemini-3-flash-preview": !1,
    "google/gemini-3.1-pro-preview-customtools": !1,
    "google/gemini-3.1-flash-lite-preview": !1,
    "google/gemini-3.5-flash": !1,
    "google/gemini-3.7-flash": !1,
    "openai/gpt-4.1": !1,
    "openai/gpt-5.1": !1,
    "openai/gpt-5.2": !1,
    "openai/gpt-5.2-codex": !1,
    "openai/gpt-5.1-codex-mini": !1,
    "openai/gpt-5.3-codex": !1,
    "openai/gpt-5.4": !1,
    "openai/gpt-5.5": !1,
    "openai/gpt-5.6-sol": !1,
    "openai/gpt-5.6-terra": !1,
    "openai/gpt-5.6-luna": !1,
    "openai/gpt-5.4-mini": !1,
    "anthropic/claude-haiku-4.5": !1,
    "anthropic/claude-sonnet-4.5": !1,
    "anthropic/claude-sonnet-4.6": !1,
    "anthropic/claude-sonnet-5": !1,
    "anthropic/claude-opus-4.5": !1,
    "anthropic/claude-opus-4.6": !0,
    "anthropic/claude-opus-4.7": !0,
    "anthropic/claude-opus-4.8": !0,
    "anthropic/claude-opus-5": !0,
    "anthropic/claude-fable-5": !1,
    "deepseek/deepseek-v4-pro": !1,
    "deepseek/deepseek-v4-flash": !1,
    "x-ai/grok-build-0.1": !1,
    "moonshotai/Kimi-K2.5": !1,
    "moonshotai/Kimi-K2.6": !1,
    "moonshotai/Kimi-K2.7-Code": !1,
    "moonshotai/kimi-k3": !1,
    "meta/muse-spark-1.1": !1,
    "qwen/qwen3-vl-235b-a22b-instruct": !1,
    "qwen/qwen3.6-flash": !1,
    "openai/gpt-oss-120b": !1,
    "openai/gpt-oss-20b": !1,
    "contour-1": !1,
    "contour/dev": !1,
    "contour/iris-v8": !1,
    "contour/iris-v8.1": !1,
    "contour/iris-v8.2": !1,
    "contour/iris-v12": !1,
    "contour/iris-latest": !1,
    "contour/triton-latest": !1,
  },
  Ge = {
    "openai/gpt-3.5-turbo-1106": !1,
    "openai/gpt-4": !1,
    "openai/gpt-4o-2024-08-06": !0,
    "openai/gpt-4o-mini-2024-07-18": !0,
    "google/gemini-2.0-flash-001": !1,
    "google/gemini-2.5-flash": !1,
    "google/gemini-2.5-flash-lite": !1,
    "google/gemini-2.5-pro": !1,
    "google/gemini-3-flash-preview": !1,
    "google/gemini-3.1-pro-preview-customtools": !1,
    "google/gemini-3.1-flash-lite-preview": !1,
    "google/gemini-3.5-flash": !1,
    "google/gemini-3.7-flash": !1,
    "openai/gpt-4.1": !0,
    "openai/gpt-5.1": !0,
    "openai/gpt-5.2": !0,
    "openai/gpt-5.2-codex": !1,
    "openai/gpt-5.1-codex-mini": !1,
    "openai/gpt-5.3-codex": !1,
    "openai/gpt-5.4": !0,
    "openai/gpt-5.5": !0,
    "openai/gpt-5.6-sol": !0,
    "openai/gpt-5.6-terra": !0,
    "openai/gpt-5.6-luna": !0,
    "openai/gpt-5.4-mini": !0,
    "anthropic/claude-haiku-4.5": !1,
    "anthropic/claude-sonnet-4.5": !1,
    "anthropic/claude-sonnet-4.6": !1,
    "anthropic/claude-sonnet-5": !1,
    "anthropic/claude-opus-4.5": !1,
    "anthropic/claude-opus-4.6": !1,
    "anthropic/claude-opus-4.7": !1,
    "anthropic/claude-opus-4.8": !1,
    "anthropic/claude-opus-5": !1,
    "anthropic/claude-fable-5": !1,
    "deepseek/deepseek-v4-pro": !1,
    "deepseek/deepseek-v4-flash": !1,
    "x-ai/grok-build-0.1": !1,
    "moonshotai/Kimi-K2.5": !1,
    "moonshotai/Kimi-K2.6": !1,
    "moonshotai/Kimi-K2.7-Code": !1,
    "moonshotai/kimi-k3": !1,
    "meta/muse-spark-1.1": !1,
    "qwen/qwen3-vl-235b-a22b-instruct": !1,
    "qwen/qwen3.6-flash": !1,
    "openai/gpt-oss-120b": !1,
    "openai/gpt-oss-20b": !1,
    "contour-1": !1,
    "contour/dev": !1,
    "contour/iris-v8": !1,
    "contour/iris-v8.1": !1,
    "contour/iris-v8.2": !1,
    "contour/iris-v12": !1,
    "contour/iris-latest": !1,
    "contour/triton-latest": !1,
  },
  Pe = {
    "openai/gpt-3.5-turbo-1106": 1,
    "openai/gpt-4": 1,
    "openai/gpt-4o-2024-08-06": 1.7,
    "openai/gpt-4o-mini-2024-07-18": 5 / 3,
    "google/gemini-2.0-flash-001": 1,
    "google/gemini-2.5-flash": 1,
    "google/gemini-2.5-flash-lite": 1,
    "google/gemini-2.5-pro": 1,
    "google/gemini-3-flash-preview": 1,
    "google/gemini-3.1-pro-preview-customtools": 1,
    "google/gemini-3.1-flash-lite-preview": 1,
    "google/gemini-3.5-flash": 1,
    "google/gemini-3.7-flash": 1,
    "openai/gpt-4.1": 1.75,
    "openai/gpt-5.1": 2,
    "openai/gpt-5.2": 2,
    "openai/gpt-5.2-codex": 1,
    "openai/gpt-5.1-codex-mini": 1,
    "openai/gpt-5.3-codex": 1,
    "openai/gpt-5.4": 2,
    "openai/gpt-5.5": 2.5,
    "openai/gpt-5.6-sol": 2,
    "openai/gpt-5.6-terra": 2,
    "openai/gpt-5.6-luna": 2,
    "openai/gpt-5.4-mini": 2,
    "anthropic/claude-haiku-4.5": 1,
    "anthropic/claude-sonnet-4.5": 1,
    "anthropic/claude-sonnet-4.6": 1,
    "anthropic/claude-sonnet-5": 1,
    "anthropic/claude-opus-4.5": 1,
    "anthropic/claude-opus-4.6": 6,
    "anthropic/claude-opus-4.7": 6,
    "anthropic/claude-opus-4.8": 2,
    "anthropic/claude-opus-5": 2,
    "anthropic/claude-fable-5": 1,
    "deepseek/deepseek-v4-pro": 1,
    "deepseek/deepseek-v4-flash": 1,
    "x-ai/grok-build-0.1": 1,
    "moonshotai/Kimi-K2.5": 1,
    "moonshotai/Kimi-K2.6": 1,
    "moonshotai/Kimi-K2.7-Code": 1,
    "moonshotai/kimi-k3": 1,
    "meta/muse-spark-1.1": 1,
    "qwen/qwen3-vl-235b-a22b-instruct": 1,
    "qwen/qwen3.6-flash": 1,
    "openai/gpt-oss-120b": 1,
    "openai/gpt-oss-20b": 1,
    "contour-1": 1,
    "contour/dev": 1,
    "contour/iris-v8": 1,
    "contour/iris-v8.1": 1,
    "contour/iris-v8.2": 1,
    "contour/iris-v12": 1,
    "contour/iris-latest": 1,
    "contour/triton-latest": 1,
  };
function Mn(e) {
  return ie[e] || Ge[e];
}
function xn(e) {
  let n = Pe[e];
  return `${Number(n.toFixed(2))}\xD7`;
}
function Sn(e, n) {
  return !n || !ie[e] ? e : `${e}-fast`;
}
var Me = {
  "openai/gpt-3.5-turbo-1106": 16385,
  "openai/gpt-4": 8191,
  "openai/gpt-4o-2024-08-06": 128e3,
  "openai/gpt-4o-mini-2024-07-18": 128e3,
  "google/gemini-2.0-flash-001": 1048576,
  "google/gemini-2.5-flash": 1048576,
  "google/gemini-2.5-flash-lite": 1048576,
  "google/gemini-2.5-pro": 1048576,
  "google/gemini-3.1-pro-preview-customtools": 1048576,
  "google/gemini-3.1-flash-lite-preview": 1048576,
  "google/gemini-3-flash-preview": 1048576,
  "google/gemini-3.5-flash": 1048576,
  "google/gemini-3.7-flash": 1048576,
  "qwen/qwen3.6-flash": 1e6,
  "openai/gpt-4.1": 1047576,
  "openai/gpt-5.1": 4e5,
  "openai/gpt-5.2": 4e5,
  "openai/gpt-5.2-codex": 4e5,
  "openai/gpt-5.1-codex-mini": 4e5,
  "openai/gpt-5.3-codex": 4e5,
  "openai/gpt-5.4": [272e3, 105e4],
  "openai/gpt-5.5": [272e3, 105e4],
  "openai/gpt-5.6-sol": [272e3, 105e4],
  "openai/gpt-5.6-terra": [272e3, 105e4],
  "openai/gpt-5.6-luna": [272e3, 105e4],
  "openai/gpt-5.4-mini": 4e5,
  "anthropic/claude-haiku-4.5": 2e5,
  "moonshotai/Kimi-K2.5": 262144,
  "moonshotai/Kimi-K2.6": 262144,
  "moonshotai/Kimi-K2.7-Code": 262144,
  "moonshotai/kimi-k3": 1048576,
  "meta/muse-spark-1.1": 1048576,
  "deepseek/deepseek-v4-pro": 1048576,
  "deepseek/deepseek-v4-flash": 1048576,
  "x-ai/grok-build-0.1": [2e5, 256e3],
  "qwen/qwen3-vl-235b-a22b-instruct": 262144,
  "openai/gpt-oss-120b": 131072,
  "openai/gpt-oss-20b": 131072,
  "anthropic/claude-opus-4.5": 2e5,
  "anthropic/claude-sonnet-4.5": [2e5, 3e5, 1e6],
  "anthropic/claude-sonnet-4.6": [5e5, 7e5, 1e6],
  "anthropic/claude-sonnet-5": [5e5, 7e5, 1e6],
  "anthropic/claude-opus-4.6": [5e5, 7e5, 1e6],
  "anthropic/claude-opus-4.7": [5e5, 7e5, 1e6],
  "anthropic/claude-opus-4.8": [5e5, 7e5, 1e6],
  "anthropic/claude-opus-5": [5e5, 7e5, 1e6],
  "anthropic/claude-fable-5": [5e5, 7e5, 1e6],
  ...K(262144),
};
function yn(e, n) {
  let t = Me[e];
  if (H(t)) return t;
  let a = t.length === 2 ? t[1] : t[2];
  switch (n) {
    case "lower":
      return t[0];
    case "upper":
      return t.length === 2 ? a : t[1];
    case "max":
      return a;
    default:
      f(n, "Context limit cap must be supported.");
  }
}
var xe = ["low", "medium", "high", "xhigh"],
  Se = {
    none: "None",
    enabled: "Enabled",
    minimal: "Minimal",
    low: "Light",
    medium: "Medium",
    high: "High",
    xhigh: "Extra High",
    max: "Max",
    interleaved: "Adaptive",
  };
function On(e) {
  return Se[e];
}
var ae = new Set(["low", "high", "max"]),
  R = {
    "openai/gpt-3.5-turbo-1106": new Set(["none", "minimal", "low", "medium", "high"]),
    "openai/gpt-4": new Set(["none", "minimal", "low", "medium", "high"]),
    "openai/gpt-4o-2024-08-06": new Set(["none", "minimal", "low", "medium", "high"]),
    "openai/gpt-4o-mini-2024-07-18": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-2.0-flash-001": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-2.5-flash": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-2.5-flash-lite": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-2.5-pro": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-3-flash-preview": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-3.1-pro-preview-customtools": new Set(["minimal", "low", "medium", "high"]),
    "google/gemini-3.1-flash-lite-preview": new Set(["none", "minimal", "low", "medium", "high"]),
    "google/gemini-3.5-flash": new Set(["minimal", "low", "medium", "high"]),
    "google/gemini-3.7-flash": new Set(["minimal", "low", "medium", "high"]),
    "qwen/qwen3.6-flash": new Set(["none"]),
    "openai/gpt-4.1": new Set(["none", "minimal", "low", "medium", "high"]),
    "openai/gpt-5.1": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.2": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.2-codex": new Set(["low", "medium", "high"]),
    "openai/gpt-5.1-codex-mini": new Set(["low", "medium", "high"]),
    "openai/gpt-5.3-codex": new Set(["low", "medium", "high"]),
    "openai/gpt-5.4": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.5": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-5.6-sol": new Set(["none", "low", "medium", "high", "xhigh", "max"]),
    "openai/gpt-5.6-terra": new Set(["none", "low", "medium", "high", "xhigh", "max"]),
    "openai/gpt-5.6-luna": new Set(["none", "low", "medium", "high", "xhigh", "max"]),
    "openai/gpt-5.4-mini": new Set(["none", "low", "medium", "high"]),
    "openai/gpt-oss-120b": new Set(["low", "medium", "high"]),
    "openai/gpt-oss-20b": new Set(["low", "medium", "high"]),
    "anthropic/claude-haiku-4.5": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-sonnet-4.5": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-sonnet-4.6": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-sonnet-5": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-opus-4.5": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-opus-4.6": new Set(["none", "low", "medium", "high"]),
    "anthropic/claude-opus-4.7": new Set(["none", "low", "medium", "high", "xhigh"]),
    "anthropic/claude-opus-4.8": new Set(["none", "low", "medium", "high", "xhigh"]),
    "anthropic/claude-opus-5": new Set(["none", "low", "medium", "high", "xhigh"]),
    "anthropic/claude-fable-5": new Set(["none", "low", "medium", "high", "xhigh"]),
    "deepseek/deepseek-v4-pro": new Set(["none", "high", "xhigh"]),
    "deepseek/deepseek-v4-flash": new Set(["none", "high", "xhigh"]),
    "x-ai/grok-build-0.1": new Set(["enabled"]),
    "moonshotai/Kimi-K2.5": new Set(["enabled", "none"]),
    "moonshotai/Kimi-K2.6": new Set(["enabled", "none"]),
    "moonshotai/Kimi-K2.7-Code": new Set(["enabled", "none"]),
    "moonshotai/kimi-k3": ae,
    "meta/muse-spark-1.1": new Set(["enabled", "none"]),
    "qwen/qwen3-vl-235b-a22b-instruct": new Set(["none"]),
    ...w((e) =>
      e.base === "triton"
        ? ae
        : e.base === "iris"
          ? new Set(["enabled"])
          : new Set(["enabled", "none"])
    ),
  },
  ye = w((e) => (e.base === "triton" ? "low" : e.base === "hex" ? "none" : "enabled")),
  Oe = new Set([
    "none",
    "enabled",
    "minimal",
    "low",
    "medium",
    "high",
    "xhigh",
    "max",
    "interleaved",
  ]);
function Le(e) {
  return G(e) ? Oe.has(e) : !1;
}
function Ln(e) {
  if (!P(e)) return !1;
  for (let n in e) {
    if (!I(n)) return !1;
    let t = e[n];
    if (!Le(t) || !R[n].has(t)) return !1;
  }
  return !0;
}
function wn(e) {
  if (!P(e)) return !1;
  for (let n in e) if (!I(n) || typeof e[n] != "boolean") return !1;
  return !0;
}
function Fn(e) {
  return R[e];
}
function bn(e, n) {
  return R[n].has(e);
}
function vn(e) {
  if (x(e)) return ye[e];
  switch (e) {
    case "openai/gpt-3.5-turbo-1106":
    case "openai/gpt-4":
    case "openai/gpt-4o-2024-08-06":
    case "openai/gpt-4o-mini-2024-07-18":
    case "google/gemini-2.0-flash-001":
    case "google/gemini-2.5-flash":
    case "google/gemini-2.5-flash-lite":
    case "google/gemini-2.5-pro":
    case "google/gemini-3-flash-preview":
    case "google/gemini-3.1-pro-preview-customtools":
    case "google/gemini-3.1-flash-lite-preview":
    case "openai/gpt-4.1":
    case "openai/gpt-5.1":
    case "openai/gpt-5.2":
    case "openai/gpt-5.2-codex":
    case "openai/gpt-5.1-codex-mini":
    case "openai/gpt-5.3-codex":
    case "openai/gpt-5.4":
    case "openai/gpt-5.5":
    case "openai/gpt-5.6-sol":
    case "openai/gpt-5.6-terra":
    case "openai/gpt-5.4-mini":
    case "openai/gpt-oss-120b":
    case "openai/gpt-oss-20b":
    case "anthropic/claude-haiku-4.5":
    case "anthropic/claude-sonnet-4.5":
    case "anthropic/claude-sonnet-4.6":
    case "anthropic/claude-sonnet-5":
    case "anthropic/claude-opus-4.5":
    case "anthropic/claude-opus-4.6":
    case "anthropic/claude-opus-4.7":
    case "anthropic/claude-opus-4.8":
    case "anthropic/claude-opus-5":
    case "anthropic/claude-fable-5":
    case "moonshotai/kimi-k3":
      return "low";
    case "openai/gpt-5.6-luna":
      return "high";
    case "google/gemini-3.5-flash":
    case "google/gemini-3.7-flash":
      return "medium";
    case "deepseek/deepseek-v4-pro":
    case "deepseek/deepseek-v4-flash":
    case "qwen/qwen3-vl-235b-a22b-instruct":
    case "qwen/qwen3.6-flash":
      return "none";
    case "x-ai/grok-build-0.1":
    case "moonshotai/Kimi-K2.5":
    case "moonshotai/Kimi-K2.6":
    case "moonshotai/Kimi-K2.7-Code":
    case "meta/muse-spark-1.1":
      return "enabled";
    default:
      f(e, "Model must have a default reasoning effort specified.");
  }
}
var we = {
  "openai/gpt-3.5-turbo-1106": !1,
  "openai/gpt-4": !1,
  "openai/gpt-4o-2024-08-06": !1,
  "openai/gpt-4o-mini-2024-07-18": !1,
  "google/gemini-2.0-flash-001": !1,
  "google/gemini-2.5-flash": !1,
  "google/gemini-2.5-flash-lite": !1,
  "google/gemini-2.5-pro": !1,
  "google/gemini-3.1-pro-preview-customtools": !1,
  "google/gemini-3.1-flash-lite-preview": !1,
  "google/gemini-3-flash-preview": !1,
  "google/gemini-3.5-flash": !1,
  "google/gemini-3.7-flash": !1,
  "qwen/qwen3.6-flash": !1,
  "openai/gpt-4.1": !1,
  "openai/gpt-5.1": !1,
  "openai/gpt-5.2": !1,
  "openai/gpt-5.2-codex": !1,
  "openai/gpt-5.1-codex-mini": !1,
  "openai/gpt-5.3-codex": !1,
  "openai/gpt-5.4": !1,
  "openai/gpt-5.5": !1,
  "openai/gpt-5.6-sol": !1,
  "openai/gpt-5.6-terra": !1,
  "openai/gpt-5.6-luna": !1,
  "openai/gpt-5.4-mini": !1,
  "anthropic/claude-haiku-4.5": !1,
  "moonshotai/Kimi-K2.5": !1,
  "moonshotai/Kimi-K2.6": !1,
  "moonshotai/Kimi-K2.7-Code": !1,
  "moonshotai/kimi-k3": !1,
  "meta/muse-spark-1.1": !1,
  "deepseek/deepseek-v4-pro": !1,
  "deepseek/deepseek-v4-flash": !1,
  "x-ai/grok-build-0.1": !1,
  "qwen/qwen3-vl-235b-a22b-instruct": !1,
  "openai/gpt-oss-120b": !1,
  "openai/gpt-oss-20b": !1,
  "anthropic/claude-opus-4.5": !1,
  "anthropic/claude-sonnet-4.5": !1,
  "anthropic/claude-sonnet-4.6": !0,
  "anthropic/claude-sonnet-5": !0,
  "anthropic/claude-opus-4.6": !0,
  "anthropic/claude-opus-4.7": !0,
  "anthropic/claude-opus-4.8": !0,
  "anthropic/claude-opus-5": !0,
  "anthropic/claude-fable-5": !0,
  ...K(!1),
};
function _(e) {
  return we[e];
}
var Fe = new Set(xe);
function be(e) {
  return Fe.has(e);
}
var ve = { low: 1024, medium: 2048, high: 4096 };
function Ae(e, n) {
  if (O(e)) return Ie(n);
  switch (e) {
    case "enabled":
      return n === "moonshotai/kimi-k3" ? { enabled: !0 } : void 0;
    case "none":
      switch (n) {
        case "anthropic/claude-haiku-4.5":
        case "anthropic/claude-sonnet-4.5":
        case "anthropic/claude-sonnet-4.6":
        case "anthropic/claude-sonnet-5":
        case "anthropic/claude-opus-4.5":
        case "anthropic/claude-opus-4.6":
        case "anthropic/claude-opus-4.7":
        case "anthropic/claude-opus-4.8":
        case "anthropic/claude-opus-5":
        case "anthropic/claude-fable-5":
        case "qwen/qwen3.6-flash":
        case "moonshotai/Kimi-K2.5":
        case "moonshotai/Kimi-K2.6":
        case "moonshotai/Kimi-K2.7-Code":
        case "meta/muse-spark-1.1":
        case "qwen/qwen3-vl-235b-a22b-instruct":
          return;
        case "moonshotai/kimi-k3":
          return { effort: "none", enabled: !0 };
        default:
          return { effort: "none", enabled: !0 };
      }
    case "minimal":
      return { effort: e, enabled: !0 };
    case "interleaved":
      return { enabled: !0 };
    case "low":
    case "medium":
    case "high": {
      if (n === "anthropic/claude-sonnet-4.6") {
        let t = ve[e];
        if (!O(t)) return { enabled: !0, max_tokens: t };
      }
      return _(n) ? { enabled: !0 } : { effort: e, enabled: !0 };
    }
    case "max":
      return { effort: e, enabled: !0 };
    case "xhigh":
      return _(n) ? { enabled: !0 } : { effort: e, enabled: !0 };
    default:
      f(e, "Reasoning effort must have a reasoning config.");
  }
}
function An(e, n) {
  if (!(O(e) || !_(n) || !be(e))) return { verbosity: e };
}
var oe = "effort";
function In(e, n) {
  let t = Ae(e, n);
  if (!Q(t, oe)) return;
  let a = t[oe];
  return G(a) ? a : void 0;
}
function Ie(e) {
  if (!x(e))
    switch (e) {
      case "google/gemini-3.5-flash":
      case "google/gemini-3.7-flash":
        return { effort: "medium", enabled: !0 };
      case "google/gemini-2.0-flash-001":
      case "google/gemini-2.5-flash":
      case "google/gemini-2.5-pro":
      case "google/gemini-3-flash-preview":
      case "google/gemini-3.1-pro-preview-customtools":
      case "google/gemini-3.1-flash-lite-preview":
      case "openai/gpt-4.1":
      case "openai/gpt-3.5-turbo-1106":
      case "openai/gpt-4":
      case "openai/gpt-4o-2024-08-06":
      case "openai/gpt-4o-mini-2024-07-18":
        return { effort: "minimal", enabled: !0 };
      case "openai/gpt-oss-120b":
      case "openai/gpt-oss-20b":
      case "anthropic/claude-opus-4.5":
        return { effort: "low", enabled: !0 };
      case "anthropic/claude-haiku-4.5":
      case "anthropic/claude-sonnet-4.5":
      case "anthropic/claude-sonnet-4.6":
      case "anthropic/claude-sonnet-5":
      case "anthropic/claude-opus-4.6":
      case "anthropic/claude-opus-4.7":
      case "anthropic/claude-opus-4.8":
      case "anthropic/claude-opus-5":
      case "anthropic/claude-fable-5":
      case "deepseek/deepseek-v4-pro":
      case "deepseek/deepseek-v4-flash":
      case "qwen/qwen3.6-flash":
      case "qwen/qwen3-vl-235b-a22b-instruct":
        return;
      case "moonshotai/Kimi-K2.5":
      case "moonshotai/Kimi-K2.6":
      case "moonshotai/Kimi-K2.7-Code":
      case "meta/muse-spark-1.1":
      case "x-ai/grok-build-0.1":
        return;
      case "moonshotai/kimi-k3":
        return { effort: "low", enabled: !0 };
      case "openai/gpt-5.2-codex":
      case "openai/gpt-5.1-codex-mini":
      case "openai/gpt-5.3-codex":
        return { effort: "low", enabled: !0 };
      case "google/gemini-2.5-flash-lite":
      case "openai/gpt-5.1":
      case "openai/gpt-5.2":
      case "openai/gpt-5.4":
      case "openai/gpt-5.5":
      case "openai/gpt-5.6-sol":
      case "openai/gpt-5.6-terra":
      case "openai/gpt-5.6-luna":
      case "openai/gpt-5.4-mini":
        return { effort: "none", enabled: !0 };
      default:
        f(e, "Model must have reasoning specified.");
    }
}
var En = [
  "google/gemini-3.5-flash",
  "openai/gpt-5.4-mini",
  "google/gemini-3-flash-preview",
  "openai/gpt-5.5",
  "openai/gpt-5.4",
  "openai/gpt-5.2",
];
function Bn(e) {
  switch (e) {
    case "google/gemini-3.5-flash":
      return { effort: "minimal", enabled: !0 };
    case "openai/gpt-5.3-codex":
    case "openai/gpt-5.2":
    case "openai/gpt-5.5":
    case "openai/gpt-5.6-sol":
    case "openai/gpt-5.6-terra":
    case "openai/gpt-5.6-luna":
    case "google/gemini-3-flash-preview":
      return { effort: "low", enabled: !0 };
    case "openai/gpt-5.4":
    case "openai/gpt-5.4-mini":
      return { effort: "medium", enabled: !0 };
    default:
      return;
  }
}
function Vn(e) {
  if (!x(e))
    switch (e) {
      case "google/gemini-2.5-flash":
      case "google/gemini-2.0-flash-001":
      case "google/gemini-2.5-flash-lite":
      case "google/gemini-2.5-pro":
      case "google/gemini-3-flash-preview":
      case "google/gemini-3.1-flash-lite-preview":
      case "google/gemini-3.1-pro-preview-customtools":
      case "google/gemini-3.5-flash":
      case "openai/gpt-4.1":
      case "openai/gpt-5.1":
      case "openai/gpt-5.2":
      case "openai/gpt-5.2-codex":
      case "openai/gpt-5.1-codex-mini":
      case "openai/gpt-5.3-codex":
      case "openai/gpt-5.4":
      case "openai/gpt-5.5":
      case "openai/gpt-5.6-sol":
      case "openai/gpt-5.4-mini":
      case "openai/gpt-3.5-turbo-1106":
      case "openai/gpt-4":
      case "openai/gpt-4o-2024-08-06":
      case "openai/gpt-4o-mini-2024-07-18":
      case "openai/gpt-oss-20b":
      case "x-ai/grok-build-0.1":
      case "moonshotai/Kimi-K2.5":
      case "moonshotai/Kimi-K2.6":
      case "moonshotai/Kimi-K2.7-Code":
      case "moonshotai/kimi-k3":
      case "meta/muse-spark-1.1":
        return;
      case "openai/gpt-5.6-terra":
      case "openai/gpt-5.6-luna":
        return { only: ["openai"] };
      case "deepseek/deepseek-v4-pro":
      case "deepseek/deepseek-v4-flash":
        return { ignore: ["deepseek", "gmicloud/fp8"] };
      case "qwen/qwen3.6-flash":
      case "qwen/qwen3-vl-235b-a22b-instruct":
        return { only: ["alibaba"] };
      case "anthropic/claude-haiku-4.5":
      case "anthropic/claude-sonnet-4.5":
      case "anthropic/claude-sonnet-4.6":
      case "anthropic/claude-sonnet-5":
      case "anthropic/claude-opus-4.5":
      case "anthropic/claude-opus-4.6":
      case "anthropic/claude-opus-4.7":
      case "anthropic/claude-opus-4.8":
      case "anthropic/claude-opus-5":
      case "anthropic/claude-fable-5":
        return { order: ["amazon-bedrock", "anthropic/2", "anthropic"], ignore: ["google-vertex"] };
      case "openai/gpt-oss-120b":
        return { only: ["cerebras/fp16"] };
      case "google/gemini-3.7-flash":
        return { ignore: ["google-vertex"] };
      default:
        f(e, "Model must have provider specified.");
    }
}
var Ee = {
    "openai/gpt-3.5-turbo-1106": "GPT 3.5 Turbo",
    "openai/gpt-4": "GPT 4",
    "openai/gpt-4o-2024-08-06": "GPT 4o",
    "openai/gpt-4o-mini-2024-07-18": "GPT 4o Mini",
    "google/gemini-2.0-flash-001": "Gemini 2.0 Flash",
    "google/gemini-2.5-flash": "Gemini 2.5 Flash",
    "google/gemini-2.5-flash-lite": "Gemini 2.5 Flash Lite",
    "google/gemini-2.5-pro": "Gemini 2.5 Pro",
    "google/gemini-3-flash-preview": "Gemini 3 Flash",
    "google/gemini-3.1-pro-preview-customtools": "Gemini 3.1 Pro",
    "google/gemini-3.1-flash-lite-preview": "Gemini 3.1 Flash Lite",
    "google/gemini-3.5-flash": "Gemini 3.5",
    "google/gemini-3.7-flash": "Gemini 3.7",
    "qwen/qwen3.6-flash": "Qwen 3.6 Flash",
    "openai/gpt-4.1": "GPT 4.1",
    "openai/gpt-5.1": "GPT 5.1",
    "openai/gpt-5.2": "GPT 5.2",
    "openai/gpt-5.4": "GPT 5.4",
    "openai/gpt-5.5": "GPT 5.5",
    "openai/gpt-5.6-sol": "GPT 5.6 Sol",
    "openai/gpt-5.6-terra": "GPT 5.6 Terra",
    "openai/gpt-5.6-luna": "GPT 5.6 Luna",
    "openai/gpt-5.4-mini": "GPT 5.4 Mini",
    "anthropic/claude-haiku-4.5": "Haiku 4.5",
    "anthropic/claude-sonnet-4.5": "Sonnet 4.5",
    "anthropic/claude-sonnet-4.6": "Sonnet 4.6",
    "anthropic/claude-sonnet-5": "Sonnet 5",
    "anthropic/claude-opus-4.5": "Opus 4.5",
    "anthropic/claude-opus-4.6": "Opus 4.6",
    "anthropic/claude-opus-4.7": "Opus 4.7",
    "anthropic/claude-opus-4.8": "Opus 4.8",
    "anthropic/claude-opus-5": "Opus 5",
    "anthropic/claude-fable-5": "Fable 5",
    "deepseek/deepseek-v4-pro": "DeepSeek V4 Pro",
    "deepseek/deepseek-v4-flash": "DeepSeek V4 Flash",
    "x-ai/grok-build-0.1": "Grok Build 0.1",
    "moonshotai/Kimi-K2.5": "Kimi K2.5",
    "moonshotai/Kimi-K2.6": "Kimi K2.6",
    "moonshotai/Kimi-K2.7-Code": "Kimi K2.7 Code",
    "moonshotai/kimi-k3": "Kimi K3",
    "meta/muse-spark-1.1": "Muse Spark 1.1",
    "qwen/qwen3-vl-235b-a22b-instruct": "Qwen3 VL 235B",
    "openai/gpt-5.1-codex-mini": "GPT-5.1 Codex Mini",
    "openai/gpt-5.2-codex": "GPT-5.2 Codex",
    "openai/gpt-5.3-codex": "GPT-5.3 Codex",
    "openai/gpt-oss-120b": "GPT OSS 120B",
    "openai/gpt-oss-20b": "GPT OSS 20B",
    ...w((e) => e.displayName),
  },
  Be = Ee["openai/gpt-5.6-sol"];
function l(e, n, t) {
  return { multiplier: n, description: { name: e, body: t(`${n}\xD7`, Be) } };
}
var k = {
  "openai/gpt-5.6-sol": l(
    "GPT 5.6 Sol",
    1,
    () => "is OpenAI\u2019s flagship model and the baseline for credits spent in Framer."
  ),
  "openai/gpt-5.6-terra": l(
    "GPT 5.6 Terra",
    0.6,
    (e, n) => `is OpenAI\u2019s balanced model and uses ${e} as many credits as ${n}.`
  ),
  "openai/gpt-5.6-luna": l(
    "GPT 5.6 Luna",
    0.4,
    (e, n) => `is OpenAI\u2019s fastest model and uses ${e} as many credits as ${n}.`
  ),
  "openai/gpt-5.5": l(
    "GPT 5.5",
    1,
    () =>
      "is OpenAI\u2019s previous-generation model and uses 1\xD7 as many credits as GPT 5.6 Sol."
  ),
  "anthropic/claude-haiku-4.5": l(
    "Haiku 4.5",
    0.2,
    (e, n) => `is Anthropic\u2019s fastest model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-sonnet-4.5": l(
    "Sonnet 4.5",
    0.9,
    (e, n) => `is a previous-generation model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-sonnet-4.6": l(
    "Sonnet 4.6",
    0.9,
    (e, n) => `is Anthropic\u2019s prior Sonnet model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-sonnet-5": l(
    "Sonnet 5",
    0.6,
    (e, n) =>
      `is Anthropic\u2019s latest Sonnet model and uses ${e} as many credits as ${n}. 33% off until Aug 31, 2026.`
  ),
  "anthropic/claude-opus-4.5": l(
    "Opus 4.5",
    1.8,
    (e, n) => `is a previous-generation Anthropic flagship and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-opus-4.6": l(
    "Opus 4.6",
    1.8,
    (e, n) => `is Anthropic\u2019s previous flagship model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-opus-4.7": l(
    "Opus 4.7",
    1.8,
    (e, n) => `is Anthropic\u2019s flagship model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-opus-4.8": l(
    "Opus 4.8",
    1.2,
    (e, n) => `is Anthropic\u2019s previous-generation model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-opus-5": l(
    "Opus 5",
    1.2,
    (e, n) => `is Anthropic\u2019s flagship model and uses ${e} as many credits as ${n}.`
  ),
  "anthropic/claude-fable-5": l(
    "Fable 5",
    2,
    (e, n) => `is Anthropic\u2019s most powerful model and uses ${e} as many credits as ${n}.`
  ),
  "google/gemini-3.5-flash": l(
    "Gemini 3.5",
    0.3,
    (e, n) => `is Google\u2019s fast model and uses ${e} as many credits as ${n}.`
  ),
  "google/gemini-3.7-flash": l(
    "Gemini 3.7",
    0.1,
    (e, n) => `is Google\u2019s fastest model and uses ${e} as many credits as ${n}.`
  ),
};
function Kn(e) {
  let n = k[e];
  if (n !== void 0) return `${n.multiplier}\xD7`;
}
function _n(e) {
  return k[e]?.multiplier;
}
function Rn(e) {
  return k[e]?.description;
}
var c = { maxVisionImageDimension: 1568, maxVisionImages: 20, maxVisionImageSizeKB: 5e3 },
  se = 200,
  re = ke(50),
  Ve = {
    allowedFileTypes: ["image/jpeg", "image/png"],
    maxAttachments: se,
    totalSizeLimit: re,
    maxVisionImageSizeKB: 20 * 1024,
  };
function s(e) {
  return { allowedFileTypes: ["image/*"], maxAttachments: se, totalSizeLimit: re, ...e };
}
var U = {
  "openai/gpt-5.1": s(),
  "openai/gpt-5.2": s(),
  "openai/gpt-5.2-codex": s(),
  "openai/gpt-5.3-codex": s(),
  "openai/gpt-5.1-codex-mini": s(),
  "openai/gpt-5.4": s(),
  "openai/gpt-5.5": s(),
  "openai/gpt-5.6-sol": s(),
  "openai/gpt-5.6-terra": s(),
  "openai/gpt-5.6-luna": s(),
  "openai/gpt-5.4-mini": s(),
  "meta/muse-spark-1.1": s(),
  "x-ai/grok-build-0.1": Ve,
  "anthropic/claude-sonnet-4.5": s(c),
  "anthropic/claude-opus-4.5": s(c),
  "anthropic/claude-sonnet-4.6": s(c),
  "anthropic/claude-sonnet-5": s(c),
  "anthropic/claude-opus-4.6": s(c),
  "anthropic/claude-opus-4.7": s(c),
  "anthropic/claude-opus-4.8": s(c),
  "anthropic/claude-opus-5": s(c),
  "anthropic/claude-fable-5": s(c),
  "anthropic/claude-haiku-4.5": s(c),
};
function Ke(e = M) {
  return U[e]?.maxVisionImageDimension;
}
function _e(e = M) {
  return U[e]?.maxVisionImages;
}
function Re(e = M) {
  return U[e]?.maxVisionImageSizeKB;
}
function kn(e = M) {
  return Ke(e) !== void 0 || _e(e) !== void 0 || Re(e) !== void 0;
}
function ke(e) {
  return e * 1024 * 1024;
}
function Un(e) {
  if (x(e)) return "framer";
  switch (e) {
    case "anthropic/claude-haiku-4.5":
    case "anthropic/claude-sonnet-4.5":
    case "anthropic/claude-sonnet-4.6":
    case "anthropic/claude-sonnet-5":
    case "anthropic/claude-opus-4.5":
    case "anthropic/claude-opus-4.6":
    case "anthropic/claude-opus-4.7":
    case "anthropic/claude-opus-4.8":
    case "anthropic/claude-opus-5":
    case "anthropic/claude-fable-5":
      return "anthropic";
    case "google/gemini-2.0-flash-001":
    case "google/gemini-2.5-flash":
    case "google/gemini-2.5-flash-lite":
    case "google/gemini-2.5-pro":
    case "google/gemini-3-flash-preview":
    case "google/gemini-3.1-pro-preview-customtools":
    case "google/gemini-3.1-flash-lite-preview":
    case "google/gemini-3.5-flash":
    case "google/gemini-3.7-flash":
      return "google";
    case "qwen/qwen3.6-flash":
    case "qwen/qwen3-vl-235b-a22b-instruct":
      return "qwen";
    case "deepseek/deepseek-v4-pro":
    case "deepseek/deepseek-v4-flash":
      return "deepseek";
    case "x-ai/grok-build-0.1":
      return "x-ai";
    case "moonshotai/Kimi-K2.5":
    case "moonshotai/Kimi-K2.6":
    case "moonshotai/Kimi-K2.7-Code":
    case "moonshotai/kimi-k3":
      return "moonshotai";
    case "meta/muse-spark-1.1":
      return "meta";
    case "openai/gpt-3.5-turbo-1106":
    case "openai/gpt-4":
    case "openai/gpt-4o-2024-08-06":
    case "openai/gpt-4o-mini-2024-07-18":
    case "openai/gpt-4.1":
    case "openai/gpt-5.1":
    case "openai/gpt-5.2":
    case "openai/gpt-5.2-codex":
    case "openai/gpt-5.1-codex-mini":
    case "openai/gpt-5.3-codex":
    case "openai/gpt-5.4":
    case "openai/gpt-5.5":
    case "openai/gpt-5.6-sol":
    case "openai/gpt-5.6-terra":
    case "openai/gpt-5.6-luna":
    case "openai/gpt-5.4-mini":
    case "openai/gpt-oss-120b":
    case "openai/gpt-oss-20b":
      return "openai";
    default:
      f(e, "Model must have a provider specified.");
  }
}
var $n = ".ttf,.otf,.woff,.woff2";
var Nn = {
  variable: "Variable",
  100: "Thin",
  200: "Extra Light",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "Semibold",
  700: "Bold",
  800: "Extra Bold",
  900: "Black",
};
function jn(e) {
  return !e.mimeType.startsWith("font/") || e.properties?.kind !== "font" || !e.properties.font
    ? !1
    : "fontFamily" in e.properties.font;
}
var Ue = /[.!?…]+$/u;
function le(e) {
  return e.replace(Ue, "");
}
var $ = 1e3 * 1024,
  De = 150,
  D = De * $;
function $e(e) {
  return e * $;
}
async function Yn({
  endpoint: e,
  fieldName: n,
  file: t,
  icon: a,
  onToast: m,
  customMaxSize: h,
  onExceedsCustomMaxSize: o,
  getErrorMessage: p,
}) {
  let g = `upload${Math.random()}`,
    F = h ? $e(h) : D;
  if (t.size > F) {
    if (F < D && o) o(t.size);
    else {
      let C = new Intl.NumberFormat("en", { style: "unit", unit: "megabyte" }).format(h ?? D / $);
      m({
        type: "add",
        key: g,
        variant: "error",
        primaryText: "File exceeds",
        secondaryText: `limit of ${C}.`,
        duration: 1e4,
        icon: "error",
        moveToTop: !0,
      });
    }
    return null;
  }
  let S = 0,
    N = !1,
    b = !1,
    j = 95,
    ce = 100 / j;
  try {
    let C = await q(e, { [n]: t }, (v) => {
      if (b) return;
      let T = Math.round(v * j);
      if (T === S) return;
      S = T;
      let y = Math.round(S * ce * 0.95);
      (!N && y >= 90) ||
        ((N = !0),
        m({
          type: "add",
          key: g,
          variant: "progress",
          icon: a,
          text: `Uploading ${t.name}\u2026 ${y}%`,
          duration: 1 / 0,
          showCloseButton: "never",
        }));
    });
    return (
      (b = !0),
      m({
        type: "add",
        key: g,
        variant: "success",
        primaryText: t.name,
        secondaryText: "has been uploaded.",
        duration: 1e4,
        icon: "success",
        moveToTop: !0,
      }),
      C
    );
  } catch (C) {
    b = !0;
    let v = C instanceof Error ? (p?.(C) ?? C.message) : String(C),
      T = le(v.trim()),
      y = T ? `${T}.` : "Please try again.";
    return (
      m({
        type: "add",
        key: g,
        variant: "error",
        primaryText: "Upload error.",
        secondaryText: y,
        duration: 3e4,
        icon: "error",
        moveToTop: !0,
      }),
      null
    );
  }
}
var ue = {
  locale: "Locale",
  advancedAnalytics: "Convert",
  customProxySetup: "Advanced Hosting",
  bandwidth: "Bandwidth",
  pages: "Pages",
  cmsCollections: "CMS Collections",
  cmsItems: "CMS Items",
};
function et(e) {
  return e === "advancedAnalytics" || e === "customProxySetup";
}
var nt = (e) => ue[e];
function tt(e) {
  return e ? e in ue : !1;
}
var de = { aiCredits: "Monthly Credits", contentEditors: "Content Editor Seat" };
function at(e) {
  return de[e];
}
function ot(e) {
  return e ? e in de : !1;
}
function it(e) {
  return e === "month" ? "content_editors_monthly" : "content_editors_yearly";
}
function st(e) {
  switch (e) {
    case "aiCredits":
      return !1;
    case "contentEditors":
      return !0;
    default:
      f(e);
  }
}
export {
  et as a,
  nt as b,
  tt as c,
  at as d,
  ot as e,
  it as f,
  st as g,
  Z as h,
  He as i,
  Ye as j,
  Xe as k,
  qe as l,
  Ze as m,
  fe as n,
  r as o,
  tn as p,
  an as q,
  ne as r,
  Ce as s,
  on as t,
  dn as u,
  x as v,
  cn as w,
  mn as x,
  K as y,
  pn as z,
  ie as A,
  Ge as B,
  Mn as C,
  xn as D,
  Sn as E,
  yn as F,
  On as G,
  Le as H,
  Ln as I,
  wn as J,
  Fn as K,
  bn as L,
  vn as M,
  Ae as N,
  An as O,
  In as P,
  Ie as Q,
  En as R,
  Bn as S,
  Vn as T,
  Ee as U,
  Kn as V,
  _n as W,
  Rn as X,
  se as Y,
  re as Z,
  U as _,
  Ke as $,
  _e as aa,
  Re as ba,
  kn as ca,
  Un as da,
  le as ea,
  $ as fa,
  De as ga,
  Yn as ha,
  $n as ia,
  Nn as ja,
  jn as ka,
};
//# sourceMappingURL=chunk-P3M2JHXY.mjs.map
