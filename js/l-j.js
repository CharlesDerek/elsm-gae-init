/* ! Webflow: Front-end site library @license MIT Inline scripts may access the
 * api using an async handler:   var Webflow = Webflow || [];
 * Webflow.push(readyFunction);
 */
!function (t) {
    var e = {};
    function n(i) {
        if (e[i]) 
            return e[i].exports;
        var r = e[i] = {
            exports: {},
            i      : i,
            l      : !1
        };
        return t[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = t,
    n.c = e,
    n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable  : !0,
            get         : i
        })
    },
    n.n = function (t) {
        var e = t && t.__esModule
            ? function () {
                return t.default
            }
            : function () {
                return t
            };
        return n.d(e, "a", e),
        e
    },
    n.o = function (t, e) {
        return Object
            .prototype
            .hasOwnProperty
            .call(t, e)
    },
    n.p = "",
    n(n.s = 4)
}([
    function (t, e, n) {
        var i = {},
            r = {},
            o = [],
            a = window.Webflow || [],
            s = window.jQuery,
            u = s(window),
            c = s(document),
            l = s.isFunction,
            f = i._ = n(6),
            d = i.tram = n(2) && s.tram,
            h = !1,
            p = !1;
        function v(t) {
            i.env() && (
                l(t.design) && u.on("__wf_design", t.design),
                l(t.preview) && u.on("__wf_preview", t.preview)
            ),
            l(t.destroy) && u.on("__wf_destroy", t.destroy),
            t.ready && l(t.ready) && function (t) {
                if (h) 
                    return void t.ready();
                if (f.contains(o, t.ready)) 
                    return;
                o.push(t.ready)
            }(t)
        }
        function m(t) {
            l(t.design) && u.off("__wf_design", t.design),
            l(t.preview) && u.off("__wf_preview", t.preview),
            l(t.destroy) && u.off("__wf_destroy", t.destroy),
            t.ready && l(t.ready) && function (t) {
                o = f.filter(o, function (e) {
                    return e !== t.ready
                })
            }(t)
        }
        d.config.hideBackface  = !1,
        d.config.keepInherited = !0,
        i.define               = function (t, e, n) {
            r[t] && m(r[t]);
            var i = r[t] = e(s, f, n) || {};
            return v(i),
            i
        },
        i.require              = function (t) {
            return r[t]
        },
        i.push                 = function (t) {
            h
                ? l(t) && t()
                : a.push(t)
        },
        i.env                  = function (t) {
            var e = window.__wf_design,
                n = void 0 !== e;
            return t
                ? "design" === t
                    ? n && e
                    : "preview" === t
                        ? n && !e
                        : "slug" === t
                            ? n && window.__wf_slug
                            : "editor" === t
                                ? window.WebflowEditor
                                : "test" === t
                                    ? window.__wf_test
                                    : "frame" === t
                                        ? window !== window.top
                                        : void 0
                : n
        };
        var g,
            w = navigator
                .userAgent
                .toLowerCase(),
            b = i.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            y = i.env.chrome = /chrome/.test(w) && /Google/.test(navigator.vendor) && parseInt(
                w.match(/chrome\/(\d+)\./)[1],
                10
            ),
            x = i.env.ios = /(ipod|iphone|ipad)/.test(w);
        i.env.safari = /safari/.test(w) && !y && !x,
        b && c.on("touchstart mousedown", function (t) {
            g = t.target
        }),
        i.validClick = b
            ? function (t) {
                return t === g || s.contains(t, g)
            }
            : function () {
                return !0
            };
        var k,
            _ = "resize.webflow orientationchange.webflow load.webflow";
        function T(t, e) {
            var n = [],
                i = {};
            return i.up = f.throttle(function (t) {
                f.each(n, function (e) {
                    e(t)
                })
            }),
            t && e && t.on(e, i.up),
            i.on        = function (t) {
                "function" == typeof t && (f.contains(n, t) || n.push(t))
            },
            i.off       = function (t) {
                n = arguments.length
                    ? f.filter(n, function (e) {
                        return e !== t
                    })
                    : []
            },
            i
        }
        function O(t) {
            l(t) && t()
        }
        function E() {
            k && (k.reject(), u.off("load", k.resolve)),
            k = new s.Deferred,
            u.on("load", k.resolve)
        }
        i.resize   = T(u, _),
        i.scroll   = T(
            u,
            "scroll.webflow resize.webflow orientationchange.webflow load.webflow"
        ),
        i.redraw   = T(),
        i.location = function (t) {
            window.location = t
        },
        i.env() && (i.location = function () {}),
        i.ready   = function () {
            h = !0,
            p
                ? (p = !1, f.each(r, v))
                : f.each(o, O),
            f.each(a, O),
            i
                .resize
                .up()
        },
        i.load    = function (t) {
            k.then(t)
        },
        i.destroy = function (t) {
            t = t || {},
            p = !0,
            u.triggerHandler("__wf_destroy"),
            null != t.domready && (h = t.domready),
            f.each(r, m),
            i
                .resize
                .off(),
            i
                .scroll
                .off(),
            i
                .redraw
                .off(),
            o = [],
            a = [],
            "pending" === k.state() && E()
        },
        s(i.ready),
        E(),
        t.exports = window.Webflow = i
    },
    function (t, e, n) {
        "use strict";
        var i = n(3);
        function r(t, e) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(e, !0, !0, null),
            t.dispatchEvent(n)
        }
        var o = window.jQuery,
            a = {},
            s = {
                intro: function (t, e) {
                    i
                        .triggers
                        .intro(t, e),
                    r(e, "COMPONENT_ACTIVE")
                },
                outro: function (t, e) {
                    i
                        .triggers
                        .outro(t, e),
                    r(e, "COMPONENT_INACTIVE")
                },
                reset: function (t, e) {
                    i
                        .triggers
                        .reset(t, e)
                }
            };
        a.triggers = {},
        a.types    = {
            INTRO: "w-ix-intro.w-ix",
            OUTRO: "w-ix-outro.w-ix"
        },
        o.extend(a.triggers, s),
        t.exports = a
    },
    function (t, e) {
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t
            }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                    ? "symbol"
                    : typeof t
            };
        window.tram = function (t) {
            function e(t, e) {
                return (new L.Bare).init(t, e)
            }
            function i(t) {
                return t.replace(/[A-Z]/g, function (t) {
                    return "-" + t.toLowerCase()
                })
            }
            function r(t) {
                var e = parseInt(t.slice(1), 16);
                return [
                    e >> 16 & 255,
                    e >> 8 & 255,
                    255 & e
                ]
            }
            function o(t, e, n) {
                return "#" + (
                    1 << 24 | t << 16 | e << 8 | n
                )
                    .toString(16)
                    .slice(1)
            }
            function a() {}
            function s(t, e, n) {
                c("Units do not match [" + t + "]: " + e + ", " + n)
            }
            function u(t, e, n) {
                if (void 0 !== e && (n = e), void 0 === t) 
                    return n;
                var i = n;
                return Q.test(t) || !V.test(t)
                    ? i = parseInt(t, 10)
                    : V.test(t) && (i = 1e3 * parseFloat(t)),
                0 > i && (i = 0),
                i == i
                    ? i
                    : n
            }
            function c(t) {
                W.debug && window && window
                    .console
                    .warn(t)
            }
            var l = function (t, e, i) {
                    function r(t) {
                        return "object" == (
                            void 0 === t
                                ? "undefined"
                                : n(t)
                        )
                    }
                    function o(t) {
                        return "function" == typeof t
                    }
                    function a() {}
                    return function n(s, u) {
                        function c() {
                            var t = new l;
                            return o(t.init) && t
                                .init
                                .apply(t, arguments),
                            t
                        }
                        function l() {}
                        u === i && (u = s, s = Object),
                        c.Bare = l;
                        var f,
                            d = a[t] = s[t],
                            h = l[t] = c[t] = new a;
                        return h.constructor = c,
                        c.mixin              = function (e) {
                            return l[t] = c[t] = n(c, e)[t],
                            c
                        },
                        c.open               = function (t) {
                            if (
                                f       = {},
                                o(t)
                                    ? f = t.call(c, h, d, c, s)
                                    : r(t) && (f = t),
                                r(f)
                            ) 
                                for (var n in f) 
                                    e.call(f, n) && (h[n] = f[n]);
                        return o(h.init) || (h.init = s),
                            c
                        },
                        c.open(u)
                    }
                }("prototype", {}.hasOwnProperty),
                f = {
                    "ease-in"          : [
                        "ease-in",
                        function (t, e, n, i) {
                            var r = (t /= i) * t,
                                o = r * t;
                            return e + n * (-1 * o * r + 3 * r * r + -3 * o + 2 * r)
                        }
                    ],
                    "ease-in-back"     : [
                        "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                        function (t, e, n, i, r) {
                            return void 0 === r && (r = 1.70158),
                            n * (t /= i) * t * ((r + 1) * t - r) + e
                        }
                    ],
                    "ease-in-circ"     : [
                        "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                        function (t, e, n, i) {
                            return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e
                        }
                    ],
                    "ease-in-cubic"    : [
                        "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                        function (t, e, n, i) {
                            return n * (t /= i) * t * t + e
                        }
                    ],
                    "ease-in-expo"     : [
                        "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                        function (t, e, n, i) {
                            return 0 === t
                                ? e
                                : n * Math.pow(2, 10 * (t / i - 1)) + e
                        }
                    ],
                    "ease-in-out"      : [
                        "ease-in-out",
                        function (t, e, n, i) {
                            var r = (t /= i) * t,
                                o = r * t;
                            return e + n * (2 * o * r + -5 * r * r + 2 * o + 2 * r)
                        }
                    ],
                    "ease-in-out-back" : [
                        "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                        function (t, e, n, i, r) {
                            return void 0 === r && (r = 1.70158),
                            (t /= i / 2) < 1
                                ? n / 2 * t * t * ((1 + (r *= 1.525)) * t - r) + e
                                : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e
                        }
                    ],
                    "ease-in-out-circ" : [
                        "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                        function (t, e, n, i) {
                            return (t /= i / 2) < 1
                                ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e
                                : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                        }
                    ],
                    "ease-in-out-cubic": [
                        "cubic-bezier(0.645, 0.045, 0.355, 1)",
                        function (t, e, n, i) {
                            return (t /= i / 2) < 1
                                ? n / 2 * t * t * t + e
                                : n / 2 * ((t -= 2) * t * t + 2) + e
                        }
                    ],
                    "ease-in-out-expo" : [
                        "cubic-bezier(1, 0, 0, 1)",
                        function (t, e, n, i) {
                            return 0 === t
                                ? e
                                : t === i
                                    ? e + n
                                    : (t /= i / 2) < 1
                                        ? n / 2 * Math.pow(2, 10 * (t - 1)) + e
                                        : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                        }
                    ],
                    "ease-in-out-quad" : [
                        "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                        function (t, e, n, i) {
                            return (t /= i / 2) < 1
                                ? n / 2 * t * t + e
                                : -n / 2 * (--t * (t - 2) - 1) + e
                        }
                    ],
                    "ease-in-out-quart": [
                        "cubic-bezier(0.770, 0, 0.175, 1)",
                        function (t, e, n, i) {
                            return (t /= i / 2) < 1
                                ? n / 2 * t * t * t * t + e
                                : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                        }
                    ],
                    "ease-in-out-quint": [
                        "cubic-bezier(0.860, 0, 0.070, 1)",
                        function (t, e, n, i) {
                            return (t /= i / 2) < 1
                                ? n / 2 * t * t * t * t * t + e
                                : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                        }
                    ],
                    "ease-in-out-sine" : [
                        "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                        function (t, e, n, i) {
                            return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e
                        }
                    ],
                    "ease-in-quad"     : [
                        "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                        function (t, e, n, i) {
                            return n * (t /= i) * t + e
                        }
                    ],
                    "ease-in-quart"    : [
                        "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                        function (t, e, n, i) {
                            return n * (t /= i) * t * t * t + e
                        }
                    ],
                    "ease-in-quint"    : [
                        "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                        function (t, e, n, i) {
                            return n * (t /= i) * t * t * t * t + e
                        }
                    ],
                    "ease-in-sine"     : [
                        "cubic-bezier(0.470, 0, 0.745, 0.715)",
                        function (t, e, n, i) {
                            return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
                        }
                    ],
                    "ease-out"         : [
                        "ease-out",
                        function (t, e, n, i) {
                            var r = (t /= i) * t,
                                o = r * t;
                            return e + n * (.3 * o * r + -1.6 * r * r + 2.2 * o + -1.8 * r + 1.9 * t)
                        }
                    ],
                    "ease-out-back"    : [
                        "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                        function (t, e, n, i, r) {
                            return void 0 === r && (r = 1.70158),
                            n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
                        }
                    ],
                    "ease-out-circ"    : [
                        "cubic-bezier(0.075, 0.820, 0.165, 1)",
                        function (t, e, n, i) {
                            return n * Math.sqrt(1 - (t = t / i - 1) * t) + e
                        }
                    ],
                    "ease-out-cubic"   : [
                        "cubic-bezier(0.215, 0.610, 0.355, 1)",
                        function (t, e, n, i) {
                            return n * ((t = t / i - 1) * t * t + 1) + e
                        }
                    ],
                    "ease-out-expo"    : [
                        "cubic-bezier(0.190, 1, 0.220, 1)",
                        function (t, e, n, i) {
                            return t === i
                                ? e + n
                                : n * (1 - Math.pow(2, -10 * t / i)) + e
                        }
                    ],
                    "ease-out-quad"    : [
                        "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        function (t, e, n, i) {
                            return -n * (t /= i) * (t - 2) + e
                        }
                    ],
                    "ease-out-quart"   : [
                        "cubic-bezier(0.165, 0.840, 0.440, 1)",
                        function (t, e, n, i) {
                            return -n * ((t = t / i - 1) * t * t * t - 1) + e
                        }
                    ],
                    "ease-out-quint"   : [
                        "cubic-bezier(0.230, 1, 0.320, 1)",
                        function (t, e, n, i) {
                            return n * ((t = t / i - 1) * t * t * t * t + 1) + e
                        }
                    ],
                    "ease-out-sine"    : [
                        "cubic-bezier(0.390, 0.575, 0.565, 1)",
                        function (t, e, n, i) {
                            return n * Math.sin(t / i * (Math.PI / 2)) + e
                        }
                    ],
                    ease               : [
                        "ease",
                        function (t, e, n, i) {
                            var r = (t /= i) * t,
                                o = r * t;
                            return e + n * (-2.75 * o * r + 11 * r * r + -15.5 * o + 8 * r + .25 * t)
                        }
                    ],
                    linear             : [
                        "linear",
                        function (t, e, n, i) {
                            return n * t / i + e
                        }
                    ]
                },
                d = {
                    "ease-in-back"    : "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
                    "ease-out-back"   : "cubic-bezier(0.175, 0.885, 0.320, 1)"
                },
                h = document,
                p = window,
                v = "bkwld-tram",
                m = /[\-\.0-9]/g,
                g = /[A-Z]/,
                w = "number",
                b = /^(rgb|#)/,
                y = /(em|cm|mm|in|pt|pc|px)$/,
                x = /(em|cm|mm|in|pt|pc|px|%)$/,
                k = /(deg|rad|turn)$/,
                _ = "unitless",
                T = /(all|none) 0s ease 0s/,
                O = /^(width|height)$/,
                E = " ",
                C = h.createElement("a"),
                z = [
                    "Webkit", "Moz", "O", "ms"
                ],
                A = [
                    "-webkit-", "-moz-", "-o-", "-ms-"
                ],
                I = function (t) {
                    if (t in C.style) 
                        return {css: t, dom: t};
                    var e,
                        n,
                        i = "",
                        r = t.split("-");
                    for (e = 0; e < r.length; e++) 
                        i += r[e]
                            .charAt(0)
                            .toUpperCase() + r[e]
                            .slice(1);
                    for (e = 0; e < z.length; e++) 
                        if ((n = z[e] + i) in C.style) 
                            return {
                                css: A[e] + t,
                                dom: n
                            }
                        },
                j = e.support = {
                    backface  : I("backface-visibility"),
                    bind      : Function.prototype.bind,
                    timing    : I("transition-timing-function"),
                    transform : I("transform"),
                    transition: I("transition")
                };
            if (j.transition) {
                var S = j.timing.dom;
                if (C.style[S] = f["ease-in-back"][0], !C.style[S]) 
                    for (var M in d) 
                        f[M][0] = d[M]
            }
            var D = e.frame = function () {
                    var t = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
                    return t && j.bind
                        ? t.bind(p)
                        : function (t) {
                            p.setTimeout(t, 16)
                        }
                }(),
                $ = e.now = function () {
                    var t = p.performance,
                        e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                    return e && j.bind
                        ? e.bind(t)
                        : Date.now || function () {
                            return + new Date
                        }
                    }(),
                q = l(function (e) {
                    function r(t, e) {
                        var n = function (t) {
                                for (
                                    var e = -1,
                                    n     = t
                                        ? t.length
                                        : 0,
                                    i     = []; ++e < n;
                                ) {
                                    var r = t[e];
                                    r && i.push(r)
                                }
                                return i
                            }(("" + t).split(E)),
                            i = n[0];
                        e = e || {};
                        var r = G[i];
                        if (!r) 
                            return c("Unsupported property: " + i);
                        if (!e.weak || !this.props[i]) {
                            var o = r[0],
                                a = this.props[i];
                            return a || (a = this.props[i] = new o.Bare),
                            a.init(this.$el, n, r, e),
                            a
                        }
                    }
                    function o(t, e, i) {
                        if (t) {
                            var o = void 0 === t
                                ? "undefined"
                                : n(t);
                            if (
                                e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1),
                                "number" == o && e
                            ) 
                                return this.timer = new U({complete: a, context: this, duration: t}),
                                void(this.active = !0);
                            if ("string" == o && e) {
                                switch (t) {
                                    case "hide":
                                        l.call(this);
                                        break;
                                    case "stop":
                                        s.call(this);
                                        break;
                                    case "redraw":
                                        f.call(this);
                                        break;
                                    default:
                                        r.call(this, t, i && i[1])
                                }
                                return a.call(this)
                            }
                            if ("function" == o) 
                                return void t.call(this, this);
                            if ("object" == o) {
                                var c = 0;
                                h.call(this, t, function (t, e) {
                                    t.span > c && (c = t.span),
                                    t.stop(),
                                    t.animate(e)
                                }, function (t) {
                                    "wait" in t && (c = u(t.wait, 0))
                                }),
                                d.call(this),
                                c > 0 && (
                                    this.timer  = new U({context: this, duration: c}),
                                    this.active = !0,
                                    e && (this.timer.complete = a)
                                );
                                var p = this,
                                    v = !1,
                                    m = {};
                                D(function () {
                                    h.call(p, t, function (t) {
                                        t.active && (v = !0, m[t.name] = t.nextStyle)
                                    }),
                                    v && p
                                        .$el
                                        .css(m)
                                })
                            }
                        }
                    }
                    function a() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var t = this
                                .queue
                                .shift();
                            o.call(this, t.options, !0, t.args)
                        }
                    }
                    function s(t) {
                        var e;
                        this.timer && this
                            .timer
                            .destroy(),
                        this.queue  = [],
                        this.active = !1,
                        "string" == typeof t
                            ? (e = {})[t] = 1
                            : e = "object" == (
                                void 0 === t
                                    ? "undefined"
                                    : n(t)
                            ) && null != t
                                ? t
                                : this.props,
                        h.call(this, e, p),
                        d.call(this)
                    }
                    function l() {
                        s.call(this),
                        this.el.style.display = "none"
                    }
                    function f() {
                        this.el.offsetHeight
                    }
                    function d() {
                        var t,
                            e,
                            n = [];
                        for (t in this.upstream && n.push(this.upstream), this.props) 
                            (e = this.props[t]).active && n.push(e.string);
                        n = n.join(","),
                        this.style !== n && (this.style = n, this.el.style[j.transition.dom] = n)
                    }
                    function h(t, e, n) {
                        var o,
                            a,
                            s,
                            u,
                            c = e !== p,
                            l = {};
                        for (o in t) 
                            s = t[o],
                            o in J
                                ? (l.transform || (l.transform = {}), l.transform[o] = s)
                                : (
                                    g.test(o) && (o = i(o)),
                                    o in G
                                        ? l[o] = s
                                        : (u || (u = {}), u[o] = s)
                                );
                        for (o in l) {
                            if (s = l[o], !(a = this.props[o])) {
                                if (!c) 
                                    continue;
                                a = r.call(this, o)
                            }
                            e.call(this, a, s)
                        }
                        n && u && n.call(this, u)
                    }
                    function p(t) {
                        t.stop()
                    }
                    function m(t, e) {
                        t.set(e)
                    }
                    function w(t) {
                        this
                            .$el
                            .css(t)
                    }
                    function b(t, n) {
                        e[t] = function () {
                            return this.children
                                ? function (t, e) {
                                    var n,
                                        i = this.children.length;
                                    for (n = 0; i > n; n++) 
                                        t.apply(this.children[n], e);
                                    return this
                                }.call(this, n, arguments)
                                : (this.el && n.apply(this, arguments), this)
                        }
                    }
                    e.init = function (e) {
                        if (
                            this.$el    = t(e),
                            this.el     = this.$el[0],
                            this.props  = {},
                            this.queue  = [],
                            this.style  = "",
                            this.active = !1,
                            W.keepInherited && !W.fallback
                        ) {
                            var n = Z(this.el, "transition");
                            n && !T.test(n) && (this.upstream = n)
                        }
                        j.backface && W.hideBackface && X(this.el, j.backface.css, "hidden")
                    },
                    b("add", r),
                    b("start", o),
                    b("wait", function (t) {
                        t = u(t, 0),
                        this.active
                            ? this
                                .queue
                                .push({options: t})
                            : (
                                this.timer  = new U({complete: a, context: this, duration: t}),
                                this.active = !0
                            )
                    }),
                    b("then", function (t) {
                        return this.active
                            ? (
                                this.queue.push({args: arguments, options: t}),
                                void(this.timer.complete = a)
                            )
                            : c("No active transition timer. Use start() or wait() before then().")
                    }),
                    b("next", a),
                    b("stop", s),
                    b("set", function (t) {
                        s.call(this, t),
                        h.call(this, t, m, w)
                    }),
                    b("show", function (t) {
                        "string" != typeof t && (t = "block"),
                        this.el.style.display = t
                    }),
                    b("hide", l),
                    b("redraw", f),
                    b("destroy", function () {
                        s.call(this),
                        t.removeData(this.el, v),
                        this.$el = this.el = null
                    })
                }),
                L = l(q, function (e) {
                    function n(e, n) {
                        var i = t.data(e, v) || t.data(e, v, new q.Bare);
                        return i.el || i.init(e),
                        n
                            ? i.start(n)
                            : i
                    }
                    e.init = function (e, i) {
                        var r = t(e);
                        if (!r.length) 
                            return this;
                        if (1 === r.length) 
                            return n(r[0], i);
                        var o = [];
                        return r.each(function (t, e) {
                            o.push(n(e, i))
                        }),
                        this.children = o,
                        this
                    }
                }),
                N = l(function (t) {
                    function e() {
                        var t = this.get();
                        this.update("auto");
                        var e = this.get();
                        return this.update(t),
                        e
                    }
                    function i(t) {
                        var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                        return (
                            e
                                ? o(e[1], e[2], e[3])
                                : t
                        ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var r = 500,
                        a = "ease",
                        s = 0;
                    t.init       = function (t, e, n, i) {
                        this.$el = t,
                        this.el  = t[0];
                        var o = e[0];
                        n[2] && (o = n[2]),
                        Y[o] && (o = Y[o]),
                        this.name          = o,
                        this.type          = n[1],
                        this.duration      = u(e[1], this.duration, r),
                        this.ease          = function (t, e, n) {
                            return void 0 !== e && (n = e),
                            t in f
                                ? t
                                : n
                        }(e[2], this.ease, a),
                        this.delay         = u(e[3], this.delay, s),
                        this.span          = this.duration + this.delay,
                        this.active        = !1,
                        this.nextStyle     = null,
                        this.auto          = O.test(this.name),
                        this.unit          = i.unit || this.unit || W.defaultUnit,
                        this.angle         = i.angle || this.angle || W.defaultAngle,
                        W.fallback || i.fallback
                            ? this.animate = this.fallback
                            : (
                                this.animate = this.transition,
                                this.string  = this.name + E + this.duration + "ms" + (
                                    "ease" != this.ease
                                        ? E + f[this.ease][0]
                                        : ""
                                ) + (
                                    this.delay
                                        ? E + this.delay + "ms"
                                        : ""
                                )
                            )
                    },
                    t.set        = function (t) {
                        t = this.convert(t, this.type),
                        this.update(t),
                        this.redraw()
                    },
                    t.transition = function (t) {
                        this.active    = !0,
                        t              = this.convert(t, this.type),
                        this.auto && (
                            "auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()),
                            "auto" == t && (t = e.call(this))
                        ),
                        this.nextStyle = t
                    },
                    t.fallback   = function (t) {
                        var n = this
                            .el
                            .style[this.name] || this.convert(this.get(), this.type);
                        t          = this.convert(t, this.type),
                        this.auto && (
                            "auto" == n && (n = this.convert(this.get(), this.type)),
                            "auto" == t && (t = e.call(this))
                        ),
                        this.tween = new B({
                            context : this,
                            delay   : this.delay,
                            duration: this.duration,
                            ease    : this.ease,
                            from    : n,
                            to      : t,
                            update  : this.update
                        })
                    },
                    t.get        = function () {
                        return Z(this.el, this.name)
                    },
                    t.update     = function (t) {
                        X(this.el, this.name, t)
                    },
                    t.stop       = function () {
                        (this.active || this.nextStyle) && (
                            this.active    = !1,
                            this.nextStyle = null,
                            X(this.el, this.name, this.get())
                        );
                        var t = this.tween;
                        t && t.context && t.destroy()
                    },
                    t.convert    = function (t, e) {
                        if ("auto" == t && this.auto) 
                            return t;
                        var r,
                            o = "number" == typeof t,
                            a = "string" == typeof t;
                        switch (e) {
                            case w:
                                if (o) 
                                    return t;
                                if (a && "" === t.replace(m, "")) 
                                    return + t;
                                r = "number(unitless)";
                                break;
                            case b:
                                if (a) {
                                    if ("" === t && this.original) 
                                        return this.original;
                                    if (e.test(t)) 
                                        return "#" == t.charAt(0) && 7 == t.length
                                            ? t
                                            : i(t)
                                    }
                                r = "hex or rgb string";
                                break;
                            case y:
                                if (o) 
                                    return t + this.unit;
                                if (a && e.test(t)) 
                                    return t;
                                r = "number(px) or string(unit)";
                                break;
                            case x:
                                if (o) 
                                    return t + this.unit;
                                if (a && e.test(t)) 
                                    return t;
                                r = "number(px) or string(unit or %)";
                                break;
                            case k:
                                if (o) 
                                    return t + this.angle;
                                if (a && e.test(t)) 
                                    return t;
                                r = "number(deg) or string(angle)";
                                break;
                            case _:
                                if (o) 
                                    return t;
                                if (a && x.test(t)) 
                                    return t;
                                r = "number(unitless) or string(unit or %)"
                        }
                        return function (t, e) {
                            c("Type warning: Expected: [" + t + "] Got: [" + (
                                void 0 === e
                                    ? "undefined"
                                    : n(e)
                            ) + "] " + e)
                        }(r, t),
                        t
                    },
                    t.redraw     = function () {
                        this.el.offsetHeight
                    }
                }),
                R = l(N, function (t, e) {
                    t.init = function () {
                        e
                            .init
                            .apply(this, arguments),
                        this.original || (this.original = this.convert(this.get(), b))
                    }
                }),
                F = l(N, function (t, e) {
                    t.init   = function () {
                        e
                            .init
                            .apply(this, arguments),
                        this.animate = this.fallback
                    },
                    t.get    = function () {
                        return this.$el[this.name]()
                    },
                    t.update = function (t) {
                        this.$el[this.name](t)
                    }
                }),
                P = l(N, function (t, e) {
                    function n(t, e) {
                        var n,
                            i,
                            r,
                            o,
                            a;
                        for (n in t) 
                            r = (o = J[n])[0],
                            i = o[1] || n,
                            a = this.convert(t[n], r),
                            e.call(this, i, a, r)
                    }
                    t.init       = function () {
                        e
                            .init
                            .apply(this, arguments),
                        this.current || (this.current = {}, J.perspective && W.perspective && (
                            this.current.perspective = W.perspective,
                            X(this.el, this.name, this.style(this.current)),
                            this.redraw()
                        ))
                    },
                    t.set        = function (t) {
                        n.call(this, t, function (t, e) {
                            this.current[t] = e
                        }),
                        X(this.el, this.name, this.style(this.current)),
                        this.redraw()
                    },
                    t.transition = function (t) {
                        var e = this.values(t);
                        this.tween = new H(
                            {current: this.current, delay: this.delay, duration: this.duration, ease: this.ease, values: e}
                        );
                        var n,
                            i = {};
                        for (n in this.current) 
                            i[n] = n in e
                                ? e[n]
                                : this.current[n];
                        this.active    = !0,
                        this.nextStyle = this.style(i)
                    },
                    t.fallback   = function (t) {
                        var e = this.values(t);
                        this.tween = new H({
                            context : this,
                            current : this.current,
                            delay   : this.delay,
                            duration: this.duration,
                            ease    : this.ease,
                            update  : this.update,
                            values  : e
                        })
                    },
                    t.update     = function () {
                        X(this.el, this.name, this.style(this.current))
                    },
                    t.style      = function (t) {
                        var e,
                            n = "";
                        for (e in t) 
                            n += e + "(" + t[e] + ") ";
                        return n
                    },
                    t.values     = function (t) {
                        var e,
                            i = {};
                        return n.call(this, t, function (t, n, r) {
                            i[t] = n,
                            void 0 === this.current[t] && (
                                e               = 0,
                                ~ t.indexOf("scale") && (e = 1),
                                this.current[t] = this.convert(e, r)
                            )
                        }),
                        i
                    }
                }),
                B = l(function (e) {
                    function n() {
                        var t,
                            e,
                            i,
                            r = u.length;
                        if (r) 
                            for (D(n), e = $(), t = r; t--;) 
                                (i = u[t]) && i.render(e)
                    }
                    var i = {
                        ease: f.ease[1],
                        from: 0,
                        to  : 1
                    };
                    e.init    = function (t) {
                        this.duration = t.duration || 0,
                        this.delay    = t.delay || 0;
                        var e = t.ease || i.ease;
                        f[e] && (e = f[e][1]),
                        "function" != typeof e && (e = i.ease),
                        this.ease     = e,
                        this.update   = t.update || a,
                        this.complete = t.complete || a,
                        this.context  = t.context || this,
                        this.name     = t.name;
                        var n = t.from,
                            r = t.to;
                        void 0 === n && (n = i.from),
                        void 0 === r && (r = i.to),
                        this.unit  = t.unit || "",
                        "number" == typeof n && "number" == typeof r
                            ? (this.begin = n, this.change = r - n)
                            : this.format(r, n),
                        this.value = this.begin + this.unit,
                        this.start = $(),
                        !1 !== t.autoplay && this.play()
                    },
                    e.play    = function () {
                        var t;
                        this.active || (
                            this.start || (this.start = $()),
                            this.active = !0,
                            t           = this,
                            1 === u.push(t) && D(n)
                        )
                    },
                    e.stop    = function () {
                        var e,
                            n,
                            i;
                        this.active && (
                            this.active = !1,
                            e           = this,
                            (i = t.inArray(e, u)) >= 0 && (n = u.slice(
                                i + 1
                            ), u.length = i, n.length && (u = u.concat(n)))
                        )
                    },
                    e.render  = function (t) {
                        var e,
                            n = t - this.start;
                        if (this.delay) {
                            if (n <= this.delay) 
                                return;
                            n -= this.delay
                        }
                        if (n < this.duration) {
                            var i = this.ease(n, 0, 1, this.duration);
                            return e   = this.startRGB
                                ? function (t, e, n) {
                                    return o(
                                        t[0] + n * (e[0] - t[0]),
                                        t[1] + n * (e[1] - t[1]),
                                        t[2] + n * (e[2] - t[2])
                                    )
                                }(this.startRGB, this.endRGB, i)
                                : function (t) {
                                    return Math.round(t * c) / c
                                }(this.begin + i * this.change),
                            this.value = e + this.unit,
                            void this
                                .update
                                .call(this.context, this.value)
                        }
                        e          = this.endHex || this.begin + this.change,
                        this.value = e + this.unit,
                        this
                            .update
                            .call(this.context, this.value),
                        this
                            .complete
                            .call(this.context),
                        this.destroy()
                    },
                    e.format  = function (t, e) {
                        if (e += "", "#" == (t += "").charAt(0)) 
                            return this.startRGB = r(e),
                            this.endRGB          = r(t),
                            this.endHex          = t,
                            this.begin           = 0,
                            void(this.change = 1);
                        if (!this.unit) {
                            var n = e.replace(m, "");
                            n !== t.replace(m, "") && s("tween", e, t),
                            this.unit = n
                        }
                        e           = parseFloat(e),
                        t           = parseFloat(t),
                        this.begin  = this.value = e,
                        this.change = t - e
                    },
                    e.destroy = function () {
                        this.stop(),
                        this.context = null,
                        this.ease    = this.update = this.complete = a
                    };
                    var u = [],
                        c = 1e3
                }),
                U = l(B, function (t) {
                    t.init   = function (t) {
                        this.duration = t.duration || 0,
                        this.complete = t.complete || a,
                        this.context  = t.context,
                        this.play()
                    },
                    t.render = function (t) {
                        t - this.start < this.duration || (
                            this.complete.call(this.context),
                            this.destroy()
                        )
                    }
                }),
                H = l(B, function (t, e) {
                    t.init    = function (t) {
                        var e,
                            n;
                        for (
                            e in this.context = t.context,
                            this.update       = t.update,
                            this.tweens       = [],
                            this.current      = t.current,
                            t.values
                        ) 
                            n = t.values[e],
                            this.current[e] !== n && this
                                .tweens
                                .push(new B({
                                    autoplay: !1,
                                    delay   : t.delay,
                                    duration: t.duration,
                                    ease    : t.ease,
                                    from    : this.current[e],
                                    name    : e,
                                    to      : n
                                }));
                        this.play()
                    },
                    t.render  = function (t) {
                        var e,
                            n,
                            i = !1;
                        for (e = this.tweens.length; e--;) 
                            (n = this.tweens[e]).context && (
                                n.render(t),
                                this.current[n.name] = n.value,
                                i                    = !0
                            );
                        return i
                            ? void(this.update && this.update.call(this.context))
                            : this.destroy()
                    },
                    t.destroy = function () {
                        if (e.destroy.call(this), this.tweens) {
                            var t;
                            for (t = this.tweens.length; t--;) 
                                this
                                    .tweens[t]
                                    .destroy();
                            this.tweens  = null,
                            this.current = null
                        }
                    }
                }),
                W = e.config = {
                    agentTests   : [],
                    debug        : !1,
                    defaultAngle : "deg",
                    defaultUnit  : "px",
                    fallback     : !j.transition,
                    hideBackface : !1,
                    keepInherited: !1,
                    perspective  : ""
                };
            e.fallback = function (t) {
                if (!j.transition) 
                    return W.fallback = !0;
                W
                    .agentTests
                    .push("(" + t + ")");
                var e = new RegExp(W.agentTests.join("|"), "i");
                W.fallback = e.test(navigator.userAgent)
            },
            e.fallback("6.0.[2-5] Safari"),
            e.tween   = function (t) {
                return new B(t)
            },
            e.delay   = function (t, e, n) {
                return new U({complete: e, context: n, duration: t})
            },
            t.fn.tram = function (t) {
                return e.call(null, this, t)
            };
            var X = t.style,
                Z = t.css,
                Y = {
                    transform: j.transform && j.transform.css
                },
                G = {
                    "border-bottom-color": [
                        R, b
                    ],
                    "border-bottom-width": [
                        N, y
                    ],
                    "border-color"       : [
                        R, b
                    ],
                    "border-left-color"  : [
                        R, b
                    ],
                    "border-left-width"  : [
                        N, y
                    ],
                    "border-right-color" : [
                        R, b
                    ],
                    "border-right-width" : [
                        N, y
                    ],
                    "border-spacing"     : [
                        N, y
                    ],
                    "border-top-color"   : [
                        R, b
                    ],
                    "border-top-width"   : [
                        N, y
                    ],
                    "border-width"       : [
                        N, y
                    ],
                    "font-size"          : [
                        N, x
                    ],
                    "letter-spacing"     : [
                        N, y
                    ],
                    "line-height"        : [
                        N, _
                    ],
                    "margin-bottom"      : [
                        N, y
                    ],
                    "margin-left"        : [
                        N, y
                    ],
                    "margin-right"       : [
                        N, y
                    ],
                    "margin-top"         : [
                        N, y
                    ],
                    "max-height"         : [
                        N, x
                    ],
                    "max-width"          : [
                        N, x
                    ],
                    "min-height"         : [
                        N, x
                    ],
                    "min-width"          : [
                        N, x
                    ],
                    "outline-color"      : [
                        R, b
                    ],
                    "outline-width"      : [
                        N, y
                    ],
                    "padding-bottom"     : [
                        N, y
                    ],
                    "padding-left"       : [
                        N, y
                    ],
                    "padding-right"      : [
                        N, y
                    ],
                    "padding-top"        : [
                        N, y
                    ],
                    "scroll-left"        : [
                        F, w, "scrollLeft"
                    ],
                    "scroll-top"         : [
                        F, w, "scrollTop"
                    ],
                    "text-indent"        : [
                        N, x
                    ],
                    "word-spacing"       : [
                        N, x
                    ],
                    background           : [
                        R, b, "background-color"
                    ],
                    bottom               : [
                        N, x
                    ],
                    color                : [
                        R, b
                    ],
                    height               : [
                        N, x
                    ],
                    left                 : [
                        N, x
                    ],
                    margin               : [
                        N, y
                    ],
                    opacity              : [
                        N, w
                    ],
                    padding              : [
                        N, y
                    ],
                    right                : [
                        N, x
                    ],
                    top                  : [
                        N, x
                    ],
                    width                : [N, x]
                },
                J = {};
            j.transform && (G.transform = [P], J = {
                rotate : [k],
                rotateX: [k],
                rotateY: [k],
                scale  : [w],
                scaleX : [w],
                scaleY : [w],
                skew   : [k],
                skewX  : [k],
                skewY  : [k],
                x      : [
                    x, "translateX"
                ],
                y      : [x, "translateY"]
            }),
            j.transform && j.backface && (J.z = [
                x, "translateZ"
            ], J.rotateZ = [k], J.scaleZ = [w], J.perspective = [y]);
            var Q = /ms/,
                V = /s|\./;
            return t.tram = e
        }(window.jQuery)
    },
    function (t, e, n) {
        "use strict";
        var i = window.jQuery,
            r = {},
            o = [],
            a = {
                intro: function (t, e) {
                    e.__wf_intro || (e.__wf_intro = !0, i(e).triggerHandler(r.types.INTRO))
                },
                outro: function (t, e) {
                    e.__wf_intro && (e.__wf_intro = null, i(e).triggerHandler(r.types.OUTRO))
                },
                reset: function (t, e) {
                    e.__wf_intro = null
                }
            };
        r.triggers = {},
        r.types    = {
            INTRO: "w-ix-intro.w-ix",
            OUTRO: "w-ix-outro.w-ix"
        },
        r.init     = function () {
            for (var t = o.length, e = 0; e < t; e++) {
                var n = o[e];
                n[0](0, n[1])
            }
            o = [],
            i.extend(r.triggers, a)
        },
        r.async    = function () {
            for (var t in a) {
                var e = a[t];
                a.hasOwnProperty(t) && (r.triggers[t] = function (t, n) {
                    o.push([e, n])
                })
            }
        },
        r.async (),
        t.exports = r
    },
    function (t, e, n) {
        n(5),
        n(7),
        n(8),
        n(9),
        n(11),
        n(12),
        n(13),
        n(14),
        n(15),
        n(16),
        n(17),
        t.exports = n(18)
    },
    function (t, e, n) {
        var i = n(0);
        i.define("brand", t.exports = function (t) {
            var e,
                n = {},
                r = document,
                o = t("html"),
                a = t("body"),
                s = ".w-webflow-badge",
                u = window.location,
                c = /PhantomJS/i.test(navigator.userAgent),
                l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
            function f() {
                var n = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || Boolean(
                    r.webkitFullscreenElement
                );
                t(e).attr(
                    "style",
                    n
                        ? "display: none !important;"
                        : ""
                )
            }
            function d() {
                var t = a.children(s),
                    n = t.length && t.get(0) === e,
                    r = i.env("editor");
                n
                    ? r && t.remove()
                    : (t.length && t.remove(), r || a.append(e))
            }
            return n.ready = function () {
                var n,
                    i,
                    a,
                    s = o.attr("data-wf-status"),
                    h = o.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(h) && u.hostname !== h && (s = !0),
                s && !c && (
                    e = e || (
                        n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                        i = t("<img>").attr(
                            "src",
                            "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg"
                        ).css({marginRight: "8px", width: "16px"}),
                        a = t("<img>").attr(
                            "src",
                            "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"
                        ),
                        n.append(i, a),
                        n[0]
                    ),
                    d(),
                    setTimeout(d, 500),
                    t(r).off(l, f).on(l, f)
                )
            },
            n
        })
    },
    function (t, e, n) {
        var i = window.$,
            r = n(2) && i.tram;
        /*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
        t.exports = function () {
            var t = {
                    VERSION: "1.6.0-Webflow"
                },
                e = {},
                n = Array.prototype,
                i = Object.prototype,
                o = Function.prototype,
                a = (n.push, n.slice),
                s = (n.concat, i.toString, i.hasOwnProperty),
                u = n.forEach,
                c = n.map,
                l = (n.reduce, n.reduceRight, n.filter),
                f = (n.every, n.some),
                d = n.indexOf,
                h = (n.lastIndexOf, Array.isArray, Object.keys),
                p = (o.bind, t.each = t.forEach = function (n, i, r) {
                    if (null == n) 
                        return n;
                    if (u && n.forEach === u) 
                        n.forEach(i, r);
                    else if (n.length ===+ n.length) {
                        for (var o = 0, a = n.length; o < a; o++) 
                            if (i.call(r, n[o], o, n) === e) 
                                return
                        }
                    else {
                        var s = t.keys(n);
                        for (o = 0, a = s.length; o < a; o++) 
                            if (i.call(r, n[s[o]], s[o], n) === e) 
                                return
                    }
                    return n
                });
            t.map    = t.collect = function (t, e, n) {
                var i = [];
                return null == t
                    ? i
                    : c && t.map === c
                        ? t.map(e, n)
                        : (p(t, function (t, r, o) {
                            i.push(e.call(n, t, r, o))
                        }), i)
            },
            t.find   = t.detect = function (t, e, n) {
                var i;
                return v(t, function (t, r, o) {
                    if (e.call(n, t, r, o)) 
                        return i = t,
                        !0
                }),
                i
            },
            t.filter = t.select = function (t, e, n) {
                var i = [];
                return null == t
                    ? i
                    : l && t.filter === l
                        ? t.filter(e, n)
                        : (p(t, function (t, r, o) {
                            e.call(n, t, r, o) && i.push(t)
                        }), i)
            };
            var v = t.some = t.any = function (n, i, r) {
                i || (i = t.identity);
                var o = !1;
                return null == n
                    ? o
                    : f && n.some === f
                        ? n.some(i, r)
                        : (p(n, function (t, n, a) {
                            if (o || (o = i.call(r, t, n, a))) 
                                return e
                        }), !!o)
            };
            t.contains         = t.include = function (t, e) {
                return null != t && (
                    d && t.indexOf === d
                        ? -1 != t.indexOf(e)
                        : v(t, function (t) {
                            return t === e
                        })
                )
            },
            t.delay            = function (t, e) {
                var n = a.call(arguments, 2);
                return setTimeout(function () {
                    return t.apply(null, n)
                }, e)
            },
            t.defer            = function (e) {
                return t
                    .delay
                    .apply(t, [e, 1].concat(a.call(arguments, 1)))
            },
            t.throttle         = function (t) {
                var e,
                    n,
                    i;
                return function () {
                    e || (e = !0, n = arguments, i = this, r.frame(function () {
                        e = !1,
                        t.apply(i, n)
                    }))
                }
            },
            t.debounce         = function (e, n, i) {
                var r,
                    o,
                    a,
                    s,
                    u,
                    c = function c() {
                        var l = t.now() - s;
                        l < n
                            ? r = setTimeout(c, n - l)
                            : (r = null, i || (u = e.apply(a, o), a = o = null))
                    };
                return function () {
                    a = this,
                    o = arguments,
                    s = t.now();
                    var l = i && !r;
                    return r || (r = setTimeout(c, n)),
                    l && (u = e.apply(a, o), a = o = null),
                    u
                }
            },
            t.defaults         = function (e) {
                if (!t.isObject(e)) 
                    return e;
                for (var n = 1, i = arguments.length; n < i; n++) {
                    var r = arguments[n];
                    for (var o in r) 
                        void 0 === e[o] && (e[o] = r[o])
                }
                return e
            },
            t.keys             = function (e) {
                if (!t.isObject(e)) 
                    return [];
                if (h) 
                    return h(e);
                var n = [];
                for (var i in e) 
                    t.has(e, i) && n.push(i);
                return n
            },
            t.has              = function (t, e) {
                return s.call(t, e)
            },
            t.isObject         = function (t) {
                return t === Object(t)
            },
            t.now              = Date.now || function () {
                return (new Date).getTime()
            },
            t.templateSettings = {
                escape     : /<%-([\s\S]+?)%>/g,
                evaluate   : /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g
            };
            var m = /(.)^/,
                g = {
                    "'"     : "'",
                    "\\"    : "\\",
                    "\n"    : "n",
                    "\r"    : "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                w = /\\|'|\r|\n|\u2028|\u2029/g,
                b = function (t) {
                    return "\\" + g[t]
                };
            return t.template = function (e, n, i) {
                !n && i && (n = i),
                n = t.defaults({}, n, t.templateSettings);
                var r = RegExp([
                        (n.escape || m).source,
                        (n.interpolate || m).source,
                        (n.evaluate || m).source
                    ].join("|") + "|$", "g"),
                    o = 0,
                    a = "__p+='";
                e.replace(r, function (t, n, i, r, s) {
                    return a += e
                        .slice(o, s)
                        .replace(w, b),
                    o        = s + t.length,
                    n
                        ? a  += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"
                        : i
                            ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"
                            : r && (a += "';\n" + r + "\n__p+='"),
                    t
                }),
                a += "';\n",
                n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
                a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(argumen" +
                        "ts,'');};\n" + a + "return __p;\n";
                try {
                    var s = new Function(n.variable || "obj", "_", a)
                } catch (t) {
                    throw t.source = a,
                    t
                }
                var u = function (e) {
                        return s.call(this, e, t)
                    },
                    c = n.variable || "obj";
                return u.source = "function(" + c + "){\n" + a + "}",
                u
            },
            t
        }()
    },
    function (t, e, n) {
        var i = n(0),
            r = n(1);
        i.define("dropdown", t.exports = function (t, e) {
            var n,
                o,
                a = {},
                s = t(document),
                u = i.env(),
                c = i.env.touch,
                l = ".w-dropdown",
                f = "w--open",
                d = "w-close" + l,
                h = r.triggers,
                p = 900,
                v = !1;
            function m() {
                o = u && i.env("design"),
                (n = s.find(l)).each(g)
            }
            function g(n, r) {
                var a = t(r),
                    c = t.data(r, l);
                c || (c = t.data(r, l, {
                    config: {},
                    el    : a,
                    open  : !1
                })),
                c.list        = a.children(".w-dropdown-list"),
                c.toggle      = a.children(".w-dropdown-toggle"),
                c.links       = c
                    .list
                    .children(".w-dropdown-link"),
                c.outside     = function (n) {
                    n.outside && s.off(k() + l, n.outside);
                    return e.debounce(function (e) {
                        if (n.open) {
                            var r = t(e.target);
                            if (!r.closest(".w-dropdown-toggle").length) {
                                var o = -1 === t.inArray(n.el[0], r.parents(l)),
                                    a = i.env("editor");
                                if (o) {
                                    if (a) {
                                        var s = 1 === r
                                                .parents()
                                                .length && 1 === r
                                                .parents("svg")
                                                .length,
                                            u = r
                                                .parents(".w-editor-bem-EditorHoverControls")
                                                .length;
                                        if (s || u) 
                                            return
                                    }
                                    x(n)
                                }
                            }
                        }
                    })
                }(c),
                c.complete    = function (t) {
                    return function () {
                        t
                            .list
                            .removeClass(f),
                        t
                            .toggle
                            .removeClass(f),
                        t.manageZ && t
                            .el
                            .css("z-index", "")
                    }
                }(c),
                c.leave       = function (t) {
                    return function () {
                        t.hovering = !1,
                        x(t)
                    }
                }(c),
                c.moveOutside = function (n) {
                    return e.debounce(function (e) {
                        if (n.open) {
                            var i = t(e.target),
                                r = -1 === t.inArray(n.el[0], i.parents(l));
                            if (r) {
                                var o = i
                                        .parents(".w-editor-bem-EditorHoverControls")
                                        .length,
                                    a = i
                                        .parents(".w-editor-bem-RTToolbar")
                                        .length,
                                    s = t(".w-editor-bem-EditorOverlay"),
                                    u = s
                                        .find(".w-editor-edit-outline")
                                        .length || s
                                        .find(".w-editor-bem-RTToolbar")
                                        .length;
                                if (o || a || u) 
                                    return;
                                n.hovering = !1,
                                x(n)
                            }
                        }
                    })
                }(c),
                a.off(l),
                c
                    .toggle
                    .off(l),
                w(c),
                c.nav && c
                    .nav
                    .off(l),
                c.nav = a.closest(".w-nav"),
                c
                    .nav
                    .on(d, b(c)),
                o
                    ? a.on("setting" + l, b(c))
                    : (
                        c.toggle.on(k() + l, function (t) {
                            return e.debounce(function () {
                                t.open
                                    ? x(t)
                                    : y(t)
                            })
                        }(c)),
                        c.config.hover && c.toggle.on("mouseenter" + l, function (t) {
                            return function () {
                                t.hovering = !0,
                                y(t)
                            }
                        }(c)),
                        a.on(d, b(c)),
                        u && (c.hovering = !1, x(c))
                    )
            }
            function w(t) {
                var e = Number(t.el.css("z-index"));
                t.manageZ = e === p || e === p + 1,
                t.config  = {
                    delay: Number(t.el.attr("data-delay")) || 0,
                    hover: (!0 === t.el.attr("data-hover") || "1" === t.el.attr("data-hover")) && !c
                }
            }
            function b(t) {
                return function (e, n) {
                    return n = n || {},
                    "w-close" === e.type
                        ? x(t)
                        : "setting" === e.type
                            ? (w(t), !0 === n.open && y(t), void(!1 === n.open && x(t, !0)))
                            : void 0
                }
            }
            function y(e) {
                if (!e.open) {
                    !function (e) {
                        var i = e.el[0];
                        n.each(function (e, n) {
                            var r = t(n);
                            r.is(i) || r
                                .has(i)
                                .length || r.triggerHandler(d)
                        })
                    }(e),
                    e.open = !0,
                    e
                        .list
                        .addClass(f),
                    e
                        .toggle
                        .addClass(f),
                    h.intro(0, e.el[0]),
                    i
                        .redraw
                        .up(),
                    e.manageZ && e
                        .el
                        .css("z-index", p + 1);
                    var r = i.env("editor");
                    o || s.on(k() + l, e.outside),
                    e.hovering && !r && e
                        .el
                        .on("mouseleave" + l, e.leave),
                    e.hovering && r && s.on("mousemove" + l, e.moveOutside),
                    window.clearTimeout(e.delayId)
                }
            }
            function x(t, e) {
                if (t.open && (!t.config.hover || !t.hovering)) {
                    t.open = !1;
                    var n = t.config;
                    if (
                        h.outro(0, t.el[0]),
                        s.off(k() + l, t.outside),
                        t.el.off("mouseleave" + l, t.leave),
                        s.off(
                            "mousemove" + l,
                            t.moveOutside
                        ),
                        window.clearTimeout(t.delayId),
                        !n.delay || e
                    ) 
                        return t.complete();
                    t.delayId = window.setTimeout(t.complete, n.delay)
                }
            }
            function k() {
                return c
                    ? "tap"
                    : "mouseup"
            }
            return a.ready = m,
            a.design       = function () {
                v && s
                    .find(l)
                    .each(function (e, n) {
                        t(n).triggerHandler(d)
                    }),
                v = !1,
                m()
            },
            a.preview      = function () {
                v = !0,
                m()
            },
            a
        })
    },
    function (t, e, n) {
        var i = n(0);
        i.define("edit", t.exports = function (t, e, n) {
            if (n = n || {}, (i.env("test") || i.env("frame")) && !n.fixture) 
                return {exit: 1};
            var r,
                o = t(window),
                a = t(document.documentElement),
                s = document.location,
                u = "hashchange",
                c = n.load || function () {
                    r                    = !0,
                    window.WebflowEditor = !0,
                    o.off(u, f),
                    function (t) {
                        var e = window
                            .document
                            .createElement("iframe");
                        e.src           = "https://webflow.com/site/third-party-cookie-check.html",
                        e.style.display = "none",
                        e.sandbox       = "allow-scripts allow-same-origin";
                        var n = function n(i) {
                            "WF_third_party_cookies_unsupported" === i.data
                                ? (p(e, n), t(!1))
                                : "WF_third_party_cookies_supported" === i.data && (p(e, n), t(!0))
                        };
                        e.onerror = function () {
                            p(e, n),
                            t(!1)
                        },
                        window.addEventListener("message", n, !1),
                        window
                            .document
                            .body
                            .appendChild(e)
                    }(function (e) {
                        t.ajax({
                            crossDomain: !0,
                            data       : {
                                siteId: a.attr("data-wf-site")
                            },
                            dataType   : "json",
                            success    : function (e) {
                                return function (n) {
                                    var i;
                                    n
                                        ? (n.thirdPartyCookiesSupported = e, function (e, n) {
                                            t
                                                .ajax({
                                                    cache   : !0,
                                                    dataType: "script",
                                                    type    : "GET",
                                                    url     : e
                                                })
                                                .then(n, d)
                                        }(
                                            (i = n.scriptPath).indexOf("//") >= 0
                                                ? i
                                                : h("https://editor-api.webflow.com" + i),
                                            function () {
                                                window.WebflowEditor(n)
                                            }
                                        ))
                                        : console.error("Could not load editor data")
                                }
                            }(e),
                            url        : h("https://editor-api.webflow.com/api/editor/view"),
                            xhrFields  : {
                                withCredentials: !0
                            }
                        })
                    })
                },
                l = !1;
            try {
                l = localStorage && localStorage.getItem && localStorage.getItem(
                    "WebflowEditor"
                )
            } catch (t) {}
            function f() {
                r || /\?edit/.test(s.hash) && c()
            }
            function d(t, e, n) {
                throw console.error("Could not load editor script: " + e),
                n
            }
            function h(t) {
                return t.replace(/([^:])\/\//g, "$1/")
            }
            function p(t, e) {
                window.removeEventListener("message", e, !1),
                t.remove()
            }
            return l
                ? c()
                : s.search
                    ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && c()
                    : o
                        .on(u, f)
                        .triggerHandler(u), {}
        })
    },
    function (t, e, n) {
        var i = n(0);
        i.define("forms", t.exports = function (t, e) {
            var r = {};
            n(10);
            var o,
                a,
                s,
                u,
                c,
                l = t(document),
                f = window.location,
                d = window.XDomainRequest && !window.atob,
                h = ".w-form",
                p = /e(-)?mail/i,
                v = /^\S+@\S+$/,
                m = window.alert,
                g = i.env(),
                w = /list-manage[1-9]?.com/i,
                b = e.debounce(function () {
                    m(
                        "Oops! This page has improperly configured forms. Please contact your website a" +
                        "dministrator to fix this issue."
                    )
                }, 100);
            function y(e, n) {
                var i = t(n),
                    r = t.data(n, h);
                r || (r = t.data(n, h, {form: i})),
                x(r);
                var o = i.closest("div.w-form");
                r.done        = o.find("> .w-form-done"),
                r.fail        = o.find("> .w-form-fail"),
                r.fileUploads = o.find(".w-file-upload"),
                r
                    .fileUploads
                    .each(function (e) {
                        !function (e, n) {
                            if (!n.fileUploads || !n.fileUploads[e]) 
                                return;
                            var i,
                                r = t(n.fileUploads[e]),
                                o = r.find("> .w-file-upload-default"),
                                a = r.find("> .w-file-upload-uploading"),
                                s = r.find("> .w-file-upload-success"),
                                u = r.find("> .w-file-upload-error"),
                                l = o.find(".w-file-upload-input"),
                                f = o.find(".w-file-upload-label"),
                                d = f.children(),
                                h = u.find(".w-file-upload-error-msg"),
                                p = s.find(".w-file-upload-file"),
                                v = s.find(".w-file-remove-link"),
                                m = p.find(".w-file-upload-file-name"),
                                w = h.attr("data-w-size-error"),
                                b = h.attr("data-w-type-error"),
                                y = h.attr("data-w-generic-error");
                            if (g) 
                                l.on("click", function (t) {
                                    t.preventDefault()
                                }),
                                f.on("click", function (t) {
                                    t.preventDefault()
                                }),
                                d.on("click", function (t) {
                                    t.preventDefault()
                                });
                            else {
                                v.on("click", function () {
                                    l.removeAttr("data-value"),
                                    l.val(""),
                                    m.html(""),
                                    o.toggle(!0),
                                    s.toggle(!1)
                                }),
                                l.on("change", function (r) {
                                    (i = r.target && r.target.files && r.target.files[0]) && (
                                        o.toggle(!1),
                                        u.toggle(!1),
                                        a.toggle(!0),
                                        m.text(i.name),
                                        C() || k(n),
                                        n.fileUploads[e].uploading = !0,
                                        function (e, n) {
                                            var i = {
                                                name: e.name,
                                                size: e.size
                                            };
                                            t
                                                .ajax({
                                                    crossDomain: !0,
                                                    data       : i,
                                                    dataType   : "json",
                                                    type       : "POST",
                                                    url        : c
                                                })
                                                .done(function (t) {
                                                    n(null, t)
                                                })
                                                .fail(function (t) {
                                                    n(t)
                                                })
                                        }(i, O)
                                    )
                                });
                                var _ = f.outerHeight();
                                l.height(_),
                                l.width(1)
                            }
                            function T(t) {
                                var i = t.responseJSON && t.responseJSON.msg,
                                    r = y;
                                "string" == typeof i && 0 === i.indexOf("InvalidFileTypeError")
                                    ? r = b
                                    : "string" == typeof i && 0 === i.indexOf("MaxFileSizeError") && (r = w),
                                h.text(r),
                                l.removeAttr("data-value"),
                                l.val(""),
                                a.toggle(!1),
                                o.toggle(!0),
                                u.toggle(!0),
                                n
                                    .fileUploads[e]
                                    .uploading = !1,
                                C() || x(n)
                            }
                            function O(e, n) {
                                if (e) 
                                    return T(e);
                                var r = n.fileName,
                                    o = n.postData,
                                    a = n.fileId,
                                    s = n.s3Url;
                                l.attr("data-value", a),
                                function (e, n, i, r, o) {
                                    var a = new FormData;
                                    for (var s in n) 
                                        a.append(s, n[s]);
                                    a.append("file", i, r),
                                    t
                                        .ajax({
                                            contentType: !1,
                                            data       : a,
                                            processData: !1,
                                            type       : "POST",
                                            url        : e
                                        })
                                        .done(function () {
                                            o(null)
                                        })
                                        .fail(function (t) {
                                            o(t)
                                        })
                                }(s, o, i, r, E)
                            }
                            function E(t) {
                                if (t) 
                                    return T(t);
                                a.toggle(!1),
                                s.css("display", "inline-block"),
                                n
                                    .fileUploads[e]
                                    .uploading = !1,
                                C() || x(n)
                            }
                            function C() {
                                var t = n.fileUploads && n
                                    .fileUploads
                                    .toArray() || [];
                                return t.some(function (t) {
                                    return t.uploading
                                })
                            }
                        }(e, r)
                    });
                var s = r.action = i.attr("action");
                r.handler  = null,
                r.redirect = i.attr("data-redirect"),
                w.test(s)
                    ? r.handler = O
                    : s || (
                        a
                            ? r.handler = T
                            : b()
                    )
            }
            function x(t) {
                var e = t.btn = t
                    .form
                    .find(':input[type="submit"]');
                t.wait    = t
                    .btn
                    .attr("data-wait") || null,
                t.success = !1,
                e.prop("disabled", !1),
                t.label && e.val(t.label)
            }
            function k(t) {
                var e = t.btn,
                    n = t.wait;
                e.prop("disabled", !0),
                n && (t.label = e.val(), e.val(n))
            }
            function _(e, n) {
                var i = null;
                return n = n || {},
                e
                    .find(':input:not([type="submit"]):not([type="file"])')
                    .each(function (r, o) {
                        var a = t(o),
                            s = a.attr("type"),
                            u = a.attr("data-name") || a.attr("name") || "Field " + (
                                r + 1
                            ),
                            c = a.val();
                        if ("checkbox" === s) 
                            c = a.is(":checked");
                        else if ("radio" === s) {
                            if (null === n[u] || "string" == typeof n[u]) 
                                return;
                            c = e
                                .find('input[name="' + a.attr("name") + '"]:checked')
                                .val() || null
                        }
                        "string" == typeof c && (c = t.trim(c)),
                        n[u] = c,
                        i    = i || function (t, e, n, i) {
                            var r = null;
                            "password" === e
                                ? r = "Passwords cannot be submitted."
                                : t.attr("required")
                                    ? i
                                        ? p.test(t.attr("type")) && (
                                            v.test(i) || (r = "Please enter a valid email address for: " + n)
                                        )
                                        : r = "Please fill out the required field: " + n
                                    : "g-recaptcha-response" !== n || i || (
                                        r = "Please confirm youâ€™re not a robot."
                                    );
                            return r
                        }(a, s, u, c)
                    }),
                i
            }
            function T(e) {
                x(e);
                var n = e.form,
                    r = {
                        dolphin    : /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html()),
                        fields     : {},
                        fileUploads: {},
                        name       : n.attr("data-name") || n.attr("name") || "Untitled Form",
                        source     : f.href,
                        test       : i.env()
                    };
                C(e);
                var o = _(n, r.fields);
                if (o) 
                    return m(o);
                r.fileUploads = function (e) {
                    var n = {};
                    return e
                        .find(':input[type="file"]')
                        .each(function (e, i) {
                            var r = t(i),
                                o = r.attr("data-name") || r.attr("name") || "File " + (
                                    e + 1
                                ),
                                a = r.attr("data-value");
                            "string" == typeof a && (a = t.trim(a)),
                            n[o] = a
                        }),
                    n
                }(n),
                k(e),
                a
                    ? t
                        .ajax({
                            crossDomain: !0,
                            data       : r,
                            dataType   : "json",
                            type       : "POST",
                            url        : u
                        })
                        .done(function (t) {
                            t && 200 === t.code && (e.success = !0),
                            E(e)
                        })
                        .fail(function () {
                            E(e)
                        })
                    : E(e)
            }
            function O(n) {
                x(n);
                var i = n.form,
                    r = {};
                if (!/^https/.test(f.href) || /^https/.test(n.action)) {
                    C(n);
                    var o,
                        a = _(i, r);
                    if (a) 
                        return m(a);
                    k(n),
                    e.each(r, function (t, e) {
                        p.test(e) && (r.EMAIL = t),
                        /^((full[ _-]?)?name)$/i.test(e) && (o = t),
                        /^(first[ _-]?name)$/i.test(e) && (r.FNAME = t),
                        /^(last[ _-]?name)$/i.test(e) && (r.LNAME = t)
                    }),
                    o && !r.FNAME && (o = o.split(" "), r.FNAME = o[0], r.LNAME = r.LNAME || o[1]);
                    var s = n
                            .action
                            .replace("/post?", "/post-json?") + "&c=?",
                        u = s.indexOf("u=") + 2;
                    u = s.substring(u, s.indexOf("&", u));
                    var c = s.indexOf("id=") + 3;
                    c                     = s.substring(c, s.indexOf("&", c)),
                    r["b_" + u + "_" + c] = "",
                    t
                        .ajax({data: r, dataType: "jsonp", url: s})
                        .done(function (t) {
                            n.success = "success" === t.result || /already/.test(t.msg),
                            n.success || console.info("MailChimp error: " + t.msg),
                            E(n)
                        })
                        .fail(function () {
                            E(n)
                        })
                } else 
                    i.attr("method", "post")
            }
            function E(t) {
                var e = t.form,
                    n = t.redirect,
                    r = t.success;
                r && n
                    ? i.location(n)
                    : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), x(t))
            }
            function C(t) {
                t.evt && t
                    .evt
                    .preventDefault(),
                t.evt = null
            }
            return r.ready = r.design = r.preview = function () {
                !function () {
                    a = t("html").attr("data-wf-site"),
                    u = "https://webflow.com/api/v1/form/" + a,
                    d && u.indexOf("https://webflow.com") >= 0 && (
                        u = u.replace("https://webflow.com", "http://formdata.webflow.com")
                    );
                    if (c = u + "/signFile", !(o = t(h + " form")).length) 
                        return;
                    o.each(y)
                }(),
                g || s || (s = !0, l.on("submit", h + " form", function (e) {
                    var n = t.data(this, h);
                    n.handler && (n.evt = e, n.handler(n))
                }))
            },
            r
        })
    },
    function (t, e) {
        /* ! jQuery-ajaxTransport-XDomainRequest - v1.0.3 2014-12-16 WEBFLOW - Removed
 * UMD wrapper https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON) @license MIT
 * (/blob/master/LICENSE.txt)
 */
        t.exports = function (t) {
            if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
                var e = /^https?:\/\//i,
                    n = /^get|post$/i,
                    i = new RegExp("^" + location.protocol, "i");
                t.ajaxTransport("* text html xml json", function (r, o, a) {
                    if (r.crossDomain && r.async && n.test(r.type) && e.test(r.url) && i.test(r.url)) {
                        var s = null;
                        return {
                            abort: function () {
                                s && s.abort()
                            },
                            send : function (e, n) {
                                var i = "",
                                    a = (o.dataType || "").toLowerCase();
                                s = new XDomainRequest,
                                /^\d+$/.test(o.timeout) && (s.timeout = o.timeout),
                                s.ontimeout  = function () {
                                    n(500, "timeout")
                                },
                                s.onload     = function () {
                                    var e = "Content-Length: " + s.responseText.length + "\r\nContent-Type: " + s.contentType,
                                        i = {
                                            code   : 200,
                                            message: "success"
                                        },
                                        r = {
                                            text: s.responseText
                                        };
                                    try {
                                        if ("html" === a || /text\/html/i.test(s.contentType)) 
                                            r.html = s.responseText;
                                        else if ("json" === a || "text" !== a && /\/json/i.test(s.contentType)) 
                                            try {
                                                r.json = t.parseJSON(s.responseText)
                                            } catch (t) {
                                                i.code    = 500,
                                                i.message = "parseerror"
                                            }
                                        else if ("xml" === a || "text" !== a && /\/xml/i.test(s.contentType)) {
                                            var o = new ActiveXObject("Microsoft.XMLDOM");
                                            o.async = !1;
                                            try {
                                                o.loadXML(s.responseText)
                                            } catch (t) {
                                                o = void 0
                                            }
                                            if (!o || !o.documentElement || o.getElementsByTagName("parsererror").length) 
                                                throw i.code = 500,
                                                i.message = "parseerror",
                                                "Invalid XML: " + s.responseText;
                                            r.xml = o
                                        }
                                    } catch (t) {
                                        throw t
                                    } finally {
                                        n(i.code, i.message, r, e)
                                    }
                                },
                                s.onprogress = function () {},
                                s.onerror    = function () {
                                    n(500, "error", {text: s.responseText})
                                },
                                o.data && (
                                    i = "string" === t.type(o.data)
                                        ? o.data
                                        : t.param(o.data)
                                ),
                                s.open(r.type, r.url),
                                s.send(i)
                            }
                        }
                    }
                })
            }
        }(window.jQuery)
    },
    function (t, e, n) {
        var i = n(0),
            r = n(3);
        i.define("ix", t.exports = function (t, e) {
            var n,
                o,
                a = {},
                s = t(window),
                u = ".w-ix",
                c = t.tram,
                l = i.env,
                f = l(),
                d = l.chrome && l.chrome < 35,
                h = "none 0s ease 0s",
                p = t(),
                v = {},
                m = [],
                g = [],
                w = [],
                b = 1,
                y = {
                    dropdown: ".w-dropdown",
                    navbar  : ".w-nav",
                    slider  : ".w-slide",
                    tabs    : ".w-tab-link, .w-tab-pane"
                };
            function x(t) {
                t && (v = {}, e.each(t, function (t) {
                    v[t.slug] = t.value
                }), k())
            }
            function k() {
                !function () {
                    var e = t("[data-ix]");
                    if (!e.length) 
                        return;
                    e.each(O),
                    e.each(_),
                    m.length && (i.scroll.on(E), setTimeout(E, 1));
                    g.length && i.load(C);
                    w.length && setTimeout(z, b)
                }(),
                r.init(),
                i
                    .redraw
                    .up()
            }
            function _(n, o) {
                var s = t(o),
                    c = s.attr("data-ix"),
                    l = v[c];
                if (l) {
                    var d = l.triggers;
                    d && (a.style(s, l.style), e.each(d, function (t) {
                        var e = {},
                            n = t.type,
                            o = t.stepsB && t.stepsB.length;
                        function a() {
                            A(t, s, {group: "A"})
                        }
                        function c() {
                            A(t, s, {group: "B"})
                        }
                        if ("load" !== n) {
                            if ("click" === n) 
                                return s.on("click" + u, function (n) {
                                    i.validClick(n.currentTarget) && (
                                        "#" === s.attr("href") && n.preventDefault(),
                                        A(t, s, {
                                            group: e.clicked
                                                ? "B"
                                                : "A"
                                        }),
                                        o && (e.clicked = !e.clicked)
                                    )
                                }),
                                void(p = p.add(s));
                            if ("hover" === n) 
                                return s.on("mouseenter" + u, a),
                                s.on("mouseleave" + u, c),
                                void(p = p.add(s));
                            if ("scroll" !== n) {
                                var l = y[n];
                                if (l) {
                                    var d = s.closest(l);
                                    return d
                                        .on(r.types.INTRO, a)
                                        .on(r.types.OUTRO, c),
                                    void(p = p.add(d))
                                }
                            } else 
                                m.push({
                                    el       : s,
                                    offsetBot: T(t.offsetBot),
                                    offsetTop: T(t.offsetTop),
                                    state    : {
                                        active: !1
                                    },
                                    trigger  : t
                                })
                        } else 
                            t.preload && !f
                                ? g.push(a)
                                : w.push(a)
                        }))
                }
            }
            function T(t) {
                if (!t) 
                    return 0;
                t = String(t);
                var e = parseInt(t, 10);
                return e != e
                    ? 0
                    : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999), e)
            }
            function O(e, n) {
                t(n).off(u)
            }
            function E() {
                for (var t = s.scrollTop(), e = s.height(), n = m.length, i = 0; i < n; i++) {
                    var r = m[i],
                        o = r.el,
                        a = r.trigger,
                        u = a.stepsB && a.stepsB.length,
                        c = r.state,
                        l = o
                            .offset()
                            .top,
                        f = o.outerHeight(),
                        d = r.offsetTop,
                        h = r.offsetBot;
                    d < 1 && d > 0 && (d *= e),
                    h < 1 && h > 0 && (h *= e);
                    var p = l + f - d >= t && l + h <= t + e;
                    p !== c.active && ((!1 !== p || u) && (c.active = p, A(a, o, {
                        group: p
                            ? "A"
                            : "B"
                    })))
                }
            }
            function C() {
                for (var t = g.length, e = 0; e < t; e++) 
                    g[e]()
            }
            function z() {
                for (var t = w.length, e = 0; e < t; e++) 
                    w[e]()
            }
            function A(e, i, r, o) {
                var a = (r = r || {}).done,
                    s = e.preserve3d;
                if (!n || r.force) {
                    var u = r.group || "A",
                        l = e["loop" + u],
                        h = e["steps" + u];
                    if (h && h.length) {
                        if (h.length < 2 && (l = !1), !o) {
                            var p = e.selector;
                            p && (
                                i = e.descend
                                    ? i.find(p)
                                    : e.siblings
                                        ? i.siblings(p)
                                        : t(p),
                                f && i.attr("data-ix-affect", 1)
                            ),
                            d && i.addClass("w-ix-emptyfix"),
                            s && i.css("transform-style", "preserve-3d")
                        }
                        for (var v = c(i), m = {
                            omit3d: !s
                        }, g = 0; g < h.length; g++) 
                            I(v, h[g], m);
                        m.start
                            ? v.then(w)
                            : w()
                    }
                }
                function w() {
                    if (l) 
                        return A(e, i, r, !0);
                    
                    "auto" === m.width && v.set({width: "auto"}),
                    "auto" === m.height && v.set({height: "auto"}),
                    a && a()
                }
            }
            function I(t, e, n) {
                var r = "add",
                    o = "start";
                n.start && (r = o = "then");
                var a = e.transition;
                if (a) {
                    a = a.split(",");
                    for (var s = 0; s < a.length; s++) {
                        var u = a[s];
                        t[r](u)
                    }
                }
                var c = j(e, n) || {};
                if (
                    null != c.width && (n.width = c.width),
                    null != c.height && (n.height = c.height),
                    null == a
                ) {
                    n.start
                        ? t.then(function () {
                            var e = this.queue;
                            this.set(c),
                            c.display && (t.redraw(), i.redraw.up()),
                            this.queue = e,
                            this.next()
                        })
                        : (t.set(c), c.display && (t.redraw(), i.redraw.up()));
                    var l = c.wait;
                    null != l && (t.wait(l), n.start = !0)
                } else {
                    if (c.display) {
                        var f = c.display;
                        delete c.display,
                        n.start
                            ? t.then(function () {
                                var t = this.queue;
                                this
                                    .set({display: f})
                                    .redraw(),
                                i
                                    .redraw
                                    .up(),
                                this.queue = t,
                                this.next()
                            })
                            : (t.set({display: f}).redraw(), i.redraw.up())
                    }
                    t[o](c),
                    n.start = !0
                }
            }
            function j(t, e) {
                var n = e && e.omit3d,
                    i = {},
                    r = !1;
                for (var o in t) 
                    "transition" !== o && "keysort" !== o && (
                        !n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o
                    ) && (i[o] = t[o], r = !0);
                return r
                    ? i
                    : null
            }
            return a.init = function (t) {
                setTimeout(function () {
                    x(t)
                }, 1)
            },
            a.preview     = function () {
                n = !1,
                b = 100,
                setTimeout(function () {
                    x(window.__wf_ix)
                }, 1)
            },
            a.design      = function () {
                n = !0,
                a.destroy()
            },
            a.destroy     = function () {
                o = !0,
                p.each(O),
                i
                    .scroll
                    .off(E),
                r.async (),
                m = [],
                g = [],
                w = []
            },
            a.ready       = function () {
                if (f) 
                    return l("design")
                        ? a.design()
                        : a.preview();
                v && o && (o = !1, k())
            },
            a.run         = A,
            a.style       = f
                ? function (e, n) {
                    var i = c(e);
                    if (t.isEmptyObject(n)) 
                        return;
                    e.css("transition", "");
                    var r = e.css("transition");
                    r === h && (r = i.upstream = null);
                    i.upstream = h,
                    i.set(j(n)),
                    i.upstream = r
                }
                : function (t, e) {
                    c(t).set(j(e))
                },
            a
        })
    },
    function (t, e, n) {
        var i = n(0);
        function r(t, e, n, i) {
            var r,
                o,
                a,
                s = n.tram,
                u = Array.isArray,
                c = "w-lightbox-",
                l = /(^|\s+)/g,
                f = [];
            function d(t, e) {
                return f = u(t)
                    ? t
                    : [t],
                o || d.build(),
                f.length > 1 && (
                    o.items = o.empty,
                    f.forEach(function (t) {
                        var e = I("thumbnail"),
                            n = I("item").append(e);
                        o.items = o
                            .items
                            .add(n),
                        _(t.thumbnailUrl || t.url, function (t) {
                            t.prop("width") > t.prop("height")
                                ? C(t, "wide")
                                : C(t, "tall"),
                            e.append(C(t, "thumbnail-image"))
                        })
                    }),
                    o.strip.empty().append(o.items),
                    C(o.content, "group")
                ),
                s(z(o.lightbox, "hide").trigger("focus"))
                    .add("opacity .3s")
                    .start({opacity: 1}),
                C(o.html, "noscroll"),
                d.show(e || 0)
            }
            function h(t) {
                return function (e) {
                    this === e.target && (e.stopPropagation(), e.preventDefault(), t())
                }
            }
            d.build   = function () {
                return d.destroy(),
                (o = {
                    empty: n(),
                    html : n(e.documentElement)
                }).arrowLeft = I("control left inactive"),
                o.arrowRight = I("control right inactive"),
                o.close      = I("control close"),
                o.spinner    = I("spinner"),
                o.strip      = I("strip"),
                a            = new T(o.spinner, O("hide")),
                o.content    = I("content").append(o.spinner, o.arrowLeft, o.arrowRight, o.close),
                o.container  = I("container").append(o.content, o.strip),
                o.lightbox   = I("backdrop hide").append(o.container),
                o
                    .strip
                    .on("tap", E("item"), g),
                o
                    .content
                    .on("swipe", w)
                    .on("tap", E("left"), p)
                    .on("tap", E("right"), v)
                    .on("tap", E("close"), m)
                    .on("tap", E("image, caption"), v),
                o
                    .container
                    .on("tap", E("view"), m)
                    .on("dragstart", E("img"), y),
                o
                    .lightbox
                    .on("keydown", x)
                    .on("focusin", b),
                n(i).append(o.lightbox.prop("tabIndex", 0)),
                d
            },
            d.destroy = function () {
                o && (z(o.html, "noscroll"), o.lightbox.remove(), o = void 0)
            },
            d.show    = function (t) {
                if (t !== r) {
                    var e = f[t];
                    if (!e) 
                        return d.hide();
                    var i,
                        u,
                        c = r;
                    return r = t,
                    a.show(),
                    _(
                        e.html && (i = e.width, u = e.height, "data:image/svg+xml;charset=utf-8," + encodeURI(
                            '<svg xmlns="http://www.w3.org/2000/svg" width="' + i + '" height="' + u +
                            '"/>'
                        )) || e.url,
                        function (i) {
                            if (t === r) {
                                var u,
                                    l,
                                    d = I("figure", "figure").append(C(i, "image")),
                                    h = I("frame").append(d),
                                    p = I("view").append(h);
                                e.html && (
                                    (l = (u = n(e.html)).is("iframe")) && u.on("load", v),
                                    d.append(C(u, "embed"))
                                ),
                                e.caption && d.append(I("caption", "figcaption").text(e.caption)),
                                o
                                    .spinner
                                    .before(p),
                                l || v()
                            }
                            function v() {
                                var e,
                                    n,
                                    i,
                                    u;
                                if (a.hide(), t === r) {
                                    if (
                                        A(o.arrowLeft, "inactive", t <= 0),
                                        A(o.arrowRight, "inactive", t >= f.length - 1),
                                        o.view
                                            ? (
                                                s(o.view).add("opacity .3s").start({opacity: 0}).then((e = o.view, function () {
                                                    e.remove()
                                                })),
                                                s(p).add("opacity .3s").add("transform .3s").set({
                                                    x: t > c
                                                        ? "80px"
                                                        : "-80px"
                                                }).start({opacity: 1, x: 0})
                                            )
                                            : p.css("opacity", 1),
                                        o.view = p,
                                        o.items
                                    ) {
                                        z(o.items, "active");
                                        var l = o
                                            .items
                                            .eq(t);
                                        C(l, "active"),
                                        n = l
                                            .position()
                                            .left,
                                        i = o
                                            .strip
                                            .scrollLeft(),
                                        u = o
                                            .strip
                                            .width(),
                                        (n < i || n > u + i) && s(o.strip)
                                            .add("scroll-left 500ms")
                                            .start({"scroll-left": n})
                                    }
                                } else 
                                    p.remove()
                            }
                        }
                    ),
                    d
                }
            },
            d.hide    = function () {
                return s(o.lightbox)
                    .add("opacity .3s")
                    .start({opacity: 0})
                    .then(k),
                d
            },
            d.prev    = function () {
                r > 0 && d.show(r - 1)
            },
            d.next    = function () {
                r < f.length - 1 && d.show(r + 1)
            };
            var p = h(d.prev),
                v = h(d.next),
                m = h(d.hide),
                g = function (t) {
                    var e = n(this).index();
                    t.preventDefault(),
                    d.show(e)
                },
                w = function (t, e) {
                    t.preventDefault(),
                    "left" === e.direction
                        ? d.next()
                        : "right" === e.direction && d.prev()
                },
                b = function () {
                    this.focus()
                };
            function y(t) {
                t.preventDefault()
            }
            function x(t) {
                var e = t.keyCode;
                27 === e
                    ? d.hide()
                    : 37 === e
                        ? d.prev()
                        : 39 === e && d.next()
            }
            function k() {
                o && (
                    o.strip.scrollLeft(0).empty(),
                    z(o.html, "noscroll"),
                    C(o.lightbox, "hide"),
                    o.view && o.view.remove(),
                    z(o.content, "group"),
                    C(o.arrowLeft, "inactive"),
                    C(o.arrowRight, "inactive"),
                    r          = o.view = void 0
                )
            }
            function _(t, e) {
                var n = I("img", "img");
                return n.one("load", function () {
                    e(n)
                }),
                n.attr("src", t),
                n
            }
            function T(t, e, n) {
                this.$element  = t,
                this.className = e,
                this.delay     = n || 200,
                this.hide()
            }
            function O(t, e) {
                return t.replace(l, (
                    e
                        ? " ."
                        : " "
                ) + c)
            }
            function E(t) {
                return O(t, !0)
            }
            function C(t, e) {
                return t.addClass(O(e))
            }
            function z(t, e) {
                return t.removeClass(O(e))
            }
            function A(t, e, n) {
                return t.toggleClass(O(e), n)
            }
            function I(t, i) {
                return C(n(e.createElement(i || "div")), t)
            }
            return T.prototype.show = function () {
                var t = this;
                t.timeoutId || (t.timeoutId = setTimeout(function () {
                    t
                        .$element
                        .removeClass(t.className),
                    delete t.timeoutId
                }, t.delay))
            },
            T.prototype.hide        = function () {
                if (this.timeoutId) 
                    return clearTimeout(this.timeoutId),
                    void delete this.timeoutId;
                this
                    .$element
                    .addClass(this.className)
            },
            function () {
                var n = t.navigator.userAgent,
                    i = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                if (n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome") || i && !(i[2] > 7)) {
                    var r = e.createElement("style");
                    e
                        .head
                        .appendChild(r),
                    t.addEventListener("orientationchange", o, !0),
                    o()
                }
                function o() {
                    var e = t.innerHeight,
                        n = t.innerWidth,
                        i = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                                e + "px}.w-lightbox-view {width:" + n + "px}.w-lightbox-group, .w-lightbox-grou" +
                                "p .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + n + "px;max-height:" + e + "px}.w-ligh" +
                                "tbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-li" +
                                "ghtbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-grou" +
                                "p .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * n + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * n + "px;max-height:" + .84 * e + "px}}";
                    r.textContent = i
                }
            }(),
            d
        }
        i.define("lightbox", t.exports = function (t) {
            var e,
                n,
                o = {},
                a = i.env(),
                s = r(
                    window,
                    document,
                    t,
                    a
                        ? "#lightbox-mountpoint"
                        : "body"
                ),
                u = t(document),
                c = ".w-lightbox";
            function l(t) {
                var e,
                    i,
                    r = t
                        .el
                        .children(".w-json")
                        .html();
                if (r) {
                    try {
                        r = JSON.parse(r)
                    } catch (t) {
                        console.error("Malformed lightbox JSON configuration.", t)
                    }
                    !function (t) {
                        t.images && (t.images.forEach(function (t) {
                            t.type = "image"
                        }), t.items = t.images);
                        t.embed && (t.embed.type = "video", t.items = [t.embed]);
                        t.groupId && (t.group = t.groupId)
                    }(r),
                    (e = r.group)
                        ? (
                            (i = n[e]) || (i = n[e] = []),
                            t.items = i,
                            r.items.length && (t.index = i.length, i.push.apply(i, r.items))
                        )
                        : t.items = r.items
                } else 
                    t.items = []
            }
            return o.ready = o.design = o.preview = function () {
                e = a && i.env("design"),
                s.destroy(),
                n = {},
                u
                    .find(c)
                    .webflowLightBox()
            },
            jQuery
                .fn
                .extend({
                    webflowLightBox: function () {
                        t.each(this, function (n, i) {
                            var r = t.data(i, c);
                            r || (r = t.data(i, c, {
                                el    : t(i),
                                embed : "",
                                images: [],
                                mode  : "images"
                            })),
                            r
                                .el
                                .off(c),
                            l(r),
                            e
                                ? r
                                    .el
                                    .on("setting" + c, l.bind(null, r))
                                : r
                                    .el
                                    .on("tap" + c, function (t) {
                                        return function () {
                                            t.items.length && s(t.items, t.index || 0)
                                        }
                                    }(r))
                                    .on("click" + c, function (t) {
                                        t.preventDefault()
                                    })
                        })
                    }
                }),
            o
        })
    },
    function (t, e, n) {
        var i = n(0);
        i.define("links", t.exports = function (t, e) {
            var n,
                r,
                o,
                a = {},
                s = t(window),
                u = i.env(),
                c = window.location,
                l = document.createElement("a"),
                f = "w--current",
                d = /^#[\w:.-]+$/,
                h = /index\.(html|php)$/,
                p = /\/$/;
            function v(e) {
                var i = n && e.getAttribute("href-disabled") || e.getAttribute("href");
                if (l.href = i, !(i.indexOf(":") >= 0)) {
                    var a = t(e);
                    if (0 === i.indexOf("#") && d.test(i)) {
                        var s = t(i);
                        s.length && r.push({
                            active: !1,
                            link  : a,
                            sec   : s
                        })
                    } else if ("#" !== i && "" !== i) {
                        var u = l.href === c.href || i === o || h.test(i) && p.test(o);
                        g(a, f, u)
                    }
                }
            }
            function m() {
                var t = s.scrollTop(),
                    n = s.height();
                e.each(r, function (e) {
                    var i = e.link,
                        r = e.sec,
                        o = r
                            .offset()
                            .top,
                        a = r.outerHeight(),
                        s = .5 * n,
                        u = r.is(":visible") && o + a - s >= t && o + s <= t + n;
                    e.active !== u && (e.active = u, g(i, f, u))
                })
            }
            function g(t, e, n) {
                var i = t.hasClass(e);
                n && i || (n || i) && (
                    n
                        ? t.addClass(e)
                        : t.removeClass(e)
                )
            }
            return a.ready = a.design = a.preview = function () {
                n = u && i.env("design"),
                o = i.env("slug") || c.pathname || "",
                i
                    .scroll
                    .off(m),
                r = [];
                for (var t = document.links, e = 0; e < t.length; ++e) 
                    v(t[e]);
                r.length && (i.scroll.on(m), m())
            },
            a
        })
    },
    function (t, e, n) {
        var i = n(0),
            r = n(1);
        i.define("navbar", t.exports = function (t, e) {
            var n,
                o,
                a,
                s,
                u = {},
                c = t.tram,
                l = t(window),
                f = t(document),
                d = i.env(),
                h = '<div class="w-nav-overlay" data-wf-ignore />',
                p = ".w-nav",
                v = "w--open",
                m = "w--nav-menu-open",
                g = "w--nav-link-open",
                w = r.triggers,
                b = t();
            function y() {
                i
                    .resize
                    .off(x)
            }
            function x() {
                o.each(z)
            }
            function k(n, r) {
                var o = t(r),
                    u = t.data(r, p);
                u || (u = t.data(r, p, {
                    config: {},
                    el    : o,
                    open  : !1
                })),
                u.menu      = o.find(".w-nav-menu"),
                u.links     = u
                    .menu
                    .find(".w-nav-link"),
                u.dropdowns = u
                    .menu
                    .find(".w-dropdown"),
                u.button    = o.find(".w-nav-button"),
                u.container = o.find(".w-container"),
                u.outside   = function (e) {
                    e.outside && f.off("tap" + p, e.outside);
                    return function (n) {
                        var i = t(n.target);
                        s && i
                            .closest(".w-editor-bem-EditorOverlay")
                            .length || C(e, i)
                    }
                }(u),
                u
                    .el
                    .off(p),
                u
                    .button
                    .off(p),
                u
                    .menu
                    .off(p),
                O(u),
                a
                    ? (T(u), u.el.on("setting" + p, function (t) {
                        return function (n, i) {
                            i = i || {};
                            var r = l.width();
                            O(t),
                            !0 === i.open && I(t, !0),
                            !1 === i.open && S(t, !0),
                            t.open && e.defer(function () {
                                r !== l.width() && E(t)
                            })
                        }
                    }(u)))
                    : (
                        !function (e) {
                            if (e.overlay) 
                                return;
                            e.overlay = t(h).appendTo(e.el),
                            e.parent  = e
                                .menu
                                .parent(),
                            S(e, !0)
                        }(u),
                        u.button.on("tap" + p, function (t) {
                            return e.debounce(function () {
                                t.open
                                    ? S(t)
                                    : I(t)
                            })
                        }(u)),
                        u.menu.on("click" + p, "a", function (e) {
                            return function (n) {
                                var r = t(this),
                                    o = r.attr("href");
                                i.validClick(n.currentTarget)
                                    ? o && 0 === o.indexOf("#") && e.open && S(e)
                                    : n.preventDefault()
                            }
                        }(u))
                    ),
                z(n, r)
            }
            function _(e, n) {
                var i = t.data(n, p);
                i && (T(i), t.removeData(n, p))
            }
            function T(t) {
                t.overlay && (S(t, !0), t.overlay.remove(), t.overlay = null)
            }
            function O(t) {
                var n = {},
                    i = t.config || {},
                    r = n.animation = t
                        .el
                        .attr("data-animation") || "default";
                n.animOver   = /^over/.test(r),
                n.animDirect = /left$/.test(r)
                    ? -1
                    : 1,
                i.animation !== r && t.open && e.defer(E, t),
                n.easing     = t
                    .el
                    .attr("data-easing") || "ease",
                n.easing2    = t
                    .el
                    .attr("data-easing2") || "ease";
                var o = t
                    .el
                    .attr("data-duration");
                n.duration  = null != o
                    ? Number(o)
                    : 400,
                n.docHeight = t
                    .el
                    .attr("data-doc-height"),
                t.config    = n
            }
            function E(t) {
                t.open && (S(t, !0), I(t, !0))
            }
            u.ready   = u.design = u.preview = function () {
                if (
                    a = d && i.env("design"),
                    s = i.env("editor"),
                    n = t(document.body),
                    !(o = f.find(p)).length
                ) 
                    return;
                o.each(k),
                y(),
                i
                    .resize
                    .on(x)
            },
            u.destroy = function () {
                b = t(),
                y(),
                o && o.length && o.each(_)
            };
            var C = e.debounce(function (t, e) {
                if (t.open) {
                    var n = e.closest(".w-nav-menu");
                    t
                        .menu
                        .is(n) || S(t)
                }
            });
            function z(e, n) {
                var i = t.data(n, p),
                    r = i.collapsed = "none" !== i
                        .button
                        .css("display");
                if (!i.open || r || a || S(i, !0), i.container.length) {
                    var o = function (e) {
                        var n = e
                            .container
                            .css(A);
                        "none" === n && (n = "");
                        return function (e, i) {
                            (i = t(i)).css(A, ""),
                            "none" === i.css(A) && i.css(A, n)
                        }
                    }(i);
                    i
                        .links
                        .each(o),
                    i
                        .dropdowns
                        .each(o)
                }
                i.open && j(i)
            }
            var A = "max-width";
            function I(t, e) {
                if (!t.open) {
                    t.open = !0,
                    t
                        .menu
                        .addClass(m),
                    t
                        .links
                        .addClass(g),
                    t
                        .button
                        .addClass(v);
                    var n = t.config;
                    "none" !== n.animation && c.support.transform || (e = !0);
                    var r = j(t),
                        o = t
                            .menu
                            .outerHeight(!0),
                        s = t
                            .menu
                            .outerWidth(!0),
                        u = t
                            .el
                            .height(),
                        l = t.el[0];
                    if (z(0, l), w.intro(0, l), i.redraw.up(), a || f.on("tap" + p, t.outside), !e) {
                        var d = "transform " + n.duration + "ms " + n.easing;
                        if (
                            t.overlay && (b = t.menu.prev(), t.overlay.show().append(t.menu)),
                            n.animOver
                        ) 
                            return c(t.menu)
                                .add(d)
                                .set({
                                    height: r,
                                    x     : n.animDirect * s
                                })
                                .start({x: 0}),
                            void(t.overlay && t.overlay.width(s));
                        var h = u + o;
                        c(t.menu)
                            .add(d)
                            .set({
                                y: -h
                            })
                            .start({y: 0})
                    }
                }
            }
            function j(t) {
                var e = t.config,
                    i = e.docHeight
                        ? f.height()
                        : n.height();
                return e.animOver
                    ? t
                        .menu
                        .height(i)
                    : "fixed" !== t
                        .el
                        .css("position") && (i -= t.el.height()),
                t.overlay && t
                    .overlay
                    .height(i),
                i
            }
            function S(t, e) {
                if (t.open) {
                    t.open = !1,
                    t
                        .button
                        .removeClass(v);
                    var n = t.config;
                    if (
                        ("none" === n.animation || !c.support.transform || n.duration <= 0) && (e = !0),
                        w.outro(0, t.el[0]),
                        f.off(
                            "tap" + p,
                            t.outside
                        ),
                        e
                    ) 
                        return c(t.menu).stop(),
                        void u();
                    var i = "transform " + n.duration + "ms " + n.easing2,
                        r = t
                            .menu
                            .outerHeight(!0),
                        o = t
                            .menu
                            .outerWidth(!0),
                        a = t
                            .el
                            .height();
                    if (n.animOver) 
                        c(t.menu)
                            .add(i)
                            .start({
                                x: o * n.animDirect
                            })
                            .then(u);
                    else {
                        var s = a + r;
                        c(t.menu)
                            .add(i)
                            .start({
                                y: -s
                            })
                            .then(u)
                    }
                }
                function u() {
                    t
                        .menu
                        .height(""),
                    c(t.menu).set({x: 0, y: 0}),
                    t
                        .menu
                        .removeClass(m),
                    t
                        .links
                        .removeClass(g),
                    t.overlay && t
                        .overlay
                        .children()
                        .length && (
                            b.length
                                ? t.menu.insertAfter(b)
                                : t.menu.prependTo(t.parent),
                            t.overlay.attr("style", "").hide()
                        ),
                    t
                        .el
                        .triggerHandler("w-close")
                }
            }
            return u
        })
    },
    function (t, e, n) {
        var i = n(0);
        i.define("scroll", t.exports = function (t) {
            var e = t(document),
                n = window,
                r = n.location,
                o = function () {
                    try {
                        return Boolean(n.frameElement)
                    } catch (t) {
                        return !0
                    }
                }()
                    ? null
                    : n.history,
                a = /^[a-zA-Z0-9][\w:.-]*$/;
            return {
                ready: function () {
                    var s = r
                        .href
                        .split("#")[0];
                    e.on("click", "a", function (e) {
                        if (!(i.env("design") || window.$.mobile && t(e.currentTarget).hasClass("ui-link"))) 
                            if ("#" !== this.getAttribute("href")) {
                                var u = this
                                        .href
                                        .split("#"),
                                    c = u[0] === s
                                        ? u[1]
                                        : null;
                                c && function (e, s) {
                                    if (a.test(e)) {
                                        var u = t("#" + e);
                                        if (u.length) {
                                            if (
                                                s && (s.preventDefault(), s.stopPropagation()),
                                                r.hash !== e && o && o.pushState && (!i.env.chrome || "file:" !== r.protocol)
                                            ) {
                                                var c = o.state && o.state.hash;
                                                c !== e && o.pushState({
                                                    hash: e
                                                }, "", "#" + e)
                                            }
                                            var l = i.env("editor")
                                                    ? ".w-editor-body"
                                                    : "body",
                                                f = t(
                                                    "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])"
                                                ),
                                                d = "fixed" === f.css("position")
                                                    ? f.outerHeight()
                                                    : 0;
                                            n.setTimeout(
                                                function () {
                                                    !function (e, i) {
                                                        var r = t(n).scrollTop(),
                                                            o = e
                                                                .offset()
                                                                .top - i;
                                                        if ("mid" === e.data("scroll")) {
                                                            var a = t(n).height() - i,
                                                                s = e.outerHeight();
                                                            s < a && (o -= Math.round((a - s) / 2))
                                                        }
                                                        var u = 1;
                                                        t("body")
                                                            .add(e)
                                                            .each(function () {
                                                                var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                                                !isNaN(e) && (0 === e || e > 0) && (u = e)
                                                            }),
                                                        Date.now || (Date.now = function () {
                                                            return (new Date).getTime()
                                                        });
                                                        var c = Date.now(),
                                                            l = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || function (
                                                                t
                                                            ) {
                                                                n.setTimeout(t, 15)
                                                            },
                                                            f = (472.143 * Math.log(Math.abs(r - o) + 125) - 2e3) * u;
                                                        !function t() {
                                                            var e = Date.now() - c;
                                                            n.scroll(0, function (t, e, n, i) {
                                                                return n > i
                                                                    ? e
                                                                    : t + (e - t) * (
                                                                        (r = n / i) < .5
                                                                            ? 4 * r * r * r
                                                                            : (r - 1) * (2 * r - 2) * (2 * r - 2) + 1
                                                                    );
                                                                var r
                                                            }(r, o, e, f)),
                                                            e <= f && l(t)
                                                        }()
                                                    }(u, d)
                                                },
                                                s
                                                    ? 0
                                                    : 300
                                            )
                                        }
                                    }
                                }(c, e)
                            } else 
                                e.preventDefault()
                    })
                }
            }
        })
    },
    function (t, e, n) {
        var i = n(0),
            r = n(1);
        i.define("slider", t.exports = function (t, e) {
            var n,
                o,
                a,
                s,
                u = {},
                c = t.tram,
                l = t(document),
                f = i.env(),
                d = ".w-slider",
                h = '<div class="w-slider-dot" data-wf-ignore />',
                p = r.triggers;
            function v() {
                (n = l.find(d)).length && (
                    n.filter(":visible").each(w),
                    s = null,
                    a || (m(), i.resize.on(g), i.redraw.on(u.redraw))
                )
            }
            function m() {
                i
                    .resize
                    .off(g),
                i
                    .redraw
                    .off(u.redraw)
            }
            function g() {
                n
                    .filter(":visible")
                    .each(E)
            }
            function w(e, n) {
                var i = t(n),
                    r = t.data(n, d);
                if (
                    r || (r = t.data(n, d, {
                        config: {},
                        depth : 1,
                        el    : i,
                        index : 0
                    })),
                    r.mask   = i.children(".w-slider-mask"),
                    r.left   = i.children(".w-slider-arrow-left"),
                    r.right  = i.children(".w-slider-arrow-right"),
                    r.nav    = i.children(".w-slider-nav"),
                    r.slides = r.mask.children(".w-slide"),
                    r.slides.each(p.reset),
                    s && (r.maskWidth = 0),
                    !c.support.transform
                ) 
                    return r
                        .left
                        .hide(),
                    r
                        .right
                        .hide(),
                    r
                        .nav
                        .hide(),
                    void(a = !0);
                r
                    .el
                    .off(d),
                r
                    .left
                    .off(d),
                r
                    .right
                    .off(d),
                r
                    .nav
                    .off(d),
                b(r),
                o
                    ? (r.el.on("setting" + d, T(r)), _(r), r.hasTimer = !1)
                    : (
                        r.el.on("swipe" + d, T(r)),
                        r.left.on("tap" + d, x(r)),
                        r.right.on("tap" + d, k(r)),
                        r.config.autoplay && !r.hasTimer && (r.hasTimer = !0, r.timerCount = 1, function t(e) {
                            _(e);
                            var n = e.config;
                            var i = n.timerMax;
                            if (i && e.timerCount++ > i) 
                                return;
                            e.timerId = window.setTimeout(function () {
                                null == e.timerId || o || (k(e)(), t(e))
                            }, n.delay)
                        }(r))
                    ),
                r
                    .nav
                    .on("tap" + d, "> div", T(r)),
                f || r
                    .mask
                    .contents()
                    .filter(function () {
                        return 3 === this.nodeType
                    })
                    .remove(),
                E(e, n)
            }
            function b(t) {
                var e = {
                    crossOver: 0
                };
                e.animation = t
                    .el
                    .attr("data-animation") || "slide",
                "outin" === e.animation && (e.animation = "cross", e.crossOver = .5),
                e.easing    = t
                    .el
                    .attr("data-easing") || "ease";
                var n = t
                    .el
                    .attr("data-duration");
                if (
                    e.duration         = null != n
                        ? parseInt(n, 10)
                        : 500,
                    y(t.el.attr("data-infinite")) && (e.infinite = !0),
                    y(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0),
                    y(t.el.attr("data-hide-arrows"))
                        ? e.hideArrows = !0
                        : t.config.hideArrows && (t.left.show(), t.right.show()),
                    y(t.el.attr("data-autoplay"))
                ) {
                    e.autoplay = !0,
                    e.delay    = parseInt(t.el.attr("data-delay"), 10) || 2e3,
                    e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
                    var i = "mousedown" + d + " touchstart" + d;
                    o || t
                        .el
                        .off(i)
                        .one(i, function () {
                            _(t)
                        })
                }
                var r = t
                    .right
                    .width();
                e.edge   = r
                    ? r + 40
                    : 100,
                t.config = e
            }
            function y(t) {
                return "1" === t || "true" === t
            }
            function x(t) {
                return function () {
                    O(t, {
                        index : t.index - 1,
                        vector: -1
                    })
                }
            }
            function k(t) {
                return function () {
                    O(t, {
                        index : t.index + 1,
                        vector: 1
                    })
                }
            }
            function _(t) {
                window.clearTimeout(t.timerId),
                t.timerId = null
            }
            function T(n) {
                return function (r, a) {
                    a = a || {};
                    var s = n.config;
                    if (o && "setting" === r.type) {
                        if ("prev" === a.select) 
                            return x(n)();
                        if ("next" === a.select) 
                            return k(n)();
                        if (b(n), C(n), null == a.select) 
                            return;
                        
                        !function (n, i) {
                            var r = null;
                            i === n.slides.length && (v(), C(n)),
                            e.each(n.anchors, function (e, n) {
                                t(e.els).each(function (e, o) {
                                    t(o).index() === i && (r = n)
                                })
                            }),
                            null != r && O(n, {
                                immediate: !0,
                                index    : r
                            })
                        }(n, a.select)
                    } else {
                        if ("swipe" === r.type) {
                            if (s.disableSwipe) 
                                return;
                            if (i.env("editor")) 
                                return;
                            return "left" === a.direction
                                ? k(n)()
                                : "right" === a.direction
                                    ? x(n)()
                                    : void 0
                        }
                        n
                            .nav
                            .has(r.target)
                            .length && O(n, {
                            index: t(r.target).index()
                        })
                    }
                }
            }
            function O(e, n) {
                n = n || {};
                var i = e.config,
                    r = e.anchors;
                e.previous = e.index;
                var a = n.index,
                    u = {};
                a < 0
                    ? (
                        a = r.length - 1,
                        i.infinite && (u.x = -e.endX, u.from = 0, u.to = r[0].width)
                    )
                    : a >= r.length && (
                        a = 0,
                        i.infinite && (u.x = r[r.length - 1].width, u.from = -r[r.length - 1].x, u.to = u.from - u.x)
                    ),
                e.index = a;
                var l = e
                    .nav
                    .children()
                    .eq(e.index)
                    .addClass("w-active");
                e
                    .nav
                    .children()
                    .not(l)
                    .removeClass("w-active"),
                i.hideArrows && (
                    e.index === r.length - 1
                        ? e.right.hide()
                        : e.right.show(),
                    0 === e.index
                        ? e.left.hide()
                        : e.left.show()
                );
                var f = e.offsetX || 0,
                    d = e.offsetX = -r[e.index].x,
                    h = {
                        opacity   : 1,
                        visibility: "",
                        x         : d
                    },
                    v = t(r[e.index].els),
                    m = t(r[e.previous] && r[e.previous].els),
                    g = e
                        .slides
                        .not(v),
                    w = i.animation,
                    b = i.easing,
                    y = Math.round(i.duration),
                    x = n.vector || (
                        e.index > e.previous
                            ? 1
                            : -1
                    ),
                    k = "opacity " + y + "ms " + b,
                    _ = "transform " + y + "ms " + b;
                if (o || (v.each(p.intro), g.each(p.outro)), n.immediate && !s) 
                    return c(v).set(h),
                    void E();
                if (e.index !== e.previous) {
                    if ("cross" === w) {
                        var T = Math.round(y - y * i.crossOver),
                            O = Math.round(y - T);
                        return k = "opacity " + T + "ms " + b,
                        c(m)
                            .set({visibility: ""})
                            .add(k)
                            .start({opacity: 0}),
                        void c(v)
                            .set({
                                opacity   : 0,
                                visibility: "",
                                x         : d,
                                zIndex    : e.depth++
                            })
                            .add(k)
                            .wait(O)
                            .then({opacity: 1})
                            .then(E)
                    }
                    if ("fade" === w) 
                        return c(m)
                            .set({visibility: ""})
                            .stop(),
                        void c(v)
                            .set({
                                opacity   : 0,
                                visibility: "",
                                x         : d,
                                zIndex    : e.depth++
                            })
                            .add(k)
                            .start({opacity: 1})
                            .then(E);
                    if ("over" === w) 
                        return h = {
                            x: e.endX
                        }
                    ,
                    c(m)
                        .set({visibility: ""})
                        .stop(),
                    void c(v)
                        .set({
                            visibility: "",
                            x         : d + r[e.index].width * x,
                            zIndex    : e.depth++
                        })
                        .add(_)
                        .start({x: d})
                        .then(E);
                    i.infinite && u.x
                        ? (
                            c(e.slides.not(m)).set({visibility: "", x: u.x}).add(_).start({x: d}),
                            c(m).set({visibility: "", x: u.from}).add(_).start({x: u.to}),
                            e.shifted = m
                        )
                        : (
                            i.infinite && e.shifted && (c(e.shifted).set({visibility: "", x: f}), e.shifted = null),
                            c(e.slides).set({visibility: ""}).add(_).start({x: d})
                        )
                }
                function E() {
                    v = t(r[e.index].els),
                    g = e
                        .slides
                        .not(v),
                    "slide" !== w && (h.visibility = "hidden"),
                    c(g).set(h)
                }
            }
            function E(e, n) {
                var i = t.data(n, d);
                if (i) 
                    return function (t) {
                        var e = t
                            .mask
                            .width();
                        if (t.maskWidth !== e) 
                            return t.maskWidth = e,
                            !0;
                        return !1
                    }
                (i)
                    ? C(i)
                    : void(o && function (e) {
                        var n = 0;
                        if (e.slides.each(function (e, i) {
                            n += t(i).outerWidth(!0)
                        }), e.slidesWidth !== n) 
                            return e.slidesWidth = n,
                            !0;
                        return !1
                    }(i) && C(i))
            }
            function C(e) {
                var n = 1,
                    i = 0,
                    r = 0,
                    a = 0,
                    s = e.maskWidth,
                    u = s - e.config.edge;
                u < 0 && (u = 0),
                e.anchors = [
                    {
                        els  : [],
                        width: 0,
                        x    : 0
                    }
                ],
                e
                    .slides
                    .each(function (o, c) {
                        r - i > u && (n++, i += s, e.anchors[n - 1] = {
                            els  : [],
                            width: 0,
                            x    : r
                        }),
                        a          = t(c).outerWidth(!0),
                        r          += a,
                        e
                            .anchors[n - 1]
                            .width += a,
                        e
                            .anchors[n - 1]
                            .els
                            .push(c)
                    }),
                e.endX = r,
                o && (e.pages = null),
                e.nav.length && e.pages !== n && (e.pages = n, function (e) {
                    var n,
                        i = [],
                        r = e
                            .el
                            .attr("data-nav-spacing");
                    r && (r = parseFloat(r) + "px");
                    for (var o = 0; o < e.pages; o++) 
                        n = t(h),
                        e
                            .nav
                            .hasClass("w-num") && n.text(o + 1),
                        null != r && n.css({"margin-left": r, "margin-right": r}),
                        i.push(n);
                    e
                        .nav
                        .empty()
                        .append(i)
                }(e));
                var c = e.index;
                c >= n && (c = n - 1),
                O(e, {
                    immediate: !0,
                    index    : c
                })
            }
            return u.ready = function () {
                o = i.env("design"),
                v()
            },
            u.design       = function () {
                o = !0,
                v()
            },
            u.preview      = function () {
                o = !1,
                v()
            },
            u.redraw       = function () {
                s = !0,
                v()
            },
            u.destroy      = m,
            u
        })
    },
    function (t, e, n) {
        var i = n(0),
            r = n(1);
        i.define("tabs", t.exports = function (t) {
            var e,
                n,
                o = {},
                a = t.tram,
                s = t(document),
                u = i.env,
                c = u.safari,
                l = u(),
                f = "data-w-tab",
                d = ".w-tabs",
                h = "w--current",
                p = "w--tab-active",
                v = r.triggers,
                m = !1;
            function g() {
                n = l && i.env("design"),
                (e = s.find(d)).length && (
                    e.each(y),
                    i.env("preview") && !m && e.each(b),
                    w(),
                    i.redraw.on(o.redraw)
                )
            }
            function w() {
                i
                    .redraw
                    .off(o.redraw)
            }
            function b(e, n) {
                var i = t.data(n, d);
                i && (i.links && i.links.each(v.reset), i.panes && i.panes.each(v.reset))
            }
            function y(e, i) {
                var r = t(i),
                    o = t.data(i, d);
                if (
                    o || (o = t.data(i, d, {
                        config: {},
                        el    : r
                    })),
                    o.current = null,
                    o.menu    = r.children(".w-tab-menu"),
                    o.links   = o.menu.children(".w-tab-link"),
                    o.content = r.children(".w-tab-content"),
                    o.panes   = o.content.children(".w-tab-pane"),
                    o.el.off(d),
                    o.links.off(d),
                    function (t) {
                        var e = {};
                        e.easing = t
                            .el
                            .attr("data-easing") || "ease";
                        var n = parseInt(t.el.attr("data-duration-in"), 10);
                        n = e.intro = n == n
                            ? n
                            : 0;
                        var i = parseInt(t.el.attr("data-duration-out"), 10);
                        i           = e.outro = i == i
                            ? i
                            : 0,
                        e.immediate = !n && !i,
                        t.config    = e
                    }(o),
                    !n
                ) {
                    o
                        .links
                        .on("click" + d, function (t) {
                            return function (e) {
                                var n = e
                                    .currentTarget
                                    .getAttribute(f);
                                n && x(t, {tab: n})
                            }
                        }(o));
                    var a = o
                        .links
                        .filter("." + h)
                        .attr(f);
                    a && x(o, {
                        immediate: !0,
                        tab      : a
                    })
                }
            }
            function x(e, n) {
                n = n || {};
                var r = e.config,
                    o = r.easing,
                    s = n.tab;
                if (s !== e.current) {
                    e.current = s,
                    e
                        .links
                        .each(function (e, n) {
                            var i = t(n);
                            n.getAttribute(f) === s
                                ? i
                                    .addClass(h)
                                    .each(v.intro)
                                : i.hasClass(h) && i
                                    .removeClass(h)
                                    .each(v.outro)
                        });
                    var u = [],
                        l = [];
                    e
                        .panes
                        .each(function (e, n) {
                            var i = t(n);
                            n.getAttribute(f) === s
                                ? u.push(n)
                                : i.hasClass(p) && l.push(n)
                        });
                    var d = t(u),
                        g = t(l);
                    if (n.immediate || r.immediate) 
                        return d
                            .addClass(p)
                            .each(v.intro),
                        g.removeClass(p),
                        void(m || i.redraw.up());
                    g.length && r.outro
                        ? (
                            g.each(v.outro),
                            a(g).add("opacity " + r.outro + "ms " + o, {fallback: c}).start({opacity: 0}).then(w)
                        )
                        : w()
                }
                function w() {
                    if (
                        g.removeClass(p).css({height: "", opacity: "", transform: "", transition: "", width: ""}),
                        d.addClass(p).each(v.intro),
                        i.redraw.up(),
                        !r.intro
                    ) 
                        return a(d).set({opacity: 1});
                    a(d)
                        .set({opacity: 0})
                        .redraw()
                        .add("opacity " + r.intro + "ms " + o, {fallback: c})
                        .start({opacity: 1})
                }
            }
            return o.ready = o.design = o.preview = g,
            o.redraw       = function () {
                m = !0,
                g(),
                m = !1
            },
            o.destroy      = function () {
                (e = s.find(d)).length && (e.each(b), w())
            },
            o
        })
    },
    function (t, e, n) {
        n(0).define("touch", t.exports = function (t) {
            var e = {},
                n = !document.addEventListener,
                i = window.getSelection;
            function r(e, n, i) {
                var r = t.Event(e, {originalEvent: n});
                t(n.target).trigger(r, i)
            }
            return n && (t.event.special.tap = {
                bindType    : "click",
                delegateType: "click"
            }),
            e.init     = function (e) {
                return n
                    ? null
                    : (
                        e = "string" == typeof e
                            ? t(e).get(0)
                            : e
                    )
                        ? new function (t) {
                            var e,
                                n,
                                o,
                                a = !1,
                                s = !1,
                                u = !1,
                                c = Math.min(Math.round(.04 * window.innerWidth), 40);
                            function l(t) {
                                var i = t.touches;
                                i && i.length > 1 || (
                                    a = !0,
                                    s = !1,
                                    i
                                        ? (u = !0, e = i[0].clientX, n = i[0].clientY)
                                        : (e = t.clientX, n = t.clientY),
                                    o = e
                                )
                            }
                            function f(t) {
                                if (a) {
                                    if (u && "mousemove" === t.type) 
                                        return t.preventDefault(),
                                        void t.stopPropagation();
                                    var l = t.touches,
                                        f = l
                                            ? l[0].clientX
                                            : t.clientX,
                                        d = l
                                            ? l[0].clientY
                                            : t.clientY,
                                        p = f - o;
                                    o = f,
                                    Math.abs(p) > c && i && "" === String(i()) && (r("swipe", t, {
                                        direction: p > 0
                                            ? "right"
                                            : "left"
                                    }), h()),
                                    (Math.abs(f - e) > 10 || Math.abs(d - n) > 10) && (s = !0)
                                }
                            }
                            function d(t) {
                                if (a) {
                                    if (a = !1, u && "mouseup" === t.type) 
                                        return t.preventDefault(),
                                        t.stopPropagation(),
                                        void(u = !1);
                                    s || r("tap", t)
                                }
                            }
                            function h() {
                                a = !1
                            }
                            t.addEventListener("touchstart", l, !1),
                            t.addEventListener("touchmove", f, !1),
                            t.addEventListener("touchend", d, !1),
                            t.addEventListener("touchcancel", h, !1),
                            t.addEventListener("mousedown", l, !1),
                            t.addEventListener("mousemove", f, !1),
                            t.addEventListener("mouseup", d, !1),
                            t.addEventListener("mouseout", h, !1),
                            this.destroy = function () {
                                t.removeEventListener("touchstart", l, !1),
                                t.removeEventListener("touchmove", f, !1),
                                t.removeEventListener("touchend", d, !1),
                                t.removeEventListener("touchcancel", h, !1),
                                t.removeEventListener("mousedown", l, !1),
                                t.removeEventListener("mousemove", f, !1),
                                t.removeEventListener("mouseup", d, !1),
                                t.removeEventListener("mouseout", h, !1),
                                t = null
                            }
                        }(e)
                        : null
            },
            e.instance = e.init(document),
            e
        })
    }
]);/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow
    .require('ix')
    .init([
        {
            "name" : "HamburgerToggle",
            "slug" : "hamburgertoggle",
            "value": {
                "style"   : {},
                "triggers": [
                    {
                        "loopA"     : true,
                        "loopB"     : true,
                        "preserve3d": true,
                        "selector"  : ".navbardiv1",
                        "stepsA"    : [
                            {
                                "scaleX"    : 1,
                                "scaleY"    : 1,
                                "scaleZ"    : 1,
                                "transition": "transform 750ms ease-in-out 0",
                                "wait"      : "750ms",
                                "x"         : "-6px",
                                "y"         : "41px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB"    : [
                            {
                                "transition": "transform 750ms ease-in-out 0",
                                "wait"      : "750ms",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "type"      : "navbar"
                    }, {
                        "loopA"     : true,
                        "loopB"     : true,
                        "preserve3d": true,
                        "selector"  : ".navbardiv2",
                        "stepsA"    : [
                            {
                                "transition": "transform 750ms ease-in-out 0",
                                "wait"      : "750ms",
                                "x"         : "-6px",
                                "y"         : "10px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB"    : [
                            {
                                "transition": "transform 750ms ease-in-out 0",
                                "wait"      : "750ms",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "type"      : "navbar"
                    }, {
                        "loopA"     : true,
                        "loopB"     : true,
                        "preserve3d": true,
                        "selector"  : ".navbardiv3",
                        "stepsA"    : [
                            {
                                "transition": "transform 750ms ease-in-out 0",
                                "wait"      : "750ms",
                                "x"         : "-6px",
                                "y"         : "-23px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB"    : [
                            {
                                "transition": "transform 750ms ease-in-out 0",
                                "wait"      : "750ms",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "type"      : "navbar"
                    }, {
                        "preserve3d": true,
                        "selector"  : ".navbardiv3hidden",
                        "stepsA"    : [
                            {
                                "opacity"   : 0.3300000000000001,
                                "scaleX"    : 1.25,
                                "scaleY"    : 1.25,
                                "scaleZ"    : 1,
                                "transition": "transform 200ms ease 0, opacity 200 ease 0",
                                "x"         : "-20px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }, {
                                "opacity"   : 1,
                                "rotateX"   : "0deg",
                                "rotateY"   : "0deg",
                                "rotateZ"   : "270deg",
                                "transition": "transform 750ms ease 0, opacity 750ms ease 0"
                            }
                        ],
                        "stepsB"    : [
                            {
                                "opacity"   : 0,
                                "rotateX"   : "0deg",
                                "rotateY"   : "0deg",
                                "rotateZ"   : "0deg",
                                "scaleX"    : 1,
                                "scaleY"    : 1,
                                "scaleZ"    : 1,
                                "transition": "transform 750ms ease 0, opacity 750ms ease 0",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "type"      : "navbar"
                    }
                ]
            }
        }, {
            "name" : "HamburgerToggleFloatingNav",
            "slug" : "hamburgertogglefloatingnav",
            "value": {
                "style"   : {},
                "triggers": [
                    {
                        "loopA"     : true,
                        "loopB"     : true,
                        "preserve3d": true,
                        "selector"  : ".navbardiv1floating",
                        "stepsA"    : [
                            {
                                "scaleX"    : 1,
                                "scaleY"    : 1,
                                "scaleZ"    : 1,
                                "transition": "transform 750ms ease-in-out 0",
                                "wait"      : "750ms",
                                "x"         : "-6px",
                                "y"         : "41px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB"    : [
                            {
                                "transition": "transform 750ms ease-in-out 0",
                                "wait"      : "750ms",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "type"      : "navbar"
                    }, {
                        "loopA"     : true,
                        "loopB"     : true,
                        "preserve3d": true,
                        "selector"  : ".navbardiv2floating",
                        "stepsA"    : [
                            {
                                "transition": "transform 750ms ease-in-out 0",
                                "wait"      : "750ms",
                                "x"         : "-6px",
                                "y"         : "10px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB"    : [
                            {
                                "transition": "transform 750ms ease-in-out 0",
                                "wait"      : "750ms",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "type"      : "navbar"
                    }, {
                        "loopA"     : true,
                        "loopB"     : true,
                        "preserve3d": true,
                        "selector"  : ".navbardiv3floating",
                        "stepsA"    : [
                            {
                                "transition": "transform 750ms ease-in-out 0",
                                "wait"      : "750ms",
                                "x"         : "-6px",
                                "y"         : "-23px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB"    : [
                            {
                                "transition": "transform 750ms ease-in-out 0",
                                "wait"      : "750ms",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "type"      : "navbar"
                    }, {
                        "preserve3d": true,
                        "selector"  : ".floatingnavbardiv3hiddenfloating",
                        "stepsA"    : [
                            {
                                "opacity": 0
                            }, {
                                "opacity"   : 0.3300000000000001,
                                "scaleX"    : 1.25,
                                "scaleY"    : 1.25,
                                "scaleZ"    : 1,
                                "transition": "transform 200ms ease 0, opacity 200 ease 0",
                                "x"         : "-25px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }, {
                                "opacity"   : 1,
                                "rotateX"   : "0deg",
                                "rotateY"   : "0deg",
                                "rotateZ"   : "270deg",
                                "transition": "transform 750ms ease 0, opacity 750ms ease 0"
                            }
                        ],
                        "stepsB"    : [
                            {
                                "opacity"   : 0,
                                "rotateX"   : "0deg",
                                "rotateY"   : "0deg",
                                "rotateZ"   : "0deg",
                                "scaleX"    : 1,
                                "scaleY"    : 1,
                                "scaleZ"    : 1,
                                "transition": "transform 750ms ease 0, opacity 750ms ease 0",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "type"      : "navbar"
                    }
                ]
            }
        }, {
            "name" : "FloatUphero",
            "slug" : "floatuphero",
            "value": {
                "style"   : {
                    "x": "0px",
                    "y": "25px",
                    "z": "0px"
                },
                "triggers": [
                    {
                        "loopA"    : true,
                        "loopB"    : true,
                        "offsetBot": "40%",
                        "offsetTop": "40%",
                        "stepsA"   : [
                            {
                                "transition": "transform 2000ms ease-in-out 0",
                                "wait"      : "2000ms",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB"   : [
                            {
                                "transition": "transform 600ms ease-in-out 0",
                                "wait"      : "600ms",
                                "x"         : "0px",
                                "y"         : "25px",
                                "z"         : "0px"
                            }
                        ],
                        "type"     : "scroll"
                    }
                ]
            }
        }, {
            "name" : "Cover Title Appear",
            "slug" : "cover-title-appear",
            "value": {
                "style"   : {
                    "opacity": 0,
                    "rotateX": "45deg",
                    "rotateY": "0deg",
                    "rotateZ": "0deg",
                    "scaleX" : 0.8500000000000004,
                    "scaleY" : 0.8500000000000004,
                    "scaleZ" : 1,
                    "x"      : "0px",
                    "y"      : "50px",
                    "z"      : "0px"
                },
                "triggers": [
                    {
                        "preserve3d": true,
                        "stepsA"    : [
                            {
                                "opacity"   : 1,
                                "rotateX"   : "0deg",
                                "rotateY"   : "0deg",
                                "rotateZ"   : "0deg",
                                "scaleX"    : 1,
                                "scaleY"    : 1,
                                "scaleZ"    : 1,
                                "transition": "transform 800ms ease-in-out 0, opacity 800ms ease-in-out 0",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB"    : [],
                        "type"      : "load"
                    }
                ]
            }
        }, {
            "name" : "Cover Title Appear 2 Scroll",
            "slug" : "cover-title-appear-2-scroll",
            "value": {
                "style"   : {
                    "opacity": 0,
                    "rotateX": "45deg",
                    "rotateY": "0deg",
                    "rotateZ": "0deg",
                    "scaleX" : 0.8500000000000004,
                    "scaleY" : 0.8500000000000004,
                    "scaleZ" : 1,
                    "x"      : "0px",
                    "y"      : "50px",
                    "z"      : "0px"
                },
                "triggers": [
                    {
                        "offsetBot" : "10%",
                        "offsetTop" : "10%",
                        "preserve3d": true,
                        "stepsA"    : [
                            {
                                "opacity"   : 1,
                                "rotateX"   : "0deg",
                                "rotateY"   : "0deg",
                                "rotateZ"   : "0deg",
                                "scaleX"    : 1,
                                "scaleY"    : 1,
                                "scaleZ"    : 1,
                                "transition": "transform 800ms ease-in-out 0, opacity 800ms ease-in-out 0",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB"    : [
                            {
                                "opacity"   : 0,
                                "rotateX"   : "45deg",
                                "rotateY"   : "0deg",
                                "rotateZ"   : "0deg",
                                "scaleX"    : 0.8500000000000002,
                                "scaleY"    : 0.8500000000000002,
                                "scaleZ"    : 1,
                                "transition": "transform 1000ms ease-in-out 0, opacity 800ms ease-in-out 0",
                                "x"         : "0px",
                                "y"         : "50px",
                                "z"         : "0px"
                            }
                        ],
                        "type"      : "scroll"
                    }
                ]
            }
        }, {
            "name" : "Hide On Load",
            "slug" : "hide-on-load",
            "value": {
                "style"   : {
                    "opacity": 0
                },
                "triggers": [
                    {
                        "stepsA": [
                            {
                                "opacity"   : 1,
                                "transition": "opacity 1000ms ease-in-out 0"
                            }
                        ],
                        "stepsB": [],
                        "type"  : "scroll"
                    }
                ]
            }
        }, {
            "name" : "Navbar Appear",
            "slug" : "navbar-appear",
            "value": {
                "style"   : {
                    "opacity": 0,
                    "x"      : "0px",
                    "y"      : "-60px",
                    "z"      : "0px"
                },
                "triggers": [
                    {
                        "stepsA": [
                            {
                                "transition": "transform 200 ease 0",
                                "wait"      : "1000ms"
                            }, {
                                "opacity"   : 1,
                                "transition": "transform 1000ms ease-in-out 0, opacity 1000ms ease-in-out 0",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB": [],
                        "type"  : "load"
                    }
                ]
            }
        }, {
            "name" : "IconFloat",
            "slug" : "iconfloat",
            "value": {
                "style"   : {
                    "x": "0px",
                    "y": "-65px",
                    "z": "0px"
                },
                "triggers": [
                    {
                        "offsetBot" : "20%",
                        "preload"   : true,
                        "preserve3d": true,
                        "selector"  : ".image-2",
                        "stepsA"    : [
                            {
                                "transition": "transform 200 ease 0",
                                "wait"      : "1200ms"
                            }, {
                                "rotateX"   : "0deg",
                                "rotateY"   : "0deg",
                                "rotateZ"   : "-7deg",
                                "transition": "transform 1000ms ease-in-out 0",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }, {
                                "transition": "transform 200 ease 0",
                                "wait"      : "700ms"
                            }, {
                                "rotateX"   : "0deg",
                                "rotateY"   : "0deg",
                                "rotateZ"   : "0deg",
                                "transition": "transform 700ms ease 0"
                            }
                        ],
                        "stepsB"    : [],
                        "type"      : "load"
                    }, {
                        "offsetBot" : "20%",
                        "preserve3d": true,
                        "selector"  : ".image-2",
                        "stepsA"    : [
                            {
                                "transition": "transform 200 ease 0",
                                "wait"      : "700ms"
                            }, {
                                "rotateX"   : "0deg",
                                "rotateY"   : "0deg",
                                "rotateZ"   : "-7deg",
                                "transition": "transform 1000ms ease-in-out 0",
                                "x"         : "0px",
                                "y"         : "-5px",
                                "z"         : "0px"
                            }, {
                                "transition": "transform 200 ease 0",
                                "wait"      : "250ms"
                            }, {
                                "rotateX"   : "0deg",
                                "rotateY"   : "0deg",
                                "rotateZ"   : "0deg",
                                "transition": "transform 700ms ease-in-out 0",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB"    : [],
                        "type"      : "scroll"
                    }, {
                        "loopB" : true,
                        "stepsA": [
                            {
                                "rotateX"   : "0deg",
                                "rotateY"   : "0deg",
                                "rotateZ"   : "360deg",
                                "transition": "transform 2000ms ease 0",
                                "wait"      : "2000ms"
                            }
                        ],
                        "stepsB": [],
                        "type"  : "click"
                    }
                ]
            }
        }, {
            "name" : "IconFloat 2",
            "slug" : "iconfloat-2",
            "value": {
                "style"   : {
                    "x": "0px",
                    "y": "-65px",
                    "z": "0px"
                },
                "triggers": [
                    {
                        "offsetBot" : "20%",
                        "preload"   : true,
                        "preserve3d": true,
                        "selector"  : ".image-logolandj",
                        "stepsA"    : [
                            {
                                "transition": "transform 1000ms ease-in-out 0",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB"    : [],
                        "type"      : "load"
                    }
                ]
            }
        }, {
            "name" : "New Interaction",
            "slug" : "new-interaction",
            "value": {
                "style"   : {
                    "opacity": 0,
                    "x"      : "0px",
                    "y"      : "-200px",
                    "z"      : "0px"
                },
                "triggers": [
                    {
                        "offsetBot": "20%",
                        "stepsA"   : [
                            {
                                "opacity"   : 0.25,
                                "transition": "transform 1000ms ease 0, opacity 1000ms ease 0",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }, {
                                "opacity"   : 1,
                                "transition": "opacity 1000ms ease 0"
                            }
                        ],
                        "stepsB"   : [],
                        "type"     : "scroll"
                    }
                ]
            }
        }, {
            "name" : "CardFloat",
            "slug" : "cardfloat",
            "value": {
                "style"   : {
                    "opacity": 0.5,
                    "x"      : "0px",
                    "y"      : "25px",
                    "z"      : "0px"
                },
                "triggers": [
                    {
                        "loopA"    : true,
                        "loopB"    : true,
                        "offsetBot": "10%",
                        "offsetTop": "10%",
                        "stepsA"   : [
                            {
                                "opacity"   : 1,
                                "transition": "transform 2000ms ease 0, opacity 2000ms ease 0",
                                "x"         : "0px",
                                "y"         : "0px",
                                "z"         : "0px"
                            }
                        ],
                        "stepsB"   : [
                            {
                                "opacity"   : 0.7,
                                "transition": "transform 1000ms ease 0, opacity 1000ms ease 0",
                                "x"         : "0px",
                                "y"         : "10px",
                                "z"         : "0px"
                            }
                        ],
                        "type"     : "scroll"
                    }
                ]
            }
        }, {
            "name" : "CardAnimate",
            "slug" : "cardanimate",
            "value": {
                "style"   : {},
                "triggers": [
                    {
                        "stepsA": [
                            {
                                "scaleX"    : 1.2,
                                "scaleY"    : 1.2,
                                "scaleZ"    : 1,
                                "transition": "transform 750ms ease 0"
                            }
                        ],
                        "stepsB": [
                            {
                                "scaleX"    : 1,
                                "scaleY"    : 1,
                                "scaleZ"    : 1,
                                "transition": "transform 750ms ease 0"
                            }
                        ],
                        "type"  : "hover"
                    }
                ]
            }
        }
    ]);