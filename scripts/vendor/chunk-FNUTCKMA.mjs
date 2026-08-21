import {
  $ as ks,
  $a as Aa,
  $b as oc,
  $c as Ac,
  A as os,
  Aa as ta,
  Ab as Mn,
  Ac as ft,
  Ad as $n,
  B as ss,
  Ba as ra,
  Bb as _n,
  Bc as pt,
  Bd as ed,
  C as as,
  Ca as na,
  Cb as Dn,
  Cc as mt,
  Cd as td,
  D as cs,
  Da as ia,
  Db as Ba,
  Dc as yt,
  Dd as pe,
  E as ds,
  Ea as oa,
  Eb as za,
  Ec as gt,
  F as xe,
  Fa as sa,
  Fb as Pa,
  Fc as bt,
  G as us,
  Ga as aa,
  Gb as La,
  Gc as dc,
  H as hn,
  Ha as ca,
  Hb as qa,
  Hc as uc,
  I as fn,
  Ia as da,
  Ib as Ka,
  Ic as lc,
  J as ls,
  Ja as ua,
  Jb as $a,
  Jc as hc,
  K as hs,
  Ka as la,
  Kb as Ua,
  Kc as fc,
  L as fs,
  La as ha,
  Lb as Fa,
  Lc as pc,
  M as ps,
  Ma as fa,
  Mb as Ha,
  Mc as mc,
  N as ms,
  Na as pa,
  Nb as Va,
  Nc as yc,
  O as ys,
  Oa as ma,
  Ob as ja,
  Oc as It,
  P as gs,
  Pa as ya,
  Pb as Za,
  Pc as gc,
  Q as bs,
  Qa as ga,
  Qb as Ga,
  Qc as qn,
  R as Is,
  Ra as ba,
  Rb as Wa,
  Rc as bc,
  S as ws,
  Sa as Ia,
  Sb as Ja,
  Sc as Ic,
  T as Ss,
  Ta as wa,
  Tb as Ya,
  Tc as wc,
  U as vs,
  Ua as Sa,
  Ub as Xa,
  Uc as Sc,
  V as xs,
  Va as va,
  Vb as Qa,
  Vc as vc,
  W as Cs,
  Wa as xa,
  Wb as ec,
  Wc as xc,
  X as Ns,
  Xa as Ca,
  Xb as tc,
  Xc as Cc,
  Y as Rs,
  Ya as Na,
  Yb as rc,
  Yc as Nc,
  Z as Os,
  Za as Ra,
  Zb as nc,
  Zc as Rc,
  _ as As,
  _a as Oa,
  _b as ic,
  _c as Oc,
  a as Zo,
  aa as Ts,
  ab as ka,
  ac as sc,
  ad as kc,
  b as y,
  ba as Ms,
  bb as Ta,
  bc as ac,
  bd as Tc,
  c as un,
  ca as _s,
  cb as Ma,
  cc,
  cd as Mc,
  d as Go,
  da as Ds,
  db as ne,
  dc as le,
  dd as _c,
  e as ue,
  ea as Es,
  eb as _a,
  ec as X,
  ed as Dc,
  f as ln,
  fa as Bs,
  fb as Da,
  fc as he,
  fd as Ec,
  ga as zs,
  gb as pn,
  gc as H,
  gd as Bc,
  h as ot,
  ha as Ps,
  hb as ir,
  hc as En,
  hd as zc,
  ia as Ls,
  ib as mn,
  ic as Bn,
  id as Pc,
  j as v,
  ja as qs,
  jb as yn,
  jc as zn,
  jd as Lc,
  k as Wo,
  ka as Ks,
  kb as gn,
  kc as Pn,
  kd as qc,
  l as rr,
  la as $s,
  lb as bn,
  lc as Ce,
  ld as Kc,
  m as nr,
  ma as Us,
  mb as or,
  mc as Ne,
  md as $c,
  n as Jo,
  na as Fs,
  nb as In,
  nc as ie,
  nd as Uc,
  o as Yo,
  oa as Hs,
  ob as wn,
  oc as Pe,
  od as Kn,
  p as Xo,
  pa as Vs,
  pb as Sn,
  pc as Le,
  pd as Fc,
  qa as js,
  qb as vn,
  qc as fe,
  qd as Hc,
  r as Qo,
  ra as Zs,
  rb as xn,
  rc as qe,
  rd as Vc,
  sa as Gs,
  sb as Cn,
  sc as st,
  sd as jc,
  t as es,
  ta as Ws,
  tb as Nn,
  tc as at,
  td as Zc,
  ua as Js,
  ub as Rn,
  uc as ct,
  ud as Gc,
  v as ts,
  vb as On,
  vc as dt,
  vd as Wc,
  wa as Ys,
  wb as Ea,
  wc as ut,
  wd as Jc,
  x as rs,
  xa as Xs,
  xb as An,
  xc as lt,
  xd as Yc,
  y as ns,
  ya as Qs,
  yb as kn,
  yc as Ln,
  yd as Xc,
  z as is,
  za as ea,
  zb as Tn,
  zc as ht,
  zd as Qc,
} from "chunk-7GKAI4PF.mjs";
import {
  a as I,
  b as ze,
  c as er,
  d as de,
  e as re,
  f as ve,
  h as tr,
  i as an,
  j as Vo,
  k as cn,
  m as dn,
  n as jo,
} from "chunk-M5XSLRLD.mjs";
import { b as Se, c as Fo, ca as Ho } from "chunk-FCG35XJJ.mjs";
import { b as l } from "chunk-4JY5UMT2.mjs";
import { d as it } from "chunk-WLHSDIGQ.mjs";
var rd = [1, 128, 16384, 2097152, 268435456, 34359738368, 4398046511104, 562949953421312],
  M = class {
    constructor(e) {
      this.buffer = e;
      this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
    }
    buffer;
    view;
    decoder = new TextDecoder();
    byteOffset = 0;
    align(e) {
      let t = (e - (this.byteOffset % e)) % e;
      this.byteOffset += t;
    }
    endOfFile() {
      return this.byteOffset >= this.buffer.byteLength;
    }
    readUint8() {
      let e = this.view.getUint8(this.byteOffset);
      return ((this.byteOffset += 1), e);
    }
    readUint16() {
      let e = this.view.getUint16(this.byteOffset, !0);
      return ((this.byteOffset += 2), e);
    }
    readUint32() {
      let e = this.view.getUint32(this.byteOffset, !0);
      return ((this.byteOffset += 4), e);
    }
    readFloat64() {
      let e = this.view.getFloat64(this.byteOffset, !0);
      return ((this.byteOffset += 8), e);
    }
    readVarUint() {
      let e = this.buffer,
        t = this.byteOffset,
        n = 0,
        i = 0;
      for (;;) {
        if (t >= e.length) throw new Error("VarUint truncated");
        let o = e[t++];
        if (((n += (o & 127) * rd[i]), (o & 128) === 0)) break;
        if (((i += 1), i >= rd.length)) throw new Error("VarUint is too big");
      }
      return ((this.byteOffset = t), n);
    }
    readString() {
      let e = this.readVarUint(),
        t = this.buffer.subarray(this.byteOffset, this.byteOffset + e);
      return ((this.byteOffset += e), this.decoder.decode(t));
    }
    readBytes(e) {
      let t = this.buffer.subarray(this.byteOffset, this.byteOffset + e);
      return ((this.byteOffset += e), t);
    }
    readTypedArray(e) {
      let t = this.readVarUint(),
        n = e.BYTES_PER_ELEMENT;
      this.align(n);
      let i = this.byteOffset + this.buffer.byteOffset,
        o = t * n;
      if (i % n !== 0) {
        let s = new ArrayBuffer(o);
        return (
          new Uint8Array(s).set(new Uint8Array(this.buffer.buffer, i, o)),
          (this.byteOffset += o),
          new e(s, 0, t)
        );
      }
      return ((this.byteOffset += o), new e(this.buffer.buffer, i, t));
    }
  };
var ee = 1024 * 1024,
  z = class {
    encoder = new TextEncoder();
    alignmentOrigin = 0;
    chunks = [new Uint8Array(ee)];
    scratch = new ArrayBuffer(8);
    scratchView = new DataView(this.scratch);
    byteOffset = 0;
    align(e) {
      let t = this.byteOffset - this.alignmentOrigin,
        n = (e - (t % e)) % e;
      this.writePadding(n);
    }
    withAlignmentOrigin(e, t) {
      let n = this.alignmentOrigin;
      this.alignmentOrigin = e;
      try {
        return t();
      } finally {
        this.alignmentOrigin = n;
      }
    }
    writeUint8(e) {
      this.remainingInCurrentChunk() === 0 && this.addChunk();
      let t = Math.floor(this.byteOffset / ee);
      ((this.chunks[t][this.byteOffset % ee] = e), (this.byteOffset += 1));
    }
    writeUint16(e) {
      (this.scratchView.setUint16(0, e, !0), this.writeScratch(2));
    }
    writeUint32(e) {
      (this.scratchView.setUint32(0, e, !0), this.writeScratch(4));
    }
    writeFloat64(e) {
      (this.scratchView.setFloat64(0, e, !0), this.writeScratch(8));
    }
    writeFloat64At(e, t) {
      (this.scratchView.setFloat64(0, t, !0),
        this.writeBytesAt(e, new Uint8Array(this.scratch, 0, 8)));
    }
    writeVarUint(e) {
      let t = e;
      for (; t >= 128; ) (this.writeUint8((t % 128) | 128), (t = Math.floor(t / 128)));
      this.writeUint8(t);
    }
    static paddedVarUintWidth = 8;
    writePaddedVarUint(e) {
      this.writeBytes(nd(e));
    }
    writePaddedVarUintAt(e, t) {
      this.writeBytesAt(e, nd(t));
    }
    writeString(e) {
      let t = this.encoder.encode(e);
      (this.writeVarUint(t.length), this.writeBytes(t));
    }
    writeTypedArray(e, t = e.length) {
      this.writeVarUint(t);
      let n = this.preallocateTypedArray(e.BYTES_PER_ELEMENT, t),
        i = new Uint8Array(e.buffer, e.byteOffset, n);
      this.writeBytes(i);
    }
    preallocateTypedArray(e, t) {
      return (this.align(e), t * e);
    }
    writeBytes(e) {
      let t = 0;
      for (; t < e.length; ) {
        this.remainingInCurrentChunk() === 0 && this.addChunk();
        let n = this.currentChunk(),
          i = this.currentChunkOffset(),
          o = Math.min(e.length - t, n.length - i);
        (n.set(e.subarray(t, t + o), i), (t += o), (this.byteOffset += o));
      }
    }
    getBuffer() {
      let e = new Uint8Array(this.byteOffset),
        t = 0;
      for (let n of this.getWrittenChunks()) (e.set(n, t), (t += n.length));
      return e;
    }
    async writeToStream(e) {
      for (let t of this.getWrittenChunks())
        e.write(t) || (await new Promise((n) => e.once("drain", n)));
      return this.byteOffset;
    }
    writeScratch(e) {
      this.writeBytes(new Uint8Array(this.scratch, 0, e));
    }
    writeBytesAt(e, t) {
      let n = e,
        i = 0;
      for (; i < t.length; ) {
        let { chunk: o, chunkIndex: s } = this.getChunk(n),
          a = s * ee,
          c = n - a,
          d = Math.min(t.length - i, o.length - c);
        (o.set(t.subarray(i, i + d), c), (i += d), (n += d));
      }
    }
    writePadding(e) {
      for (; e > 0; ) {
        this.remainingInCurrentChunk() === 0 && this.addChunk();
        let t = Math.min(e, this.remainingInCurrentChunk());
        ((this.byteOffset += t), (e -= t));
      }
    }
    getWrittenChunks() {
      return this.chunks
        .map((e, t) => {
          let n = t * ee,
            i = Math.min(e.length, Math.max(0, this.byteOffset - n));
          return e.subarray(0, i);
        })
        .filter((e) => e.length > 0);
    }
    currentChunk() {
      return this.getChunk(this.byteOffset).chunk;
    }
    currentChunkOffset() {
      return this.byteOffset % ee;
    }
    remainingInCurrentChunk() {
      return this.byteOffset === this.chunks.length * ee ? 0 : ee - this.currentChunkOffset();
    }
    addChunk() {
      this.chunks.push(new Uint8Array(ee));
    }
    getChunk(e) {
      let t = Math.floor(e / ee),
        n = this.chunks[t];
      if (n) return { chunk: n, chunkIndex: t };
      throw new Error(`Invalid byte offset: ${e}`);
    }
  };
function nd(r) {
  if (!Number.isSafeInteger(r) || r < 0)
    throw new Error(`padded varint requires a non-negative safe integer, got ${r}`);
  let e = z.paddedVarUintWidth,
    t = new Uint8Array(e),
    n = r;
  for (let i = 0; i < e; ++i) {
    let o = i === e - 1;
    ((t[i] = (n % 128) | (o ? 0 : 128)), (n = Math.floor(n / 128)));
  }
  return (l(n === 0, "value doesn't fit in bytes"), t);
}
function wt(r) {
  if (r === Uint8Array) return "U8";
  if (r === Uint16Array) return "U16";
  if (r === Uint32Array) return "U32";
  if (r === Float64Array) return "F64";
  throw new Error("Invalid array name");
}
var m = Symbol("deleted"),
  P = Symbol("keep"),
  St = Symbol("does-not-exist"),
  w = Symbol("inherited"),
  O = "$keep",
  _ = "$deleted",
  sr = new Map([
    [void 0, "undefined"],
    [m, "Symbol(deleted)"],
    [P, "Symbol(keep)"],
    [w, "Symbol(inherited)"],
  ]);
function k(r) {
  return sr.has(r);
}
var Un = "__$$framerCrdtNativeField$$__",
  Hl = new Map([...sr].map(([r, e]) => [e, r]));
function N(r) {
  return typeof r == "object" && r !== null && Un in r;
}
function A(r) {
  return { [Un]: sr.get(r) };
}
function R(r) {
  return Hl.get(r[Un]);
}
var Vl = ["client", "seq", "id", "key", "value", "user"],
  Fn = class {
    encode(e, t) {
      let n = e.main;
      for (let i of Vl) {
        let o = n.columns[i];
        (t.writeString(i), t.writeString(o.type), o.serialize(t));
      }
    }
    decode(e, t) {
      let n = e.main;
      for (; !t.endOfFile(); ) {
        let i = t.readString(),
          o = n.columns[i];
        l(o, () => `Column ${i} not found`);
        let s = t.readString();
        (l(s === o.type, () => `Column type does not match: ${s} (actual) != ${o.type} (expected)`),
          o.deserialize(t));
      }
    }
    fromSerializableRow(e) {
      let t = N(e.value) ? R(e.value) : e.value;
      return {
        client: e.client,
        seq: e.seq,
        id: e.id,
        key: e.key,
        value: t,
        user: e.user,
        batch: 0,
      };
    }
    toSerializableRow(e) {
      let t = e.value;
      return (
        k(t) && (t = A(t)),
        { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user }
      );
    }
  },
  id = { description: "Sets up migration with initial codec", migrate() {}, codec: new Fn() };
var ar = "$deleted",
  Hn = "$keep_value";
function jl(r) {
  let e = r.main.columns,
    t = new Set(),
    n = Zl(e);
  for (let i = 0; i < n.length; i++) {
    let o = n[i],
      s = e.key.get(o),
      a = e.id.get(o),
      c = e.client.get(o);
    if (s === "parentid") {
      let h = e.value.get(o);
      if (h === null) {
        e.id._set(o, ar);
        continue;
      }
      if ((l(typeof h == "string", () => `parentid is not a string for row: ${o}`), Vn(h)))
        continue;
      let f = new Map(),
        p;
      for (let b = i + 1; b < n.length; b++) {
        let x = n[b];
        if (e.client.get(x) !== c) continue;
        let T = e.seq.get(x);
        if (p !== void 0 && T > p) break;
        let B = e.key.get(x),
          U = e.id.get(x),
          ce = e.value.get(x);
        if (t.has(x) || typeof B != "number" || U !== `${h}.children` || ce === ar || ce === Hn)
          continue;
        p === void 0 && (p = T);
        let we = sd(ce);
        (l(we, () => `should be a valid object reference: ${JSON.stringify(ce)}`),
          we === a ? e.value._set(o, od(h, B)) : f.set(we, B),
          t.add(x));
      }
      for (let b of f.keys()) {
        let x;
        for (let D = i + 1; D < n.length; D++) {
          let T = n[D];
          if (e.client.get(T) !== c) continue;
          let U = e.id.get(T),
            ce = e.key.get(T),
            we = e.value.get(T);
          if (!(U !== b || ce !== "parentid" || we !== h)) {
            if (Vn(we)) break;
            x = T;
            break;
          }
        }
        (l(x !== void 0, () => `failed to find parentid row for ${b}`),
          e.value._set(x, od(h, f.get(b))));
      }
      continue;
    }
    if (s === "children") {
      e.value._set(o, Hn);
      continue;
    }
    let d = e.value.get(o);
    if (a.endsWith(".children") && d === Hn) {
      t.add(o);
      continue;
    }
    if (a.endsWith(".children") && d === ar) {
      t.add(o);
      continue;
    }
    let u = sd(d);
    if (!t.has(o) && a.endsWith(".children") && u && typeof s == "number") {
      let h = e.seq.get(o),
        f = !1;
      for (let p = i + 1; p < n.length; p++) {
        let b = n[p];
        if (e.client.get(b) !== c) continue;
        if (e.seq.get(b) !== h) break;
        let T = e.key.get(b),
          B = e.id.get(b);
        if (T !== "parentid" || B !== u) continue;
        let U = e.value.get(b);
        if (
          !Vn(U) &&
          (l(typeof U == "string", () => `expecting value to be a string for rowIdx ${b}`),
          a.startsWith(U))
        ) {
          ((f = !0), e.value._set(b, `${U}@${s}`), t.add(o));
          break;
        }
      }
      if (!f) {
        let p = a.split(".", 2)[0];
        (e.id._set(o, u), e.key._set(o, "parentid"), e.value._set(o, `${p}@${s}`));
      }
    }
  }
  for (let i of t) e.id.get(i).endsWith(".children") && e.id._set(i, ar);
}
var ad = {
  description: "Migrates multi-seq rows for hierarchy changes to `{parentid}@{position}`",
  migrate: jl,
};
function Zl(r) {
  let e = [];
  for (let t = 0; t < r.client.length; t++) {
    let n = r.key.get(t);
    if (n === "parentid" || n === "children") {
      e.push(t);
      continue;
    }
    r.id.get(t).endsWith(".children") && e.push(t);
  }
  return (
    e.sort((t, n) => {
      let i = r.seq.get(t),
        o = r.seq.get(n);
      return i === o ? r.client.get(t) - r.client.get(n) : i - o;
    }),
    e
  );
}
function Vn(r) {
  return typeof r == "string" && r.split("@").length === 2;
}
function od(r, e) {
  return `${r}@${e.toString()}`;
}
function sd(r) {
  if (typeof r == "string" && r.startsWith("obj(")) return r.slice(4, -1);
}
var Re = class {
  constructor(e, t, n) {
    this.capacity = e;
    n
      ? ((this.buffer = n.buffer),
        (this.length = n.length),
        l(
          this.buffer.length === this.capacity,
          () => `Buffer capacity mismatch: ${this.buffer.length} != ${this.capacity}`
        ))
      : (this.buffer = new t(e));
  }
  capacity;
  buffer;
  length = 0;
  push(e) {
    ((this.buffer[this.length] = e), (this.length += 1));
  }
};
var Gl = 2 ** 17,
  ye = class {
    constructor(e, t = Gl) {
      this.arrayConstructor = e;
      this.bucketSize = t;
      (l((t & (t - 1)) === 0, `Bucket size must be a power of 2, got: ${t}`),
        (this.bucketShift = Math.log2(t)),
        (this.bucketMask = t - 1));
    }
    arrayConstructor;
    bucketSize;
    buckets = [];
    _length = 0;
    bucketShift;
    bucketMask;
    get type() {
      return `BucketedColumn(${wt(this.arrayConstructor)})`;
    }
    add(e) {
      let t = this.buckets[this.buckets.length - 1];
      ((!t || t.length >= t.capacity) &&
        ((t = new Re(this.bucketSize, this.arrayConstructor)), this.buckets.push(t)),
        t.push(e));
      let n = this._length;
      return ((this._length += 1), n);
    }
    get(e) {
      l(
        e >= 0 && e < this._length,
        () => `index ${e} out of bounds (column size: ${this._length})`
      );
      let t = e >> this.bucketShift,
        n = e & this.bucketMask,
        i = this.buckets[t];
      return (l(i, "invalid bucket index"), i.buffer[n]);
    }
    _set(e, t) {
      l(
        e >= 0 && e < this._length,
        () => `index ${e} out of bounds (column size: ${this._length})`
      );
      let n = e >> this.bucketShift,
        i = e & this.bucketMask,
        o = this.buckets[n];
      (l(o, "invalid bucket index"), (o.buffer[i] = t));
    }
    get length() {
      return this._length;
    }
    *writeSlices(e) {
      let t = Math.ceil(e / this.bucketSize);
      for (; this.buckets.length < t; )
        this.buckets.push(new Re(this.bucketSize, this.arrayConstructor));
      let n = 0;
      for (let i = 0; i < t; i++) {
        let o = this.buckets[i],
          s = e - n,
          a = s < o.capacity ? s : o.capacity;
        (yield o.buffer.subarray(0, a), (o.length = a), (n += a));
      }
      this._length = e;
    }
    *readSlices() {
      for (let e of this.buckets) yield e.buffer.subarray(0, e.length);
    }
    slice(e, t) {
      (e < 0 && (e = this.length + e),
        t < 0 && (t = this.length + t),
        t > this.length && (t = this.length));
      let n = e >> this.bucketShift,
        i = t >> this.bucketShift,
        o = t - e;
      if (o <= 0) return [];
      let s = Array.from({ length: o }),
        a = 0,
        c = e & this.bucketMask,
        d = this.buckets[n];
      if (n === i) {
        let f = t & this.bucketMask;
        for (let p = c; p < f; ++p) s[a++] = d.buffer[p];
        return s;
      }
      for (let f = c; f < this.bucketSize; ++f) s[a++] = d.buffer[f];
      for (let f = n + 1; f < i; ++f) {
        let p = this.buckets[f];
        for (let b = 0; b < p.length; ++b) s[a++] = p.buffer[b];
      }
      let u = t & this.bucketMask,
        h = this.buckets[i];
      if (h) for (let f = 0; f < u; ++f) s[a++] = h.buffer[f];
      return s;
    }
    serialize(e) {
      (e.writeVarUint(this.length),
        e.preallocateTypedArray(this.arrayConstructor.BYTES_PER_ELEMENT, this.length));
      for (let t of this.buckets)
        e.writeBytes(
          new Uint8Array(
            t.buffer.buffer,
            t.buffer.byteOffset,
            t.length * this.arrayConstructor.BYTES_PER_ELEMENT
          )
        );
    }
    deserialize(e) {
      let t = e.readTypedArray(this.arrayConstructor);
      this._length = t.length;
      let n = 0;
      for (n = 0; n < t.length - this.bucketSize; n += this.bucketSize) {
        let i = t.slice(n, n + this.bucketSize);
        this.buckets.push(
          new Re(this.bucketSize, this.arrayConstructor, { buffer: i, length: i.length })
        );
      }
      if (n < t.length) {
        let i = new Re(this.bucketSize, this.arrayConstructor);
        for (; n < t.length; ++n) i.push(t[n]);
        this.buckets.push(i);
      }
    }
  };
var G = class r {
  constructor(e, t) {
    this.arrayConstructor = e;
    if (((this.indices = new ye(e, t)), e === Uint8Array)) this.maxUniques = 2 ** 8 - 1;
    else if (e === Uint16Array) this.maxUniques = 2 ** 16 - 1;
    else if (e === Uint32Array) this.maxUniques = 2 ** 32 - 1;
    else if (e === Float64Array) this.maxUniques = Number.MAX_SAFE_INTEGER;
    else throw new Error(`Unsupported array constructor: ${e.name}`);
  }
  arrayConstructor;
  uniques = [];
  maxUniques;
  indices;
  count = 0;
  lookup;
  cursor = 0;
  get type() {
    return `LazyNormalizedBucketedColumn(ref: ${wt(this.arrayConstructor)})`;
  }
  static withBuckets({ buffer: e, size: t }) {
    return { create: () => new r(e, t) };
  }
  hydrateThrough(e) {
    for (this.lookup || (this.lookup = new Map()); this.cursor <= e; ++this.cursor) {
      let t = this.uniques[this.cursor];
      this.lookup.set(t, this.cursor);
    }
  }
  indexOfExisting(e) {
    if (this.lookup?.has(e)) return this.lookup.get(e);
    for (; this.cursor < this.uniques.length; ++this.cursor) {
      let t = this.uniques[this.cursor];
      if (((this.lookup ??= new Map()), this.lookup.set(t, this.cursor), Object.is(t, e)))
        return this.cursor;
    }
  }
  addUnique(e) {
    l(this.uniques.length < this.maxUniques, "limit reached for unique values");
    let t = this.uniques.length;
    return (
      this.uniques.push(e),
      (this.lookup ??= new Map()),
      this.lookup.set(e, t),
      (this.cursor = this.uniques.length),
      t
    );
  }
  add(e) {
    let t = this.indexOfExisting(e);
    t === void 0 && (t = this.addUnique(e));
    let n = this.count;
    return (this.indices.add(t), (this.count = n + 1), n);
  }
  get(e) {
    l(e >= 0 && e < this.count, "index out of bounds");
    let t = this.indices.get(e);
    return this.uniques[t];
  }
  _set(e, t) {
    l(e >= 0 && e < this.count, "index out of bounds");
    let n = this.indexOfExisting(t);
    (n === void 0 && (n = this.addUnique(t)), this.indices._set(e, n));
  }
  slice(e, t) {
    let n = Math.max(0, t - e),
      i = Array.from({ length: n }),
      o = this.indices.slice(e, t);
    for (let s = 0; s < n; ++s) i[s] = this.uniques[o[s]];
    return i;
  }
  get length() {
    return this.count;
  }
  serialize(e) {
    (e.writeString(JSON.stringify(this.uniques, (t, n) => (k(n) ? A(n) : n))),
      this.indices.serialize(e));
  }
  deserialize(e) {
    this.uniques = JSON.parse(e.readString());
    for (let t = 0; t < this.uniques.length; ++t) {
      let n = this.uniques[t];
      if (N(n)) {
        let i = R(n);
        this.uniques[t] = i;
      }
    }
    (this.indices.deserialize(e),
      (this.count = this.indices.length),
      (this.lookup = void 0),
      (this.cursor = 0));
  }
  rehydrate() {
    this.cursor < this.uniques.length && this.hydrateThrough(this.uniques.length - 1);
  }
  releaseLookup() {
    ((this.lookup = void 0), (this.cursor = 0));
  }
};
var jn = (1 << 29) - 24,
  cd = new TextEncoder(),
  ud = new TextDecoder();
function ld(r, e) {
  return Array.isArray(e) ? e.map((t) => (k(t) ? A(t) : t)) : k(e) ? A(e) : e;
}
function hd(r) {
  let e = typeof r;
  return e === "string" || e === "number" || e === "boolean" || r === null;
}
function Wl(r) {
  for (let e = 0; e < r.length; ++e) if (!hd(r[e])) return !1;
  return !0;
}
function Jl(r) {
  return hd(r) ? JSON.stringify(r) : (JSON.stringify(r, ld) ?? "null");
}
function fd(r) {
  if (Array.isArray(r)) {
    for (let e = 0; e < r.length; ++e) N(r[e]) && (r[e] = R(r[e]));
    return r;
  }
  return N(r) ? R(r) : r;
}
var Zn = 91,
  Oe = 93,
  Yl = 123,
  Xl = 125,
  pd = 34,
  Ql = 92,
  cr = 44,
  eh = 64 * 1024 * 1024,
  th = 16 * 1024 * 1024,
  rh = nh() ?? 4 * 1024 * 1024;
function nh() {
  if (typeof process > "u") return;
  let r = Number(process.env.UNIQUES_BATCH_BYTES);
  return Number.isFinite(r) && r > 0 ? Math.min(r, jn - 2) : void 0;
}
function md(r, e, t) {
  if (t && (t?.bodyBytes > jn || (t.mixed && t.bodyBytes >= eh))) {
    dd(r, e);
    return;
  }
  try {
    let n = Wl(e) ? JSON.stringify(e) : JSON.stringify(e, ld);
    r.writeString(n);
  } catch (n) {
    if (n instanceof RangeError) {
      dd(r, e);
      return;
    }
    throw n;
  }
}
function dd(r, e) {
  let t = r.byteOffset;
  r.writePaddedVarUint(0);
  let n = r.byteOffset;
  r.writeUint8(Zn);
  let i = new Uint8Array(64 * 1024);
  for (let o = 0; o < e.length; ++o) {
    o > 0 && r.writeUint8(cr);
    let s = Jl(e[o]),
      a = s.length * 3;
    if (a > th) {
      r.writeBytes(cd.encode(s));
      continue;
    }
    a > i.length && (i = new Uint8Array(a));
    let { written: c } = cd.encodeInto(s, i);
    r.writeBytes(i.subarray(0, c));
  }
  (r.writeUint8(Oe), r.writePaddedVarUintAt(t, r.byteOffset - n));
}
function yd(r, e) {
  let t = r.readVarUint(),
    n = r.readBytes(t);
  if (n.length > jn) return (e && ((e.mixed = void 0), (e.bodyBytes = n.length)), ih(n));
  let i = JSON.parse(ud.decode(n)),
    o = !1;
  for (let s = 0; s < i.length; ++s) {
    let a = i[s];
    (typeof a == "object" && a !== null && (o = !0), (i[s] = fd(a)));
  }
  return (e && ((e.mixed = o), (e.bodyBytes = n.length)), i);
}
function ih(r, e = rh) {
  let t = [],
    n = 0;
  if (((n = vt(r, n)), r[n] !== Zn))
    throw new Error(`uniques array: expected '[' at byte ${n} of ${r.length}`);
  if (((n += 1), (n = vt(r, n)), r[n] === Oe)) n += 1;
  else {
    let i = !1;
    for (; n < r.length; ) {
      let o = n,
        s = n,
        a;
      for (; n < r.length; ) {
        let c = sh(r, n);
        ((s = c), (n = vt(r, c)));
        let d = r[n];
        if (d === cr) {
          if (((a = cr), (n += 1), (n = vt(r, n)), r[n] === Oe))
            throw new Error(`uniques array: unexpected ',' before ']' at byte ${n} of ${r.length}`);
          if (c - o >= e) break;
          continue;
        }
        if (d === Oe) {
          ((a = Oe), (n += 1));
          break;
        }
        throw new Error(`uniques array: expected ',' or ']' at byte ${n} of ${r.length}`);
      }
      if ((oh(t, r, o, s), a === Oe)) {
        i = !0;
        break;
      }
      if (a === void 0) break;
    }
    if (!i) throw new Error(`uniques array: unterminated array (${r.length} bytes)`);
  }
  if (((n = vt(r, n)), n !== r.length))
    throw new Error(`uniques array: unexpected trailing bytes at ${n} of ${r.length}`);
  return t;
}
function oh(r, e, t, n) {
  try {
    let i = "[" + ud.decode(e.subarray(t, n)) + "]",
      o = JSON.parse(i);
    for (let s = 0; s < o.length; ++s) r.push(fd(o[s]));
  } catch (i) {
    throw new Error(`uniques array: invalid element JSON at bytes ${t}-${n} of ${e.length}`, {
      cause: i,
    });
  }
}
function sh(r, e) {
  let t = 0,
    n = e;
  for (; n < r.length; ) {
    switch (r[n]) {
      case pd:
        n = ah(r, n);
        continue;
      case Yl:
      case Zn:
        t += 1;
        break;
      case Xl:
      case Oe:
        if (t === 0) return n;
        t -= 1;
        break;
      case cr:
        if (t === 0) return n;
        break;
      default:
        break;
    }
    n += 1;
  }
  if (t !== 0) throw new Error(`uniques array: unterminated value from byte ${e} of ${r.length}`);
  return r.length;
}
function ah(r, e) {
  let t = e + 1;
  for (;;) {
    let n = r.indexOf(pd, t);
    if (n === -1)
      throw new Error(`uniques array: unterminated string from byte ${e} of ${r.length}`);
    let i = 0;
    for (let o = n - 1; o > e && r[o] === Ql; --o) i += 1;
    if (i % 2 === 0) return n + 1;
    t = n + 1;
  }
}
function vt(r, e) {
  let t = e;
  for (; t < r.length; ) {
    let n = r[t];
    if (n === 32 || n === 9 || n === 10 || n === 13) t += 1;
    else break;
  }
  return t;
}
var V = class {
  uniques = [];
  indices;
  count = 0;
  lookup;
  cursor = 0;
  uniquesHints;
  constructor(e = 1024) {
    this.indices = new Uint32Array(e);
  }
  get type() {
    return "LazyNormalizedColumn";
  }
  ensureCapacity(e) {
    if (e <= this.indices.length) return;
    let t = this.indices.length || 1;
    for (; t < e; ) t <<= 1;
    let n = new Uint32Array(t);
    (n.set(this.indices), (this.indices = n));
  }
  hydrateThrough(e) {
    for (this.lookup || (this.lookup = new Map()); this.cursor <= e; ++this.cursor) {
      let t = this.uniques[this.cursor];
      this.lookup.set(t, this.cursor);
    }
  }
  indexOfExisting(e) {
    let t = this.lookup?.get(e);
    if (t !== void 0) return t;
    for (; this.cursor < this.uniques.length; ++this.cursor) {
      let n = this.uniques[this.cursor];
      if (((this.lookup ??= new Map()), this.lookup.set(n, this.cursor), Object.is(n, e)))
        return this.cursor;
    }
  }
  addUnique(e) {
    let t = this.uniques.length;
    return (
      this.uniques.push(e),
      (this.lookup ??= new Map()),
      this.lookup.set(e, t),
      (this.cursor = this.uniques.length),
      t
    );
  }
  add(e) {
    let t = this.indexOfExisting(e);
    t === void 0 && (t = this.addUnique(e));
    let n = this.count;
    return (this.ensureCapacity(n + 1), (this.indices[n] = t), (this.count = n + 1), n);
  }
  get(e) {
    if (e < 0 || e >= this.count) throw RangeError("index out of bounds");
    return this.uniques[this.indices[e]];
  }
  rowCodes() {
    return this.indices;
  }
  codeOf(e) {
    return this.indexOfExisting(e);
  }
  _set(e, t) {
    if (e < 0 || e >= this.count) throw RangeError("index out of bounds");
    let n = this.indexOfExisting(t);
    (n === void 0 && (n = this.addUnique(t)), (this.indices[e] = n));
  }
  slice(e, t) {
    let n = Math.max(0, t - e),
      i = Array.from({ length: n });
    for (let o = 0; o < n; ++o) i[o] = this.uniques[this.indices[e + o]];
    return i;
  }
  get length() {
    return this.count;
  }
  serialize(e) {
    (md(e, this.uniques, this.uniquesHints),
      e.writeTypedArray(this.indices.subarray(0, this.count)));
  }
  deserialize(e) {
    let t = { mixed: void 0, bodyBytes: 0 };
    ((this.uniques = yd(e, t)), (this.uniquesHints = t));
    let n = e.readTypedArray(Uint32Array);
    ((this.indices = new Uint32Array(n)),
      (this.count = this.indices.length),
      (this.lookup = void 0),
      (this.cursor = 0));
  }
  rehydrate() {
    this.cursor < this.uniques.length && this.hydrateThrough(this.uniques.length - 1);
  }
  releaseLookup() {
    ((this.lookup = void 0), (this.cursor = 0));
  }
};
var gd = "$keep_value",
  bd = "$deleted",
  Id = {
    description: "Replace deleted and keep values with symbols",
    migrate(r) {
      let e = r.main.columns;
      if (e.value instanceof V || e.value instanceof G) {
        let t = e.value.uniques;
        for (let n in t) t[n] === bd ? (t[n] = m) : t[n] === gd && (t[n] = P);
      } else
        for (let t = 0; t < e.length; ++t) {
          let n = e.value.get(t);
          n === bd ? e.value._set(t, m) : n === gd && e.value._set(t, P);
        }
    },
  };
function ch(r) {
  let e = r.main.columns;
  if (e.client instanceof V || e.client instanceof G) {
    let t = e.client.uniques;
    for (let n in t) t[n] = wd(t[n]);
  } else
    for (let t = 0; t < e.length; ++t) {
      let n = e.client.get(t);
      e.client._set(t, wd(n));
    }
}
var Sd = { description: "Migrates row `client` to u32", migrate: ch };
function wd(r) {
  return r >>> 0;
}
var Ke = 62,
  Gn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  vd = {};
