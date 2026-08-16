import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  L as n,
  M as r,
  N as i,
  O as a,
  P as o,
  R as s,
  S as c,
  d as l,
  g as u,
  h as d,
  i as f,
  m as p,
  n as m,
  o as h,
  r as g,
  t as _,
  v,
  w as y,
  z as b,
} from "./react.Dfbt0i5D.mjs";
import {
  B as x,
  G as S,
  H as C,
  J as w,
  K as T,
  L as E,
  R as D,
  W as O,
  Z as k,
  a as A,
  at as j,
  c as M,
  f as N,
  ht as P,
  p as F,
  pt as I,
  tt as L,
  u as R,
  z,
} from "./framer.tN_KIwaJ.mjs";
async function B({ routeId: e, pathVariables: n, localeId: s, collectionItemId: d }) {
  let p = U[e].page.preload();
  T({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    privateRouterReplaceState: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let m = l(N, {
    children: l(M, {
      children: l(F, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: n,
        routes: U,
        collectionUtils: G,
        framerSiteId: K,
        notFoundPage: x(() => import(`./shared-lib.BUwDLvum.mjs`).then((e) => (e.i(), e.r))),
        isReducedMotion: void 0,
        localeId: s,
        locales: W,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://neat-card-928524.framer.app`,
        EditorBar:
          b === void 0
            ? void 0
            : (() => {
                if (J) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return x(async () => {
                  b.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: k, useLocaleInfo: L, useRouter: j },
                    react: {
                      createElement: l,
                      Fragment: o,
                      memo: u,
                      useCallback: r,
                      useEffect: i,
                      useRef: a,
                      useState: t,
                      useLayoutEffect: c,
                    },
                    "react-dom": { createPortal: f },
                  };
                  let { createEditorBar: e } = await import(`init.mjs`);
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        loadSnippetsModule: new R(
          () => import(`./aohXcfCEH7eLshUz3Ru8hwERbjwVtxq5cCDnwgn579k.Tqrf3s6G.mjs`)
        ),
        initialCollectionItemId: d,
      }),
    }),
    value: { routes: {} },
  });
  return (await p, m);
}
function V() {
  q && b.__framer_events.push(arguments);
}
async function H(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || b.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    V(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = O(U, r)));
    else {
      O(U, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = E(U, decodeURIComponent(location.pathname), !0, W);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = B({ routeId: r, localeId: i, pathVariables: a, collectionItemId: s?.collectionItemId });
    b !== void 0 &&
      (async () => {
        let e = U[r],
          t = W.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && G) {
          let r = await G[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          b.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: K,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: b.location.href,
              hostname: b.location.hostname || null,
              pathname: b.location.pathname || null,
              hash: b.location.hash || null,
              search: b.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await P({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let l = await c;
    e
      ? (I(`framer-rewrite-breakpoints`, () => {
          (S(o), b.__framer_onRewriteBreakpoints?.(o));
        }),
        (J ? (e) => e() : v)(() => {
          (C(), w(), _(t, l, { onRecoverableError: n }));
        }))
      : g(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var U, W, G, K, q, J;
e(() => {
  if (
    (n(),
    z(),
    y(),
    h(),
    m(),
    (U = {
      augiA20Il: {
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
        page: x(() => import(`./KiybldLxeQVyln6kU9bFoGSUcplsT24ROHhgVShWWi8.Nw92m_7Z.mjs`)),
        path: `/`,
      },
    }),
    (W = [{ code: `es`, id: `default`, name: `Spanish`, slug: ``, textDirection: `ltr` }]),
    (G = {}),
    (K = `f769c055cb2858335e5050fd855b3f5e1fbed846717f3b135485d609f800f3b2`),
    (q = typeof document < `u`),
    (J = q && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent)),
    q)
  ) {
    ((b.__framer_importFromPackage = (e, t) => () =>
      l(A, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (b.__framer_events = b.__framer_events || []),
      D());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? H(!0, e) : H(!1, e);
  }
  (function () {
    q &&
      v(() => {
        _(
          document.getElementById(`__framer-badge-container`),
          l(d, {}, l(p(() => import(`./shared-lib.BUwDLvum.mjs`).then((e) => (e.n(), e.t)))))
        );
      });
  })();
})();
export { B as getPageRoot };
//# sourceMappingURL=script_main.BE0lUbON.mjs.map
