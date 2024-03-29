/**
 @license
 Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/**
 @license
 Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/*
 *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
*****************************************************************************/
(function (g, w) {
    "object" === typeof exports && "undefined" !== typeof module ? w(exports) : "function" === typeof define && define.amd ? define("rxjs", ["exports"], w) : w(g.rxjs = {})
})(this, function (g) {
    function w(b, a) {
        function c() {
            this.constructor = b
        }

        if ("function" !== typeof a && null !== a) throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
        Ra(b, a);
        b.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype, new c)
    }

    function Xd(b, a) {
        var c = {}, d;
        for (d in b) Object.prototype.hasOwnProperty.call(b,
            d) && 0 > a.indexOf(d) && (c[d] = b[d]);
        if (null != b && "function" === typeof Object.getOwnPropertySymbols) {
            var e = 0;
            for (d = Object.getOwnPropertySymbols(b); e < d.length; e++) 0 > a.indexOf(d[e]) && Object.prototype.propertyIsEnumerable.call(b, d[e]) && (c[d[e]] = b[d[e]])
        }
        return c
    }

    function Yd(b, a, c, d) {
        function e(a) {
            return a instanceof c ? a : new c(function (b) {
                b(a)
            })
        }

        return new (c || (c = Promise))(function (c, h) {
            function f(a) {
                try {
                    v(d.next(a))
                } catch (y) {
                    h(y)
                }
            }

            function k(a) {
                try {
                    v(d["throw"](a))
                } catch (y) {
                    h(y)
                }
            }

            function v(a) {
                a.done ? c(a.value) :
                    e(a.value).then(f, k)
            }

            v((d = d.apply(b, a || [])).next())
        })
    }

    function Sa(b, a) {
        function c(a) {
            return function (b) {
                return d([a, b])
            }
        }

        function d(c) {
            if (f) throw new TypeError("Generator is already executing.");
            for (; e;) try {
                if (f = 1, h && (l = c[0] & 2 ? h["return"] : c[0] ? h["throw"] || ((l = h["return"]) && l.call(h), 0) : h.next) && !(l = l.call(h, c[1])).done) return l;
                if (h = 0, l) c = [c[0] & 2, l.value];
                switch (c[0]) {
                    case 0:
                    case 1:
                        l = c;
                        break;
                    case 4:
                        return e.label++, {value: c[1], done: !1};
                    case 5:
                        e.label++;
                        h = c[1];
                        c = [0];
                        continue;
                    case 7:
                        c = e.ops.pop();
                        e.trys.pop();
                        continue;
                    default:
                        if (!(l = e.trys, l = 0 < l.length && l[l.length - 1]) && (6 === c[0] || 2 === c[0])) {
                            e = 0;
                            continue
                        }
                        if (3 === c[0] && (!l || c[1] > l[0] && c[1] < l[3])) e.label = c[1]; else if (6 === c[0] && e.label < l[1]) e.label = l[1], l = c; else if (l && e.label < l[2]) e.label = l[2], e.ops.push(c); else {
                            l[2] && e.ops.pop();
                            e.trys.pop();
                            continue
                        }
                }
                c = a.call(b, e)
            } catch (r) {
                c = [6, r], h = 0
            } finally {
                f = l = 0
            }
            if (c[0] & 5) throw c[1];
            return {value: c[0] ? c[1] : void 0, done: !0}
        }

        var e = {
            label: 0, sent: function () {
                if (l[0] & 1) throw l[1];
                return l[1]
            }, trys: [], ops: []
        }, f, h, l, k;
        return k =
            {
                next: c(0),
                "throw": c(1),
                "return": c(2)
            }, "function" === typeof Symbol && (k[Symbol.iterator] = function () {
            return this
        }), k
    }

    function F(b) {
        var a = "function" === typeof Symbol && Symbol.iterator, c = a && b[a], d = 0;
        if (c) return c.call(b);
        if (b && "number" === typeof b.length) return {
            next: function () {
                b && d >= b.length && (b = void 0);
                return {value: b && b[d++], done: !b}
            }
        };
        throw new TypeError(a ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function z(b, a) {
        var c = "function" === typeof Symbol && b[Symbol.iterator];
        if (!c) return b;
        b =
            c.call(b);
        var d, e = [], f;
        try {
            for (; (void 0 === a || 0 < a--) && !(d = b.next()).done;) e.push(d.value)
        } catch (h) {
            f = {error: h}
        } finally {
            try {
                d && !d.done && (c = b["return"]) && c.call(b)
            } finally {
                if (f) throw f.error;
            }
        }
        return e
    }

    function A(b, a, c) {
        if (c || 2 === arguments.length) for (var d = 0, e = a.length, f; d < e; d++) !f && d in a || (f || (f = Array.prototype.slice.call(a, 0, d)), f[d] = a[d]);
        return b.concat(f || Array.prototype.slice.call(a))
    }

    function da(b) {
        return this instanceof da ? (this.v = b, this) : new da(b)
    }

    function Zd(b, a, c) {
        function d(a) {
            k[a] && (v[a] =
                function (b) {
                    return new Promise(function (c, d) {
                        1 < g.push([a, b, c, d]) || e(a, b)
                    })
                })
        }

        function e(a, b) {
            try {
                var c = k[a](b);
                c.value instanceof da ? Promise.resolve(c.value.v).then(f, h) : l(g[0][2], c)
            } catch (t) {
                l(g[0][3], t)
            }
        }

        function f(a) {
            e("next", a)
        }

        function h(a) {
            e("throw", a)
        }

        function l(a, b) {
            (a(b), g.shift(), g.length) && e(g[0][0], g[0][1])
        }

        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var k = c.apply(b, a || []), v, g = [];
        return v = {}, d("next"), d("throw"), d("return"), v[Symbol.asyncIterator] =
            function () {
                return this
            }, v
    }

    function $d(b) {
        function a(a) {
            e[a] = b[a] && function (d) {
                return new Promise(function (e, f) {
                    d = b[a](d);
                    c(e, f, d.done, d.value)
                })
            }
        }

        function c(a, b, c, d) {
            Promise.resolve(d).then(function (b) {
                a({value: b, done: c})
            }, b)
        }

        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var d = b[Symbol.asyncIterator], e;
        return d ? d.call(b) : (b = "function" === typeof F ? F(b) : b[Symbol.iterator](), e = {}, a("next"), a("throw"), a("return"), e[Symbol.asyncIterator] = function () {
            return this
        }, e)
    }

    function p(b) {
        return "function" === typeof b
    }

    function S(b) {
        b = b(function (a) {
            Error.call(a);
            a.stack = Error().stack
        });
        b.prototype = Object.create(Error.prototype);
        return b.prototype.constructor = b
    }

    function P(b, a) {
        b && (a = b.indexOf(a), 0 <= a && b.splice(a, 1))
    }

    function Gb(b) {
        return b instanceof D || b && "closed" in b && p(b.remove) && p(b.add) && p(b.unsubscribe)
    }

    function Hb(b) {
        ea.setTimeout(function () {
            var a = T.onUnhandledError;
            if (a) a(b); else throw b;
        })
    }

    function B() {
    }

    function K(b, a, c) {
        return {kind: b, value: a, error: c}
    }

    function Ca(b) {
        if (T.useDeprecatedSynchronousErrorHandling) {
            var a =
                !W;
            a && (W = {errorThrown: !1, error: null});
            b();
            if (a && (a = W, b = a.errorThrown, a = a.error, W = null, b)) throw a;
        } else b()
    }

    function Ta(b, a) {
        return function () {
            for (var a = [], d = 0; d < arguments.length; d++) a[d] = arguments[d];
            try {
                b.apply(void 0, A([], z(a)))
            } catch (e) {
                T.useDeprecatedSynchronousErrorHandling ? T.useDeprecatedSynchronousErrorHandling && W && (W.errorThrown = !0, W.error = e) : Hb(e)
            }
        }
    }

    function Ib(b) {
        throw b;
    }

    function Ua(b, a) {
        var c = T.onStoppedNotification;
        c && ea.setTimeout(function () {
            return c(b, a)
        })
    }

    function E(b) {
        return b
    }

    function Va() {
        for (var b =
            [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return Jb(b)
    }

    function Jb(b) {
        return 0 === b.length ? E : 1 === b.length ? b[0] : function (a) {
            return b.reduce(function (a, b) {
                return b(a)
            }, a)
        }
    }

    function Kb(b) {
        var a;
        return null !== (a = null !== b && void 0 !== b ? b : T.Promise) && void 0 !== a ? a : Promise
    }

    function ae(b) {
        var a;
        (a = b && b instanceof ma) || (a = b && p(b.next) && p(b.error) && p(b.complete) && Gb(b));
        return a
    }

    function n(b) {
        return function (a) {
            if (p(null === a || void 0 === a ? void 0 : a.lift)) return a.lift(function (a) {
                try {
                    return b(a, this)
                } catch (d) {
                    this.error(d)
                }
            });
            throw new TypeError("Unable to lift unknown Observable type");
        }
    }

    function Wa() {
        return n(function (b, a) {
            var c = null;
            b._refCount++;
            var d = new m(a, void 0, void 0, void 0, function () {
                if (!b || 0 >= b._refCount || 0 < --b._refCount) c = null; else {
                    var d = b._connection, f = c;
                    c = null;
                    !d || f && d !== f || d.unsubscribe();
                    a.unsubscribe()
                }
            });
            b.subscribe(d);
            d.closed || (c = b.connect())
        })
    }

    function Lb(b) {
        var a = U.schedule;
        return new q(function (c) {
            var d = new D, e = b || Da, f = e.now(), h = function (l) {
                var k = e.now();
                c.next({timestamp: b ? k : l, elapsed: k - f});
                c.closed ||
                d.add(a(h))
            };
            d.add(a(h));
            return d
        })
    }

    function Mb(b) {
        return b in Xa ? (delete Xa[b], !0) : !1
    }

    function be(b) {
        return new q(function (a) {
            return b.schedule(function () {
                return a.complete()
            })
        })
    }

    function Ea(b) {
        return b && p(b.schedule)
    }

    function na(b) {
        return p(b[b.length - 1]) ? b.pop() : void 0
    }

    function Q(b) {
        return Ea(b[b.length - 1]) ? b.pop() : void 0
    }

    function Nb(b) {
        return Symbol.asyncIterator && p(null === b || void 0 === b ? void 0 : b[Symbol.asyncIterator])
    }

    function Ob(b) {
        return new TypeError("You provided " + (null !== b && "object" === typeof b ?
            "an invalid object" : "'" + b + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
    }

    function Pb(b) {
        return p(null === b || void 0 === b ? void 0 : b[Ya])
    }

    function Qb(b) {
        return Zd(this, arguments, function () {
            var a, c, d, e;
            return Sa(this, function (f) {
                switch (f.label) {
                    case 0:
                        a = b.getReader(), f.label = 1;
                    case 1:
                        f.trys.push([1, , 9, 10]), f.label = 2;
                    case 2:
                        return [4, da(a.read())];
                    case 3:
                        return c = f.sent(), d = c.value, (e = c.done) ? [4, da(void 0)] : [3, 5];
                    case 4:
                        return [2,
                            f.sent()];
                    case 5:
                        return [4, da(d)];
                    case 6:
                        return [4, f.sent()];
                    case 7:
                        return f.sent(), [3, 2];
                    case 8:
                        return [3, 10];
                    case 9:
                        return a.releaseLock(), [7];
                    case 10:
                        return [2]
                }
            })
        })
    }

    function u(b) {
        if (b instanceof q) return b;
        if (null != b) {
            if (p(b[oa])) return ce(b);
            if (Za(b)) return de(b);
            if (p(null === b || void 0 === b ? void 0 : b.then)) return ee(b);
            if (Nb(b)) return Rb(b);
            if (Pb(b)) return fe(b);
            if (p(null === b || void 0 === b ? void 0 : b.getReader)) return Rb(Qb(b))
        }
        throw Ob(b);
    }

    function ce(b) {
        return new q(function (a) {
            var c = b[oa]();
            if (p(c.subscribe)) return c.subscribe(a);
            throw new TypeError("Provided object does not correctly implement Symbol.observable");
        })
    }

    function de(b) {
        return new q(function (a) {
            for (var c = 0; c < b.length && !a.closed; c++) a.next(b[c]);
            a.complete()
        })
    }

    function ee(b) {
        return new q(function (a) {
            b.then(function (b) {
                a.closed || (a.next(b), a.complete())
            }, function (b) {
                return a.error(b)
            }).then(null, Hb)
        })
    }

    function fe(b) {
        return new q(function (a) {
            var c, d;
            try {
                for (var e = F(b), f = e.next(); !f.done; f = e.next()) if (a.next(f.value), a.closed) return
            } catch (h) {
                c = {error: h}
            } finally {
                try {
                    f &&
                    !f.done && (d = e.return) && d.call(e)
                } finally {
                    if (c) throw c.error;
                }
            }
            a.complete()
        })
    }

    function Rb(b) {
        return new q(function (a) {
            ge(b, a).catch(function (b) {
                return a.error(b)
            })
        })
    }

    function ge(b, a) {
        var c, d, e, f;
        return Yd(this, void 0, void 0, function () {
            var h, l;
            return Sa(this, function (k) {
                switch (k.label) {
                    case 0:
                        k.trys.push([0, 5, 6, 11]), c = $d(b), k.label = 1;
                    case 1:
                        return [4, c.next()];
                    case 2:
                        if (d = k.sent(), d.done) return [3, 4];
                        h = d.value;
                        a.next(h);
                        if (a.closed) return [2];
                        k.label = 3;
                    case 3:
                        return [3, 1];
                    case 4:
                        return [3, 11];
                    case 5:
                        return l =
                            k.sent(), e = {error: l}, [3, 11];
                    case 6:
                        return k.trys.push([6, , 9, 10]), d && !d.done && (f = c.return) ? [4, f.call(c)] : [3, 8];
                    case 7:
                        k.sent(), k.label = 8;
                    case 8:
                        return [3, 10];
                    case 9:
                        if (e) throw e.error;
                        return [7];
                    case 10:
                        return [7];
                    case 11:
                        return a.complete(), [2]
                }
            })
        })
    }

    function G(b, a, c, d, e) {
        void 0 === d && (d = 0);
        void 0 === e && (e = !1);
        a = a.schedule(function () {
            c();
            e ? b.add(this.schedule(null, d)) : this.unsubscribe()
        }, d);
        b.add(a);
        if (!e) return a
    }

    function pa(b, a) {
        void 0 === a && (a = 0);
        return n(function (c, d) {
            c.subscribe(new m(d, function (c) {
                return G(d,
                    b, function () {
                        return d.next(c)
                    }, a)
            }, function () {
                return G(d, b, function () {
                    return d.complete()
                }, a)
            }, function (c) {
                return G(d, b, function () {
                    return d.error(c)
                }, a)
            }))
        })
    }

    function qa(b, a) {
        void 0 === a && (a = 0);
        return n(function (c, d) {
            d.add(b.schedule(function () {
                return c.subscribe(d)
            }, a))
        })
    }

    function he(b, a) {
        return new q(function (c) {
            var d = 0;
            return a.schedule(function () {
                d === b.length ? c.complete() : (c.next(b[d++]), c.closed || this.schedule())
            })
        })
    }

    function Sb(b, a) {
        return new q(function (c) {
            var d;
            G(c, a, function () {
                d = b[Ya]();
                G(c,
                    a, function () {
                        var a, b, h;
                        try {
                            a = d.next(), b = a.value, h = a.done
                        } catch (l) {
                            c.error(l);
                            return
                        }
                        h ? c.complete() : c.next(b)
                    }, 0, !0)
            });
            return function () {
                return p(null === d || void 0 === d ? void 0 : d.return) && d.return()
            }
        })
    }

    function Tb(b, a) {
        if (!b) throw Error("Iterable cannot be null");
        return new q(function (c) {
            G(c, a, function () {
                var d = b[Symbol.asyncIterator]();
                G(c, a, function () {
                    d.next().then(function (a) {
                        a.done ? c.complete() : c.next(a.value)
                    })
                }, 0, !0)
            })
        })
    }

    function Ub(b, a) {
        if (null != b) {
            if (p(b[oa])) return u(b).pipe(qa(a), pa(a));
            if (Za(b)) return he(b,
                a);
            if (p(null === b || void 0 === b ? void 0 : b.then)) return u(b).pipe(qa(a), pa(a));
            if (Nb(b)) return Tb(b, a);
            if (Pb(b)) return Sb(b, a);
            if (p(null === b || void 0 === b ? void 0 : b.getReader)) return Tb(Qb(b), a)
        }
        throw Ob(b);
    }

    function L(b, a) {
        return a ? Ub(b, a) : u(b)
    }

    function $a() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        a = Q(b);
        return L(b, a)
    }

    function Vb(b, a) {
        var c = p(b) ? b : function () {
            return b
        }, d = function (a) {
            return a.error(c())
        };
        return new q(a ? function (b) {
            return a.schedule(d, 0, b)
        } : d)
    }

    function Fa(b, a) {
        var c, d, e, f =
            b.kind, h = b.value;
        b = b.error;
        if ("string" !== typeof f) throw new TypeError('Invalid notification, missing "kind"');
        "N" === f ? null === (c = a.next) || void 0 === c ? void 0 : c.call(a, h) : "E" === f ? null === (d = a.error) || void 0 === d ? void 0 : d.call(a, b) : null === (e = a.complete) || void 0 === e ? void 0 : e.call(a)
    }

    function ab(b) {
        return b instanceof Date && !isNaN(b)
    }

    function bb(b, a) {
        b = ab(b) ? {first: b} : "number" === typeof b ? {each: b} : b;
        var c = b.first, d = b.each, e = b.with, f = void 0 === e ? ie : e, e = b.scheduler,
            h = void 0 === e ? null !== a && void 0 !== a ? a : I : e;
        a = b.meta;
        var l = void 0 === a ? null : a;
        if (null == c && null == d) throw new TypeError("No timeout provided.");
        return n(function (a, b) {
            var e, k, g = null, v = 0, t = function (a) {
                k = G(b, h, function () {
                    try {
                        e.unsubscribe(), u(f({meta: l, lastValue: g, seen: v})).subscribe(b)
                    } catch (je) {
                        b.error(je)
                    }
                }, a)
            };
            e = a.subscribe(new m(b, function (a) {
                null === k || void 0 === k ? void 0 : k.unsubscribe();
                v++;
                b.next(g = a);
                0 < d && t(d)
            }, void 0, void 0, function () {
                (null === k || void 0 === k ? 0 : k.closed) || (null === k || void 0 === k ? void 0 : k.unsubscribe());
                g = null
            }));
            t(null != c ? "number" === typeof c ?
                c : +c - h.now() : d)
        })
    }

    function ie(b) {
        throw new Wb(b);
    }

    function N(b, a) {
        return n(function (c, d) {
            var e = 0;
            c.subscribe(new m(d, function (c) {
                d.next(b.call(a, c, e++))
            }))
        })
    }

    function X(b) {
        return N(function (a) {
            return ke(a) ? b.apply(void 0, A([], z(a))) : b(a)
        })
    }

    function Ga(b, a, c, d) {
        if (c) if (Ea(c)) d = c; else return function () {
            for (var e = [], f = 0; f < arguments.length; f++) e[f] = arguments[f];
            return Ga(b, a, d).apply(this, e).pipe(X(c))
        };
        return d ? function () {
            for (var c = [], f = 0; f < arguments.length; f++) c[f] = arguments[f];
            return Ga(b, a).apply(this,
                c).pipe(qa(d), pa(d))
        } : function () {
            for (var c = this, d = [], h = 0; h < arguments.length; h++) d[h] = arguments[h];
            var l = new cb, k = !0;
            return new q(function (e) {
                e = l.subscribe(e);
                if (k) {
                    var f = k = !1, h = !1;
                    a.apply(c, A(A([], z(d)), [function () {
                        for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
                        if (b && (c = a.shift(), null != c)) {
                            l.error(c);
                            return
                        }
                        l.next(1 < a.length ? a : a[0]);
                        h = !0;
                        f && l.complete()
                    }]));
                    h && l.complete();
                    f = !0
                }
                return e
            })
        }
    }

    function Xb(b) {
        if (1 === b.length) {
            var a = b[0];
            if (le(a)) return {args: a, keys: null};
            if (a && "object" === typeof a &&
                me(a) === ne) return b = oe(a), {
                args: b.map(function (b) {
                    return a[b]
                }), keys: b
            }
        }
        return {args: b, keys: null}
    }

    function Yb(b, a) {
        return b.reduce(function (b, d, e) {
            return b[d] = a[e], b
        }, {})
    }

    function Zb() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var c = Q(b), a = na(b), b = Xb(b), d = b.args, e = b.keys;
        if (0 === d.length) return L([], c);
        c = new q($b(d, c, e ? function (a) {
            return Yb(e, a)
        } : E));
        return a ? c.pipe(X(a)) : c
    }

    function $b(b, a, c) {
        void 0 === c && (c = E);
        return function (d) {
            ac(a, function () {
                for (var e = b.length, f = Array(e), h = e, l = e,
                         k = function (e) {
                             ac(a, function () {
                                 var k = !1;
                                 L(b[e], a).subscribe(new m(d, function (a) {
                                     f[e] = a;
                                     k || (k = !0, l--);
                                     l || d.next(c(f.slice()))
                                 }, function () {
                                     --h || d.complete()
                                 }))
                             }, d)
                         }, g = 0; g < e; g++) k(g)
            }, d)
        }
    }

    function ac(b, a, c) {
        b ? G(c, b, a) : a()
    }

    function db(b, a, c, d, e, f, h, l) {
        var k = [], g = 0, r = 0, y = !1, x = function (a) {
            return g < d ? R(a) : k.push(a)
        }, R = function (b) {
            f && a.next(b);
            g++;
            var l = !1;
            u(c(b, r++)).subscribe(new m(a, function (b) {
                null === e || void 0 === e ? void 0 : e(b);
                f ? x(b) : a.next(b)
            }, function () {
                l = !0
            }, void 0, function () {
                if (l) try {
                    g--;
                    for (var b =
                        function () {
                            var b = k.shift();
                            h ? G(a, h, function () {
                                return R(b)
                            }) : R(b)
                        }; k.length && g < d;) b();
                    !y || k.length || g || a.complete()
                } catch (J) {
                    a.error(J)
                }
            }))
        };
        b.subscribe(new m(a, x, function () {
            y = !0;
            !y || k.length || g || a.complete()
        }));
        return function () {
            null === l || void 0 === l ? void 0 : l()
        }
    }

    function H(b, a, c) {
        void 0 === c && (c = Infinity);
        if (p(a)) return H(function (c, e) {
            return N(function (b, d) {
                return a(c, b, e, d)
            })(u(b(c, e)))
        }, c);
        "number" === typeof a && (c = a);
        return n(function (a, e) {
            return db(a, e, b, c)
        })
    }

    function ra(b) {
        void 0 === b && (b = Infinity);
        return H(E, b)
    }

    function Ha() {
        return ra(1)
    }

    function sa() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return Ha()(L(b, Q(b)))
    }

    function ta(b) {
        return new q(function (a) {
            u(b()).subscribe(a)
        })
    }

    function eb(b, a, c, d) {
        p(c) && (d = c, c = void 0);
        if (d) return eb(b, a, c).pipe(X(d));
        d = z(pe(b) ? qe.map(function (d) {
            return function (e) {
                return b[d](a, e, c)
            }
        }) : re(b) ? se.map(bc(b, a)) : te(b) ? ue.map(bc(b, a)) : [], 2);
        var e = d[0], f = d[1];
        if (!e && Za(b)) return H(function (b) {
            return eb(b, a, c)
        })(u(b));
        if (!e) throw new TypeError("Invalid event target");
        return new q(function (a) {
            var b = function () {
                for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                return a.next(1 < b.length ? b : b[0])
            };
            e(b);
            return function () {
                return f(b)
            }
        })
    }

    function bc(b, a) {
        return function (c) {
            return function (d) {
                return b[c](a, d)
            }
        }
    }

    function re(b) {
        return p(b.addListener) && p(b.removeListener)
    }

    function te(b) {
        return p(b.on) && p(b.off)
    }

    function pe(b) {
        return p(b.addEventListener) && p(b.removeEventListener)
    }

    function cc(b, a, c) {
        return c ? cc(b, a).pipe(X(c)) : new q(function (c) {
            var d = function () {
                for (var a =
                    [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
                return c.next(1 === a.length ? a[0] : a)
            }, f = b(d);
            return p(a) ? function () {
                return a(d, f)
            } : void 0
        })
    }

    function Y(b, a, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = fb);
        var d = -1;
        null != a && (Ea(a) ? c = a : d = a);
        return new q(function (a) {
            var e = ab(b) ? +b - c.now() : b;
            0 > e && (e = 0);
            var h = 0;
            return c.schedule(function () {
                a.closed || (a.next(h++), 0 <= d ? this.schedule(void 0, d) : a.complete())
            }, e)
        })
    }

    function dc(b, a) {
        void 0 === b && (b = 0);
        void 0 === a && (a = I);
        0 > b && (b = 0);
        return Y(b, b, a)
    }

    function Z(b) {
        return 1 ===
        b.length && ve(b[0]) ? b[0] : b
    }

    function ec() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var c = Z(b);
        return n(function (a, b) {
            var d = A([a], z(c)), e = function () {
                if (!b.closed) if (0 < d.length) {
                    var a = void 0;
                    try {
                        a = u(d.shift())
                    } catch (v) {
                        e();
                        return
                    }
                    var c = new m(b, void 0, B, B);
                    b.add(a.subscribe(c));
                    c.add(e)
                } else b.complete()
            };
            e()
        })
    }

    function fc(b, a) {
        return function (c, d) {
            return !b.call(a, c, d)
        }
    }

    function O(b, a) {
        return n(function (c, d) {
            var e = 0;
            c.subscribe(new m(d, function (c) {
                return b.call(a, c, e++) && d.next(c)
            }))
        })
    }

    function gc(b) {
        return function (a) {
            for (var c = [], d = function (d) {
                c.push(u(b[d]).subscribe(new m(a, function (b) {
                    if (c) {
                        for (var e = 0; e < c.length; e++) e !== d && c[e].unsubscribe();
                        c = null
                    }
                    a.next(b)
                })))
            }, e = 0; c && !a.closed && e < b.length; e++) d(e)
        }
    }

    function gb() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var c = na(b), d = Z(b);
        return d.length ? new q(function (a) {
            var b = d.map(function () {
                return []
            }), e = d.map(function () {
                return !1
            });
            a.add(function () {
                b = e = null
            });
            for (var l = function (f) {
                u(d[f]).subscribe(new m(a, function (d) {
                    b[f].push(d);
                    b.every(function (a) {
                        return a.length
                    }) && (d = b.map(function (a) {
                        return a.shift()
                    }), a.next(c ? c.apply(void 0, A([], z(d))) : d), b.some(function (a, b) {
                        return !a.length && e[b]
                    }) && a.complete())
                }, function () {
                    e[f] = !0;
                    !b[f].length && a.complete()
                }))
            }, k = 0; !a.closed && k < d.length; k++) l(k);
            return function () {
                b = e = null
            }
        }) : M
    }

    function hb(b) {
        return n(function (a, c) {
            var d = !1, e = null, f = null, h = !1, l = function () {
                null === f || void 0 === f ? void 0 : f.unsubscribe();
                f = null;
                if (d) {
                    d = !1;
                    var a = e;
                    e = null;
                    c.next(a)
                }
                h && c.complete()
            }, k = function () {
                f = null;
                h &&
                c.complete()
            };
            a.subscribe(new m(c, function (a) {
                d = !0;
                e = a;
                f || u(b(a)).subscribe(f = new m(c, l, k))
            }, function () {
                h = !0;
                d && f && !f.closed || c.complete()
            }))
        })
    }

    function hc(b, a) {
        void 0 === a && (a = I);
        return hb(function () {
            return Y(b, a)
        })
    }

    function ic(b) {
        return n(function (a, c) {
            var d = [];
            a.subscribe(new m(c, function (a) {
                return d.push(a)
            }, function () {
                c.next(d);
                c.complete()
            }));
            b.subscribe(new m(c, function () {
                var a = d;
                d = [];
                c.next(a)
            }, B));
            return function () {
                d = null
            }
        })
    }

    function jc(b, a) {
        void 0 === a && (a = null);
        a = null !== a && void 0 !== a ? a : b;
        return n(function (c, d) {
            var e = [], f = 0;
            c.subscribe(new m(d, function (c) {
                var h, k, g, r, y = null;
                0 === f++ % a && e.push([]);
                try {
                    for (var x = F(e), m = x.next(); !m.done; m = x.next()) {
                        var t = m.value;
                        t.push(c);
                        b <= t.length && (y = null !== y && void 0 !== y ? y : [], y.push(t))
                    }
                } catch (J) {
                    h = {error: J}
                } finally {
                    try {
                        m && !m.done && (k = x.return) && k.call(x)
                    } finally {
                        if (h) throw h.error;
                    }
                }
                if (y) try {
                    for (var fa = F(y), n = fa.next(); !n.done; n = fa.next()) t = n.value, P(e, t), d.next(t)
                } catch (J) {
                    g = {error: J}
                } finally {
                    try {
                        n && !n.done && (r = fa.return) && r.call(fa)
                    } finally {
                        if (g) throw g.error;
                    }
                }
            }, function () {
                var a, b;
                try {
                    for (var c = F(e), f = c.next(); !f.done; f = c.next()) d.next(f.value)
                } catch (r) {
                    a = {error: r}
                } finally {
                    try {
                        f && !f.done && (b = c.return) && b.call(c)
                    } finally {
                        if (a) throw a.error;
                    }
                }
                d.complete()
            }, void 0, function () {
                e = null
            }))
        })
    }

    function kc(b) {
        for (var a, c, d = [], e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
        var f = null !== (a = Q(d)) && void 0 !== a ? a : I, h = null !== (c = d[0]) && void 0 !== c ? c : null,
            l = d[1] || Infinity;
        return n(function (a, c) {
            var d = [], e = !1, k = function (a) {
                var b = a.buffer;
                a.subs.unsubscribe();
                P(d, a);
                c.next(b);
                e && g()
            }, g = function () {
                if (d) {
                    var a = new D;
                    c.add(a);
                    var e = {buffer: [], subs: a};
                    d.push(e);
                    G(a, f, function () {
                        return k(e)
                    }, b)
                }
            };
            null !== h && 0 <= h ? G(c, f, g, h, !0) : e = !0;
            g();
            var v = new m(c, function (a) {
                var b, c, e = d.slice();
                try {
                    for (var f = F(e), h = f.next(); !h.done; h = f.next()) {
                        var g = h.value, v = g.buffer;
                        v.push(a);
                        l <= v.length && k(g)
                    }
                } catch (xe) {
                    b = {error: xe}
                } finally {
                    try {
                        h && !h.done && (c = f.return) && c.call(f)
                    } finally {
                        if (b) throw b.error;
                    }
                }
            }, function () {
                for (; null === d || void 0 === d ? 0 : d.length;) c.next(d.shift().buffer);
                null === v || void 0 ===
                v ? void 0 : v.unsubscribe();
                c.complete();
                c.unsubscribe()
            }, void 0, function () {
                return d = null
            });
            a.subscribe(v)
        })
    }

    function lc(b, a) {
        return n(function (c, d) {
            var e = [];
            u(b).subscribe(new m(d, function (b) {
                var c = [];
                e.push(c);
                var f = new D;
                f.add(u(a(b)).subscribe(new m(d, function () {
                    P(e, c);
                    d.next(c);
                    f.unsubscribe()
                }, B)))
            }, B));
            c.subscribe(new m(d, function (a) {
                var b, c;
                try {
                    for (var d = F(e), f = d.next(); !f.done; f = d.next()) f.value.push(a)
                } catch (r) {
                    b = {error: r}
                } finally {
                    try {
                        f && !f.done && (c = d.return) && c.call(d)
                    } finally {
                        if (b) throw b.error;
                    }
                }
            }, function () {
                for (; 0 < e.length;) d.next(e.shift());
                d.complete()
            }))
        })
    }

    function mc(b) {
        return n(function (a, c) {
            var d = null, e = null, f = function () {
                null === e || void 0 === e ? void 0 : e.unsubscribe();
                var a = d;
                d = [];
                a && c.next(a);
                u(b()).subscribe(e = new m(c, f, B))
            };
            f();
            a.subscribe(new m(c, function (a) {
                return null === d || void 0 === d ? void 0 : d.push(a)
            }, function () {
                d && c.next(d);
                c.complete()
            }, void 0, function () {
                return d = e = null
            }))
        })
    }

    function ib(b) {
        return n(function (a, c) {
            var d = null, e = !1, f, d = a.subscribe(new m(c, void 0, void 0, function (h) {
                f =
                    u(b(h, ib(b)(a)));
                d ? (d.unsubscribe(), d = null, f.subscribe(c)) : e = !0
            }));
            e && (d.unsubscribe(), d = null, f.subscribe(c))
        })
    }

    function nc(b, a, c, d, e) {
        return function (f, h) {
            var l = c, k = a, g = 0;
            f.subscribe(new m(h, function (a) {
                var c = g++;
                k = l ? b(k, a, c) : (l = !0, a);
                d && h.next(k)
            }, e && function () {
                l && h.next(k);
                h.complete()
            }))
        }
    }

    function ga(b, a) {
        return n(nc(b, a, 2 <= arguments.length, !1, !0))
    }

    function jb() {
        return n(function (b, a) {
            ga(ye, [])(b).subscribe(a)
        })
    }

    function oc(b, a) {
        return Va(jb(), H(function (a) {
            return b(a)
        }), a ? X(a) : E)
    }

    function Ia(b) {
        return oc(Zb,
            b)
    }

    function kb() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return (a = na(b)) ? Va(kb.apply(void 0, A([], z(b))), X(a)) : n(function (a, d) {
            $b(A([a], z(Z(b))))(d)
        })
    }

    function pc() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return kb.apply(void 0, A([], z(b)))
    }

    function Ja(b, a) {
        return p(a) ? H(b, a, 1) : H(b, 1)
    }

    function qc(b, a) {
        return p(a) ? Ja(function () {
            return b
        }, a) : Ja(function () {
            return b
        })
    }

    function rc() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var c = Q(b);
        return n(function (a,
                           e) {
            Ha()(L(A([a], z(b)), c)).subscribe(e)
        })
    }

    function sc() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return rc.apply(void 0, A([], z(b)))
    }

    function ze(b) {
        return new q(function (a) {
            return b.subscribe(a)
        })
    }

    function Ka(b, a) {
        void 0 === a && (a = Ae);
        var c = a.connector;
        return n(function (a, e) {
            var d = c();
            L(b(ze(d))).subscribe(e);
            e.add(a.subscribe(d))
        })
    }

    function tc(b) {
        return ga(function (a, c, d) {
            return !b || b(c, d) ? a + 1 : a
        }, 0)
    }

    function uc(b) {
        return n(function (a, c) {
            var d = !1, e = null, f = null, h = function () {
                null === f || void 0 ===
                f ? void 0 : f.unsubscribe();
                f = null;
                if (d) {
                    d = !1;
                    var a = e;
                    e = null;
                    c.next(a)
                }
            };
            a.subscribe(new m(c, function (a) {
                null === f || void 0 === f ? void 0 : f.unsubscribe();
                d = !0;
                e = a;
                f = new m(c, h, B);
                u(b(a)).subscribe(f)
            }, function () {
                h();
                c.complete()
            }, void 0, function () {
                e = f = null
            }))
        })
    }

    function vc(b, a) {
        void 0 === a && (a = I);
        return n(function (c, d) {
            function e() {
                var c = l + b, e = a.now();
                e < c ? (f = this.schedule(void 0, c - e), d.add(f)) : k()
            }

            var f = null, h = null, l = null, k = function () {
                if (f) {
                    f.unsubscribe();
                    f = null;
                    var a = h;
                    h = null;
                    d.next(a)
                }
            };
            c.subscribe(new m(d,
                function (c) {
                    h = c;
                    l = a.now();
                    f || (f = a.schedule(e, b), d.add(f))
                }, function () {
                    k();
                    d.complete()
                }, void 0, function () {
                    h = f = null
                }))
        })
    }

    function ua(b) {
        return n(function (a, c) {
            var d = !1;
            a.subscribe(new m(c, function (a) {
                d = !0;
                c.next(a)
            }, function () {
                d || c.next(b);
                c.complete()
            }))
        })
    }

    function aa(b) {
        return 0 >= b ? function () {
            return M
        } : n(function (a, c) {
            var d = 0;
            a.subscribe(new m(c, function (a) {
                ++d <= b && (c.next(a), b <= d && c.complete())
            }))
        })
    }

    function lb() {
        return n(function (b, a) {
            b.subscribe(new m(a, B))
        })
    }

    function mb(b) {
        return N(function () {
            return b
        })
    }

    function La(b, a) {
        return a ? function (c) {
            return sa(a.pipe(aa(1), lb()), c.pipe(La(b)))
        } : H(function (a, d) {
            return b(a, d).pipe(aa(1), mb(a))
        })
    }

    function wc(b, a) {
        void 0 === a && (a = I);
        var c = Y(b, a);
        return La(function () {
            return c
        })
    }

    function xc() {
        return n(function (b, a) {
            b.subscribe(new m(a, function (b) {
                return Fa(b, a)
            }))
        })
    }

    function yc(b, a) {
        return n(function (c, d) {
            var e = new Set;
            c.subscribe(new m(d, function (a) {
                var c = b ? b(a) : a;
                e.has(c) || (e.add(c), d.next(a))
            }));
            null === a || void 0 === a ? void 0 : a.subscribe(new m(d, function () {
                    return e.clear()
                },
                B))
        })
    }

    function nb(b, a) {
        void 0 === a && (a = E);
        b = null !== b && void 0 !== b ? b : Be;
        return n(function (c, d) {
            var e, f = !0;
            c.subscribe(new m(d, function (c) {
                var h = a(c);
                if (f || !b(e, h)) f = !1, e = h, d.next(c)
            }))
        })
    }

    function Be(b, a) {
        return b === a
    }

    function zc(b, a) {
        return nb(function (c, d) {
            return a ? a(c[b], d[b]) : c[b] === d[b]
        })
    }

    function va(b) {
        void 0 === b && (b = Ce);
        return n(function (a, c) {
            var d = !1;
            a.subscribe(new m(c, function (a) {
                d = !0;
                c.next(a)
            }, function () {
                return d ? c.complete() : c.error(b())
            }))
        })
    }

    function Ce() {
        return new ba
    }

    function Ac(b, a) {
        if (0 >
            b) throw new ob;
        var c = 2 <= arguments.length;
        return function (d) {
            return d.pipe(O(function (a, c) {
                return c === b
            }), aa(1), c ? ua(a) : va(function () {
                return new ob
            }))
        }
    }

    function Bc() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return function (a) {
            return sa(a, $a.apply(void 0, A([], z(b))))
        }
    }

    function Cc(b, a) {
        return n(function (c, d) {
            var e = 0;
            c.subscribe(new m(d, function (f) {
                b.call(a, f, e++, c) || (d.next(!1), d.complete())
            }, function () {
                d.next(!0);
                d.complete()
            }))
        })
    }

    function Ma() {
        return n(function (b, a) {
            var c = !1, d = null;
            b.subscribe(new m(a, function (b) {
                d || (d = u(b).subscribe(new m(a, void 0, function () {
                    d = null;
                    c && a.complete()
                })))
            }, function () {
                c = !0;
                !d && a.complete()
            }))
        })
    }

    function pb(b, a) {
        return a ? function (c) {
            return c.pipe(pb(function (c, e) {
                return u(b(c, e)).pipe(N(function (b, d) {
                    return a(c, b, e, d)
                }))
            }))
        } : n(function (a, d) {
            var c = 0, f = null, h = !1;
            a.subscribe(new m(d, function (a) {
                f || (f = new m(d, void 0, function () {
                    f = null;
                    h && d.complete()
                }), u(b(a, c++)).subscribe(f))
            }, function () {
                h = !0;
                !f && d.complete()
            }))
        })
    }

    function Dc(b, a, c) {
        void 0 === a && (a =
            Infinity);
        a = 1 > (a || 0) ? Infinity : a;
        return n(function (d, e) {
            return db(d, e, b, a, void 0, !0, c)
        })
    }

    function Ec(b) {
        return n(function (a, c) {
            try {
                a.subscribe(c)
            } finally {
                c.add(b)
            }
        })
    }

    function Fc(b, a) {
        return n(Gc(b, a, "value"))
    }

    function Gc(b, a, c) {
        var d = "index" === c;
        return function (c, f) {
            var e = 0;
            c.subscribe(new m(f, function (h) {
                var l = e++;
                b.call(a, h, l, c) && (f.next(d ? l : h), f.complete())
            }, function () {
                f.next(d ? -1 : void 0);
                f.complete()
            }))
        }
    }

    function Hc(b, a) {
        return n(Gc(b, a, "index"))
    }

    function Ic(b, a) {
        var c = 2 <= arguments.length;
        return function (d) {
            return d.pipe(b ?
                O(function (a, c) {
                    return b(a, c, d)
                }) : E, aa(1), c ? ua(a) : va(function () {
                return new ba
            }))
        }
    }

    function Jc(b, a, c, d) {
        return n(function (e, f) {
            function h(a, b) {
                var c = new q(function (a) {
                    y.activeGroups++;
                    var c = b.subscribe(a);
                    return function () {
                        c.unsubscribe();
                        0 === --y.activeGroups && y.teardownAttempted && y.unsubscribe()
                    }
                });
                c.key = a;
                return c
            }

            var l;
            a && "function" !== typeof a ? (c = a.duration, l = a.element, d = a.connector) : l = a;
            var k = new Map, g = function (a) {
                k.forEach(a);
                a(f)
            }, r = function (a) {
                return g(function (b) {
                    return b.error(a)
                })
            }, y = new De(f,
                function (a) {
                    try {
                        var e = b(a), g = k.get(e);
                        if (!g) {
                            k.set(e, g = d ? d() : new C);
                            var v = h(e, g);
                            f.next(v);
                            if (c) {
                                var x = new m(g, function () {
                                    g.complete();
                                    null === x || void 0 === x ? void 0 : x.unsubscribe()
                                }, void 0, void 0, function () {
                                    return k.delete(e)
                                });
                                y.add(u(c(v)).subscribe(x))
                            }
                        }
                        g.next(l ? l(a) : a)
                    } catch (J) {
                        r(J)
                    }
                }, function () {
                    return g(function (a) {
                        return a.complete()
                    })
                }, r, function () {
                    return k.clear()
                });
            e.subscribe(y)
        })
    }

    function Kc() {
        return n(function (b, a) {
            b.subscribe(new m(a, function () {
                a.next(!1);
                a.complete()
            }, function () {
                a.next(!0);
                a.complete()
            }))
        })
    }

    function qb(b) {
        return 0 >= b ? function () {
            return M
        } : n(function (a, c) {
            var d = [];
            a.subscribe(new m(c, function (a) {
                d.push(a);
                b < d.length && d.shift()
            }, function () {
                var a, b;
                try {
                    for (var h = F(d), l = h.next(); !l.done; l = h.next()) c.next(l.value)
                } catch (k) {
                    a = {error: k}
                } finally {
                    try {
                        l && !l.done && (b = h.return) && b.call(h)
                    } finally {
                        if (a) throw a.error;
                    }
                }
                c.complete()
            }, void 0, function () {
                d = null
            }))
        })
    }

    function Lc(b, a) {
        var c = 2 <= arguments.length;
        return function (d) {
            return d.pipe(b ? O(function (a, c) {
                    return b(a, c, d)
                }) : E, qb(1),
                c ? ua(a) : va(function () {
                    return new ba
                }))
        }
    }

    function Mc() {
        return n(function (b, a) {
            b.subscribe(new m(a, function (b) {
                a.next(Na.createNext(b))
            }, function () {
                a.next(Na.createComplete());
                a.complete()
            }, function (b) {
                a.next(Na.createError(b));
                a.complete()
            }))
        })
    }

    function Nc(b) {
        return ga(p(b) ? function (a, c) {
            return 0 < b(a, c) ? a : c
        } : function (a, b) {
            return a > b ? a : b
        })
    }

    function Oc(b, a, c) {
        void 0 === c && (c = Infinity);
        if (p(a)) return H(function () {
            return b
        }, a, c);
        "number" === typeof a && (c = a);
        return H(function () {
            return b
        }, c)
    }

    function Pc(b,
                a, c) {
        void 0 === c && (c = Infinity);
        return n(function (d, e) {
            var f = a;
            return db(d, e, function (a, c) {
                return b(f, a, c)
            }, c, function (a) {
                f = a
            }, !1, void 0, function () {
                return f = null
            })
        })
    }

    function Qc() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var c = Q(b), d = "number" === typeof b[b.length - 1] ? b.pop() : Infinity, b = Z(b);
        return n(function (a, f) {
            ra(d)(L(A([a], z(b)), c)).subscribe(f)
        })
    }

    function Rc() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return Qc.apply(void 0, A([], z(b)))
    }

    function Sc(b) {
        return ga(p(b) ?
            function (a, c) {
                return 0 > b(a, c) ? a : c
            } : function (a, b) {
                return a < b ? a : b
            })
    }

    function Oa(b, a) {
        var c = p(b) ? b : function () {
            return b
        };
        return p(a) ? Ka(a, {connector: c}) : function (a) {
            return new Pa(a, c)
        }
    }

    function Tc() {
        return n(function (b, a) {
            var c, d = !1;
            b.subscribe(new m(a, function (b) {
                var e = c;
                c = b;
                d && a.next([e, b]);
                d = !0
            }))
        })
    }

    function Uc() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var c = b.length;
        if (0 === c) throw Error("list of properties cannot be empty.");
        return N(function (a) {
            var d = a;
            for (a = 0; a < c; a++) if (d = null ===
            d || void 0 === d ? void 0 : d[b[a]], "undefined" === typeof d) return;
            return d
        })
    }

    function Vc(b) {
        return b ? function (a) {
            return Ka(b)(a)
        } : function (a) {
            return Oa(new C)(a)
        }
    }

    function Wc(b) {
        return function (a) {
            var c = new Xc(b);
            return new Pa(a, function () {
                return c
            })
        }
    }

    function Yc() {
        return function (b) {
            var a = new cb;
            return new Pa(b, function () {
                return a
            })
        }
    }

    function Zc(b, a, c, d) {
        c && !p(c) && (d = c);
        var e = p(c) ? c : void 0;
        return function (c) {
            return Oa(new ha(b, a, d), e)(c)
        }
    }

    function rb() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return b.length ? n(function (a, d) {
            gc(A([a], z(b)))(d)
        }) : E
    }

    function $c(b) {
        var a, c = Infinity, d;
        null != b && ("object" === typeof b ? (a = b.count, c = void 0 === a ? Infinity : a, d = b.delay) : c = b);
        return 0 >= c ? function () {
            return M
        } : n(function (a, b) {
            var e = 0, f, k = function () {
                null === f || void 0 === f ? void 0 : f.unsubscribe();
                f = null;
                if (null != d) {
                    var a = "number" === typeof d ? Y(d) : u(d(e)), c = new m(b, function () {
                        c.unsubscribe();
                        g()
                    });
                    a.subscribe(c)
                } else g()
            }, g = function () {
                var d = !1;
                f = a.subscribe(new m(b, void 0, function () {
                    ++e < c ? f ? k() : d = !0 : b.complete()
                }));
                d && k()
            };
            g()
        })
    }

    function ad(b) {
        return n(function (a, c) {
            var d, e = !1, f, h = !1, l = !1, k = function () {
                f || (f = new C, b(f).subscribe(new m(c, function () {
                    d ? g() : e = !0
                }, function () {
                    h = !0;
                    l && h && c.complete()
                })));
                return f
            }, g = function () {
                l = !1;
                d = a.subscribe(new m(c, void 0, function () {
                    (l = !0, h) && (c.complete(), !0) || k().next()
                }));
                e && (d.unsubscribe(), d = null, e = !1, g())
            };
            g()
        })
    }

    function bd(b) {
        void 0 === b && (b = Infinity);
        b = b && "object" === typeof b ? b : {count: b};
        var a = b.count, c = void 0 === a ? Infinity : a, d = b.delay;
        b = b.resetOnSuccess;
        var e = void 0 === b ?
            !1 : b;
        return 0 >= c ? E : n(function (a, b) {
            var f = 0, h, g = function () {
                var l = !1;
                h = a.subscribe(new m(b, function (a) {
                    e && (f = 0);
                    b.next(a)
                }, void 0, function (a) {
                    if (f++ < c) {
                        var e = function () {
                            h ? (h.unsubscribe(), h = null, g()) : l = !0
                        };
                        if (null != d) {
                            a = "number" === typeof d ? Y(d) : u(d(a, f));
                            var k = new m(b, function () {
                                k.unsubscribe();
                                e()
                            }, function () {
                                b.complete()
                            });
                            a.subscribe(k)
                        } else e()
                    } else b.error(a)
                }));
                l && (h.unsubscribe(), h = null, g())
            };
            g()
        })
    }

    function cd(b) {
        return n(function (a, c) {
            var d, e = !1, f, h = function () {
                d = a.subscribe(new m(c, void 0, void 0,
                    function (a) {
                        f || (f = new C, b(f).subscribe(new m(c, function () {
                            return d ? h() : e = !0
                        })));
                        f && f.next(a)
                    }));
                e && (d.unsubscribe(), d = null, e = !1, h())
            };
            h()
        })
    }

    function sb(b) {
        return n(function (a, c) {
            var d = !1, e = null;
            a.subscribe(new m(c, function (a) {
                d = !0;
                e = a
            }));
            b.subscribe(new m(c, function () {
                if (d) {
                    d = !1;
                    var a = e;
                    e = null;
                    c.next(a)
                }
            }, B))
        })
    }

    function dd(b, a) {
        void 0 === a && (a = I);
        return sb(dc(b, a))
    }

    function tb(b, a) {
        return n(nc(b, a, 2 <= arguments.length, !0))
    }

    function ed(b, a) {
        void 0 === a && (a = function (a, b) {
            return a === b
        });
        return n(function (c,
                           d) {
            var e = {buffer: [], complete: !1}, f = {buffer: [], complete: !1}, h = function (b, c) {
                var e = new m(d, function (e) {
                    var f = c.buffer, h = c.complete;
                    0 === f.length ? h ? (d.next(!1), d.complete()) : b.buffer.push(e) : a(e, f.shift()) || (d.next(!1), d.complete())
                }, function () {
                    b.complete = !0;
                    var a = c.buffer;
                    c.complete && (d.next(0 === a.length), d.complete());
                    null === e || void 0 === e ? void 0 : e.unsubscribe()
                });
                return e
            };
            c.subscribe(h(e, f));
            b.subscribe(h(f, e))
        })
    }

    function ub(b) {
        void 0 === b && (b = {});
        var a = b.connector, c = void 0 === a ? function () {
                return new C
            } :
            a, a = b.resetOnError, d = void 0 === a ? !0 : a, a = b.resetOnComplete, e = void 0 === a ? !0 : a;
        b = b.resetOnRefCountZero;
        var f = void 0 === b ? !0 : b;
        return function (a) {
            var b = null, h = null, g = null, r = 0, y = !1, m = !1, R = function () {
                null === h || void 0 === h ? void 0 : h.unsubscribe();
                h = null
            }, t = function () {
                R();
                b = g = null;
                y = m = !1
            }, fa = function () {
                var a = b;
                t();
                null === a || void 0 === a ? void 0 : a.unsubscribe()
            };
            return n(function (a, l) {
                r++;
                m || y || R();
                var k = g = null !== g && void 0 !== g ? g : c();
                l.add(function () {
                    r--;
                    0 !== r || m || y || (h = vb(fa, f))
                });
                k.subscribe(l);
                b || (b = new wa({
                    next: function (a) {
                        return k.next(a)
                    },
                    error: function (a) {
                        m = !0;
                        R();
                        h = vb(t, d, a);
                        k.error(a)
                    }, complete: function () {
                        y = !0;
                        R();
                        h = vb(t, e);
                        k.complete()
                    }
                }), L(a).subscribe(b))
            })(a)
        }
    }

    function vb(b, a) {
        for (var c = [], d = 2; d < arguments.length; d++) c[d - 2] = arguments[d];
        return !0 === a ? (b(), null) : !1 === a ? null : a.apply(void 0, A([], z(c))).pipe(aa(1)).subscribe(function () {
            return b()
        })
    }

    function fd(b, a, c) {
        var d, e, f, h = !1;
        b && "object" === typeof b ? (f = null !== (d = b.bufferSize) && void 0 !== d ? d : Infinity, a = null !== (e = b.windowTime) && void 0 !== e ? e : Infinity, h = !!b.refCount, c = b.scheduler) :
            f = null !== b && void 0 !== b ? b : Infinity;
        return ub({
            connector: function () {
                return new ha(f, a, c)
            }, resetOnError: !0, resetOnComplete: !1, resetOnRefCountZero: h
        })
    }

    function gd(b) {
        return n(function (a, c) {
            var d = !1, e, f = !1, h = 0;
            a.subscribe(new m(c, function (l) {
                f = !0;
                if (!b || b(l, h++, a)) d && c.error(new hd("Too many matching values")), d = !0, e = l
            }, function () {
                d ? (c.next(e), c.complete()) : c.error(f ? new id("No matching values") : new ba)
            }))
        })
    }

    function jd(b) {
        return O(function (a, c) {
            return b <= c
        })
    }

    function kd(b) {
        return 0 >= b ? E : n(function (a,
                                        c) {
            var d = Array(b), e = 0;
            a.subscribe(new m(c, function (a) {
                var f = e++;
                if (f < b) d[f] = a; else {
                    var f = f % b, l = d[f];
                    d[f] = a;
                    c.next(l)
                }
            }));
            return function () {
                d = null
            }
        })
    }

    function ld(b) {
        return n(function (a, c) {
            var d = !1, e = new m(c, function () {
                null === e || void 0 === e ? void 0 : e.unsubscribe();
                d = !0
            }, B);
            u(b).subscribe(e);
            a.subscribe(new m(c, function (a) {
                return d && c.next(a)
            }))
        })
    }

    function md(b) {
        return n(function (a, c) {
            var d = !1, e = 0;
            a.subscribe(new m(c, function (a) {
                return (d || (d = !b(a, e++))) && c.next(a)
            }))
        })
    }

    function nd() {
        for (var b = [], a = 0; a <
        arguments.length; a++) b[a] = arguments[a];
        var c = Q(b);
        return n(function (a, e) {
            (c ? sa(b, a, c) : sa(b, a)).subscribe(e)
        })
    }

    function ia(b, a) {
        return n(function (c, d) {
            var e = null, f = 0, h = !1;
            c.subscribe(new m(d, function (c) {
                null === e || void 0 === e ? void 0 : e.unsubscribe();
                var l = 0, g = f++;
                u(b(c, g)).subscribe(e = new m(d, function (b) {
                    return d.next(a ? a(c, b, g, l++) : b)
                }, function () {
                    e = null;
                    h && !e && d.complete()
                }))
            }, function () {
                (h = !0, !e) && d.complete()
            }))
        })
    }

    function od() {
        return ia(E)
    }

    function pd(b, a) {
        return p(a) ? ia(function () {
            return b
        }, a) : ia(function () {
            return b
        })
    }

    function qd(b, a) {
        return n(function (c, d) {
            var e = a;
            ia(function (a, c) {
                return b(e, a, c)
            }, function (a, b) {
                return e = b, b
            })(c).subscribe(d);
            return function () {
                e = null
            }
        })
    }

    function rd(b) {
        return n(function (a, c) {
            u(b).subscribe(new m(c, function () {
                return c.complete()
            }, B));
            !c.closed && a.subscribe(c)
        })
    }

    function sd(b, a) {
        void 0 === a && (a = !1);
        return n(function (c, d) {
            var e = 0;
            c.subscribe(new m(d, function (c) {
                var f = b(c, e++);
                (f || a) && d.next(c);
                !f && d.complete()
            }))
        })
    }

    function td(b, a, c) {
        var d = p(b) || a || c ? {next: b, error: a, complete: c} : b;
        return d ?
            n(function (a, b) {
                var c;
                null === (c = d.subscribe) || void 0 === c ? void 0 : c.call(d);
                var e = !0;
                a.subscribe(new m(b, function (a) {
                    var c;
                    null === (c = d.next) || void 0 === c ? void 0 : c.call(d, a);
                    b.next(a)
                }, function () {
                    var a;
                    e = !1;
                    null === (a = d.complete) || void 0 === a ? void 0 : a.call(d);
                    b.complete()
                }, function (a) {
                    var c;
                    e = !1;
                    null === (c = d.error) || void 0 === c ? void 0 : c.call(d, a);
                    b.error(a)
                }, function () {
                    var a, b;
                    e && (null === (a = d.unsubscribe) || void 0 === a ? void 0 : a.call(d));
                    null === (b = d.finalize) || void 0 === b ? void 0 : b.call(d)
                }))
            }) : E
    }

    function wb(b,
                a) {
        void 0 === a && (a = ud);
        return n(function (c, d) {
            var e = a.leading, f = a.trailing, h = !1, l = null, g = null, v = !1, r = function () {
                null === g || void 0 === g ? void 0 : g.unsubscribe();
                g = null;
                f && (n(), v && d.complete())
            }, y = function () {
                g = null;
                v && d.complete()
            }, n = function () {
                if (h) {
                    h = !1;
                    var a = l;
                    l = null;
                    d.next(a);
                    !v && (g = u(b(a)).subscribe(new m(d, r, y)))
                }
            };
            c.subscribe(new m(d, function (a) {
                h = !0;
                l = a;
                (!g || g.closed) && (e ? n() : g = u(b(a)).subscribe(new m(d, r, y)))
            }, function () {
                v = !0;
                f && h && g && !g.closed || d.complete()
            }))
        })
    }

    function vd(b, a, c) {
        void 0 === a &&
        (a = I);
        void 0 === c && (c = ud);
        var d = Y(b, a);
        return wb(function () {
            return d
        }, c)
    }

    function wd(b) {
        void 0 === b && (b = I);
        return function (a) {
            return ta(function () {
                return a.pipe(tb(function (a, d) {
                    a = a.current;
                    return {value: d, current: b.now(), last: a}
                }, {current: b.now(), value: void 0, last: void 0}), N(function (a) {
                    return new Ee(a.value, a.current - a.last)
                }))
            })
        }
    }

    function xd(b, a, c) {
        var d, e;
        c = null !== c && void 0 !== c ? c : fb;
        ab(b) ? d = b : "number" === typeof b && (e = b);
        if (a) b = function () {
            return a
        }; else throw new TypeError("No observable provided to switch to");
        if (null == d && null == e) throw new TypeError("No timeout provided.");
        return bb({first: d, each: e, scheduler: c, with: b})
    }

    function yd(b) {
        void 0 === b && (b = ja);
        return N(function (a) {
            return {value: a, timestamp: b.now()}
        })
    }

    function zd(b) {
        return n(function (a, c) {
            var d = new C;
            c.next(d.asObservable());
            var e = function (a) {
                d.error(a);
                c.error(a)
            };
            a.subscribe(new m(c, function (a) {
                return null === d || void 0 === d ? void 0 : d.next(a)
            }, function () {
                d.complete();
                c.complete()
            }, e));
            b.subscribe(new m(c, function () {
                    d.complete();
                    c.next(d = new C)
                }, B,
                e));
            return function () {
                null === d || void 0 === d ? void 0 : d.unsubscribe();
                d = null
            }
        })
    }

    function Ad(b, a) {
        void 0 === a && (a = 0);
        var c = 0 < a ? a : b;
        return n(function (a, e) {
            var d = [new C], h = 0;
            e.next(d[0].asObservable());
            a.subscribe(new m(e, function (a) {
                var f, g;
                try {
                    for (var l = F(d), m = l.next(); !m.done; m = l.next()) m.value.next(a)
                } catch (x) {
                    f = {error: x}
                } finally {
                    try {
                        m && !m.done && (g = l.return) && g.call(l)
                    } finally {
                        if (f) throw f.error;
                    }
                }
                a = h - b + 1;
                0 <= a && 0 === a % c && d.shift().complete();
                0 === ++h % c && (a = new C, d.push(a), e.next(a.asObservable()))
            }, function () {
                for (; 0 <
                       d.length;) d.shift().complete();
                e.complete()
            }, function (a) {
                for (; 0 < d.length;) d.shift().error(a);
                e.error(a)
            }, function () {
                d = null
            }))
        })
    }

    function Bd(b) {
        for (var a, c, d = [], e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
        var f = null !== (a = Q(d)) && void 0 !== a ? a : I, h = null !== (c = d[0]) && void 0 !== c ? c : null,
            g = d[1] || Infinity;
        return n(function (a, c) {
            var d = [], e = !1, l = function (a) {
                var b = a.subs;
                a.window.complete();
                b.unsubscribe();
                P(d, a);
                e && k()
            }, k = function () {
                if (d) {
                    var a = new D;
                    c.add(a);
                    var e = new C, h = {window: e, subs: a, seen: 0};
                    d.push(h);
                    c.next(e.asObservable());
                    G(a, f, function () {
                        return l(h)
                    }, b)
                }
            };
            null !== h && 0 <= h ? G(c, f, k, h, !0) : e = !0;
            k();
            var v = function (a) {
                d.slice().forEach(function (b) {
                    return a(b.window)
                });
                a(c);
                c.unsubscribe()
            };
            a.subscribe(new m(c, function (a) {
                d.slice().forEach(function (b) {
                    b.window.next(a);
                    g <= ++b.seen && l(b)
                })
            }, function () {
                return v(function (a) {
                    return a.complete()
                })
            }, function (a) {
                return v(function (b) {
                    return b.error(a)
                })
            }));
            return function () {
                d = null
            }
        })
    }

    function Cd(b, a) {
        return n(function (c, d) {
            var e = [], f = function (a) {
                for (; 0 < e.length;) e.shift().error(a);
                d.error(a)
            };
            u(b).subscribe(new m(d, function (b) {
                var c = new C;
                e.push(c);
                var h = new D, g;
                try {
                    g = u(a(b))
                } catch (r) {
                    f(r);
                    return
                }
                d.next(c.asObservable());
                h.add(g.subscribe(new m(d, function () {
                    P(e, c);
                    c.complete();
                    h.unsubscribe()
                }, B, f)))
            }, B));
            c.subscribe(new m(d, function (a) {
                    var b, c, d = e.slice();
                    try {
                        for (var f = F(d), h = f.next(); !h.done; h = f.next()) h.value.next(a)
                    } catch (x) {
                        b = {error: x}
                    } finally {
                        try {
                            h && !h.done && (c = f.return) && c.call(f)
                        } finally {
                            if (b) throw b.error;
                        }
                    }
                }, function () {
                    for (; 0 < e.length;) e.shift().complete();
                    d.complete()
                },
                f, function () {
                    for (; 0 < e.length;) e.shift().unsubscribe()
                }))
        })
    }

    function Dd(b) {
        return n(function (a, c) {
            var d, e, f = function (a) {
                d.error(a);
                c.error(a)
            }, h = function () {
                null === e || void 0 === e ? void 0 : e.unsubscribe();
                null === d || void 0 === d ? void 0 : d.complete();
                d = new C;
                c.next(d.asObservable());
                var a;
                try {
                    a = u(b())
                } catch (k) {
                    f(k);
                    return
                }
                a.subscribe(e = new m(c, h, h, f))
            };
            h();
            a.subscribe(new m(c, function (a) {
                return d.next(a)
            }, function () {
                d.complete();
                c.complete()
            }, f, function () {
                null === e || void 0 === e ? void 0 : e.unsubscribe();
                d = null
            }))
        })
    }

    function Ed() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var c = na(b);
        return n(function (a, e) {
            for (var d = b.length, h = Array(d), g = b.map(function () {
                return !1
            }), k = !1, v = function (a) {
                u(b[a]).subscribe(new m(e, function (b) {
                    h[a] = b;
                    k || g[a] || (g[a] = !0, (k = g.every(E)) && (g = null))
                }, B))
            }, r = 0; r < d; r++) v(r);
            a.subscribe(new m(e, function (a) {
                k && (a = A([a], z(h)), e.next(c ? c.apply(void 0, A([], z(a))) : a))
            }))
        })
    }

    function Fd(b) {
        return oc(gb, b)
    }

    function Gd() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return n(function (a,
                           d) {
            gb.apply(void 0, A([a], z(b))).subscribe(d)
        })
    }

    function Hd() {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return Gd.apply(void 0, A([], z(b)))
    }

    function Id(b, a) {
        for (var c = 0, d = a.length; c < d; c++) for (var e = a[c], f = Object.getOwnPropertyNames(e.prototype), h = 0, g = f.length; h < g; h++) {
            var k = f[h];
            b.prototype[k] = e.prototype[k]
        }
    }

    function Jd(b) {
        switch (b.responseType) {
            case "json":
                return "response" in b ? b.response : JSON.parse(b.responseText);
            case "document":
                return b.responseXML;
            default:
                return "response" in b ? b.response :
                    b.responseText
        }
    }

    function Fe(b, a) {
        return ca({method: "GET", url: b, headers: a})
    }

    function Ge(b, a, c) {
        return ca({method: "POST", url: b, body: a, headers: c})
    }

    function He(b, a) {
        return ca({method: "DELETE", url: b, headers: a})
    }

    function Ie(b, a, c) {
        return ca({method: "PUT", url: b, body: a, headers: c})
    }

    function Je(b, a, c) {
        return ca({method: "PATCH", url: b, body: a, headers: c})
    }

    function Ke(b, a) {
        return Le(ca({method: "GET", url: b, headers: a}))
    }

    function Me(b) {
        return new q(function (a) {
            var c, d, e = V({
                async: !0, crossDomain: !1, withCredentials: !1,
                method: "GET", timeout: 0, responseType: "json"
            }, b), f = e.queryParams, h = e.body, g = e.headers, k = e.url;
            if (!k) throw new TypeError("url is required");
            if (f) {
                var m;
                if (k.includes("?")) {
                    k = k.split("?");
                    if (2 < k.length) throw new TypeError("invalid url");
                    m = new URLSearchParams(k[1]);
                    (new URLSearchParams(f)).forEach(function (a, b) {
                        return m.set(b, a)
                    });
                    k = k[0] + "?" + m
                } else m = new URLSearchParams(f), k = k + "?" + m
            }
            f = {};
            if (g) for (var r in g) g.hasOwnProperty(r) && (f[r.toLowerCase()] = g[r]);
            var n = e.crossDomain;
            n || "x-requested-with" in f || (f["x-requested-with"] =
                "XMLHttpRequest");
            var x = e.xsrfCookieName, g = e.xsrfHeaderName;
            (e.withCredentials || !n) && x && g && (n = null !== (d = null === (c = null === document || void 0 === document ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + x + ")\x3d([^;]*)"))) || void 0 === c ? void 0 : c.pop()) && void 0 !== d ? d : "") && (f[g] = n);
            c = Ne(h, f);
            var p = V(V({}, e), {url: k, headers: f, body: c}), t;
            t = b.createXHR ? b.createXHR() : new XMLHttpRequest;
            var q = b.progressSubscriber, e = b.includeDownloadProgress, e = void 0 === e ? !1 : e;
            d = b.includeUploadProgress;
            d = void 0 === d ? !1 : d;
            h = function (b,
                          c) {
                t.addEventListener(b, function () {
                    var b, d = c();
                    null === (b = null === q || void 0 === q ? void 0 : q.error) || void 0 === b ? void 0 : b.call(q, d);
                    a.error(d)
                })
            };
            h("timeout", function () {
                return new Kd(t, p)
            });
            h("abort", function () {
                return new xa("aborted", t, p)
            });
            var u = function (b, c, d) {
                b.addEventListener(c, function (b) {
                    a.next(new xb(b, t, p, d + "_" + b.type))
                })
            };
            d && [yb, zb, Ld].forEach(function (a) {
                return u(t.upload, a, Oe)
            });
            q && [yb, zb].forEach(function (a) {
                return t.upload.addEventListener(a, function (a) {
                    var b;
                    return null === (b = null === q || void 0 ===
                    q ? void 0 : q.next) || void 0 === b ? void 0 : b.call(q, a)
                })
            });
            e && [yb, zb].forEach(function (a) {
                return u(t, a, Md)
            });
            var J = function (b) {
                a.error(new xa("ajax error" + (b ? " " + b : ""), t, p))
            };
            t.addEventListener("error", function (a) {
                var b;
                null === (b = null === q || void 0 === q ? void 0 : q.error) || void 0 === b ? void 0 : b.call(q, a);
                J()
            });
            t.addEventListener(Ld, function (b) {
                var c, d, e = t.status;
                if (400 > e) {
                    null === (c = null === q || void 0 === q ? void 0 : q.complete) || void 0 === c ? void 0 : c.call(q);
                    c = void 0;
                    try {
                        c = new xb(b, t, p, Md + "_" + b.type)
                    } catch (we) {
                        a.error(we);
                        return
                    }
                    a.next(c);
                    a.complete()
                } else null === (d = null === q || void 0 === q ? void 0 : q.error) || void 0 === d ? void 0 : d.call(q, b), J(e)
            });
            e = p.user;
            d = p.method;
            h = p.async;
            e ? t.open(d, k, h, e, p.password) : t.open(d, k, h);
            h && (t.timeout = p.timeout, t.responseType = p.responseType);
            "withCredentials" in t && (t.withCredentials = p.withCredentials);
            for (r in f) f.hasOwnProperty(r) && t.setRequestHeader(r, f[r]);
            c ? t.send(c) : t.send();
            return function () {
                t && 4 !== t.readyState && t.abort()
            }
        })
    }

    function Ne(b, a) {
        var c;
        if (!b || "string" === typeof b || "undefined" !==
            typeof FormData && b instanceof FormData || "undefined" !== typeof URLSearchParams && b instanceof URLSearchParams || Ab(b, "ArrayBuffer") || Ab(b, "File") || Ab(b, "Blob") || "undefined" !== typeof ReadableStream && b instanceof ReadableStream) return b;
        if ("undefined" !== typeof ArrayBuffer && ArrayBuffer.isView(b)) return b.buffer;
        if ("object" === typeof b) return a["content-type"] = null !== (c = a["content-type"]) && void 0 !== c ? c : "application/json;charset\x3dutf-8", JSON.stringify(b);
        throw new TypeError("Unknown body type");
    }

    function Ab(b,
                a) {
        return Pe.call(b) === "[object " + a + "]"
    }

    var Ra = function (b, a) {
            Ra = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (a, b) {
                a.__proto__ = b
            } || function (a, b) {
                for (var c in b) Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
            };
            return Ra(b, a)
        }, V = function () {
            V = Object.assign || function (b) {
                for (var a, c = 1, d = arguments.length; c < d; c++) {
                    a = arguments[c];
                    for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (b[e] = a[e])
                }
                return b
            };
            return V.apply(this, arguments)
        }, Qa = S(function (b) {
            return function (a) {
                b(this);
                this.message = a ? a.length + " errors occurred during unsubscription:\n" + a.map(function (a, b) {
                    return b + 1 + ") " + a.toString()
                }).join("\n  ") : "";
                this.name = "UnsubscriptionError";
                this.errors = a
            }
        }), D = function () {
            function b(a) {
                this.initialTeardown = a;
                this.closed = !1;
                this._teardowns = this._parentage = null
            }

            b.prototype.unsubscribe = function () {
                var a, b, d, e, f;
                if (!this.closed) {
                    this.closed = !0;
                    var h = this._parentage;
                    if (h) if (this._parentage = null, Array.isArray(h)) try {
                        for (var g = F(h), k = g.next(); !k.done; k = g.next()) k.value.remove(this)
                    } catch (x) {
                        a =
                            {error: x}
                    } finally {
                        try {
                            k && !k.done && (b = g.return) && b.call(g)
                        } finally {
                            if (a) throw a.error;
                        }
                    } else h.remove(this);
                    a = this.initialTeardown;
                    if (p(a)) try {
                        a()
                    } catch (x) {
                        f = x instanceof Qa ? x.errors : [x]
                    }
                    if (a = this._teardowns) {
                        this._teardowns = null;
                        try {
                            for (var m = F(a), r = m.next(); !r.done; r = m.next()) {
                                var n = r.value;
                                try {
                                    a = n, p(a) ? a() : a.unsubscribe()
                                } catch (x) {
                                    f = null !== f && void 0 !== f ? f : [], x instanceof Qa ? f = A(A([], z(f)), z(x.errors)) : f.push(x)
                                }
                            }
                        } catch (x) {
                            d = {error: x}
                        } finally {
                            try {
                                r && !r.done && (e = m.return) && e.call(m)
                            } finally {
                                if (d) throw d.error;
                            }
                        }
                    }
                    if (f) throw new Qa(f);
                }
            };
            b.prototype.add = function (a) {
                var c;
                if (a && a !== this) if (this.closed) p(a) ? a() : a.unsubscribe(); else {
                    if (a instanceof b) {
                        if (a.closed || a._hasParent(this)) return;
                        a._addParent(this)
                    }
                    (this._teardowns = null !== (c = this._teardowns) && void 0 !== c ? c : []).push(a)
                }
            };
            b.prototype._hasParent = function (a) {
                var b = this._parentage;
                return b === a || Array.isArray(b) && b.includes(a)
            };
            b.prototype._addParent = function (a) {
                var b = this._parentage;
                this._parentage = Array.isArray(b) ? (b.push(a), b) : b ? [b, a] : a
            };
            b.prototype._removeParent =
                function (a) {
                    var b = this._parentage;
                    b === a ? this._parentage = null : Array.isArray(b) && P(b, a)
                };
            b.prototype.remove = function (a) {
                var c = this._teardowns;
                c && P(c, a);
                a instanceof b && a._removeParent(this)
            };
            b.EMPTY = function () {
                var a = new b;
                a.closed = !0;
                return a
            }();
            return b
        }(), Nd = D.EMPTY, T = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1
        }, ea = {
            setTimeout: function () {
                for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
                a = ea.delegate;
                return ((null === a || void 0 === a ? void 0 : a.setTimeout) || setTimeout).apply(void 0, A([], z(b)))
            }, clearTimeout: function (b) {
                var a = ea.delegate;
                return ((null === a || void 0 === a ? void 0 : a.clearTimeout) || clearTimeout)(b)
            }, delegate: void 0
        }, ya = K("C", void 0, void 0), W = null, ma = function (b) {
            function a(a) {
                var c = b.call(this) || this;
                c.isStopped = !1;
                a ? (c.destination = a, Gb(a) && a.add(c)) : c.destination = Qe;
                return c
            }

            w(a, b);
            a.create = function (a, b, e) {
                return new wa(a, b, e)
            };
            a.prototype.next = function (a) {
                this.isStopped ? Ua(K("N", a, void 0), this) :
                    this._next(a)
            };
            a.prototype.error = function (a) {
                this.isStopped ? Ua(K("E", void 0, a), this) : (this.isStopped = !0, this._error(a))
            };
            a.prototype.complete = function () {
                this.isStopped ? Ua(ya, this) : (this.isStopped = !0, this._complete())
            };
            a.prototype.unsubscribe = function () {
                this.closed || (this.isStopped = !0, b.prototype.unsubscribe.call(this), this.destination = null)
            };
            a.prototype._next = function (a) {
                this.destination.next(a)
            };
            a.prototype._error = function (a) {
                try {
                    this.destination.error(a)
                } finally {
                    this.unsubscribe()
                }
            };
            a.prototype._complete =
                function () {
                    try {
                        this.destination.complete()
                    } finally {
                        this.unsubscribe()
                    }
                };
            return a
        }(D), wa = function (b) {
            function a(a, d, e) {
                var c = b.call(this) || this, h;
                p(a) ? h = a : a && (h = a.next, d = a.error, e = a.complete, c && T.useDeprecatedNextContext && (a = Object.create(a), a.unsubscribe = function () {
                    return c.unsubscribe()
                }), h = null === h || void 0 === h ? void 0 : h.bind(a), d = null === d || void 0 === d ? void 0 : d.bind(a), e = null === e || void 0 === e ? void 0 : e.bind(a));
                c.destination = {
                    next: h ? Ta(h, c) : B, error: Ta(null !== d && void 0 !== d ? d : Ib, c), complete: e ? Ta(e, c) :
                        B
                };
                return c
            }

            w(a, b);
            return a
        }(ma), Qe = {closed: !0, next: B, error: Ib, complete: B},
        oa = "function" === typeof Symbol && Symbol.observable || "@@observable", q = function () {
            function b(a) {
                a && (this._subscribe = a)
            }

            b.prototype.lift = function (a) {
                var c = new b;
                c.source = this;
                c.operator = a;
                return c
            };
            b.prototype.subscribe = function (a, b, d) {
                var c = this, f = ae(a) ? a : new wa(a, b, d);
                Ca(function () {
                    var a = c.operator, b = c.source;
                    f.add(a ? a.call(f, b) : b ? c._subscribe(f) : c._trySubscribe(f))
                });
                return f
            };
            b.prototype._trySubscribe = function (a) {
                try {
                    return this._subscribe(a)
                } catch (c) {
                    a.error(c)
                }
            };
            b.prototype.forEach = function (a, b) {
                var c = this;
                b = Kb(b);
                return new b(function (b, d) {
                    var e = new wa({
                        next: function (b) {
                            try {
                                a(b)
                            } catch (k) {
                                d(k), e.unsubscribe()
                            }
                        }, error: d, complete: b
                    });
                    c.subscribe(e)
                })
            };
            b.prototype._subscribe = function (a) {
                var b;
                return null === (b = this.source) || void 0 === b ? void 0 : b.subscribe(a)
            };
            b.prototype[oa] = function () {
                return this
            };
            b.prototype.pipe = function () {
                for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
                return Jb(a)(this)
            };
            b.prototype.toPromise = function (a) {
                var b = this;
                a = Kb(a);
                return new a(function (a,
                                       c) {
                    var d;
                    b.subscribe(function (a) {
                        return d = a
                    }, function (a) {
                        return c(a)
                    }, function () {
                        return a(d)
                    })
                })
            };
            b.create = function (a) {
                return new b(a)
            };
            return b
        }(), m = function (b) {
            function a(a, d, e, f, h) {
                var c = b.call(this, a) || this;
                c.onFinalize = h;
                c._next = d ? function (b) {
                    try {
                        d(b)
                    } catch (v) {
                        a.error(v)
                    }
                } : b.prototype._next;
                c._error = f ? function (b) {
                    try {
                        f(b)
                    } catch (v) {
                        a.error(v)
                    } finally {
                        this.unsubscribe()
                    }
                } : b.prototype._error;
                c._complete = e ? function () {
                    try {
                        e()
                    } catch (k) {
                        a.error(k)
                    } finally {
                        this.unsubscribe()
                    }
                } : b.prototype._complete;
                return c
            }

            w(a, b);
            a.prototype.unsubscribe = function () {
                var a, d = this.closed;
                b.prototype.unsubscribe.call(this);
                !d && (null === (a = this.onFinalize) || void 0 === a ? void 0 : a.call(this))
            };
            return a
        }(ma), Pa = function (b) {
            function a(a, d) {
                var c = b.call(this) || this;
                c.source = a;
                c.subjectFactory = d;
                c._subject = null;
                c._refCount = 0;
                c._connection = null;
                p(null === a || void 0 === a ? void 0 : a.lift) && (c.lift = a.lift);
                return c
            }

            w(a, b);
            a.prototype._subscribe = function (a) {
                return this.getSubject().subscribe(a)
            };
            a.prototype.getSubject = function () {
                var a =
                    this._subject;
                if (!a || a.isStopped) this._subject = this.subjectFactory();
                return this._subject
            };
            a.prototype._teardown = function () {
                this._refCount = 0;
                var a = this._connection;
                this._subject = this._connection = null;
                null === a || void 0 === a ? void 0 : a.unsubscribe()
            };
            a.prototype.connect = function () {
                var a = this, b = this._connection;
                if (!b) {
                    var b = this._connection = new D, e = this.getSubject();
                    b.add(this.source.subscribe(new m(e, void 0, function () {
                        a._teardown();
                        e.complete()
                    }, function (b) {
                        a._teardown();
                        e.error(b)
                    }, function () {
                        return a._teardown()
                    })));
                    b.closed && (this._connection = null, b = D.EMPTY)
                }
                return b
            };
            a.prototype.refCount = function () {
                return Wa()(this)
            };
            return a
        }(q), Da = {
            now: function () {
                return (Da.delegate || performance).now()
            }, delegate: void 0
        }, U = {
            schedule: function (b) {
                var a = requestAnimationFrame, c = cancelAnimationFrame, d = U.delegate;
                d && (a = d.requestAnimationFrame, c = d.cancelAnimationFrame);
                var e = a(function (a) {
                    c = void 0;
                    b(a)
                });
                return new D(function () {
                    return null === c || void 0 === c ? void 0 : c(e)
                })
            }, requestAnimationFrame: function () {
                for (var b = [], a = 0; a < arguments.length; a++) b[a] =
                    arguments[a];
                a = U.delegate;
                return ((null === a || void 0 === a ? void 0 : a.requestAnimationFrame) || requestAnimationFrame).apply(void 0, A([], z(b)))
            }, cancelAnimationFrame: function () {
                for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
                a = U.delegate;
                return ((null === a || void 0 === a ? void 0 : a.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, A([], z(b)))
            }, delegate: void 0
        }, Re = Lb(), Od = S(function (b) {
            return function () {
                b(this);
                this.name = "ObjectUnsubscribedError";
                this.message = "object unsubscribed"
            }
        }), C = function (b) {
            function a() {
                var a =
                    b.call(this) || this;
                a.closed = !1;
                a.observers = [];
                a.isStopped = !1;
                a.hasError = !1;
                a.thrownError = null;
                return a
            }

            w(a, b);
            a.prototype.lift = function (a) {
                var b = new Bb(this, this);
                b.operator = a;
                return b
            };
            a.prototype._throwIfClosed = function () {
                if (this.closed) throw new Od;
            };
            a.prototype.next = function (a) {
                var b = this;
                Ca(function () {
                    var c, d;
                    b._throwIfClosed();
                    if (!b.isStopped) {
                        var h = b.observers.slice();
                        try {
                            for (var g = F(h), k = g.next(); !k.done; k = g.next()) k.value.next(a)
                        } catch (v) {
                            c = {error: v}
                        } finally {
                            try {
                                k && !k.done && (d = g.return) &&
                                d.call(g)
                            } finally {
                                if (c) throw c.error;
                            }
                        }
                    }
                })
            };
            a.prototype.error = function (a) {
                var b = this;
                Ca(function () {
                    b._throwIfClosed();
                    if (!b.isStopped) {
                        b.hasError = b.isStopped = !0;
                        b.thrownError = a;
                        for (var c = b.observers; c.length;) c.shift().error(a)
                    }
                })
            };
            a.prototype.complete = function () {
                var a = this;
                Ca(function () {
                    a._throwIfClosed();
                    if (!a.isStopped) {
                        a.isStopped = !0;
                        for (var b = a.observers; b.length;) b.shift().complete()
                    }
                })
            };
            a.prototype.unsubscribe = function () {
                this.isStopped = this.closed = !0;
                this.observers = null
            };
            Object.defineProperty(a.prototype,
                "observed", {
                    get: function () {
                        var a;
                        return 0 < (null === (a = this.observers) || void 0 === a ? void 0 : a.length)
                    }, enumerable: !1, configurable: !0
                });
            a.prototype._trySubscribe = function (a) {
                this._throwIfClosed();
                return b.prototype._trySubscribe.call(this, a)
            };
            a.prototype._subscribe = function (a) {
                this._throwIfClosed();
                this._checkFinalizedStatuses(a);
                return this._innerSubscribe(a)
            };
            a.prototype._innerSubscribe = function (a) {
                var b = this.isStopped, c = this.observers;
                return this.hasError || b ? Nd : (c.push(a), new D(function () {
                    return P(c,
                        a)
                }))
            };
            a.prototype._checkFinalizedStatuses = function (a) {
                var b = this.thrownError, c = this.isStopped;
                this.hasError ? a.error(b) : c && a.complete()
            };
            a.prototype.asObservable = function () {
                var a = new q;
                a.source = this;
                return a
            };
            a.create = function (a, b) {
                return new Bb(a, b)
            };
            return a
        }(q), Bb = function (b) {
            function a(a, d) {
                var c = b.call(this) || this;
                c.destination = a;
                c.source = d;
                return c
            }

            w(a, b);
            a.prototype.next = function (a) {
                var b, c;
                null === (c = null === (b = this.destination) || void 0 === b ? void 0 : b.next) || void 0 === c ? void 0 : c.call(b, a)
            };
            a.prototype.error =
                function (a) {
                    var b, c;
                    null === (c = null === (b = this.destination) || void 0 === b ? void 0 : b.error) || void 0 === c ? void 0 : c.call(b, a)
                };
            a.prototype.complete = function () {
                var a, b;
                null === (b = null === (a = this.destination) || void 0 === a ? void 0 : a.complete) || void 0 === b ? void 0 : b.call(a)
            };
            a.prototype._subscribe = function (a) {
                var b, c;
                return null !== (c = null === (b = this.source) || void 0 === b ? void 0 : b.subscribe(a)) && void 0 !== c ? c : Nd
            };
            return a
        }(C), Xc = function (b) {
            function a(a) {
                var c = b.call(this) || this;
                c._value = a;
                return c
            }

            w(a, b);
            Object.defineProperty(a.prototype,
                "value", {
                    get: function () {
                        return this.getValue()
                    }, enumerable: !1, configurable: !0
                });
            a.prototype._subscribe = function (a) {
                var c = b.prototype._subscribe.call(this, a);
                !c.closed && a.next(this._value);
                return c
            };
            a.prototype.getValue = function () {
                var a = this.thrownError, b = this._value;
                if (this.hasError) throw a;
                this._throwIfClosed();
                return b
            };
            a.prototype.next = function (a) {
                b.prototype.next.call(this, this._value = a)
            };
            return a
        }(C), ja = {
            now: function () {
                return (ja.delegate || Date).now()
            }, delegate: void 0
        }, ha = function (b) {
            function a(a,
                       d, e) {
                void 0 === a && (a = Infinity);
                void 0 === d && (d = Infinity);
                void 0 === e && (e = ja);
                var c = b.call(this) || this;
                c._bufferSize = a;
                c._windowTime = d;
                c._timestampProvider = e;
                c._buffer = [];
                c._infiniteTimeWindow = Infinity === d;
                c._bufferSize = Math.max(1, a);
                c._windowTime = Math.max(1, d);
                return c
            }

            w(a, b);
            a.prototype.next = function (a) {
                var c = this._buffer, e = this._infiniteTimeWindow, f = this._timestampProvider, h = this._windowTime;
                this.isStopped || (c.push(a), !e && c.push(f.now() + h));
                this._trimBuffer();
                b.prototype.next.call(this, a)
            };
            a.prototype._subscribe =
                function (a) {
                    this._throwIfClosed();
                    this._trimBuffer();
                    for (var b = this._innerSubscribe(a), c = this._infiniteTimeWindow, f = this._buffer.slice(), h = 0; h < f.length && !a.closed; h += c ? 1 : 2) a.next(f[h]);
                    this._checkFinalizedStatuses(a);
                    return b
                };
            a.prototype._trimBuffer = function () {
                var a = this._bufferSize, b = this._timestampProvider, e = this._buffer, f = this._infiniteTimeWindow,
                    h = (f ? 1 : 2) * a;
                Infinity > a && h < e.length && e.splice(0, e.length - h);
                if (!f) {
                    a = b.now();
                    b = 0;
                    for (f = 1; f < e.length && e[f] <= a; f += 2) b = f;
                    b && e.splice(0, b + 1)
                }
            };
            return a
        }(C),
        cb = function (b) {
            function a() {
                var a = null !== b && b.apply(this, arguments) || this;
                a._value = null;
                a._hasValue = !1;
                a._isComplete = !1;
                return a
            }

            w(a, b);
            a.prototype._checkFinalizedStatuses = function (a) {
                var b = this._hasValue, c = this._value, f = this.thrownError, h = this.isStopped, g = this._isComplete;
                if (this.hasError) a.error(f); else if (h || g) b && a.next(c), a.complete()
            };
            a.prototype.next = function (a) {
                this.isStopped || (this._value = a, this._hasValue = !0)
            };
            a.prototype.complete = function () {
                var a = this._hasValue, d = this._value;
                this._isComplete ||
                (this._isComplete = !0, a && b.prototype.next.call(this, d), b.prototype.complete.call(this))
            };
            return a
        }(C), ka = {
            setInterval: function () {
                for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
                a = ka.delegate;
                return ((null === a || void 0 === a ? void 0 : a.setInterval) || setInterval).apply(void 0, A([], z(b)))
            }, clearInterval: function (b) {
                var a = ka.delegate;
                return ((null === a || void 0 === a ? void 0 : a.clearInterval) || clearInterval)(b)
            }, delegate: void 0
        }, za = function (b) {
            function a(a, d) {
                var c = b.call(this, a, d) || this;
                c.scheduler = a;
                c.work =
                    d;
                c.pending = !1;
                return c
            }

            w(a, b);
            a.prototype.schedule = function (a, b) {
                void 0 === b && (b = 0);
                if (this.closed) return this;
                this.state = a;
                a = this.id;
                var c = this.scheduler;
                null != a && (this.id = this.recycleAsyncId(c, a, b));
                this.pending = !0;
                this.delay = b;
                this.id = this.id || this.requestAsyncId(c, this.id, b);
                return this
            };
            a.prototype.requestAsyncId = function (a, b, e) {
                void 0 === e && (e = 0);
                return ka.setInterval(a.flush.bind(a, this), e)
            };
            a.prototype.recycleAsyncId = function (a, b, e) {
                void 0 === e && (e = 0);
                if (null != e && this.delay === e && !1 === this.pending) return b;
                ka.clearInterval(b)
            };
            a.prototype.execute = function (a, b) {
                if (this.closed) return Error("executing a cancelled action");
                this.pending = !1;
                if (a = this._execute(a, b)) return a;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            };
            a.prototype._execute = function (a, b) {
                b = !1;
                var c;
                try {
                    this.work(a)
                } catch (f) {
                    b = !0, c = f ? f : Error("Scheduled action threw falsy error")
                }
                if (b) return this.unsubscribe(), c
            };
            a.prototype.unsubscribe = function () {
                if (!this.closed) {
                    var a = this.id, d = this.scheduler,
                        e = d.actions;
                    this.work = this.state = this.scheduler = null;
                    this.pending = !1;
                    P(e, this);
                    null != a && (this.id = this.recycleAsyncId(d, a, null));
                    this.delay = null;
                    b.prototype.unsubscribe.call(this)
                }
            };
            return a
        }(function (b) {
            function a(a, d) {
                return b.call(this) || this
            }

            w(a, b);
            a.prototype.schedule = function (a, b) {
                return this
            };
            return a
        }(D)), Se = 1, Cb, Xa = {}, Te = function (b) {
            var a = Se++;
            Xa[a] = !0;
            Cb || (Cb = Promise.resolve());
            Cb.then(function () {
                return Mb(a) && b()
            });
            return a
        }, Ue = function (b) {
            Mb(b)
        }, la = {
            setImmediate: function () {
                for (var b = [],
                         a = 0; a < arguments.length; a++) b[a] = arguments[a];
                a = la.delegate;
                return ((null === a || void 0 === a ? void 0 : a.setImmediate) || Te).apply(void 0, A([], z(b)))
            }, clearImmediate: function (b) {
                var a = la.delegate;
                return ((null === a || void 0 === a ? void 0 : a.clearImmediate) || Ue)(b)
            }, delegate: void 0
        }, Ve = function (b) {
            function a(a, d) {
                var c = b.call(this, a, d) || this;
                c.scheduler = a;
                c.work = d;
                return c
            }

            w(a, b);
            a.prototype.requestAsyncId = function (a, d, e) {
                void 0 === e && (e = 0);
                if (null !== e && 0 < e) return b.prototype.requestAsyncId.call(this, a, d, e);
                a.actions.push(this);
                return a._scheduled || (a._scheduled = la.setImmediate(a.flush.bind(a, void 0)))
            };
            a.prototype.recycleAsyncId = function (a, d, e) {
                void 0 === e && (e = 0);
                if (null != e && 0 < e || null == e && 0 < this.delay) return b.prototype.recycleAsyncId.call(this, a, d, e);
                a.actions.some(function (a) {
                    return a.id === d
                }) || (la.clearImmediate(d), a._scheduled = void 0)
            };
            return a
        }(za), Db = function () {
            function b(a, c) {
                void 0 === c && (c = b.now);
                this.schedulerActionCtor = a;
                this.now = c
            }

            b.prototype.schedule = function (a, b, d) {
                void 0 === b && (b = 0);
                return (new this.schedulerActionCtor(this,
                    a)).schedule(d, b)
            };
            b.now = ja.now;
            return b
        }(), Aa = function (b) {
            function a(a, d) {
                void 0 === d && (d = Db.now);
                a = b.call(this, a, d) || this;
                a.actions = [];
                a._active = !1;
                a._scheduled = void 0;
                return a
            }

            w(a, b);
            a.prototype.flush = function (a) {
                var b = this.actions;
                if (this._active) b.push(a); else {
                    var c;
                    this._active = !0;
                    do if (c = a.execute(a.state, a.delay)) break; while (a = b.shift());
                    this._active = !1;
                    if (c) {
                        for (; a = b.shift();) a.unsubscribe();
                        throw c;
                    }
                }
            };
            return a
        }(Db), Pd = new (function (b) {
            function a() {
                return null !== b && b.apply(this, arguments) ||
                    this
            }

            w(a, b);
            a.prototype.flush = function (a) {
                this._active = !0;
                var b = this._scheduled;
                this._scheduled = void 0;
                var c = this.actions, f;
                a = a || c.shift();
                do if (f = a.execute(a.state, a.delay)) break; while ((a = c[0]) && a.id === b && c.shift());
                this._active = !1;
                if (f) {
                    for (; (a = c[0]) && a.id === b && c.shift();) a.unsubscribe();
                    throw f;
                }
            };
            return a
        }(Aa))(Ve), I = new Aa(za), fb = I, We = function (b) {
            function a(a, d) {
                var c = b.call(this, a, d) || this;
                c.scheduler = a;
                c.work = d;
                return c
            }

            w(a, b);
            a.prototype.schedule = function (a, d) {
                void 0 === d && (d = 0);
                if (0 < d) return b.prototype.schedule.call(this,
                    a, d);
                this.delay = d;
                this.state = a;
                this.scheduler.flush(this);
                return this
            };
            a.prototype.execute = function (a, d) {
                return 0 < d || this.closed ? b.prototype.execute.call(this, a, d) : this._execute(a, d)
            };
            a.prototype.requestAsyncId = function (a, d, e) {
                void 0 === e && (e = 0);
                return null != e && 0 < e || null == e && 0 < this.delay ? b.prototype.requestAsyncId.call(this, a, d, e) : a.flush(this)
            };
            return a
        }(za), Qd = new (function (b) {
            function a() {
                return null !== b && b.apply(this, arguments) || this
            }

            w(a, b);
            return a
        }(Aa))(We), Xe = function (b) {
            function a(a, d) {
                var c =
                    b.call(this, a, d) || this;
                c.scheduler = a;
                c.work = d;
                return c
            }

            w(a, b);
            a.prototype.requestAsyncId = function (a, d, e) {
                void 0 === e && (e = 0);
                if (null !== e && 0 < e) return b.prototype.requestAsyncId.call(this, a, d, e);
                a.actions.push(this);
                return a._scheduled || (a._scheduled = U.requestAnimationFrame(function () {
                    return a.flush(void 0)
                }))
            };
            a.prototype.recycleAsyncId = function (a, d, e) {
                void 0 === e && (e = 0);
                if (null != e && 0 < e || null == e && 0 < this.delay) return b.prototype.recycleAsyncId.call(this, a, d, e);
                a.actions.some(function (a) {
                    return a.id ===
                        d
                }) || (U.cancelAnimationFrame(d), a._scheduled = void 0)
            };
            return a
        }(za), Rd = new (function (b) {
            function a() {
                return null !== b && b.apply(this, arguments) || this
            }

            w(a, b);
            a.prototype.flush = function (a) {
                this._active = !0;
                var b = this._scheduled;
                this._scheduled = void 0;
                var c = this.actions, f;
                a = a || c.shift();
                do if (f = a.execute(a.state, a.delay)) break; while ((a = c[0]) && a.id === b && c.shift());
                this._active = !1;
                if (f) {
                    for (; (a = c[0]) && a.id === b && c.shift();) a.unsubscribe();
                    throw f;
                }
            };
            return a
        }(Aa))(Xe), Sd = function (b) {
            function a(a, d) {
                void 0 ===
                a && (a = Eb);
                void 0 === d && (d = Infinity);
                var c = b.call(this, a, function () {
                    return c.frame
                }) || this;
                c.maxFrames = d;
                c.frame = 0;
                c.index = -1;
                return c
            }

            w(a, b);
            a.prototype.flush = function () {
                for (var a = this.actions, b = this.maxFrames, e, f; (f = a[0]) && f.delay <= b && !(a.shift(), this.frame = f.delay, e = f.execute(f.state, f.delay));) ;
                if (e) {
                    for (; f = a.shift();) f.unsubscribe();
                    throw e;
                }
            };
            a.frameTimeFactor = 10;
            return a
        }(Aa), Eb = function (b) {
            function a(a, d, e) {
                void 0 === e && (e = a.index += 1);
                var c = b.call(this, a, d) || this;
                c.scheduler = a;
                c.work = d;
                c.index =
                    e;
                c.active = !0;
                c.index = a.index = e;
                return c
            }

            w(a, b);
            a.prototype.schedule = function (c, d) {
                void 0 === d && (d = 0);
                if (Number.isFinite(d)) {
                    if (!this.id) return b.prototype.schedule.call(this, c, d);
                    this.active = !1;
                    var e = new a(this.scheduler, this.work);
                    this.add(e);
                    return e.schedule(c, d)
                }
                return D.EMPTY
            };
            a.prototype.requestAsyncId = function (b, d, e) {
                void 0 === e && (e = 0);
                this.delay = b.frame + e;
                b = b.actions;
                b.push(this);
                b.sort(a.sortActions);
                return !0
            };
            a.prototype.recycleAsyncId = function (a, b, e) {
            };
            a.prototype._execute = function (a, d) {
                if (!0 ===
                    this.active) return b.prototype._execute.call(this, a, d)
            };
            a.sortActions = function (a, b) {
                return a.delay === b.delay ? a.index === b.index ? 0 : a.index > b.index ? 1 : -1 : a.delay > b.delay ? 1 : -1
            };
            return a
        }(za), M = new q(function (b) {
            return b.complete()
        }), Za = function (b) {
            return b && "number" === typeof b.length && "function" !== typeof b
        }, Ya;
    Ya = "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    (function (b) {
        b.NEXT = "N";
        b.ERROR = "E";
        b.COMPLETE = "C"
    })(g.NotificationKind || (g.NotificationKind = {}));
    var Na = function () {
            function b(a,
                       b, d) {
                this.kind = a;
                this.value = b;
                this.error = d;
                this.hasValue = "N" === a
            }

            b.prototype.observe = function (a) {
                return Fa(this, a)
            };
            b.prototype.do = function (a, b, d) {
                var c = this.kind, f = this.value, h = this.error;
                return "N" === c ? null === a || void 0 === a ? void 0 : a(f) : "E" === c ? null === b || void 0 === b ? void 0 : b(h) : null === d || void 0 === d ? void 0 : d()
            };
            b.prototype.accept = function (a, b, d) {
                return p(null === a || void 0 === a ? void 0 : a.next) ? this.observe(a) : this.do(a, b, d)
            };
            b.prototype.toObservable = function () {
                var a = this.kind, b = this.value, d = this.error, b =
                    "N" === a ? $a(b) : "E" === a ? Vb(function () {
                        return d
                    }) : "C" === a ? M : 0;
                if (!b) throw new TypeError("Unexpected notification kind " + a);
                return b
            };
            b.createNext = function (a) {
                return new b("N", a)
            };
            b.createError = function (a) {
                return new b("E", void 0, a)
            };
            b.createComplete = function () {
                return b.completeNotification
            };
            b.completeNotification = new b("C");
            return b
        }(), ba = S(function (b) {
            return function () {
                b(this);
                this.name = "EmptyError";
                this.message = "no elements in sequence"
            }
        }), ob = S(function (b) {
            return function () {
                b(this);
                this.name = "ArgumentOutOfRangeError";
                this.message = "argument out of range"
            }
        }), id = S(function (b) {
            return function (a) {
                b(this);
                this.name = "NotFoundError";
                this.message = a
            }
        }), hd = S(function (b) {
            return function (a) {
                b(this);
                this.name = "SequenceError";
                this.message = a
            }
        }), Wb = S(function (b) {
            return function (a) {
                void 0 === a && (a = null);
                b(this);
                this.message = "Timeout has occurred";
                this.name = "TimeoutError";
                this.info = a
            }
        }), ke = Array.isArray, le = Array.isArray, me = Object.getPrototypeOf, ne = Object.prototype, oe = Object.keys,
        Ye = {
            connector: function () {
                return new C
            }, resetOnDisconnect: !0
        },
        se = ["addListener", "removeListener"], qe = ["addEventListener", "removeEventListener"], ue = ["on", "off"],
        Td = new q(B), ve = Array.isArray, ye = function (b, a) {
            return b.push(a), b
        }, Ae = {
            connector: function () {
                return new C
            }
        }, De = function (b) {
            function a() {
                var a = null !== b && b.apply(this, arguments) || this;
                a.activeGroups = 0;
                a.teardownAttempted = !1;
                return a
            }

            w(a, b);
            a.prototype.unsubscribe = function () {
                this.teardownAttempted = !0;
                0 === this.activeGroups && b.prototype.unsubscribe.call(this)
            };
            return a
        }(m), ud = {leading: !0, trailing: !1}, Ee = function () {
            return function (b,
                             a) {
                this.value = b;
                this.interval = a
            }
        }(), Ze = Object.freeze({
            audit: hb,
            auditTime: hc,
            buffer: ic,
            bufferCount: jc,
            bufferTime: kc,
            bufferToggle: lc,
            bufferWhen: mc,
            catchError: ib,
            combineAll: Ia,
            combineLatestAll: Ia,
            combineLatest: kb,
            combineLatestWith: pc,
            concat: rc,
            concatAll: Ha,
            concatMap: Ja,
            concatMapTo: qc,
            concatWith: sc,
            connect: Ka,
            count: tc,
            debounce: uc,
            debounceTime: vc,
            defaultIfEmpty: ua,
            delay: wc,
            delayWhen: La,
            dematerialize: xc,
            distinct: yc,
            distinctUntilChanged: nb,
            distinctUntilKeyChanged: zc,
            elementAt: Ac,
            endWith: Bc,
            every: Cc,
            exhaust: Ma,
            exhaustAll: Ma,
            exhaustMap: pb,
            expand: Dc,
            filter: O,
            finalize: Ec,
            find: Fc,
            findIndex: Hc,
            first: Ic,
            groupBy: Jc,
            ignoreElements: lb,
            isEmpty: Kc,
            last: Lc,
            map: N,
            mapTo: mb,
            materialize: Mc,
            max: Nc,
            merge: Qc,
            mergeAll: ra,
            flatMap: H,
            mergeMap: H,
            mergeMapTo: Oc,
            mergeScan: Pc,
            mergeWith: Rc,
            min: Sc,
            multicast: Oa,
            observeOn: pa,
            onErrorResumeNext: ec,
            pairwise: Tc,
            partition: function (b, a) {
                return function (c) {
                    return [O(b, a)(c), O(fc(b, a))(c)]
                }
            },
            pluck: Uc,
            publish: Vc,
            publishBehavior: Wc,
            publishLast: Yc,
            publishReplay: Zc,
            race: function () {
                for (var b = [], a =
                    0; a < arguments.length; a++) b[a] = arguments[a];
                return rb.apply(void 0, A([], z(Z(b))))
            },
            raceWith: rb,
            reduce: ga,
            repeat: $c,
            repeatWhen: ad,
            retry: bd,
            retryWhen: cd,
            refCount: Wa,
            sample: sb,
            sampleTime: dd,
            scan: tb,
            sequenceEqual: ed,
            share: ub,
            shareReplay: fd,
            single: gd,
            skip: jd,
            skipLast: kd,
            skipUntil: ld,
            skipWhile: md,
            startWith: nd,
            subscribeOn: qa,
            switchAll: od,
            switchMap: ia,
            switchMapTo: pd,
            switchScan: qd,
            take: aa,
            takeLast: qb,
            takeUntil: rd,
            takeWhile: sd,
            tap: td,
            throttle: wb,
            throttleTime: vd,
            throwIfEmpty: va,
            timeInterval: wd,
            timeout: bb,
            timeoutWith: xd,
            timestamp: yd,
            toArray: jb,
            window: zd,
            windowCount: Ad,
            windowTime: Bd,
            windowToggle: Cd,
            windowWhen: Dd,
            withLatestFrom: Ed,
            zip: Gd,
            zipAll: Fd,
            zipWith: Hd
        }), Ba = function () {
            return function (b, a) {
                void 0 === a && (a = Infinity);
                this.subscribedFrame = b;
                this.unsubscribedFrame = a
            }
        }(), Ud = function () {
            function b() {
                this.subscriptions = []
            }

            b.prototype.logSubscribedFrame = function () {
                this.subscriptions.push(new Ba(this.scheduler.now()));
                return this.subscriptions.length - 1
            };
            b.prototype.logUnsubscribedFrame = function (a) {
                var b = this.subscriptions;
                b[a] = new Ba(b[a].subscribedFrame, this.scheduler.now())
            };
            return b
        }(), Fb = function (b) {
            function a(a, d) {
                var c = b.call(this, function (a) {
                    var b = this, c = b.logSubscribedFrame(), d = new D;
                    d.add(new D(function () {
                        b.logUnsubscribedFrame(c)
                    }));
                    b.scheduleMessages(a);
                    return d
                }) || this;
                c.messages = a;
                c.subscriptions = [];
                c.scheduler = d;
                return c
            }

            w(a, b);
            a.prototype.scheduleMessages = function (a) {
                for (var b = this.messages.length, c = 0; c < b; c++) {
                    var f = this.messages[c];
                    a.add(this.scheduler.schedule(function (a) {
                        Fa(a.message.notification,
                            a.subscriber)
                    }, f.frame, {message: f, subscriber: a}))
                }
            };
            return a
        }(q);
    Id(Fb, [Ud]);
    var Vd = function (b) {
        function a(a, d) {
            var c = b.call(this) || this;
            c.messages = a;
            c.subscriptions = [];
            c.scheduler = d;
            return c
        }

        w(a, b);
        a.prototype._subscribe = function (a) {
            var c = this, e = c.logSubscribedFrame(), f = new D;
            f.add(new D(function () {
                c.logUnsubscribedFrame(e)
            }));
            f.add(b.prototype._subscribe.call(this, a));
            return f
        };
        a.prototype.setup = function () {
            for (var a = this, b = a.messages.length, e = function (b) {
                (function () {
                    var c = a.messages[b], d = c.notification;
                    a.scheduler.schedule(function () {
                        Fa(d, a)
                    }, c.frame)
                })()
            }, f = 0; f < b; f++) e(f)
        };
        return a
    }(C);
    Id(Vd, [Ud]);
    var $e = function (b) {
            function a(a) {
                var c = b.call(this, Eb, 750) || this;
                c.assertDeepEqual = a;
                c.hotObservables = [];
                c.coldObservables = [];
                c.flushTests = [];
                c.runMode = !1;
                return c
            }

            w(a, b);
            a.prototype.createTime = function (b) {
                b = this.runMode ? b.trim().indexOf("|") : b.indexOf("|");
                if (-1 === b) throw Error('marble diagram for time should have a completion marker "|"');
                return b * a.frameTimeFactor
            };
            a.prototype.createColdObservable =
                function (b, d, e) {
                    if (-1 !== b.indexOf("^")) throw Error('cold observable cannot have subscription offset "^"');
                    if (-1 !== b.indexOf("!")) throw Error('cold observable cannot have unsubscription marker "!"');
                    b = a.parseMarbles(b, d, e, void 0, this.runMode);
                    b = new Fb(b, this);
                    this.coldObservables.push(b);
                    return b
                };
            a.prototype.createHotObservable = function (b, d, e) {
                if (-1 !== b.indexOf("!")) throw Error('hot observable cannot have unsubscription marker "!"');
                b = a.parseMarbles(b, d, e, void 0, this.runMode);
                b = new Vd(b, this);
                this.hotObservables.push(b);
                return b
            };
            a.prototype.materializeInnerObservable = function (a, b) {
                var c = this, d = [];
                a.subscribe(function (a) {
                    d.push({frame: c.frame - b, notification: K("N", a, void 0)})
                }, function (a) {
                    d.push({frame: c.frame - b, notification: K("E", void 0, a)})
                }, function () {
                    d.push({frame: c.frame - b, notification: ya})
                });
                return d
            };
            a.prototype.expectObservable = function (b, d) {
                var c = this;
                void 0 === d && (d = null);
                var f = [], g = {actual: f, ready: !1};
                d = a.parseMarblesAsSubscriptions(d, this.runMode);
                var l = Infinity === d.subscribedFrame ? 0 : d.subscribedFrame;
                d = d.unsubscribedFrame;
                var k;
                this.schedule(function () {
                    k = b.subscribe(function (a) {
                        a = a instanceof q ? c.materializeInnerObservable(a, c.frame) : a;
                        f.push({frame: c.frame, notification: K("N", a, void 0)})
                    }, function (a) {
                        f.push({frame: c.frame, notification: K("E", void 0, a)})
                    }, function () {
                        f.push({frame: c.frame, notification: ya})
                    })
                }, l);
                Infinity !== d && this.schedule(function () {
                    return k.unsubscribe()
                }, d);
                this.flushTests.push(g);
                var m = this.runMode;
                return {
                    toBe: function (b, c, d) {
                        g.ready = !0;
                        g.expected = a.parseMarbles(b, c, d, !0, m)
                    },
                    toEqual: function (a) {
                        g.ready = !0;
                        g.expected = [];
                        c.schedule(function () {
                            k = a.subscribe(function (a) {
                                a = a instanceof q ? c.materializeInnerObservable(a, c.frame) : a;
                                g.expected.push({frame: c.frame, notification: K("N", a, void 0)})
                            }, function (a) {
                                g.expected.push({frame: c.frame, notification: K("E", void 0, a)})
                            }, function () {
                                g.expected.push({frame: c.frame, notification: ya})
                            })
                        }, l)
                    }
                }
            };
            a.prototype.expectSubscriptions = function (b) {
                var c = {actual: b, ready: !1};
                this.flushTests.push(c);
                var e = this.runMode;
                return {
                    toBe: function (b) {
                        b = "string" ===
                        typeof b ? [b] : b;
                        c.ready = !0;
                        c.expected = b.map(function (b) {
                            return a.parseMarblesAsSubscriptions(b, e)
                        }).filter(function (a) {
                            return Infinity !== a.subscribedFrame
                        })
                    }
                }
            };
            a.prototype.flush = function () {
                for (var a = this, d = this.hotObservables; 0 < d.length;) d.shift().setup();
                b.prototype.flush.call(this);
                this.flushTests = this.flushTests.filter(function (b) {
                    return b.ready ? (a.assertDeepEqual(b.actual, b.expected), !1) : !0
                })
            };
            a.parseMarblesAsSubscriptions = function (a, b) {
                var c = this;
                void 0 === b && (b = !1);
                if ("string" !== typeof a) return new Ba(Infinity);
                var d = A([], z(a));
                a = d.length;
                for (var g = -1, l = Infinity, k = Infinity, m = 0, r = function (a) {
                    var e = m, f = function (a) {
                        e += a * c.frameTimeFactor
                    }, h = d[a];
                    switch (h) {
                        case " ":
                            b || f(1);
                            break;
                        case "-":
                            f(1);
                            break;
                        case "(":
                            g = m;
                            f(1);
                            break;
                        case ")":
                            g = -1;
                            f(1);
                            break;
                        case "^":
                            if (Infinity !== l) throw Error("found a second subscription point '^' in a subscription marble diagram. There can only be one.");
                            l = -1 < g ? g : m;
                            f(1);
                            break;
                        case "!":
                            if (Infinity !== k) throw Error("found a second unsubscription point '!' in a subscription marble diagram. There can only be one.");
                            k = -1 < g ? g : m;
                            break;
                        default:
                            if (b && h.match(/^[0-9]$/) && (0 === a || " " === d[a - 1])) {
                                var r = d.slice(a).join("").match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                                if (r) {
                                    a += r[0].length - 1;
                                    var h = parseFloat(r[1]), p = void 0;
                                    switch (r[2]) {
                                        case "ms":
                                            p = h;
                                            break;
                                        case "s":
                                            p = 1E3 * h;
                                            break;
                                        case "m":
                                            p = 6E4 * h
                                    }
                                    f(p / n.frameTimeFactor);
                                    break
                                }
                            }
                            throw Error("there can only be '^' and '!' markers in a subscription marble diagram. Found instead '" + h + "'.");
                    }
                    m = e;
                    q = a
                }, n = this, q, p = 0; p < a; p++) r(p), p = q;
                return 0 > k ? new Ba(l) : new Ba(l, k)
            };
            a.parseMarbles = function (a,
                                       b, e, f, g) {
                var c = this;
                void 0 === f && (f = !1);
                void 0 === g && (g = !1);
                if (-1 !== a.indexOf("!")) throw Error('conventional marble diagrams cannot have the unsubscription marker "!"');
                var d = A([], z(a)), h = d.length, m = [];
                a = g ? a.replace(/^[ ]+/, "").indexOf("^") : a.indexOf("^");
                var n = -1 === a ? 0 : a * -this.frameTimeFactor, p = "object" !== typeof b ? function (a) {
                    return a
                } : function (a) {
                    return f && b[a] instanceof Fb ? b[a].messages : b[a]
                }, q = -1;
                a = function (a) {
                    var b = n, f = function (a) {
                        b += a * c.frameTimeFactor
                    }, h = void 0, k = d[a];
                    switch (k) {
                        case " ":
                            g || f(1);
                            break;
                        case "-":
                            f(1);
                            break;
                        case "(":
                            q = n;
                            f(1);
                            break;
                        case ")":
                            q = -1;
                            f(1);
                            break;
                        case "|":
                            h = ya;
                            f(1);
                            break;
                        case "^":
                            f(1);
                            break;
                        case "#":
                            h = K("E", void 0, e || "error");
                            f(1);
                            break;
                        default:
                            if (g && k.match(/^[0-9]$/) && (0 === a || " " === d[a - 1])) {
                                var l = d.slice(a).join("").match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                                if (l) {
                                    a += l[0].length - 1;
                                    var k = parseFloat(l[1]), r = void 0;
                                    switch (l[2]) {
                                        case "ms":
                                            r = k;
                                            break;
                                        case "s":
                                            r = 1E3 * k;
                                            break;
                                        case "m":
                                            r = 6E4 * k
                                    }
                                    f(r / t.frameTimeFactor);
                                    break
                                }
                            }
                            h = K("N", p(k), void 0);
                            f(1)
                    }
                    h && m.push({
                        frame: -1 < q ? q : n,
                        notification: h
                    });
                    n = b;
                    u = a
                };
                for (var t = this, u, w = 0; w < h; w++) a(w), w = u;
                return m
            };
            a.prototype.createAnimator = function () {
                var b = this;
                if (!this.runMode) throw Error("animate() must only be used in run mode");
                var d = 0, e;
                return {
                    animate: function (c) {
                        var d, f;
                        if (e) throw Error("animate() must not be called more than once within run()");
                        if (/[|#]/.test(c)) throw Error("animate() must not complete or error");
                        e = new Map;
                        c = a.parseMarbles(c, void 0, void 0, void 0, !0);
                        try {
                            for (var g = F(c), m = g.next(); !m.done; m = g.next()) b.schedule(function () {
                                var a,
                                    c, d = b.now(), f = Array.from(e.values());
                                e.clear();
                                try {
                                    for (var g = (a = void 0, F(f)), h = g.next(); !h.done; h = g.next()) {
                                        var k = h.value;
                                        k(d)
                                    }
                                } catch (J) {
                                    a = {error: J}
                                } finally {
                                    try {
                                        h && !h.done && (c = g.return) && c.call(g)
                                    } finally {
                                        if (a) throw a.error;
                                    }
                                }
                            }, m.value.frame)
                        } catch (r) {
                            d = {error: r}
                        } finally {
                            try {
                                m && !m.done && (f = g.return) && f.call(g)
                            } finally {
                                if (d) throw d.error;
                            }
                        }
                    }, delegate: {
                        requestAnimationFrame: function (a) {
                            if (!e) throw Error("animate() was not called within run()");
                            var b = ++d;
                            e.set(b, a);
                            return b
                        }, cancelAnimationFrame: function (a) {
                            if (!e) throw Error("animate() was not called within run()");
                            e.delete(a)
                        }
                    }
                }
            };
            a.prototype.createDelegates = function () {
                var a = this, b = 0, e = new Map, f = function () {
                    var b = a.now(), c = Array.from(e.values()).filter(function (a) {
                        return a.due <= b
                    }), d = c.filter(function (a) {
                        return "immediate" === a.type
                    });
                    if (0 < d.length) d = d[0], c = d.handle, d = d.handler, e.delete(c), d(); else if (d = c.filter(function (a) {
                        return "interval" === a.type
                    }), 0 < d.length) {
                        var c = d[0], g = c.duration, d = c.handler;
                        c.due = b + g;
                        c.subscription = a.schedule(f, g);
                        d()
                    } else if (c = c.filter(function (a) {
                        return "timeout" === a.type
                    }), 0 < c.length) d =
                        c[0], c = d.handle, d = d.handler, e.delete(c), d(); else throw Error("Expected a due immediate or interval");
                };
                return {
                    immediate: {
                        setImmediate: function (c) {
                            var d = ++b;
                            e.set(d, {
                                due: a.now(),
                                duration: 0,
                                handle: d,
                                handler: c,
                                subscription: a.schedule(f, 0),
                                type: "immediate"
                            });
                            return d
                        }, clearImmediate: function (a) {
                            var b = e.get(a);
                            b && (b.subscription.unsubscribe(), e.delete(a))
                        }
                    }, interval: {
                        setInterval: function (c, d) {
                            void 0 === d && (d = 0);
                            var g = ++b;
                            e.set(g, {
                                due: a.now() + d, duration: d, handle: g, handler: c, subscription: a.schedule(f, d),
                                type: "interval"
                            });
                            return g
                        }, clearInterval: function (a) {
                            var b = e.get(a);
                            b && (b.subscription.unsubscribe(), e.delete(a))
                        }
                    }, timeout: {
                        setTimeout: function (c, d) {
                            void 0 === d && (d = 0);
                            var g = ++b;
                            e.set(g, {
                                due: a.now() + d,
                                duration: d,
                                handle: g,
                                handler: c,
                                subscription: a.schedule(f, d),
                                type: "timeout"
                            });
                            return g
                        }, clearTimeout: function (a) {
                            var b = e.get(a);
                            b && (b.subscription.unsubscribe(), e.delete(a))
                        }
                    }
                }
            };
            a.prototype.run = function (b) {
                var c = a.frameTimeFactor, e = this.maxFrames;
                a.frameTimeFactor = 1;
                this.maxFrames = Infinity;
                this.runMode =
                    !0;
                var f = this.createAnimator(), g = this.createDelegates();
                U.delegate = f.delegate;
                ja.delegate = this;
                la.delegate = g.immediate;
                ka.delegate = g.interval;
                ea.delegate = g.timeout;
                Da.delegate = this;
                f = {
                    cold: this.createColdObservable.bind(this),
                    hot: this.createHotObservable.bind(this),
                    flush: this.flush.bind(this),
                    time: this.createTime.bind(this),
                    expectObservable: this.expectObservable.bind(this),
                    expectSubscriptions: this.expectSubscriptions.bind(this),
                    animate: f.animate
                };
                try {
                    var l = b(f);
                    this.flush();
                    return l
                } finally {
                    a.frameTimeFactor =
                        c, this.maxFrames = e, this.runMode = !1, U.delegate = void 0, ja.delegate = void 0, la.delegate = void 0, ka.delegate = void 0, ea.delegate = void 0, Da.delegate = void 0
                }
            };
            a.frameTimeFactor = 10;
            return a
        }(Sd), af = Object.freeze({TestScheduler: $e}), xb = function () {
            return function (b, a, c, d) {
                void 0 === d && (d = "download_load");
                this.originalEvent = b;
                this.xhr = a;
                this.request = c;
                this.type = d;
                c = a.status;
                d = a.responseType;
                this.status = null !== c && void 0 !== c ? c : 0;
                this.responseType = null !== d && void 0 !== d ? d : "";
                this.responseHeaders = (c = a.getAllResponseHeaders()) ?
                    c.split("\n").reduce(function (a, b) {
                        var c = b.indexOf(": ");
                        a[b.slice(0, c)] = b.slice(c + 2);
                        return a
                    }, {}) : {};
                this.response = Jd(a);
                a = b.total;
                this.loaded = b.loaded;
                this.total = a
            }
        }(), xa = S(function (b) {
            return function (a, b, d) {
                this.message = a;
                this.name = "AjaxError";
                this.xhr = b;
                this.request = d;
                this.status = b.status;
                this.responseType = b.responseType;
                var c;
                try {
                    c = Jd(b)
                } catch (f) {
                    c = b.responseText
                }
                this.response = c
            }
        }), Kd = function () {
            function b(a, b) {
                xa.call(this, "ajax timeout", a, b);
                this.name = "AjaxTimeoutError";
                return this
            }

            b.prototype =
                Object.create(xa.prototype);
            return b
        }(), Le = N(function (b) {
            return b.response
        }), ca = function () {
            var b = function (a) {
                return Me("string" === typeof a ? {url: a} : a)
            };
            b.get = Fe;
            b.post = Ge;
            b.delete = He;
            b.put = Ie;
            b.patch = Je;
            b.getJSON = Ke;
            return b
        }(), Oe = "upload", Md = "download", yb = "loadstart", zb = "progress", Ld = "load", Pe = Object.prototype.toString,
        bf = Object.freeze({ajax: ca, AjaxError: xa, AjaxTimeoutError: Kd, AjaxResponse: xb}), cf = {
            url: "", deserializer: function (b) {
                return JSON.parse(b.data)
            }, serializer: function (b) {
                return JSON.stringify(b)
            }
        },
        Wd = function (b) {
            function a(a, d) {
                var c = b.call(this) || this;
                c._socket = null;
                if (a instanceof q) c.destination = d, c.source = a; else {
                    d = c._config = V({}, cf);
                    c._output = new C;
                    if ("string" === typeof a) d.url = a; else for (var f in a) a.hasOwnProperty(f) && (d[f] = a[f]);
                    if (!d.WebSocketCtor && WebSocket) d.WebSocketCtor = WebSocket; else if (!d.WebSocketCtor) throw Error("no WebSocket constructor can be found");
                    c.destination = new ha
                }
                return c
            }

            w(a, b);
            a.prototype.lift = function (b) {
                var c = new a(this._config, this.destination);
                c.operator = b;
                c.source =
                    this;
                return c
            };
            a.prototype._resetState = function () {
                this._socket = null;
                this.source || (this.destination = new ha);
                this._output = new C
            };
            a.prototype.multiplex = function (a, b, e) {
                var c = this;
                return new q(function (d) {
                    try {
                        c.next(a())
                    } catch (k) {
                        d.error(k)
                    }
                    var f = c.subscribe(function (a) {
                        try {
                            e(a) && d.next(a)
                        } catch (v) {
                            d.error(v)
                        }
                    }, function (a) {
                        return d.error(a)
                    }, function () {
                        return d.complete()
                    });
                    return function () {
                        try {
                            c.next(b())
                        } catch (k) {
                            d.error(k)
                        }
                        f.unsubscribe()
                    }
                })
            };
            a.prototype._connectSocket = function () {
                var a = this, b = this._config,
                    e = b.WebSocketCtor, f = b.protocol, g = b.url, b = b.binaryType, l = this._output, k = null;
                try {
                    this._socket = k = f ? new e(g, f) : new e(g), b && (this._socket.binaryType = b)
                } catch (r) {
                    l.error(r);
                    return
                }
                var m = new D(function () {
                    a._socket = null;
                    k && 1 === k.readyState && k.close()
                });
                k.onopen = function (b) {
                    if (a._socket) {
                        var c = a._config.openObserver;
                        c && c.next(b);
                        b = a.destination;
                        a.destination = ma.create(function (b) {
                            if (1 === k.readyState) try {
                                var c = a._config.serializer;
                                k.send(c(b))
                            } catch (t) {
                                a.destination.error(t)
                            }
                        }, function (b) {
                            var c = a._config.closingObserver;
                            c && c.next(void 0);
                            b && b.code ? k.close(b.code, b.reason) : l.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }"));
                            a._resetState()
                        }, function () {
                            var b = a._config.closingObserver;
                            b && b.next(void 0);
                            k.close();
                            a._resetState()
                        });
                        b && b instanceof ha && m.add(b.subscribe(a.destination))
                    } else k.close(), a._resetState()
                };
                k.onerror = function (b) {
                    a._resetState();
                    l.error(b)
                };
                k.onclose = function (b) {
                    k === a._socket && a._resetState();
                    var c = a._config.closeObserver;
                    c && c.next(b);
                    b.wasClean ? l.complete() : l.error(b)
                };
                k.onmessage = function (b) {
                    try {
                        var c = a._config.deserializer;
                        l.next(c(b))
                    } catch (x) {
                        l.error(x)
                    }
                }
            };
            a.prototype._subscribe = function (a) {
                var b = this, c = this.source;
                if (c) return c.subscribe(a);
                this._socket || this._connectSocket();
                this._output.subscribe(a);
                a.add(function () {
                    var a = b._socket;
                    0 === b._output.observers.length && (!a || 1 !== a.readyState && 0 !== a.readyState || a.close(), b._resetState())
                });
                return a
            };
            a.prototype.unsubscribe = function () {
                var a =
                    this._socket;
                !a || 1 !== a.readyState && 0 !== a.readyState || a.close();
                this._resetState();
                b.prototype.unsubscribe.call(this)
            };
            return a
        }(Bb), df = Object.freeze({
            webSocket: function (b) {
                return new Wd(b)
            }, WebSocketSubject: Wd
        }), ef = Object.freeze({
            fromFetch: function (b, a) {
                void 0 === a && (a = {});
                var c = a.selector, d = Xd(a, ["selector"]);
                return new q(function (a) {
                    var e = new AbortController, g = e.signal, l = !0, k = d.signal;
                    if (k) if (k.aborted) e.abort(); else {
                        var n = function () {
                            g.aborted || e.abort()
                        };
                        k.addEventListener("abort", n);
                        a.add(function () {
                            return k.removeEventListener("abort",
                                n)
                        })
                    }
                    var p = V(V({}, d), {signal: g}), q = function (b) {
                        l = !1;
                        a.error(b)
                    };
                    fetch(b, p).then(function (b) {
                        c ? u(c(b)).subscribe(new m(a, void 0, function () {
                            l = !1;
                            a.complete()
                        }, q)) : (l = !1, a.next(b), a.complete())
                    }).catch(q);
                    return function () {
                        l && e.abort()
                    }
                })
            }
        });
    g.operators = Ze;
    g.testing = af;
    g.ajax = bf;
    g.webSocket = df;
    g.fetch = ef;
    g.Observable = q;
    g.ConnectableObservable = Pa;
    g.observable = oa;
    g.animationFrames = function (b) {
        return b ? Lb(b) : Re
    };
    g.Subject = C;
    g.BehaviorSubject = Xc;
    g.ReplaySubject = ha;
    g.AsyncSubject = cb;
    g.asap = Pd;
    g.asapScheduler =
        Pd;
    g.async = fb;
    g.asyncScheduler = I;
    g.queue = Qd;
    g.queueScheduler = Qd;
    g.animationFrame = Rd;
    g.animationFrameScheduler = Rd;
    g.VirtualTimeScheduler = Sd;
    g.VirtualAction = Eb;
    g.Scheduler = Db;
    g.Subscription = D;
    g.Subscriber = ma;
    g.Notification = Na;
    g.pipe = Va;
    g.noop = B;
    g.identity = E;
    g.isObservable = function (b) {
        return !!b && (b instanceof q || p(b.lift) && p(b.subscribe))
    };
    g.lastValueFrom = function (b, a) {
        var c = "object" === typeof a;
        return new Promise(function (d, e) {
            var f = !1, g;
            b.subscribe({
                next: function (a) {
                    g = a;
                    f = !0
                }, error: e, complete: function () {
                    f ?
                        d(g) : c ? d(a.defaultValue) : e(new ba)
                }
            })
        })
    };
    g.firstValueFrom = function (b, a) {
        var c = "object" === typeof a;
        return new Promise(function (d, e) {
            var f = new wa({
                next: function (a) {
                    d(a);
                    f.unsubscribe()
                }, error: e, complete: function () {
                    c ? d(a.defaultValue) : e(new ba)
                }
            });
            b.subscribe(f)
        })
    };
    g.ArgumentOutOfRangeError = ob;
    g.EmptyError = ba;
    g.NotFoundError = id;
    g.ObjectUnsubscribedError = Od;
    g.SequenceError = hd;
    g.TimeoutError = Wb;
    g.UnsubscriptionError = Qa;
    g.bindCallback = function (b, a, c) {
        return Ga(!1, b, a, c)
    };
    g.bindNodeCallback = function (b, a,
                                   c) {
        return Ga(!0, b, a, c)
    };
    g.combineLatest = Zb;
    g.concat = sa;
    g.connectable = function (b, a) {
        void 0 === a && (a = Ye);
        var c = null, d = a.connector;
        a = a.resetOnDisconnect;
        var e = void 0 === a ? !0 : a, f = d();
        a = new q(function (a) {
            return f.subscribe(a)
        });
        a.connect = function () {
            if (!c || c.closed) c = ta(function () {
                return b
            }).subscribe(f), e && c.add(function () {
                return f = d()
            });
            return c
        };
        return a
    };
    g.defer = ta;
    g.empty = function (b) {
        return b ? be(b) : M
    };
    g.forkJoin = function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var a = na(b), b = Xb(b),
            c = b.args, d = b.keys, b = new q(function (a) {
                var b = c.length;
                if (b) for (var e = Array(b), g = b, k = b, n = function (b) {
                    var f = !1;
                    u(c[b]).subscribe(new m(a, function (a) {
                        f || (f = !0, k--);
                        e[b] = a
                    }, function () {
                        return g--
                    }, void 0, function () {
                        g && f || (k || a.next(d ? Yb(d, e) : e), a.complete())
                    }))
                }, p = 0; p < b; p++) n(p); else a.complete()
            });
        return a ? b.pipe(X(a)) : b
    };
    g.from = L;
    g.fromEvent = eb;
    g.fromEventPattern = cc;
    g.generate = function (b, a, c, d, e) {
        function f() {
            var b;
            return Sa(this, function (d) {
                switch (d.label) {
                    case 0:
                        b = k, d.label = 1;
                    case 1:
                        return a && !a(b) ?
                            [3, 4] : [4, l(b)];
                    case 2:
                        d.sent(), d.label = 3;
                    case 3:
                        return b = c(b), [3, 1];
                    case 4:
                        return [2]
                }
            })
        }

        var g, l, k;
        1 === arguments.length ? (k = b.initialState, a = b.condition, c = b.iterate, g = b.resultSelector, l = void 0 === g ? E : g, e = b.scheduler) : (k = b, !d || Ea(d) ? (l = E, e = d) : l = d);
        return ta(e ? function () {
            return Sb(f(), e)
        } : f)
    };
    g.iif = function (b, a, c) {
        return ta(function () {
            return b() ? a : c
        })
    };
    g.interval = dc;
    g.merge = function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        var a = Q(b), c = "number" === typeof b[b.length - 1] ? b.pop() : Infinity;
        return b.length ? 1 === b.length ? u(b[0]) : ra(c)(L(b, a)) : M
    };
    g.never = function () {
        return Td
    };
    g.of = $a;
    g.onErrorResumeNext = function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return ec(Z(b))(M)
    };
    g.pairs = function (b, a) {
        return L(Object.entries(b), a)
    };
    g.partition = function (b, a, c) {
        return [O(a, c)(u(b)), O(fc(a, c))(u(b))]
    };
    g.race = function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        b = Z(b);
        return 1 === b.length ? u(b[0]) : new q(gc(b))
    };
    g.range = function (b, a, c) {
        null == a && (a = b, b = 0);
        if (0 >= a) return M;
        var d = a + b;
        return new q(c ? function (a) {
            var e = b;
            return c.schedule(function () {
                e < d ? (a.next(e++), this.schedule()) : a.complete()
            })
        } : function (a) {
            for (var c = b; c < d && !a.closed;) a.next(c++);
            a.complete()
        })
    };
    g.throwError = Vb;
    g.timer = Y;
    g.using = function (b, a) {
        return new q(function (c) {
            var d = b(), e = a(d);
            (e ? u(e) : M).subscribe(c);
            return function () {
                d && d.unsubscribe()
            }
        })
    };
    g.zip = gb;
    g.scheduled = Ub;
    g.EMPTY = M;
    g.NEVER = Td;
    g.config = T;
    g.audit = hb;
    g.auditTime = hc;
    g.buffer = ic;
    g.bufferCount = jc;
    g.bufferTime = kc;
    g.bufferToggle = lc;
    g.bufferWhen =
        mc;
    g.catchError = ib;
    g.combineAll = Ia;
    g.combineLatestAll = Ia;
    g.combineLatestWith = pc;
    g.concatAll = Ha;
    g.concatMap = Ja;
    g.concatMapTo = qc;
    g.concatWith = sc;
    g.connect = Ka;
    g.count = tc;
    g.debounce = uc;
    g.debounceTime = vc;
    g.defaultIfEmpty = ua;
    g.delay = wc;
    g.delayWhen = La;
    g.dematerialize = xc;
    g.distinct = yc;
    g.distinctUntilChanged = nb;
    g.distinctUntilKeyChanged = zc;
    g.elementAt = Ac;
    g.endWith = Bc;
    g.every = Cc;
    g.exhaust = Ma;
    g.exhaustAll = Ma;
    g.exhaustMap = pb;
    g.expand = Dc;
    g.filter = O;
    g.finalize = Ec;
    g.find = Fc;
    g.findIndex = Hc;
    g.first = Ic;
    g.groupBy = Jc;
    g.ignoreElements = lb;
    g.isEmpty = Kc;
    g.last = Lc;
    g.map = N;
    g.mapTo = mb;
    g.materialize = Mc;
    g.max = Nc;
    g.mergeAll = ra;
    g.flatMap = H;
    g.mergeMap = H;
    g.mergeMapTo = Oc;
    g.mergeScan = Pc;
    g.mergeWith = Rc;
    g.min = Sc;
    g.multicast = Oa;
    g.observeOn = pa;
    g.pairwise = Tc;
    g.pluck = Uc;
    g.publish = Vc;
    g.publishBehavior = Wc;
    g.publishLast = Yc;
    g.publishReplay = Zc;
    g.raceWith = rb;
    g.reduce = ga;
    g.repeat = $c;
    g.repeatWhen = ad;
    g.retry = bd;
    g.retryWhen = cd;
    g.refCount = Wa;
    g.sample = sb;
    g.sampleTime = dd;
    g.scan = tb;
    g.sequenceEqual = ed;
    g.share = ub;
    g.shareReplay = fd;
    g.single = gd;
    g.skip =
        jd;
    g.skipLast = kd;
    g.skipUntil = ld;
    g.skipWhile = md;
    g.startWith = nd;
    g.subscribeOn = qa;
    g.switchAll = od;
    g.switchMap = ia;
    g.switchMapTo = pd;
    g.switchScan = qd;
    g.take = aa;
    g.takeLast = qb;
    g.takeUntil = rd;
    g.takeWhile = sd;
    g.tap = td;
    g.throttle = wb;
    g.throttleTime = vd;
    g.throwIfEmpty = va;
    g.timeInterval = wd;
    g.timeout = bb;
    g.timeoutWith = xd;
    g.timestamp = yd;
    g.toArray = jb;
    g.window = zd;
    g.windowCount = Ad;
    g.windowTime = Bd;
    g.windowToggle = Cd;
    g.windowWhen = Dd;
    g.withLatestFrom = Ed;
    g.zipAll = Fd;
    g.zipWith = Hd;
    Object.defineProperty(g, "__esModule", {value: !0})
});
//# sourceMappingURL=rxjs.umd.min.js.map