for (let r = 0; r < Gn.length; r++) vd[Gn[r]] = r;
function Wn(r, e) {
  if (
    (l(r >= 0, () => `Cannot encode negative number: ${r}`),
    l(Number.isInteger(r), () => `Cannot encode non-integer: ${r}`),
    r === 0)
  )
    return "0".repeat(e);
  let t = [],
    n = r;
  for (; n > 0; ) (t.push(Gn[n % Ke]), (n = Math.floor(n / Ke)));
  let i = t.reverse().join("");
  return (
    l(i.length <= e, () => `Encoded value exceeds width: ${i} from ${r} width ${e}`),
    i.padStart(e, "0")
  );
}
function Jn(r) {
  l(r.length > 0, "Cannot decode empty string");
  let e = 0;
  for (let t = 0; t < r.length; t++) {
    let n = r[t],
      i = vd[n];
    (l(i !== void 0, () => `Invalid base62 character: ${n} in string ${r}`), (e = e * Ke + i));
  }
  return (l(e <= Number.MAX_SAFE_INTEGER, "Decoded number exceeds MAX_SAFE_INTEGER"), e);
}
var Ae = 5,
  xd = 6,
  Yn = Ae + xd;
function dh(r) {
  let e = Wn(r.position, Ae),
    t = Wn(r.client, xd);
  return e + t;
}
function uh(r) {
  l(r.length === Yn, () => `Component string must be ${Yn} chars, got ${r.length}`);
  let e = r.slice(0, Ae),
    t = r.slice(Ae);
  return { position: Jn(e), client: Jn(t) };
}
var Xn = ":";
function ge(r) {
  return r.map(dh).join(Xn);
}
function ke(r) {
  l(r.length > 0, "Position ID is empty");
  let e = r.split(Xn);
  return (l(e.length > 0, "Position ID has no parts"), e.map(uh));
}
function Te(r) {
  if (typeof r != "string" || r.length === 0) return !1;
  let e = r.split(Xn);
  for (let t of e) if (t.length !== Yn) return !1;
  return !0;
}
var lh = 0,
  hh = 62 ** 5,
  fh = 0,
  ph = Number.MAX_SAFE_INTEGER;
function $e(r, e, t) {
  r &&
    e &&
    (l(r <= e, () => `Invalid boundaries: ${r} > ${e}`),
    l(
      r !== e,
      () => `Trying to allocate between equal boundarys (same position, same client): ${r}`
    ));
  let n = r ? ke(r) : [],
    i = e ? ke(e) : [],
    o = mh(n, i, t);
  return ge(o);
}
var Cd;
function mh(r, e, t) {
  let n = [],
    i = 0,
    o = !1;
  for (;;) {
    l(i < 2e3, "Infinite loop");
    let s = i < r.length,
      a = i < e.length,
      c = s ? r[i] : { position: lh, client: fh },
      d = a && !o ? e[i] : { position: hh, client: ph };
    if (d.position - c.position > 1) {
      let u;
      Cd
        ? (u = Cd)
        : e.length === 0
          ? (u = (f, p) => Nd(f, p, 4096, 2))
          : o
            ? (u = (f, p) => Nd(f, p, 8192, 2))
            : (u = yh);
      let h = u(c.position + 1, d.position - 1);
      return (n.push({ position: h, client: t }), n);
    }
    if ((n.push({ ...c }), !o)) {
      let u = c.position < d.position,
        h = a && c.position === d.position && c.client < d.client;
      o = u || h;
    }
    i++;
  }
}
function Nd(r, e, t, n) {
  l(r <= e, () => `Invalid range: ${r} > ${e}`);
  let i = Math.min(e, r + n),
    o = Math.min(e, i + t);
  return Rd(i, o);
}
function yh(r, e) {
  l(r <= e, () => `Invalid range: ${r} > ${e}`);
  let t = Math.floor((r + e) / 2),
    n = Math.min(8, Math.floor((e - r) / 4)),
    i = Math.max(r, t - n),
    o = Math.min(e, t + n);
  return Rd(i, o);
}
function Rd(r, e) {
  let t = e - r + 1;
  return Math.floor(Math.random() * t) + r;
}
var xt = "$deleted",
  bh = "$keep",
  dr = Ke ** Ae - 1;
function Ih(r) {
  let e = r.main.columns;
  (wh(e), Sh(e), vh(e), Nh(e));
}
var Od = {
  description: "Migrates array positions from fraction indices to Logoot-style position ids",
  migrate: Ih,
};
function wh(r) {
  let e = new Set();
  for (let t = 0; t < r.client.length; t++) {
    let n = r.id.get(t);
    if (n === xt) continue;
    let i = r.key.get(t);
    if (i !== "parentid") continue;
    let o = r.value.get(t);
    if (o === m) continue;
    if ((l(typeof o == "string"), o.split("@").length === 1)) {
      r.id._set(t, xt);
      continue;
    }
    let a = r.client.get(t),
      c = r.seq.get(t),
      d = `${n}/${i}/${o}${a}/${c}`;
    if (e.has(d)) {
      r.id._set(t, xt);
      continue;
    }
    e.add(d);
  }
}
function Sh(r) {
  for (let e = 0; e < r.client.length; e++)
    r.key.get(e) !== -1 || r.value.get(e) !== P || r.key._set(e, bh);
}
function vh(r) {
  let e = xh(r);
  for (let [t, n] of e) {
    let i = Array.from(n.keys()).sort((s, a) => s - a),
      o = Math.floor(dr / (i.length + 3));
    l(o > 0, "step must be positive");
    for (let s = 0; s < i.length; s++) {
      let a = (s + 1) * o;
      l(a <= dr, "position exceeds max position");
      let c = i[s],
        d = n.get(c);
      d.sort((h, f) => Ch(r, h, f));
      let u = [];
      for (let h of d) {
        if (r.value.get(h) === m) {
          let p = u.pop();
          (l(p, "expected to have a previous position to delete"), r.key._set(h, p));
          continue;
        }
        let f = ge([{ position: a, client: r.client.get(h) }]);
        (r.key._set(h, f), u.push(f));
      }
    }
  }
}
function xh(r) {
  let e = new Map();
  for (let t = 0; t < r.client.length; t++) {
    let n = r.id.get(t);
    if (n === xt) continue;
    let i = r.key.get(t);
    if (typeof i != "number") continue;
    let o = e.get(n);
    o || ((o = new Map()), e.set(n, o));
    let s = o.get(i);
    (s || ((s = []), o.set(i, s)), s.push(t));
  }
  return e;
}
function Ch(r, e, t) {
  let n = r.seq.get(e),
    i = r.seq.get(t);
  if (n < i) return -1;
  if (n > i) return 1;
  let o = r.client.get(e),
    s = r.client.get(t);
  return o < s ? -1 : o > s ? 1 : 0;
}
function Nh(r) {
  let e = Rh(r);
  for (let [t, n] of e) {
    let i = n.sort((s, a) => Oh(r, s, a)),
      o = Math.floor(dr / (i.length + 3));
    l(o > 0, "step must be positive");
    for (let s = 0; s < i.length; s++) {
      let a = (s + 1) * o;
      l(a <= dr, "position exceeds max position");
      let { rowIdx: c } = i[s];
      Ah(r, c, t, a);
    }
  }
}
function Rh(r) {
  let e = new Map();
  for (let t = 0; t < r.client.length; t++) {
    if (r.id.get(t) === xt || r.key.get(t) !== "parentid") continue;
    let o = r.value.get(t);
    if (o === m) continue;
    l(typeof o == "string");
    let s = o.split("@");
    l(s.length === 2, "invalid hierarchy key");
    let a = s[0],
      c = parseFloat(s[1]),
      d = e.get(a);
    (d || ((d = []), e.set(a, d)), d.push({ rowIdx: t, value: c }));
  }
  return e;
}
function Oh(r, e, t) {
  if (e.value < t.value) return -1;
  if (e.value > t.value) return 1;
  let n = r.seq.get(e.rowIdx),
    i = r.seq.get(t.rowIdx);
  if (n > i) return -1;
  if (n < i) return 1;
  let o = r.client.get(e.rowIdx),
    s = r.client.get(t.rowIdx);
  return o > s ? -1 : o < s ? 1 : 0;
}
function Ah(r, e, t, n) {
  let i = ge([{ position: n, client: r.client.get(e) }]);
  r.value._set(e, `${t}@${i}`);
}
var Ad = 27,
  kd = 2 ** Ad - 1,
  Qn = 1,
  kh = 26,
  Td = 2 ** kh - 1,
  ei = 1,
  ti = 2 ** Ad;
function Ue({ batchNo: r, rowCount: e }) {
  return (
    l(e >= Qn && e <= kd, () => `rowCount out of range: ${e}`),
    l(r >= ei && r <= Td, () => `batchNo out of range: ${r}`),
    l(Number.isSafeInteger(r), () => `batchNo is not a safe integer: ${r}`),
    l(Number.isSafeInteger(e), () => `rowCount is not a safe integer: ${e}`),
    r * ti + e
  );
}
function ur(r) {
  return (
    l(Number.isSafeInteger(r), () => `batchId not safe integer: ${r}`),
    l(r >= 0, () => `batchId is negative: ${r}`),
    Math.floor(r / ti)
  );
}
function ri(r) {
  let e = ur(r);
  return { rowCount: r - e * ti, batchNo: e };
}
var Cm = {
  ROW_COUNT_MIN: Qn,
  ROW_COUNT_MAX: kd,
  BATCH_NO_MIN: ei,
  BATCH_NO_MAX: Td,
  MIN_BATCH_ID: Ue({ batchNo: ei, rowCount: Qn }),
};
var Th = ["client", "seq", "batch", "id", "key", "value", "user"],
  ni = class {
    encode(e, t) {
      let n = e.main;
      for (let i of Th) {
        let o = n.columns[i];
        (t.writeString(i), t.writeString(o.type), o.serialize(t));
      }
    }
    decode(e, t) {
      let n = e.main;
      for (; !t.endOfFile(); ) {
        let i = t.readString(),
          o = n.columns[i];
        l(o, () => `Column ${i} not found`);
        let s = t.readString();
        (l(s === o.type, () => `Column type does not match: ${s} (actual) != ${o.type} (expected)`),
          o.deserialize(t));
      }
    }
    fromSerializableRow(e) {
      let t = N(e.value) ? R(e.value) : e.value;
      return {
        client: e.client,
        seq: e.seq,
        id: e.id,
        key: e.key,
        value: t,
        user: e.user,
        batch: e.batch ?? 0,
      };
    }
    toSerializableRow(e) {
      let t = e.value;
      return (
        k(t) && (t = A(t)),
        {
          client: e.client,
          seq: e.seq,
          id: e.id,
          key: e.key,
          value: t,
          user: e.user,
          batch: e.batch,
        }
      );
    }
  };
function Mh(r) {
  let e = r.main.columns,
    t = new Map();
  for (let o = 0; o < e.client.length; o++) {
    let s = e.client.get(o),
      a = t.get(s);
    a === void 0 ? t.set(s, 1) : t.set(s, a + 1);
  }
  let n = new Map();
  for (let [o, s] of t) n.set(o, Ue({ batchNo: 1, rowCount: s }));
  let i = G.withBuckets({ buffer: Uint32Array }).create();
  for (let o = 0; o < e.client.length; o++) {
    let s = e.client.get(o),
      a = n.get(s);
    i.add(a);
  }
  e.batch = i;
}
var Md = {
  description: "Adds batch column and populates initial value",
  codec: new ni(),
  migrate: Mh,
};
function _h(r) {
  let e = r.main.columns;
  Dh(e);
  let t = new Map();
  for (let n = 0; n < e.length; n++) {
    if (e.id.get(n) === _) continue;
    let o = e.value.get(n);
    if (typeof o != "string" || !o.startsWith("arr(")) continue;
    let s = o.slice(4, -1),
      a = t.get(s);
    if (a) {
      a.referenceRowIdx.push(n);
      continue;
    }
    t.set(s, { itemRowIdxs: [], referenceRowIdx: [n], keepRowIdx: -1, isAtomic: !1 });
  }
  for (let n = 0; n < e.length; n++) {
    let i = e.id.get(n);
    if (!t.has(i)) continue;
    let o = t.get(i);
    if (e.key.get(n) === O) {
      (l(o.keepRowIdx === -1, () => `array has multiple keep rows: ${i}`), (o.keepRowIdx = n));
      continue;
    }
    let a = e.value.get(n);
    if (typeof a == "string" && (a.startsWith("arr(") || a.startsWith("obj("))) {
      l(o.itemRowIdxs.length === 0, () => `array has mixed primitive/reference items: ${i}`);
      continue;
    }
    (!o.isAtomic && a === m) || ((o.isAtomic = !0), o.itemRowIdxs.push(n));
  }
  for (let [n, i] of t) {
    if (!i.isAtomic) continue;
    for (let u of i.referenceRowIdx) e.id._set(u, _);
    i.itemRowIdxs.sort((u, h) => {
      let f = e.seq.get(u),
        p = e.seq.get(h);
      if (f < p) return -1;
      if (f > p) return 1;
      let b = e.client.get(u),
        x = e.client.get(h);
      return b < x ? -1 : b > x ? 1 : 0;
    });
    let o = n.split(".");
    l(o.length >= 2, () => `invalid array reference id: ${n}`);
    let s = o.pop(),
      a = o.join("."),
      c = [],
      d = i.keepRowIdx;
    (l(d !== -1, () => `array reference has no keep row: ${n}`),
      e.id._set(d, a),
      e.key._set(d, s),
      e.value._set(d, []));
    for (let u of i.itemRowIdxs) {
      e.id._set(u, a);
      let h = e.key.get(u),
        f = e.value.get(u);
      if (f === m) {
        let p = c.findIndex((b) => b.key === h);
        p !== -1 && c.splice(p, 1);
      } else {
        let p = c.findIndex((b) => b.key > h);
        p !== -1 ? c.splice(p, 0, { key: h, value: f }) : c.push({ key: h, value: f });
      }
      (e.key._set(u, s),
        e.value._set(
          u,
          c.map(({ value: p }) => p)
        ));
    }
  }
}
function Dh(r) {
  let e = new Set();
  for (let t = 0; t < r.client.length; t++) {
    let n = r.id.get(t);
    if (n === _) continue;
    let i = r.key.get(t),
      o = r.client.get(t),
      s = r.seq.get(t),
      a = r.value.get(t);
    typeof a == "symbol" && (a = a.toString());
    let c = `${n}/${i}/${a}/${o}/${s}`;
    if (e.has(c)) {
      r.id._set(t, _);
      continue;
    }
    e.add(c);
  }
}
var _d = { description: "Migrates arrays of primitives to atomic array values", migrate: _h };
var Dd = "$keep",
  ii = "$deleted";
function Eh(r) {
  let e = r.main.columns,
    t = zh(e),
    n = Ph(e, t);
  for (let [i, o] of n) {
    o.sort((c, d) => Lh(e, c, d));
    let s = new Map(),
      a = new Map();
    for (let c = 0; c < o.length; c++) {
      let d = o[c],
        u = e.id.get(d);
      l(u === i, () => `array reference id does not match row id: ${u}`);
      let h = e.key.get(d);
      l(h !== Dd, () => `array reference key cannot be $keep: ${h}`);
      let f = e.value.get(d);
      if (
        (l(
          f === m || oi(f),
          () => `array reference value must be object reference: ${JSON.stringify(f)}`
        ),
        f === m)
      )
        continue;
      let p = f.slice(4, -1);
      (s.set(p, h), a.set(h, p));
    }
    for (let c = 0; c < o.length; c++) {
      let d = o[c],
        u = e.key.get(d),
        h = e.value.get(d);
      if (h === m) {
        let p = a.get(u);
        if (p === void 0) {
          e.id._set(d, ii);
          continue;
        }
        let b = s.get(p);
        u === b ? e.key._set(d, p) : e.id._set(d, ii);
        continue;
      }
      l(oi(h), () => `array reference value must be object reference: ${JSON.stringify(h)}`);
      let f = h.slice(4, -1);
      (e.key._set(d, f), e.value._set(d, u));
    }
  }
}
function Bh(r) {
  return typeof r == "string" && r.startsWith("arr(");
}
function zh(r) {
  let e = new Set();
  for (let t = 0; t < r.client.length; t++) {
    if (r.id.get(t) === ii) continue;
    let i = r.value.get(t);
    if (!Bh(i)) continue;
    let o = i.slice(4, -1);
    e.add(o);
  }
  return e;
}
function oi(r) {
  return typeof r == "string" && r.startsWith("obj(");
}
function Ph(r, e) {
  let t = new Map([...e].map((n) => [n, []]));
  for (let n = 0; n < r.client.length; n++) {
    let i = r.id.get(n);
    if (!t.has(i) || r.key.get(n) === Dd) continue;
    let s = r.value.get(n);
    (l(s === m || oi(s), "only DELETED_VALUE and object references can be reference array items"),
      t.get(i).push(n));
  }
  return t;
}
function Lh(r, e, t) {
  let n = r.seq.get(e),
    i = r.seq.get(t);
  if (n < i) return -1;
  if (n > i) return 1;
  let o = r.client.get(e),
    s = r.client.get(t);
  return o < s ? -1 : o > s ? 1 : 0;
}
var Ed = {
  description: "Migrates array of objects to invert index from position-keyed to id-keyed",
  migrate: Eh,
};
var W = class r {
  constructor(e, t) {
    this.parentHistory = e;
    this.parentOverrides = t;
  }
  parentHistory;
  parentOverrides;
  clone() {
    let e = new Map();
    for (let [t, n] of this.parentOverrides) {
      let i = new Map();
      for (let [o, s] of n) {
        let a = new Map();
        for (let [c, d] of s) a.set(c, { ...d });
        i.set(o, a);
      }
      e.set(t, i);
    }
    return new r([...this.parentHistory], e);
  }
};
var qh = 1e3,
  Kh = 1e4,
  $h = 512,
  si = qh,
  Uh = $h,
  J = class {
    seqs = [];
    idxs = [];
    _maxSize = si;
    constructor(e) {
      let t = e?.maxSize ?? si;
      this._maxSize = Fo(t, si, Kh);
    }
    get maxSize() {
      return this._maxSize;
    }
    clear() {
      ((this.seqs = []), (this.idxs = []));
    }
    load(e, t) {
      let n = e.length === t.length && e.length <= this._maxSize;
      ((this.seqs = n ? e : []), (this.idxs = n ? t : []));
    }
    get(e) {
      let t = this.seqs.length;
      if (t === 0) return 0;
      let n = Se(this.seqs, e, Bd);
      return n < t && this.seqs[n] === e ? this.idxs[n] : 0;
    }
    add(e, t) {
      let n = Se(this.seqs, e, Bd);
      if (n < this.seqs.length && this.seqs[n] === e) {
        t < this.idxs[n] && ((this.idxs[n] = t), this.propagateLeftFrom(n));
        return;
      }
      if (this.maxSize > 0 && this.seqs.length >= this.maxSize) {
        let o = this.seqs[this.seqs.length - this.maxSize];
        if (o !== void 0 && o > e) return;
      }
      (this.seqs.splice(n, 0, e),
        this.idxs.splice(n, 0, t),
        n + 1 < this.idxs.length && (this.idxs[n] = Math.min(this.idxs[n], this.idxs[n + 1])),
        this.propagateLeftFrom(n),
        this.seqs.length > this.maxSize + Uh && this.trimToMaxSize());
    }
    trimToMaxSize() {
      if (this.maxSize) {
        let e = this.seqs.length - this.maxSize;
        e > 0 && (this.seqs.splice(0, e), this.idxs.splice(0, e));
      }
    }
    propagateLeftFrom(e) {
      let t = this.idxs[e];
      for (let n = e - 1; n >= 0 && !(this.idxs[n] <= t); n--) this.idxs[n] = t;
    }
    __snapshot() {
      return this.seqs.map((e, t) => ({ seq: e, idx: this.idxs[t] }));
    }
  };
function Bd(r, e) {
  return r - e;
}
function zd(r) {
  let e = "";
  for (let t of r) e += String.fromCharCode(t);
  return btoa(e);
}
function Pd(r) {
  let e = atob(r),
    t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
  return t;
}
var K = class r {
  constructor(e = []) {
    this.values = e;
  }
  values;
  get count() {
    return this.values.length;
  }
  add(e) {
    let t = Ld(this.values, e);
    return t >= 0 ? !1 : (this.values.splice(-(t + 1), 0, e), !0);
  }
  has(e) {
    return Ld(this.values, e) >= 0;
  }
  clone() {
    return new r([...this.values]);
  }
  copyIntoBitmap(e) {
    for (let t of this.values) e.add(t);
  }
  *[Symbol.iterator]() {
    yield* this.values;
  }
  serialize(e) {
    let t = new Uint16Array(this.values.length);
    for (let n = 0; n < t.length; ++n) t[n] = this.values[n];
    e.writeTypedArray(t);
  }
  deserialize(e) {
    l(this.values.length === 0, "ArrayContainer deserialize must be called with empty array");
    let t = e.readTypedArray(Uint16Array);
    for (let n = 0; n < t.length; ++n) this.values[n] = t[n];
  }
};
function Ld(r, e) {
  let t = 0,
    n = r.length - 1;
  for (; t <= n; ) {
    let i = (t + n) >>> 1,
      o = r[i];
    if (o < e) {
      t = i + 1;
      continue;
    }
    if (o > e) {
      n = i - 1;
      continue;
    }
    return i;
  }
  return -(t + 1);
}
var Ct = 2048,
  j = class r {
    constructor(e = new Uint32Array(Ct), t = 0) {
      this.words = e;
      this._count = t;
    }
    words;
    _count;
    get count() {
      return this._count;
    }
    add(e) {
      let t = e >>> 5,
        n = this.words[t],
        o = 1 << (e & 31);
      return n & o ? !1 : ((this.words[t] = n | o), (this._count += 1), !0);
    }
    has(e) {
      let t = e >>> 5,
        n = this.words[t],
        o = 1 << (e & 31);
      return !!(n & o);
    }
    clone() {
      return new r(this.words.slice(), this._count);
    }
    *[Symbol.iterator]() {
      for (let e = 0; e < this.words.length; e++) {
        let t = this.words[e] ?? 0,
          n = e << 5;
        for (; t !== 0; ) {
          let i = t & -t,
            o = 31 - Math.clz32(i);
          (yield n + o, (t &= t - 1));
        }
      }
    }
    copyIntoArray(e) {
      for (let t of this) e.values.push(t);
    }
    serialize(e) {
      (e.writeUint32(this.count), e.writeTypedArray(this.words));
    }
    deserialize(e) {
      (l(this.count === 0, "BitmapContainer deserialize should be called with an empty bitmap"),
        (this._count = e.readUint32()));
      let t = e.readTypedArray(Uint32Array);
      (l(t.length === Ct, () => `unexpected bitmap word count: ${t.length}`), this.words.set(t));
    }
  };
var Nt = { Array: 0, Bitmap: 1 };
function qd(r, e) {
  if (r instanceof K && e instanceof K) return Fh(r, e);
  if (r instanceof K && e instanceof j) return Hh(r, e);
  if (r instanceof j && e instanceof K) return Vh(r, e);
  if (r instanceof j && e instanceof j) return jh(r, e);
}
function Fh(r, e) {
  let t = [],
    n = r.values,
    i = e.values,
    o = 0,
    s = 0;
  for (; o < n.length && s < i.length; ) {
    let a = n[o],
      c = i[s];
    if (a === c) {
      ((o += 1), (s += 1));
      continue;
    }
    if (a < c) {
      (t.push(a), (o += 1));
      continue;
    }
    s += 1;
  }
  for (; o < n.length; o++) t.push(n[o]);
  if (t.length !== 0) return new K(t);
}
function Hh(r, e) {
  let t = r.values.filter((n) => !e.has(n));
  if (t.length !== 0) return new K(t);
}
function Vh(r, e) {
  let t = r.words.slice(),
    n = r.count;
  for (let i of e.values) {
    let o = i >>> 5,
      s = 1 << (i & 31),
      a = t[o];
    a & s && ((t[o] = a & ~s), (n -= 1));
  }
  if (n !== 0) return new j(t, n);
}
function jh(r, e) {
  let t = new Uint32Array(Ct),
    n = 0;
  for (let i = 0; i < Ct; i++) {
    let o = (r.words[i] ?? 0) & ~(e.words[i] ?? 0);
    ((t[i] = o), (n += Zh(o)));
  }
  if (n !== 0) return new j(t, n);
}
function Zh(r) {
  let e = r >>> 0,
    t = 0;
  for (; e !== 0; ) ((e &= e - 1), (t += 1));
  return t;
}
var Kd = 4096,
  ai = 16,
  $d = 65535,
  Rt = class r {
    containers = new Map();
    _count = 0;
    get count() {
      return this._count;
    }
    get keys() {
      return Array.from(this.containers.keys()).sort((e, t) => e - t);
    }
    add(e) {
      Ot(e, "value");
      let t = e >>> ai,
        n = e & $d,
        i = this.containers.get(t);
      return i
        ? i.add(n)
          ? ((this._count += 1),
            i instanceof K && i.count > Kd && this.containers.set(t, Gh(i)),
            !0)
          : !1
        : (this.containers.set(t, new K([n])), (this._count += 1), !0);
    }
    has(e) {
      Ot(e, "value");
      let t = e >>> ai,
        n = e & $d,
        i = this.containers.get(t);
      return i ? i.has(n) : !1;
    }
    andNot(e) {
      let t = new r();
      for (let n of this.keys) {
        let i = this.containers.get(n);
        if (!i) continue;
        let o = e.containers.get(n);
        if (!o) {
          let a = i.clone();
          (t.containers.set(n, a), (t._count += a.count));
          continue;
        }
        let s = qd(i, o);
        s &&
          (s instanceof j && s.count <= Kd && (s = Wh(s)),
          t.containers.set(n, s),
          (t._count += s.count));
      }
      return t;
    }
    clone() {
      let e = new r();
      for (let t of this.keys) {
        let n = this.containers.get(t);
        n && e.containers.set(t, n.clone());
      }
      return ((e._count = this._count), e);
    }
    *[Symbol.iterator]() {
      for (let e of this.keys) {
        let t = this.containers.get(e);
        if (t) for (let n of t) yield (((e << ai) >>> 0) + n) >>> 0;
      }
    }
    serialize(e) {
      (e.writeUint32(this._count), e.writeUint32(this.containers.size));
      for (let t of this.keys) {
        let n = this.containers.get(t);
        (l(n, () => `missing container for key ${t}`),
          e.writeUint16(t),
          e.writeUint8(n instanceof K ? Nt.Array : Nt.Bitmap),
          n.serialize(e));
      }
    }
    deserialize(e) {
      (l(this.containers.size === 0, "RoaringBitmap32 deserialize must be called when empty"),
        (this._count = e.readUint32()));
      let t = e.readUint32();
      for (let n = 0; n < t; n++) {
        let i = e.readUint16(),
          o = e.readUint8(),
          s;
        (o === Nt.Array ? (s = new K()) : o === Nt.Bitmap && (s = new j()),
          l(s, () => `invalid container type: ${o}`),
          s.deserialize(e),
          this.containers.set(i, s));
      }
    }
  };
function Gh(r) {
  let e = new j();
  return (r.copyIntoBitmap(e), e);
}
function Wh(r) {
  let e = new K();
  return (r.copyIntoArray(e), e);
}
var Jh = 4294967295;
function Ot(r, e) {
  l(
    Number.isInteger(r) && r >= 0 && r <= Jh,
    () => `${e} must be an unsigned 32-bit integer, received: ${r}`
  );
}
var At = class r {
  seqMapByClient = new Map();
  _count = 0;
  get count() {
    return this._count;
  }
  add(e, t) {
    (Ot(e, "client"), Ud(t, "seq"));
    let { seqHigh: n, seqLow: i } = Fd(t),
      o = this.seqMapByClient.get(e);
    o || ((o = new Map()), this.seqMapByClient.set(e, o));
    let s = o.get(n);
    s || ((s = new Rt()), o.set(n, s));
    let a = s.add(i);
    return (a && (this._count += 1), a);
  }
  has(e, t) {
    (Ot(e, "client"), Ud(t, "seq"));
    let { seqHigh: n, seqLow: i } = Fd(t),
      o = this.seqMapByClient.get(e);
    if (!o) return !1;
    let s = o.get(n);
    return s ? s.has(i) : !1;
  }
  hasClient(e) {
    return this.seqMapByClient.has(e);
  }
  clone() {
    let e = new r();
    for (let [t, n] of this.seqMapByClient) {
      let i = new Map();
      for (let [o, s] of n) i.set(o, s.clone());
      e.seqMapByClient.set(t, i);
    }
    return ((e._count = this._count), e);
  }
  andNot(e) {
    let t = new r();
    for (let n of oe(this.seqMapByClient)) {
      let i = this.seqMapByClient.get(n);
      if (!i) continue;
      let o = e.seqMapByClient.get(n),
        s = new Map(),
        a = 0;
      for (let c of oe(i)) {
        let d = i.get(c);
        if (!d) continue;
        let u = o?.get(c),
          h = u ? d.andNot(u) : d.clone();
        h.count <= 0 || (s.set(c, h), (a += h.count));
      }
      a > 0 && (t.seqMapByClient.set(n, s), (t._count += a));
    }
    return t;
  }
  *[Symbol.iterator]() {
    for (let e of oe(this.seqMapByClient)) {
      let t = this.seqMapByClient.get(e);
      if (t)
        for (let n of oe(t)) {
          let i = t.get(n);
          if (i) for (let o of i) yield { client: e, seq: Yh(n, o) };
        }
    }
  }
  toArray() {
    return [...this];
  }
  serialize(e) {
    (e.writeFloat64(this._count), e.writeFloat64(this.seqMapByClient.size));
    let t = oe(this.seqMapByClient);
    for (let n of t) {
      e.writeUint32(n);
      let i = this.seqMapByClient.get(n);
      (l(i, "seqMap must exist"), e.writeUint32(i.size));
      let o = oe(i);
      for (let s of o) {
        e.writeUint32(s);
        let a = i.get(s);
        (l(a, "seqLowBitmap must exist"), a.serialize(e));
      }
    }
  }
  deserialize(e) {
    (l(this.seqMapByClient.size === 0, "TimestampSet deserialize must be called when empty"),
      (this._count = e.readFloat64()));
    let t = e.readFloat64();
    for (let n = 0; n < t; n++) {
      let i = e.readUint32(),
        o = new Map(),
        s = e.readUint32();
      for (let a = 0; a < s; a++) {
        let c = e.readUint32(),
          d = new Rt();
        (d.deserialize(e), o.set(c, d));
      }
      this.seqMapByClient.set(i, o);
    }
  }
};
function oe(r) {
  return Array.from(r.keys()).sort((e, t) => e - t);
}
var ci = 4294967296;
function Ud(r, e) {
  l(
    Number.isInteger(r) && r >= 0 && r <= Number.MAX_SAFE_INTEGER,
    () => `${e} must be a safe unsigned integer, received: ${r}`
  );
}
function Fd(r) {
  let e = Math.trunc(r / ci),
    t = r % ci;
  return { seqHigh: e, seqLow: t };
}
function Yh(r, e) {
  return r * ci + e;
}
function jd(r) {
  let e = new Map();
  for (let { client: t, seq: n } of r) {
    let i = e.get(t);
    (i || ((i = new Set()), e.set(t, i)), i.add(n));
  }
  return e;
}
var Z = class r {
    timestamps = new At();
    clientState = new Map();
    get count() {
      return this.timestamps.count;
    }
    addTimestamp(e, t) {
      return this.timestamps.add(e, t);
    }
    updateClientState(e, t, n) {
      let i = this.clientState.get(e);
      i
        ? ((i.maxSeq = Math.max(t, i.maxSeq)), (i.batch = Math.max(n, i.batch)))
        : ((i = { maxSeq: t, batch: n }), this.clientState.set(e, i));
    }
    copyClientStateFrom(e) {
      for (let [t, n] of e.clientState) this.updateClientState(t, n.maxSeq, n.batch);
    }
    hasTimestamp(e, t) {
      return this.timestamps.has(e, t);
    }
    getTimestamps() {
      return this.timestamps[Symbol.iterator]();
    }
    hasClient(e) {
      return this.timestamps.hasClient(e);
    }
    getBatch(e) {
      return this.clientState.get(e)?.batch;
    }
    getMaxSeq(e) {
      return this.clientState.get(e)?.maxSeq;
    }
    toMaxSeqArray() {
      let e = [];
      for (let t of oe(this.clientState)) {
        let n = this.clientState.get(t).maxSeq;
        e.push([t, n]);
      }
      return e;
    }
    compare(e) {
      return {
        extra: this.timestamps.andNot(e.timestamps).toArray(),
        missing: e.timestamps.andNot(this.timestamps).toArray(),
      };
    }
    clone() {
      let e = new r();
      return ((e.timestamps = this.timestamps.clone()), e.copyClientStateFrom(this), e);
    }
    serialize(e) {
      (e.writeUint32(Hd),
        e.writeUint16(Vd),
        this.timestamps.serialize(e),
        e.writeUint32(this.clientState.size));
      for (let t of oe(this.clientState)) {
        let n = this.clientState.get(t);
        (e.writeUint32(t), e.writeFloat64(n.batch), e.writeFloat64(n.maxSeq));
      }
    }
    deserialize(e) {
      (l(this.timestamps.count === 0, "Manifest deserialize must be called when empty"),
        l(e.readUint32() === Hd, "Manifest magic mismatch"),
        l(e.readUint16() === Vd, "Manifest version mismatch"),
        (this.timestamps = new At()),
        this.timestamps.deserialize(e),
        this.clientState.clear());
      let t = e.readUint32();
      for (let n = 0; n < t; n++) {
        let i = e.readUint32(),
          o = e.readFloat64(),
          s = e.readFloat64();
        this.clientState.set(i, { batch: o, maxSeq: s });
      }
    }
    toBuffer() {
      let e = new z();
      return (this.serialize(e), e.getBuffer());
    }
    toBase64() {
      let e = this.toBuffer();
      return zd(e);
    }
    static fromBuffer(e) {
      let t = new M(e),
        n = new r();
      return (n.deserialize(t), n);
    }
    static fromBase64(e) {
      let t = Pd(e);
      return r.fromBuffer(t);
    }
  },
  Hd = 1414743629,
  Vd = 1;
var Zd = ["client", "seq", "batch", "id", "key", "value", "user"];
var di = class {
  encode(e, t) {
    let n = e.main;
    (this.writeSection(1296389185, t, (o) => {
      rf(n.metadata, o);
    }),
      this.writeSection(1296125510, t, (o) => {
        of(n.manifest, o);
      }),
      this.writeSection(1129270355, t, (o) => {
        this.encodeColumns(n.columns, o);
      }));
    let i = n.hierarchyData;
    (i &&
      this.writeSection(1212761426, t, (o) => {
        ef(i, o);
      }),
      this.writeSection(1296649816, t, (o) => {
        Xh(n.minIndexCache, o);
      }));
  }
  decode(e, t) {
    let n = e.main;
    for (; !t.endOfFile(); ) {
      let i = t.readUint32(),
        o = t.readFloat64(),
        s = new M(t.readBytes(o));
      switch (i) {
        case 1129270355:
          this.decodeColumns(n.columns, s);
          break;
        case 1296649816: {
          n.minIndexCache = Qh(s);
          break;
        }
        case 1212761426:
          n.hierarchyData = tf(s);
          break;
        case 1296125510:
          n.manifest = sf(s);
          break;
        case 1296389185:
          n.metadata = nf(s);
          break;
        default:
          break;
      }
    }
  }
  fromSerializableRow(e) {
    let t = N(e.value) ? R(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      k(t) && (t = A(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(Zd.length);
    for (let n of Zd) {
      let i = e[n];
      (t.writeString(n), t.writeString(i.type), i.serialize(t));
    }
  }
  decodeColumns(e, t) {
    let n = t.readUint32();
    for (let i = 0; i < n; i++) {
      let o = t.readString(),
        s = e[o];
      l(s, () => `Column ${o} not found`);
      let a = t.readString();
      if (a !== s.type)
        throw new Error(`Column type does not match: ${a} (actual) != ${s.type} (expected)`);
      s.deserialize(t);
    }
  }
  writeSection(e, t, n) {
    let i = new z();
    n(i);
    let o = i.getBuffer();
    (t.writeUint32(e), t.writeFloat64(o.length), t.writeBytes(o));
  }
};
function Xh(r, e) {
  let t = r;
  (e.writeTypedArray(new Float64Array(t.seqs)),
    e.writeTypedArray(new Float64Array(t.idxs)),
    e.writeUint32(t.maxSize ?? 0));
}
function Qh(r) {
  let e = Array.from(r.readTypedArray(Float64Array)),
    t = Array.from(r.readTypedArray(Float64Array)),
    n = r.readUint32(),
    i = new J({ maxSize: n });
  return (i.load(e, t), i);
}
function ef(r, e) {
  let t = JSON.stringify(
    [...r.parentOverrides].map(([n, i]) => [
      n,
      [...i].map(([o, s]) => [
        o,
        Object.fromEntries(
          [...s].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              k(d.parentFrom) && (d.parentFrom = A(d.parentFrom)),
              k(d.parentTo) && (d.parentTo = A(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(r.parentHistory)));
}
function tf(r) {
  let e = JSON.parse(r.readString()),
    t = new Map();
  for (let [i, o] of e) {
    let s = new Map();
    for (let [a, c] of o) {
      let d = new Map();
      for (let u in c) {
        let h = c[u];
        (N(h.parentFrom) && (h.parentFrom = R(h.parentFrom)),
          N(h.parentTo) && (h.parentTo = R(h.parentTo)),
          d.set(Number(u), h));
      }
      s.set(a, d);
    }
    t.set(i, s);
  }
  let n = Array.from(r.readTypedArray(Uint32Array));
  return new W(n, t);
}
function rf(r, e) {
  e.writeFloat64(r.seq);
}
function nf(r) {
  return { seq: r.readFloat64(), compactedAt: 0, compactedLength: 0 };
}
function of(r, e) {
  r.serialize(e);
}
function sf(r) {
  let e = new Z();
  return (e.deserialize(r), e);
}
var Gd = { description: "Adds named sections to binary documents", codec: new di(), migrate() {} };
var Fe = class {
    values = new ye(Float64Array);
    get type() {
      return "DeltaEncodedSeqColumn(F64)";
    }
    get length() {
      return this.values.length;
    }
    add(e) {
      return this.values.add(e);
    }
    get(e) {
      return this.values.get(e);
    }
    _set(e, t) {
      this.values._set(e, t);
    }
    slice(e, t) {
      return this.values.slice(e, t);
    }
    serialize(e) {
      e.writeVarUint(this.values.length);
      let t = 0;
      for (let n of this.values.readSlices())
        for (let i = 0; i < n.length; i++) {
          let o = n[i];
          (e.writeVarUint(af(o - t)), (t = o));
        }
    }
    deserialize(e) {
      let t = e.readVarUint(),
        n = 0;
      for (let i of this.values.writeSlices(t))
        for (let o = 0; o < i.length; o++) {
          let s = n + cf(e.readVarUint());
          ((i[o] = s), (n = s));
        }
    }
  },
  Wd = 2 ** 52;
function af(r) {
  return (
    l(r >= -Wd && r <= Wd, () => `seq delta out of zigzag-safe range: ${r}`),
    r >= 0 ? r * 2 : -r * 2 - 1
  );
}
function cf(r) {
  return r % 2 === 0 ? r / 2 : -(r + 1) / 2;
}
var kt = 16,
  ui = {
    description: "Convert the seq column to delta encoding on every branch",
    migrate: (r) => {
      for (let e of r.branches.values()) {
        let t = e.columns.seq,
          n = new Fe();
        for (let i = 0; i < t.length; i++) n.add(t.get(i));
        e.columns.seq = n;
      }
    },
  };
var Jd = {
  forVersion(r) {
    return r >= kt ? new Fe() : new ye(Float64Array);
  },
};
var li = class {
    client = G.withBuckets({ buffer: Uint32Array }).create();
    seq;
    batch = G.withBuckets({ buffer: Uint32Array }).create();
    id = new V();
    key = new V();
    value = new V();
    user = G.withBuckets({ buffer: Uint8Array }).create();
    constructor(e) {
      this.seq = Jd.forVersion(e);
    }
    get length() {
      return this.client.length;
    }
    releaseLookups() {
      for (let e of [this.client, this.seq, this.batch, this.id, this.key, this.value, this.user])
        e.releaseLookup?.();
    }
  },
  L = class {
    constructor(e, t, n) {
      this.codec = e;
      ((this.columns = new li(n)),
        (this.metadata = { seq: 1, branchId: t, compactedAt: 0, compactedLength: 0 }));
    }
    codec;
    columns;
    minIndexCache = new J({ maxSize: 1e3 });
    hierarchyData;
    manifest = new Z();
    metadata;
    addRows(e) {
      for (let t of e) this.addRow(t);
    }
    addRow(e) {
      return (
        this.columns.seq.add(e.seq),
        this.columns.id.add(e.id),
        this.columns.key.add(e.key),
        this.columns.value.add(e.value),
        this.columns.user.add(e.user),
        this.columns.batch.add(e.batch),
        this.columns.client.add(e.client)
      );
    }
    addSerializableRow(e) {
      let t = this.codec;
      this.addRow(t.fromSerializableRow(e));
    }
    addSerializableRows(e) {
      for (let t of e) this.addSerializableRow(t);
    }
    getRowInternal(e) {
      return {
        client: this.columns.client.get(e),
        seq: this.columns.seq.get(e),
        id: this.columns.id.get(e),
        key: this.columns.key.get(e),
        value: this.columns.value.get(e),
        user: this.columns.user.get(e),
        batch: this.columns.batch.get(e),
      };
    }
    getRow(e) {
      if (e < 0 || e >= this.columns.client.length) throw new Error("Index out of bounds");
      return this.getRowInternal(e);
    }
    getRows(e = 0, t = this.columns.client.length) {
      if (e < 0 || t > this.columns.client.length || e > t) throw new Error("Index out of bounds");
      let n = Array.from({ length: t - e });
      for (let i = e; i < t; i++) n[i - e] = this.getRowInternal(i);
      return n;
    }
    getSerializableRow(e) {
      let t = this.codec;
      if (e < 0 || e >= this.columns.client.length) throw new Error("Index out of bounds");
      let n = this.getRowInternal(e);
      return t.toSerializableRow(n);
    }
    getSerializableRows(e = 0, t = this.columns.client.length) {
      let n = this.codec;
      if (e < 0 || t > this.columns.client.length || e > t) throw new Error("Index out of bounds");
      let i = Array.from({ length: t - e });
      for (let o = e; o < t; ++o) {
        let s = this.getRowInternal(o);
        i[o - e] = n.toSerializableRow(s);
      }
      return i;
    }
    getSerializableRowsAfterManifest(e) {
      let t = this.codec,
        n = [];
      for (let i = 0; i < this.columns.client.length; i++) {
        let o = this.columns.seq.get(i),
          s = this.columns.client.get(i),
          a = e.getMaxSeq(s) ?? -1;
        if (o <= a) continue;
        let c = t.toSerializableRow(this.getRowInternal(i));
        n.push(c);
      }
      return n;
    }
    buildManifest() {
      if (!(this.manifest.count > 0))
        for (let e = 0; e < this.columns.client.length; e++)
          this.manifest.addTimestamp(this.columns.client.get(e), this.columns.seq.get(e));
    }
    compare(e) {
      return this.manifest.compare(e);
    }
    getExtraSerializableRows(e) {
      let t = this.compare(e);
      if (!t.extra.length) return [];
      let n = jd(t.extra),
        i = [];
      for (let o = 0; o < this.columns.client.length; o++) {
        let s = n.get(this.columns.client.get(o));
        !s || !s.has(this.columns.seq.get(o)) || i.push(this.getSerializableRow(o));
      }
      return i;
    }
  };
var Yd = ["client", "seq", "batch", "id", "key", "value", "user"];
var hi = class {
  encode(e, t) {
    let n = e.branches;
    t.writeUint32(n.size);
    for (let [i, o] of n) {
      t.writeString(i);
      let s = new z();
      (this.writeSection(1296389185, s, (d) => {
        ff(o.metadata, d);
      }),
        this.writeSection(1296125510, s, (d) => {
          mf(o.manifest, d);
        }),
        this.writeSection(1129270355, s, (d) => {
          this.encodeColumns(o.columns, d);
        }));
      let a = o.hierarchyData;
      (a &&
        this.writeSection(1212761426, s, (d) => {
          lf(a, d);
        }),
        this.writeSection(1296649816, s, (d) => {
          df(o.minIndexCache, d);
        }));
      let c = s.getBuffer();
      (t.writeFloat64(c.length), t.writeBytes(c));
    }
  }
  decode(e, t) {
    let n = t.readUint32(),
      i = new Map();
    for (let o = 0; o < n; o++) {
      let s = t.readString(),
        a = new L(this, s, e.version),
        c = t.readFloat64(),
        d = new M(t.readBytes(c));
      for (; !d.endOfFile(); ) {
        let u = d.readUint32(),
          h = d.readFloat64(),
          f = new M(d.readBytes(h));
        switch (u) {
          case 1129270355:
            this.decodeColumns(a.columns, f);
            break;
          case 1296649816:
            a.minIndexCache = uf(f);
            break;
          case 1212761426:
            a.hierarchyData = hf(f);
            break;
          case 1296125510:
            a.manifest = yf(f);
            break;
          case 1296389185:
            a.metadata = pf(f);
            break;
          default:
            break;
        }
      }
      ((a.metadata.branchId = a.metadata.branchId ?? s), i.set(s, a));
    }
    ((e.branches = i), e.branches.has(I) || e.branches.set(I, new L(this, I, e.version)));
  }
  fromSerializableRow(e) {
    let t = N(e.value) ? R(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      k(t) && (t = A(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(Yd.length);
    for (let n of Yd) {
      let i = e[n];
      (t.writeString(n), t.writeString(i.type), i.serialize(t));
    }
  }
  decodeColumns(e, t) {
    let n = t.readUint32();
    for (let i = 0; i < n; i++) {
      let o = t.readString(),
        s = e[o];
      l(s, () => `Column ${o} not found`);
      let a = t.readString();
      if (a !== s.type)
        throw new Error(`Column type does not match: ${a} (actual) != ${s.type} (expected)`);
      s.deserialize(t);
    }
  }
  writeSection(e, t, n) {
    let i = new z();
    n(i);
    let o = i.getBuffer();
    (t.writeUint32(e), t.writeFloat64(o.length), t.writeBytes(o));
  }
};
function df(r, e) {
  (e.writeTypedArray(new Float64Array(r.seqs)),
    e.writeTypedArray(new Float64Array(r.idxs)),
    e.writeUint32(r.maxSize ?? 0));
}
function uf(r) {
  let e = Array.from(r.readTypedArray(Float64Array)),
    t = Array.from(r.readTypedArray(Float64Array)),
    n = r.readUint32(),
    i = new J({ maxSize: n });
  return (i.load(e, t), i);
}
function lf(r, e) {
  let t = JSON.stringify(
    [...r.parentOverrides].map(([n, i]) => [
      n,
      [...i].map(([o, s]) => [
        o,
        Object.fromEntries(
          [...s].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              k(d.parentFrom) && (d.parentFrom = A(d.parentFrom)),
              k(d.parentTo) && (d.parentTo = A(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(r.parentHistory)));
}
function hf(r) {
  let e = JSON.parse(r.readString()),
    t = new Map();
  for (let [i, o] of e) {
    let s = new Map();
    for (let [a, c] of o) {
      let d = new Map();
      for (let u in c) {
        let h = c[u];
        (N(h.parentFrom) && (h.parentFrom = R(h.parentFrom)),
          N(h.parentTo) && (h.parentTo = R(h.parentTo)),
          d.set(Number(u), h));
      }
      s.set(a, d);
    }
    t.set(i, s);
  }
  let n = Array.from(r.readTypedArray(Uint32Array));
  return new W(n, t);
}
function ff(r, e) {
  (e.writeFloat64(r.seq), e.writeString(r.branchId ?? I));
}
function pf(r) {
  let e = r.readFloat64(),
    t = r.readString();
  return { seq: e, branchId: t, compactedAt: 0, compactedLength: 0 };
}
function mf(r, e) {
  r.serialize(e);
}
function yf(r) {
  let e = new Z();
  return (e.deserialize(r), e);
}
var Xd = { description: "Stores table data by branches", codec: new hi(), migrate() {} };
var Qd = ["client", "seq", "batch", "id", "key", "value", "user"];
var fi = class {
  encode(e, t) {
    let n = e.branches;
    t.writeUint32(n.size);
    for (let [i, o] of n) {
      t.writeString(i);
      let s = t.byteOffset;
      t.writeFloat64(0);
      let a = t.byteOffset;
      (t.withAlignmentOrigin(a, () => {
        (this.writeSection(1296389185, t, (d) => {
          Sf(o.metadata, d);
        }),
          this.writeSection(1296125510, t, (d) => {
            xf(o.manifest, d);
          }),
          this.writeSection(1129270355, t, (d) => {
            this.encodeColumns(o.columns, d);
          }));
        let c = o.hierarchyData;
        (c &&
          this.writeSection(1212761426, t, (d) => {
            If(c, d);
          }),
          this.writeSection(1296649816, t, (d) => {
            gf(o.minIndexCache, d);
          }));
      }),
        t.writeFloat64At(s, t.byteOffset - a));
    }
  }
  decode(e, t) {
    let n = t.readUint32(),
      i = new Map();
    for (let o = 0; o < n; o++) {
      let s = t.readString(),
        a = new L(this, s, e.version),
        c = t.readFloat64(),
        d = new M(t.readBytes(c));
      for (; !d.endOfFile(); ) {
        let u = d.readUint32(),
          h = d.readFloat64(),
          f = new M(d.readBytes(h));
        switch (u) {
          case 1129270355:
            this.decodeColumns(a.columns, f, s);
            break;
          case 1296649816:
            a.minIndexCache = bf(f);
            break;
          case 1212761426:
            a.hierarchyData = wf(f);
            break;
          case 1296125510:
            a.manifest = Cf(f);
            break;
          case 1296389185:
            a.metadata = vf(f);
            break;
          default:
            break;
        }
      }
      ((a.metadata.branchId = a.metadata.branchId ?? s), i.set(s, a));
    }
    ((e.branches = i), e.branches.has(I) || e.branches.set(I, new L(this, I, e.version)));
  }
  fromSerializableRow(e) {
    let t = N(e.value) ? R(e.value) : e.value;
    return {
      client: e.client,
      seq: e.seq,
      id: e.id,
      key: e.key,
      value: t,
      user: e.user,
      batch: e.batch ?? 0,
    };
  }
  toSerializableRow(e) {
    let t = e.value;
    return (
      k(t) && (t = A(t)),
      { client: e.client, seq: e.seq, id: e.id, key: e.key, value: t, user: e.user, batch: e.batch }
    );
  }
  encodeColumns(e, t) {
    t.writeUint32(Qd.length);
    for (let n of Qd) {
      let i = e[n];
      (t.writeString(n), t.writeString(i.type), i.serialize(t));
    }
  }
  decodeColumns(e, t, n) {
    let i = t.readUint32();
    for (let o = 0; o < i; o++) {
      let s = t.readString(),
        a = e[s];
      l(a, () => `Column ${s} not found`);
      let c = t.readString();
      if (c !== a.type)
        throw new Error(
          `Column type does not match in branch "${n}": ${c} (actual) != ${a.type} (expected)`
        );
      a.deserialize(t);
    }
  }
  writeSection(e, t, n) {
    t.writeUint32(e);
    let i = t.byteOffset;
    t.writeFloat64(0);
    let o = t.byteOffset;
    (t.withAlignmentOrigin(o, () => {
      n(t);
    }),
      t.writeFloat64At(i, t.byteOffset - o));
  }
};
function gf(r, e) {
  (r.trimToMaxSize(),
    e.writeTypedArray(new Float64Array(r.seqs)),
    e.writeTypedArray(new Float64Array(r.idxs)),
    e.writeUint32(r.maxSize ?? 0));
}
function bf(r) {
  let e = Array.from(r.readTypedArray(Float64Array)),
    t = Array.from(r.readTypedArray(Float64Array)),
    n = r.readUint32(),
    i = new J({ maxSize: n });
  return (i.load(e, t), i);
}
function If(r, e) {
  let t = JSON.stringify(
    [...r.parentOverrides].map(([n, i]) => [
      n,
      [...i].map(([o, s]) => [
        o,
        Object.fromEntries(
          [...s].map(([a, c]) => {
            let d = { ...c, rowIdx: c.rowIdx };
            return (
              k(d.parentFrom) && (d.parentFrom = A(d.parentFrom)),
              k(d.parentTo) && (d.parentTo = A(d.parentTo)),
              [a, d]
            );
          })
        ),
      ]),
    ])
  );
  (e.writeString(t), e.writeTypedArray(new Uint32Array(r.parentHistory)));
}
function wf(r) {
  let e = JSON.parse(r.readString()),
    t = new Map();
  for (let [i, o] of e) {
    let s = new Map();
    for (let [a, c] of o) {
      let d = new Map();
      for (let u in c) {
        let h = c[u];
        (N(h.parentFrom) && (h.parentFrom = R(h.parentFrom)),
          N(h.parentTo) && (h.parentTo = R(h.parentTo)),
          d.set(Number(u), h));
      }
      s.set(a, d);
    }
    t.set(i, s);
  }
  let n = Array.from(r.readTypedArray(Uint32Array));
  return new W(n, t);
}
function Sf(r, e) {
  (e.writeFloat64(r.seq),
    e.writeString(r.branchId ?? I),
    e.writeFloat64(r.compactedAt),
    e.writeFloat64(r.compactedLength));
}
function vf(r) {
  let e = r.readFloat64(),
    t = r.readString(),
    n = r.readFloat64(),
    i = r.readFloat64();
  return { seq: e, branchId: t, compactedAt: n, compactedLength: i };
}
function xf(r, e) {
  r.serialize(e);
}
function Cf(r) {
  let e = new Z();
  return (e.deserialize(r), e);
}
function Nf(r) {
  let e = Date.now();
  for (let t of r.branches.values())
    ((t.metadata.compactedAt = e), (t.metadata.compactedLength = t.columns.length));
}
var eu = {
  description: "Adds compactedAt and compactedLength to branch metadata",
  codec: new fi(),
  migrate: Nf,
};
var tu = {
  description: "Clear caches to fix wrong hierarchy data",
  migrate: (r) => {
    for (let e of r.branches.values())
      ((e.hierarchyData = void 0),
        (e.minIndexCache = new J({ maxSize: 1e3 })),
        (e.metadata.seq = 0),
        (e.manifest = new Z()));
  },
};
var ru = {
  description: "Merge double-escaped __deleted keys back into _deleted",
  migrate: (r) => {
    for (let e of r.branches.values()) {
      let t = e.columns.id,
        n = e.columns.key,
        i = e.columns.value,
        o = e.columns.seq,
        s = e.columns.client,
        a = new Set();
      for (let d = 0; d < n.length; d++)
        if (n.get(d) === "__deleted") {
          let h = t.get(d);
          if (!h.includes("replicaInfo.overrides")) continue;
          a.add(h);
        }
      let c = new Map();
      for (let d = 0; d < n.length; d++) {
        let u = t.get(d);
        if (a.has(u)) {
          let h = n.get(d);
          if (h === "_deleted") {
            let f = c.get(u);
            f === void 0 && ((f = {}), c.set(u, f));
            let p = f._deleted;
            (p === void 0 || re(o.get(d), s.get(d), o.get(p.row), s.get(p.row))) &&
              (f._deleted = { row: d, value: i.get(d) });
          } else if (h === "__deleted") {
            let f = c.get(u);
            f === void 0 && ((f = {}), c.set(u, f));
            let p = f.__deleted;
            ((p === void 0 || re(o.get(d), s.get(d), o.get(p.row), s.get(p.row))) &&
              (f.__deleted = { row: d, value: i.get(d) }),
              e.columns.key._set(d, "_deleted"));
          }
        }
      }
      for (let d of c.values()) {
        let u = d.__deleted;
        if (u !== void 0 && d._deleted !== void 0) {
          let h = d._deleted;
          if (Array.isArray(u.value) && Array.isArray(h.value)) {
            let f = Array.from(new Set([...u.value, ...h.value]));
            (e.columns.value._set(h.row, f), e.columns.value._set(u.row, f));
          } else
            Array.isArray(u.value)
              ? e.columns.value._set(h.row, u.value)
              : Array.isArray(h.value)
                ? e.columns.value._set(u.row, h.value)
                : (e.columns.value._set(u.row, m), e.columns.value._set(h.row, m));
        }
      }
    }
  },
};
var nu = { migrate() {}, description: "Dummy migration. Does nothing" };
var He = {
  m1_2: id,
  m2_3: ad,
  m3_4: Id,
  m4_5: Sd,
  m5_6: Od,
  m6_7: Md,
  m7_8: _d,
  m8_9: Ed,
  m9_10: nu,
  m10_11: Gd,
  m11_12: Xd,
  m12_13: eu,
  m13_14: tu,
  m14_15: ru,
  m15_16: ui,
};
l(
  He[`m${kt - 1}_${kt}`] === ui,
  "Delta seq migration not registered at the DELTA_SEQ_SCHEMA_VERSION boundary"
);
var be = Object.keys(He).reduce((r, e) => {
  let [, t] = e.split("_");
  l(typeof t == "string", () => `Invalid migration key: ${e}`);
  let n = Number.parseInt(t, 10);
  return (l(Number.isFinite(n), () => `Invalid migration version: ${e}`), Math.max(r, n));
}, Number.NEGATIVE_INFINITY);
l(Number.isFinite(be), "No migrations found");
var iu = "FRAMERCRDT";
function Tt(r) {
  let e = r.readString();
  return (l(e === iu, () => `Not a framer document: ${e}`), { version: r.readUint16() });
}
function Mt(r, e) {
  (e.writeString(iu), e.writeUint16(r));
}
function lr(r, e) {
  let t = `m${r}_${e}`;
  return (l(He[t], () => `Migration from ${r} to ${e} does not exist`), He[t]);
}
function Ve(r, e = 1) {
  for (let t = Math.max(r, 2); t > e; --t) {
    let n = lr(t - 1, t);
    if (n.codec) return n.codec;
  }
}
var Y = class r {
  constructor(e = be) {
    this.version = e;
    let t = Ve(e);
    (l(t, () => `Codec not found for version ${e}`),
      (this.codec = t),
      (this.branches = new Map([[I, new L(this.codec, I, e)]])));
  }
  version;
  static MAGIC = "FRAMERCRDT";
  branches;
  codec;
  getBranch(e) {
    let t = this.branches.get(e);
    return (l(t, () => `Branch ${e} does not exist`), t);
  }
  getOrCreateBranch(e) {
    let t = this.branches.get(e);
    return (t || ((t = new L(this.codec, e, this.version)), this.branches.set(e, t)), t);
  }
  get main() {
    return this.getBranch(I);
  }
  addSerializableRows(e) {
    for (let t of e) this.getOrCreateBranch(t.branchId ?? I).addSerializableRow(t);
  }
  releaseColumnLookups() {
    for (let e of this.branches.values()) e.columns.releaseLookups();
  }
  toBuffer() {
    let e = new z();
    return (Mt(this.version, e), this.codec.encode(this, e), e.getBuffer());
  }
  async writeToStream(e) {
    let t = new z();
    return (Mt(this.version, t), this.codec.encode(this, t), t.writeToStream(e));
  }
  static loadVersionFromBuffer(e) {
    let t = new M(e),
      { version: n } = Tt(t);
    return n;
  }
  static fromBuffer(e) {
    let t = new M(e),
      { version: n } = Tt(t),
      i = new r(n);
    return (i.decode(t), i);
  }
  decode(e) {
    this.codec.decode(this, e);
  }
};
function pi(r, e = be) {
  let t = new M(r),
    { version: n } = Tt(t);
  if (n === e) return { migrated: !1, version: e };
  l(n < e, () => `Binary document version is newer than current version (${n} > ${e})`);
  let i = Ve(n);
  l(i, () => `Codec not found for version ${n}`);
  let o = Ve(e, n);
  o || (o = i);
  let s = new L(i, I, n),
    a = { version: n, branches: new Map([[I, s]]), main: s };
  i.decode(a, t);
  for (let d = n; d < e; ++d) (lr(d, d + 1).migrate(a), (a.version = d + 1));
  let c = new z();
  return (Mt(e, c), o.encode(a, c), { migrated: !0, from: n, to: e, buffer: c.getBuffer() });
}
function Rf(r, e, t = []) {
  if (r.length === 0) return [];
  let n = new Y(e),
    i = n.getBranch(I);
  i.addSerializableRows(t);
  let o = t.length;
  i.addSerializableRows(r);
  let s = n.toBuffer(),
    a = pi(s),
    c = Y.fromBuffer(a.migrated ? a.buffer : s);
  return a.migrated ? c.getBranch(I).getRows(o) : i.getRows(o);
}
var mi = class {
    constructor(e) {
      this.nodeId = e;
    }
    nodeId;
    hasParentIdOwnWrite = !1;
    latestPropertyRowIndexByStoreId = new Map();
    recordPropertyOwnWrite(e, t, n, i) {
      let o = this.getOrCreateLatestRowIndexByPropertyKey(t),
        s = o.get(n);
      (s === void 0 || ve(e, i, s)) && o.set(n, i);
    }
    getOrCreateLatestRowIndexByPropertyKey(e) {
      let t = this.latestPropertyRowIndexByStoreId.get(e);
      if (t) return t;
      let n = new Map();
      return (this.latestPropertyRowIndexByStoreId.set(e, n), n);
    }
  },
  hr = class {
    constructor(e) {
      this.branchData = e;
    }
    branchData;
    touchedNodeIdByRowIndex = [];
    ownWriteSummaryByNodeId = new Map();
    nodeIdsWithParentIdOwnWrites = new Set();
    indexOwnRow(e) {
      let t = this.branchData.columns,
        n = t.id.get(e),
        i = t.key.get(e),
        o = _t(n, i);
      if (((this.touchedNodeIdByRowIndex[e] = o), !o)) return;
      let s = this.getOrCreateOwnWriteSummary(o);
      i === "parentid"
        ? ((s.hasParentIdOwnWrite = !0), this.nodeIdsWithParentIdOwnWrites.add(o))
        : s.recordPropertyOwnWrite(t, n, i, e);
    }
    getNodeIdsTouchedByRows(e, t) {
      let n = new Set();
      for (let i = e; i < t; i++) {
        let o = this.touchedNodeIdByRowIndex[i];
        o && n.add(o);
      }
      return n;
    }
    getNodeIdsWithOwnWrites() {
      return this.ownWriteSummaryByNodeId.keys();
    }
    getNodeIdsWithParentIdOwnWrites() {
      return this.nodeIdsWithParentIdOwnWrites.values();
    }
    getOwnWriteSummary(e) {
      return this.ownWriteSummaryByNodeId.get(e);
    }
    getOrCreateOwnWriteSummary(e) {
      let t = this.ownWriteSummaryByNodeId.get(e);
      if (t) return t;
      let n = new mi(e);
      return (this.ownWriteSummaryByNodeId.set(e, n), n);
    }
  };
function _t(r, e) {
  if (r === _ || e === "children" || e === O) return;
  let t = r.indexOf(".");
  return t < 0 ? r : r.slice(0, t);
}
var fr = class {
    constructor(e, t) {
      this.store = e;
      this.dependencyNodeIds = t;
    }
    store;
    dependencyNodeIds;
    getParentId(e) {
      let t = this.store.getParentId(e);
      return typeof t == "string" ? t : void 0;
    }
    getObjectKey(e, t) {
      let n = _t(e, t);
      return (n && this.dependencyNodeIds.add(n), this.store.getObjectKey(e, t));
    }
  },
  pr = class {
    groupKeysByChangedNodeId = new Map();
    changedNodeIdsByGroupKey = new Map();
    setGroupsForChangedNode(e, t) {
      if ((this.deleteGroupsForChangedNode(e), t.size !== 0)) {
        this.groupKeysByChangedNodeId.set(e, t);
        for (let n of t) {
          let i = this.changedNodeIdsByGroupKey.get(n);
          (i || ((i = new Set()), this.changedNodeIdsByGroupKey.set(n, i)), i.add(e));
        }
      }
    }
    deleteGroupsForChangedNode(e) {
      let t = this.groupKeysByChangedNodeId.get(e);
      if (t) {
        this.groupKeysByChangedNodeId.delete(e);
        for (let n of t) {
          let i = this.changedNodeIdsByGroupKey.get(n);
          i && (i.delete(e), i.size === 0 && this.changedNodeIdsByGroupKey.delete(n));
        }
      }
    }
    hasChangeGroup(e) {
      let t = this.getChangedNodeIdsForGroup(e);
      return t !== void 0 && t.size > 0;
    }
    getChangedNodeIdsForGroup(e) {
      return this.changedNodeIdsByGroupKey.get(e);
    }
    *entries() {
      yield* this.changedNodeIdsByGroupKey;
    }
  },
  mr = class {
    dependencyNodeIdsByChangedNodeId = new Map();
    changedNodeIdsByDependencyNodeId = new Map();
    setDependenciesForChangedNode(e, t) {
      if ((this.deleteDependenciesForChangedNode(e), t.size !== 0)) {
        this.dependencyNodeIdsByChangedNodeId.set(e, t);
        for (let n of t) {
          let i = this.changedNodeIdsByDependencyNodeId.get(n);
          (i || ((i = new Set()), this.changedNodeIdsByDependencyNodeId.set(n, i)), i.add(e));
        }
      }
    }
    deleteDependenciesForChangedNode(e) {
      let t = this.dependencyNodeIdsByChangedNodeId.get(e);
      if (t) {
        this.dependencyNodeIdsByChangedNodeId.delete(e);
        for (let n of t) {
          let i = this.changedNodeIdsByDependencyNodeId.get(n);
          i && (i.delete(e), i.size === 0 && this.changedNodeIdsByDependencyNodeId.delete(n));
        }
      }
    }
    addChangedNodeIdsForDependency(e, t) {
      let n = this.changedNodeIdsByDependencyNodeId.get(e);
      if (n) for (let i of n) t.add(i);
    }
  },
  yr = class {
    constructor(e, t, n) {
      this.groupKey = e;
      this.nodeChangeByNodeId = t;
      this.changedNodeIds = n;
    }
    groupKey;
    nodeChangeByNodeId;
    changedNodeIds;
    get nodeChangeCount() {
      return this.changedNodeIds.size;
    }
    hasNodeChange(e) {
      return this.changedNodeIds.has(e);
    }
    getNodeChange(e) {
      if (this.hasNodeChange(e)) return this.nodeChangeByNodeId.get(e);
    }
    *nodeChanges() {
      for (let e of this.changedNodeIds) {
        let t = this.nodeChangeByNodeId.get(e);
        (l(t, () => `Missing node change for group index: ${e}`), yield t);
      }
    }
  },
  yi = class {
    constructor(e, t) {
      this.nodeChangeByNodeId = e;
      this.nodeChangeGroupIndex = t;
    }
    nodeChangeByNodeId;
    nodeChangeGroupIndex;
    get nodeChangeCount() {
      return this.nodeChangeByNodeId.size;
    }
    hasNodeChange(e) {
      return this.nodeChangeByNodeId.has(e);
    }
    getNodeChange(e) {
      return this.nodeChangeByNodeId.get(e);
    }
    nodeChanges() {
      return this.nodeChangeByNodeId.values();
    }
    hasChangeGroup(e) {
      return this.nodeChangeGroupIndex.hasChangeGroup(e);
    }
    getChangeGroup(e) {
      let t = this.nodeChangeGroupIndex.getChangedNodeIdsForGroup(e);
      if (!(!t || t.size === 0)) return new yr(e, this.nodeChangeByNodeId, t);
    }
    *changeGroups() {
      for (let [e, t] of this.nodeChangeGroupIndex.entries())
        yield new yr(e, this.nodeChangeByNodeId, t);
    }
  },
  gr = class {
    constructor(e, t) {
      this.store = e;
      let n = e.base;
      (l(n, "Can't read node changes for main branch"),
        (this.baseStore = n),
        (this.resolveGroup = t.resolveGroup));
      let i = new Set(t.ignoredPropertyKeys);
      this.nodeChangeResolver = new gi(e, i);
    }
    store;
    baseStore;
    nodeChangeResolver;
    resolveGroup;
    nodeChanges;
    branchCursor;
    baseStoreCursors = [];
    nodeChangeByNodeId = new Map();
    nodeChangeGroupIndex = new pr();
    nodeChangeDependencyIndex = new mr();
    read() {
      if (!this.nodeChanges) return this.rebuildChanges();
      let e = bi(this.store),
        t = ou(this.store);
      return this.cursorsAreCurrent(e, t)
        ? this.nodeChanges
        : this.canUpdateIncrementally(e, t)
          ? (this.updateIncrementally(e, t), this.nodeChanges)
          : this.rebuildChanges();
    }
    cursorsAreCurrent(e, t) {
      let n = this.branchCursor;
      if (!n || !su(n, e) || this.baseStoreCursors.length !== t.length) return !1;
      for (let i = 0; i < t.length; i++) {
        let o = this.baseStoreCursors[i],
          s = t[i];
        if (!o || !s || !su(o, s)) return !1;
      }
      return !0;
    }
    canUpdateIncrementally(e, t) {
      let n = this.branchCursor;
      if (!n || !au(n, e) || this.baseStoreCursors.length !== t.length) return !1;
      for (let i = 0; i < t.length; i++) {
        let o = this.baseStoreCursors[i],
          s = t[i];
        if (!o || !s || !au(o, s)) return !1;
      }
      return !0;
    }
    rebuildChanges() {
      ((this.nodeChangeByNodeId = new Map()),
        (this.nodeChangeGroupIndex = new pr()),
        (this.nodeChangeDependencyIndex = new mr()),
        (this.nodeChanges = new yi(this.nodeChangeByNodeId, this.nodeChangeGroupIndex)));
      let e = this.store.getBranchOwnWriteIndex();
      for (let t of e.getNodeIdsWithOwnWrites()) {
        if (!this.store.isMaterializableNode(t)) continue;
        let n = this.nodeChangeResolver.resolveNodeChange(t);
        n && this.addNodeChange(n);
      }
      return (
        (this.branchCursor = bi(this.store)),
        (this.baseStoreCursors = ou(this.store)),
        this.nodeChanges
      );
    }
    updateIncrementally(e, t) {
      let n = this.branchCursor;
      if (!n) throw new Error("Missing branch node change reader cursor");
      let i = new Set(),
        o = new Set();
      (this.collectRowChanges(this.store, n.length, e.length, i, o),
        this.collectHierarchyChanges(this.store, n.hierarchyCursor, i, o));
      for (let s = 0; s < t.length; s++) {
        let a = this.baseStoreCursors[s],
          c = t[s];
        if (!a || !c) continue;
        let d = new Set();
        (this.collectRowChanges(c.store, a.length, c.length, i, d),
          this.collectHierarchyChanges(c.store, a.hierarchyCursor, i, d),
          this.collectOwnWriteNodeIdsInSubtrees(c.store, d, i));
        for (let u of d) o.add(u);
      }
      this.collectOwnWriteNodeIdsInSubtrees(this.store, o, i);
      for (let s of i) this.nodeChangeDependencyIndex.addChangedNodeIdsForDependency(s, i);
      (this.recomputeNodeChanges(i), (this.branchCursor = e), (this.baseStoreCursors = t));
    }
    collectRowChanges(e, t, n, i, o) {
      let s = e.branchData.columns;
      for (let a = t; a < n; a++) {
        let c = s.id.get(a),
          d = s.key.get(a),
          u = _t(c, d);
        u &&
          (i.add(u),
          this.nodeChangeDependencyIndex.addChangedNodeIdsForDependency(u, i),
          o && d === "parentid" && o.add(u));
      }
    }
    collectHierarchyChanges(e, t, n, i) {
      let o =
        e.getHierarchy().getInvalidatedNodeIdsSince(t) ??
        this.store.getBranchOwnWriteIndex().getNodeIdsWithOwnWrites();
      for (let s of o) (n.add(s), i.add(s));
    }
    collectOwnWriteNodeIdsInSubtrees(e, t, n) {
      let i = this.store.getBranchOwnWriteIndex(),
        o = new Set(t);
      for (let s of o) {
        i.getOwnWriteSummary(s) && n.add(s);
        for (let a of e.getChildrenIds(s)) o.add(a);
      }
    }
    recomputeNodeChanges(e) {
      if (e.size !== 0)
        for (let t of e) {
          if ((this.removeNodeChange(t), !this.store.isMaterializableNode(t))) continue;
          let n = this.nodeChangeResolver.resolveNodeChange(t);
          n && this.addNodeChange(n);
        }
    }
    addNodeChange(e) {
      let t = new Set(),
        n = { branch: new fr(this.store, t), base: new fr(this.baseStore, t) },
        i = this.resolveNodeChangeGroups(e, n);
      (this.nodeChangeByNodeId.set(e.nodeId, e),
        this.nodeChangeGroupIndex.setGroupsForChangedNode(e.nodeId, i),
        this.nodeChangeDependencyIndex.setDependenciesForChangedNode(e.nodeId, t));
    }
    removeNodeChange(e) {
      (this.nodeChangeByNodeId.delete(e),
        this.nodeChangeGroupIndex.deleteGroupsForChangedNode(e),
        this.nodeChangeDependencyIndex.deleteDependenciesForChangedNode(e));
    }
    resolveNodeChangeGroups(e, t) {
      let n = this.resolveGroup(e, t);
      if (typeof n == "string") {
        let i = new Set();
        return (i.add(n), i);
      }
      return n instanceof Set ? n : new Set(n);
    }
  },
  gi = class {
    constructor(e, t) {
      this.store = e;
      this.ignoredPropertyKeys = t;
      let n = e.base;
      (l(n, "Can't get node changes for main branch"), (this.baseStore = n));
    }
    store;
    ignoredPropertyKeys;
    baseStore;
    resolveNodeChange(e) {
      let t = this.store.getBranchOwnWriteIndex().getOwnWriteSummary(e);
      if (!t) return;
      let n = new Set();
      if (t.hasParentIdOwnWrite) return this.resolveHierarchyNodeChange(t, n);
      let i = this.store.getHierarchy().getParentId(t.nodeId);
      return this.createNodeChangeUpdated(t, typeof i == "string" ? i : void 0, n);
    }
    resolveHierarchyNodeChange(e, t) {
      let n = e.nodeId,
        i = this.store.getHierarchy(),
        o = i.getOwnParentRowIdx(n);
      l(o !== void 0, () => `Can't find parentId row index for ${n}`);
      let s = this.store.branchData.columns;
      if (s.value.get(o) === w) {
        let h = i.getParentId(n);
        return this.createNodeChangeUpdated(e, typeof h == "string" ? h : void 0, t);
      }
      let c = s.user.get(o),
        d = this.baseStore.getHierarchy().getParentId(n),
        u = i.getParentId(n);
      if (typeof d == "string" && typeof u == "string")
        return (t.add(c), this.createNodeChangeMoved(e, d, u, t));
      if (typeof d == "string") return (t.add(c), this.createNodeChangeRemoved(e, d, t));
      if (typeof u == "string") return (t.add(c), this.createNodeChangeAdded(e, u, t));
    }
    resolveChangedKeys(e, t) {
      if (!this.store.getHierarchy().inTree(e.nodeId)) return;
      let n = this.store.branchData.columns,
        i = new Map();
      for (let [o, s] of e.latestPropertyRowIndexByStoreId) {
        let a = new Map();
        for (let [c, d] of s) {
          if (this.ignoredPropertyKeys.has(c)) continue;
          let u = n.value.get(d);
          if (u === w) continue;
          let h = this.baseStore.getCurrentValue(o, c);
          if (Of(u, h)) continue;
          let f = n.user.get(d);
          (t.add(f), a.set(c, f));
        }
        a.size > 0 && i.set(o, a);
      }
      if (i.size > 0) return i;
    }
    createNodeChangeAdded(e, t, n) {
      return {
        type: "added",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        toParentId: t,
        actors: n,
        changedKeys: this.resolveChangedKeys(e, n) ?? new Map(),
      };
    }
    createNodeChangeRemoved(e, t, n) {
      return {
        type: "removed",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        fromParentId: t,
        actors: n,
      };
    }
    createNodeChangeMoved(e, t, n, i) {
      return {
        type: "moved",
        nodeId: e.nodeId,
        ...this.resolveNodeMeta(e.nodeId),
        fromParentId: t,
        toParentId: n,
        actors: i,
        changedKeys: this.resolveChangedKeys(e, i),
      };
    }
    createNodeChangeUpdated(e, t, n) {
      let i = this.resolveChangedKeys(e, n);
      if (i)
        return {
          type: "updated",
          nodeId: e.nodeId,
          ...this.resolveNodeMeta(e.nodeId),
          parentId: t,
          actors: n,
          changedKeys: i,
        };
    }
    resolveNodeMeta(e) {
      let t = this.resolveNodeMetaValue(e, "__class");
      l(t, () => `Can't find __class for ${e}`);
      let n = this.resolveNodeMetaValue(e, "name");
      return { __class: t, name: n };
    }
    resolveNodeMetaValue(e, t) {
      let n = this.store.getCurrentValue(e, t);
      if (
        typeof n == "string" ||
        ((n = this.baseStore.getCurrentValue(e, t)), typeof n == "string")
      )
        return n;
    }
  };
function ou(r) {
  let e = [],
    t = r.base;
  for (; t; ) {
    let n = bi(t);
    (e.push(n), (t = t.base));
  }
  return e;
}
function bi(r) {
  return {
    store: r,
    branchData: r.branchData,
    length: r.length,
    hierarchyCursor: r.getHierarchy().getInvalidationCursor(),
  };
}
function su(r, e) {
  return (
    r.store === e.store &&
    r.branchData === e.branchData &&
    r.length === e.length &&
    r.hierarchyCursor === e.hierarchyCursor
  );
}
function au(r, e) {
  return (
    r.store === e.store &&
    r.branchData === e.branchData &&
    r.length <= e.length &&
    r.hierarchyCursor <= e.hierarchyCursor
  );
}
function Of(r, e) {
  return !!(
    e === r ||
    ((e === void 0 || e === m) && (r === void 0 || r === m)) ||
    (Array.isArray(e) && Array.isArray(r) && tr(e, r))
  );
}
function cu(r, e = 0) {
  let t = r.byteLength,
    n = Math.trunc(t / 4) * 4,
    i = new DataView(r.buffer, r.byteOffset, t),
    o = e >>> 0;
  for (let a = 0; a < n; a += 4) {
    let c = i.getUint32(a, !0);
    ((c = Me(c, 3432918353)),
      (c = Ii(c, 15)),
      (c = Me(c, 461845907)),
      (o ^= c),
      (o = Ii(o, 13)),
      (o = Me(o, 5)),
      (o = Af(o, 3864292196)));
  }
  let s = 0;
  switch (t & 3) {
    case 3:
      s ^= i.getUint8(n + 2) << 16;
    case 2:
      s ^= i.getUint8(n + 1) << 8;
    case 1:
      ((s ^= i.getUint8(n)),
        (s = Me(s, 3432918353)),
        (s = Ii(s, 15)),
        (s = Me(s, 461845907)),
        (o ^= s));
  }
  return ((o ^= t), kf(o));
}
function Ii(r, e) {
  return ((r << e) | (r >>> (32 - e))) >>> 0;
}
function Me(r, e) {
  return Math.imul(r, e) >>> 0;
}
function Af(r, e) {
  return (r + e) >>> 0;
}
function kf(r) {
  return (
    (r ^= r >>> 16),
    (r = Me(r, 2246822507)),
    (r ^= r >>> 13),
    (r = Me(r, 3266489909)),
    (r ^= r >>> 16),
    r >>> 0
  );
}
var Dt = class {
  offset = 0;
  buffer = new ArrayBuffer(1024);
  view = new DataView(this.buffer);
  accommodate(e) {
    let t = this.buffer.byteLength;
    if (this.offset + e <= t) return;
    let n = this.getBytes(),
      i = Math.ceil(t * 1.5) + e,
      o = new ArrayBuffer(i);
    (new Uint8Array(o).set(n), (this.buffer = o), (this.view = new DataView(o)));
  }
  getBytes() {
    return new Uint8Array(this.buffer, 0, this.offset);
  }
  getHash() {
    let e = this.getBytes();
    return cu(e);
  }
  reset() {
    this.offset = 0;
  }
  writeUndefined() {
    this.writeRawUint8(0);
  }
  writeNull() {
    this.writeRawUint8(1);
  }
  writeBoolean(e) {
    e ? this.writeRawUint8(3) : this.writeRawUint8(2);
  }
  writeNumber(e) {
    Number.isNaN(e) ? this.writeRawUint8(5) : (this.writeRawUint8(4), this.writeRawFloat64(e));
  }
  writeString(e) {
    (this.writeRawUint8(6), this.writeRawUint32(e.length), this.writeRawUtf16(e));
  }
  writeArray(e) {
    (this.writeRawUint8(7), this.writeRawUint32(e.length));
    for (let t of e) this.write(t);
  }
  writeObject(e) {
    this.writeRawUint8(8);
    let t = Object.keys(e).sort();
    this.writeRawUint32(t.length);
    for (let n of t) {
      let i = e[n];
      (this.writeRawUint32(n.length), this.writeRawUtf16Low8(n), this.write(i));
    }
  }
  write(e) {
    switch (typeof e) {
      case "undefined":
        return this.writeUndefined();
      case "boolean":
        return this.writeBoolean(e);
      case "number":
        return this.writeNumber(e);
      case "string":
        return this.writeString(e);
      case "object":
        return e === null
          ? this.writeNull()
          : Array.isArray(e)
            ? this.writeArray(e)
            : this.writeObject(e);
      default:
        throw new Error(`Unsupported value type: ${typeof e}`);
    }
  }
  writeRawUint8(e) {
    (this.accommodate(1), this.view.setUint8(this.offset, e), (this.offset += 1));
  }
  writeRawUint32(e) {
    (this.accommodate(4), this.view.setUint32(this.offset, e, !0), (this.offset += 4));
  }
  writeRawFloat64(e) {
    (this.accommodate(8), this.view.setFloat64(this.offset, e, !0), (this.offset += 8));
  }
  writeRawUtf16(e) {
    let t = e.length;
    this.accommodate(t * 2);
    for (let n = 0; n < t; n++) {
      let i = e.charCodeAt(n),
        o = this.offset + n * 2;
      this.view.setUint16(o, i, !0);
    }
    this.offset += t * 2;
  }
  writeRawUtf16Low8(e) {
    let t = e.length;
    this.accommodate(t);
    for (let n = 0; n < t; n++) {
      let i = e.charCodeAt(n),
        o = this.offset + n;
      this.view.setUint8(o, i);
    }
    this.offset += t;
  }
};
function _e(r, e) {
  if (e === _) return;
  if (r.getNodeData(e)) return e;
  let t = e.indexOf(".");
  for (; t >= 0; ) {
    let n = e.slice(0, t);
    if (r.getNodeData(n)) return n;
    t = e.indexOf(".", t + 1);
  }
}
function du(r, e) {
  let t = r.getParentId(e);
  if (typeof t == "string") return t;
}
var Et = class {
  constructor(e) {
    this.store = e;
    for (let t = e; t; t = t.base)
      this.cursors.push({
        store: t,
        nextRowIndex: t.branchData.columns.length,
        hierarchyCursor: t.getHierarchy().getInvalidationCursor(),
      });
  }
  store;
  writer = new Dt();
  cache = new Map();
  cursors = [];
  get hierarchy() {
    return this.store.getHierarchy();
  }
  getChecksum(e) {
    for (let t of this.cursors)
      l(!t.store.inBatch, "ChecksumIndex.getChecksum must not be called mid-batch");
    return (this.evictStaleCacheEntries(), this.computeChecksum(e));
  }
  clearCacheEntries() {
    (this.cache.clear(), this.advanceCursors());
  }
  evictStaleCacheEntries() {
    if (this.cache.size === 0) return this.advanceCursors();
    let e = new Set(),
      t = this.store.getHierarchy();
    for (let n of this.cursors) {
      let i = n.store.branchData.columns,
        o = n.store.getHierarchy();
      if (i.length < n.nextRowIndex || o.getInvalidationCursor() < n.hierarchyCursor)
        return this.clearCacheEntries();
      for (let a = n.nextRowIndex; a < i.length; a++) {
        let c = i.id.get(a),
          d = _e(t, c);
        d !== void 0 && e.add(d);
      }
      let s = o.getInvalidatedNodeIdsSince(n.hierarchyCursor);
      if (s === void 0) return this.clearCacheEntries();
      for (let a of s) e.add(a);
    }
    this.advanceCursors();
    for (let n of e) {
      let i = this.cache.get(n);
      i?.parentId !== void 0 && e.add(i.parentId);
      let o = du(t, n);
      (o !== void 0 && e.add(o), this.cache.delete(n));
    }
  }
  advanceCursors() {
    for (let e of this.cursors)
      ((e.nextRowIndex = e.store.branchData.columns.length),
        (e.hierarchyCursor = e.store.getHierarchy().getInvalidationCursor()));
  }
  computeChecksum(e) {
    if (!this.hierarchy.getNodeData(e)?.inTree) return;
    let n = this.cache.get(e);
    if (n !== void 0) return n.checksum;
    let i = this.store.getObjectWithShallowChildren(e, 0);
    if (i === void 0) return;
    let o = du(this.hierarchy, e),
      s = this.getOwnChecksum(i),
      a = this.combineChecksums(s, this.getChildChecksums(e));
    return (this.cache.set(e, { checksum: a, parentId: o }), a);
  }
  getOwnChecksum(e) {
    return (this.writer.reset(), this.writer.writeObject(e), this.writer.getHash());
  }
  getChildChecksums(e) {
    if (!this.store.latest.has(e, "children")) return;
    let n = this.hierarchy.getChildrenIds(e),
      i = [];
    for (let o of n) {
      let s = this.computeChecksum(o);
      s !== void 0 && i.push(s);
    }
    return i;
  }
  combineChecksums(e, t) {
    return (
      this.writer.reset(),
      this.writer.writeNumber(e),
      this.writer.write(t),
      this.writer.getHash()
    );
  }
};
var br = "@";
function Q(r) {
  return r !== void 0 && r !== m && r !== w;
}
function wi(r) {
  if (r === m || r === w) return !0;
  if (typeof r != "string") return !1;
  let e = r.lastIndexOf(br);
  return e > 0 && e < r.length - 1;
}
function je(r, e) {
  return `${r}${br}${e}`;
}
function Ze(r) {
  (l(r !== m, "trying to get positionId of deleted child"),
    l(r !== w, "trying to get positionId of inherited child"));
  let e = r.lastIndexOf(br);
  return r.slice(e + 1);
}
function E(r) {
  if (r === m) return m;
  if (r === w) return w;
  let e = r.lastIndexOf(br);
  return r.slice(0, e);
}
function se(r) {
  return typeof r == "string" && r.startsWith("arr(") && r.endsWith(")");
}
function ae(r) {
  return typeof r == "string" && r.startsWith("obj(") && r.endsWith(")");
}
function De(r) {
  return typeof r == "string" && r.startsWith("aob(") && r.endsWith(")");
}
function $(r) {
  return r.slice(4, -1);
}
function Si(r) {
  return `arr(${r})`;
}
function vi(r) {
  return `obj(${r})`;
}
function uu(r) {
  return `aob(${r})`;
}
var Ir = class r {
  constructor(e, t, n, i, o) {
    this.source = e;
    this.target = t;
    this.windowStartIdx = n;
    ((this.hierarchy = e.getHierarchy()),
      (this.retainedNodeIds = i),
      (this.tombstoneAnchorNodeIds = o));
  }
  source;
  target;
  windowStartIdx;
  hierarchy;
  parentHistory = [];
  parentOverrides = new Map();
  visited = new Set();
  emittedParentIdRowIndexes = new Set();
  retainedNodeIds;
  tombstoneAnchorNodeIds;
  static run(e, t, n, i = new Set(), o = new Set()) {
    return new r(e, t, n, i, o).run();
  }
  run() {
    (l(
      this.source.branchId === this.target.branchId,
      () =>
        `Cannot compact data from different branches: ${this.source.branchId} != ${this.target.branchId}`
    ),
      this.emitObjectRows(Ie));
    let e = this.source.getRoot();
    (l(e, "Store has no root"), this.emitObjectRows(e));
    for (let t of this.hierarchy.getChildrenIds(e)) this.depthFirstWalk(t);
    return (
      this.emitOwnDeletedNodes(),
      this.emitOwnRevivedNodes(),
      this.emitRetainedNodes(),
      this.emitRowsWithTombstoneAnchors(),
      this.emitRecoverableOrphans(),
      this.emitInWindowParentIdRows(),
      this.emitTombstoneAnchors(),
      this.sortParentHistory(),
      (this.target.branchData.hierarchyData = new W(this.parentHistory, this.parentOverrides)),
      this.target.manifest.copyClientStateFrom(this.source.manifest),
      this.target.updateCaches(this.target.branchData.hierarchyData),
      (this.target.branchData.metadata.seq = this.source.branchData.metadata.seq),
      this.target
    );
  }
  sortParentHistory() {
    let e = this.target.branchData.columns;
    this.parentHistory.sort((t, n) => {
      let i = e.seq.get(t),
        o = e.seq.get(n);
      return i === o ? e.client.get(t) - e.client.get(n) : i - o;
    });
  }
  depthFirstWalk(e) {
    (this.emitObjectRows(e), this.emitResolvedParent(e));
    for (let t of this.hierarchy.getChildrenIds(e)) this.depthFirstWalk(t);
  }
  emitInWindowParentIdRows() {
    let e = this.source,
      t = this.hierarchy;
    for (let n = this.windowStartIdx; n < e.length; n++) {
      if (e.branchData.columns.key.get(n) !== "parentid" || this.emittedParentIdRowIndexes.has(n))
        continue;
      let o = e.branchData.getRow(n),
        s = o.id,
        a = t.getOwnParentRowIdx(s),
        c = t.getParentId(s) === m;
      if (!(c && a !== void 0 && a < this.windowStartIdx)) {
        if (c && a === n) {
          (this.emitObjectRows(s), this.emitResolvedParent(s));
          continue;
        }
        (!this.visited.has(s) && !c && !t.inTree(s)) || this.emitParentIdRow(o, n);
      }
    }
  }
  emitRow(e) {
    return (
      this.target.branchData.manifest.addTimestamp(e.client, e.seq),
      this.target.branchData.addRow(e)
    );
  }
  emitParentIdRow(e, t) {
    (this.emittedParentIdRowIndexes.add(t),
      this.source.base && e.id !== _ && e.value !== m && this.retainedNodeIds.add(e.id));
    let n = this.emitRow(e);
    (this.parentHistory.push(n), this.maybeEmitOverride(e, n));
  }
  emitOwnRevivedNodes() {
    if (!this.source.base) return;
    let e = this.source.getHierarchy(),
      t = new Set(),
      n = new Set();
    for (let i of e.parentHistory) {
      let o = this.source.branchData.columns.id.get(i);
      t.has(o) ||
        (t.add(o),
        this.source.base.getParentId(o) === m &&
          e.getOwnParentId(o) !== m &&
          e.inTree(o) &&
          xi(this.hierarchy, o, this.retainedNodeIds, n));
    }
  }
  emitOwnDeletedNodes() {
    if (!this.source.base) return;
    let e = this.source.getHierarchy(),
      t = new Set();
    for (let n of e.parentHistory) {
      let i = this.source.branchData.columns.id.get(n);
      if (t.has(i) || (t.add(i), e.getOwnParentId(i) !== m)) continue;
      let o = this.source.base.getParentId(i) === void 0,
        s = e.getOwnNodeData(i)?.resolvedParentId,
        a = s !== void 0 && s < this.windowStartIdx;
      if (o && a) {
        this.emitResolvedParent(i);
        continue;
      }
      (this.emitObjectRows(i), this.emitResolvedParent(i));
    }
  }
  emitRetainedNodes() {
    for (let e of this.retainedNodeIds)
      this.visited.has(e) || (this.emitObjectRows(e), this.emitResolvedParent(e));
  }
  emitRowsWithTombstoneAnchors() {
    if (!this.source.base) return;
    let e = new Map();
    for (let t of this.source.latest.keys()) {
      if (this.visited.has(t) || !this.source.latest.getOwnLatest(t)) continue;
      let n = _e(this.hierarchy, t);
      if (n === void 0 || Ci(this.source, n)) continue;
      let i = e.get(n);
      (e.has(n) ||
        ((i = fu(this.source, n)), e.set(n, i), i !== void 0 && this.tombstoneAnchorNodeIds.add(i)),
        i !== void 0 &&
          (this.emitObjectRows(t),
          t === n && this.hierarchy.getOwnParentId(t) !== m && this.emitResolvedParent(t)));
    }
  }
  emitTombstoneAnchors() {
    let e = [];
    for (let t of this.tombstoneAnchorNodeIds)
      this.hierarchy.getOwnParentId(t) === m && (this.emitResolvedParent(t), e.push(t));
    for (let t of e) this.tombstoneAnchorNodeIds.delete(t);
  }
  emitRecoverableOrphans() {
    let e = this.hierarchy,
      t = this.source.branchData.columns.id,
      n = new Set();
    for (let i of e.parentHistory) {
      let o = t.get(i);
      if (n.has(o) || (n.add(o), this.visited.has(o)) || e.getOwnParentId(o) === m || e.inTree(o))
        continue;
      let s = hu(e, o);
      if (s)
        for (let a of s)
          (e.getParentId(a) === m && this.tombstoneAnchorNodeIds.add(a),
            !this.visited.has(a) && (this.emitObjectRows(a), this.emitResolvedParent(a)));
    }
  }
  emitObjectRows(e) {
    if (this.visited.has(e)) return;
    (this.visited.add(e),
      this.source.latest.getOwnLatest(e)?.forEachOwn((i, o) => {
        let s = this.source.branchData.getRow(o);
        this.emitRow(s);
      }));
    let n = this.source.latest.getLatest(e);
    if (n)
      for (let i of n.keys()) {
        let o = this.source.getCurrentValue(e, i);
        (typeof o != "string" && !Array.isArray(o)) || this.followReferences(o);
      }
  }
  emitMergeableArrayRows(e) {
    if (this.visited.has(e)) return;
    (this.visited.add(e),
      this.source.latest.getOwnLatest(e)?.forEachOwn((i, o) => {
        let s = this.source.branchData.getRow(o);
        this.emitRow(s);
      }));
    let n = this.source.latest.getLatest(e);
    if (n)
      for (let i of n.keys())
        i !== O && this.source.getCurrentValue(e, i) !== m && this.emitObjectRows(i);
  }
  followReferences(e) {
    if (ae(e) || De(e)) {
      this.emitObjectRows($(e));
      return;
    }
    if (se(e)) {
      this.emitMergeableArrayRows($(e));
      return;
    }
    if (Array.isArray(e)) for (let t of e) this.followReferences(t);
  }
  emitResolvedParent(e) {
    let n = this.hierarchy.getOwnNodeData(e)?.resolvedParentId;
    if (n === void 0) return;
    let i = this.source.branchData.getRow(n);
    (this.emittedParentIdRowIndexes.has(n) || this.emitParentIdRow(i, n),
      n >= this.windowStartIdx && this.emitPreWindowAnchor(i));
  }
  emitPreWindowAnchor(e) {
    let t = this.source.getHierarchy(),
      n = t.getOwnParentBySeq(e.id, e.seq, !1);
    for (; n && n.index >= this.windowStartIdx; ) n = t.getOwnParentBySeq(n.id, n.seq, !1);
    if (!n || this.emittedParentIdRowIndexes.has(n.index)) return;
    let i = this.source.branchData.getRow(n.index);
    this.emitParentIdRow(i, n.index);
  }
  maybeEmitOverride(e, t) {
    let n = this.hierarchy.getParentOverride(e.id, e.seq, e.client);
    if (!n) return;
    let i = { ...n, rowIdx: t };
    this.addParentOverride(e, i);
    let o = this.source.getHierarchy(),
      s = o.getOwnParentBySeq(e.id, e.seq, !1);
    for (; s && E(s.value) !== E(i.parentTo); ) s = o.getOwnParentBySeq(s.id, s.seq, !1);
    if (!s || this.emittedParentIdRowIndexes.has(s.index)) return;
    let a = this.source.branchData.getRow(s.index);
    this.emitParentIdRow(a, s.index);
  }
  addParentOverride(e, t) {
    let n = this.parentOverrides.get(e.id);
    n || ((n = new Map()), this.parentOverrides.set(e.id, n));
    let i = n.get(e.seq);
    (i || ((i = new Map()), n.set(e.seq, i)), i.set(e.client, t));
  }
};
function lu(r, e, t) {
  (Tf(r, e), Mf(r, t));
}
function Tf(r, e) {
  let t = r.getHierarchy(),
    n = new Set(),
    i = new Set();
  for (let o of t.parentHistory) {
    let s = r.branchData.columns.id.get(o);
    n.has(s) ||
      (n.add(s),
      t.getOwnParentId(s) !== m &&
        (e.add(s), r.base?.getParentId(s) === m && t.inTree(s) && xi(t, s, e, i)));
  }
}
function xi(r, e, t, n) {
  if (!n.has(e)) {
    n.add(e);
    for (let i of r.getChildrenIds(e))
      (r.getOwnParentRowIdx(i) === void 0 && t.add(i), xi(r, i, t, n));
  }
}
function Mf(r, e) {
  if (!r.base) return;
  let t = new Set();
  for (let n of r.latest.keys()) {
    if (!r.latest.getOwnLatest(n)) continue;
    let i = _e(r.getHierarchy(), n);
    if (i === void 0 || t.has(i) || (t.add(i), Ci(r, i))) continue;
    let o = fu(r, i);
    o !== void 0 && e.add(o);
  }
  _f(r, e);
}
function _f(r, e) {
  let t = r.getHierarchy(),
    n = new Set();
  for (let i of t.parentHistory) {
    let o = r.branchData.columns.id.get(i);
    if (n.has(o) || (n.add(o), t.getOwnParentId(o) === m) || t.inTree(o)) continue;
    let s = hu(t, o);
    if (s) for (let a of s) t.getParentId(a) === m && e.add(a);
  }
}
function hu(r, e) {
  let t = [e],
    n = new Set([e]),
    i = e;
  for (;;) {
    let o = r.getParentId(i);
    if (o === void 0) return;
    if (o === m) return t;
    if (n.has(o) || r.inTree(o)) return;
    (t.push(o), n.add(o), (i = o));
  }
}
function Ci(r, e) {
  return r.getHierarchy().getOwnParentId(e) === m;
}
function fu(r, e) {
  if (!r.base || Ci(r, e)) return;
  if (r.base.getParentId(e) === m) return e;
  let t = new Set([e]),
    n = r.getParentId(e);
  for (; n !== void 0 && n !== m; ) {
    if (t.has(n)) return;
    if ((t.add(n), r.getParentId(n) === m)) return n;
    n = r.getParentId(n);
  }
}
var Ge = class {
    #e = new Set();
    #t = new Set();
    #r;
    constructor(e) {
      this.#r = e;
    }
    add(e) {
      return (this.#t.delete(e), this.#e.add(e), this);
    }
    delete(e) {
      let t = this.#e.delete(e);
      if (this.#r?.has(e)) {
        let n = this.#t.has(e);
        return (this.#t.add(e), t || !n);
      }
      return t;
    }
    reset(e) {
      (this.#e.delete(e), this.#t.delete(e));
    }
    has(e) {
      return this.#e.has(e) ? !0 : this.#t.has(e) ? !1 : (this.#r?.has(e) ?? !1);
    }
    clear() {
      if ((this.#e.clear(), this.#t.clear(), this.#r)) for (let e of this.#r) this.#t.add(e);
    }
    get size() {
      let e = this.#e.size;
      if (!this.#r) return e;
      for (let t of this.#r) !this.#e.has(t) && !this.#t.has(t) && (e += 1);
      return e;
    }
    *values() {
      for (let e of this.#e) yield e;
      if (this.#r) for (let e of this.#r) this.#e.has(e) || this.#t.has(e) || (yield e);
    }
    keys() {
      return this.values();
    }
    *entries() {
      for (let e of this.values()) yield [e, e];
    }
    forEach(e, t) {
      for (let n of this.values()) e.call(t, n, n, this);
    }
    [Symbol.iterator]() {
      return this.values();
    }
  },
  We = class {
    #e = new Map();
    #t = new Set();
    #r;
    constructor(e) {
      this.#r = e;
    }
    get(e) {
      if (this.#e.has(e)) return this.#e.get(e);
      if (!this.#t.has(e)) return this.#r?.get(e);
    }
    has(e) {
      return this.#e.has(e) ? !0 : this.#t.has(e) ? !1 : (this.#r?.has(e) ?? !1);
    }
    set(e, t) {
      return (this.#t.delete(e), this.#e.set(e, t), this);
    }
    delete(e) {
      let t = this.#e.delete(e);
      if (this.#r?.has(e)) {
        let n = this.#t.has(e);
        return (this.#t.add(e), t || !n);
      }
      return t;
    }
    reset(e) {
      (this.#e.delete(e), this.#t.delete(e));
    }
    clear() {
      if ((this.#e.clear(), this.#t.clear(), this.#r)) for (let e of this.#r.keys()) this.#t.add(e);
    }
    get size() {
      let e = this.#e.size;
      if (!this.#r) return e;
      for (let t of this.#r.keys()) !this.#e.has(t) && !this.#t.has(t) && (e += 1);
      return e;
    }
    *entries() {
      for (let e of this.#e.entries()) yield e;
      if (this.#r)
        for (let [e, t] of this.#r.entries()) this.#e.has(e) || this.#t.has(e) || (yield [e, t]);
    }
    *keys() {
      for (let [e] of this.entries()) yield e;
    }
    *values() {
      for (let [, e] of this.entries()) yield e;
    }
    forEach(e, t) {
      for (let [n, i] of this.entries()) e.call(t, i, n, this);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    getOwned(e) {
      return this.#e.get(e);
    }
    ensureOwned(e, t) {
      let n = this.#e.get(e);
      if (n !== void 0) return n;
      let i = t(this.get(e));
      return (this.set(e, i), i);
    }
  };
var wr = class {
    classToIds = new Map();
    masterIdToReplicaIds = new Map();
    formContainerIds = new Set();
    withDataIdentifierIds = new Set();
    dataIdentifierToIds = new Map();
    getMutableIndexSet(e, t) {
      let n = e.get(t);
      return (n || ((n = new Set()), e.set(t, n)), n);
    }
    removeFromIndexSet(e, t, n, i = !1) {
      let o = e.get(t);
      o && (o.delete(n), i && o.size === 0 && e.delete(t));
    }
    syncAddedClass(e, t) {
      this.getMutableIndexSet(this.classToIds, e).add(t);
    }
    syncRemovedClass(e, t) {
      this.removeFromIndexSet(this.classToIds, e, t);
    }
    resetClass(e, t) {
      this.syncRemovedClass(e, t);
    }
    syncAddedFormContainer(e) {
      this.formContainerIds.add(e);
    }
    syncRemovedFormContainer(e) {
      this.formContainerIds.delete(e);
    }
    syncAddedWithDataIdentifier(e) {
      this.withDataIdentifierIds.add(e);
    }
    syncRemovedWithDataIdentifier(e) {
      this.withDataIdentifierIds.delete(e);
    }
    syncAddedDataIdentifier(e, t) {
      this.getMutableIndexSet(this.dataIdentifierToIds, e).add(t);
    }
    syncRemovedDataIdentifier(e, t) {
      this.removeFromIndexSet(this.dataIdentifierToIds, e, t, !0);
    }
    syncAddedReplicaOwner(e, t) {
      this.getMutableIndexSet(this.masterIdToReplicaIds, e).add(t);
    }
    syncRemovedReplicaOwner(e, t) {
      this.removeFromIndexSet(this.masterIdToReplicaIds, e, t);
    }
    resetReplicaOwner(e, t) {
      this.syncRemovedReplicaOwner(e, t);
    }
    syncAddedNodeIndexes(e, t) {
      t.inTree &&
        (t.__class && this.syncAddedClass(t.__class, e),
        t.isFormContainer && this.syncAddedFormContainer(e),
        t.dataIdentifier !== void 0 && this.syncAddedWithDataIdentifier(e),
        t.dataIdentifier && this.syncAddedDataIdentifier(t.dataIdentifier, e));
    }
    syncRemovedNodeIndexes(e, t) {
      (t.__class && this.syncRemovedClass(t.__class, e),
        this.syncRemovedFormContainer(e),
        this.syncRemovedWithDataIdentifier(e),
        t.dataIdentifier && this.syncRemovedDataIdentifier(t.dataIdentifier, e));
    }
  },
  Sr = class {
    constructor(e) {
      this.base = e;
      ((this.classToIds = new We(this.base.classToIds)),
        (this.masterIdToReplicaIds = new We(this.base.masterIdToReplicaIds)),
        (this.formContainerIds = new Ge(this.base.formContainerIds)),
        (this.withDataIdentifierIds = new Ge(this.base.withDataIdentifierIds)),
        (this.dataIdentifierToIds = new We(this.base.dataIdentifierToIds)));
    }
    base;
    classToIds;
    masterIdToReplicaIds;
    formContainerIds;
    withDataIdentifierIds;
    dataIdentifierToIds;
    getMutableIndexSet(e, t) {
      return e.ensureOwned(t, (n) => new Ge(n));
    }
    removeFromIndexSet(e, t, n, i = !1) {
      if (!e.get(t)) return;
      this.getMutableIndexSet(e, t).delete(n);
    }
    syncAddedSetIndex(e, t, n) {
      t ? e.reset(n) : e.add(n);
    }
    syncRemovedSetIndex(e, t, n) {
      t ? e.delete(n) : e.reset(n);
    }
    syncAddedMapSetIndex(e, t, n, i, o = !1) {
      if (!o && (t.get(n)?.has(i) ?? !1)) {
        e.getOwned(n)?.reset(i);
        return;
      }
      this.getMutableIndexSet(e, n).add(i);
    }
    syncRemovedMapSetIndex(e, t, n, i, o = !1, s = !1) {
      let a = !o && (t.get(n)?.has(i) ?? !1),
        c = !o && t.has(n);
      if (a) {
        this.getMutableIndexSet(e, n).delete(i);
        return;
      }
      let d = e.getOwned(n);
      (d?.reset(i), s && d?.size === 0 && !c && e.delete(n));
    }
    syncAddedClass(e, t, n = !1) {
      this.syncAddedMapSetIndex(this.classToIds, this.base.classToIds, e, t, n);
    }
    syncRemovedClass(e, t, n = !1) {
      this.syncRemovedMapSetIndex(this.classToIds, this.base.classToIds, e, t, n);
    }
    resetClass(e, t) {
      let n = this.classToIds.getOwned(e);
      (n?.reset(t), n?.size === 0 && this.classToIds.reset(e));
    }
    syncAddedFormContainer(e, t = !1) {
      this.syncAddedSetIndex(this.formContainerIds, !t && this.base.formContainerIds.has(e), e);
    }
    syncRemovedFormContainer(e, t = !1) {
      this.syncRemovedSetIndex(this.formContainerIds, !t && this.base.formContainerIds.has(e), e);
    }
    syncAddedWithDataIdentifier(e, t = !1) {
      this.syncAddedSetIndex(
        this.withDataIdentifierIds,
        !t && this.base.withDataIdentifierIds.has(e),
        e
      );
    }
    syncRemovedWithDataIdentifier(e, t = !1) {
      this.syncRemovedSetIndex(
        this.withDataIdentifierIds,
        !t && this.base.withDataIdentifierIds.has(e),
        e
      );
    }
    syncAddedDataIdentifier(e, t, n = !1) {
      this.syncAddedMapSetIndex(this.dataIdentifierToIds, this.base.dataIdentifierToIds, e, t, n);
    }
    syncRemovedDataIdentifier(e, t, n = !1) {
      this.syncRemovedMapSetIndex(
        this.dataIdentifierToIds,
        this.base.dataIdentifierToIds,
        e,
        t,
        n,
        !0
      );
    }
    syncAddedReplicaOwner(e, t) {
      this.getMutableIndexSet(this.masterIdToReplicaIds, e).add(t);
    }
    syncRemovedReplicaOwner(e, t) {
      this.removeFromIndexSet(this.masterIdToReplicaIds, e, t);
    }
    resetReplicaOwner(e, t) {
      this.masterIdToReplicaIds.getOwned(e)?.reset(t);
    }
    syncAddedNodeIndexes(e, t, n = !1) {
      (t.__class && this.syncAddedClass(t.__class, e, n),
        t.isFormContainer && this.syncAddedFormContainer(e, n),
        t.dataIdentifier !== void 0 && this.syncAddedWithDataIdentifier(e, n),
        t.dataIdentifier && this.syncAddedDataIdentifier(t.dataIdentifier, e, n));
    }
    syncRemovedNodeIndexes(e, t, n = !1) {
      (t.__class && this.syncRemovedClass(t.__class, e, n),
        this.syncRemovedFormContainer(e, n),
        this.syncRemovedWithDataIdentifier(e, n),
        t.dataIdentifier && this.syncRemovedDataIdentifier(t.dataIdentifier, e, n));
    }
  };
var Df = 1e3,
  Ni = class {
    base;
    constructor(e) {
      e && (this.base = { data: e, overrides: new Set() });
    }
    id = "";
    parentIdHistory = [];
    resolvedParentId = void 0;
    childrenById = void 0;
    cachedChildren = void 0;
    cachedChildrenSorted = !1;
    cachedChildrenLastCounter = 0;
    cachedChildrenCurrentCounter = 0;
    cachedChildrenBaseCounter = 0;
    inTree = !1;
    inMaster = void 0;
    ___class = void 0;
    get __class() {
      return !this.base || this.base.overrides.has("__class")
        ? this.___class
        : this.base.data.__class;
    }
    set __class(e) {
      (this.base?.overrides.add("__class"), (this.___class = e));
    }
    _isMaster = !1;
    get isMaster() {
      return !this.base || this.base.overrides.has("isMaster")
        ? this._isMaster
        : this.base.data.isMaster;
    }
    set isMaster(e) {
      (this.base?.overrides.add("isMaster"), (this._isMaster = e));
    }
    _isFormContainer = !1;
    get isFormContainer() {
      return !this.base || this.base.overrides.has("isFormContainer")
        ? this._isFormContainer
        : this.base.data.isFormContainer;
    }
    set isFormContainer(e) {
      (this.base?.overrides.add("isFormContainer"), (this._isFormContainer = e));
    }
    _dataIdentifier = void 0;
    get dataIdentifier() {
      return !this.base || this.base.overrides.has("dataIdentifier")
        ? this._dataIdentifier
        : this.base.data.dataIdentifier;
    }
    set dataIdentifier(e) {
      (this.base?.overrides.add("dataIdentifier"), (this._dataIdentifier = e));
    }
    _replicaInfoMaster;
    get replicaInfoMaster() {
      return !this.base || this.base.overrides.has("replicaInfoMaster")
        ? this._replicaInfoMaster
        : this.base.data.replicaInfoMaster;
    }
    set replicaInfoMaster(e) {
      (this.base?.overrides.add("replicaInfoMaster"), (this._replicaInfoMaster = e));
    }
    inherit(e) {
      if (this.base) {
        this.base.overrides.delete(e);
        return;
      }
      switch (e) {
        case "__class":
          this.___class = void 0;
          break;
        case "isMaster":
          this._isMaster = !1;
          break;
        case "isFormContainer":
          this._isFormContainer = !1;
          break;
        case "dataIdentifier":
          this._dataIdentifier = void 0;
          break;
        case "replicaInfoMaster":
          this._replicaInfoMaster = void 0;
          break;
      }
    }
  },
  Bt = class {
    constructor(e, t, n) {
      this.store = e;
      this.latest = t;
      this.base = n;
      ((this.branchData = e.branchData),
        this.base
          ? ((this.indexes = new Sr(this.base.indexes)), (this.rootNodeId = this.base.rootNodeId))
          : (this.indexes = new wr()));
    }
    store;
    latest;
    base;
    rootNodeId = void 0;
    indexes;
    hierarchyChanged = !1;
    hierarchyInvalidationsTrimmed = 0;
    hierarchyInvalidations = [];
    nodeData = new Map();
    parentHistory = [];
    parentOverrides = new Map();
    get hasParentOverrides() {
      for (let e of this.parentOverrides.values()) if (e.size > 0) return !0;
      return !1;
    }
    branchData;
    get classToIds() {
      return this.indexes.classToIds;
    }
    get masterIdToReplicaIds() {
      return this.indexes.masterIdToReplicaIds;
    }
    get formContainerIds() {
      return this.indexes.formContainerIds;
    }
    get withDataIdentifierIds() {
      return this.indexes.withDataIdentifierIds;
    }
    get dataIdentifierToIds() {
      return this.indexes.dataIdentifierToIds;
    }
    getRootId() {
      return this.rootNodeId;
    }
    cachedInTreeCount = 0;
    get inTreeCount() {
      if (!this.base) return this.cachedInTreeCount;
      let e = this.base?.inTreeCount ?? 0;
      for (let [t, n] of this.nodeData) {
        if (t === this.rootNodeId) continue;
        let i = this.base?.inTree(t) ?? !1;
        e += Number(n.inTree) - Number(i);
      }
      return e;
    }
    sizeWithoutReplicas() {
      return this.inTreeCount + 1;
    }
    getInvalidationCursor() {
      return this.hierarchyInvalidationsTrimmed + this.hierarchyInvalidations.length;
    }
    getInvalidatedNodeIdsSince(e) {
      if (e < this.hierarchyInvalidationsTrimmed) return;
      let t = new Set(),
        n = e - this.hierarchyInvalidationsTrimmed;
      for (let i = n; i < this.hierarchyInvalidations.length; i++) {
        let o = this.hierarchyInvalidations[i];
        if (o) for (let s of o) t.add(s);
      }
      return t;
    }
    recordInvalidation(e) {
      e.size !== 0 && (this.hierarchyInvalidations.push(e), this.trimHierarchyInvalidations());
    }
    trimHierarchyInvalidations() {
      let e = this.hierarchyInvalidations.length - Df;
      e <= 0 ||
        ((this.hierarchyInvalidationsTrimmed += e), this.hierarchyInvalidations.splice(0, e));
    }
    has(e) {
      return !!(e === this.rootNodeId || this.inTree(e) || this.getLatestReplicaChild(e));
    }
    inTree(e) {
      let t = this.getOwnNodeData(e);
      return t ? t.inTree : (this.base?.inTree(e) ?? !1);
    }
    getNodeData(e) {
      let t = this.nodeData.get(e);
      return t || this.base?.getNodeData(e);
    }
    getOwnNodeData(e) {
      return this.nodeData.get(e);
    }
    ensureNodeData(e) {
      let t = this.nodeData.get(e);
      if (!t) {
        let n = this.base?.ensureNodeData(e);
        ((t = new Ni(n)),
          (t.id = e),
          n && ((t.inTree = n.inTree), (t.inMaster = n.inMaster)),
          this.nodeData.set(e, t));
      }
      return t;
    }
    getLatestReplicaChild(e) {
      if (e.length < 11) return;
      let n = e.slice(0, 9),
        i = this.getNodeData(n);
      if (i && this.inTree(n)) {
        if (!i.replicaInfoMaster) return;
        let o = i.replicaInfoMaster,
          s = e.slice(9),
          a = this.getNodeData(s);
        return !a || !this.inTree(s) || a.inMaster !== o ? void 0 : [n, i, s, a];
      }
      for (let o = 7; o < e.length - 9 + 2; o++)
        if (o !== 9 && ((n = e.slice(0, o)), (i = this.getNodeData(n)), i && this.inTree(n))) {
          if (!i?.replicaInfoMaster) return;
          let s = i.replicaInfoMaster,
            a = e.slice(o),
            c = this.getNodeData(a);
          return !c || !this.inTree(a) || c.inMaster !== s ? void 0 : [n, i, a, c];
        }
    }
    computeTreeHash() {
      let e = 0,
        t = this;
      function n(i) {
        e = Ho(i, e);
        let o = t.getChildrenIds(i);
        for (let s of o) n(s);
      }
      return (this.rootNodeId && n(this.rootNodeId), e);
    }
    addChild(e, t, n, i = !1) {
      if (
        ((e.childrenById ??= new Map()),
        e.childrenById.set(t, n),
        !i || !e.cachedChildrenSorted || !e.cachedChildren || this.isChildrenCacheDirty(e.id))
      ) {
        e.cachedChildrenCurrentCounter += 1;
        return;
      }
      e.cachedChildrenCurrentCounter += 1;
      let o = e.cachedChildren,
        s = Se(o, t, (a, c) => {
          let d = this.getHierarchyKey(a);
          l(Q(d), () => `invalid key in hierarchy, row ${a}`);
          let u = this.getHierarchyKey(c);
          if ((l(Q(u), () => `invalid key in hierarchy, row ${c}`), d < u)) return -1;
          if (d > u) return 1;
          if (this.store.optimizedReading) return a < c ? -1 : a > c ? 1 : 0;
          throw new Error("Hierarchy keys should be unique:" + d);
        });
      (o.splice(s, 0, t), (e.cachedChildrenLastCounter = e.cachedChildrenCurrentCounter));
    }
    removeChild(e, t) {
      let n = this.ensureNodeData(e);
      (n.childrenById?.delete(t), (n.cachedChildrenCurrentCounter += 1));
    }
    updateReachability(e, t, n) {
      (e.inTree === t && e.inMaster === n) ||
        (!this.base &&
          e.id !== this.rootNodeId &&
          e.inTree !== t &&
          (this.cachedInTreeCount += Number(t) - Number(e.inTree)),
        (e.inTree = t),
        (e.inMaster = n));
    }
    markInTree(e, t, n, i = new Set(), o = !1) {
      if (e.inTree && !i.has(n)) {
        (i.add(n),
          this.updateReachability(t, !0, e.isMaster ? e.id : e.inMaster),
          this.indexes.syncAddedNodeIndexes(n, t, o));
        for (let s of this.getCachedChildrenIds(n)) {
          let a = this.ensureNodeData(s);
          a.inTree || this.markInTree(t, a, s, i, o);
        }
      }
    }
    clearInTree(e, t, n = new Set()) {
      if (!n.has(t)) {
        (n.add(t),
          e.inTree && this.updateReachability(e, !1, void 0),
          this.indexes.syncRemovedNodeIndexes(t, e));
        for (let i of this.getCachedChildrenIds(t)) {
          let o = this.ensureNodeData(i);
          this.clearInTree(o, i, n);
        }
      }
    }
    resetInTree(e, t, n = new Set()) {
      if (n.has(t)) return;
      (n.add(t), this.indexes.syncRemovedNodeIndexes(t, e));
      let i = this.getParentId(t);
      if (t === this.rootNodeId) this.updateReachability(e, !0, void 0);
      else if (i !== void 0 && i !== m) {
        let o = this.ensureNodeData(i);
        this.updateReachability(e, o.inTree, o.isMaster ? o.id : o.inMaster);
      } else this.updateReachability(e, !1, void 0);
      e.inTree && this.indexes.syncAddedNodeIndexes(t, e);
      for (let o of this.getCachedChildrenIds(t)) {
        let s = this.ensureNodeData(o),
          a = this.getOwnParentRowIdx(o);
        if (a !== void 0 && this.branchData.columns.value.get(a) !== w) {
          e.inTree ? this.markInTree(e, s, o, n, !0) : this.clearInTree(s, o, n);
          continue;
        }
        e.inTree ? this.resetInTree(s, o, n) : this.clearInTree(s, o, n);
      }
    }
    applyMasterState(e) {
      let t = e.isMaster ? e.id : e.inMaster;
      for (let n of this.getCachedChildrenIds(e.id)) {
        let i = this.ensureNodeData(n);
        (this.updateReachability(i, i.inTree, t), this.applyMasterState(i));
      }
    }
    updateParent(e, t, n, i, o) {
      o && o !== m && this.removeChild(o, t);
      let s = E(n);
      if (s === w) {
        let a = this.base?.getParentId(t);
        if (a !== void 0 && a !== m) {
          let c = this.ensureNodeData(a);
          ((c.cachedChildrenCurrentCounter += 1),
            c.inTree ? this.resetInTree(e, t) : this.clearInTree(e, t));
        } else this.clearInTree(e, t);
      } else if (s !== m) {
        let a = this.ensureNodeData(s);
        (this.addChild(a, t, i, !0),
          a.inTree ? this.markInTree(a, e, t, void 0, !0) : this.clearInTree(e, t));
      } else this.clearInTree(e, t);
    }
    getChildrenCounter(e) {
      let t = this.getOwnNodeData(e);
      return t ? t.cachedChildrenCurrentCounter : (this.base?.getChildrenCounter(e) ?? 0);
    }
    isChildrenCacheDirty(e) {
      let t = this.getOwnNodeData(e);
      if (!t?.cachedChildren || t.cachedChildrenLastCounter !== t.cachedChildrenCurrentCounter)
        return !0;
      if (this.base) {
        let n = this.base.getChildrenCounter(e);
        if (t.cachedChildrenBaseCounter !== n || this.base.isChildrenCacheDirty(e)) return !0;
      }
      return !1;
    }
    getSubtreeCount(e) {
      let t = 1;
      for (let n of this.getCachedChildrenIds(e)) t += this.getSubtreeCount(n);
      return t;
    }
    getCachedChildrenIds(e) {
      let t = this.ensureNodeData(e);
      if (!this.isChildrenCacheDirty(e)) return t.cachedChildren ?? [];
      let n = new Set();
      for (let o of this.base?.getCachedChildrenIds(e) ?? []) e === this.getParentId(o) && n.add(o);
      if (t.childrenById) for (let o of t.childrenById.keys()) n.add(o);
      let i = Array.from(n);
      return (
        (t.cachedChildren = i),
        (t.cachedChildrenSorted = !1),
        t.cachedChildrenLastCounter === t.cachedChildrenCurrentCounter &&
          (t.cachedChildrenCurrentCounter += 1),
        (t.cachedChildrenLastCounter = t.cachedChildrenCurrentCounter),
        (t.cachedChildrenBaseCounter = this.base?.getChildrenCounter(e) ?? 0),
        i
      );
    }
    getChildrenIds(e) {
      let t = this.ensureNodeData(e),
        n = this.getCachedChildrenIds(e);
      return (
        t.cachedChildrenSorted ||
          (n.sort((i, o) => {
            let s = this.getHierarchyKey(i);
            l(Q(s), () => `invalid key in hierarchy, row ${i}`);
            let a = this.getHierarchyKey(o);
            if ((l(Q(a), () => `invalid key in hierarchy, row ${o}`), s < a)) return -1;
            if (s > a) return 1;
            if (this.store.optimizedReading) return i < o ? -1 : i > o ? 1 : 0;
            throw new Error("Hierarchy keys should be unique:" + s);
          }),
          (t.cachedChildrenSorted = !0)),
        n
      );
    }
    updateLatestValue(e, t, n) {
      let i = this.branchData.columns.value;
      switch (t) {
        case "__class": {
          let o = this.ensureNodeData(e),
            s = o.__class,
            a = i.get(n),
            c = a === w;
          if (c) o.inherit("__class");
          else {
            if (typeof a != "string") return;
            o.__class = a;
          }
          let d = o.__class;
          if (
            d === "RootNode" &&
            ((this.rootNodeId = e), this.updateReachability(o, !0, void 0), o.childrenById)
          )
            for (let u of o.childrenById.keys()) {
              let h = this.getNodeData(u);
              h && this.markInTree(o, h, u);
            }
          (s &&
            (s !== d || c) &&
            (c ? this.indexes.resetClass(s, e) : this.indexes.syncRemovedClass(s, e)),
            o.inTree && this.indexes.syncAddedNodeIndexes(e, o));
          break;
        }
        case "isMaster": {
          let o = i.get(n),
            s = this.ensureNodeData(e),
            a = s.isMaster;
          if (o === w) s.inherit("isMaster");
          else {
            if (typeof o != "boolean") return;
            s.isMaster = o;
          }
          if (a === s.isMaster) return;
          (s.inTree && this.applyMasterState(s), this.broadcastIsMaster(e));
          break;
        }
        case "isFormContainer": {
          let o = i.get(n),
            s = this.ensureNodeData(e),
            a = s.isFormContainer,
            c = o === w;
          c ? s.inherit("isFormContainer") : (s.isFormContainer = o === !0);
          let d = s.isFormContainer;
          if (a === d && !c) return;
          (s.inTree &&
            (d ? this.indexes.syncAddedFormContainer(e) : this.indexes.syncRemovedFormContainer(e)),
            this.broadcastInheritedIsFormContainerChange(e, a, d));
          break;
        }
        case "replicaInfo": {
          let o = i.get(n);
          if (o === w) {
            let s = this.ensureNodeData(e),
              a = s.replicaInfoMaster;
            s.inherit("replicaInfoMaster");
            let c = s.replicaInfoMaster;
            (a && this.indexes.resetReplicaOwner(a, e), c && this.indexes.resetReplicaOwner(c, e));
          } else if (typeof o != "string" || o.length === 0) {
            let s = this.ensureNodeData(e);
            s.replicaInfoMaster &&
              (this.indexes.syncRemovedReplicaOwner(s.replicaInfoMaster, e),
              (s.replicaInfoMaster = void 0));
          }
          break;
        }
        case "master": {
          let o = i.get(n),
            a = e.length - "replicaInfo".length;
          if (e.substring(a) !== "replicaInfo") return;
          e = e.substring(0, a - 1);
          let c = this.ensureNodeData(e),
            d = c.replicaInfoMaster;
          if (o === w) {
            c.inherit("replicaInfoMaster");
            let h = c.replicaInfoMaster;
            (d && this.indexes.resetReplicaOwner(d, e), h && this.indexes.resetReplicaOwner(h, e));
            return;
          }
          c.replicaInfoMaster = typeof o == "string" && o.length > 0 ? o : void 0;
          let u = c.replicaInfoMaster;
          if (u === d || (d && this.indexes.syncRemovedReplicaOwner(d, e), !u)) return;
          this.indexes.syncAddedReplicaOwner(u, e);
          break;
        }
        case "dataIdentifier": {
          let o = i.get(n),
            s = this.ensureNodeData(e),
            a = s.dataIdentifier,
            c = o === w;
          c ? s.inherit("dataIdentifier") : (s.dataIdentifier = typeof o == "string" ? o : void 0);
          let d = s.dataIdentifier;
          if (a === d && !c) return;
          (a && this.indexes.syncRemovedDataIdentifier(a, e),
            s.inTree &&
              (a === void 0 && d !== void 0
                ? this.indexes.syncAddedWithDataIdentifier(e)
                : a !== void 0 && d === void 0 && this.indexes.syncRemovedWithDataIdentifier(e),
              d && this.indexes.syncAddedDataIdentifier(d, e)),
            this.broadcastInheritedDataIdentifierChange(e, a, d));
          break;
        }
      }
    }
    rehydrate(e) {
      ((this.parentHistory = e.parentHistory), (this.parentOverrides = e.parentOverrides));
      let t = new Map();
      for (let [n, i] of this.parentOverrides)
        for (let [o, s] of i) for (let [a, c] of s) t.set(c.rowIdx, c);
      this.replayParentHistory(t);
    }
    broadcastParentId(e) {
      for (let t of this.store.branches) {
        let n = t.getHierarchy(),
          i = n.ensureNodeData(e),
          o = n.getParentId(e);
        if (o && o !== m) {
          let s = n.ensureNodeData(o);
          if (s.inTree) {
            (n.markInTree(s, i, e), n.broadcastParentId(e));
            continue;
          }
        }
        (n.clearInTree(i, e), n.broadcastParentId(e));
      }
    }
    broadcastIsMaster(e) {
      for (let t of this.store.branches) {
        let n = t.getHierarchy();
        if (n.store.hasOwnOverridingRow(e, "isMaster")) continue;
        let i = n.ensureNodeData(e);
        (i.inTree && n.applyMasterState(i), n.broadcastIsMaster(e));
      }
    }
    broadcastInheritedIsFormContainerChange(e, t, n) {
      for (let i of this.store.branches) {
        let o = i.getHierarchy();
        o.store.hasOwnOverridingRow(e, "isFormContainer") ||
          (o.applyInheritedIsFormContainerIndexChange(e, t, n),
          o.broadcastInheritedIsFormContainerChange(e, t, n));
      }
    }
    applyInheritedIsFormContainerIndexChange(e, t, n) {
      let i = this.getNodeData(e);
      if (i) {
        if (!i.inTree) {
          (t || n) && this.indexes.syncRemovedFormContainer(e);
          return;
        }
        (t && this.indexes.syncRemovedFormContainer(e),
          n && this.indexes.syncAddedFormContainer(e));
      }
    }
    broadcastInheritedDataIdentifierChange(e, t, n) {
      for (let i of this.store.branches) {
        let o = i.getHierarchy();
        o.store.hasOwnOverridingRow(e, "dataIdentifier") ||
          (o.applyInheritedDataIdentifierIndexChange(e, t, n),
          o.broadcastInheritedDataIdentifierChange(e, t, n));
      }
    }
    applyInheritedDataIdentifierIndexChange(e, t, n) {
      let i = this.getNodeData(e);
      if (i) {
        if (!i.inTree) {
          ((t !== void 0 || n !== void 0) && this.indexes.syncRemovedWithDataIdentifier(e),
            t && this.indexes.syncRemovedDataIdentifier(t, e),
            n && this.indexes.syncRemovedDataIdentifier(n, e));
          return;
        }
        (t !== void 0 && n === void 0
          ? this.indexes.syncRemovedWithDataIdentifier(e)
          : t === void 0 && n !== void 0 && this.indexes.syncAddedWithDataIdentifier(e),
          t && this.indexes.syncRemovedDataIdentifier(t, e),
          n && this.indexes.syncAddedDataIdentifier(n, e));
      }
    }
    updateParentId(e, t) {
      ((this.hierarchyChanged = !0),
        this.applyParentIdRow(e, t),
        this.parentHistory.push(t),
        this.broadcastParentId(e));
    }
    replayParentHistory(e) {
      if (this.parentHistory.length === 0) return;
      this.hierarchyChanged = !0;
      let t = this.branchData.columns.id;
      for (let n of this.parentHistory) {
        let i = t.get(n);
        this.applyParentIdRow(i, n, e.get(n));
      }
    }
    getParentOverride(e, t, n) {
      return this.parentOverrides.get(e)?.get(t)?.get(n);
    }
    applyParentIdRow(e, t, n) {
      let i = this.ensureNodeData(e),
        o = this.getParentId(e),
        s = i.resolvedParentId,
        a = this.branchData.columns,
        c = a.seq.get(t),
        d = a.client.get(t);
      if (s === void 0 || re(c, d, a.seq.get(s), a.client.get(s))) {
        let h = n?.parentTo ?? a.value.get(t);
        ((i.resolvedParentId = t), this.updateParent(i, e, h, t, o));
      }
      i.parentIdHistory.push(t);
    }
    getParentRowIdx(e) {
      let t = this.getOwnParentRowIdx(e);
      return t !== void 0 && this.branchData.columns.value.get(t) !== w
        ? t
        : this.base?.getParentRowIdx(e);
    }
    getOwnParentRowIdx(e) {
      return this.getOwnNodeData(e)?.resolvedParentId;
    }
    getParentIdSeq(e) {
      let t = this.getOwnParentRowIdx(e);
      return t !== void 0 ? this.branchData.columns.seq.get(t) : this.base?.getParentIdSeq(e);
    }
    getOwnHierarchyKey(e) {
      let t = this.getOwnNodeData(e)?.resolvedParentId;
      if (t === void 0) return;
      let n = this.branchData.columns,
        i = n.seq.get(t),
        o = n.client.get(t),
        a = this.getParentOverride(e, i, o)?.parentTo ?? n.value.get(t);
      return a === w ? void 0 : a;
    }
    getHierarchyKey(e) {
      let t = this.getOwnHierarchyKey(e);
      return t === void 0 ? this.base?.getHierarchyKey(e) : t;
    }
    getChildIndex(e, t) {
      let n = this.getHierarchyKey(t);
      if (typeof n != "string") return -1;
      let i = Se(e, n, (o, s) => {
        let a = this.getHierarchyKey(o);
        return a < s ? -1 : a > s ? 1 : 0;
      });
      return e[i] === t ? i : -1;
    }
    getPositionIndex(e, t) {
      let n = this.getChildrenIds(e);
      return Se(n, t, (i, o) => {
        let s = this.getHierarchyKey(i);
        return (l(Q(s), () => `invalid key in hierarchy, row ${i}`), s < o ? -1 : s > o ? 1 : 0);
      });
    }
    getChildPosition(e) {
      let t = this.getHierarchyKey(e);
      if (t !== void 0) return Ze(t);
    }
    getParentId(e) {
      let t = this.getHierarchyKey(e);
      if (t !== void 0) return t === m ? m : E(t);
    }
    getOwnParentId(e) {
      let t = this.getOwnHierarchyKey(e);
      if (t !== void 0) return t === m ? m : E(t);
    }
    getOwnParentBySeq(e, t, n) {
      let i = this.getOwnNodeData(e);
      if (!i) return;
      let o = this.branchData.columns,
        s;
      for (let a of i.parentIdHistory) {
        let c = o.seq.get(a);
        if (c > t || (!n && c === t)) continue;
        let d = o.client.get(a);
        if (!s || c > s.seq || (c === s.seq && d > s.client)) {
          let u = o.id.get(a),
            h = this.getParentOverride(u, c, d);
          s = {
            id: u,
            seq: c,
            client: d,
            key: "parentid",
            value: h?.parentTo ?? o.value.get(a),
            index: a,
          };
        }
      }
      return s;
    }
    getParentBySeq(e, t) {
      let n = this.getOwnParentBySeq(e, t, !0);
      if (n && n.value !== w) return n;
      if (!n && this.getOwnNodeData(e)?.parentIdHistory?.length) return;
      let i = this.base,
        o;
      for (; !o && i; ) {
        let s = i.getOwnParentBySeq(e, i.store.seq, !0);
        (s?.value !== w && (o = s), (i = i.base));
      }
      return o;
    }
    findAncestorIdsBefore(e, t, n) {
      let i = new Set();
      for (;;) {
        if (e === t) return i;
        if (e === void 0 || e === m || e === w || i.has(e) || (i.add(e), !this.getNodeData(e)))
          return;
        let o = this.getParentBySeq(e, n);
        if (!o) return;
        e = E(o.value);
      }
    }
    clearParentOverrides(e, t) {
      let n = [],
        i = [],
        o = new Set();
      for (let [s, a] of this.parentOverrides)
        if (!(t && !t.has(s))) {
          for (let [c, d] of a)
            if (!(c < e)) {
              a.delete(c);
              for (let [u, h] of d) {
                let f = h.rowIdx,
                  p = this.getNodeData(s);
                if (!p || !(p.resolvedParentId === f)) continue;
                (n.push(h), o.add(h.nodeId));
                let x = E(h.parentTo);
                (l(x !== w, "override parent cannot be inherited"),
                  x !== m && (this.removeChild(x, s), o.add(x)));
                let D = h.parentFrom === w ? (this.getParentBySeq(s, c)?.value ?? w) : h.parentFrom,
                  T = E(D);
                if (T !== m && T !== w) {
                  let B = this.ensureNodeData(T);
                  if (Q(h.parentFrom)) {
                    if (this.base && B.childrenById)
                      for (let U of B.childrenById.values()) {
                        let ce = this.branchData.columns.id.get(U);
                        if (this.getHierarchyKey(ce) === h.parentFrom) {
                          let Fl = {
                            ...h,
                            parentTo: this.createOverrideHierarchyKey(h.parentFrom, s),
                          };
                          i.push(Fl);
                        }
                      }
                    (this.addChild(B, s, f, !1),
                      B.inTree ? this.markInTree(B, p, s) : this.clearInTree(p, s));
                  } else
                    ((B.cachedChildrenCurrentCounter += 1),
                      B.inTree ? this.resetInTree(p, s) : this.clearInTree(p, s));
                  o.add(T);
                } else this.clearInTree(p, s);
                this.broadcastParentId(s);
              }
            }
        }
      this.recordInvalidation(o);
      for (let s of i) this.setParentOverride(s);
      return n;
    }
    setParentOverride(e) {
      let t = this.branchData.columns,
        n = e.rowIdx,
        i = t.client.get(n),
        o = t.seq.get(n),
        s = e.nodeId,
        a = this.parentOverrides.get(s);
      a || ((a = new Map()), this.parentOverrides.set(s, a));
      let c = a.get(o);
      (c || ((c = new Map()), a.set(o, c)), c.set(i, e));
    }
    createOverrideHierarchyKey(e, t) {
      let n = Ze(e),
        i = E(e),
        o = ke(n),
        s = o[o.length - 1];
      function a(h) {
        if (h.length !== o.length) return !1;
        for (let f = 0; f < o.length - 1; f++) {
          let p = o[f],
            b = h[f];
          if (p.position !== b.position || p.client !== b.client) return !1;
        }
        return !0;
      }
      let c = new Set(),
        d = this.getNodeData(i)?.childrenById;
      if (d)
        for (let h of d.keys()) {
          if (h === t) continue;
          let f = this.getHierarchyKey(h);
          l(typeof f == "string", "sibling must be a valid, non-deleted, hierarchy key");
          let p = ke(Ze(f));
          if (!a(p)) continue;
          let b = p[p.length - 1];
          b.position === s.position && c.add(b.client);
        }
      let u = Vo.find((h) => !c.has(h));
      return (
        l(u !== void 0, () => `override clients exhausted for node ${t}`),
        (s.client = u),
        je(i, ge(o))
      );
    }
    postProcess(e) {
      if (this.hierarchyChanged) return ((this.hierarchyChanged = !1), this.resolveCycles(e));
    }
    resolveCycles(e) {
      if (this.base)
        for (let o of this.parentOverrides.values()) for (let s of o.keys()) s < e && (e = s);
      let t = this.clearParentOverrides(e),
        n = [],
        i = this.branchData.columns;
      this.parentHistory.sort((o, s) => {
        let a = i.seq.get(o),
          c = i.seq.get(s);
        return a === c ? i.client.get(o) - i.client.get(s) : a - c;
      });
      for (let o of this.parentHistory) this.resolveCycleForRow(o, e, n);
      return { prevOverrides: t, nextOverrides: n };
    }
    resolveCycleForRow(e, t, n) {
      let i = this.branchData.columns,
        o = i.id.get(e),
        s = i.seq.get(e);
      if (s < t) return;
      let a = i.value.get(e);
      l(a, () => `parentid without a value, index: ${e}`);
      let c = a === w ? this.getParentBySeq(o, s) : void 0,
        d = c ? E(c.value) : E(a),
        u = this.findAncestorIdsBefore(d, o, s);
      if (u) {
        let h = this.getNodeData(o);
        l(h, () => `node not in tree, id: ${o}`);
        let f = this.getOwnParentBySeq(o, s, !1),
          p;
        (f && f.value !== w && !this.findAncestorIdsBefore(E(f.value), o, s) && (p = f),
          l(p?.value !== w, "previous parent cannot be inherited"));
        let x = h.resolvedParentId === e,
          D = x ? this.getParentId(o) : void 0,
          T = {
            nodeId: o,
            parentFrom: a,
            parentTo: p && p.value !== m ? this.createOverrideHierarchyKey(p.value, o) : m,
            rowIdx: e,
          };
        if ((this.setParentOverride(T), x))
          if (
            (l(D && D !== m, () => `unable to resolve parent of ${o}`),
            this.removeChild(D, o),
            p && p.value !== m)
          ) {
            let B = E(p.value),
              U = this.ensureNodeData(B);
            (this.addChild(U, o, p.index),
              U.inTree ? this.markInTree(U, h, o) : this.clearInTree(h, o));
          } else this.clearInTree(h, o);
        (n.push(T), this.broadcastParentId(o), this.recordInvalidation(u));
      }
    }
  };
var Ri = class {
    map = new Map();
    update = 0;
    cache = void 0;
    keys() {
      return this.map.keys();
    }
    values() {
      return this.map.values();
    }
    entries() {
      return this.map.entries();
    }
    has(e) {
      return this.map.has(e);
    }
    ownHas(e) {
      return this.map.has(e);
    }
    get(e) {
      return this.map.get(e);
    }
    ownGet(e) {
      return this.map.get(e);
    }
    set(e, t) {
      (this.map.set(e, t), this.updated());
    }
    forEachOwn(e) {
      this.map.forEach((t, n) => e(n, t));
    }
    updated() {
      this.update++;
    }
    materialized() {
      return this.map.size > 0;
    }
  },
  vr = class {
    map = new Map();
    getLatestOrCreateGhost(e) {
      let t = this.map.get(e);
      return (t || ((t = new Ri()), this.map.set(e, t)), t);
    }
    *keys() {
      for (let [e, t] of this.map) t.materialized() && (yield e);
    }
    *values() {
      for (let e of this.map.values()) e.materialized() && (yield e);
    }
    set(e, t, n) {
      this.getLatestOrCreateGhost(e).set(t, n);
    }
    getLatest(e) {
      let t = this.map.get(e);
      if (t?.materialized()) return t;
    }
    getOwnLatest(e) {
      return this.getLatest(e);
    }
    get(e, t) {
      return this.map.get(e)?.get(t);
    }
    getOwn(e, t) {
      return this.get(e, t);
    }
    clear() {
      this.map.clear();
    }
    has(e, t) {
      return !!this.map.get(e)?.has(t);
    }
  },
  Oi = class {
    constructor(e) {
      this.base = e;
    }
    base;
    ownMap;
    ownUpdate = 0;
    cache = void 0;
    get update() {
      return this.ownUpdate + this.base.update;
    }
    *keys() {
      let e = new Set();
      if (this.ownMap) for (let t of this.ownMap.keys()) (e.add(t), yield t);
      for (let t of this.base.keys()) e.has(t) || (yield t);
    }
    *values() {
      for (let e of this.keys()) {
        let t = this.get(e);
        t !== void 0 && (yield t);
      }
    }
    *entries() {
      for (let e of this.keys()) {
        let t = this.get(e);
        t !== void 0 && (yield [e, t]);
      }
    }
    has(e) {
      return !!this.ownMap?.has(e) || this.base.has(e);
    }
    ownHas(e) {
      return !!this.ownMap?.has(e);
    }
    get(e) {
      return this.ownMap?.get(e) ?? this.base.get(e);
    }
    ownGet(e) {
      return this.ownMap?.get(e);
    }
    set(e, t) {
      (this.ownMap || (this.ownMap = new Map()), this.ownMap.set(e, t), this.updated());
    }
    forEachOwn(e) {
      this.ownMap?.forEach((t, n) => e(n, t));
    }
    updated() {
      this.ownUpdate++;
    }
    materialized() {
      return !!this.ownMap;
    }
  },
  xr = class {
    constructor(e) {
      this.base = e;
    }
    base;
    ownMap = new Map();
    getLatestOrCreateGhost(e) {
      let t = this.ownMap.get(e);
      return (t || ((t = new Oi(this.base.getLatestOrCreateGhost(e))), this.ownMap.set(e, t)), t);
    }
    *keys() {
      let e = new Set();
      for (let [t, n] of this.ownMap) n.materialized() && (e.add(t), yield t);
      for (let t of this.base.keys()) e.has(t) || (yield t);
    }
    *values() {
      for (let e of this.keys()) {
        let t = this.getLatest(e);
        t && (yield t);
      }
    }
    set(e, t, n) {
      this.getLatestOrCreateGhost(e).set(t, n);
    }
    getLatest(e) {
      return this.getOwnLatest(e) ?? this.base.getLatest(e);
    }
    getOwnLatest(e) {
      let t = this.ownMap.get(e);
      if (t?.materialized()) return t;
    }
    get(e, t) {
      let n = this.ownMap.get(e);
      return n ? n.get(t) : this.base.get(e, t);
    }
    getOwn(e, t) {
      return this.ownMap.get(e)?.ownGet(t);
    }
    clear() {
      this.ownMap.clear();
    }
    has(e, t) {
      return !!this.ownMap.get(e)?.has(t) || this.base.has(e, t);
    }
  };
var Cr = -1;
function zt(r, e) {
  let t = r.length;
  for (; t < e; ) t <<= 1;
  let n = new Uint32Array(t);
  return (n.set(r), n);
}
var Pt = class {
    constructor(e) {
      this.columns = e;
      let t = e.id,
        n = e.key;
      (l(
        t instanceof V && n instanceof V,
        "SlabLatestMap requires dictionary-encoded id and key columns"
      ),
        (this.idCol = t),
        (this.keyCol = n));
    }
    columns;
    idCol;
    keyCol;
    off = new Uint32Array(256);
    len = new Uint32Array(256);
    cap = new Uint32Array(256);
    upd = new Uint32Array(256);
    maxNode = -1;
    arena = new Uint32Array(1024);
    top = 0;
    abandoned = 0;
    views = [];
    ghosts = new Map();
    build() {
      (this.len.fill(0),
        this.cap.fill(0),
        (this.maxNode = -1),
        (this.top = 0),
        (this.abandoned = 0),
        this.idCol.rehydrate(),
        this.keyCol.rehydrate());
      let e = this.columns,
        t = this.idCol.rowCodes(),
        n = this.keyCol.rowCodes(),
        i = this.idCol.codeOf(_) ?? -1,
        o = this.keyCol.codeOf("parentid") ?? -1;
      for (let s = e.length - 1; s >= 0; s--) {
        let a = t[s];
        if (a === i) continue;
        let c = n[s];
        if (c === o) continue;
        let d = this.getAt(a, c);
        (d === Cr || ve(e, s, d)) && this.setAt(a, c, s);
      }
    }
    replayLatestValues(e, t) {
      let n = new Int32Array(this.keyCol.uniques.length).fill(-1),
        i = 0;
      for (let u of e) {
        let h = this.keyCol.codeOf(u);
        h !== void 0 && (n[h] = i++);
      }
      if (i === 0) return;
      let o = this.columns,
        s = this.idCol.rowCodes(),
        a = this.keyCol.rowCodes(),
        c = this.idCol.codeOf(_) ?? -1,
        d = new Uint32Array(this.idCol.uniques.length * i);
      for (let u = o.length - 1; u >= 0; u--) {
        let h = a[u],
          f = n[h];
        if (f < 0) continue;
        let p = s[u];
        if (p === c) continue;
        let b = p * i + f,
          x = d[b];
        (x === 0 || ve(o, u, x - 1)) &&
          ((d[b] = u + 1), t(this.idCol.uniques[p], this.keyCol.uniques[h], u));
      }
    }
    get(e, t) {
      let n = this.idCol.codeOf(e);
      if (n !== void 0) return this.rowFor(n, t);
    }
    has(e, t) {
      return this.get(e, t) !== void 0;
    }
    getOwn(e, t) {
      return this.get(e, t);
    }
    set(e, t, n) {
      let i = this.idCol.codeOf(e);
      l(i !== void 0, () => `latest set for id missing from columns: ${e}`);
      let o = this.keyCol.codeOf(t);
      (l(o !== void 0, () => `latest set for key missing from columns: ${t}`), this.setAt(i, o, n));
    }
    viewFor(e, t) {
      let n = this.views[e];
      if (!n) {
        let i = this.ghosts.get(t);
        (i ? (this.ghosts.delete(t), (i.node = e), (n = i)) : (n = new Nr(this, e, t)),
          e >= this.views.length && (this.views.length = e + 1),
          (this.views[e] = n));
      }
      return n;
    }
    getLatestOrCreateGhost(e) {
      let t = this.idCol.codeOf(e);
      if (t !== void 0) return this.viewFor(t, e);
      let n = this.ghosts.get(e);
      return (n || ((n = new Nr(this, -1, e)), this.ghosts.set(e, n)), n);
    }
    getLatest(e) {
      let t = this.idCol.codeOf(e);
      if (!(t === void 0 || this.countAt(t) === 0)) return this.viewFor(t, e);
    }
    getOwnLatest(e) {
      return this.getLatest(e);
    }
    *keys() {
      for (let e = 0; e <= this.maxNode; e++) this.len[e] > 0 && (yield this.idCol.uniques[e]);
    }
    *values() {
      for (let e = 0; e <= this.maxNode; e++)
        this.len[e] > 0 && (yield this.views[e] ?? this.viewFor(e, this.idCol.uniques[e]));
    }
    clear() {
      (this.len.fill(0),
        this.cap.fill(0),
        (this.maxNode = -1),
        (this.top = 0),
        (this.abandoned = 0),
        (this.views.length = 0),
        this.ghosts.clear());
    }
    getAt(e, t) {
      if (e > this.maxNode) return Cr;
      let n = this.arena,
        i = this.off[e],
        o = i + (this.len[e] << 1);
      for (let s = i; s < o; s += 2) if (n[s] === t) return n[s + 1];
      return Cr;
    }
    setAt(e, t, n) {
      (l(n >>> 0 === n, "RowIndex must be a u32"), this.ensureNode(e));
      let i = this.arena,
        o = this.off[e],
        s = this.len[e],
        a = o + (s << 1);
      for (let d = o; d < a; d += 2)
        if (i[d] === t) {
          ((i[d + 1] = n), this.upd[e]++);
          return;
        }
      s === this.cap[e] && this.growSlab(e);
      let c = this.off[e] + (s << 1);
      ((this.arena[c] = t), (this.arena[c + 1] = n), (this.len[e] = s + 1), this.upd[e]++);
    }
    ensureNode(e) {
      if (e >= this.off.length) {
        let t = e + 1;
        ((this.off = zt(this.off, t)),
          (this.len = zt(this.len, t)),
          (this.cap = zt(this.cap, t)),
          (this.upd = zt(this.upd, t)));
      }
      e > this.maxNode && (this.maxNode = e);
    }
    growSlab(e) {
      let t = this.len[e],
        n = this.cap[e],
        i = n === 0 ? 4 : n << 1,
        o = i << 1;
      this.top + o > this.arena.length &&
        (this.abandoned > this.top >>> 1 && this.compact(),
        this.top + o > this.arena.length && (this.arena = zt(this.arena, this.top + o)));
      let s = this.off[e],
        a = this.top;
      ((this.top += o),
        t > 0 && this.arena.copyWithin(a, s, s + (t << 1)),
        (this.off[e] = a),
        (this.cap[e] = i),
        (this.abandoned += n << 1));
    }
    compact() {
      let e = new Uint32Array(this.arena.length),
        t = 0;
      for (let n = 0; n <= this.maxNode; n++) {
        let i = this.cap[n];
        if (i === 0) continue;
        let o = this.off[n];
        (e.set(this.arena.subarray(o, o + (this.len[n] << 1)), t),
          (this.off[n] = t),
          (t += i << 1));
      }
      ((this.arena = e), (this.top = t), (this.abandoned = 0));
    }
    nodeOf(e) {
      return this.idCol.codeOf(e) ?? -1;
    }
    rowFor(e, t) {
      if (e < 0) return;
      let n = this.keyCol.codeOf(t);
      if (n === void 0) return;
      let i = this.getAt(e, n);
      return i === Cr ? void 0 : i;
    }
    countAt(e) {
      return e < 0 || e > this.maxNode ? 0 : this.len[e];
    }
    updateAt(e) {
      return e < 0 || e > this.maxNode ? 0 : this.upd[e];
    }
    bumpAt(e) {
      e < 0 || (this.ensureNode(e), this.upd[e]++);
    }
    *entriesAt(e) {
      let t = this.countAt(e);
      for (let n = 0; n < t; n++) {
        let i = this.off[e] + (n << 1);
        yield [this.keyCol.uniques[this.arena[i]], this.arena[i + 1]];
      }
    }
    forEachAt(e, t) {
      if (e < 0 || e > this.maxNode) return;
      let n = this.arena,
        i = this.keyCol.uniques,
        o = this.off[e] + (this.len[e] << 1);
      for (let s = this.off[e]; s < o; s += 2) t(i[n[s]], n[s + 1]);
    }
  },
  Nr = class {
    constructor(e, t, n) {
      this.owner = e;
      this.node = t;
      this.id = n;
    }
    owner;
    node;
    id;
    cache = void 0;
    resolve() {
      return this.node >= 0 ? this.node : (this.node = this.owner.nodeOf(this.id));
    }
    get update() {
      return this.owner.updateAt(this.resolve());
    }
    *keys() {
      for (let [e] of this.entries()) yield e;
    }
    *values() {
      for (let [, e] of this.entries()) yield e;
    }
    entries() {
      return this.owner.entriesAt(this.resolve());
    }
    forEachOwn(e) {
      this.owner.forEachAt(this.resolve(), e);
    }
    has(e) {
      return this.get(e) !== void 0;
    }
    ownHas(e) {
      return this.has(e);
    }
    get(e) {
      return this.owner.rowFor(this.resolve(), e);
    }
    ownGet(e) {
      return this.get(e);
    }
    set(e, t) {
      this.owner.set(this.id, e, t);
    }
    updated() {
      this.owner.bumpAt(this.resolve());
    }
    materialized() {
      return this.owner.countAt(this.resolve()) > 0;
    }
  };
var Rr = class {
  constructor(e, t, n, i) {
    this.latest = e;
    this.getCurrentValue = t;
    this.base = n;
    this.getOwnValueAtRow = i;
  }
  latest;
  getCurrentValue;
  base;
  getOwnValueAtRow;
  arrays = new Map();
  getState(e) {
    let t = this.arrays.get(e);
    return (
      t ||
        ((t = { array: [], lastCounter: -1, currentCounter: 0, baseCounter: 0 }),
        this.arrays.set(e, t)),
      t
    );
  }
  getCounter(e) {
    return this.getState(e).currentCounter;
  }
  isDirty(e) {
    let t = this.getState(e);
    return this.base
      ? t.lastCounter !== t.currentCounter ||
          t.baseCounter !== this.base.getCounter(e) ||
          this.base.isDirty(e)
      : t.lastCounter !== t.currentCounter;
  }
  isMergeableArray(e, t) {
    if (t.length === 0) return !1;
    if (t.length === 1) return t[0] === O;
    for (let n of t) {
      let i = this.getCurrentValue(e, n);
      if (i !== void 0 && i !== m && i !== P) return Te(i);
    }
    return !0;
  }
  getItemIds(e) {
    let t = this.getState(e);
    if (this.isDirty(e)) {
      let n = new Map();
      for (let o of this.base?.getItemIds(e) ?? []) {
        let s = this.getCurrentValue(e, o);
        Te(s) && n.set(o, s);
      }
      let i = this.latest.getOwnLatest(e);
      (i &&
        i.forEachOwn((o, s) => {
          if (o === O) return;
          let a = this.getOwnValueAtRow(s);
          if (a === m || !Te(a)) {
            n.delete(o);
            return;
          }
          n.set(o, a);
        }),
        (t.array = Array.from(n.keys()).sort((o, s) => {
          let a = n.get(o),
            c = n.get(s);
          return a < c ? -1 : a > c ? 1 : 0;
        })),
        (t.baseCounter = this.base?.getCounter(e) ?? 0),
        (t.lastCounter = t.currentCounter));
    }
    return t.array;
  }
  invalidate(e) {
    let t = this.arrays.get(e);
    t && (t.currentCounter += 1);
  }
  clear() {
    this.arrays.clear();
  }
};
function pu(r, e, t, n) {
  r !== "relaxed" &&
    l(zf(e, t, n), () => `Atomic arrays must only contain primitives: ${JSON.stringify(e)}`);
}
function Ef(r, e, t, n) {
  return r.some((i) => i(e, t, n));
}
var Bf = [Pf, Lf, mu, $f, Uf, Ff, Hf, qf, Kf];
function zf(r, e, t) {
  if (!r.some(Lt) || Vf(r, e)) return !0;
  let n = r.every((i) => i === null || (Lt(i) && mu(i, e)));
  return r.every((i) => (i === null ? n : Lt(i) && Ef(Bf, i, e, t)));
}
function Pf(r) {
  return "key" in r || ("offset" in r && "style" in r);
}
function Lf(r) {
  return "_id" in r || "_layerId" in r;
}
function mu(r, e) {
  return e === "content" && ("field" in r || "text" in r);
}
function qf(r) {
  return "type" in r && "property" in r && "fieldPath" in r;
}
function Kf(r, e) {
  return e === "formSelectOptions";
}
function $f(r) {
  return "themeToken" in r;
}
function Uf(r) {
  return "ids" in r && "targets" in r;
}
function Ff(r, e, t) {
  return e === "allowedFileTypes" && "extension" in r && t.includes("variables");
}
function Hf(r) {
  return (
    ("id" in r && typeof r.id == "string") || ("identifier" in r && typeof r.identifier == "string")
  );
}
function Vf(r, e) {
  return e === "items" && r.some(yu) && r.every(jf);
}
function jf(r) {
  return !Lt(r) || !("name" in r) || typeof r.name != "string"
    ? !1
    : !("id" in r) && !("moduleId" in r)
      ? !0
      : yu(r);
}
function yu(r) {
  return (
    Lt(r) &&
    "id" in r &&
    typeof r.id == "string" &&
    "moduleId" in r &&
    typeof r.moduleId == "string"
  );
}
function Lt(r) {
  return typeof r == "object" && r !== null;
}
var Ai = "$$atomic-",
  gu = 9,
  Zf = Ai.length + gu;
function bu() {
  let r = an();
  return (l(r.length === gu, "suffix must be 9 characters long"), Ai + r);
}
function Gf(r) {
  return r.length === Zf && r.startsWith(Ai);
}
var qt = class {
  constructor(e) {
    this.value = e;
  }
  value;
};
function ki(r, e) {
  let t = r.length,
    n = e.length,
    i = Array.from({ length: t + 1 }, () => new Array(n + 1).fill(0));
  for (let c = t - 1; c >= 0; --c)
    for (let d = n - 1; d >= 0; --d)
      r[c] === e[d]
        ? (i[c][d] = i[c + 1][d + 1] + 1)
        : (i[c][d] = Math.max(i[c + 1][d], i[c][d + 1]));
  let o = [],
    s = 0,
    a = 0;
  for (; s < t && a < n; )
    r[s] === e[a]
      ? ((s += 1), (a += 1))
      : i[s + 1][a] > i[s][a + 1]
        ? (o.push({ operation: "delete", index: s, value: r[s] }), (s += 1))
        : (o.push({ operation: "insert", index: a, value: e[a] }), (a += 1));
  for (; s < t; ) (o.push({ operation: "delete", index: s, value: r[s] }), (s += 1));
  for (; a < n; ) (o.push({ operation: "insert", index: a, value: e[a] }), (a += 1));
  return o;
}
function Kt(r, e) {
  (l(r.branchId === I, "Effective base ids must be resolved against the main store"),
    l(e !== I, "Main has no base"));
  let t = Iu(r, e);
  if (t.baseId === I) return t.baseId;
  let n = t,
    i = t.baseId,
    o = new Set();
  for (; i !== e; ) {
    if (i === I || o.has(i)) return t.baseId;
    o.add(i);
    let s = Iu(r, i);
    (Wf(s, n) && (n = s), (i = s.baseId));
  }
  return n.branchId === e ? I : t.baseId;
}
function Iu(r, e) {
  let t = r.latest.get(e, er);
  l(t !== void 0, () => `Branch ${e} does not exist`);
  let n = r.branchData.columns,
    i = n.value.get(t);
  return (
    l(typeof i == "string" && i.length > 0, () => `Invalid baseId value for branch: ${e}`),
    { branchId: e, baseId: i, seq: n.seq.get(t), client: n.client.get(t) }
  );
}
function Wf(r, e) {
  return re(e.seq, e.client, r.seq, r.client);
}
var Ie = "meta",
  Je = { ROOT_ID: "rootId", VERSION: "version" },
  Mi = 5e4;
function Jf(r, e) {
  return r.seq === e.seq ? r.client - e.client : r.seq - e.seq;
}
function wu(r) {
  if (!Array.isArray(r) || r.length === 0) return !1;
  let e,
    t = new Set();
  for (let n of r) {
    if (typeof n != "object" || n === null) return !1;
    let i =
      typeof n.id == "string" ? "id" : typeof n.identifier == "string" ? "identifier" : void 0;
    if (!i) return !1;
    (e &&
      l(e === i, () => `Mergeable arrays must have consistent id/identifier: ${JSON.stringify(r)}`),
      (e = i));
    let o = n[e];
    if (!o || (t.has(o) && r.filter((a) => de(a) && a[e] === o).every(Su))) return !1;
    (l(!t.has(o), () => `Mergeable arrays must have unique ids: ${JSON.stringify(r)}`), t.add(o));
  }
  return !0;
}
function Su(r) {
  return Yf(r) || Xf(r);
}
function Yf(r) {
  return "id" in r && typeof r.id == "string" && "type" in r && r.type === "eventhandler";
}
function Xf(r) {
  return !("id" in r) ||
    typeof r.id != "string" ||
    !("type" in r) ||
    r.type !== "object" ||
    !("value" in r) ||
    !de(r.value)
    ? !1
    : Object.values(r.value).some(
        (e) => de(e) && "type" in e && e.type === "image" && "value" in e
      );
}
function Qf(r, e, t = 0) {
  let n = {},
    i = n;
  for (let s = t; s < r.length - 1; ++s) {
    let a = r[s],
      c = {};
    ((i[a] = c), (i = c));
  }
  let o = r[r.length - 1];
  return ((i[o] = e), n);
}
function Ti(r) {
  return `${r.client}/${r.seq}/${r.id}/${r.key}/${JSON.stringify(r.value)}/${r.batch}`;
}
var ep = ["__class", "isMaster", "isFormContainer", "replicaInfo", "master", "dataIdentifier"],
  $t = class r {
    table;
    branchData;
    latest;
    hierarchy;
    sortedArrayCache;
    checksumIndex;
    branchOwnWriteIndex;
    client;
    user;
    branchId;
    base;
    branches = [];
    ownPermanentError = null;
    atomicArrays;
    latestMapType;
    extractIdFromObject;
    get manifest() {
      return this.branchData.manifest;
    }
    get minIndexCache() {
      return this.branchData.minIndexCache;
    }
    positionClientId;
    constructor({
      client: e,
      user: t,
      atomicArrays: n = "strict",
      latestMap: i = "map",
      branchId: o = I,
      base: s,
      table: a,
      extractIdFromObject: c,
      useHierarchyCache: d = !0,
    }) {
      ((this.client = e),
        (this.user = t),
        (this.atomicArrays = n),
        (this.latestMapType = i),
        (this.branchId = o),
        (this.base = s),
        (this.table = a ?? s?.table ?? new Y()),
        (this.branchData = this.table.getOrCreateBranch(this.branchId)),
        (this.positionClientId = jo(this.branchId, this.client)),
        (this.latest = this.createLatestMap()),
        (this.extractIdFromObject = c),
        this.init(d),
        this.branchId !== I &&
          this.branchData.columns.length === 0 &&
          this.setObjectKey(this.branchId, O, P));
    }
    init(e = !0) {
      ((this.batchNo = 0),
        (this.batchStartIdx = void 0),
        (this.ownPermanentError = null),
        (this.branchData = this.table.getOrCreateBranch(this.branchId)),
        (this.branches.length = 0),
        (this.latest = this.createLatestMap()),
        (this.hierarchy = new Bt(this, this.latest, this.base?.hierarchy)),
        (this.branchOwnWriteIndex = this.base ? new hr(this.branchData) : void 0),
        (this.sortedArrayCache = new Rr(
          this.latest,
          (t, n) => this.getCurrentValue(t, n),
          this.base?.sortedArrayCache,
          (t) => this.branchData.columns.value.get(t)
        )),
        (this.checksumIndex = new Et(this)),
        this.branchData.hierarchyData && e
          ? (this.updateCaches(this.branchData.hierarchyData),
            this.base && this.hierarchy.resolveCycles(0))
          : ((this.branchData.hierarchyData = new W(
              this.hierarchy.parentHistory,
              this.hierarchy.parentOverrides
            )),
            this.indexRowsOptimized(),
            this.hierarchy.postProcess(0)));
    }
    createLatestMap() {
      return this.base
        ? new xr(this.base.latest)
        : this.latestMapType === "slab"
          ? new Pt(this.branchData.columns)
          : new vr();
    }
    reset() {
      (l(this.branchId === I, "Cannot call reset on non main branches"),
        (this.table = new Y()),
        this.init());
    }
    static resetBranchDataForTesting(e) {
      (l(e.branchId !== I, "Cannot reset main branch data for testing"),
        e.table.branches.set(e.branchId, new L(e.branchData.codec, e.branchId, e.table.version)),
        e.init());
    }
    get permanentError() {
      for (let e = this; e; e = e.base) if (e.ownPermanentError) return e.ownPermanentError;
      return null;
    }
    throwIfPermanentError() {
      let e = this.permanentError;
      if (e) throw new Error("Store is permanently broken due to a previous error", { cause: e });
    }
    fromBuffer(e, t = !0) {
      (l(this.branchId === I, "Cannot call fromBuffer on non main branches"),
        (this.table = Y.fromBuffer(e)),
        this.init(t));
    }
    branch(e, t = !0) {
      let n = new r({
        client: this.client,
        user: this.user,
        atomicArrays: this.atomicArrays,
        latestMap: this.latestMapType,
        branchId: e,
        base: this,
        table: this.table,
        extractIdFromObject: this.extractIdFromObject,
        useHierarchyCache: t,
      });
      return (this.branches.push(n), n);
    }
    detachBranch(e) {
      let t = this.branches.indexOf(e);
      t !== -1 && this.branches.splice(t, 1);
    }
    updateCaches(e) {
      let t = this.manifest.getBatch(this.client);
      this.batchNo = t !== void 0 ? ur(t) : 0;
      let n = this.branchData.columns;
      if (this.latest instanceof Pt)
        (this.latest.build(),
          this.latest.replayLatestValues(ep, (i, o, s) => {
            this.hierarchy.updateLatestValue(i, o, s);
          }));
      else
        for (let i = this.length - 1; i >= 0; i--) {
          let o = n.id.get(i);
          if (o === _) continue;
          this.branchOwnWriteIndex?.indexOwnRow(i);
          let s = n.key.get(i);
          if (s === "parentid") continue;
          let a = this.latest.getOwn(o, s);
          (a === void 0 || ve(n, i, a)) &&
            (this.latest.set(o, s, i), this.hierarchy.updateLatestValue(o, s, i));
        }
      this.getHierarchy().rehydrate(e);
    }
    compare(e) {
      return this.manifest.compare(e);
    }
    setRoot(e) {
      this.setObjectKey(Ie, Je.ROOT_ID, e);
    }
    getRoot() {
      return this.getCurrentValue(Ie, Je.ROOT_ID);
    }
    getVersion() {
      return this.getCurrentValue(Ie, Je.VERSION);
    }
    setVersion(e) {
      this.setObjectKey(Ie, Je.VERSION, e);
    }
    isRoot(e) {
      return this.getCurrentValue(Ie, Je.ROOT_ID) === e;
    }
    get seq() {
      return this.branchData.metadata.seq;
    }
    set seq(e) {
      this.branchData.metadata.seq = e;
    }
    ensureMinSeq(e) {
      l(dn(e), () => `invalid seq: ${e}`);
      let t = this.seq;
      return (e > t && (this.seq = e), { from: t, to: this.seq });
    }
    getLastBatchNo() {
      return this.batchNo;
    }
    getSerializableRows(e, t) {
      return this.branchData.getSerializableRows(e, t);
    }
    getSerializableRowsAfterManifest(e) {
      return this.branchData.getSerializableRowsAfterManifest(e);
    }
    getExtraSerializableRows(e) {
      return this.branchData.getExtraSerializableRows(e);
    }
    getRows(e, t) {
      return this.branchData.getRows(e, t);
    }
    getRowsForIndices(e) {
      return e.map((t) => this.branchData.getRow(t));
    }
    getRowsSorted() {
      return this.getRows().sort(Jf);
    }
    getFirstRowForSeq(e) {
      return this.minIndexCache.get(e);
    }
    optimizedReading = !1;
    inserting = !1;
    mutationCapture;
    runMutation(e) {
      l(this.mutationCapture === void 0, "You cannot nest mutations");
      let t = {
        startIndex: this.length,
        previousIndices: [],
        removedNodeRows: new Map(),
        operation: void 0,
      };
      this.mutationCapture = t;
      try {
        e();
        let n = this.length - t.startIndex;
        l(n === t.previousIndices.length, "Previous and next mutation rows must align");
        let i = [],
          o = Array.from({ length: n }),
          s = this.branchId === I ? m : w,
          { id: a, key: c, value: d } = this.branchData.columns;
        for (let u = 0; u < n; u++) {
          let h = t.startIndex + u,
            f = t.removedNodeRows.get(h);
          (f && i.push(...f), (o[u] = { id: a.get(h), key: c.get(h), value: d.get(h) }));
          let p = t.previousIndices[u],
            b = p === -1 ? h : p;
          i.push({ id: a.get(b), key: c.get(b), value: p === -1 ? s : d.get(p) });
        }
        return t.operation === "insertNode"
          ? { previousRows: i.filter((u) => u.key === "parentid"), nextRows: o }
          : { previousRows: i, nextRows: o };
      } catch (n) {
        throw (
          (this.ownPermanentError = n instanceof Error ? n : new Error(String(n), { cause: n })),
          n
        );
      } finally {
        this.mutationCapture = void 0;
      }
    }
    captureMutationOperation(e) {
      let t = this.mutationCapture;
      if (t) {
        if (t.operation === void 0) {
          t.operation = e;
          return;
        }
        l(t.operation === e, () => `Cannot mix ${t.operation} and ${e} in one mutation`);
      }
    }
    capturePreviousIndex(e, t, n) {
      let i = this.mutationCapture;
      if (!i) return;
      let o =
          t === "parentid"
            ? this.hierarchy.getOwnParentRowIdx(e)
            : this.latest.getOwnLatest(e)?.ownGet(t),
        s = o !== void 0 && o >= i.startIndex ? i.previousIndices[o - i.startIndex] : (o ?? -1);
      (i.previousIndices.push(s),
        t === "parentid" &&
          n === m &&
          Q(this.hierarchy.getHierarchyKey(e)) &&
          i.removedNodeRows.set(this.length, this.getOwnRowsForRemovedNode(e)));
    }
    getOwnRowsForRemovedNode(e) {
      let t = [],
        n = new Set(),
        i = (s) => {
          if (n.has(s)) return;
          n.add(s);
          let a = this.latest.getOwnLatest(s);
          if (!a) return;
          let c = [];
          a.forEachOwn((u, h) => c.push([u, h]));
          let d = this.sortedArrayCache.isMergeableArray(
            s,
            c.map(([u]) => u)
          );
          for (let [u, h] of c) {
            let f = this.branchData.columns.value.get(h);
            (t.push({ id: s, key: u, value: f }), d ? i(u) : o(f));
          }
        },
        o = (s) => {
          if (ae(s) || De(s) || se(s)) {
            i($(s));
            return;
          }
          if (Array.isArray(s)) for (let a of s) o(a);
        };
      return (i(e), t);
    }
    indexRowsOptimized() {
      let { client: e, id: t, key: n, seq: i, value: o, batch: s } = this.branchData.columns;
      this.optimizedReading = !0;
      for (let a = this.length - 1; a >= 0; a--)
        this.updateRowIndex(a, i.get(a), t.get(a), n.get(a), o.get(a), e.get(a), s.get(a));
      this.optimizedReading = !1;
    }
    merge(e) {
      return this.mergeRows(e.getRows());
    }
    mergeRows(e) {
      this.throwIfPermanentError();
      let t = new Set(this.getRows().map((i) => Ti(i))),
        n = 1 / 0;
      for (let i of e) {
        let o = Ti(i);
        t.has(o) ||
          (t.add(o),
          this.addRowData(i.id, i.key, i.value, i.client, i.seq, i.user, i.batch),
          (n = Math.min(n, i.seq)));
      }
      return (this.sortedArrayCache.clear(), this.hierarchy.postProcess(n), n);
    }
    append(e) {
      return this.addRows(e.getRows());
    }
    addSerializableRows(e) {
      this.throwIfPermanentError();
      let t = 1 / 0;
      for (let n of e) {
        let i = n.value;
        (N(i) && (i = R(i)),
          this.addRowData(n.id, n.key, i, n.client, n.seq, n.user, n.batch),
          (t = Math.min(t, n.seq)));
      }
      (this.sortedArrayCache.clear(), this.hierarchy.postProcess(this.base ? 0 : t));
    }
    addRows(e) {
      this.throwIfPermanentError();
      let t = 1 / 0;
      for (let i of e)
        (this.addRowData(i.id, i.key, i.value, i.client, i.seq, i.user, i.batch),
          (t = Math.min(t, i.seq)));
      this.sortedArrayCache.clear();
      let n = this.hierarchy.postProcess(t);
      return { minSeq: t, cycleResolutions: n };
    }
    replayRowList(e, t) {
      let n = { supersededRows: [], addedNodeIds: [] };
      if (e.length === 0) return n;
      let i = new Map(),
        o = new Set(),
        s = new Set(),
        a = (c) => {
          let d = i.get(c);
          if (d !== void 0) return d;
          let u = this.latest.getLatest(c) !== void 0;
          return (i.set(c, u), u);
        };
      return (
        this.batch(() => {
          let c = this.seq,
            d = c;
          for (let u of e) {
            if (!a(u.id)) o.add(u.id);
            else {
              let f = `${u.id}\0${u.key}`;
              if (!s.has(f)) {
                s.add(f);
                let p =
                  u.key === "parentid"
                    ? this.hierarchy.getParentId(u.id) !== void 0
                    : this.latest.has(u.id, u.key);
                n.supersededRows.push({
                  id: u.id,
                  key: u.key,
                  value: p ? this.getReplayableValue(u.id, u.key) : m,
                });
              }
            }
            let h = t?.regenerateHierarchyPositions
              ? this.regenerateReplayHierarchyPosition(u)
              : u.value;
            this.addRowData(u.id, u.key, h, this.client, c++, u.user ?? this.user);
          }
          (this.sortedArrayCache.clear(), this.hierarchy.postProcess(d));
        }),
        (n.addedNodeIds = [...o]),
        n
      );
    }
    regenerateReplayHierarchyPosition(e) {
      if (e.key !== "parentid" || !wi(e.value) || !Q(e.value)) return e.value;
      let t = Ze(e.value),
        n = E(e.value),
        i;
      for (let s of this.getChildrenIds(n)) {
        let a = this.hierarchy.getChildPosition(s);
        if (a !== void 0 && a > t) {
          i = a;
          break;
        }
      }
      let o = $e(t, i, this.positionClientId);
      return je(n, o);
    }
    batchStartIdx;
    batchNo = 0;
    get inBatch() {
      return this.batchStartIdx !== void 0;
    }
    batch(e) {
      (this.throwIfPermanentError(), l(this.batchStartIdx === void 0, "You cannot nest batches"));
      let t = this.branchData.columns;
      this.batchStartIdx = t.client.length;
      try {
        let n = e(),
          i = t.client.length - this.batchStartIdx;
        if (i === 0) return n;
        let o = 0;
        for (let s = 0; s < i; s += Mi) {
          let a = Math.min(Mi, i - s);
          (this.batchNo++, (o = Ue({ batchNo: this.batchNo, rowCount: a })));
          for (let c = 0; c < a; c++) t.batch.add(o);
        }
        return (this.manifest.updateClientState(this.client, this.seq - 1, o), n);
      } catch (n) {
        throw (
          (this.ownPermanentError = n instanceof Error ? n : new Error(String(n), { cause: n })),
          n
        );
      } finally {
        this.batchStartIdx = void 0;
      }
    }
    updateKeyValue(e, t, n) {
      if (this.batchStartIdx === void 0) {
        this.batch(() => {
          this.updateKeyValue(e, t, n);
        });
        return;
      }
      this.addRowData(e, t, n, this.client, this.seq, this.user);
    }
    addRowData(e, t, n, i, o, s, a) {
      if (!this.shouldAddRow(e, t, n, o, i)) return;
      this.capturePreviousIndex(e, t, n);
      let c = this.branchData.columns;
      (c.client.add(i),
        c.seq.add(o),
        c.id.add(e),
        c.key.add(t),
        c.value.add(n),
        c.user.add(s),
        a && c.batch.add(a));
      let d = c.client.length - 1;
      this.updateRowIndex(d, o, e, t, n, i, a);
    }
    shouldAddRow(e, t, n, i, o) {
      let s = t === "parentid" ? this.hierarchy.getOwnParentRowIdx(e) : this.latest.getOwn(e, t);
      if (s === void 0 || s >= this.length) return !0;
      let a = this.branchData.columns;
      if (a.value.get(s) !== n) return !0;
      let d = a.seq.get(s),
        u = a.client.get(s);
      return !(d === i && u === o);
    }
    updateRowIndex(e, t, n, i, o, s, a) {
      if (a !== void 0 && s === this.client) {
        let u = ur(a);
        this.batchNo = Math.max(this.batchNo, u);
      }
      if (
        (a !== void 0 && this.manifest.updateClientState(s, t, a),
        this.manifest.addTimestamp(s, t),
        t >= this.seq && (this.seq = t + 1),
        n === _)
      )
        return;
      let c = this.latest.getOwn(n, i),
        d = this.branchData.columns;
      if ((this.branchOwnWriteIndex?.indexOwnRow(e), i === "parentid")) {
        if (!wi(o)) return;
        this.hierarchy.updateParentId(n, e);
      } else
        (c === void 0 || re(t, s, d.seq.get(c), d.client.get(c))) &&
          (this.latest.set(n, i, e), this.hierarchy.updateLatestValue(n, i, e));
      if (!this.optimizedReading) {
        let u = n.indexOf(".");
        u !== -1 && this.latest.getLatest(n.slice(0, u))?.updated();
      }
      (this.sortedArrayCache.invalidate(n), this.minIndexCache.add(t, e));
    }
    getParentId(e) {
      return this.hierarchy.getParentId(e);
    }
    getHierarchy() {
      return this.hierarchy;
    }
    getBranchOwnWriteIndex() {
      return (
        l(this.branchOwnWriteIndex, "Branch own write index is only available for branch stores"),
        this.branchOwnWriteIndex
      );
    }
    _getIdFromObject(e) {
      return this.extractIdFromObject?.(e);
    }
    createStoreId(e, t) {
      return `${e}.${t}`;
    }
    getReferenceValue(e) {
      return Array.isArray(e)
        ? e.map((t) => this.getReferenceValue(t))
        : se(e)
          ? (this.getMergeableArray($(e)) ?? [])
          : ae(e)
            ? this.getObjectInner($(e))
            : De(e)
              ? this.getObjectInner($(e))
              : e;
    }
    getCurrentValue(e, t) {
      if (t === "parentid") return this.hierarchy.getParentId(e);
      let n = this.latest.getOwn(e, t);
      if (n !== void 0) {
        let i = this.branchData.columns.value.get(n);
        return i === w ? this.base?.getCurrentValue(e, t) : i;
      }
      return this.base?.getCurrentValue(e, t);
    }
    getCurrentRawValue(e, t) {
      if (t === "parentid") return this.hierarchy.getParentId(e);
      let n = this.latest.getOwnLatest(e)?.ownGet(t);
      return n !== void 0
        ? this.branchData.columns.value.get(n)
        : this.base?.getCurrentRawValue(e, t);
    }
    getCurrentRawValueOrDoesNotExist(e, t) {
      let n =
        t === "parentid"
          ? this.hierarchy.getOwnParentRowIdx(e)
          : this.latest.getOwnLatest(e)?.ownGet(t);
      if (n === void 0) return this.base ? this.base.getCurrentRawValueOrDoesNotExist(e, t) : St;
      let i = this.branchData.columns.value.get(n);
      return this.base && i === w ? this.base.getCurrentRawValueOrDoesNotExist(e, t) : i;
    }
    hasOwnRow(e, t) {
      return t === "parentid"
        ? this.hierarchy.getOwnParentRowIdx(e) !== void 0
        : this.latest.getOwn(e, t) !== void 0;
    }
    hasOwnOverridingRow(e, t) {
      if (t === "parentid") {
        let i = this.hierarchy.getOwnParentRowIdx(e);
        return i !== void 0 && (!this.base || this.branchData.columns.value.get(i) !== w);
      }
      let n = this.latest.getOwnLatest(e)?.ownGet(t);
      return n !== void 0 && (!this.base || this.branchData.columns.value.get(n) !== w);
    }
    getParentIdSeq(e) {
      return this.hierarchy.getParentIdSeq(e);
    }
    validateObjectUpdate(e, t) {
      if (!de(t)) throw new Error("Store.setObject: object is not an object");
      let n = this._getIdFromObject(t);
      if (n && n !== e)
        throw new Error(
          `Mismatch between provided id and id extracted from the store: ${n} !== ${e}`
        );
      return e;
    }
    deleteRemovedKeys(e, t) {
      let n = this.latest.getLatest(e);
      if (n) for (let i of n.keys()) i !== O && (i in t || this.setObjectKey(e, i, m));
    }
    inheritExistingKeys(e) {
      let t = this.latest.getLatest(e);
      if (!t) return;
      let n = this.latest.getOwnLatest(e);
      for (let i of t.keys())
        i !== O &&
          (n?.ownHas(i)
            ? this.setObjectKey(e, i, w)
            : this.cleanExistingReferenceValue(this.getCurrentValue(e, i), w));
    }
    assertPositionIsValid(e) {
      e !== void 0 && l(Number.isInteger(e), () => `Invalid position: ${e}`);
    }
    isMaterializableNode(e) {
      let t = this.getCurrentValue(e, "id");
      return t !== void 0 && t !== m;
    }
    createHierarchyKey(e, t, n = -1) {
      let i = this.getChildrenIds(t);
      if ((this.assertPositionIsValid(n), n === -1 || n >= i.length)) {
        let p = i.at(-1),
          b = p ? this.hierarchy.getChildPosition(p) : void 0,
          x = $e(b, void 0, this.positionClientId);
        return je(t, x);
      }
      let o = i.filter((p) => this.isMaterializableNode(p)),
        s = this.hierarchy.getChildIndex(o, e);
      if (s === n && s >= 0) {
        let p = this.hierarchy.getHierarchyKey(e);
        return (l(Q(p), "Existing position cannot be deleted or inherited"), p);
      }
      if (n < 0) {
        let b = s >= 0 ? o.length : o.length + 1;
        n = Math.max(b + n, 0);
      }
      s >= 0 && n > s && (n += 1);
      let a = Math.min(n, o.length),
        c,
        d;
      if (a < o.length) {
        let p = o[a];
        (l(p !== void 0), (d = p));
        let b = i.indexOf(p);
        c = b > 0 ? i[b - 1] : void 0;
      } else c = i.at(-1);
      let u = c ? this.hierarchy.getChildPosition(c) : void 0,
        h = d ? this.hierarchy.getChildPosition(d) : void 0,
        f = $e(u, h, this.positionClientId);
      return je(t, f);
    }
    ensureHasChildren(e) {
      this.getCurrentValue(e, "children") !== P && this.setObjectKey(e, "children", P);
    }
    insertNode(e, t, n) {
      (this.captureMutationOperation("insertNode"),
        l(typeof e?.id == "string", "inserting node without a valid id"),
        this.assertPositionIsValid(n));
      let i = this.inserting;
      this.inserting = !0;
      try {
        (this.setObject(e.id, e), this.ensureHasChildren(t));
        let o = this.createHierarchyKey(e.id, t, n);
        this.setObjectKey(e.id, "parentid", o);
      } finally {
        this.inserting = i;
      }
    }
    removeNode(e) {
      (this.captureMutationOperation("removeNode"),
        l(
          this.latest.get(e, "id") !== void 0,
          () => `trying to remove a node that doesn't exist: ${e}`
        ),
        this.setObjectKey(e, "parentid", m));
    }
    updateNode(e, t) {
      (this.captureMutationOperation("updateNode"),
        l(
          this.latest.get(e, "id") !== void 0,
          () => `trying to update a node that doesn't exist: ${e}`
        ));
      for (let n in t) n !== "parentid" && this.setObjectKey(e, n, t[n]);
    }
    updateNestedObject(e, t) {
      this.captureMutationOperation("updateNestedObject");
      let [n, ...i] = e;
      l(
        this.latest.get(n, "id") !== void 0,
        () => `trying to update nested properties on node doesn't exist: ${n}`
      );
      for (let o in t) o !== "parentid" && this.setObjectKeyPath(n, [...i, o], t[o]);
    }
    moveNode(e, t, n) {
      (this.captureMutationOperation("moveNode"),
        l(
          this.latest.get(e, "id") !== void 0,
          () => `trying to move a node that doesn't exist: ${e}`
        ),
        this.assertPositionIsValid(n),
        this.ensureHasChildren(t));
      let i = this.createHierarchyKey(e, t, n);
      this.setObjectKey(e, "parentid", i);
    }
    importObject(e, t) {
      this.setObject(e, t);
    }
    setObject(e, t) {
      let n = this.validateObjectUpdate(e, t);
      if ((this.deleteRemovedKeys(n, t), Object.keys(t).length === 0)) {
        this.setObjectKey(n, O, P);
        return;
      }
      for (let i in t) i === "children" || i === "parentid" || this.setObjectKey(n, i, t[i]);
      if (!(!("children" in t) || !Array.isArray(t.children))) {
        this.setObjectKey(n, "children", P);
        for (let i of t.children) this.insertNode(i, n);
      }
    }
    resolveObjectInArrayReference(e, t, n, i) {
      let o = this._getIdFromObject(t);
      if (o === void 0) {
        let c;
        (i && Su(t)
          ? (c = `__${n}_${this.client.toString(36)}`)
          : typeof t.id == "string"
            ? (c = t.id)
            : typeof t.identifier == "string"
              ? (c = t.identifier)
              : (c = `__${n}_${this.client.toString(36)}`),
          (o = this.createStoreId(e, c)));
      }
      let s = this.getCurrentValue(e, o) === m,
        a = this.inserting;
      this.inserting = this.inserting || s;
      try {
        this.setObject(o, t);
      } finally {
        this.inserting = a;
      }
      return vi(o);
    }
    createAtomicArray(e, t) {
      let n = [];
      for (let i = 0; i < t.length; i++) {
        let o = t[i];
        if (de(o)) n.push(this.resolveObjectInArrayReference(e, o, i, !0));
        else if (wu(o)) {
          let s = this.createStoreId(e, i.toString());
          (this.setMergeableArray(s, o), n.push(Si(s)));
        } else
          Array.isArray(o) ? n.push(this.createAtomicArray(e + "." + i.toString(), o)) : n.push(o);
      }
      return n;
    }
    cleanExistingReferenceValue(e, t) {
      if (t !== null && typeof t == "object" && !Array.isArray(t)) return;
      let n = se(e);
      if (ae(e) || n) {
        let i = $(e);
        if (t === w) {
          if (n) {
            let o = this.latest.getLatest(i);
            if (o) for (let s of o.keys()) s !== O && this.inheritExistingKeys(s);
          }
          this.inheritExistingKeys(i);
        } else this.deleteRemovedKeys(i, {});
      }
    }
    setObjectKey(e, t, n) {
      if (t === "parentid") {
        (this.hierarchy.getHierarchyKey(e) !== n || this.inserting) && this.updateKeyValue(e, t, n);
        return;
      }
      let i = this.base ? this.getCurrentRawValue(e, t) === w : !1,
        o = this.getCurrentValue(e, t);
      if (n instanceof qt) {
        let c = bu(),
          d = this.createStoreId(e, `${t}.${c}`);
        (this.setObject(d, n.value), this.updateKeyValue(e, t, uu(d)));
        return;
      }
      if (de(n)) {
        let c = ae(o) ? $(o) : void 0,
          d = c ?? this._getIdFromObject(n) ?? this.createStoreId(e, t);
        (this.setObject(d, n), (!c || this.inserting) && this.updateKeyValue(e, t, vi(d)));
        return;
      }
      if (!Array.isArray(n)) {
        (o !== n || this.inserting || i) &&
          (this.cleanExistingReferenceValue(o, n), this.updateKeyValue(e, t, n));
        return;
      }
      if (wu(n) || (n.length === 0 && se(o))) {
        let c = se(o) ? $(o) : void 0,
          d = c ?? this.createStoreId(e, t),
          u = o === m,
          h = this.inserting;
        this.inserting = this.inserting || u;
        try {
          (this.setMergeableArray(d, n),
            (!c || this.inserting || i) && this.updateKeyValue(e, t, Si(d)));
        } finally {
          this.inserting = h;
        }
        return;
      }
      (pu(this.atomicArrays, n, t, e),
        typeof o == "string" && this.cleanExistingReferenceValue(o, n));
      let s = this.createStoreId(e, t),
        a = this.createAtomicArray(s, n);
      (!this.inserting && !i && Array.isArray(o) && tr(a, o)) || this.updateKeyValue(e, t, a);
    }
    setObjectKeyPath(e, t, n) {
      if (!t[0]) return;
      let i = e;
      for (let s = 0; s < t.length - 1; ++s) {
        let a = t[s],
          c = this.getCurrentRawValue(i, a),
          d = c === w ? this.base?.getCurrentValue(i, a) : c;
        if (d === m) {
          let u = Qf(t.slice(s + 1), n);
          this.setObjectKey(i, a, u);
          return;
        }
        if ((d || (this.setObjectKey(i, a, {}), (d = this.getCurrentValue(i, a))), !ae(d))) {
          let u = t.slice(0, s + 1);
          throw new Error(`${u.join(".")} is not an object`);
        }
        (c === w && this.updateKeyValue(i, a, d), (i = $(d)));
      }
      let o = t[t.length - 1];
      this.setObjectKey(i, o, n);
    }
    getChildrenIds(e) {
      return this.hierarchy.getChildrenIds(e);
    }
    getChecksum(e) {
      return this.checksumIndex.getChecksum(e);
    }
    getSubtreeIds(e) {
      let t = new Set();
      for (let n of e) this.collectSubtreeObject(n, t);
      return t;
    }
    collectSubtreeObject(e, t) {
      if (t.has(e)) return;
      t.add(e);
      let n = this.getLatest(e);
      if (!n) return;
      let i = Array.from(n.keys());
      if (i.length > 0) {
        let o = this.sortedArrayCache.isMergeableArray(e, i);
        for (let s of i)
          if (s !== O)
            if (o) this.collectSubtreeObject(s, t);
            else {
              let a = this.getCurrentValue(e, s);
              this.collectSubtreeValue(a, t);
            }
      }
      for (let o of this.hierarchy.getCachedChildrenIds(e)) this.collectSubtreeObject(o, t);
    }
    collectSubtreeValue(e, t) {
      if (ae(e) || De(e)) {
        this.collectSubtreeObject($(e), t);
        return;
      }
      if (se(e)) {
        this.collectSubtreeObject($(e), t);
        return;
      }
      if (Array.isArray(e)) for (let n of e) this.collectSubtreeValue(n, t);
    }
    getLatest(e) {
      return this.latest.getLatest(e);
    }
    has(e) {
      return this.latest.getLatest(e) !== void 0;
    }
    getObjectKey(e, t) {
      let n = this.getCurrentValue(e, t);
      if (this.getCurrentValue(e, O) !== m && n !== m) return this.getReferenceValue(n);
    }
    getReplayableValue(e, t) {
      return t === "parentid" ? this.hierarchy.getHierarchyKey(e) : this.getCurrentValue(e, t);
    }
    hasReplayableValue(e, t) {
      return t === "parentid"
        ? this.hierarchy.getHierarchyKey(e) !== void 0
        : this.latest.has(e, t);
    }
    getRawObjectKey(e, t) {
      let n = this.getCurrentValue(e, t);
      return this.latest.get(e, t) === void 0 ? St : n === m ? n : this.getReferenceValue(n);
    }
    getObject(e) {
      return (this.throwIfPermanentError(), this.getObjectInner(e));
    }
    getObjectWithShallowChildren(e, t) {
      return (this.throwIfPermanentError(), this.getObjectInner(e, t));
    }
    getObjectInner(e, t = 1 / 0) {
      let n = [{ depth: 0, id: e, parent: void 0 }],
        i,
        o = new Set(),
        s = this.branchData.columns.value,
        a = {},
        c = (d, u) => {
          if (d === O || d === "children" || d === "parentid") return;
          let h = s.get(u);
          h !== m && (a[d] = this.getReferenceValue(h));
        };
      for (; n.length > 0; ) {
        let { id: d, depth: u, parent: h } = n.pop();
        if (o.has(d)) continue;
        o.add(d);
        let f = this.latest.getLatest(d);
        if (!f && this.hierarchy.getParentRowIdx(d) === void 0) continue;
        if (this.base) {
          if (this.getCurrentValue(d, O) === m) continue;
        } else {
          let b = f?.ownGet(O);
          if (b !== void 0 && s.get(b) === m) continue;
        }
        let p = {};
        if ((i === void 0 && (i = p), h && h.children.push(p), this.isRoot(d))) p.parentid = null;
        else {
          let b = this.getParentId(d);
          b && (p.parentid = b);
        }
        if (f) {
          if (this.base)
            for (let b of f.keys()) {
              if (b === O) continue;
              let x = this.getCurrentValue(d, b);
              x !== m &&
                (b === "children" || b === "parentid" || (p[b] = this.getReferenceValue(x)));
            }
          else ((a = p), f.forEachOwn(c));
          if (u < t && f.has("children")) {
            let b = this.getChildrenIds(d);
            p.children = [];
            for (let x = b.length - 1; x >= 0; --x) {
              let D = b[x];
              n.push({ id: D, depth: u + 1, parent: p });
            }
          }
        }
      }
      return i;
    }
    getObjectKeys(e, t) {
      let n = this.latest.getLatest(e);
      if (!n) return [];
      let i = [];
      for (let o of n.keys()) t(o) && i.push(o);
      return i;
    }
    applyArrayEdits(e, t, n, i) {
      if (n.length === 0) return;
      let o = new Set(i),
        s = t.map((c) => this.getCurrentValue(e, c)),
        a = 0;
      for (let c of n) {
        let d = c.value;
        switch (c.operation) {
          case "delete":
            (s.splice(c.index + a, 1), o.has(c.value) || this.updateKeyValue(e, d, m), a--);
            break;
          case "insert": {
            let u = $e(s[c.index - 1], s[c.index], this.positionClientId);
            (this.updateKeyValue(e, d, u), s.splice(c.index, 0, u), a++);
            break;
          }
        }
      }
    }
    setMergeableArray(e, t) {
      let n = this.getMergeableArrayIds(e),
        i = !n;
      if (!n) {
        let a = this.latest.getLatest(e);
        if (a) for (let c of a.keys()) this.updateKeyValue(e, c, m);
        n = [];
      }
      (i || this.inserting) && this.updateKeyValue(e, O, P);
      let o = [];
      for (let a = 0; a < t.length; a++) {
        let c = this.resolveObjectInArrayReference(e, t[a], a, !1);
        o.push($(c));
      }
      let s = ki(n, o);
      if ((this.applyArrayEdits(e, n, s, o), this.inserting)) {
        let a = new Set(n);
        for (let c of o) {
          if (!a.has(c)) continue;
          let d = this.getCurrentValue(e, c);
          this.updateKeyValue(e, c, d);
        }
      }
    }
    getMergeableArrayItemPosition(e, t) {
      let n = this.getCurrentValue(e, this.createStoreId(e, t));
      return Te(n) ? n : void 0;
    }
    getMergeableArray(e) {
      let t = this.getLatest(e)?.keys(),
        n = t ? Array.from(t) : [];
      if (!this.sortedArrayCache.isMergeableArray(e, n))
        return this.base ? this.base.getMergeableArray(e) : void 0;
      let i = this.sortedArrayCache.getItemIds(e),
        o = [];
      for (let s of i) {
        let a = this.getObjectInner(s);
        a && o.push(a);
      }
      return o;
    }
    getMergeableArrayIds(e) {
      let t = this.getLatest(e)?.keys(),
        n = t ? Array.from(t) : [];
      return this.sortedArrayCache.isMergeableArray(e, n)
        ? this.sortedArrayCache.getItemIds(e)
        : this.base?.getMergeableArrayIds(e);
    }
    get length() {
      return this.branchData.columns.client.length;
    }
    static verifyBatches(e) {
      let t = new Map(),
        n = new Set();
      for (let i of e) {
        let o = i.branchId ?? I,
          s = `${o}/${Ti(i)}`;
        if (n.has(s)) continue;
        n.add(s);
        let a = t.get(i.client);
        a || ((a = new Map()), t.set(i.client, a));
        let c = a.get(o);
        c || ((c = new Map()), a.set(o, c));
        let d = c.get(i.batch) ?? 0;
        c.set(i.batch, d + 1);
      }
      for (let [i, o] of t)
        for (let [s, a] of o)
          for (let [c, d] of a) {
            let { rowCount: u } = ri(c);
            l(
              u === d,
              () =>
                `Update row count does not match batch row count. Batch: ${c} Update count: ${d} Batch count: ${u}`
            );
          }
    }
    createBranchNodeChangeReader(e) {
      return (
        l(this.base, "Can't create a branch node change reader for a main store"),
        new gr(this, e)
      );
    }
    get mainStore() {
      let e = this;
      for (; e.base; ) e = e.base;
      return (l(e.branchId === I, "Expected root store to be the main branch"), e);
    }
    *childBranchIds() {
      for (let e of this.hierarchy.getCachedChildrenIds(ze))
        e !== I && Kt(this.mainStore, e) === this.branchId && (yield e);
    }
    compactBranch(e, t, n, i, o) {
      let s = new Set(),
        a = new Set(),
        c = !1;
      for (let h of this.childBranchIds()) {
        let f = this.branch(h);
        f.getHierarchy().resolveCycles(0);
        let p = new Set(),
          b = new Set(),
          x = f.compactBranch(e, p, b, i, o);
        c ||= x !== f;
        for (let D of p) s.add(D);
        for (let D of b) a.add(D);
      }
      if (!c && this.branchData.metadata.compactedLength === this.length) {
        ((this.branchData.metadata.compactedAt = i),
          e.branches.set(this.branchId, this.branchData),
          lu(this, t, n));
        for (let h of s) t.add(h);
        for (let h of a) n.add(h);
        return this;
      }
      let d = new r({
          user: this.user,
          client: this.client,
          atomicArrays: this.atomicArrays,
          latestMap: this.latestMapType,
          branchId: this.branchId,
          base: this.base,
          table: e,
          extractIdFromObject: this.extractIdFromObject,
        }),
        u = o ? this.branchData.metadata.compactedLength : this.length;
      (Ir.run(this, d, u, s, a),
        (d.branchData.metadata.compactedAt = i),
        (d.branchData.metadata.compactedLength = d.length));
      for (let h of s) t.add(h);
      for (let h of a) n.add(h);
      return d;
    }
    compact(e = Date.now(), t = {}) {
      l(this.branchId === I, "Cannot call compact on non main branches");
      let n = new Y(this.table.version);
      return this.compactBranch(n, new Set(), new Set(), e, t.preserveConcurrencyWindow ?? !0);
    }
    toBuffer() {
      return this.table.toBuffer();
    }
    async writeToStream(e) {
      return this.table.writeToStream(e);
    }
    releaseColumnLookups() {
      this.table.releaseColumnLookups();
    }
  };
var vu = {
  RootNode: !0,
  AgentSkillsListNode: !0,
  AgentSkillNode: !0,
  FrameNode: !0,
  ShapeContainerNode: !0,
  CanvasPageNode: !0,
  DesignPageNode: !0,
  PathNode: !0,
  BooleanShapeNode: !0,
  SVGNode: !0,
  TextNode: !0,
  RichTextNode: !0,
  RectangleShapeNode: !0,
  OvalShapeNode: !0,
  OverlayNode: !0,
  PolygonShapeNode: !0,
  StarShapeNode: !0,
  ShapeGroupNode: !0,
  SmartComponentNode: !0,
  WebPageNode: !0,
  CodeComponentNode: !0,
  ColorStyleTokenListNode: !0,
  ColorStyleTokenNode: !0,
  ErrorListNode: !0,
  ErrorNode: !0,
  ExternalModuleNode: !0,
  ExternalModulesListNode: !0,
  LocalModulesListNode: !0,
  LocalModuleNode: !0,
  ContentManagementNode: !0,
  CollectionNode: !0,
  CollectionItemNode: !0,
  ComponentPresetNode: !0,
  PresetsListNode: !0,
  BlockquoteStylePresetNode: !0,
  TableStylePresetNode: !0,
  TextStylePresetNode: !0,
  LinkStylePresetNode: !0,
  InlineCodeStylePresetNode: !0,
  ImageStylePresetNode: !0,
  RoutesNode: !0,
  RedirectRouteNode: !0,
  RewriteRouteNode: !0,
  RouteSegmentNode: !0,
  RouteSegmentRootNode: !0,
  FormPlainTextInputNode: !0,
  FormBooleanInputNode: !0,
  FormSelectNode: !0,
  ProxyRouteNode: !0,
  LayoutTemplateNode: !0,
  SlotNode: !0,
  SlotPropertyNode: !0,
  EntityFolderNode: !0,
  EntityReferenceNode: !0,
  EntityRootNode: !0,
  BlockquoteEntityTypeRootNode: !0,
  InlineCodeEntityTypeRootNode: !0,
  LinkEntityTypeRootNode: !0,
  TextEntityTypeRootNode: !0,
  ColorEntityTypeRootNode: !0,
  CMSEntityTypeRootNode: !0,
  CodeFileEntityTypeRootNode: !0,
  ComponentEntityTypeRootNode: !0,
  LayoutTemplateEntityTypeRootNode: !0,
  VectorSetEntityTypeRootNode: !0,
  FunnelsEntityTypeRootNode: !0,
  AbTestsEntityTypeRootNode: !0,
  ContentManagementEntityTypeRootNode: !0,
  DesignPageEntityTypeRootNode: !0,
  VectorSetNode: !0,
  AnalyticsScopeNode: !0,
  FunnelNode: !0,
  FunnelStepNode: !0,
  FunnelStepActionNode: !0,
  LocalizationGlossaryNode: !0,
  LocalizationGlossaryItemNode: !0,
  HeaderRouteNode: !0,
  BranchesNode: !0,
  BranchNode: !0,
  CustomCodeScopeNode: !0,
  CustomCodeNode: !0,
  ShaderNode: !0,
};
function tp(r) {
  return r in vu;
}
var rp = (r) => (typeof r.__class == "string" && tp(r.__class) ? r.id : void 0);
function np(r, e = cn(), t = {}) {
  return new $t({
    atomicArrays: "strict",
    latestMap: "map",
    ...t,
    client: e,
    user: r,
    extractIdFromObject: rp,
  });
}
function xu(r) {
  return Map.groupBy(r, (e) => e.branchId ?? I);
}
var Nu = (r, e) => {
    (Wo.init(r, e),
      (r.name = "ZodError"),
      Object.defineProperties(r, {
        format: { value: (t) => nr(r, t) },
        flatten: { value: (t) => rr(r, t) },
        addIssue: {
          value: (t) => {
            (r.issues.push(t), (r.message = JSON.stringify(r.issues, ln, 2)));
          },
        },
        addIssues: {
          value: (t) => {
            (r.issues.push(...t), (r.message = JSON.stringify(r.issues, ln, 2)));
          },
        },
        isEmpty: {
          get() {
            return r.issues.length === 0;
          },
        },
      }));
  },
  ip = y("ZodError", Nu),
  F = y("ZodError", Nu, { Parent: Error });
var _i = Xo(F),
  Di = Qo(F),
  Ei = es(F),
  Bi = ts(F),
  zi = rs(F),
  Pi = ns(F),
  Li = is(F),
  qi = os(F),
  Ki = ss(F),
  $i = as(F),
  Ui = cs(F),
  Fi = ds(F);
var Uo = {};
it(Uo, {
  $brand: () => un,
  $input: () => Ta,
  $output: () => ka,
  NEVER: () => Zo,
  TimePrecision: () => Ba,
  ZodAny: () => to,
  ZodArray: () => oo,
  ZodBase64: () => Zr,
  ZodBase64URL: () => Gr,
  ZodBigInt: () => nt,
  ZodBigIntFormat: () => Yr,
  ZodBoolean: () => rt,
  ZodCIDRv4: () => Vr,
  ZodCIDRv6: () => jr,
  ZodCUID: () => Lr,
  ZodCUID2: () => qr,
  ZodCatch: () => Ao,
  ZodCodec: () => sn,
  ZodCustom: () => Qt,
  ZodCustomStringFormat: () => et,
  ZodDate: () => Gt,
  ZodDefault: () => vo,
  ZodDiscriminatedUnion: () => ao,
  ZodE164: () => Wr,
  ZodEmail: () => Br,
  ZodEmoji: () => zr,
  ZodEnum: () => Xe,
  ZodError: () => ip,
  ZodExactOptional: () => Io,
  ZodFile: () => go,
  ZodFirstPartyTypeKind: () => Ko,
  ZodFunction: () => Po,
  ZodGUID: () => Ft,
  ZodIPv4: () => Fr,
  ZodIPv6: () => Hr,
  ZodISODate: () => kr,
  ZodISODateTime: () => Ar,
  ZodISODuration: () => Mr,
  ZodISOTime: () => Tr,
  ZodIntersection: () => co,
  ZodIssueCode: () => sp,
  ZodJWT: () => Jr,
  ZodKSUID: () => Ur,
  ZodLazy: () => Eo,
  ZodLiteral: () => yo,
  ZodMAC: () => Gi,
  ZodMap: () => po,
  ZodNaN: () => To,
  ZodNanoID: () => Pr,
  ZodNever: () => no,
  ZodNonOptional: () => nn,
  ZodNull: () => Qi,
  ZodNullable: () => So,
  ZodNumber: () => tt,
  ZodNumberFormat: () => Be,
  ZodObject: () => Jt,
  ZodOptional: () => rn,
  ZodPipe: () => on,
  ZodPrefault: () => Co,
  ZodPromise: () => zo,
  ZodReadonly: () => Mo,
  ZodRealError: () => F,
  ZodRecord: () => Xt,
  ZodSet: () => mo,
  ZodString: () => Qe,
  ZodStringFormat: () => C,
  ZodSuccess: () => Oo,
  ZodSymbol: () => Yi,
  ZodTemplateLiteral: () => Do,
  ZodTransform: () => bo,
  ZodTuple: () => lo,
  ZodType: () => S,
  ZodULID: () => Kr,
  ZodURL: () => Zt,
  ZodUUID: () => te,
  ZodUndefined: () => Xi,
  ZodUnion: () => Yt,
  ZodUnknown: () => ro,
  ZodVoid: () => io,
  ZodXID: () => $r,
  ZodXor: () => so,
  _ZodString: () => Er,
  _default: () => xo,
  _function: () => Ml,
  any: () => dl,
  array: () => Wt,
  base64: () => ju,
  base64url: () => Zu,
  bigint: () => il,
  boolean: () => Ji,
  catch: () => ko,
  check: () => _l,
  cidrv4: () => Hu,
  cidrv6: () => Vu,
  clone: () => ot,
  codec: () => Al,
  coerce: () => $o,
  config: () => ue,
  core: () => pe,
  cuid: () => zu,
  cuid2: () => Pu,
  custom: () => Dl,
  date: () => ll,
  decode: () => Pi,
  decodeAsync: () => qi,
  describe: () => El,
  discriminatedUnion: () => gl,
  e164: () => Gu,
  email: () => Ru,
  emoji: () => Eu,
  encode: () => zi,
  encodeAsync: () => Li,
  endsWith: () => lt,
  enum: () => en,
  exactOptional: () => wo,
  file: () => Cl,
  flattenError: () => rr,
  float32: () => el,
  float64: () => tl,
  formatError: () => nr,
  fromJSONSchema: () => $l,
  function: () => Ml,
  getErrorMap: () => cp,
  globalRegistry: () => ne,
  gt: () => he,
  gte: () => H,
  guid: () => Ou,
  hash: () => Qu,
  hex: () => Xu,
  hostname: () => Yu,
  httpUrl: () => Du,
  includes: () => dt,
  instanceof: () => zl,
  int: () => Dr,
  int32: () => rl,
  int64: () => ol,
  intersection: () => uo,
  ipv4: () => $u,
  ipv6: () => Fu,
  iso: () => Ye,
  json: () => Ll,
  jwt: () => Wu,
  keyof: () => hl,
  ksuid: () => Ku,
  lazy: () => Bo,
  length: () => qe,
  literal: () => xl,
  locales: () => Aa,
  looseObject: () => ml,
  looseRecord: () => Il,
  lowercase: () => at,
  lt: () => le,
  lte: () => X,
  mac: () => Uu,
  map: () => wl,
  maxLength: () => Le,
  maxSize: () => Ne,
  meta: () => Bl,
  mime: () => ht,
  minLength: () => fe,
  minSize: () => ie,
  multipleOf: () => Ce,
  nan: () => Ol,
  nanoid: () => Bu,
  nativeEnum: () => vl,
  negative: () => Bn,
  never: () => Xr,
  nonnegative: () => Pn,
  nonoptional: () => Ro,
  nonpositive: () => zn,
  normalize: () => pt,
  null: () => eo,
  nullable: () => Vt,
  nullish: () => Nl,
  number: () => Wi,
  object: () => fl,
  optional: () => Ht,
  overwrite: () => ft,
  parse: () => _i,
  parseAsync: () => Di,
  partialRecord: () => bl,
  pipe: () => jt,
  positive: () => En,
  prefault: () => No,
  preprocess: () => ql,
  prettifyError: () => Yo,
  promise: () => Tl,
  property: () => Ln,
  readonly: () => _o,
  record: () => fo,
  refine: () => Lo,
  regex: () => st,
  regexes: () => xe,
  registry: () => Ma,
  safeDecode: () => $i,
  safeDecodeAsync: () => Fi,
  safeEncode: () => Ki,
  safeEncodeAsync: () => Ui,
  safeParse: () => Ei,
  safeParseAsync: () => Bi,
  set: () => Sl,
  setErrorMap: () => ap,
  size: () => Pe,
  slugify: () => bt,
  startsWith: () => ut,
  strictObject: () => pl,
  string: () => _r,
  stringFormat: () => Ju,
  stringbool: () => Pl,
  success: () => Rl,
  superRefine: () => qo,
  symbol: () => al,
  templateLiteral: () => kl,
  toJSONSchema: () => td,
  toLowerCase: () => yt,
  toUpperCase: () => gt,
  transform: () => tn,
  treeifyError: () => Jo,
  trim: () => mt,
  tuple: () => ho,
  uint32: () => nl,
  uint64: () => sl,
  ulid: () => Lu,
  undefined: () => cl,
  union: () => Qr,
  unknown: () => Ee,
  uppercase: () => ct,
  url: () => _u,
  util: () => v,
  uuid: () => Au,
  uuidv4: () => ku,
  uuidv6: () => Tu,
  uuidv7: () => Mu,
  void: () => ul,
  xid: () => qu,
  xor: () => yl,
});
var Ut = {};
it(Ut, {
  ZodAny: () => to,
  ZodArray: () => oo,
  ZodBase64: () => Zr,
  ZodBase64URL: () => Gr,
  ZodBigInt: () => nt,
  ZodBigIntFormat: () => Yr,
  ZodBoolean: () => rt,
  ZodCIDRv4: () => Vr,
  ZodCIDRv6: () => jr,
  ZodCUID: () => Lr,
  ZodCUID2: () => qr,
  ZodCatch: () => Ao,
  ZodCodec: () => sn,
  ZodCustom: () => Qt,
  ZodCustomStringFormat: () => et,
  ZodDate: () => Gt,
  ZodDefault: () => vo,
  ZodDiscriminatedUnion: () => ao,
  ZodE164: () => Wr,
  ZodEmail: () => Br,
  ZodEmoji: () => zr,
  ZodEnum: () => Xe,
  ZodExactOptional: () => Io,
  ZodFile: () => go,
  ZodFunction: () => Po,
  ZodGUID: () => Ft,
  ZodIPv4: () => Fr,
  ZodIPv6: () => Hr,
  ZodIntersection: () => co,
  ZodJWT: () => Jr,
  ZodKSUID: () => Ur,
  ZodLazy: () => Eo,
  ZodLiteral: () => yo,
  ZodMAC: () => Gi,
  ZodMap: () => po,
  ZodNaN: () => To,
  ZodNanoID: () => Pr,
  ZodNever: () => no,
  ZodNonOptional: () => nn,
  ZodNull: () => Qi,
  ZodNullable: () => So,
  ZodNumber: () => tt,
  ZodNumberFormat: () => Be,
  ZodObject: () => Jt,
  ZodOptional: () => rn,
  ZodPipe: () => on,
  ZodPrefault: () => Co,
  ZodPromise: () => zo,
  ZodReadonly: () => Mo,
  ZodRecord: () => Xt,
  ZodSet: () => mo,
  ZodString: () => Qe,
  ZodStringFormat: () => C,
  ZodSuccess: () => Oo,
  ZodSymbol: () => Yi,
  ZodTemplateLiteral: () => Do,
  ZodTransform: () => bo,
  ZodTuple: () => lo,
  ZodType: () => S,
  ZodULID: () => Kr,
  ZodURL: () => Zt,
  ZodUUID: () => te,
  ZodUndefined: () => Xi,
  ZodUnion: () => Yt,
  ZodUnknown: () => ro,
  ZodVoid: () => io,
  ZodXID: () => $r,
  ZodXor: () => so,
  _ZodString: () => Er,
  _default: () => xo,
  _function: () => Ml,
  any: () => dl,
  array: () => Wt,
  base64: () => ju,
  base64url: () => Zu,
  bigint: () => il,
  boolean: () => Ji,
  catch: () => ko,
  check: () => _l,
  cidrv4: () => Hu,
  cidrv6: () => Vu,
  codec: () => Al,
  cuid: () => zu,
  cuid2: () => Pu,
  custom: () => Dl,
  date: () => ll,
  describe: () => El,
  discriminatedUnion: () => gl,
  e164: () => Gu,
  email: () => Ru,
  emoji: () => Eu,
  enum: () => en,
  exactOptional: () => wo,
  file: () => Cl,
  float32: () => el,
  float64: () => tl,
  function: () => Ml,
  guid: () => Ou,
  hash: () => Qu,
  hex: () => Xu,
  hostname: () => Yu,
  httpUrl: () => Du,
  instanceof: () => zl,
  int: () => Dr,
  int32: () => rl,
  int64: () => ol,
  intersection: () => uo,
  ipv4: () => $u,
  ipv6: () => Fu,
  json: () => Ll,
  jwt: () => Wu,
  keyof: () => hl,
  ksuid: () => Ku,
  lazy: () => Bo,
  literal: () => xl,
  looseObject: () => ml,
  looseRecord: () => Il,
  mac: () => Uu,
  map: () => wl,
  meta: () => Bl,
  nan: () => Ol,
  nanoid: () => Bu,
  nativeEnum: () => vl,
  never: () => Xr,
  nonoptional: () => Ro,
  null: () => eo,
  nullable: () => Vt,
  nullish: () => Nl,
  number: () => Wi,
  object: () => fl,
  optional: () => Ht,
  partialRecord: () => bl,
  pipe: () => jt,
  prefault: () => No,
  preprocess: () => ql,
  promise: () => Tl,
  readonly: () => _o,
  record: () => fo,
  refine: () => Lo,
  set: () => Sl,
  strictObject: () => pl,
  string: () => _r,
  stringFormat: () => Ju,
  stringbool: () => Pl,
  success: () => Rl,
  superRefine: () => qo,
  symbol: () => al,
  templateLiteral: () => kl,
  transform: () => tn,
  tuple: () => ho,
  uint32: () => nl,
  uint64: () => sl,
  ulid: () => Lu,
  undefined: () => cl,
  union: () => Qr,
  unknown: () => Ee,
  url: () => _u,
  uuid: () => Au,
  uuidv4: () => ku,
  uuidv6: () => Tu,
  uuidv7: () => Mu,
  void: () => ul,
  xid: () => qu,
  xor: () => yl,
});
var Or = {};
it(Or, {
  endsWith: () => lt,
  gt: () => he,
  gte: () => H,
  includes: () => dt,
  length: () => qe,
  lowercase: () => at,
  lt: () => le,
  lte: () => X,
  maxLength: () => Le,
  maxSize: () => Ne,
  mime: () => ht,
  minLength: () => fe,
  minSize: () => ie,
  multipleOf: () => Ce,
  negative: () => Bn,
  nonnegative: () => Pn,
  nonpositive: () => zn,
  normalize: () => pt,
  overwrite: () => ft,
  positive: () => En,
  property: () => Ln,
  regex: () => st,
  size: () => Pe,
  slugify: () => bt,
  startsWith: () => ut,
  toLowerCase: () => yt,
  toUpperCase: () => gt,
  trim: () => mt,
  uppercase: () => ct,
});
var Ye = {};
it(Ye, {
  ZodISODate: () => kr,
  ZodISODateTime: () => Ar,
  ZodISODuration: () => Mr,
  ZodISOTime: () => Tr,
  date: () => Vi,
  datetime: () => Hi,
  duration: () => Zi,
  time: () => ji,
});
var Ar = y("ZodISODateTime", (r, e) => {
  (xs.init(r, e), C.init(r, e));
});
function Hi(r) {
  return za(Ar, r);
}
var kr = y("ZodISODate", (r, e) => {
  (Cs.init(r, e), C.init(r, e));
});
function Vi(r) {
  return Pa(kr, r);
}
var Tr = y("ZodISOTime", (r, e) => {
  (Ns.init(r, e), C.init(r, e));
});
function ji(r) {
  return La(Tr, r);
}
var Mr = y("ZodISODuration", (r, e) => {
  (Rs.init(r, e), C.init(r, e));
});
function Zi(r) {
  return qa(Mr, r);
}
var S = y(
    "ZodType",
    (r, e) => (
      hn.init(r, e),
      Object.assign(r["~standard"], {
        jsonSchema: { input: qn(r, "input"), output: qn(r, "output") },
      }),
      (r.toJSONSchema = gc(r, {})),
      (r.def = e),
      (r.type = e.type),
      Object.defineProperty(r, "_def", { value: e }),
      (r.check = (...t) =>
        r.clone(
          v.mergeDefs(e, {
            checks: [
              ...(e.checks ?? []),
              ...t.map((n) =>
                typeof n == "function"
                  ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } }
                  : n
              ),
            ],
          }),
          { parent: !0 }
        )),
      (r.with = r.check),
      (r.clone = (t, n) => ot(r, t, n)),
      (r.brand = () => r),
      (r.register = (t, n) => (t.add(r, n), r)),
      (r.parse = (t, n) => _i(r, t, n, { callee: r.parse })),
      (r.safeParse = (t, n) => Ei(r, t, n)),
      (r.parseAsync = async (t, n) => Di(r, t, n, { callee: r.parseAsync })),
      (r.safeParseAsync = async (t, n) => Bi(r, t, n)),
      (r.spa = r.safeParseAsync),
      (r.encode = (t, n) => zi(r, t, n)),
      (r.decode = (t, n) => Pi(r, t, n)),
      (r.encodeAsync = async (t, n) => Li(r, t, n)),
      (r.decodeAsync = async (t, n) => qi(r, t, n)),
      (r.safeEncode = (t, n) => Ki(r, t, n)),
      (r.safeDecode = (t, n) => $i(r, t, n)),
      (r.safeEncodeAsync = async (t, n) => Ui(r, t, n)),
      (r.safeDecodeAsync = async (t, n) => Fi(r, t, n)),
      (r.refine = (t, n) => r.check(Lo(t, n))),
      (r.superRefine = (t) => r.check(qo(t))),
      (r.overwrite = (t) => r.check(ft(t))),
      (r.optional = () => Ht(r)),
      (r.exactOptional = () => wo(r)),
      (r.nullable = () => Vt(r)),
      (r.nullish = () => Ht(Vt(r))),
      (r.nonoptional = (t) => Ro(r, t)),
      (r.array = () => Wt(r)),
      (r.or = (t) => Qr([r, t])),
      (r.and = (t) => uo(r, t)),
      (r.transform = (t) => jt(r, tn(t))),
      (r.default = (t) => xo(r, t)),
      (r.prefault = (t) => No(r, t)),
      (r.catch = (t) => ko(r, t)),
      (r.pipe = (t) => jt(r, t)),
      (r.readonly = () => _o(r)),
      (r.describe = (t) => {
        let n = r.clone();
        return (ne.add(n, { description: t }), n);
      }),
      Object.defineProperty(r, "description", {
        get() {
          return ne.get(r)?.description;
        },
        configurable: !0,
      }),
      (r.meta = (...t) => {
        if (t.length === 0) return ne.get(r);
        let n = r.clone();
        return (ne.add(n, t[0]), n);
      }),
      (r.isOptional = () => r.safeParse(void 0).success),
      (r.isNullable = () => r.safeParse(null).success),
      (r.apply = (t) => t(r)),
      r
    )
  ),
  Er = y("_ZodString", (r, e) => {
    (fn.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (n, i, o) => bc(r, n, i, o)));
    let t = r._zod.bag;
    ((r.format = t.format ?? null),
      (r.minLength = t.minimum ?? null),
      (r.maxLength = t.maximum ?? null),
      (r.regex = (...n) => r.check(st(...n))),
      (r.includes = (...n) => r.check(dt(...n))),
      (r.startsWith = (...n) => r.check(ut(...n))),
      (r.endsWith = (...n) => r.check(lt(...n))),
      (r.min = (...n) => r.check(fe(...n))),
      (r.max = (...n) => r.check(Le(...n))),
      (r.length = (...n) => r.check(qe(...n))),
      (r.nonempty = (...n) => r.check(fe(1, ...n))),
      (r.lowercase = (n) => r.check(at(n))),
      (r.uppercase = (n) => r.check(ct(n))),
      (r.trim = () => r.check(mt())),
      (r.normalize = (...n) => r.check(pt(...n))),
      (r.toLowerCase = () => r.check(yt())),
      (r.toUpperCase = () => r.check(gt())),
      (r.slugify = () => r.check(bt())));
  }),
  Qe = y("ZodString", (r, e) => {
    (fn.init(r, e),
      Er.init(r, e),
      (r.email = (t) => r.check(pn(Br, t))),
      (r.url = (t) => r.check(or(Zt, t))),
      (r.jwt = (t) => r.check(Dn(Jr, t))),
      (r.emoji = (t) => r.check(In(zr, t))),
      (r.guid = (t) => r.check(ir(Ft, t))),
      (r.uuid = (t) => r.check(mn(te, t))),
      (r.uuidv4 = (t) => r.check(yn(te, t))),
      (r.uuidv6 = (t) => r.check(gn(te, t))),
      (r.uuidv7 = (t) => r.check(bn(te, t))),
      (r.nanoid = (t) => r.check(wn(Pr, t))),
      (r.guid = (t) => r.check(ir(Ft, t))),
      (r.cuid = (t) => r.check(Sn(Lr, t))),
      (r.cuid2 = (t) => r.check(vn(qr, t))),
      (r.ulid = (t) => r.check(xn(Kr, t))),
      (r.base64 = (t) => r.check(Tn(Zr, t))),
      (r.base64url = (t) => r.check(Mn(Gr, t))),
      (r.xid = (t) => r.check(Cn($r, t))),
      (r.ksuid = (t) => r.check(Nn(Ur, t))),
      (r.ipv4 = (t) => r.check(Rn(Fr, t))),
      (r.ipv6 = (t) => r.check(On(Hr, t))),
      (r.cidrv4 = (t) => r.check(An(Vr, t))),
      (r.cidrv6 = (t) => r.check(kn(jr, t))),
      (r.e164 = (t) => r.check(_n(Wr, t))),
      (r.datetime = (t) => r.check(Hi(t))),
      (r.date = (t) => r.check(Vi(t))),
      (r.time = (t) => r.check(ji(t))),
      (r.duration = (t) => r.check(Zi(t))));
  });
function _r(r) {
  return _a(Qe, r);
}
var C = y("ZodStringFormat", (r, e) => {
    (ls.init(r, e), Er.init(r, e));
  }),
  Br = y("ZodEmail", (r, e) => {
    (ps.init(r, e), C.init(r, e));
  });
function Ru(r) {
  return pn(Br, r);
}
var Ft = y("ZodGUID", (r, e) => {
  (hs.init(r, e), C.init(r, e));
});
function Ou(r) {
  return ir(Ft, r);
}
var te = y("ZodUUID", (r, e) => {
  (fs.init(r, e), C.init(r, e));
});
function Au(r) {
  return mn(te, r);
}
function ku(r) {
  return yn(te, r);
}
function Tu(r) {
  return gn(te, r);
}
function Mu(r) {
  return bn(te, r);
}
var Zt = y("ZodURL", (r, e) => {
  (ms.init(r, e), C.init(r, e));
});
function _u(r) {
  return or(Zt, r);
}
function Du(r) {
  return or(Zt, { protocol: /^https?$/, hostname: xe.domain, ...v.normalizeParams(r) });
}
var zr = y("ZodEmoji", (r, e) => {
  (ys.init(r, e), C.init(r, e));
});
function Eu(r) {
  return In(zr, r);
}
var Pr = y("ZodNanoID", (r, e) => {
  (gs.init(r, e), C.init(r, e));
});
function Bu(r) {
  return wn(Pr, r);
}
var Lr = y("ZodCUID", (r, e) => {
  (bs.init(r, e), C.init(r, e));
});
function zu(r) {
  return Sn(Lr, r);
}
var qr = y("ZodCUID2", (r, e) => {
  (Is.init(r, e), C.init(r, e));
});
function Pu(r) {
  return vn(qr, r);
}
var Kr = y("ZodULID", (r, e) => {
  (ws.init(r, e), C.init(r, e));
});
function Lu(r) {
  return xn(Kr, r);
}
var $r = y("ZodXID", (r, e) => {
  (Ss.init(r, e), C.init(r, e));
});
function qu(r) {
  return Cn($r, r);
}
var Ur = y("ZodKSUID", (r, e) => {
  (vs.init(r, e), C.init(r, e));
});
function Ku(r) {
  return Nn(Ur, r);
}
var Fr = y("ZodIPv4", (r, e) => {
  (Os.init(r, e), C.init(r, e));
});
function $u(r) {
  return Rn(Fr, r);
}
var Gi = y("ZodMAC", (r, e) => {
  (ks.init(r, e), C.init(r, e));
});
function Uu(r) {
  return Ea(Gi, r);
}
var Hr = y("ZodIPv6", (r, e) => {
  (As.init(r, e), C.init(r, e));
});
function Fu(r) {
  return On(Hr, r);
}
var Vr = y("ZodCIDRv4", (r, e) => {
  (Ts.init(r, e), C.init(r, e));
});
function Hu(r) {
  return An(Vr, r);
}
var jr = y("ZodCIDRv6", (r, e) => {
  (Ms.init(r, e), C.init(r, e));
});
function Vu(r) {
  return kn(jr, r);
}
var Zr = y("ZodBase64", (r, e) => {
  (_s.init(r, e), C.init(r, e));
});
function ju(r) {
  return Tn(Zr, r);
}
var Gr = y("ZodBase64URL", (r, e) => {
  (Ds.init(r, e), C.init(r, e));
});
function Zu(r) {
  return Mn(Gr, r);
}
var Wr = y("ZodE164", (r, e) => {
  (Es.init(r, e), C.init(r, e));
});
function Gu(r) {
  return _n(Wr, r);
}
var Jr = y("ZodJWT", (r, e) => {
  (Bs.init(r, e), C.init(r, e));
});
function Wu(r) {
  return Dn(Jr, r);
}
var et = y("ZodCustomStringFormat", (r, e) => {
  (zs.init(r, e), C.init(r, e));
});
function Ju(r, e, t = {}) {
  return It(et, r, e, t);
}
function Yu(r) {
  return It(et, "hostname", xe.hostname, r);
}
function Xu(r) {
  return It(et, "hex", xe.hex, r);
}
function Qu(r, e) {
  let t = e?.enc ?? "hex",
    n = `${r}_${t}`,
    i = xe[n];
  if (!i) throw new Error(`Unrecognized hash format: ${n}`);
  return It(et, n, i, e);
}
var tt = y("ZodNumber", (r, e) => {
  (Ps.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (n, i, o) => Ic(r, n, i, o)),
    (r.gt = (n, i) => r.check(he(n, i))),
    (r.gte = (n, i) => r.check(H(n, i))),
    (r.min = (n, i) => r.check(H(n, i))),
    (r.lt = (n, i) => r.check(le(n, i))),
    (r.lte = (n, i) => r.check(X(n, i))),
    (r.max = (n, i) => r.check(X(n, i))),
    (r.int = (n) => r.check(Dr(n))),
    (r.safe = (n) => r.check(Dr(n))),
    (r.positive = (n) => r.check(he(0, n))),
    (r.nonnegative = (n) => r.check(H(0, n))),
    (r.negative = (n) => r.check(le(0, n))),
    (r.nonpositive = (n) => r.check(X(0, n))),
    (r.multipleOf = (n, i) => r.check(Ce(n, i))),
    (r.step = (n, i) => r.check(Ce(n, i))),
    (r.finite = () => r));
  let t = r._zod.bag;
  ((r.minValue =
    Math.max(
      t.minimum ?? Number.NEGATIVE_INFINITY,
      t.exclusiveMinimum ?? Number.NEGATIVE_INFINITY
    ) ?? null),
    (r.maxValue =
      Math.min(
        t.maximum ?? Number.POSITIVE_INFINITY,
        t.exclusiveMaximum ?? Number.POSITIVE_INFINITY
      ) ?? null),
    (r.isInt = (t.format ?? "").includes("int") || Number.isSafeInteger(t.multipleOf ?? 0.5)),
    (r.isFinite = !0),
    (r.format = t.format ?? null));
});
function Wi(r) {
  return Ka(tt, r);
}
var Be = y("ZodNumberFormat", (r, e) => {
  (Ls.init(r, e), tt.init(r, e));
});
function Dr(r) {
  return Ua(Be, r);
}
function el(r) {
  return Fa(Be, r);
}
function tl(r) {
  return Ha(Be, r);
}
function rl(r) {
  return Va(Be, r);
}
function nl(r) {
  return ja(Be, r);
}
var rt = y("ZodBoolean", (r, e) => {
  (qs.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => wc(r, t, n, i)));
});
function Ji(r) {
  return Za(rt, r);
}
var nt = y("ZodBigInt", (r, e) => {
  (Ks.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (n, i, o) => Sc(r, n, i, o)),
    (r.gte = (n, i) => r.check(H(n, i))),
    (r.min = (n, i) => r.check(H(n, i))),
    (r.gt = (n, i) => r.check(he(n, i))),
    (r.gte = (n, i) => r.check(H(n, i))),
    (r.min = (n, i) => r.check(H(n, i))),
    (r.lt = (n, i) => r.check(le(n, i))),
    (r.lte = (n, i) => r.check(X(n, i))),
    (r.max = (n, i) => r.check(X(n, i))),
    (r.positive = (n) => r.check(he(BigInt(0), n))),
    (r.negative = (n) => r.check(le(BigInt(0), n))),
    (r.nonpositive = (n) => r.check(X(BigInt(0), n))),
    (r.nonnegative = (n) => r.check(H(BigInt(0), n))),
    (r.multipleOf = (n, i) => r.check(Ce(n, i))));
  let t = r._zod.bag;
  ((r.minValue = t.minimum ?? null),
    (r.maxValue = t.maximum ?? null),
    (r.format = t.format ?? null));
});
function il(r) {
  return Wa(nt, r);
}
var Yr = y("ZodBigIntFormat", (r, e) => {
  ($s.init(r, e), nt.init(r, e));
});
function ol(r) {
  return Ya(Yr, r);
}
function sl(r) {
  return Xa(Yr, r);
}
var Yi = y("ZodSymbol", (r, e) => {
  (Us.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => vc(r, t, n, i)));
});
function al(r) {
  return Qa(Yi, r);
}
var Xi = y("ZodUndefined", (r, e) => {
  (Fs.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => Cc(r, t, n, i)));
});
function cl(r) {
  return ec(Xi, r);
}
var Qi = y("ZodNull", (r, e) => {
  (Hs.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => xc(r, t, n, i)));
});
function eo(r) {
  return tc(Qi, r);
}
var to = y("ZodAny", (r, e) => {
  (Vs.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => Oc(r, t, n, i)));
});
function dl() {
  return rc(to);
}
var ro = y("ZodUnknown", (r, e) => {
  (js.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => Ac(r, t, n, i)));
});
function Ee() {
  return nc(ro);
}
var no = y("ZodNever", (r, e) => {
  (Zs.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => Rc(r, t, n, i)));
});
function Xr(r) {
  return ic(no, r);
}
var io = y("ZodVoid", (r, e) => {
  (Gs.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => Nc(r, t, n, i)));
});
function ul(r) {
  return oc(io, r);
}
var Gt = y("ZodDate", (r, e) => {
  (Ws.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (n, i, o) => kc(r, n, i, o)),
    (r.min = (n, i) => r.check(H(n, i))),
    (r.max = (n, i) => r.check(X(n, i))));
  let t = r._zod.bag;
  ((r.minDate = t.minimum ? new Date(t.minimum) : null),
    (r.maxDate = t.maximum ? new Date(t.maximum) : null));
});
function ll(r) {
  return sc(Gt, r);
}
var oo = y("ZodArray", (r, e) => {
  (Js.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => $c(r, t, n, i)),
    (r.element = e.element),
    (r.min = (t, n) => r.check(fe(t, n))),
    (r.nonempty = (t) => r.check(fe(1, t))),
    (r.max = (t, n) => r.check(Le(t, n))),
    (r.length = (t, n) => r.check(qe(t, n))),
    (r.unwrap = () => r.element));
});
function Wt(r, e) {
  return dc(oo, r, e);
}
function hl(r) {
  let e = r._zod.def.shape;
  return en(Object.keys(e));
}
var Jt = y("ZodObject", (r, e) => {
  (Ys.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Uc(r, t, n, i)),
    v.defineLazy(r, "shape", () => e.shape),
    (r.keyof = () => en(Object.keys(r._zod.def.shape))),
    (r.catchall = (t) => r.clone({ ...r._zod.def, catchall: t })),
    (r.passthrough = () => r.clone({ ...r._zod.def, catchall: Ee() })),
    (r.loose = () => r.clone({ ...r._zod.def, catchall: Ee() })),
    (r.strict = () => r.clone({ ...r._zod.def, catchall: Xr() })),
    (r.strip = () => r.clone({ ...r._zod.def, catchall: void 0 })),
    (r.extend = (t) => v.extend(r, t)),
    (r.safeExtend = (t) => v.safeExtend(r, t)),
    (r.merge = (t) => v.merge(r, t)),
    (r.pick = (t) => v.pick(r, t)),
    (r.omit = (t) => v.omit(r, t)),
    (r.partial = (...t) => v.partial(rn, r, t[0])),
    (r.required = (...t) => v.required(nn, r, t[0])));
});
function fl(r, e) {
  let t = { type: "object", shape: r ?? {}, ...v.normalizeParams(e) };
  return new Jt(t);
}
function pl(r, e) {
  return new Jt({ type: "object", shape: r, catchall: Xr(), ...v.normalizeParams(e) });
}
function ml(r, e) {
  return new Jt({ type: "object", shape: r, catchall: Ee(), ...v.normalizeParams(e) });
}
var Yt = y("ZodUnion", (r, e) => {
  (Xs.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Kn(r, t, n, i)),
    (r.options = e.options));
});
function Qr(r, e) {
  return new Yt({ type: "union", options: r, ...v.normalizeParams(e) });
}
var so = y("ZodXor", (r, e) => {
  (Yt.init(r, e),
    Qs.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Kn(r, t, n, i)),
    (r.options = e.options));
});
function yl(r, e) {
  return new so({ type: "union", options: r, inclusive: !1, ...v.normalizeParams(e) });
}
var ao = y("ZodDiscriminatedUnion", (r, e) => {
  (Yt.init(r, e), ea.init(r, e));
});
function gl(r, e, t) {
  return new ao({ type: "union", options: e, discriminator: r, ...v.normalizeParams(t) });
}
var co = y("ZodIntersection", (r, e) => {
  (ta.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => Fc(r, t, n, i)));
});
function uo(r, e) {
  return new co({ type: "intersection", left: r, right: e });
}
var lo = y("ZodTuple", (r, e) => {
  (ra.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Hc(r, t, n, i)),
    (r.rest = (t) => r.clone({ ...r._zod.def, rest: t })));
});
function ho(r, e, t) {
  let n = e instanceof hn,
    i = n ? t : e,
    o = n ? e : null;
  return new lo({ type: "tuple", items: r, rest: o, ...v.normalizeParams(i) });
}
var Xt = y("ZodRecord", (r, e) => {
  (na.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Vc(r, t, n, i)),
    (r.keyType = e.keyType),
    (r.valueType = e.valueType));
});
function fo(r, e, t) {
  return new Xt({ type: "record", keyType: r, valueType: e, ...v.normalizeParams(t) });
}
function bl(r, e, t) {
  let n = ot(r);
  return (
    (n._zod.values = void 0),
    new Xt({ type: "record", keyType: n, valueType: e, ...v.normalizeParams(t) })
  );
}
function Il(r, e, t) {
  return new Xt({
    type: "record",
    keyType: r,
    valueType: e,
    mode: "loose",
    ...v.normalizeParams(t),
  });
}
var po = y("ZodMap", (r, e) => {
  (ia.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => qc(r, t, n, i)),
    (r.keyType = e.keyType),
    (r.valueType = e.valueType),
    (r.min = (...t) => r.check(ie(...t))),
    (r.nonempty = (t) => r.check(ie(1, t))),
    (r.max = (...t) => r.check(Ne(...t))),
    (r.size = (...t) => r.check(Pe(...t))));
});
function wl(r, e, t) {
  return new po({ type: "map", keyType: r, valueType: e, ...v.normalizeParams(t) });
}
var mo = y("ZodSet", (r, e) => {
  (oa.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Kc(r, t, n, i)),
    (r.min = (...t) => r.check(ie(...t))),
    (r.nonempty = (t) => r.check(ie(1, t))),
    (r.max = (...t) => r.check(Ne(...t))),
    (r.size = (...t) => r.check(Pe(...t))));
});
function Sl(r, e) {
  return new mo({ type: "set", valueType: r, ...v.normalizeParams(e) });
}
var Xe = y("ZodEnum", (r, e) => {
  (sa.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (n, i, o) => Tc(r, n, i, o)),
    (r.enum = e.entries),
    (r.options = Object.values(e.entries)));
  let t = new Set(Object.keys(e.entries));
  ((r.extract = (n, i) => {
    let o = {};
    for (let s of n)
      if (t.has(s)) o[s] = e.entries[s];
      else throw new Error(`Key ${s} not found in enum`);
    return new Xe({ ...e, checks: [], ...v.normalizeParams(i), entries: o });
  }),
    (r.exclude = (n, i) => {
      let o = { ...e.entries };
      for (let s of n)
        if (t.has(s)) delete o[s];
        else throw new Error(`Key ${s} not found in enum`);
      return new Xe({ ...e, checks: [], ...v.normalizeParams(i), entries: o });
    }));
});
function en(r, e) {
  let t = Array.isArray(r) ? Object.fromEntries(r.map((n) => [n, n])) : r;
  return new Xe({ type: "enum", entries: t, ...v.normalizeParams(e) });
}
function vl(r, e) {
  return new Xe({ type: "enum", entries: r, ...v.normalizeParams(e) });
}
var yo = y("ZodLiteral", (r, e) => {
  (aa.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Mc(r, t, n, i)),
    (r.values = new Set(e.values)),
    Object.defineProperty(r, "value", {
      get() {
        if (e.values.length > 1)
          throw new Error(
            "This schema contains multiple valid literal values. Use `.values` instead."
          );
        return e.values[0];
      },
    }));
});
function xl(r, e) {
  return new yo({ type: "literal", values: Array.isArray(r) ? r : [r], ...v.normalizeParams(e) });
}
var go = y("ZodFile", (r, e) => {
  (ca.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Ec(r, t, n, i)),
    (r.min = (t, n) => r.check(ie(t, n))),
    (r.max = (t, n) => r.check(Ne(t, n))),
    (r.mime = (t, n) => r.check(ht(Array.isArray(t) ? t : [t], n))));
});
function Cl(r) {
  return uc(go, r);
}
var bo = y("ZodTransform", (r, e) => {
  (da.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Lc(r, t, n, i)),
    (r._zod.parse = (t, n) => {
      if (n.direction === "backward") throw new Go(r.constructor.name);
      t.addIssue = (o) => {
        if (typeof o == "string") t.issues.push(v.issue(o, t.value, e));
        else {
          let s = o;
          (s.fatal && (s.continue = !1),
            s.code ?? (s.code = "custom"),
            s.input ?? (s.input = t.value),
            s.inst ?? (s.inst = r),
            t.issues.push(v.issue(s)));
        }
      };
      let i = e.transform(t.value, t);
      return i instanceof Promise ? i.then((o) => ((t.value = o), t)) : ((t.value = i), t);
    }));
});
function tn(r) {
  return new bo({ type: "transform", transform: r });
}
var rn = y("ZodOptional", (r, e) => {
  (ua.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => $n(r, t, n, i)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Ht(r) {
  return new rn({ type: "optional", innerType: r });
}
var Io = y("ZodExactOptional", (r, e) => {
  (la.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => $n(r, t, n, i)),
    (r.unwrap = () => r._zod.def.innerType));
});
function wo(r) {
  return new Io({ type: "optional", innerType: r });
}
var So = y("ZodNullable", (r, e) => {
  (ha.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => jc(r, t, n, i)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Vt(r) {
  return new So({ type: "nullable", innerType: r });
}
function Nl(r) {
  return Ht(Vt(r));
}
var vo = y("ZodDefault", (r, e) => {
  (fa.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Gc(r, t, n, i)),
    (r.unwrap = () => r._zod.def.innerType),
    (r.removeDefault = r.unwrap));
});
function xo(r, e) {
  return new vo({
    type: "default",
    innerType: r,
    get defaultValue() {
      return typeof e == "function" ? e() : v.shallowClone(e);
    },
  });
}
var Co = y("ZodPrefault", (r, e) => {
  (pa.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Wc(r, t, n, i)),
    (r.unwrap = () => r._zod.def.innerType));
});
function No(r, e) {
  return new Co({
    type: "prefault",
    innerType: r,
    get defaultValue() {
      return typeof e == "function" ? e() : v.shallowClone(e);
    },
  });
}
var nn = y("ZodNonOptional", (r, e) => {
  (ma.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Zc(r, t, n, i)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Ro(r, e) {
  return new nn({ type: "nonoptional", innerType: r, ...v.normalizeParams(e) });
}
var Oo = y("ZodSuccess", (r, e) => {
  (ya.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Bc(r, t, n, i)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Rl(r) {
  return new Oo({ type: "success", innerType: r });
}
var Ao = y("ZodCatch", (r, e) => {
  (ga.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Jc(r, t, n, i)),
    (r.unwrap = () => r._zod.def.innerType),
    (r.removeCatch = r.unwrap));
});
function ko(r, e) {
  return new Ao({ type: "catch", innerType: r, catchValue: typeof e == "function" ? e : () => e });
}
var To = y("ZodNaN", (r, e) => {
  (ba.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => _c(r, t, n, i)));
});
function Ol(r) {
  return cc(To, r);
}
var on = y("ZodPipe", (r, e) => {
  (Ia.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Yc(r, t, n, i)),
    (r.in = e.in),
    (r.out = e.out));
});
function jt(r, e) {
  return new on({ type: "pipe", in: r, out: e });
}
var sn = y("ZodCodec", (r, e) => {
  (on.init(r, e), wa.init(r, e));
});
function Al(r, e, t) {
  return new sn({ type: "pipe", in: r, out: e, transform: t.decode, reverseTransform: t.encode });
}
var Mo = y("ZodReadonly", (r, e) => {
  (Sa.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Xc(r, t, n, i)),
    (r.unwrap = () => r._zod.def.innerType));
});
function _o(r) {
  return new Mo({ type: "readonly", innerType: r });
}
var Do = y("ZodTemplateLiteral", (r, e) => {
  (va.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => Dc(r, t, n, i)));
});
function kl(r, e) {
  return new Do({ type: "template_literal", parts: r, ...v.normalizeParams(e) });
}
var Eo = y("ZodLazy", (r, e) => {
  (Na.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => ed(r, t, n, i)),
    (r.unwrap = () => r._zod.def.getter()));
});
function Bo(r) {
  return new Eo({ type: "lazy", getter: r });
}
var zo = y("ZodPromise", (r, e) => {
  (Ca.init(r, e),
    S.init(r, e),
    (r._zod.processJSONSchema = (t, n, i) => Qc(r, t, n, i)),
    (r.unwrap = () => r._zod.def.innerType));
});
function Tl(r) {
  return new zo({ type: "promise", innerType: r });
}
var Po = y("ZodFunction", (r, e) => {
  (xa.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => Pc(r, t, n, i)));
});
function Ml(r) {
  return new Po({
    type: "function",
    input: Array.isArray(r?.input) ? ho(r?.input) : (r?.input ?? Wt(Ee())),
    output: r?.output ?? Ee(),
  });
}
var Qt = y("ZodCustom", (r, e) => {
  (Ra.init(r, e), S.init(r, e), (r._zod.processJSONSchema = (t, n, i) => zc(r, t, n, i)));
});
function _l(r) {
  let e = new us({ check: "custom" });
  return ((e._zod.check = r), e);
}
function Dl(r, e) {
  return lc(Qt, r ?? (() => !0), e);
}
function Lo(r, e = {}) {
  return hc(Qt, r, e);
}
function qo(r) {
  return fc(r);
}
var El = pc,
  Bl = mc;
function zl(r, e = {}) {
  let t = new Qt({
    type: "custom",
    check: "custom",
    fn: (n) => n instanceof r,
    abort: !0,
    ...v.normalizeParams(e),
  });
  return (
    (t._zod.bag.Class = r),
    (t._zod.check = (n) => {
      n.value instanceof r ||
        n.issues.push({
          code: "invalid_type",
          expected: r.name,
          input: n.value,
          inst: t,
          path: [...(t._zod.def.path ?? [])],
        });
    }),
    t
  );
}
var Pl = (...r) => yc({ Codec: sn, Boolean: rt, String: Qe }, ...r);
function Ll(r) {
  let e = Bo(() => Qr([_r(r), Wi(), Ji(), eo(), Wt(e), fo(_r(), e)]));
  return e;
}
function ql(r, e) {
  return jt(tn(r), e);
}
var sp = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom",
};
function ap(r) {
  ue({ customError: r });
}
function cp() {
  return ue().customError;
}
var Ko;
Ko || (Ko = {});
var g = { ...Ut, ...Or, iso: Ye },
  dp = new Set([
    "$schema",
    "$ref",
    "$defs",
    "definitions",
    "$id",
    "id",
    "$comment",
    "$anchor",
    "$vocabulary",
    "$dynamicRef",
    "$dynamicAnchor",
    "type",
    "enum",
    "const",
    "anyOf",
    "oneOf",
    "allOf",
    "not",
    "properties",
    "required",
    "additionalProperties",
    "patternProperties",
    "propertyNames",
    "minProperties",
    "maxProperties",
    "items",
    "prefixItems",
    "additionalItems",
    "minItems",
    "maxItems",
    "uniqueItems",
    "contains",
    "minContains",
    "maxContains",
    "minLength",
    "maxLength",
    "pattern",
    "format",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf",
    "description",
    "default",
    "contentEncoding",
    "contentMediaType",
    "contentSchema",
    "unevaluatedItems",
    "unevaluatedProperties",
    "if",
    "then",
    "else",
    "dependentSchemas",
    "dependentRequired",
    "nullable",
    "readOnly",
  ]);
function up(r, e) {
  let t = r.$schema;
  return t === "https://json-schema.org/draft/2020-12/schema"
    ? "draft-2020-12"
    : t === "http://json-schema.org/draft-07/schema#"
      ? "draft-7"
      : t === "http://json-schema.org/draft-04/schema#"
        ? "draft-4"
        : (e ?? "draft-2020-12");
}
function lp(r, e) {
  if (!r.startsWith("#"))
    throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  let t = r.slice(1).split("/").filter(Boolean);
  if (t.length === 0) return e.rootSchema;
  let n = e.version === "draft-2020-12" ? "$defs" : "definitions";
  if (t[0] === n) {
    let i = t[1];
    if (!i || !e.defs[i]) throw new Error(`Reference not found: ${r}`);
    return e.defs[i];
  }
  throw new Error(`Reference not found: ${r}`);
}
function Kl(r, e) {
  if (r.not !== void 0) {
    if (typeof r.not == "object" && Object.keys(r.not).length === 0) return g.never();
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (r.unevaluatedItems !== void 0) throw new Error("unevaluatedItems is not supported");
  if (r.unevaluatedProperties !== void 0) throw new Error("unevaluatedProperties is not supported");
  if (r.if !== void 0 || r.then !== void 0 || r.else !== void 0)
    throw new Error("Conditional schemas (if/then/else) are not supported");
  if (r.dependentSchemas !== void 0 || r.dependentRequired !== void 0)
    throw new Error("dependentSchemas and dependentRequired are not supported");
  if (r.$ref) {
    let i = r.$ref;
    if (e.refs.has(i)) return e.refs.get(i);
    if (e.processing.has(i))
      return g.lazy(() => {
        if (!e.refs.has(i)) throw new Error(`Circular reference not resolved: ${i}`);
        return e.refs.get(i);
      });
    e.processing.add(i);
    let o = lp(i, e),
      s = q(o, e);
    return (e.refs.set(i, s), e.processing.delete(i), s);
  }
  if (r.enum !== void 0) {
    let i = r.enum;
    if (e.version === "openapi-3.0" && r.nullable === !0 && i.length === 1 && i[0] === null)
      return g.null();
    if (i.length === 0) return g.never();
    if (i.length === 1) return g.literal(i[0]);
    if (i.every((s) => typeof s == "string")) return g.enum(i);
    let o = i.map((s) => g.literal(s));
    return o.length < 2 ? o[0] : g.union([o[0], o[1], ...o.slice(2)]);
  }
  if (r.const !== void 0) return g.literal(r.const);
  let t = r.type;
  if (Array.isArray(t)) {
    let i = t.map((o) => {
      let s = { ...r, type: o };
      return Kl(s, e);
    });
    return i.length === 0 ? g.never() : i.length === 1 ? i[0] : g.union(i);
  }
  if (!t) return g.any();
  let n;
  switch (t) {
    case "string": {
      let i = g.string();
      if (r.format) {
        let o = r.format;
        o === "email"
          ? (i = i.check(g.email()))
          : o === "uri" || o === "uri-reference"
            ? (i = i.check(g.url()))
            : o === "uuid" || o === "guid"
              ? (i = i.check(g.uuid()))
              : o === "date-time"
                ? (i = i.check(g.iso.datetime()))
                : o === "date"
                  ? (i = i.check(g.iso.date()))
                  : o === "time"
                    ? (i = i.check(g.iso.time()))
                    : o === "duration"
                      ? (i = i.check(g.iso.duration()))
                      : o === "ipv4"
                        ? (i = i.check(g.ipv4()))
                        : o === "ipv6"
                          ? (i = i.check(g.ipv6()))
                          : o === "mac"
                            ? (i = i.check(g.mac()))
                            : o === "cidr"
                              ? (i = i.check(g.cidrv4()))
                              : o === "cidr-v6"
                                ? (i = i.check(g.cidrv6()))
                                : o === "base64"
                                  ? (i = i.check(g.base64()))
                                  : o === "base64url"
                                    ? (i = i.check(g.base64url()))
                                    : o === "e164"
                                      ? (i = i.check(g.e164()))
                                      : o === "jwt"
                                        ? (i = i.check(g.jwt()))
                                        : o === "emoji"
                                          ? (i = i.check(g.emoji()))
                                          : o === "nanoid"
                                            ? (i = i.check(g.nanoid()))
                                            : o === "cuid"
                                              ? (i = i.check(g.cuid()))
                                              : o === "cuid2"
                                                ? (i = i.check(g.cuid2()))
                                                : o === "ulid"
                                                  ? (i = i.check(g.ulid()))
                                                  : o === "xid"
                                                    ? (i = i.check(g.xid()))
                                                    : o === "ksuid" && (i = i.check(g.ksuid()));
      }
      (typeof r.minLength == "number" && (i = i.min(r.minLength)),
        typeof r.maxLength == "number" && (i = i.max(r.maxLength)),
        r.pattern && (i = i.regex(new RegExp(r.pattern))),
        (n = i));
      break;
    }
    case "number":
    case "integer": {
      let i = t === "integer" ? g.number().int() : g.number();
      (typeof r.minimum == "number" && (i = i.min(r.minimum)),
        typeof r.maximum == "number" && (i = i.max(r.maximum)),
        typeof r.exclusiveMinimum == "number"
          ? (i = i.gt(r.exclusiveMinimum))
          : r.exclusiveMinimum === !0 && typeof r.minimum == "number" && (i = i.gt(r.minimum)),
        typeof r.exclusiveMaximum == "number"
          ? (i = i.lt(r.exclusiveMaximum))
          : r.exclusiveMaximum === !0 && typeof r.maximum == "number" && (i = i.lt(r.maximum)),
        typeof r.multipleOf == "number" && (i = i.multipleOf(r.multipleOf)),
        (n = i));
      break;
    }
    case "boolean": {
      n = g.boolean();
      break;
    }
    case "null": {
      n = g.null();
      break;
    }
    case "object": {
      let i = {},
        o = r.properties || {},
        s = new Set(r.required || []);
      for (let [c, d] of Object.entries(o)) {
        let u = q(d, e);
        i[c] = s.has(c) ? u : u.optional();
      }
      if (r.propertyNames) {
        let c = q(r.propertyNames, e),
          d =
            r.additionalProperties && typeof r.additionalProperties == "object"
              ? q(r.additionalProperties, e)
              : g.any();
        if (Object.keys(i).length === 0) {
          n = g.record(c, d);
          break;
        }
        let u = g.object(i).passthrough(),
          h = g.looseRecord(c, d);
        n = g.intersection(u, h);
        break;
      }
      if (r.patternProperties) {
        let c = r.patternProperties,
          d = Object.keys(c),
          u = [];
        for (let f of d) {
          let p = q(c[f], e),
            b = g.string().regex(new RegExp(f));
          u.push(g.looseRecord(b, p));
        }
        let h = [];
        if (
          (Object.keys(i).length > 0 && h.push(g.object(i).passthrough()),
          h.push(...u),
          h.length === 0)
        )
          n = g.object({}).passthrough();
        else if (h.length === 1) n = h[0];
        else {
          let f = g.intersection(h[0], h[1]);
          for (let p = 2; p < h.length; p++) f = g.intersection(f, h[p]);
          n = f;
        }
        break;
      }
      let a = g.object(i);
      r.additionalProperties === !1
        ? (n = a.strict())
        : typeof r.additionalProperties == "object"
          ? (n = a.catchall(q(r.additionalProperties, e)))
          : (n = a.passthrough());
      break;
    }
    case "array": {
      let i = r.prefixItems,
        o = r.items;
      if (i && Array.isArray(i)) {
        let s = i.map((c) => q(c, e)),
          a = o && typeof o == "object" && !Array.isArray(o) ? q(o, e) : void 0;
        (a ? (n = g.tuple(s).rest(a)) : (n = g.tuple(s)),
          typeof r.minItems == "number" && (n = n.check(g.minLength(r.minItems))),
          typeof r.maxItems == "number" && (n = n.check(g.maxLength(r.maxItems))));
      } else if (Array.isArray(o)) {
        let s = o.map((c) => q(c, e)),
          a =
            r.additionalItems && typeof r.additionalItems == "object"
              ? q(r.additionalItems, e)
              : void 0;
        (a ? (n = g.tuple(s).rest(a)) : (n = g.tuple(s)),
          typeof r.minItems == "number" && (n = n.check(g.minLength(r.minItems))),
          typeof r.maxItems == "number" && (n = n.check(g.maxLength(r.maxItems))));
      } else if (o !== void 0) {
        let s = q(o, e),
          a = g.array(s);
        (typeof r.minItems == "number" && (a = a.min(r.minItems)),
          typeof r.maxItems == "number" && (a = a.max(r.maxItems)),
          (n = a));
      } else n = g.array(g.any());
      break;
    }
    default:
      throw new Error(`Unsupported type: ${t}`);
  }
  return (
    r.description && (n = n.describe(r.description)),
    r.default !== void 0 && (n = n.default(r.default)),
    n
  );
}
function q(r, e) {
  if (typeof r == "boolean") return r ? g.any() : g.never();
  let t = Kl(r, e),
    n = r.type || r.enum !== void 0 || r.const !== void 0;
  if (r.anyOf && Array.isArray(r.anyOf)) {
    let a = r.anyOf.map((d) => q(d, e)),
      c = g.union(a);
    t = n ? g.intersection(t, c) : c;
  }
  if (r.oneOf && Array.isArray(r.oneOf)) {
    let a = r.oneOf.map((d) => q(d, e)),
      c = g.xor(a);
    t = n ? g.intersection(t, c) : c;
  }
  if (r.allOf && Array.isArray(r.allOf))
    if (r.allOf.length === 0) t = n ? t : g.any();
    else {
      let a = n ? t : q(r.allOf[0], e),
        c = n ? 0 : 1;
      for (let d = c; d < r.allOf.length; d++) a = g.intersection(a, q(r.allOf[d], e));
      t = a;
    }
  (r.nullable === !0 && e.version === "openapi-3.0" && (t = g.nullable(t)),
    r.readOnly === !0 && (t = g.readonly(t)));
  let i = {},
    o = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (let a of o) a in r && (i[a] = r[a]);
  let s = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (let a of s) a in r && (i[a] = r[a]);
  for (let a of Object.keys(r)) dp.has(a) || (i[a] = r[a]);
  return (Object.keys(i).length > 0 && e.registry.add(t, i), t);
}
function $l(r, e) {
  if (typeof r == "boolean") return r ? g.any() : g.never();
  let t = up(r, e?.defaultTarget),
    n = r.$defs || r.definitions || {},
    i = {
      version: t,
      defs: n,
      refs: new Map(),
      processing: new Set(),
      rootSchema: r,
      registry: e?.registry ?? ne,
    };
  return q(r, i);
}
var $o = {};
it($o, { bigint: () => mp, boolean: () => pp, date: () => yp, number: () => fp, string: () => hp });
function hp(r) {
  return Da(Qe, r);
}
function fp(r) {
  return $a(tt, r);
}
function pp(r) {
  return Ga(rt, r);
}
function mp(r) {
  return Ja(nt, r);
}
function yp(r) {
  return ac(Gt, r);
}
ue(Oa());
var Ul = Uo;
var dS = Ul;
export {
  m as a,
  St as b,
  w as c,
  O as d,
  k as e,
  N as f,
  A as g,
  R as h,
  be as i,
  Y as j,
  Dt as k,
  Q as l,
  wi as m,
  Gf as n,
  qt as o,
  Kt as p,
  Ie as q,
  Mi as r,
  $t as s,
  xu as t,
  pi as u,
  Rf as v,
  np as w,
  Bi as x,
  Uo as y,
  dS as z,
};
//# sourceMappingURL=chunk-FNUTCKMA.mjs.map
