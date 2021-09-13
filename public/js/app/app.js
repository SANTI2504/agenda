/*!
FullCalendar v5.9.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/
var FullCalendar = function (e) {
    "use strict";
    var t = function (e, n) {
        return (t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
            e.__proto__ = t
        } || function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        })(e, n)
    };

    function n(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

        function r() {
            this.constructor = e
        }

        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }

    var r = function () {
        return (r = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function o(e, t, n) {
        if (n || 2 === arguments.length) for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || t)
    }

    var i, a, s, l, u, c = {}, d = [], p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function f(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function h(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function v(e, t, n) {
        var r, o, i, a = arguments, s = {};
        for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
        if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++) n.push(a[i]);
        if (null != n && (s.children = n), "function" == typeof e && null != e.defaultProps) for (i in e.defaultProps) void 0 === s[i] && (s[i] = e.defaultProps[i]);
        return g(e, s, r, o, null)
    }

    function g(e, t, n, r, o) {
        var a = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == o ? ++i.__v : o
        };
        return null != i.vnode && i.vnode(a), a
    }

    function m(e) {
        return e.children
    }

    function y(e, t) {
        this.props = e, this.context = t
    }

    function E(e, t) {
        if (null == t) return e.__ ? E(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? E(e) : null
    }

    function S(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break
            }
            return S(e)
        }
    }

    function D(e) {
        (!e.__d && (e.__d = !0) && a.push(e) && !b.__r++ || l !== i.debounceRendering) && ((l = i.debounceRendering) || s)(b)
    }

    function b() {
        for (var e; b.__r = a.length;) e = a.sort((function (e, t) {
            return e.__v.__b - t.__v.__b
        })), a = [], e.some((function (e) {
            var t, n, r, o, i, a;
            e.__d && (i = (o = (t = e).__v).__e, (a = t.__P) && (n = [], (r = f({}, o)).__v = o.__v + 1, P(a, o, r, t.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? E(o) : i, o.__h), I(n, o), o.__e != i && S(o)))
        }))
    }

    function C(e, t, n, r, o, i, a, s, l, u) {
        var p, f, h, v, y, S, D, b = r && r.__k || d, C = b.length;
        for (n.__k = [], p = 0; p < t.length; p++) if (null != (v = n.__k[p] = null == (v = t[p]) || "boolean" == typeof v ? null : "string" == typeof v || "number" == typeof v || "bigint" == typeof v ? g(null, v, null, null, v) : Array.isArray(v) ? g(m, {children: v}, null, null, null) : v.__b > 0 ? g(v.type, v.props, v.key, null, v.__v) : v)) {
            if (v.__ = n, v.__b = n.__b + 1, null === (h = b[p]) || h && v.key == h.key && v.type === h.type) b[p] = void 0; else for (f = 0; f < C; f++) {
                if ((h = b[f]) && v.key == h.key && v.type === h.type) {
                    b[f] = void 0;
                    break
                }
                h = null
            }
            P(e, v, h = h || c, o, i, a, s, l, u), y = v.__e, (f = v.ref) && h.ref != f && (D || (D = []), h.ref && D.push(h.ref, null, v), D.push(f, v.__c || y, v)), null != y ? (null == S && (S = y), "function" == typeof v.type && null != v.__k && v.__k === h.__k ? v.__d = l = w(v, l, e) : l = _(e, v, h, b, y, l), u || "option" !== n.type ? "function" == typeof n.type && (n.__d = l) : e.value = "") : l && h.__e == l && l.parentNode != e && (l = E(h))
        }
        for (n.__e = S, p = C; p--;) null != b[p] && ("function" == typeof n.type && null != b[p].__e && b[p].__e == n.__d && (n.__d = E(r, p + 1)), O(b[p], b[p]));
        if (D) for (p = 0; p < D.length; p++) H(D[p], D[++p], D[++p])
    }

    function w(e, t, n) {
        var r, o;
        for (r = 0; r < e.__k.length; r++) (o = e.__k[r]) && (o.__ = e, t = "function" == typeof o.type ? w(o, t, n) : _(n, o, o, e.__k, o.__e, t));
        return t
    }

    function R(e, t) {
        return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function (e) {
            R(e, t)
        })) : t.push(e)), t
    }

    function _(e, t, n, r, o, i) {
        var a, s, l;
        if (void 0 !== t.__d) a = t.__d, t.__d = void 0; else if (null == n || o != i || null == o.parentNode) e:if (null == i || i.parentNode !== e) e.appendChild(o), a = null; else {
            for (s = i, l = 0; (s = s.nextSibling) && l < r.length; l += 2) if (s == o) break e;
            e.insertBefore(o, i), a = i
        }
        return void 0 !== a ? a : o.nextSibling
    }

    function T(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || p.test(t) ? n : n + "px"
    }

    function k(e, t, n, r, o) {
        var i;
        e:if ("style" === t) if ("string" == typeof n) e.style.cssText = n; else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) n && t in n || T(e.style, t, "");
            if (n) for (t in n) r && n[t] === r[t] || T(e.style, t, n[t])
        } else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? M : x, i) : e.removeEventListener(t, i ? M : x, i); else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s"); else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                e[t] = null == n ? "" : n;
                break e
            } catch (e) {
            }
            "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
        }
    }

    function x(e) {
        this.l[e.type + !1](i.event ? i.event(e) : e)
    }

    function M(e) {
        this.l[e.type + !0](i.event ? i.event(e) : e)
    }

    function P(e, t, n, r, o, a, s, l, u) {
        var c, d, p, h, v, g, E, S, D, b, w, R = t.type;
        if (void 0 !== t.constructor) return null;
        null != n.__h && (u = n.__h, l = t.__e = n.__e, t.__h = null, a = [l]), (c = i.__b) && c(t);
        try {
            e:if ("function" == typeof R) {
                if (S = t.props, D = (c = R.contextType) && r[c.__c], b = c ? D ? D.props.value : c.__ : r, n.__c ? E = (d = t.__c = n.__c).__ = d.__E : ("prototype" in R && R.prototype.render ? t.__c = d = new R(S, b) : (t.__c = d = new y(S, b), d.constructor = R, d.render = A), D && D.sub(d), d.props = S, d.state || (d.state = {}), d.context = b, d.__n = r, p = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != R.getDerivedStateFromProps && (d.__s == d.state && (d.__s = f({}, d.__s)), f(d.__s, R.getDerivedStateFromProps(S, d.__s))), h = d.props, v = d.state, p) null == R.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount); else {
                    if (null == R.getDerivedStateFromProps && S !== h && null != d.componentWillReceiveProps && d.componentWillReceiveProps(S, b), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(S, d.__s, b) || t.__v === n.__v) {
                        d.props = S, d.state = d.__s, t.__v !== n.__v && (d.__d = !1), d.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function (e) {
                            e && (e.__ = t)
                        })), d.__h.length && s.push(d);
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(S, d.__s, b), null != d.componentDidUpdate && d.__h.push((function () {
                        d.componentDidUpdate(h, v, g)
                    }))
                }
                d.context = b, d.props = S, d.state = d.__s, (c = i.__r) && c(t), d.__d = !1, d.__v = t, d.__P = e, c = d.render(d.props, d.state, d.context), d.state = d.__s, null != d.getChildContext && (r = f(f({}, r), d.getChildContext())), p || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(h, v)), w = null != c && c.type === m && null == c.key ? c.props.children : c, C(e, Array.isArray(w) ? w : [w], t, n, r, o, a, s, l, u), d.base = t.__e, t.__h = null, d.__h.length && s.push(d), E && (d.__E = d.__ = null), d.__e = !1
            } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = N(n.__e, t, n, r, o, a, s, u);
            (c = i.diffed) && c(t)
        } catch (e) {
            t.__v = null, (u || null != a) && (t.__e = l, t.__h = !!u, a[a.indexOf(l)] = null), i.__e(e, t, n)
        }
    }

    function I(e, t) {
        i.__c && i.__c(t, e), e.some((function (t) {
            try {
                e = t.__h, t.__h = [], e.some((function (e) {
                    e.call(t)
                }))
            } catch (e) {
                i.__e(e, t.__v)
            }
        }))
    }

    function N(e, t, n, r, o, i, a, s) {
        var l, u, p, f, v = n.props, g = t.props, m = t.type, y = 0;
        if ("svg" === m && (o = !0), null != i) for (; y < i.length; y++) if ((l = i[y]) && (l === e || (m ? l.localName == m : 3 == l.nodeType))) {
            e = l, i[y] = null;
            break
        }
        if (null == e) {
            if (null === m) return document.createTextNode(g);
            e = o ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, g.is && g), i = null, s = !1
        }
        if (null === m) v === g || s && e.data === g || (e.data = g); else {
            if (i = i && d.slice.call(e.childNodes), u = (v = n.props || c).dangerouslySetInnerHTML, p = g.dangerouslySetInnerHTML, !s) {
                if (null != i) for (v = {}, f = 0; f < e.attributes.length; f++) v[e.attributes[f].name] = e.attributes[f].value;
                (p || u) && (p && (u && p.__html == u.__html || p.__html === e.innerHTML) || (e.innerHTML = p && p.__html || ""))
            }
            if (function (e, t, n, r, o) {
                var i;
                for (i in n) "children" === i || "key" === i || i in t || k(e, i, null, n[i], r);
                for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || k(e, i, t[i], n[i], r)
            }(e, g, v, o, s), p) t.__k = []; else if (y = t.props.children, C(e, Array.isArray(y) ? y : [y], t, n, r, o && "foreignObject" !== m, i, a, e.firstChild, s), null != i) for (y = i.length; y--;) null != i[y] && h(i[y]);
            s || ("value" in g && void 0 !== (y = g.value) && (y !== e.value || "progress" === m && !y) && k(e, "value", y, v.value, !1), "checked" in g && void 0 !== (y = g.checked) && y !== e.checked && k(e, "checked", y, v.checked, !1))
        }
        return e
    }

    function H(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            i.__e(e, n)
        }
    }

    function O(e, t, n) {
        var r, o, a;
        if (i.unmount && i.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || H(r, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.__d = void 0, null != (r = e.__c)) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount()
            } catch (e) {
                i.__e(e, t)
            }
            r.base = r.__P = null
        }
        if (r = e.__k) for (a = 0; a < r.length; a++) r[a] && O(r[a], t, n);
        null != o && h(o)
    }

    function A(e, t, n) {
        return this.constructor(e, n)
    }

    function U(e, t, n) {
        var r, o, a;
        i.__ && i.__(e, t), o = (r = "function" == typeof n) ? null : n && n.__k || t.__k, a = [], P(t, e = (!r && n || t).__k = v(m, null, [e]), o || c, c, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? d.slice.call(t.childNodes) : null, a, !r && n ? n : o ? o.__e : t.firstChild, r), I(a, e)
    }

    i = {
        __e: function (e, t) {
            for (var n, r, o; t = t.__;) if ((n = t.__c) && !n.__) try {
                if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return n.__E = n
            } catch (t) {
                e = t
            }
            throw e
        }, __v: 0
    }, y.prototype.setState = function (e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = f({}, this.state), "function" == typeof e && (e = e(f({}, n), this.props)), e && f(n, e), null != e && this.__v && (t && this.__h.push(t), D(this))
    }, y.prototype.forceUpdate = function (e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), D(this))
    }, y.prototype.render = m, a = [], s = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, b.__r = 0, u = 0;
    var L, W = [], V = i.__b, F = i.__r, z = i.diffed, B = i.__c, j = i.unmount;

    function G() {
        W.forEach((function (e) {
            if (e.__P) try {
                e.__H.__h.forEach(Y), e.__H.__h.forEach(Z), e.__H.__h = []
            } catch (t) {
                e.__H.__h = [], i.__e(t, e.__v)
            }
        })), W = []
    }

    i.__b = function (e) {
        V && V(e)
    }, i.__r = function (e) {
        F && F(e);
        var t = e.__c.__H;
        t && (t.__h.forEach(Y), t.__h.forEach(Z), t.__h = [])
    }, i.diffed = function (e) {
        z && z(e);
        var t = e.__c;
        t && t.__H && t.__H.__h.length && (1 !== W.push(t) && L === i.requestAnimationFrame || ((L = i.requestAnimationFrame) || function (e) {
            var t, n = function () {
                clearTimeout(r), q && cancelAnimationFrame(t), setTimeout(e)
            }, r = setTimeout(n, 100);
            q && (t = requestAnimationFrame(n))
        })(G))
    }, i.__c = function (e, t) {
        t.some((function (e) {
            try {
                e.__h.forEach(Y), e.__h = e.__h.filter((function (e) {
                    return !e.__ || Z(e)
                }))
            } catch (n) {
                t.some((function (e) {
                    e.__h && (e.__h = [])
                })), t = [], i.__e(n, e.__v)
            }
        })), B && B(e, t)
    }, i.unmount = function (e) {
        j && j(e);
        var t = e.__c;
        if (t && t.__H) try {
            t.__H.__.forEach(Y)
        } catch (e) {
            i.__e(e, t.__v)
        }
    };
    var q = "function" == typeof requestAnimationFrame;

    function Y(e) {
        "function" == typeof e.__c && e.__c()
    }

    function Z(e) {
        e.__c = e.__()
    }

    function X(e, t) {
        for (var n in e) if ("__source" !== n && !(n in t)) return !0;
        for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
        return !1
    }

    function K(e) {
        this.props = e
    }

    (K.prototype = new y).isPureReactComponent = !0, K.prototype.shouldComponentUpdate = function (e, t) {
        return X(this.props, e) || X(this.state, t)
    };
    var $ = i.__b;
    i.__b = function (e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), $ && $(e)
    };
    var J = i.__e;
    i.__e = function (e, t, n) {
        if (e.then) for (var r, o = t; o = o.__;) if ((r = o.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
        J(e, t, n)
    };
    var Q = i.unmount;

    function ee() {
        this.__u = 0, this.t = null, this.__b = null
    }

    function te(e) {
        var t = e.__.__c;
        return t && t.__e && t.__e(e)
    }

    function ne() {
        this.u = null, this.o = null
    }

    i.unmount = function (e) {
        var t = e.__c;
        t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Q && Q(e)
    }, (ee.prototype = new y).__c = function (e, t) {
        var n = t.__c, r = this;
        null == r.t && (r.t = []), r.t.push(n);
        var o = te(r.__v), i = !1, a = function () {
            i || (i = !0, n.__R = null, o ? o(s) : s())
        };
        n.__R = a;
        var s = function () {
            if (!--r.__u) {
                if (r.state.__e) {
                    var e = r.state.__e;
                    r.__v.__k[0] = function e(t, n, r) {
                        return t && (t.__v = null, t.__k = t.__k && t.__k.map((function (t) {
                            return e(t, n, r)
                        })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                    }(e, e.__c.__P, e.__c.__O)
                }
                var t;
                for (r.setState({__e: r.__b = null}); t = r.t.pop();) t.forceUpdate()
            }
        }, l = !0 === t.__h;
        r.__u++ || l || r.setState({__e: r.__b = r.__v.__k[0]}), e.then(a, a)
    }, ee.prototype.componentWillUnmount = function () {
        this.t = []
    }, ee.prototype.render = function (e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div"), r = this.__v.__k[0].__c;
                this.__v.__k[0] = function e(t, n, r) {
                    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function (e) {
                        "function" == typeof e.__c && e.__c()
                    })), t.__c.__H = null), null != (t = function (e, t) {
                        for (var n in t) e[n] = t[n];
                        return e
                    }({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function (t) {
                        return e(t, n, r)
                    }))), t
                }(this.__b, n, r.__O = r.__P)
            }
            this.__b = null
        }
        var o = t.__e && v(m, null, e.fallback);
        return o && (o.__h = null), [v(m, null, t.__e ? null : e.children), o]
    };
    var re = function (e, t, n) {
        if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)) for (n = e.u; n;) {
            for (; n.length > 3;) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2]
        }
    };

    function oe(e) {
        return this.getChildContext = function () {
            return e.context
        }, e.children
    }

    function ie(e) {
        var t = this, n = e.i;
        t.componentWillUnmount = function () {
            U(null, t.l), t.l = null, t.i = null
        }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function (e) {
                this.childNodes.push(e), t.i.appendChild(e)
            },
            insertBefore: function (e, n) {
                this.childNodes.push(e), t.i.appendChild(e)
            },
            removeChild: function (e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
            }
        }), U(v(oe, {context: t.context}, e.__v), t.l)) : t.l && t.componentWillUnmount()
    }

    (ne.prototype = new y).__e = function (e) {
        var t = this, n = te(t.__v), r = t.o.get(e);
        return r[0]++, function (o) {
            var i = function () {
                t.props.revealOrder ? (r.push(o), re(t, e, r)) : o()
            };
            n ? n(i) : i()
        }
    }, ne.prototype.render = function (e) {
        this.u = null, this.o = new Map;
        var t = R(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
        for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
        return e.children
    }, ne.prototype.componentDidUpdate = ne.prototype.componentDidMount = function () {
        var e = this;
        this.o.forEach((function (t, n) {
            re(e, n, t)
        }))
    };
    var ae = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        se = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        le = function (e) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
        };
    y.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function (e) {
        Object.defineProperty(y.prototype, e, {
            configurable: !0, get: function () {
                return this["UNSAFE_" + e]
            }, set: function (t) {
                Object.defineProperty(this, e, {configurable: !0, writable: !0, value: t})
            }
        })
    }));
    var ue = i.event;

    function ce() {
    }

    function de() {
        return this.cancelBubble
    }

    function pe() {
        return this.defaultPrevented
    }

    i.event = function (e) {
        return ue && (e = ue(e)), e.persist = ce, e.isPropagationStopped = de, e.isDefaultPrevented = pe, e.nativeEvent = e
    };
    var fe = {
        configurable: !0, get: function () {
            return this.class
        }
    }, he = i.vnode;
    i.vnode = function (e) {
        var t = e.type, n = e.props, r = n;
        if ("string" == typeof t) {
            for (var o in r = {}, n) {
                var i = n[o];
                "value" === o && "defaultValue" in n && null == i || ("defaultValue" === o && "value" in n && null == n.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !le(n.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : se.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i)
            }
            "select" == t && r.multiple && Array.isArray(r.value) && (r.value = R(n.children).forEach((function (e) {
                e.props.selected = -1 != r.value.indexOf(e.props.value)
            }))), "select" == t && null != r.defaultValue && (r.value = R(n.children).forEach((function (e) {
                e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
            }))), e.props = r
        }
        t && n.class != n.className && (fe.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", fe)), e.$$typeof = ae, he && he(e)
    };
    var ve = i.__r;
    i.__r = function (e) {
        ve && ve(e)
    }, "object" == typeof performance && "function" == typeof performance.now && performance.now.bind(performance);
    var ge = "undefined" != typeof globalThis ? globalThis : window;
    ge.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : ge.FullCalendarVDom = {
        Component: y, createElement: v, render: U, createRef: function () {
            return {current: null}
        }, Fragment: m, createContext: function (e) {
            var t = function (e, t) {
                var n = {
                    __c: t = "__cC" + u++, __: e, Consumer: function (e, t) {
                        return e.children(t)
                    }, Provider: function (e) {
                        var n, r;
                        return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function () {
                            return r
                        }, this.shouldComponentUpdate = function (e) {
                            this.props.value !== e.value && n.some(D)
                        }, this.sub = function (e) {
                            n.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function () {
                                n.splice(n.indexOf(e), 1), t && t.call(e)
                            }
                        }), e.children
                    }
                };
                return n.Provider.__ = n.Consumer.contextType = n
            }(e), n = t.Provider;
            return t.Provider = function () {
                var e = this, t = !this.getChildContext, r = n.apply(this, arguments);
                if (t) {
                    var o = [];
                    this.shouldComponentUpdate = function (t) {
                        e.props.value !== t.value && o.forEach((function (e) {
                            e.context = t.value, e.forceUpdate()
                        }))
                    }, this.sub = function (e) {
                        o.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function () {
                            o.splice(o.indexOf(e), 1), t && t.call(e)
                        }
                    }
                }
                return r
            }, t
        }, createPortal: function (e, t) {
            return v(ie, {__v: e, i: t})
        }, flushToDom: function () {
            var e = i.debounceRendering, t = [];

            function n(e) {
                t.push(e)
            }

            i.debounceRendering = n, U(v(me, {}), document.createElement("div"));
            for (; t.length;) t.shift()();
            i.debounceRendering = e
        }, unmountComponentAtNode: function (e) {
            U(null, e)
        }
    };
    var me = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            return v("div", {})
        }, t.prototype.componentDidMount = function () {
            this.setState({})
        }, t
    }(y);
    var ye = function () {
        function e(e, t) {
            this.context = e, this.internalEventSource = t
        }

        return e.prototype.remove = function () {
            this.context.dispatch({type: "REMOVE_EVENT_SOURCE", sourceId: this.internalEventSource.sourceId})
        }, e.prototype.refetch = function () {
            this.context.dispatch({
                type: "FETCH_EVENT_SOURCES",
                sourceIds: [this.internalEventSource.sourceId],
                isRefetch: !0
            })
        }, Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this.internalEventSource.publicId
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "url", {
            get: function () {
                return this.internalEventSource.meta.url
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "format", {
            get: function () {
                return this.internalEventSource.meta.format
            }, enumerable: !1, configurable: !0
        }), e
    }();

    function Ee(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }

    function Se(e, t) {
        if (e.closest) return e.closest(t);
        if (!document.documentElement.contains(e)) return null;
        do {
            if (De(e, t)) return e;
            e = e.parentElement || e.parentNode
        } while (null !== e && 1 === e.nodeType);
        return null
    }

    function De(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t)
    }

    function be(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1) for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1) r.push(i[a]);
        return r
    }

    var Ce = /(top|left|right|bottom|width|height)$/i;

    function we(e, t) {
        for (var n in t) Re(e, n, t[n])
    }

    function Re(e, t, n) {
        null == n ? e.style[t] = "" : "number" == typeof n && Ce.test(t) ? e.style[t] = n + "px" : e.style[t] = n
    }

    function _e(e) {
        var t, n;
        return null !== (n = null === (t = e.composedPath) || void 0 === t ? void 0 : t.call(e)[0]) && void 0 !== n ? n : e.target
    }

    function Te(e) {
        return e.getRootNode ? e.getRootNode() : document
    }

    function ke(e) {
        e.preventDefault()
    }

    function xe(e, t) {
        return function (n) {
            var r = Se(n.target, e);
            r && t.call(r, n, r)
        }
    }

    function Me(e, t, n, r) {
        var o = xe(n, r);
        return e.addEventListener(t, o), function () {
            e.removeEventListener(t, o)
        }
    }

    var Pe = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];

    function Ie(e, t) {
        var n = function (r) {
            t(r), Pe.forEach((function (t) {
                e.removeEventListener(t, n)
            }))
        };
        Pe.forEach((function (t) {
            e.addEventListener(t, n)
        }))
    }

    var Ne = 0;

    function He() {
        return String(Ne += 1)
    }

    function Oe() {
        document.body.classList.add("fc-not-allowed")
    }

    function Ae() {
        document.body.classList.remove("fc-not-allowed")
    }

    function Ue(e) {
        e.classList.add("fc-unselectable"), e.addEventListener("selectstart", ke)
    }

    function Le(e) {
        e.classList.remove("fc-unselectable"), e.removeEventListener("selectstart", ke)
    }

    function We(e) {
        e.addEventListener("contextmenu", ke)
    }

    function Ve(e) {
        e.removeEventListener("contextmenu", ke)
    }

    function Fe(e) {
        var t, n, r = [], o = [];
        for ("string" == typeof e ? o = e.split(/\s*,\s*/) : "function" == typeof e ? o = [e] : Array.isArray(e) && (o = e), t = 0; t < o.length; t += 1) "string" == typeof (n = o[t]) ? r.push("-" === n.charAt(0) ? {
            field: n.substring(1),
            order: -1
        } : {field: n, order: 1}) : "function" == typeof n && r.push({func: n});
        return r
    }

    function ze(e, t, n) {
        var r, o;
        for (r = 0; r < n.length; r += 1) if (o = Be(e, t, n[r])) return o;
        return 0
    }

    function Be(e, t, n) {
        return n.func ? n.func(e, t) : je(e[n.field], t[n.field]) * (n.order || 1)
    }

    function je(e, t) {
        return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0
    }

    function Ge(e, t) {
        var n = String(e);
        return "000".substr(0, t - n.length) + n
    }

    function qe(e, t) {
        return e - t
    }

    function Ye(e) {
        return e % 1 == 0
    }

    function Ze(e) {
        var t = e.querySelector(".fc-scrollgrid-shrink-frame"), n = e.querySelector(".fc-scrollgrid-shrink-cushion");
        if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
        if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
        return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width
    }

    var Xe = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    function Ke(e, t) {
        var n = ut(e);
        return n[2] += 7 * t, ct(n)
    }

    function $e(e, t) {
        var n = ut(e);
        return n[2] += t, ct(n)
    }

    function Je(e, t) {
        var n = ut(e);
        return n[6] += t, ct(n)
    }

    function Qe(e, t) {
        return et(e, t) / 7
    }

    function et(e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5
    }

    function tt(e, t) {
        var n = ot(e), r = ot(t);
        return {
            years: 0,
            months: 0,
            days: Math.round(et(n, r)),
            milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
        }
    }

    function nt(e, t) {
        var n = rt(e, t);
        return null !== n && n % 7 == 0 ? n / 7 : null
    }

    function rt(e, t) {
        return pt(e) === pt(t) ? Math.round(et(e, t)) : null
    }

    function ot(e) {
        return ct([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()])
    }

    function it(e, t, n, r) {
        var o = ct([t, 0, 1 + at(t, n, r)]), i = ot(e), a = Math.round(et(o, i));
        return Math.floor(a / 7) + 1
    }

    function at(e, t, n) {
        var r = 7 + t - n;
        return -((7 + ct([e, 0, r]).getUTCDay() - t) % 7) + r - 1
    }

    function st(e) {
        return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()]
    }

    function lt(e) {
        return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0)
    }

    function ut(e) {
        return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()]
    }

    function ct(e) {
        return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e))
    }

    function dt(e) {
        return !isNaN(e.valueOf())
    }

    function pt(e) {
        return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds()
    }

    function ft(e, t, n, r) {
        return {
            instanceId: He(),
            defId: e,
            range: t,
            forcedStartTzo: null == n ? null : n,
            forcedEndTzo: null == r ? null : r
        }
    }

    var ht = Object.prototype.hasOwnProperty;

    function vt(e, t) {
        var n = {};
        if (t) for (var r in t) {
            for (var o = [], i = e.length - 1; i >= 0; i -= 1) {
                var a = e[i][r];
                if ("object" == typeof a && a) o.unshift(a); else if (void 0 !== a) {
                    n[r] = a;
                    break
                }
            }
            o.length && (n[r] = vt(o))
        }
        for (i = e.length - 1; i >= 0; i -= 1) {
            var s = e[i];
            for (var l in s) l in n || (n[l] = s[l])
        }
        return n
    }

    function gt(e, t) {
        var n = {};
        for (var r in e) t(e[r], r) && (n[r] = e[r]);
        return n
    }

    function mt(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
    }

    function yt(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
            t[r[n]] = !0
        }
        return t
    }

    function Et(e) {
        var t = [];
        for (var n in e) t.push(e[n]);
        return t
    }

    function St(e, t) {
        if (e === t) return !0;
        for (var n in e) if (ht.call(e, n) && !(n in t)) return !1;
        for (var n in t) if (ht.call(t, n) && e[n] !== t[n]) return !1;
        return !0
    }

    function Dt(e, t) {
        var n = [];
        for (var r in e) ht.call(e, r) && (r in t || n.push(r));
        for (var r in t) ht.call(t, r) && e[r] !== t[r] && n.push(r);
        return n
    }

    function bt(e, t, n) {
        if (void 0 === n && (n = {}), e === t) return !0;
        for (var r in t) if (!(r in e) || !Ct(e[r], t[r], n[r])) return !1;
        for (var r in e) if (!(r in t)) return !1;
        return !0
    }

    function Ct(e, t, n) {
        return e === t || !0 === n || !!n && n(e, t)
    }

    function wt(e, t, n, r) {
        void 0 === t && (t = 0), void 0 === r && (r = 1);
        var o = [];
        null == n && (n = Object.keys(e).length);
        for (var i = t; i < n; i += r) {
            var a = e[i];
            void 0 !== a && o.push(a)
        }
        return o
    }

    function Rt(e, t, n) {
        var r = n.dateEnv, o = n.pluginHooks, i = n.options, a = e.defs, s = e.instances;
        for (var l in s = gt(s, (function (e) {
            return !a[e.defId].recurringDef
        })), a) {
            var u = a[l];
            if (u.recurringDef) {
                var c = u.recurringDef.duration;
                c || (c = u.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);
                for (var d = 0, p = _t(u, c, t, r, o.recurringTypes); d < p.length; d++) {
                    var f = p[d], h = ft(l, {start: f, end: r.add(f, c)});
                    s[h.instanceId] = h
                }
            }
        }
        return {defs: a, instances: s}
    }

    function _t(e, t, n, r, o) {
        var i = o[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
            start: r.subtract(n.start, t),
            end: n.end
        }, r);
        return e.allDay && (i = i.map(ot)), i
    }

    var Tt = ["years", "months", "days", "milliseconds"],
        kt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;

    function xt(e, t) {
        var n;
        return "string" == typeof e ? function (e) {
            var t = kt.exec(e);
            if (t) {
                var n = t[1] ? -1 : 1;
                return {
                    years: 0,
                    months: 0,
                    days: n * (t[2] ? parseInt(t[2], 10) : 0),
                    milliseconds: n * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
                }
            }
            return null
        }(e) : "object" == typeof e && e ? Mt(e) : "number" == typeof e ? Mt(((n = {})[t || "milliseconds"] = e, n)) : null
    }

    function Mt(e) {
        var t = {
            years: e.years || e.year || 0,
            months: e.months || e.month || 0,
            days: e.days || e.day || 0,
            milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
        }, n = e.weeks || e.week;
        return n && (t.days += 7 * n, t.specifiedWeeks = !0), t
    }

    function Pt(e, t) {
        return {
            years: e.years + t.years,
            months: e.months + t.months,
            days: e.days + t.days,
            milliseconds: e.milliseconds + t.milliseconds
        }
    }

    function It(e, t) {
        return {years: e.years * t, months: e.months * t, days: e.days * t, milliseconds: e.milliseconds * t}
    }

    function Nt(e) {
        return Ht(e) / 864e5
    }

    function Ht(e) {
        return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
    }

    function Ot(e, t) {
        for (var n = null, r = 0; r < Tt.length; r += 1) {
            var o = Tt[r];
            if (t[o]) {
                var i = e[o] / t[o];
                if (!Ye(i) || null !== n && n !== i) return null;
                n = i
            } else if (e[o]) return null
        }
        return n
    }

    function At(e) {
        var t = e.milliseconds;
        if (t) {
            if (t % 1e3 != 0) return {unit: "millisecond", value: t};
            if (t % 6e4 != 0) return {unit: "second", value: t / 1e3};
            if (t % 36e5 != 0) return {unit: "minute", value: t / 6e4};
            if (t) return {unit: "hour", value: t / 36e5}
        }
        return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {unit: "week", value: e.days / 7} : {
            unit: "day",
            value: e.days
        } : e.months ? {unit: "month", value: e.months} : e.years ? {
            unit: "year",
            value: e.years
        } : {unit: "millisecond", value: 0}
    }

    function Ut(e, t, n) {
        void 0 === n && (n = !1);
        var r = e.toISOString();
        return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", Vt(t, !0)))), r
    }

    function Lt(e) {
        return e.toISOString().replace(/T.*$/, "")
    }

    function Wt(e) {
        return Ge(e.getUTCHours(), 2) + ":" + Ge(e.getUTCMinutes(), 2) + ":" + Ge(e.getUTCSeconds(), 2)
    }

    function Vt(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), i = Math.round(r % 60);
        return t ? n + Ge(o, 2) + ":" + Ge(i, 2) : "GMT" + n + o + (i ? ":" + Ge(i, 2) : "")
    }

    function Ft(e, t, n) {
        if (e === t) return !0;
        var r, o = e.length;
        if (o !== t.length) return !1;
        for (r = 0; r < o; r += 1) if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
        return !0
    }

    function zt(e, t, n) {
        var r, o;
        return function () {
            for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
            if (r) {
                if (!Ft(r, i)) {
                    n && n(o);
                    var s = e.apply(this, i);
                    t && t(s, o) || (o = s)
                }
            } else o = e.apply(this, i);
            return r = i, o
        }
    }

    function Bt(e, t, n) {
        var r, o, i = this;
        return function (a) {
            if (r) {
                if (!St(r, a)) {
                    n && n(o);
                    var s = e.call(i, a);
                    t && t(s, o) || (o = s)
                }
            } else o = e.call(i, a);
            return r = a, o
        }
    }

    var jt = {week: 3, separator: 0, omitZeroMinute: 0, meridiem: 0, omitCommas: 0},
        Gt = {timeZoneName: 7, era: 6, year: 5, month: 4, day: 2, weekday: 2, hour: 1, minute: 1, second: 1},
        qt = /\s*([ap])\.?m\.?/i, Yt = /,/g, Zt = /\s+/g, Xt = /\u200e/g, Kt = /UTC|GMT/, $t = function () {
            function e(e) {
                var t = {}, n = {}, r = 0;
                for (var o in e) o in jt ? (n[o] = e[o], r = Math.max(jt[o], r)) : (t[o] = e[o], o in Gt && (r = Math.max(Gt[o], r)));
                this.standardDateProps = t, this.extendedSettings = n, this.severity = r, this.buildFormattingFunc = zt(Jt)
            }

            return e.prototype.format = function (e, t) {
                return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e)
            }, e.prototype.formatRange = function (e, t, n, r) {
                var o = this.standardDateProps, i = this.extendedSettings, a = function (e, t, n) {
                    if (n.getMarkerYear(e) !== n.getMarkerYear(t)) return 5;
                    if (n.getMarkerMonth(e) !== n.getMarkerMonth(t)) return 4;
                    if (n.getMarkerDay(e) !== n.getMarkerDay(t)) return 2;
                    if (pt(e) !== pt(t)) return 1;
                    return 0
                }(e.marker, t.marker, n.calendarSystem);
                if (!a) return this.format(e, n);
                var s = a;
                !(s > 1) || "numeric" !== o.year && "2-digit" !== o.year || "numeric" !== o.month && "2-digit" !== o.month || "numeric" !== o.day && "2-digit" !== o.day || (s = 1);
                var l = this.format(e, n), u = this.format(t, n);
                if (l === u) return l;
                var c = Jt(function (e, t) {
                    var n = {};
                    for (var r in e) (!(r in Gt) || Gt[r] <= t) && (n[r] = e[r]);
                    return n
                }(o, s), i, n), d = c(e), p = c(t), f = function (e, t, n, r) {
                    var o = 0;
                    for (; o < e.length;) {
                        var i = e.indexOf(t, o);
                        if (-1 === i) break;
                        var a = e.substr(0, i);
                        o = i + t.length;
                        for (var s = e.substr(o), l = 0; l < n.length;) {
                            var u = n.indexOf(r, l);
                            if (-1 === u) break;
                            var c = n.substr(0, u);
                            l = u + r.length;
                            var d = n.substr(l);
                            if (a === c && s === d) return {before: a, after: s}
                        }
                    }
                    return null
                }(l, d, u, p), h = i.separator || r || n.defaultSeparator || "";
                return f ? f.before + d + h + p + f.after : l + h + u
            }, e.prototype.getLargestUnit = function () {
                switch (this.severity) {
                    case 7:
                    case 6:
                    case 5:
                        return "year";
                    case 4:
                        return "month";
                    case 3:
                        return "week";
                    case 2:
                        return "day";
                    default:
                        return "time"
                }
            }, e
        }();

    function Jt(e, t, n) {
        var o = Object.keys(e).length;
        return 1 === o && "short" === e.timeZoneName ? function (e) {
            return Vt(e.timeZoneOffset)
        } : 0 === o && t.week ? function (e) {
            return function (e, t, n, r) {
                var o = [];
                "narrow" === r ? o.push(t) : "short" === r && o.push(t, " ");
                o.push(n.simpleNumberFormat.format(e)), "rtl" === n.options.direction && o.reverse();
                return o.join("")
            }(n.computeWeekNumber(e.marker), n.weekText, n.locale, t.week)
        } : function (e, t, n) {
            e = r({}, e), t = r({}, t), function (e, t) {
                e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit"));
                "long" === e.timeZoneName && (e.timeZoneName = "short");
                t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute
            }(e, t), e.timeZone = "UTC";
            var o, i = new Intl.DateTimeFormat(n.locale.codes, e);
            if (t.omitZeroMinute) {
                var a = r({}, e);
                delete a.minute, o = new Intl.DateTimeFormat(n.locale.codes, a)
            }
            return function (r) {
                var a = r.marker;
                return function (e, t, n, r, o) {
                    e = e.replace(Xt, ""), "short" === n.timeZoneName && (e = function (e, t) {
                        var n = !1;
                        e = e.replace(Kt, (function () {
                            return n = !0, t
                        })), n || (e += " " + t);
                        return e
                    }(e, "UTC" === o.timeZone || null == t.timeZoneOffset ? "UTC" : Vt(t.timeZoneOffset)));
                    r.omitCommas && (e = e.replace(Yt, "").trim());
                    r.omitZeroMinute && (e = e.replace(":00", ""));
                    !1 === r.meridiem ? e = e.replace(qt, "").trim() : "narrow" === r.meridiem ? e = e.replace(qt, (function (e, t) {
                        return t.toLocaleLowerCase()
                    })) : "short" === r.meridiem ? e = e.replace(qt, (function (e, t) {
                        return t.toLocaleLowerCase() + "m"
                    })) : "lowercase" === r.meridiem && (e = e.replace(qt, (function (e) {
                        return e.toLocaleLowerCase()
                    })));
                    return e = (e = e.replace(Zt, " ")).trim()
                }((o && !a.getUTCMinutes() ? o : i).format(a), r, e, t, n)
            }
        }(e, t, n)
    }

    function Qt(e, t) {
        var n = t.markerToArray(e.marker);
        return {
            marker: e.marker,
            timeZoneOffset: e.timeZoneOffset,
            array: n,
            year: n[0],
            month: n[1],
            day: n[2],
            hour: n[3],
            minute: n[4],
            second: n[5],
            millisecond: n[6]
        }
    }

    function en(e, t, n, r) {
        var o = Qt(e, n.calendarSystem);
        return {
            date: o,
            start: o,
            end: t ? Qt(t, n.calendarSystem) : null,
            timeZone: n.timeZone,
            localeCodes: n.locale.codes,
            defaultSeparator: r || n.defaultSeparator
        }
    }

    var tn = function () {
        function e(e) {
            this.cmdStr = e
        }

        return e.prototype.format = function (e, t, n) {
            return t.cmdFormatter(this.cmdStr, en(e, null, t, n))
        }, e.prototype.formatRange = function (e, t, n, r) {
            return n.cmdFormatter(this.cmdStr, en(e, t, n, r))
        }, e
    }(), nn = function () {
        function e(e) {
            this.func = e
        }

        return e.prototype.format = function (e, t, n) {
            return this.func(en(e, null, t, n))
        }, e.prototype.formatRange = function (e, t, n, r) {
            return this.func(en(e, t, n, r))
        }, e
    }();

    function rn(e) {
        return "object" == typeof e && e ? new $t(e) : "string" == typeof e ? new tn(e) : "function" == typeof e ? new nn(e) : null
    }

    var on = {
            navLinkDayClick: hn,
            navLinkWeekClick: hn,
            duration: xt,
            bootstrapFontAwesome: hn,
            buttonIcons: hn,
            customButtons: hn,
            defaultAllDayEventDuration: xt,
            defaultTimedEventDuration: xt,
            nextDayThreshold: xt,
            scrollTime: xt,
            scrollTimeReset: Boolean,
            slotMinTime: xt,
            slotMaxTime: xt,
            dayPopoverFormat: rn,
            slotDuration: xt,
            snapDuration: xt,
            headerToolbar: hn,
            footerToolbar: hn,
            defaultRangeSeparator: String,
            titleRangeSeparator: String,
            forceEventDuration: Boolean,
            dayHeaders: Boolean,
            dayHeaderFormat: rn,
            dayHeaderClassNames: hn,
            dayHeaderContent: hn,
            dayHeaderDidMount: hn,
            dayHeaderWillUnmount: hn,
            dayCellClassNames: hn,
            dayCellContent: hn,
            dayCellDidMount: hn,
            dayCellWillUnmount: hn,
            initialView: String,
            aspectRatio: Number,
            weekends: Boolean,
            weekNumberCalculation: hn,
            weekNumbers: Boolean,
            weekNumberClassNames: hn,
            weekNumberContent: hn,
            weekNumberDidMount: hn,
            weekNumberWillUnmount: hn,
            editable: Boolean,
            viewClassNames: hn,
            viewDidMount: hn,
            viewWillUnmount: hn,
            nowIndicator: Boolean,
            nowIndicatorClassNames: hn,
            nowIndicatorContent: hn,
            nowIndicatorDidMount: hn,
            nowIndicatorWillUnmount: hn,
            showNonCurrentDates: Boolean,
            lazyFetching: Boolean,
            startParam: String,
            endParam: String,
            timeZoneParam: String,
            timeZone: String,
            locales: hn,
            locale: hn,
            themeSystem: String,
            dragRevertDuration: Number,
            dragScroll: Boolean,
            allDayMaintainDuration: Boolean,
            unselectAuto: Boolean,
            dropAccept: hn,
            eventOrder: Fe,
            eventOrderStrict: Boolean,
            handleWindowResize: Boolean,
            windowResizeDelay: Number,
            longPressDelay: Number,
            eventDragMinDistance: Number,
            expandRows: Boolean,
            height: hn,
            contentHeight: hn,
            direction: String,
            weekNumberFormat: rn,
            eventResizableFromStart: Boolean,
            displayEventTime: Boolean,
            displayEventEnd: Boolean,
            weekText: String,
            progressiveEventRendering: Boolean,
            businessHours: hn,
            initialDate: hn,
            now: hn,
            eventDataTransform: hn,
            stickyHeaderDates: hn,
            stickyFooterScrollbar: hn,
            viewHeight: hn,
            defaultAllDay: Boolean,
            eventSourceFailure: hn,
            eventSourceSuccess: hn,
            eventDisplay: String,
            eventStartEditable: Boolean,
            eventDurationEditable: Boolean,
            eventOverlap: hn,
            eventConstraint: hn,
            eventAllow: hn,
            eventBackgroundColor: String,
            eventBorderColor: String,
            eventTextColor: String,
            eventColor: String,
            eventClassNames: hn,
            eventContent: hn,
            eventDidMount: hn,
            eventWillUnmount: hn,
            selectConstraint: hn,
            selectOverlap: hn,
            selectAllow: hn,
            droppable: Boolean,
            unselectCancel: String,
            slotLabelFormat: hn,
            slotLaneClassNames: hn,
            slotLaneContent: hn,
            slotLaneDidMount: hn,
            slotLaneWillUnmount: hn,
            slotLabelClassNames: hn,
            slotLabelContent: hn,
            slotLabelDidMount: hn,
            slotLabelWillUnmount: hn,
            dayMaxEvents: hn,
            dayMaxEventRows: hn,
            dayMinWidth: Number,
            slotLabelInterval: xt,
            allDayText: String,
            allDayClassNames: hn,
            allDayContent: hn,
            allDayDidMount: hn,
            allDayWillUnmount: hn,
            slotMinWidth: Number,
            navLinks: Boolean,
            eventTimeFormat: rn,
            rerenderDelay: Number,
            moreLinkText: hn,
            selectMinDistance: Number,
            selectable: Boolean,
            selectLongPressDelay: Number,
            eventLongPressDelay: Number,
            selectMirror: Boolean,
            eventMaxStack: Number,
            eventMinHeight: Number,
            eventMinWidth: Number,
            eventShortHeight: Number,
            slotEventOverlap: Boolean,
            plugins: hn,
            firstDay: Number,
            dayCount: Number,
            dateAlignment: String,
            dateIncrement: xt,
            hiddenDays: hn,
            monthMode: Boolean,
            fixedWeekCount: Boolean,
            validRange: hn,
            visibleRange: hn,
            titleFormat: hn,
            noEventsText: String,
            moreLinkClick: hn,
            moreLinkClassNames: hn,
            moreLinkContent: hn,
            moreLinkDidMount: hn,
            moreLinkWillUnmount: hn
        }, an = {
            eventDisplay: "auto",
            defaultRangeSeparator: " - ",
            titleRangeSeparator: " – ",
            defaultTimedEventDuration: "01:00:00",
            defaultAllDayEventDuration: {day: 1},
            forceEventDuration: !1,
            nextDayThreshold: "00:00:00",
            dayHeaders: !0,
            initialView: "",
            aspectRatio: 1.35,
            headerToolbar: {start: "title", center: "", end: "today prev,next"},
            weekends: !0,
            weekNumbers: !1,
            weekNumberCalculation: "local",
            editable: !1,
            nowIndicator: !1,
            scrollTime: "06:00:00",
            scrollTimeReset: !0,
            slotMinTime: "00:00:00",
            slotMaxTime: "24:00:00",
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            timeZoneParam: "timeZone",
            timeZone: "local",
            locales: [],
            locale: "",
            themeSystem: "standard",
            dragRevertDuration: 500,
            dragScroll: !0,
            allDayMaintainDuration: !1,
            unselectAuto: !0,
            dropAccept: "*",
            eventOrder: "start,-duration,allDay,title",
            dayPopoverFormat: {month: "long", day: "numeric", year: "numeric"},
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3,
            eventDragMinDistance: 5,
            expandRows: !1,
            navLinks: !1,
            selectable: !1,
            eventMinHeight: 15,
            eventMinWidth: 30,
            eventShortHeight: 30
        }, sn = {
            datesSet: hn,
            eventsSet: hn,
            eventAdd: hn,
            eventChange: hn,
            eventRemove: hn,
            windowResize: hn,
            eventClick: hn,
            eventMouseEnter: hn,
            eventMouseLeave: hn,
            select: hn,
            unselect: hn,
            loading: hn,
            _unmount: hn,
            _beforeprint: hn,
            _afterprint: hn,
            _noEventDrop: hn,
            _noEventResize: hn,
            _resize: hn,
            _scrollRequest: hn
        }, ln = {buttonText: hn, views: hn, plugins: hn, initialEvents: hn, events: hn, eventSources: hn},
        un = {headerToolbar: cn, footerToolbar: cn, buttonText: cn, buttonIcons: cn};

    function cn(e, t) {
        return "object" == typeof e && "object" == typeof t && e && t ? St(e, t) : e === t
    }

    var dn = {
        type: String,
        component: hn,
        buttonText: String,
        buttonTextKey: String,
        dateProfileGeneratorClass: hn,
        usesMinMaxTime: Boolean,
        classNames: hn,
        content: hn,
        didMount: hn,
        willUnmount: hn
    };

    function pn(e) {
        return vt(e, un)
    }

    function fn(e, t) {
        var n = {}, r = {};
        for (var o in t) o in e && (n[o] = t[o](e[o]));
        for (var o in e) o in t || (r[o] = e[o]);
        return {refined: n, extra: r}
    }

    function hn(e) {
        return e
    }

    function vn(e, t, n, r) {
        for (var o = {defs: {}, instances: {}}, i = In(n), a = 0, s = e; a < s.length; a++) {
            var l = Mn(s[a], t, n, r, i);
            l && gn(l, o)
        }
        return o
    }

    function gn(e, t) {
        return void 0 === t && (t = {
            defs: {},
            instances: {}
        }), t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t
    }

    function mn(e, t) {
        var n = e.instances[t];
        if (n) {
            var r = e.defs[n.defId], o = Sn(e, (function (e) {
                return t = r, n = e, Boolean(t.groupId && t.groupId === n.groupId);
                var t, n
            }));
            return o.defs[r.defId] = r, o.instances[n.instanceId] = n, o
        }
        return {defs: {}, instances: {}}
    }

    function yn() {
        return {defs: {}, instances: {}}
    }

    function En(e, t) {
        return {defs: r(r({}, e.defs), t.defs), instances: r(r({}, e.instances), t.instances)}
    }

    function Sn(e, t) {
        var n = gt(e.defs, t), r = gt(e.instances, (function (e) {
            return n[e.defId]
        }));
        return {defs: n, instances: r}
    }

    function Dn(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : []
    }

    var bn = {
        display: String,
        editable: Boolean,
        startEditable: Boolean,
        durationEditable: Boolean,
        constraint: hn,
        overlap: hn,
        allow: hn,
        className: Dn,
        classNames: Dn,
        color: String,
        backgroundColor: String,
        borderColor: String,
        textColor: String
    }, Cn = {
        display: null,
        startEditable: null,
        durationEditable: null,
        constraints: [],
        overlap: null,
        allows: [],
        backgroundColor: "",
        borderColor: "",
        textColor: "",
        classNames: []
    };

    function wn(e, t) {
        var n = function (e, t) {
            return Array.isArray(e) ? vn(e, null, t, !0) : "object" == typeof e && e ? vn([e], null, t, !0) : null != e ? String(e) : null
        }(e.constraint, t);
        return {
            display: e.display || null,
            startEditable: null != e.startEditable ? e.startEditable : e.editable,
            durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
            constraints: null != n ? [n] : [],
            overlap: null != e.overlap ? e.overlap : null,
            allows: null != e.allow ? [e.allow] : [],
            backgroundColor: e.backgroundColor || e.color || "",
            borderColor: e.borderColor || e.color || "",
            textColor: e.textColor || "",
            classNames: (e.className || []).concat(e.classNames || [])
        }
    }

    function Rn(e) {
        return e.reduce(_n, Cn)
    }

    function _n(e, t) {
        return {
            display: null != t.display ? t.display : e.display,
            startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
            durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
            constraints: e.constraints.concat(t.constraints),
            overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
            allows: e.allows.concat(t.allows),
            backgroundColor: t.backgroundColor || e.backgroundColor,
            borderColor: t.borderColor || e.borderColor,
            textColor: t.textColor || e.textColor,
            classNames: e.classNames.concat(t.classNames)
        }
    }

    var Tn = {id: String, groupId: String, title: String, url: String},
        kn = {start: hn, end: hn, date: hn, allDay: Boolean}, xn = r(r(r({}, Tn), kn), {extendedProps: hn});

    function Mn(e, t, n, r, o) {
        void 0 === o && (o = In(n));
        var i = Pn(e, n, o), a = i.refined, s = i.extra, l = function (e, t) {
            var n = null;
            e && (n = e.defaultAllDay);
            null == n && (n = t.options.defaultAllDay);
            return n
        }(t, n), u = function (e, t, n, r) {
            for (var o = 0; o < r.length; o += 1) {
                var i = r[o].parse(e, n);
                if (i) {
                    var a = e.allDay;
                    return null == a && null == (a = t) && null == (a = i.allDayGuess) && (a = !1), {
                        allDay: a,
                        duration: i.duration,
                        typeData: i.typeData,
                        typeId: o
                    }
                }
            }
            return null
        }(a, l, n.dateEnv, n.pluginHooks.recurringTypes);
        if (u) return (c = Nn(a, s, t ? t.sourceId : "", u.allDay, Boolean(u.duration), n)).recurringDef = {
            typeId: u.typeId,
            typeData: u.typeData,
            duration: u.duration
        }, {def: c, instance: null};
        var c, d = function (e, t, n, r) {
            var o, i, a = e.allDay, s = null, l = !1, u = null, c = null != e.start ? e.start : e.date;
            if (o = n.dateEnv.createMarkerMeta(c)) s = o.marker; else if (!r) return null;
            null != e.end && (i = n.dateEnv.createMarkerMeta(e.end));
            null == a && (a = null != t ? t : (!o || o.isTimeUnspecified) && (!i || i.isTimeUnspecified));
            a && s && (s = ot(s));
            i && (u = i.marker, a && (u = ot(u)), s && u <= s && (u = null));
            u ? l = !0 : r || (l = n.options.forceEventDuration || !1, u = n.dateEnv.add(s, a ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration));
            return {
                allDay: a,
                hasEnd: l,
                range: {start: s, end: u},
                forcedStartTzo: o ? o.forcedTzo : null,
                forcedEndTzo: i ? i.forcedTzo : null
            }
        }(a, l, n, r);
        return d ? {
            def: c = Nn(a, s, t ? t.sourceId : "", d.allDay, d.hasEnd, n),
            instance: ft(c.defId, d.range, d.forcedStartTzo, d.forcedEndTzo)
        } : null
    }

    function Pn(e, t, n) {
        return void 0 === n && (n = In(t)), fn(e, n)
    }

    function In(e) {
        return r(r(r({}, bn), xn), e.pluginHooks.eventRefiners)
    }

    function Nn(e, t, n, o, i, a) {
        for (var s = {
            title: e.title || "",
            groupId: e.groupId || "",
            publicId: e.id || "",
            url: e.url || "",
            recurringDef: null,
            defId: He(),
            sourceId: n,
            allDay: o,
            hasEnd: i,
            ui: wn(e, a),
            extendedProps: r(r({}, e.extendedProps || {}), t)
        }, l = 0, u = a.pluginHooks.eventDefMemberAdders; l < u.length; l++) {
            var c = u[l];
            r(s, c(e))
        }
        return Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s
    }

    function Hn(e) {
        var t = Math.floor(et(e.start, e.end)) || 1, n = ot(e.start);
        return {start: n, end: $e(n, t)}
    }

    function On(e, t) {
        void 0 === t && (t = xt(0));
        var n = null, r = null;
        if (e.end) {
            r = ot(e.end);
            var o = e.end.valueOf() - r.valueOf();
            o && o >= Ht(t) && (r = $e(r, 1))
        }
        return e.start && (n = ot(e.start), r && r <= n && (r = $e(n, 1))), {start: n, end: r}
    }

    function An(e) {
        var t = On(e);
        return et(t.start, t.end) > 1
    }

    function Un(e, t, n, r) {
        return "year" === r ? xt(n.diffWholeYears(e, t), "year") : "month" === r ? xt(n.diffWholeMonths(e, t), "month") : tt(e, t)
    }

    function Ln(e, t) {
        var n, r, o = [], i = t.start;
        for (e.sort(Wn), n = 0; n < e.length; n += 1) (r = e[n]).start > i && o.push({
            start: i,
            end: r.start
        }), r.end > i && (i = r.end);
        return i < t.end && o.push({start: i, end: t.end}), o
    }

    function Wn(e, t) {
        return e.start.valueOf() - t.start.valueOf()
    }

    function Vn(e, t) {
        var n = e.start, r = e.end, o = null;
        return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (null === n || null === r || n < r) && (o = {
            start: n,
            end: r
        }), o
    }

    function Fn(e, t) {
        return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf())
    }

    function zn(e, t) {
        return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end)
    }

    function Bn(e, t) {
        return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end)
    }

    function jn(e, t) {
        return (null === e.start || t >= e.start) && (null === e.end || t < e.end)
    }

    function Gn(e, t, n, r) {
        var o = {}, i = {}, a = {}, s = [], l = [], u = Xn(e.defs, t);
        for (var c in e.defs) {
            "inverse-background" === (f = u[(S = e.defs[c]).defId]).display && (S.groupId ? (o[S.groupId] = [], a[S.groupId] || (a[S.groupId] = S)) : i[c] = [])
        }
        for (var d in e.instances) {
            var p = e.instances[d], f = u[(S = e.defs[p.defId]).defId], h = p.range, v = !S.allDay && r ? On(h, r) : h,
                g = Vn(v, n);
            g && ("inverse-background" === f.display ? S.groupId ? o[S.groupId].push(g) : i[p.defId].push(g) : "none" !== f.display && ("background" === f.display ? s : l).push({
                def: S,
                ui: f,
                instance: p,
                range: g,
                isStart: v.start && v.start.valueOf() === g.start.valueOf(),
                isEnd: v.end && v.end.valueOf() === g.end.valueOf()
            }))
        }
        for (var m in o) for (var y = 0, E = Ln(o[m], n); y < E.length; y++) {
            var S, D = E[y];
            f = u[(S = a[m]).defId];
            s.push({def: S, ui: f, instance: null, range: D, isStart: !1, isEnd: !1})
        }
        for (var c in i) for (var b = 0, C = Ln(i[c], n); b < C.length; b++) {
            D = C[b];
            s.push({def: e.defs[c], ui: u[c], instance: null, range: D, isStart: !1, isEnd: !1})
        }
        return {bg: s, fg: l}
    }

    function qn(e) {
        return "background" === e.ui.display || "inverse-background" === e.ui.display
    }

    function Yn(e, t) {
        e.fcSeg = t
    }

    function Zn(e) {
        return e.fcSeg || e.parentNode.fcSeg || null
    }

    function Xn(e, t) {
        return mt(e, (function (e) {
            return Kn(e, t)
        }))
    }

    function Kn(e, t) {
        var n = [];
        return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), Rn(n)
    }

    function $n(e, t) {
        var n = e.map(Jn);
        return n.sort((function (e, n) {
            return ze(e, n, t)
        })), n.map((function (e) {
            return e._seg
        }))
    }

    function Jn(e) {
        var t = e.eventRange, n = t.def, o = t.instance ? t.instance.range : t.range,
            i = o.start ? o.start.valueOf() : 0, a = o.end ? o.end.valueOf() : 0;
        return r(r(r({}, n.extendedProps), n), {
            id: n.publicId,
            start: i,
            end: a,
            duration: a - i,
            allDay: Number(n.allDay),
            _seg: e
        })
    }

    function Qn(e, t) {
        for (var n = t.pluginHooks.isDraggableTransformers, r = e.eventRange, o = r.def, i = r.ui, a = i.startEditable, s = 0, l = n; s < l.length; s++) {
            a = (0, l[s])(a, o, i, t)
        }
        return a
    }

    function er(e, t) {
        return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart
    }

    function tr(e, t) {
        return e.isEnd && e.eventRange.ui.durationEditable
    }

    function nr(e, t, n, r, o, i, a) {
        var s = n.dateEnv, l = n.options, u = l.displayEventTime, c = l.displayEventEnd, d = e.eventRange.def,
            p = e.eventRange.instance;
        null == u && (u = !1 !== r), null == c && (c = !1 !== o);
        var f = p.range.start, h = p.range.end, v = i || e.start || e.eventRange.range.start,
            g = a || e.end || e.eventRange.range.end, m = ot(f).valueOf() === ot(v).valueOf(),
            y = ot(Je(h, -1)).valueOf() === ot(Je(g, -1)).valueOf();
        return u && !d.allDay && (m || y) ? (v = m ? f : v, g = y ? h : g, c && d.hasEnd ? s.formatRange(v, g, t, {
            forcedStartTzo: i ? null : p.forcedStartTzo,
            forcedEndTzo: a ? null : p.forcedEndTzo
        }) : s.format(v, t, {forcedTzo: i ? null : p.forcedStartTzo})) : ""
    }

    function rr(e, t, n) {
        var r = e.eventRange.range;
        return {isPast: r.end < (n || t.start), isFuture: r.start >= (n || t.end), isToday: t && jn(t, r.start)}
    }

    function or(e) {
        var t = ["fc-event"];
        return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t
    }

    function ir(e) {
        return e.instance ? e.instance.instanceId : e.def.defId + ":" + e.range.start.toISOString()
    }

    var ar = {start: hn, end: hn, allDay: Boolean};

    function sr(e, t, n) {
        var o = function (e, t) {
            var n = fn(e, ar), o = n.refined, i = n.extra, a = o.start ? t.createMarkerMeta(o.start) : null,
                s = o.end ? t.createMarkerMeta(o.end) : null, l = o.allDay;
            null == l && (l = a && a.isTimeUnspecified && (!s || s.isTimeUnspecified));
            return r({range: {start: a ? a.marker : null, end: s ? s.marker : null}, allDay: l}, i)
        }(e, t), i = o.range;
        if (!i.start) return null;
        if (!i.end) {
            if (null == n) return null;
            i.end = t.add(i.start, n)
        }
        return o
    }

    function lr(e, t) {
        return Fn(e.range, t.range) && e.allDay === t.allDay && function (e, t) {
            for (var n in t) if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
            for (var n in e) if (!(n in t)) return !1;
            return !0
        }(e, t)
    }

    function ur(e, t, n) {
        return r(r({}, cr(e, t, n)), {timeZone: t.timeZone})
    }

    function cr(e, t, n) {
        return {
            start: t.toDate(e.start),
            end: t.toDate(e.end),
            startStr: t.formatIso(e.start, {omitTime: n}),
            endStr: t.formatIso(e.end, {omitTime: n})
        }
    }

    function dr(e, t, n) {
        var r = Pn({editable: !1}, n), o = Nn(r.refined, r.extra, "", e.allDay, !0, n);
        return {def: o, ui: Kn(o, t), instance: ft(o.defId, e.range), range: e.range, isStart: !0, isEnd: !0}
    }

    function pr(e, t, n) {
        n.emitter.trigger("select", r(r({}, fr(e, n)), {
            jsEvent: t ? t.origEvent : null,
            view: n.viewApi || n.calendarApi.view
        }))
    }

    function fr(e, t) {
        for (var n, o, i = {}, a = 0, s = t.pluginHooks.dateSpanTransforms; a < s.length; a++) {
            var l = s[a];
            r(i, l(e, t))
        }
        return r(i, (n = e, o = t.dateEnv, r(r({}, cr(n.range, o, n.allDay)), {allDay: n.allDay}))), i
    }

    function hr(e, t, n) {
        var r = n.dateEnv, o = n.options, i = t;
        return e ? (i = ot(i), i = r.add(i, o.defaultAllDayEventDuration)) : i = r.add(i, o.defaultTimedEventDuration), i
    }

    function vr(e, t, n, r) {
        var o = Xn(e.defs, t), i = {defs: {}, instances: {}};
        for (var a in e.defs) {
            var s = e.defs[a];
            i.defs[a] = gr(s, o[a], n, r)
        }
        for (var l in e.instances) {
            var u = e.instances[l];
            s = i.defs[u.defId];
            i.instances[l] = mr(u, s, o[u.defId], n, r)
        }
        return i
    }

    function gr(e, t, n, o) {
        var i = n.standardProps || {};
        null == i.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
        var a = r(r(r({}, e), i), {ui: r(r({}, e.ui), i.ui)});
        n.extendedProps && (a.extendedProps = r(r({}, a.extendedProps), n.extendedProps));
        for (var s = 0, l = o.pluginHooks.eventDefMutationAppliers; s < l.length; s++) {
            (0, l[s])(a, n, o)
        }
        return !a.hasEnd && o.options.forceEventDuration && (a.hasEnd = !0), a
    }

    function mr(e, t, n, o, i) {
        var a = i.dateEnv, s = o.standardProps && !0 === o.standardProps.allDay,
            l = o.standardProps && !1 === o.standardProps.hasEnd, u = r({}, e);
        return s && (u.range = Hn(u.range)), o.datesDelta && n.startEditable && (u.range = {
            start: a.add(u.range.start, o.datesDelta),
            end: a.add(u.range.end, o.datesDelta)
        }), o.startDelta && n.durationEditable && (u.range = {
            start: a.add(u.range.start, o.startDelta),
            end: u.range.end
        }), o.endDelta && n.durationEditable && (u.range = {
            start: u.range.start,
            end: a.add(u.range.end, o.endDelta)
        }), l && (u.range = {
            start: u.range.start,
            end: hr(t.allDay, u.range.start, i)
        }), t.allDay && (u.range = {
            start: ot(u.range.start),
            end: ot(u.range.end)
        }), u.range.end < u.range.start && (u.range.end = hr(t.allDay, u.range.start, i)), u
    }

    var yr = function () {
        function e(e, t, n) {
            this.type = e, this.getCurrentData = t, this.dateEnv = n
        }

        return Object.defineProperty(e.prototype, "calendar", {
            get: function () {
                return this.getCurrentData().calendarApi
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "title", {
            get: function () {
                return this.getCurrentData().viewTitle
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "activeStart", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "activeEnd", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "currentStart", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "currentEnd", {
            get: function () {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)
            }, enumerable: !1, configurable: !0
        }), e.prototype.getOption = function (e) {
            return this.getCurrentData().options[e]
        }, e
    }(), Er = {
        id: String,
        defaultAllDay: Boolean,
        url: String,
        format: String,
        events: hn,
        eventDataTransform: hn,
        success: hn,
        failure: hn
    };

    function Sr(e, t, n) {
        var r;
        if (void 0 === n && (n = Dr(t)), "string" == typeof e ? r = {url: e} : "function" == typeof e || Array.isArray(e) ? r = {events: e} : "object" == typeof e && e && (r = e), r) {
            var o = fn(r, n), i = o.refined, a = o.extra, s = function (e, t) {
                for (var n = t.pluginHooks.eventSourceDefs, r = n.length - 1; r >= 0; r -= 1) {
                    var o = n[r].parseMeta(e);
                    if (o) return {sourceDefId: r, meta: o}
                }
                return null
            }(i, t);
            if (s) return {
                _raw: e,
                isFetching: !1,
                latestFetchId: "",
                fetchRange: null,
                defaultAllDay: i.defaultAllDay,
                eventDataTransform: i.eventDataTransform,
                success: i.success,
                failure: i.failure,
                publicId: i.id || "",
                sourceId: He(),
                sourceDefId: s.sourceDefId,
                meta: s.meta,
                ui: wn(i, t),
                extendedProps: a
            }
        }
        return null
    }

    function Dr(e) {
        return r(r(r({}, bn), Er), e.pluginHooks.eventSourceRefiners)
    }

    function br(e, t) {
        return "function" == typeof e && (e = e()), null == e ? t.createNowMarker() : t.createMarker(e)
    }

    var Cr = function () {
        function e() {
        }

        return e.prototype.getCurrentData = function () {
            return this.currentDataManager.getCurrentData()
        }, e.prototype.dispatch = function (e) {
            return this.currentDataManager.dispatch(e)
        }, Object.defineProperty(e.prototype, "view", {
            get: function () {
                return this.getCurrentData().viewApi
            }, enumerable: !1, configurable: !0
        }), e.prototype.batchRendering = function (e) {
            e()
        }, e.prototype.updateSize = function () {
            this.trigger("_resize", !0)
        }, e.prototype.setOption = function (e, t) {
            this.dispatch({type: "SET_OPTION", optionName: e, rawOptionValue: t})
        }, e.prototype.getOption = function (e) {
            return this.currentDataManager.currentCalendarOptionsInput[e]
        }, e.prototype.getAvailableLocaleCodes = function () {
            return Object.keys(this.getCurrentData().availableRawLocales)
        }, e.prototype.on = function (e, t) {
            var n = this.currentDataManager;
            n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn("Unknown listener name '" + e + "'")
        }, e.prototype.off = function (e, t) {
            this.currentDataManager.emitter.off(e, t)
        }, e.prototype.trigger = function (e) {
            for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            (t = this.currentDataManager.emitter).trigger.apply(t, o([e], n))
        }, e.prototype.changeView = function (e, t) {
            var n = this;
            this.batchRendering((function () {
                if (n.unselect(), t) if (t.start && t.end) n.dispatch({
                    type: "CHANGE_VIEW_TYPE",
                    viewType: e
                }), n.dispatch({type: "SET_OPTION", optionName: "visibleRange", rawOptionValue: t}); else {
                    var r = n.getCurrentData().dateEnv;
                    n.dispatch({type: "CHANGE_VIEW_TYPE", viewType: e, dateMarker: r.createMarker(t)})
                } else n.dispatch({type: "CHANGE_VIEW_TYPE", viewType: e})
            }))
        }, e.prototype.zoomTo = function (e, t) {
            var n;
            t = t || "day", n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t), this.unselect(), n ? this.dispatch({
                type: "CHANGE_VIEW_TYPE",
                viewType: n.type,
                dateMarker: e
            }) : this.dispatch({type: "CHANGE_DATE", dateMarker: e})
        }, e.prototype.getUnitViewSpec = function (e) {
            var t, n, r = this.getCurrentData(), o = r.viewSpecs, i = r.toolbarConfig,
                a = [].concat(i.viewsWithButtons);
            for (var s in o) a.push(s);
            for (t = 0; t < a.length; t += 1) if ((n = o[a[t]]) && n.singleUnit === e) return n;
            return null
        }, e.prototype.prev = function () {
            this.unselect(), this.dispatch({type: "PREV"})
        }, e.prototype.next = function () {
            this.unselect(), this.dispatch({type: "NEXT"})
        }, e.prototype.prevYear = function () {
            var e = this.getCurrentData();
            this.unselect(), this.dispatch({type: "CHANGE_DATE", dateMarker: e.dateEnv.addYears(e.currentDate, -1)})
        }, e.prototype.nextYear = function () {
            var e = this.getCurrentData();
            this.unselect(), this.dispatch({type: "CHANGE_DATE", dateMarker: e.dateEnv.addYears(e.currentDate, 1)})
        }, e.prototype.today = function () {
            var e = this.getCurrentData();
            this.unselect(), this.dispatch({type: "CHANGE_DATE", dateMarker: br(e.calendarOptions.now, e.dateEnv)})
        }, e.prototype.gotoDate = function (e) {
            var t = this.getCurrentData();
            this.unselect(), this.dispatch({type: "CHANGE_DATE", dateMarker: t.dateEnv.createMarker(e)})
        }, e.prototype.incrementDate = function (e) {
            var t = this.getCurrentData(), n = xt(e);
            n && (this.unselect(), this.dispatch({type: "CHANGE_DATE", dateMarker: t.dateEnv.add(t.currentDate, n)}))
        }, e.prototype.getDate = function () {
            var e = this.getCurrentData();
            return e.dateEnv.toDate(e.currentDate)
        }, e.prototype.formatDate = function (e, t) {
            var n = this.getCurrentData().dateEnv;
            return n.format(n.createMarker(e), rn(t))
        }, e.prototype.formatRange = function (e, t, n) {
            var r = this.getCurrentData().dateEnv;
            return r.formatRange(r.createMarker(e), r.createMarker(t), rn(n), n)
        }, e.prototype.formatIso = function (e, t) {
            var n = this.getCurrentData().dateEnv;
            return n.formatIso(n.createMarker(e), {omitTime: t})
        }, e.prototype.select = function (e, t) {
            var n;
            n = null == t ? null != e.start ? e : {start: e, end: null} : {start: e, end: t};
            var r = this.getCurrentData(), o = sr(n, r.dateEnv, xt({days: 1}));
            o && (this.dispatch({type: "SELECT_DATES", selection: o}), pr(o, null, r))
        }, e.prototype.unselect = function (e) {
            var t = this.getCurrentData();
            t.dateSelection && (this.dispatch({type: "UNSELECT_DATES"}), function (e, t) {
                t.emitter.trigger("unselect", {jsEvent: e ? e.origEvent : null, view: t.viewApi || t.calendarApi.view})
            }(e, t))
        }, e.prototype.addEvent = function (e, t) {
            if (e instanceof wr) {
                var n = e._def, r = e._instance;
                return this.getCurrentData().eventStore.defs[n.defId] || (this.dispatch({
                    type: "ADD_EVENTS",
                    eventStore: gn({def: n, instance: r})
                }), this.triggerEventAdd(e)), e
            }
            var o, i = this.getCurrentData();
            if (t instanceof ye) o = t.internalEventSource; else if ("boolean" == typeof t) t && (o = Et(i.eventSources)[0]); else if (null != t) {
                var a = this.getEventSourceById(t);
                if (!a) return console.warn('Could not find an event source with ID "' + t + '"'), null;
                o = a.internalEventSource
            }
            var s = Mn(e, o, i, !1);
            if (s) {
                var l = new wr(i, s.def, s.def.recurringDef ? null : s.instance);
                return this.dispatch({type: "ADD_EVENTS", eventStore: gn(s)}), this.triggerEventAdd(l), l
            }
            return null
        }, e.prototype.triggerEventAdd = function (e) {
            var t = this;
            this.getCurrentData().emitter.trigger("eventAdd", {
                event: e, relatedEvents: [], revert: function () {
                    t.dispatch({type: "REMOVE_EVENTS", eventStore: Rr(e)})
                }
            })
        }, e.prototype.getEventById = function (e) {
            var t = this.getCurrentData(), n = t.eventStore, r = n.defs, o = n.instances;
            for (var i in e = String(e), r) {
                var a = r[i];
                if (a.publicId === e) {
                    if (a.recurringDef) return new wr(t, a, null);
                    for (var s in o) {
                        var l = o[s];
                        if (l.defId === a.defId) return new wr(t, a, l)
                    }
                }
            }
            return null
        }, e.prototype.getEvents = function () {
            var e = this.getCurrentData();
            return _r(e.eventStore, e)
        }, e.prototype.removeAllEvents = function () {
            this.dispatch({type: "REMOVE_ALL_EVENTS"})
        }, e.prototype.getEventSources = function () {
            var e = this.getCurrentData(), t = e.eventSources, n = [];
            for (var r in t) n.push(new ye(e, t[r]));
            return n
        }, e.prototype.getEventSourceById = function (e) {
            var t = this.getCurrentData(), n = t.eventSources;
            for (var r in e = String(e), n) if (n[r].publicId === e) return new ye(t, n[r]);
            return null
        }, e.prototype.addEventSource = function (e) {
            var t = this.getCurrentData();
            if (e instanceof ye) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
                type: "ADD_EVENT_SOURCES",
                sources: [e.internalEventSource]
            }), e;
            var n = Sr(e, t);
            return n ? (this.dispatch({type: "ADD_EVENT_SOURCES", sources: [n]}), new ye(t, n)) : null
        }, e.prototype.removeAllEventSources = function () {
            this.dispatch({type: "REMOVE_ALL_EVENT_SOURCES"})
        }, e.prototype.refetchEvents = function () {
            this.dispatch({type: "FETCH_EVENT_SOURCES", isRefetch: !0})
        }, e.prototype.scrollToTime = function (e) {
            var t = xt(e);
            t && this.trigger("_scrollRequest", {time: t})
        }, e
    }(), wr = function () {
        function e(e, t, n) {
            this._context = e, this._def = t, this._instance = n || null
        }

        return e.prototype.setProp = function (e, t) {
            var n, r;
            if (e in kn) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead."); else if ("id" === e) t = Tn[e](t), this.mutate({standardProps: {publicId: t}}); else if (e in Tn) t = Tn[e](t), this.mutate({standardProps: (n = {}, n[e] = t, n)}); else if (e in bn) {
                var o = bn[e](t);
                "color" === e ? o = {backgroundColor: t, borderColor: t} : "editable" === e ? o = {
                    startEditable: t,
                    durationEditable: t
                } : ((r = {})[e] = t, o = r), this.mutate({standardProps: {ui: o}})
            } else console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.")
        }, e.prototype.setExtendedProp = function (e, t) {
            var n;
            this.mutate({extendedProps: (n = {}, n[e] = t, n)})
        }, e.prototype.setStart = function (e, t) {
            void 0 === t && (t = {});
            var n = this._context.dateEnv, r = n.createMarker(e);
            if (r && this._instance) {
                var o = Un(this._instance.range.start, r, n, t.granularity);
                t.maintainDuration ? this.mutate({datesDelta: o}) : this.mutate({startDelta: o})
            }
        }, e.prototype.setEnd = function (e, t) {
            void 0 === t && (t = {});
            var n, r = this._context.dateEnv;
            if ((null == e || (n = r.createMarker(e))) && this._instance) if (n) {
                var o = Un(this._instance.range.end, n, r, t.granularity);
                this.mutate({endDelta: o})
            } else this.mutate({standardProps: {hasEnd: !1}})
        }, e.prototype.setDates = function (e, t, n) {
            void 0 === n && (n = {});
            var r, o, i, a = this._context.dateEnv, s = {allDay: n.allDay}, l = a.createMarker(e);
            if (l && ((null == t || (r = a.createMarker(t))) && this._instance)) {
                var u = this._instance.range;
                !0 === n.allDay && (u = Hn(u));
                var c = Un(u.start, l, a, n.granularity);
                if (r) {
                    var d = Un(u.end, r, a, n.granularity);
                    i = d, (o = c).years === i.years && o.months === i.months && o.days === i.days && o.milliseconds === i.milliseconds ? this.mutate({
                        datesDelta: c,
                        standardProps: s
                    }) : this.mutate({startDelta: c, endDelta: d, standardProps: s})
                } else s.hasEnd = !1, this.mutate({datesDelta: c, standardProps: s})
            }
        }, e.prototype.moveStart = function (e) {
            var t = xt(e);
            t && this.mutate({startDelta: t})
        }, e.prototype.moveEnd = function (e) {
            var t = xt(e);
            t && this.mutate({endDelta: t})
        }, e.prototype.moveDates = function (e) {
            var t = xt(e);
            t && this.mutate({datesDelta: t})
        }, e.prototype.setAllDay = function (e, t) {
            void 0 === t && (t = {});
            var n = {allDay: e}, r = t.maintainDuration;
            null == r && (r = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = r), this.mutate({standardProps: n})
        }, e.prototype.formatRange = function (e) {
            var t = this._context.dateEnv, n = this._instance, r = rn(e);
            return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
                forcedStartTzo: n.forcedStartTzo,
                forcedEndTzo: n.forcedEndTzo
            }) : t.format(n.range.start, r, {forcedTzo: n.forcedStartTzo})
        }, e.prototype.mutate = function (t) {
            var n = this._instance;
            if (n) {
                var r = this._def, o = this._context, i = o.getCurrentData().eventStore, a = mn(i, n.instanceId);
                a = vr(a, {
                    "": {
                        display: "",
                        startEditable: !0,
                        durationEditable: !0,
                        constraints: [],
                        overlap: null,
                        allows: [],
                        backgroundColor: "",
                        borderColor: "",
                        textColor: "",
                        classNames: []
                    }
                }, t, o);
                var s = new e(o, r, n);
                this._def = a.defs[r.defId], this._instance = a.instances[n.instanceId], o.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: a
                }), o.emitter.trigger("eventChange", {
                    oldEvent: s,
                    event: this,
                    relatedEvents: _r(a, o, n),
                    revert: function () {
                        o.dispatch({type: "RESET_EVENTS", eventStore: i})
                    }
                })
            }
        }, e.prototype.remove = function () {
            var e = this._context, t = Rr(this);
            e.dispatch({type: "REMOVE_EVENTS", eventStore: t}), e.emitter.trigger("eventRemove", {
                event: this,
                relatedEvents: [],
                revert: function () {
                    e.dispatch({type: "MERGE_EVENTS", eventStore: t})
                }
            })
        }, Object.defineProperty(e.prototype, "source", {
            get: function () {
                var e = this._def.sourceId;
                return e ? new ye(this._context, this._context.getCurrentData().eventSources[e]) : null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "start", {
            get: function () {
                return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "end", {
            get: function () {
                return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "startStr", {
            get: function () {
                var e = this._instance;
                return e ? this._context.dateEnv.formatIso(e.range.start, {
                    omitTime: this._def.allDay,
                    forcedTzo: e.forcedStartTzo
                }) : ""
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "endStr", {
            get: function () {
                var e = this._instance;
                return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
                    omitTime: this._def.allDay,
                    forcedTzo: e.forcedEndTzo
                }) : ""
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this._def.publicId
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "groupId", {
            get: function () {
                return this._def.groupId
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "allDay", {
            get: function () {
                return this._def.allDay
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "title", {
            get: function () {
                return this._def.title
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "url", {
            get: function () {
                return this._def.url
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "display", {
            get: function () {
                return this._def.ui.display || "auto"
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "startEditable", {
            get: function () {
                return this._def.ui.startEditable
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "durationEditable", {
            get: function () {
                return this._def.ui.durationEditable
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "constraint", {
            get: function () {
                return this._def.ui.constraints[0] || null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "overlap", {
            get: function () {
                return this._def.ui.overlap
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "allow", {
            get: function () {
                return this._def.ui.allows[0] || null
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "backgroundColor", {
            get: function () {
                return this._def.ui.backgroundColor
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "borderColor", {
            get: function () {
                return this._def.ui.borderColor
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "textColor", {
            get: function () {
                return this._def.ui.textColor
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "classNames", {
            get: function () {
                return this._def.ui.classNames
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(e.prototype, "extendedProps", {
            get: function () {
                return this._def.extendedProps
            }, enumerable: !1, configurable: !0
        }), e.prototype.toPlainObject = function (e) {
            void 0 === e && (e = {});
            var t = this._def, n = t.ui, o = this.startStr, i = this.endStr, a = {};
            return t.title && (a.title = t.title), o && (a.start = o), i && (a.end = i), t.publicId && (a.id = t.publicId), t.groupId && (a.groupId = t.groupId), t.url && (a.url = t.url), n.display && "auto" !== n.display && (a.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? a.color = n.backgroundColor : (n.backgroundColor && (a.backgroundColor = n.backgroundColor), n.borderColor && (a.borderColor = n.borderColor)), n.textColor && (a.textColor = n.textColor), n.classNames.length && (a.classNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? r(a, t.extendedProps) : a.extendedProps = t.extendedProps), a
        }, e.prototype.toJSON = function () {
            return this.toPlainObject()
        }, e
    }();

    function Rr(e) {
        var t, n, r = e._def, o = e._instance;
        return {defs: (t = {}, t[r.defId] = r, t), instances: o ? (n = {}, n[o.instanceId] = o, n) : {}}
    }

    function _r(e, t, n) {
        var r = e.defs, o = e.instances, i = [], a = n ? n.instanceId : "";
        for (var s in o) {
            var l = o[s], u = r[l.defId];
            l.instanceId !== a && i.push(new wr(t, u, l))
        }
        return i
    }

    var Tr = {};
    var kr, xr = function () {
        function e() {
        }

        return e.prototype.getMarkerYear = function (e) {
            return e.getUTCFullYear()
        }, e.prototype.getMarkerMonth = function (e) {
            return e.getUTCMonth()
        }, e.prototype.getMarkerDay = function (e) {
            return e.getUTCDate()
        }, e.prototype.arrayToMarker = function (e) {
            return ct(e)
        }, e.prototype.markerToArray = function (e) {
            return ut(e)
        }, e
    }();
    kr = xr, Tr["gregory"] = kr;
    var Mr = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

    function Pr(e) {
        var t = Mr.exec(e);
        if (t) {
            var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0));
            if (dt(n)) {
                var r = null;
                return t[13] && (r = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), {
                    marker: n,
                    isTimeUnspecified: !t[6],
                    timeZoneOffset: r
                }
            }
        }
        return null
    }

    var Ir = function () {
        function e(e) {
            var t = this.timeZone = e.timeZone, n = "local" !== t && "UTC" !== t;
            e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)), this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl), this.calendarSystem = function (e) {
                return new Tr[e]
            }(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, "ISO" === e.weekNumberCalculation && (this.weekDow = 1, this.weekDoy = 4), "number" == typeof e.firstDay && (this.weekDow = e.firstDay), "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = null != e.weekText ? e.weekText : e.locale.options.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator
        }

        return e.prototype.createMarker = function (e) {
            var t = this.createMarkerMeta(e);
            return null === t ? null : t.marker
        }, e.prototype.createNowMarker = function () {
            return this.canComputeOffset ? this.timestampToMarker((new Date).valueOf()) : ct(st(new Date))
        }, e.prototype.createMarkerMeta = function (e) {
            if ("string" == typeof e) return this.parse(e);
            var t = null;
            return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = ct(e)), null !== t && dt(t) ? {
                marker: t,
                isTimeUnspecified: !1,
                forcedTzo: null
            } : null
        }, e.prototype.parse = function (e) {
            var t = Pr(e);
            if (null === t) return null;
            var n = t.marker, r = null;
            return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset), {
                marker: n,
                isTimeUnspecified: t.isTimeUnspecified,
                forcedTzo: r
            }
        }, e.prototype.getYear = function (e) {
            return this.calendarSystem.getMarkerYear(e)
        }, e.prototype.getMonth = function (e) {
            return this.calendarSystem.getMarkerMonth(e)
        }, e.prototype.add = function (e, t) {
            var n = this.calendarSystem.markerToArray(e);
            return n[0] += t.years, n[1] += t.months, n[2] += t.days, n[6] += t.milliseconds, this.calendarSystem.arrayToMarker(n)
        }, e.prototype.subtract = function (e, t) {
            var n = this.calendarSystem.markerToArray(e);
            return n[0] -= t.years, n[1] -= t.months, n[2] -= t.days, n[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(n)
        }, e.prototype.addYears = function (e, t) {
            var n = this.calendarSystem.markerToArray(e);
            return n[0] += t, this.calendarSystem.arrayToMarker(n)
        }, e.prototype.addMonths = function (e, t) {
            var n = this.calendarSystem.markerToArray(e);
            return n[1] += t, this.calendarSystem.arrayToMarker(n)
        }, e.prototype.diffWholeYears = function (e, t) {
            var n = this.calendarSystem;
            return pt(e) === pt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null
        }, e.prototype.diffWholeMonths = function (e, t) {
            var n = this.calendarSystem;
            return pt(e) === pt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null
        }, e.prototype.greatestWholeUnit = function (e, t) {
            var n = this.diffWholeYears(e, t);
            return null !== n ? {unit: "year", value: n} : null !== (n = this.diffWholeMonths(e, t)) ? {
                unit: "month",
                value: n
            } : null !== (n = nt(e, t)) ? {unit: "week", value: n} : null !== (n = rt(e, t)) ? {
                unit: "day",
                value: n
            } : Ye(n = function (e, t) {
                return (t.valueOf() - e.valueOf()) / 36e5
            }(e, t)) ? {unit: "hour", value: n} : Ye(n = function (e, t) {
                return (t.valueOf() - e.valueOf()) / 6e4
            }(e, t)) ? {unit: "minute", value: n} : Ye(n = function (e, t) {
                return (t.valueOf() - e.valueOf()) / 1e3
            }(e, t)) ? {unit: "second", value: n} : {unit: "millisecond", value: t.valueOf() - e.valueOf()}
        }, e.prototype.countDurationsBetween = function (e, t, n) {
            var r;
            return n.years && null !== (r = this.diffWholeYears(e, t)) ? r / (Nt(n) / 365) : n.months && null !== (r = this.diffWholeMonths(e, t)) ? r / function (e) {
                return Nt(e) / 30
            }(n) : n.days && null !== (r = rt(e, t)) ? r / Nt(n) : (t.valueOf() - e.valueOf()) / Ht(n)
        }, e.prototype.startOf = function (e, t) {
            return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? ot(e) : "hour" === t ? function (e) {
                return ct([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()])
            }(e) : "minute" === t ? function (e) {
                return ct([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()])
            }(e) : "second" === t ? function (e) {
                return ct([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()])
            }(e) : null
        }, e.prototype.startOfYear = function (e) {
            return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])
        }, e.prototype.startOfMonth = function (e) {
            return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)])
        }, e.prototype.startOfWeek = function (e) {
            return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7])
        }, e.prototype.computeWeekNumber = function (e) {
            return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function (e, t, n) {
                var r = e.getUTCFullYear(), o = it(e, r, t, n);
                if (o < 1) return it(e, r - 1, t, n);
                var i = it(e, r + 1, t, n);
                return i >= 1 ? Math.min(o, i) : o
            }(e, this.weekDow, this.weekDoy)
        }, e.prototype.format = function (e, t, n) {
            return void 0 === n && (n = {}), t.format({
                marker: e,
                timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
            }, this)
        }, e.prototype.formatRange = function (e, t, n, r) {
            return void 0 === r && (r = {}), r.isEndExclusive && (t = Je(t, -1)), n.formatRange({
                marker: e,
                timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
            }, {
                marker: t,
                timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
            }, this, r.defaultSeparator)
        }, e.prototype.formatIso = function (e, t) {
            void 0 === t && (t = {});
            var n = null;
            return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)), Ut(e, n, t.omitTime)
        }, e.prototype.timestampToMarker = function (e) {
            return "local" === this.timeZone ? ct(st(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? ct(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e)
        }, e.prototype.offsetForMarker = function (e) {
            return "local" === this.timeZone ? -lt(ut(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(ut(e)) : null
        }, e.prototype.toDate = function (e, t) {
            return "local" === this.timeZone ? lt(ut(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(ut(e)) * 60) : new Date(e.valueOf() - (t || 0))
        }, e
    }(), Nr = [], Hr = {
        code: "en",
        week: {dow: 0, doy: 4},
        direction: "ltr",
        buttonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            year: "year",
            today: "today",
            month: "month",
            week: "week",
            day: "day",
            list: "list"
        },
        weekText: "W",
        allDayText: "all-day",
        moreLinkText: "more",
        noEventsText: "No events to display"
    };

    function Or(e) {
        for (var t = e.length > 0 ? e[0].code : "en", n = Nr.concat(e), r = {en: Hr}, o = 0, i = n; o < i.length; o++) {
            var a = i[o];
            r[a.code] = a
        }
        return {map: r, defaultCode: t}
    }

    function Ar(e, t) {
        return "object" != typeof e || Array.isArray(e) ? function (e, t) {
            var n = [].concat(e || []), r = function (e, t) {
                for (var n = 0; n < e.length; n += 1) for (var r = e[n].toLocaleLowerCase().split("-"), o = r.length; o > 0; o -= 1) {
                    var i = r.slice(0, o).join("-");
                    if (t[i]) return t[i]
                }
                return null
            }(n, t) || Hr;
            return Ur(e, n, r)
        }(e, t) : Ur(e.code, [e.code], e)
    }

    function Ur(e, t, n) {
        var r = vt([Hr, n], ["buttonText"]);
        delete r.code;
        var o = r.week;
        return delete r.week, {codeArg: e, codes: t, week: o, simpleNumberFormat: new Intl.NumberFormat(e), options: r}
    }

    function Lr(e) {
        var t = Ar(e.locale || "en", Or([]).map);
        return new Ir(r(r({timeZone: an.timeZone, calendarSystem: "gregory"}, e), {locale: t}))
    }

    var Wr, Vr = {
        startTime: "09:00",
        endTime: "17:00",
        daysOfWeek: [1, 2, 3, 4, 5],
        display: "inverse-background",
        classNames: "fc-non-business",
        groupId: "_businessHours"
    };

    function Fr(e, t) {
        return vn(function (e) {
            var t;
            t = !0 === e ? [{}] : Array.isArray(e) ? e.filter((function (e) {
                return e.daysOfWeek
            })) : "object" == typeof e && e ? [e] : [];
            return t = t.map((function (e) {
                return r(r({}, Vr), e)
            }))
        }(e), null, t)
    }

    function zr(e, t) {
        return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
    }

    function Br(e, t) {
        var n = {
            left: Math.max(e.left, t.left),
            right: Math.min(e.right, t.right),
            top: Math.max(e.top, t.top),
            bottom: Math.min(e.bottom, t.bottom)
        };
        return n.left < n.right && n.top < n.bottom && n
    }

    function jr(e, t) {
        return {left: Math.min(Math.max(e.left, t.left), t.right), top: Math.min(Math.max(e.top, t.top), t.bottom)}
    }

    function Gr(e) {
        return {left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2}
    }

    function qr(e, t) {
        return {left: e.left - t.left, top: e.top - t.top}
    }

    function Yr() {
        return null == Wr && (Wr = function () {
            if ("undefined" == typeof document) return !0;
            var e = document.createElement("div");
            e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
            var t = e.querySelector("div").offsetHeight > 0;
            return document.body.removeChild(e), t
        }()), Wr
    }

    var Zr = {defs: {}, instances: {}}, Xr = function () {
        function e() {
            this.getKeysForEventDefs = zt(this._getKeysForEventDefs), this.splitDateSelection = zt(this._splitDateSpan), this.splitEventStore = zt(this._splitEventStore), this.splitIndividualUi = zt(this._splitIndividualUi), this.splitEventDrag = zt(this._splitInteraction), this.splitEventResize = zt(this._splitInteraction), this.eventUiBuilders = {}
        }

        return e.prototype.splitProps = function (e) {
            var t = this, n = this.getKeyInfo(e), r = this.getKeysForEventDefs(e.eventStore),
                o = this.splitDateSelection(e.dateSelection), i = this.splitIndividualUi(e.eventUiBases, r),
                a = this.splitEventStore(e.eventStore, r), s = this.splitEventDrag(e.eventDrag),
                l = this.splitEventResize(e.eventResize), u = {};
            for (var c in this.eventUiBuilders = mt(n, (function (e, n) {
                return t.eventUiBuilders[n] || zt(Kr)
            })), n) {
                var d = n[c], p = a[c] || Zr, f = this.eventUiBuilders[c];
                u[c] = {
                    businessHours: d.businessHours || e.businessHours,
                    dateSelection: o[c] || null,
                    eventStore: p,
                    eventUiBases: f(e.eventUiBases[""], d.ui, i[c]),
                    eventSelection: p.instances[e.eventSelection] ? e.eventSelection : "",
                    eventDrag: s[c] || null,
                    eventResize: l[c] || null
                }
            }
            return u
        }, e.prototype._splitDateSpan = function (e) {
            var t = {};
            if (e) for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++) {
                t[r[n]] = e
            }
            return t
        }, e.prototype._getKeysForEventDefs = function (e) {
            var t = this;
            return mt(e.defs, (function (e) {
                return t.getKeysForEventDef(e)
            }))
        }, e.prototype._splitEventStore = function (e, t) {
            var n = e.defs, r = e.instances, o = {};
            for (var i in n) for (var a = 0, s = t[i]; a < s.length; a++) {
                o[p = s[a]] || (o[p] = {defs: {}, instances: {}}), o[p].defs[i] = n[i]
            }
            for (var l in r) for (var u = r[l], c = 0, d = t[u.defId]; c < d.length; c++) {
                var p;
                o[p = d[c]] && (o[p].instances[l] = u)
            }
            return o
        }, e.prototype._splitIndividualUi = function (e, t) {
            var n = {};
            for (var r in e) if (r) for (var o = 0, i = t[r]; o < i.length; o++) {
                var a = i[o];
                n[a] || (n[a] = {}), n[a][r] = e[r]
            }
            return n
        }, e.prototype._splitInteraction = function (e) {
            var t = {};
            if (e) {
                var n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)),
                    r = this._getKeysForEventDefs(e.mutatedEvents), o = this._splitEventStore(e.mutatedEvents, r),
                    i = function (r) {
                        t[r] || (t[r] = {affectedEvents: n[r] || Zr, mutatedEvents: o[r] || Zr, isEvent: e.isEvent})
                    };
                for (var a in n) i(a);
                for (var a in o) i(a)
            }
            return t
        }, e
    }();

    function Kr(e, t, n) {
        var o = [];
        e && o.push(e), t && o.push(t);
        var i = {"": Rn(o)};
        return n && r(i, n), i
    }

    function $r(e, t, n, r) {
        return {
            dow: e.getUTCDay(),
            isDisabled: Boolean(r && !jn(r.activeRange, e)),
            isOther: Boolean(r && !jn(r.currentRange, e)),
            isToday: Boolean(t && jn(t, e)),
            isPast: Boolean(n ? e < n : !!t && e < t.start),
            isFuture: Boolean(n ? e > n : !!t && e >= t.end)
        }
    }

    function Jr(e, t) {
        var n = ["fc-day", "fc-day-" + Xe[e.dow]];
        return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n
    }

    function Qr(e, t) {
        return void 0 === t && (t = "day"), JSON.stringify({date: Lt(e), type: t})
    }

    var eo, to = null;

    function no() {
        return null === to && (to = function () {
            var e = document.createElement("div");
            we(e, {
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }), e.innerHTML = "<div></div>", document.body.appendChild(e);
            var t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
            return Ee(e), t
        }()), to
    }

    function ro() {
        return eo || (eo = function () {
            var e = document.createElement("div");
            e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", document.body.appendChild(e);
            var t = oo(e);
            return document.body.removeChild(e), t
        }()), eo
    }

    function oo(e) {
        return {x: e.offsetHeight - e.clientHeight, y: e.offsetWidth - e.clientWidth}
    }

    function io(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e), r = parseInt(n.borderLeftWidth, 10) || 0,
            o = parseInt(n.borderRightWidth, 10) || 0, i = parseInt(n.borderTopWidth, 10) || 0,
            a = parseInt(n.borderBottomWidth, 10) || 0, s = oo(e), l = s.y - r - o, u = {
                borderLeft: r,
                borderRight: o,
                borderTop: i,
                borderBottom: a,
                scrollbarBottom: s.x - i - a,
                scrollbarLeft: 0,
                scrollbarRight: 0
            };
        return no() && "rtl" === n.direction ? u.scrollbarLeft = l : u.scrollbarRight = l, t && (u.paddingLeft = parseInt(n.paddingLeft, 10) || 0, u.paddingRight = parseInt(n.paddingRight, 10) || 0, u.paddingTop = parseInt(n.paddingTop, 10) || 0, u.paddingBottom = parseInt(n.paddingBottom, 10) || 0), u
    }

    function ao(e, t, n) {
        void 0 === t && (t = !1);
        var r = n ? e.getBoundingClientRect() : so(e), o = io(e, t), i = {
            left: r.left + o.borderLeft + o.scrollbarLeft,
            right: r.right - o.borderRight - o.scrollbarRight,
            top: r.top + o.borderTop,
            bottom: r.bottom - o.borderBottom - o.scrollbarBottom
        };
        return t && (i.left += o.paddingLeft, i.right -= o.paddingRight, i.top += o.paddingTop, i.bottom -= o.paddingBottom), i
    }

    function so(e) {
        var t = e.getBoundingClientRect();
        return {
            left: t.left + window.pageXOffset,
            top: t.top + window.pageYOffset,
            right: t.right + window.pageXOffset,
            bottom: t.bottom + window.pageYOffset
        }
    }

    function lo(e) {
        for (var t = []; e instanceof HTMLElement;) {
            var n = window.getComputedStyle(e);
            if ("fixed" === n.position) break;
            /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode
        }
        return t
    }

    function uo(e, t, n) {
        var r = !1, o = function () {
            r || (r = !0, t.apply(this, arguments))
        }, i = function () {
            r || (r = !0, n && n.apply(this, arguments))
        }, a = e(o, i);
        a && "function" == typeof a.then && a.then(o, i)
    }

    var co = function () {
        function e() {
            this.handlers = {}, this.thisContext = null
        }

        return e.prototype.setThisContext = function (e) {
            this.thisContext = e
        }, e.prototype.setOptions = function (e) {
            this.options = e
        }, e.prototype.on = function (e, t) {
            !function (e, t, n) {
                (e[t] || (e[t] = [])).push(n)
            }(this.handlers, e, t)
        }, e.prototype.off = function (e, t) {
            !function (e, t, n) {
                n ? e[t] && (e[t] = e[t].filter((function (e) {
                    return e !== n
                }))) : delete e[t]
            }(this.handlers, e, t)
        }, e.prototype.trigger = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            for (var r = this.handlers[e] || [], o = this.options && this.options[e], i = [].concat(o || [], r), a = 0, s = i; a < s.length; a++) {
                var l = s[a];
                l.apply(this.thisContext, t)
            }
        }, e.prototype.hasHandlers = function (e) {
            return this.handlers[e] && this.handlers[e].length || this.options && this.options[e]
        }, e
    }();
    var po = function () {
        function e(e, t, n, r) {
            this.els = t;
            var o = this.originClientRect = e.getBoundingClientRect();
            n && this.buildElHorizontals(o.left), r && this.buildElVerticals(o.top)
        }

        return e.prototype.buildElHorizontals = function (e) {
            for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                var i = o[r].getBoundingClientRect();
                t.push(i.left - e), n.push(i.right - e)
            }
            this.lefts = t, this.rights = n
        }, e.prototype.buildElVerticals = function (e) {
            for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                var i = o[r].getBoundingClientRect();
                t.push(i.top - e), n.push(i.bottom - e)
            }
            this.tops = t, this.bottoms = n
        }, e.prototype.leftToIndex = function (e) {
            var t, n = this.lefts, r = this.rights, o = n.length;
            for (t = 0; t < o; t += 1) if (e >= n[t] && e < r[t]) return t
        }, e.prototype.topToIndex = function (e) {
            var t, n = this.tops, r = this.bottoms, o = n.length;
            for (t = 0; t < o; t += 1) if (e >= n[t] && e < r[t]) return t
        }, e.prototype.getWidth = function (e) {
            return this.rights[e] - this.lefts[e]
        }, e.prototype.getHeight = function (e) {
            return this.bottoms[e] - this.tops[e]
        }, e
    }(), fo = function () {
        function e() {
        }

        return e.prototype.getMaxScrollTop = function () {
            return this.getScrollHeight() - this.getClientHeight()
        }, e.prototype.getMaxScrollLeft = function () {
            return this.getScrollWidth() - this.getClientWidth()
        }, e.prototype.canScrollVertically = function () {
            return this.getMaxScrollTop() > 0
        }, e.prototype.canScrollHorizontally = function () {
            return this.getMaxScrollLeft() > 0
        }, e.prototype.canScrollUp = function () {
            return this.getScrollTop() > 0
        }, e.prototype.canScrollDown = function () {
            return this.getScrollTop() < this.getMaxScrollTop()
        }, e.prototype.canScrollLeft = function () {
            return this.getScrollLeft() > 0
        }, e.prototype.canScrollRight = function () {
            return this.getScrollLeft() < this.getMaxScrollLeft()
        }, e
    }(), ho = function (e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.el = t, n
        }

        return n(t, e), t.prototype.getScrollTop = function () {
            return this.el.scrollTop
        }, t.prototype.getScrollLeft = function () {
            return this.el.scrollLeft
        }, t.prototype.setScrollTop = function (e) {
            this.el.scrollTop = e
        }, t.prototype.setScrollLeft = function (e) {
            this.el.scrollLeft = e
        }, t.prototype.getScrollWidth = function () {
            return this.el.scrollWidth
        }, t.prototype.getScrollHeight = function () {
            return this.el.scrollHeight
        }, t.prototype.getClientHeight = function () {
            return this.el.clientHeight
        }, t.prototype.getClientWidth = function () {
            return this.el.clientWidth
        }, t
    }(fo), vo = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.getScrollTop = function () {
            return window.pageYOffset
        }, t.prototype.getScrollLeft = function () {
            return window.pageXOffset
        }, t.prototype.setScrollTop = function (e) {
            window.scroll(window.pageXOffset, e)
        }, t.prototype.setScrollLeft = function (e) {
            window.scroll(e, window.pageYOffset)
        }, t.prototype.getScrollWidth = function () {
            return document.documentElement.scrollWidth
        }, t.prototype.getScrollHeight = function () {
            return document.documentElement.scrollHeight
        }, t.prototype.getClientHeight = function () {
            return document.documentElement.clientHeight
        }, t.prototype.getClientWidth = function () {
            return document.documentElement.clientWidth
        }, t
    }(fo), go = function () {
        function e(e) {
            this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption])
        }

        return e.prototype.setIconOverride = function (e) {
            var t, n;
            if ("object" == typeof e && e) {
                for (n in t = r({}, this.iconClasses), e) t[n] = this.applyIconOverridePrefix(e[n]);
                this.iconClasses = t
            } else !1 === e && (this.iconClasses = {})
        }, e.prototype.applyIconOverridePrefix = function (e) {
            var t = this.iconOverridePrefix;
            return t && 0 !== e.indexOf(t) && (e = t + e), e
        }, e.prototype.getClass = function (e) {
            return this.classes[e] || ""
        }, e.prototype.getIconClass = function (e, t) {
            var n;
            return (n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e]) ? this.baseIconClass + " " + n : ""
        }, e.prototype.getCustomButtonIconClass = function (e) {
            var t;
            return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : ""
        }, e
    }();
    if (go.prototype.classes = {}, go.prototype.iconClasses = {}, go.prototype.baseIconClass = "", go.prototype.iconOverridePrefix = "", "undefined" == typeof FullCalendarVDom) throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
    var mo = FullCalendarVDom.Component, yo = FullCalendarVDom.createElement, Eo = FullCalendarVDom.render,
        So = FullCalendarVDom.createRef, Do = FullCalendarVDom.Fragment, bo = FullCalendarVDom.createContext,
        Co = FullCalendarVDom.createPortal, wo = FullCalendarVDom.flushToDom,
        Ro = FullCalendarVDom.unmountComponentAtNode, _o = function () {
            function e(e, t, n, o) {
                var i = this;
                this.execFunc = e, this.emitter = t, this.scrollTime = n, this.scrollTimeReset = o, this.handleScrollRequest = function (e) {
                    i.queuedRequest = r({}, i.queuedRequest || {}, e), i.drain()
                }, t.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll()
            }

            return e.prototype.detach = function () {
                this.emitter.off("_scrollRequest", this.handleScrollRequest)
            }, e.prototype.update = function (e) {
                e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain()
            }, e.prototype.fireInitialScroll = function () {
                this.handleScrollRequest({time: this.scrollTime})
            }, e.prototype.drain = function () {
                this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null)
            }, e
        }(), To = bo({});

    function ko(e, t, n, r, o, i, a, s, l, u, c, d, p) {
        return {
            dateEnv: o,
            options: n,
            pluginHooks: a,
            emitter: u,
            dispatch: s,
            getCurrentData: l,
            calendarApi: c,
            viewSpec: e,
            viewApi: t,
            dateProfileGenerator: r,
            theme: i,
            isRtl: "rtl" === n.direction,
            addResizeHandler: function (e) {
                u.on("_resize", e)
            },
            removeResizeHandler: function (e) {
                u.off("_resize", e)
            },
            createScrollResponder: function (e) {
                return new _o(e, u, xt(n.scrollTime), n.scrollTimeReset)
            },
            registerInteractiveComponent: d,
            unregisterInteractiveComponent: p
        }
    }

    var xo = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.shouldComponentUpdate = function (e, t) {
            return this.debug && console.log(Dt(e, this.props), Dt(t, this.state)), !bt(this.props, e, this.propEquality) || !bt(this.state, t, this.stateEquality)
        }, t.addPropsEquality = Po, t.addStateEquality = Io, t.contextType = To, t
    }(mo);
    xo.prototype.propEquality = {}, xo.prototype.stateEquality = {};
    var Mo = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.contextType = To, t
    }(xo);

    function Po(e) {
        var t = Object.create(this.prototype.propEquality);
        r(t, e), this.prototype.propEquality = t
    }

    function Io(e) {
        var t = Object.create(this.prototype.stateEquality);
        r(t, e), this.prototype.stateEquality = t
    }

    function No(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t)
    }

    var Ho = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.uid = He(), t
        }

        return n(t, e), t.prototype.prepareHits = function () {
        }, t.prototype.queryHit = function (e, t, n, r) {
            return null
        }, t.prototype.isValidSegDownEl = function (e) {
            return !this.props.eventDrag && !this.props.eventResize && !Se(e, ".fc-event-mirror")
        }, t.prototype.isValidDateDownEl = function (e) {
            return !(Se(e, ".fc-event:not(.fc-bg-event)") || Se(e, ".fc-more-link") || Se(e, "a[data-navlink]") || Se(e, ".fc-popover"))
        }, t
    }(Mo);

    function Oo(e) {
        return {
            id: He(),
            deps: e.deps || [],
            reducers: e.reducers || [],
            isLoadingFuncs: e.isLoadingFuncs || [],
            contextInit: [].concat(e.contextInit || []),
            eventRefiners: e.eventRefiners || {},
            eventDefMemberAdders: e.eventDefMemberAdders || [],
            eventSourceRefiners: e.eventSourceRefiners || {},
            isDraggableTransformers: e.isDraggableTransformers || [],
            eventDragMutationMassagers: e.eventDragMutationMassagers || [],
            eventDefMutationAppliers: e.eventDefMutationAppliers || [],
            dateSelectionTransformers: e.dateSelectionTransformers || [],
            datePointTransforms: e.datePointTransforms || [],
            dateSpanTransforms: e.dateSpanTransforms || [],
            views: e.views || {},
            viewPropsTransformers: e.viewPropsTransformers || [],
            isPropsValid: e.isPropsValid || null,
            externalDefTransforms: e.externalDefTransforms || [],
            viewContainerAppends: e.viewContainerAppends || [],
            eventDropTransformers: e.eventDropTransformers || [],
            componentInteractions: e.componentInteractions || [],
            calendarInteractions: e.calendarInteractions || [],
            themeClasses: e.themeClasses || {},
            eventSourceDefs: e.eventSourceDefs || [],
            cmdFormatter: e.cmdFormatter,
            recurringTypes: e.recurringTypes || [],
            namedTimeZonedImpl: e.namedTimeZonedImpl,
            initialView: e.initialView || "",
            elementDraggingImpl: e.elementDraggingImpl,
            optionChangeHandlers: e.optionChangeHandlers || {},
            scrollGridImpl: e.scrollGridImpl || null,
            contentTypeHandlers: e.contentTypeHandlers || {},
            listenerRefiners: e.listenerRefiners || {},
            optionRefiners: e.optionRefiners || {},
            propSetHandlers: e.propSetHandlers || {}
        }
    }

    function Ao() {
        var e, t = [], n = [];
        return function (o, i) {
            return e && Ft(o, t) && Ft(i, n) || (e = function (e, t) {
                var n = {}, o = {
                    reducers: [],
                    isLoadingFuncs: [],
                    contextInit: [],
                    eventRefiners: {},
                    eventDefMemberAdders: [],
                    eventSourceRefiners: {},
                    isDraggableTransformers: [],
                    eventDragMutationMassagers: [],
                    eventDefMutationAppliers: [],
                    dateSelectionTransformers: [],
                    datePointTransforms: [],
                    dateSpanTransforms: [],
                    views: {},
                    viewPropsTransformers: [],
                    isPropsValid: null,
                    externalDefTransforms: [],
                    viewContainerAppends: [],
                    eventDropTransformers: [],
                    componentInteractions: [],
                    calendarInteractions: [],
                    themeClasses: {},
                    eventSourceDefs: [],
                    cmdFormatter: null,
                    recurringTypes: [],
                    namedTimeZonedImpl: null,
                    initialView: "",
                    elementDraggingImpl: null,
                    optionChangeHandlers: {},
                    scrollGridImpl: null,
                    contentTypeHandlers: {},
                    listenerRefiners: {},
                    optionRefiners: {},
                    propSetHandlers: {}
                };

                function i(e) {
                    for (var t = 0, a = e; t < a.length; t++) {
                        var s = a[t];
                        n[s.id] || (n[s.id] = !0, i(s.deps), u = s, o = {
                            reducers: (l = o).reducers.concat(u.reducers),
                            isLoadingFuncs: l.isLoadingFuncs.concat(u.isLoadingFuncs),
                            contextInit: l.contextInit.concat(u.contextInit),
                            eventRefiners: r(r({}, l.eventRefiners), u.eventRefiners),
                            eventDefMemberAdders: l.eventDefMemberAdders.concat(u.eventDefMemberAdders),
                            eventSourceRefiners: r(r({}, l.eventSourceRefiners), u.eventSourceRefiners),
                            isDraggableTransformers: l.isDraggableTransformers.concat(u.isDraggableTransformers),
                            eventDragMutationMassagers: l.eventDragMutationMassagers.concat(u.eventDragMutationMassagers),
                            eventDefMutationAppliers: l.eventDefMutationAppliers.concat(u.eventDefMutationAppliers),
                            dateSelectionTransformers: l.dateSelectionTransformers.concat(u.dateSelectionTransformers),
                            datePointTransforms: l.datePointTransforms.concat(u.datePointTransforms),
                            dateSpanTransforms: l.dateSpanTransforms.concat(u.dateSpanTransforms),
                            views: r(r({}, l.views), u.views),
                            viewPropsTransformers: l.viewPropsTransformers.concat(u.viewPropsTransformers),
                            isPropsValid: u.isPropsValid || l.isPropsValid,
                            externalDefTransforms: l.externalDefTransforms.concat(u.externalDefTransforms),
                            viewContainerAppends: l.viewContainerAppends.concat(u.viewContainerAppends),
                            eventDropTransformers: l.eventDropTransformers.concat(u.eventDropTransformers),
                            calendarInteractions: l.calendarInteractions.concat(u.calendarInteractions),
                            componentInteractions: l.componentInteractions.concat(u.componentInteractions),
                            themeClasses: r(r({}, l.themeClasses), u.themeClasses),
                            eventSourceDefs: l.eventSourceDefs.concat(u.eventSourceDefs),
                            cmdFormatter: u.cmdFormatter || l.cmdFormatter,
                            recurringTypes: l.recurringTypes.concat(u.recurringTypes),
                            namedTimeZonedImpl: u.namedTimeZonedImpl || l.namedTimeZonedImpl,
                            initialView: l.initialView || u.initialView,
                            elementDraggingImpl: l.elementDraggingImpl || u.elementDraggingImpl,
                            optionChangeHandlers: r(r({}, l.optionChangeHandlers), u.optionChangeHandlers),
                            scrollGridImpl: u.scrollGridImpl || l.scrollGridImpl,
                            contentTypeHandlers: r(r({}, l.contentTypeHandlers), u.contentTypeHandlers),
                            listenerRefiners: r(r({}, l.listenerRefiners), u.listenerRefiners),
                            optionRefiners: r(r({}, l.optionRefiners), u.optionRefiners),
                            propSetHandlers: r(r({}, l.propSetHandlers), u.propSetHandlers)
                        })
                    }
                    var l, u
                }

                return e && i(e), i(t), o
            }(o, i)), t = o, n = i, e
        }
    }

    var Uo = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t
    }(go);

    function Lo(e, t, n, o) {
        if (t[e]) return t[e];
        var i = function (e, t, n, o) {
            var i = n[e], a = o[e], s = function (e) {
                return i && null !== i[e] ? i[e] : a && null !== a[e] ? a[e] : null
            }, l = s("component"), u = s("superType"), c = null;
            if (u) {
                if (u === e) throw new Error("Can't have a custom view type that references itself");
                c = Lo(u, t, n, o)
            }
            !l && c && (l = c.component);
            if (!l) return null;
            return {
                type: e,
                component: l,
                defaults: r(r({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
                overrides: r(r({}, c ? c.overrides : {}), a ? a.rawOptions : {})
            }
        }(e, t, n, o);
        return i && (t[e] = i), i
    }

    Uo.prototype.classes = {
        root: "fc-theme-standard",
        tableCellShaded: "fc-cell-shaded",
        buttonGroup: "fc-button-group",
        button: "fc-button fc-button-primary",
        buttonActive: "fc-button-active"
    }, Uo.prototype.baseIconClass = "fc-icon", Uo.prototype.iconClasses = {
        close: "fc-icon-x",
        prev: "fc-icon-chevron-left",
        next: "fc-icon-chevron-right",
        prevYear: "fc-icon-chevrons-left",
        nextYear: "fc-icon-chevrons-right"
    }, Uo.prototype.rtlIconClasses = {
        prev: "fc-icon-chevron-right",
        next: "fc-icon-chevron-left",
        prevYear: "fc-icon-chevrons-right",
        nextYear: "fc-icon-chevrons-left"
    }, Uo.prototype.iconOverrideOption = "buttonIcons", Uo.prototype.iconOverrideCustomButtonOption = "icon", Uo.prototype.iconOverridePrefix = "fc-icon-";
    var Wo = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = So(), t.handleRootEl = function (e) {
                No(t.rootElRef, e), t.props.elRef && No(t.props.elRef, e)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props, n = t.hookProps;
            return yo(Bo, {
                hookProps: n,
                didMount: t.didMount,
                willUnmount: t.willUnmount,
                elRef: this.handleRootEl
            }, (function (r) {
                return yo(Fo, {
                    hookProps: n,
                    content: t.content,
                    defaultContent: t.defaultContent,
                    backupElRef: e.rootElRef
                }, (function (e, o) {
                    return t.children(r, Go(t.classNames, n), e, o)
                }))
            }))
        }, t
    }(Mo), Vo = bo(0);

    function Fo(e) {
        return yo(Vo.Consumer, null, (function (t) {
            return yo(zo, r({renderId: t}, e))
        }))
    }

    var zo = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.innerElRef = So(), t
        }

        return n(t, e), t.prototype.render = function () {
            return this.props.children(this.innerElRef, this.renderInnerContent())
        }, t.prototype.componentDidMount = function () {
            this.updateCustomContent()
        }, t.prototype.componentDidUpdate = function () {
            this.updateCustomContent()
        }, t.prototype.componentWillUnmount = function () {
            this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy()
        }, t.prototype.renderInnerContent = function () {
            var e = this.customContentInfo, t = this.getInnerContent(), n = this.getContentMeta(t);
            return e && e.contentKey === n.contentKey ? e && (e.contentVal = t[n.contentKey]) : (e && (e.destroy && e.destroy(), e = this.customContentInfo = null), n.contentKey && (e = this.customContentInfo = r({
                contentKey: n.contentKey,
                contentVal: t[n.contentKey]
            }, n.buildLifecycleFuncs()))), e ? [] : t
        }, t.prototype.getInnerContent = function () {
            var e = this.props, t = qo(e.content, e.hookProps);
            return void 0 === t && (t = qo(e.defaultContent, e.hookProps)), null == t ? null : t
        }, t.prototype.getContentMeta = function (e) {
            var t = this.context.pluginHooks.contentTypeHandlers, n = "", r = null;
            if (e) for (var o in t) if (void 0 !== e[o]) {
                n = o, r = t[o];
                break
            }
            return {contentKey: n, buildLifecycleFuncs: r}
        }, t.prototype.updateCustomContent = function () {
            this.customContentInfo && this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, this.customContentInfo.contentVal)
        }, t
    }(Mo), Bo = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleRootEl = function (e) {
                t.rootEl = e, t.props.elRef && No(t.props.elRef, e)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            return this.props.children(this.handleRootEl)
        }, t.prototype.componentDidMount = function () {
            var e = this.props.didMount;
            e && e(r(r({}, this.props.hookProps), {el: this.rootEl}))
        }, t.prototype.componentWillUnmount = function () {
            var e = this.props.willUnmount;
            e && e(r(r({}, this.props.hookProps), {el: this.rootEl}))
        }, t
    }(Mo);

    function jo() {
        var e, t, n = [];
        return function (r, o) {
            return t && St(t, o) && r === e || (e = r, t = o, n = Go(r, o)), n
        }
    }

    function Go(e, t) {
        return "function" == typeof e && (e = e(t)), Dn(e)
    }

    function qo(e, t) {
        return "function" == typeof e ? e(t, yo) : e
    }

    var Yo = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.normalizeClassNames = jo(), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.options, r = {view: t.viewApi},
                o = this.normalizeClassNames(n.viewClassNames, r);
            return yo(Bo, {
                hookProps: r,
                didMount: n.viewDidMount,
                willUnmount: n.viewWillUnmount,
                elRef: e.elRef
            }, (function (t) {
                return e.children(t, ["fc-" + e.viewSpec.type + "-view", "fc-view"].concat(o))
            }))
        }, t
    }(Mo);

    function Zo(e) {
        return mt(e, Xo)
    }

    function Xo(e) {
        var t, n = "function" == typeof e ? {component: e} : e, o = n.component;
        return n.content && (t = n, o = function (e) {
            return yo(To.Consumer, null, (function (n) {
                return yo(Yo, {viewSpec: n.viewSpec}, (function (o, i) {
                    var a = r(r({}, e), {nextDayThreshold: n.options.nextDayThreshold});
                    return yo(Wo, {
                        hookProps: a,
                        classNames: t.classNames,
                        content: t.content,
                        didMount: t.didMount,
                        willUnmount: t.willUnmount,
                        elRef: o
                    }, (function (e, t, n, r) {
                        return yo("div", {className: i.concat(t).join(" "), ref: e}, r)
                    }))
                }))
            }))
        }), {superType: n.type, component: o, rawOptions: n}
    }

    function Ko(e, t, n, o) {
        var i = Zo(e), a = Zo(t.views);
        return mt(function (e, t) {
            var n, r = {};
            for (n in e) Lo(n, r, e, t);
            for (n in t) Lo(n, r, e, t);
            return r
        }(i, a), (function (e) {
            return function (e, t, n, o, i) {
                var a = e.overrides.duration || e.defaults.duration || o.duration || n.duration, s = null, l = "",
                    u = "", c = {};
                if (a && (s = function (e) {
                    var t = JSON.stringify(e), n = $o[t];
                    void 0 === n && (n = xt(e), $o[t] = n);
                    return n
                }(a))) {
                    var d = At(s);
                    l = d.unit, 1 === d.value && (u = l, c = t[l] ? t[l].rawOptions : {})
                }
                var p = function (t) {
                    var n = t.buttonText || {}, r = e.defaults.buttonTextKey;
                    return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[u] ? n[u] : null
                };
                return {
                    type: e.type,
                    component: e.component,
                    duration: s,
                    durationUnit: l,
                    singleUnit: u,
                    optionDefaults: e.defaults,
                    optionOverrides: r(r({}, c), e.overrides),
                    buttonTextOverride: p(o) || p(n) || e.overrides.buttonText,
                    buttonTextDefault: p(i) || e.defaults.buttonText || p(an) || e.type
                }
            }(e, a, t, n, o)
        }))
    }

    var $o = {};
    var Jo = function () {
        function e(e) {
            this.props = e, this.nowDate = br(e.nowInput, e.dateEnv), this.initHiddenDays()
        }

        return e.prototype.buildPrev = function (e, t, n) {
            var r = this.props.dateEnv, o = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(o, -1, n)
        }, e.prototype.buildNext = function (e, t, n) {
            var r = this.props.dateEnv, o = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(o, 1, n)
        }, e.prototype.build = function (e, t, n) {
            void 0 === n && (n = !0);
            var r, o, i, a, s, l, u, c, d = this.props;
            return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (u = e, e = null != (c = r).start && u < c.start ? c.start : null != c.end && u >= c.end ? new Date(c.end.valueOf() - 1) : u), o = this.buildCurrentRangeInfo(e, t), i = /^(year|month|week|day)$/.test(o.unit), a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, i), s = a = this.trimHiddenDays(a), d.showNonCurrentDates || (s = Vn(s, o.range)), s = Vn(s = this.adjustActiveRange(s), r), l = zn(o.range, r), {
                validRange: r,
                currentRange: o.range,
                currentRangeUnit: o.unit,
                isRangeAllDay: i,
                activeRange: s,
                renderRange: a,
                slotMinTime: d.slotMinTime,
                slotMaxTime: d.slotMaxTime,
                isValid: l,
                dateIncrement: this.buildDateIncrement(o.duration)
            }
        }, e.prototype.buildValidRange = function () {
            var e = this.props.validRangeInput,
                t = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
            return this.refineRange(t) || {start: null, end: null}
        }, e.prototype.buildCurrentRangeInfo = function (e, t) {
            var n, r = this.props, o = null, i = null, a = null;
            return r.duration ? (o = r.duration, i = r.durationUnit, a = this.buildRangeFromDuration(e, t, o, i)) : (n = this.props.dayCount) ? (i = "day", a = this.buildRangeFromDayCount(e, t, n)) : (a = this.buildCustomVisibleRange(e)) ? i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit : (i = At(o = this.getFallbackDuration()).unit, a = this.buildRangeFromDuration(e, t, o, i)), {
                duration: o,
                unit: i,
                range: a
            }
        }, e.prototype.getFallbackDuration = function () {
            return xt({day: 1})
        }, e.prototype.adjustActiveRange = function (e) {
            var t = this.props, n = t.dateEnv, r = t.usesMinMaxTime, o = t.slotMinTime, i = t.slotMaxTime, a = e.start,
                s = e.end;
            return r && (Nt(o) < 0 && (a = ot(a), a = n.add(a, o)), Nt(i) > 1 && (s = $e(s = ot(s), -1), s = n.add(s, i))), {
                start: a,
                end: s
            }
        }, e.prototype.buildRangeFromDuration = function (e, t, n, r) {
            var o, i, a, s = this.props, l = s.dateEnv, u = s.dateAlignment;
            if (!u) {
                var c = this.props.dateIncrement;
                u = c && Ht(c) < Ht(n) ? At(c).unit : r
            }

            function d() {
                o = l.startOf(e, u), i = l.add(o, n), a = {start: o, end: i}
            }

            return Nt(n) <= 1 && this.isHiddenDay(o) && (o = ot(o = this.skipHiddenDays(o, t))), d(), this.trimHiddenDays(a) || (e = this.skipHiddenDays(e, t), d()), a
        }, e.prototype.buildRangeFromDayCount = function (e, t, n) {
            var r, o = this.props, i = o.dateEnv, a = o.dateAlignment, s = 0, l = e;
            a && (l = i.startOf(l, a)), l = ot(l), r = l = this.skipHiddenDays(l, t);
            do {
                r = $e(r, 1), this.isHiddenDay(r) || (s += 1)
            } while (s < n);
            return {start: l, end: r}
        }, e.prototype.buildCustomVisibleRange = function (e) {
            var t = this.props, n = t.visibleRangeInput,
                r = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n, o = this.refineRange(r);
            return !o || null != o.start && null != o.end ? o : null
        }, e.prototype.buildRenderRange = function (e, t, n) {
            return e
        }, e.prototype.buildDateIncrement = function (e) {
            var t, n = this.props.dateIncrement;
            return n || ((t = this.props.dateAlignment) ? xt(1, t) : e || xt({days: 1}))
        }, e.prototype.refineRange = function (e) {
            if (e) {
                var t = (n = e, r = this.props.dateEnv, o = null, i = null, n.start && (o = r.createMarker(n.start)), n.end && (i = r.createMarker(n.end)), o || i ? o && i && i < o ? null : {
                    start: o,
                    end: i
                } : null);
                return t && (t = On(t)), t
            }
            var n, r, o, i;
            return null
        }, e.prototype.initHiddenDays = function () {
            var e, t = this.props.hiddenDays || [], n = [], r = 0;
            for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1) (n[e] = -1 !== t.indexOf(e)) || (r += 1);
            if (!r) throw new Error("invalid hiddenDays");
            this.isHiddenDayHash = n
        }, e.prototype.trimHiddenDays = function (e) {
            var t = e.start, n = e.end;
            return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null == t || null == n || t < n ? {
                start: t,
                end: n
            } : null
        }, e.prototype.isHiddenDay = function (e) {
            return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e]
        }, e.prototype.skipHiddenDays = function (e, t, n) {
            for (void 0 === t && (t = 1), void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) e = $e(e, t);
            return e
        }, e
    }();

    function Qo(e, t, n) {
        var r = t ? t.activeRange : null;
        return ni({}, function (e, t) {
            var n = Dr(t), r = [].concat(e.eventSources || []), o = [];
            e.initialEvents && r.unshift(e.initialEvents);
            e.events && r.unshift(e.events);
            for (var i = 0, a = r; i < a.length; i++) {
                var s = Sr(a[i], t, n);
                s && o.push(s)
            }
            return o
        }(e, n), r, n)
    }

    function ei(e, t, n, o) {
        var i, a, s = n ? n.activeRange : null;
        switch (t.type) {
            case"ADD_EVENT_SOURCES":
                return ni(e, t.sources, s, o);
            case"REMOVE_EVENT_SOURCE":
                return i = e, a = t.sourceId, gt(i, (function (e) {
                    return e.sourceId !== a
                }));
            case"PREV":
            case"NEXT":
            case"CHANGE_DATE":
            case"CHANGE_VIEW_TYPE":
                return n ? ri(e, s, o) : e;
            case"FETCH_EVENT_SOURCES":
                return oi(e, t.sourceIds ? yt(t.sourceIds) : ai(e, o), s, t.isRefetch || !1, o);
            case"RECEIVE_EVENTS":
            case"RECEIVE_EVENT_ERROR":
                return function (e, t, n, o) {
                    var i, a = e[t];
                    if (a && n === a.latestFetchId) return r(r({}, e), ((i = {})[t] = r(r({}, a), {
                        isFetching: !1,
                        fetchRange: o
                    }), i));
                    return e
                }(e, t.sourceId, t.fetchId, t.fetchRange);
            case"REMOVE_ALL_EVENT_SOURCES":
                return {};
            default:
                return e
        }
    }

    function ti(e) {
        for (var t in e) if (e[t].isFetching) return !0;
        return !1
    }

    function ni(e, t, n, o) {
        for (var i = {}, a = 0, s = t; a < s.length; a++) {
            var l = s[a];
            i[l.sourceId] = l
        }
        return n && (i = ri(i, n, o)), r(r({}, e), i)
    }

    function ri(e, t, n) {
        return oi(e, gt(e, (function (e) {
            return function (e, t, n) {
                if (!si(e, n)) return !e.latestFetchId;
                return !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end
            }(e, t, n)
        })), t, !1, n)
    }

    function oi(e, t, n, r, o) {
        var i = {};
        for (var a in e) {
            var s = e[a];
            t[a] ? i[a] = ii(s, n, r, o) : i[a] = s
        }
        return i
    }

    function ii(e, t, n, o) {
        var i = o.options, a = o.calendarApi, s = o.pluginHooks.eventSourceDefs[e.sourceDefId], l = He();
        return s.fetch({eventSource: e, range: t, isRefetch: n, context: o}, (function (n) {
            var r = n.rawEvents;
            i.eventSourceSuccess && (r = i.eventSourceSuccess.call(a, r, n.xhr) || r), e.success && (r = e.success.call(a, r, n.xhr) || r), o.dispatch({
                type: "RECEIVE_EVENTS",
                sourceId: e.sourceId,
                fetchId: l,
                fetchRange: t,
                rawEvents: r
            })
        }), (function (n) {
            console.warn(n.message, n), i.eventSourceFailure && i.eventSourceFailure.call(a, n), e.failure && e.failure(n), o.dispatch({
                type: "RECEIVE_EVENT_ERROR",
                sourceId: e.sourceId,
                fetchId: l,
                fetchRange: t,
                error: n
            })
        })), r(r({}, e), {isFetching: !0, latestFetchId: l})
    }

    function ai(e, t) {
        return gt(e, (function (e) {
            return si(e, t)
        }))
    }

    function si(e, t) {
        return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange
    }

    function li(e, t, n, r, o) {
        switch (t.type) {
            case"RECEIVE_EVENTS":
                return function (e, t, n, r, o, i) {
                    if (t && n === t.latestFetchId) {
                        var a = vn(function (e, t, n) {
                            var r = n.options.eventDataTransform, o = t ? t.eventDataTransform : null;
                            o && (e = ui(e, o));
                            r && (e = ui(e, r));
                            return e
                        }(o, t, i), t, i);
                        return r && (a = Rt(a, r, i)), En(ci(e, t.sourceId), a)
                    }
                    return e
                }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);
            case"ADD_EVENTS":
                return function (e, t, n, r) {
                    n && (t = Rt(t, n, r));
                    return En(e, t)
                }(e, t.eventStore, r ? r.activeRange : null, o);
            case"RESET_EVENTS":
                return t.eventStore;
            case"MERGE_EVENTS":
                return En(e, t.eventStore);
            case"PREV":
            case"NEXT":
            case"CHANGE_DATE":
            case"CHANGE_VIEW_TYPE":
                return r ? Rt(e, r.activeRange, o) : e;
            case"REMOVE_EVENTS":
                return function (e, t) {
                    var n = e.defs, r = e.instances, o = {}, i = {};
                    for (var a in n) t.defs[a] || (o[a] = n[a]);
                    for (var s in r) !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
                    return {defs: o, instances: i}
                }(e, t.eventStore);
            case"REMOVE_EVENT_SOURCE":
                return ci(e, t.sourceId);
            case"REMOVE_ALL_EVENT_SOURCES":
                return Sn(e, (function (e) {
                    return !e.sourceId
                }));
            case"REMOVE_ALL_EVENTS":
                return {defs: {}, instances: {}};
            default:
                return e
        }
    }

    function ui(e, t) {
        var n;
        if (t) {
            n = [];
            for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r], a = t(i);
                a ? n.push(a) : null == a && n.push(i)
            }
        } else n = e;
        return n
    }

    function ci(e, t) {
        return Sn(e, (function (e) {
            return e.sourceId !== t
        }))
    }

    function di(e, t) {
        switch (t.type) {
            case"UNSELECT_DATES":
                return null;
            case"SELECT_DATES":
                return t.selection;
            default:
                return e
        }
    }

    function pi(e, t) {
        switch (t.type) {
            case"UNSELECT_EVENT":
                return "";
            case"SELECT_EVENT":
                return t.eventInstanceId;
            default:
                return e
        }
    }

    function fi(e, t) {
        var n;
        switch (t.type) {
            case"UNSET_EVENT_DRAG":
                return null;
            case"SET_EVENT_DRAG":
                return {
                    affectedEvents: (n = t.state).affectedEvents,
                    mutatedEvents: n.mutatedEvents,
                    isEvent: n.isEvent
                };
            default:
                return e
        }
    }

    function hi(e, t) {
        var n;
        switch (t.type) {
            case"UNSET_EVENT_RESIZE":
                return null;
            case"SET_EVENT_RESIZE":
                return {
                    affectedEvents: (n = t.state).affectedEvents,
                    mutatedEvents: n.mutatedEvents,
                    isEvent: n.isEvent
                };
            default:
                return e
        }
    }

    function vi(e, t, n, r, o) {
        var i = [];
        return {
            headerToolbar: e.headerToolbar ? gi(e.headerToolbar, e, t, n, r, o, i) : null,
            footerToolbar: e.footerToolbar ? gi(e.footerToolbar, e, t, n, r, o, i) : null,
            viewsWithButtons: i
        }
    }

    function gi(e, t, n, r, o, i, a) {
        return mt(e, (function (e) {
            return function (e, t, n, r, o, i, a) {
                var s = "rtl" === t.direction, l = t.customButtons || {}, u = n.buttonText || {},
                    c = t.buttonText || {};
                return (e ? e.split(" ") : []).map((function (e) {
                    return e.split(",").map((function (e) {
                        return "title" === e ? {buttonName: e} : ((t = l[e]) ? (d = function (e) {
                            t.click && t.click.call(e.target, e, e.target)
                        }, (p = r.getCustomButtonIconClass(t)) || (p = r.getIconClass(e, s)) || (f = t.text)) : (n = o[e]) ? (a.push(e), d = function () {
                            i.changeView(e)
                        }, (f = n.buttonTextOverride) || (p = r.getIconClass(e, s)) || (f = n.buttonTextDefault)) : i[e] && (d = function () {
                            i[e]()
                        }, (f = u[e]) || (p = r.getIconClass(e, s)) || (f = c[e])), {
                            buttonName: e,
                            buttonClick: d,
                            buttonIcon: p,
                            buttonText: f
                        });
                        var t, n, d, p, f
                    }))
                }))
            }(e, t, n, r, o, i, a)
        }))
    }

    function mi(e, t, n, r, o) {
        var i = null;
        "GET" === (e = e.toUpperCase()) ? t = function (e, t) {
            return e + (-1 === e.indexOf("?") ? "?" : "&") + yi(t)
        }(t, n) : i = yi(n);
        var a = new XMLHttpRequest;
        a.open(e, t, !0), "GET" !== e && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.onload = function () {
            if (a.status >= 200 && a.status < 400) {
                var e = !1, t = void 0;
                try {
                    t = JSON.parse(a.responseText), e = !0
                } catch (e) {
                }
                e ? r(t, a) : o("Failure parsing JSON", a)
            } else o("Request failed", a)
        }, a.onerror = function () {
            o("Request failed", a)
        }, a.send(i)
    }

    function yi(e) {
        var t = [];
        for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }

    function Ei(e, t) {
        for (var n = Et(t.getCurrentData().eventSources), r = [], o = 0, i = e; o < i.length; o++) {
            for (var a = i[o], s = !1, l = 0; l < n.length; l += 1) if (n[l]._raw === a) {
                n.splice(l, 1), s = !0;
                break
            }
            s || r.push(a)
        }
        for (var u = 0, c = n; u < c.length; u++) {
            var d = c[u];
            t.dispatch({type: "REMOVE_EVENT_SOURCE", sourceId: d.sourceId})
        }
        for (var p = 0, f = r; p < f.length; p++) {
            var h = f[p];
            t.calendarApi.addEventSource(h)
        }
    }

    var Si = [Oo({
        eventSourceDefs: [{
            ignoreRange: !0, parseMeta: function (e) {
                return Array.isArray(e.events) ? e.events : null
            }, fetch: function (e, t) {
                t({rawEvents: e.eventSource.meta})
            }
        }]
    }), Oo({
        eventSourceDefs: [{
            parseMeta: function (e) {
                return "function" == typeof e.events ? e.events : null
            }, fetch: function (e, t, n) {
                var r = e.context.dateEnv;
                uo(e.eventSource.meta.bind(null, ur(e.range, r)), (function (e) {
                    t({rawEvents: e})
                }), n)
            }
        }]
    }), Oo({
        eventSourceRefiners: {
            method: String,
            extraParams: hn,
            startParam: String,
            endParam: String,
            timeZoneParam: String
        }, eventSourceDefs: [{
            parseMeta: function (e) {
                return !e.url || "json" !== e.format && e.format ? null : {
                    url: e.url,
                    format: "json",
                    method: (e.method || "GET").toUpperCase(),
                    extraParams: e.extraParams,
                    startParam: e.startParam,
                    endParam: e.endParam,
                    timeZoneParam: e.timeZoneParam
                }
            }, fetch: function (e, t, n) {
                var o = e.eventSource.meta, i = function (e, t, n) {
                    var o, i, a, s, l = n.dateEnv, u = n.options, c = {};
                    null == (o = e.startParam) && (o = u.startParam);
                    null == (i = e.endParam) && (i = u.endParam);
                    null == (a = e.timeZoneParam) && (a = u.timeZoneParam);
                    s = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                    r(c, s), c[o] = l.formatIso(t.start), c[i] = l.formatIso(t.end), "local" !== l.timeZone && (c[a] = l.timeZone);
                    return c
                }(o, e.range, e.context);
                mi(o.method, o.url, i, (function (e, n) {
                    t({rawEvents: e, xhr: n})
                }), (function (e, t) {
                    n({message: e, xhr: t})
                }))
            }
        }]
    }), Oo({
        recurringTypes: [{
            parse: function (e, t) {
                if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
                    var n = {
                        daysOfWeek: e.daysOfWeek || null,
                        startTime: e.startTime || null,
                        endTime: e.endTime || null,
                        startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
                        endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
                    }, r = void 0;
                    return e.duration && (r = e.duration), !r && e.startTime && e.endTime && (o = e.endTime, i = e.startTime, r = {
                        years: o.years - i.years,
                        months: o.months - i.months,
                        days: o.days - i.days,
                        milliseconds: o.milliseconds - i.milliseconds
                    }), {allDayGuess: Boolean(!e.startTime && !e.endTime), duration: r, typeData: n}
                }
                var o, i;
                return null
            }, expand: function (e, t, n) {
                var r = Vn(t, {start: e.startRecur, end: e.endRecur});
                return r ? function (e, t, n, r) {
                    var o = e ? yt(e) : null, i = ot(n.start), a = n.end, s = [];
                    for (; i < a;) {
                        var l = void 0;
                        o && !o[i.getUTCDay()] || (l = t ? r.add(i, t) : i, s.push(l)), i = $e(i, 1)
                    }
                    return s
                }(e.daysOfWeek, e.startTime, r, n) : []
            }
        }], eventRefiners: {daysOfWeek: hn, startTime: xt, endTime: xt, duration: xt, startRecur: hn, endRecur: hn}
    }), Oo({
        optionChangeHandlers: {
            events: function (e, t) {
                Ei([e], t)
            }, eventSources: Ei
        }
    }), Oo({
        isLoadingFuncs: [function (e) {
            return ti(e.eventSources)
        }], contentTypeHandlers: {
            html: function () {
                return {render: Di}
            }, domNodes: function () {
                return {render: bi}
            }
        }, propSetHandlers: {
            dateProfile: function (e, t) {
                t.emitter.trigger("datesSet", r(r({}, ur(e.activeRange, t.dateEnv)), {view: t.viewApi}))
            }, eventStore: function (e, t) {
                var n = t.emitter;
                n.hasHandlers("eventsSet") && n.trigger("eventsSet", _r(e, t))
            }
        }
    })];

    function Di(e, t) {
        e.innerHTML = t
    }

    function bi(e, t) {
        var n = Array.prototype.slice.call(e.childNodes), r = Array.prototype.slice.call(t);
        if (!Ft(n, r)) {
            for (var o = 0, i = r; o < i.length; o++) {
                var a = i[o];
                e.appendChild(a)
            }
            n.forEach(Ee)
        }
    }

    var Ci = function () {
        function e(e) {
            this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0
        }

        return e.prototype.request = function (e) {
            this.isDirty = !0, this.isPaused() || (this.clearTimeout(), null == e ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e))
        }, e.prototype.pause = function (e) {
            void 0 === e && (e = "");
            var t = this.pauseDepths;
            t[e] = (t[e] || 0) + 1, this.clearTimeout()
        }, e.prototype.resume = function (e, t) {
            void 0 === e && (e = "");
            var n = this.pauseDepths;
            if (e in n) {
                if (t) delete n[e]; else n[e] -= 1, n[e] <= 0 && delete n[e];
                this.tryDrain()
            }
        }, e.prototype.isPaused = function () {
            return Object.keys(this.pauseDepths).length
        }, e.prototype.tryDrain = function () {
            if (!this.isRunning && !this.isPaused()) {
                for (this.isRunning = !0; this.isDirty;) this.isDirty = !1, this.drained();
                this.isRunning = !1
            }
        }, e.prototype.clear = function () {
            this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {}
        }, e.prototype.clearTimeout = function () {
            this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0)
        }, e.prototype.drained = function () {
            this.drainedOption && this.drainedOption()
        }, e
    }(), wi = function () {
        function e(e, t) {
            this.runTaskOption = e, this.drainedOption = t, this.queue = [], this.delayedRunner = new Ci(this.drain.bind(this))
        }

        return e.prototype.request = function (e, t) {
            this.queue.push(e), this.delayedRunner.request(t)
        }, e.prototype.pause = function (e) {
            this.delayedRunner.pause(e)
        }, e.prototype.resume = function (e, t) {
            this.delayedRunner.resume(e, t)
        }, e.prototype.drain = function () {
            for (var e = this.queue; e.length;) {
                for (var t = [], n = void 0; n = e.shift();) this.runTask(n), t.push(n);
                this.drained(t)
            }
        }, e.prototype.runTask = function (e) {
            this.runTaskOption && this.runTaskOption(e)
        }, e.prototype.drained = function (e) {
            this.drainedOption && this.drainedOption(e)
        }, e
    }();

    function Ri(e, t, n) {
        var r;
        return r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange, n.formatRange(r.start, r.end, rn(t.titleFormat || function (e) {
            var t = e.currentRangeUnit;
            if ("year" === t) return {year: "numeric"};
            if ("month" === t) return {year: "numeric", month: "long"};
            var n = rt(e.currentRange.start, e.currentRange.end);
            if (null !== n && n > 1) return {year: "numeric", month: "short", day: "numeric"};
            return {year: "numeric", month: "long", day: "numeric"}
        }(e)), {isEndExclusive: e.isRangeAllDay, defaultSeparator: t.titleRangeSeparator})
    }

    var _i = function () {
        function e(e) {
            var t = this;
            this.computeOptionsData = zt(this._computeOptionsData), this.computeCurrentViewData = zt(this._computeCurrentViewData), this.organizeRawLocales = zt(Or), this.buildLocale = zt(Ar), this.buildPluginHooks = Ao(), this.buildDateEnv = zt(Ti), this.buildTheme = zt(ki), this.parseToolbars = zt(vi), this.buildViewSpecs = zt(Ko), this.buildDateProfileGenerator = Bt(xi), this.buildViewApi = zt(Mi), this.buildViewUiProps = Bt(Ni), this.buildEventUiBySource = zt(Pi, St), this.buildEventUiBases = zt(Ii), this.parseContextBusinessHours = Bt(Oi), this.buildTitle = zt(Ri), this.emitter = new co, this.actionRunner = new wi(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = function () {
                return t.data
            }, this.dispatch = function (e) {
                t.actionRunner.request(e)
            }, this.props = e, this.actionRunner.pause();
            var n = {}, o = this.computeOptionsData(e.optionOverrides, n, e.calendarApi),
                i = o.calendarOptions.initialView || o.pluginHooks.initialView,
                a = this.computeCurrentViewData(i, o, e.optionOverrides, n);
            e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(a.options);
            var s, l, u,
                c = (s = o.calendarOptions, l = o.dateEnv, null != (u = s.initialDate) ? l.createMarker(u) : br(s.now, l)),
                d = a.dateProfileGenerator.build(c);
            jn(d.activeRange, c) || (c = d.currentRange.start);
            for (var p = {
                dateEnv: o.dateEnv,
                options: o.calendarOptions,
                pluginHooks: o.pluginHooks,
                calendarApi: e.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData
            }, f = 0, h = o.pluginHooks.contextInit; f < h.length; f++) {
                (0, h[f])(p)
            }
            for (var v = Qo(o.calendarOptions, d, p), g = {
                dynamicOptionOverrides: n,
                currentViewType: i,
                currentDate: c,
                dateProfile: d,
                businessHours: this.parseContextBusinessHours(p),
                eventSources: v,
                eventUiBases: {},
                eventStore: {defs: {}, instances: {}},
                renderableEventStore: {defs: {}, instances: {}},
                dateSelection: null,
                eventSelection: "",
                eventDrag: null,
                eventResize: null,
                selectionConfig: this.buildViewUiProps(p).selectionConfig
            }, m = r(r({}, p), g), y = 0, E = o.pluginHooks.reducers; y < E.length; y++) {
                var S = E[y];
                r(g, S(null, null, m))
            }
            Hi(g, p) && this.emitter.trigger("loading", !0), this.state = g, this.updateData(), this.actionRunner.resume()
        }

        return e.prototype.resetOptions = function (e, t) {
            var n = this.props;
            n.optionOverrides = t ? r(r({}, n.optionOverrides), e) : e, this.actionRunner.request({type: "NOTHING"})
        }, e.prototype._handleAction = function (e) {
            var t = this, n = t.props, o = t.state, i = t.emitter, a = function (e, t) {
                    var n;
                    switch (t.type) {
                        case"SET_OPTION":
                            return r(r({}, e), ((n = {})[t.optionName] = t.rawOptionValue, n));
                        default:
                            return e
                    }
                }(o.dynamicOptionOverrides, e), s = this.computeOptionsData(n.optionOverrides, a, n.calendarApi),
                l = function (e, t) {
                    switch (t.type) {
                        case"CHANGE_VIEW_TYPE":
                            e = t.viewType
                    }
                    return e
                }(o.currentViewType, e), u = this.computeCurrentViewData(l, s, n.optionOverrides, a);
            n.calendarApi.currentDataManager = this, i.setThisContext(n.calendarApi), i.setOptions(u.options);
            var c = {
                dateEnv: s.dateEnv,
                options: s.calendarOptions,
                pluginHooks: s.pluginHooks,
                calendarApi: n.calendarApi,
                dispatch: this.dispatch,
                emitter: i,
                getCurrentData: this.getCurrentData
            }, d = o.currentDate, p = o.dateProfile;
            this.data && this.data.dateProfileGenerator !== u.dateProfileGenerator && (p = u.dateProfileGenerator.build(d)), p = function (e, t, n, r) {
                var o;
                switch (t.type) {
                    case"CHANGE_VIEW_TYPE":
                        return r.build(t.dateMarker || n);
                    case"CHANGE_DATE":
                        return r.build(t.dateMarker);
                    case"PREV":
                        if ((o = r.buildPrev(e, n)).isValid) return o;
                        break;
                    case"NEXT":
                        if ((o = r.buildNext(e, n)).isValid) return o
                }
                return e
            }(p, e, d = function (e, t) {
                switch (t.type) {
                    case"CHANGE_DATE":
                        return t.dateMarker;
                    default:
                        return e
                }
            }(d, e), u.dateProfileGenerator), "PREV" !== e.type && "NEXT" !== e.type && jn(p.currentRange, d) || (d = p.currentRange.start);
            for (var f = ei(o.eventSources, e, p, c), h = li(o.eventStore, e, f, p, c), v = ti(f) && !u.options.progressiveEventRendering && o.renderableEventStore || h, g = this.buildViewUiProps(c), m = g.eventUiSingleBase, y = g.selectionConfig, E = this.buildEventUiBySource(f), S = {
                dynamicOptionOverrides: a,
                currentViewType: l,
                currentDate: d,
                dateProfile: p,
                eventSources: f,
                eventStore: h,
                renderableEventStore: v,
                selectionConfig: y,
                eventUiBases: this.buildEventUiBases(v.defs, m, E),
                businessHours: this.parseContextBusinessHours(c),
                dateSelection: di(o.dateSelection, e),
                eventSelection: pi(o.eventSelection, e),
                eventDrag: fi(o.eventDrag, e),
                eventResize: hi(o.eventResize, e)
            }, D = r(r({}, c), S), b = 0, C = s.pluginHooks.reducers; b < C.length; b++) {
                var w = C[b];
                r(S, w(o, e, D))
            }
            var R = Hi(o, c), _ = Hi(S, c);
            !R && _ ? i.trigger("loading", !0) : R && !_ && i.trigger("loading", !1), this.state = S, n.onAction && n.onAction(e)
        }, e.prototype.updateData = function () {
            var e, t, n, o, i, a, s, l, u, c = this.props, d = this.state, p = this.data,
                f = this.computeOptionsData(c.optionOverrides, d.dynamicOptionOverrides, c.calendarApi),
                h = this.computeCurrentViewData(d.currentViewType, f, c.optionOverrides, d.dynamicOptionOverrides),
                v = this.data = r(r(r({
                    viewTitle: this.buildTitle(d.dateProfile, h.options, f.dateEnv),
                    calendarApi: c.calendarApi,
                    dispatch: this.dispatch,
                    emitter: this.emitter,
                    getCurrentData: this.getCurrentData
                }, f), h), d), g = f.pluginHooks.optionChangeHandlers, m = p && p.calendarOptions,
                y = f.calendarOptions;
            if (m && m !== y) for (var E in m.timeZone !== y.timeZone && (d.eventSources = v.eventSources = (a = v.eventSources, s = d.dateProfile, l = v, u = s ? s.activeRange : null, oi(a, ai(a, l), u, !0, l)), d.eventStore = v.eventStore = (e = v.eventStore, t = p.dateEnv, n = v.dateEnv, o = e.defs, i = mt(e.instances, (function (e) {
                var i = o[e.defId];
                return i.allDay || i.recurringDef ? e : r(r({}, e), {
                    range: {
                        start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
                        end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
                    },
                    forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
                    forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo
                })
            })), {defs: o, instances: i})), g) m[E] !== y[E] && g[E](y[E], v);
            c.onData && c.onData(v)
        }, e.prototype._computeOptionsData = function (e, t, n) {
            var r = this.processRawCalendarOptions(e, t), o = r.refinedOptions, i = r.pluginHooks, a = r.localeDefaults,
                s = r.availableLocaleData;
            Ai(r.extra);
            var l = this.buildDateEnv(o.timeZone, o.locale, o.weekNumberCalculation, o.firstDay, o.weekText, i, s, o.defaultRangeSeparator),
                u = this.buildViewSpecs(i.views, e, t, a), c = this.buildTheme(o, i);
            return {
                calendarOptions: o,
                pluginHooks: i,
                dateEnv: l,
                viewSpecs: u,
                theme: c,
                toolbarConfig: this.parseToolbars(o, e, c, u, n),
                localeDefaults: a,
                availableRawLocales: s.map
            }
        }, e.prototype.processRawCalendarOptions = function (e, t) {
            var n = pn([an, e, t]), o = n.locales, i = n.locale, a = this.organizeRawLocales(o), s = a.map,
                l = this.buildLocale(i || a.defaultCode, s).options, u = this.buildPluginHooks(e.plugins || [], Si),
                c = this.currentCalendarOptionsRefiners = r(r(r(r(r({}, on), sn), ln), u.listenerRefiners), u.optionRefiners),
                d = {}, p = pn([an, l, e, t]), f = {}, h = this.currentCalendarOptionsInput,
                v = this.currentCalendarOptionsRefined, g = !1;
            for (var m in p) "plugins" !== m && (p[m] === h[m] || un[m] && m in h && un[m](h[m], p[m]) ? f[m] = v[m] : c[m] ? (f[m] = c[m](p[m]), g = !0) : d[m] = h[m]);
            return g && (this.currentCalendarOptionsInput = p, this.currentCalendarOptionsRefined = f), {
                rawOptions: this.currentCalendarOptionsInput,
                refinedOptions: this.currentCalendarOptionsRefined,
                pluginHooks: u,
                availableLocaleData: a,
                localeDefaults: l,
                extra: d
            }
        }, e.prototype._computeCurrentViewData = function (e, t, n, r) {
            var o = t.viewSpecs[e];
            if (!o) throw new Error('viewType "' + e + "\" is not available. Please make sure you've loaded all neccessary plugins");
            var i = this.processRawViewOptions(o, t.pluginHooks, t.localeDefaults, n, r), a = i.refinedOptions;
            return Ai(i.extra), {
                viewSpec: o,
                options: a,
                dateProfileGenerator: this.buildDateProfileGenerator({
                    dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
                    duration: o.duration,
                    durationUnit: o.durationUnit,
                    usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
                    dateEnv: t.dateEnv,
                    calendarApi: this.props.calendarApi,
                    slotMinTime: a.slotMinTime,
                    slotMaxTime: a.slotMaxTime,
                    showNonCurrentDates: a.showNonCurrentDates,
                    dayCount: a.dayCount,
                    dateAlignment: a.dateAlignment,
                    dateIncrement: a.dateIncrement,
                    hiddenDays: a.hiddenDays,
                    weekends: a.weekends,
                    nowInput: a.now,
                    validRangeInput: a.validRange,
                    visibleRangeInput: a.visibleRange,
                    monthMode: a.monthMode,
                    fixedWeekCount: a.fixedWeekCount
                }),
                viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
            }
        }, e.prototype.processRawViewOptions = function (e, t, n, o, i) {
            var a = pn([an, e.optionDefaults, n, o, e.optionOverrides, i]),
                s = r(r(r(r(r(r({}, on), sn), ln), dn), t.listenerRefiners), t.optionRefiners), l = {},
                u = this.currentViewOptionsInput, c = this.currentViewOptionsRefined, d = !1, p = {};
            for (var f in a) a[f] === u[f] ? l[f] = c[f] : (a[f] === this.currentCalendarOptionsInput[f] ? f in this.currentCalendarOptionsRefined && (l[f] = this.currentCalendarOptionsRefined[f]) : s[f] ? l[f] = s[f](a[f]) : p[f] = a[f], d = !0);
            return d && (this.currentViewOptionsInput = a, this.currentViewOptionsRefined = l), {
                rawOptions: this.currentViewOptionsInput,
                refinedOptions: this.currentViewOptionsRefined,
                extra: p
            }
        }, e
    }();

    function Ti(e, t, n, r, o, i, a, s) {
        var l = Ar(t || a.defaultCode, a.map);
        return new Ir({
            calendarSystem: "gregory",
            timeZone: e,
            namedTimeZoneImpl: i.namedTimeZonedImpl,
            locale: l,
            weekNumberCalculation: n,
            firstDay: r,
            weekText: o,
            cmdFormatter: i.cmdFormatter,
            defaultSeparator: s
        })
    }

    function ki(e, t) {
        return new (t.themeClasses[e.themeSystem] || Uo)(e)
    }

    function xi(e) {
        return new (e.dateProfileGeneratorClass || Jo)(e)
    }

    function Mi(e, t, n) {
        return new yr(e, t, n)
    }

    function Pi(e) {
        return mt(e, (function (e) {
            return e.ui
        }))
    }

    function Ii(e, t, n) {
        var r = {"": t};
        for (var o in e) {
            var i = e[o];
            i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId])
        }
        return r
    }

    function Ni(e) {
        var t = e.options;
        return {
            eventUiSingleBase: wn({
                display: t.eventDisplay,
                editable: t.editable,
                startEditable: t.eventStartEditable,
                durationEditable: t.eventDurationEditable,
                constraint: t.eventConstraint,
                overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
                allow: t.eventAllow,
                backgroundColor: t.eventBackgroundColor,
                borderColor: t.eventBorderColor,
                textColor: t.eventTextColor,
                color: t.eventColor
            }, e),
            selectionConfig: wn({
                constraint: t.selectConstraint,
                overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
                allow: t.selectAllow
            }, e)
        }
    }

    function Hi(e, t) {
        for (var n = 0, r = t.pluginHooks.isLoadingFuncs; n < r.length; n++) {
            if ((0, r[n])(e)) return !0
        }
        return !1
    }

    function Oi(e) {
        return Fr(e.options.businessHours, e)
    }

    function Ai(e, t) {
        for (var n in e) console.warn("Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : ""))
    }

    var Ui = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleData = function (e) {
                n.dataManager ? n.setState(e) : n.state = e
            }, n.dataManager = new _i({
                optionOverrides: t.optionOverrides,
                calendarApi: t.calendarApi,
                onData: n.handleData
            }), n
        }

        return n(t, e), t.prototype.render = function () {
            return this.props.children(this.state)
        }, t.prototype.componentDidUpdate = function (e) {
            var t = this.props.optionOverrides;
            t !== e.optionOverrides && this.dataManager.resetOptions(t)
        }, t
    }(mo);
    var Li = function (e) {
        this.timeZoneName = e
    }, Wi = function () {
        function e() {
            this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {}
        }

        return e.prototype.addSegs = function (e) {
            for (var t = [], n = 0, r = e; n < r.length; n++) {
                var o = r[n];
                this.insertEntry(o, t)
            }
            return t
        }, e.prototype.insertEntry = function (e, t) {
            var n = this.findInsertion(e);
            return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, t)
        }, e.prototype.isInsertionValid = function (e, t) {
            return (-1 === this.maxCoord || e.levelCoord + t.thickness <= this.maxCoord) && (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt)
        }, e.prototype.handleInvalidInsertion = function (e, t, n) {
            return this.allowReslicing && e.touchingEntry ? this.splitEntry(t, e.touchingEntry, n) : (n.push(t), 0)
        }, e.prototype.splitEntry = function (e, t, n) {
            var r = 0, i = [], a = e.span, s = t.span;
            return a.start < s.start && (r += this.insertEntry({
                index: e.index,
                thickness: e.thickness,
                span: {start: a.start, end: s.start}
            }, i)), a.end > s.end && (r += this.insertEntry({
                index: e.index,
                thickness: e.thickness,
                span: {start: s.end, end: a.end}
            }, i)), r ? (n.push.apply(n, o([{
                index: e.index,
                thickness: e.thickness,
                span: ji(s, a)
            }], i)), r) : (n.push(e), 0)
        }, e.prototype.insertEntryAt = function (e, t) {
            var n = this.entriesByLevel, r = this.levelCoords;
            -1 === t.lateral ? (Gi(r, t.level, t.levelCoord), Gi(n, t.level, [e])) : Gi(n[t.level], t.lateral, e), this.stackCnts[Fi(e)] = t.stackCnt
        }, e.prototype.findInsertion = function (e) {
            for (var t = this, n = t.levelCoords, r = t.entriesByLevel, o = t.strictOrder, i = t.stackCnts, a = n.length, s = 0, l = -1, u = -1, c = null, d = 0, p = 0; p < a; p += 1) {
                var f = n[p];
                if (!o && f >= s + e.thickness) break;
                for (var h = r[p], v = void 0, g = qi(h, e.span.start, Vi), m = g[0] + g[1]; (v = h[m]) && v.span.start < e.span.end;) {
                    var y = f + v.thickness;
                    y > s && (s = y, c = v, l = p, u = m), y === s && (d = Math.max(d, i[Fi(v)] + 1)), m += 1
                }
            }
            var E = 0;
            if (c) for (E = l + 1; E < a && n[E] < s;) E += 1;
            var S = -1;
            return E < a && n[E] === s && (S = qi(r[E], e.span.end, Vi)[0]), {
                touchingLevel: l,
                touchingLateral: u,
                touchingEntry: c,
                stackCnt: d,
                levelCoord: s,
                level: E,
                lateral: S
            }
        }, e.prototype.toRects = function () {
            for (var e = this.entriesByLevel, t = this.levelCoords, n = e.length, o = [], i = 0; i < n; i += 1) for (var a = e[i], s = t[i], l = 0, u = a; l < u.length; l++) {
                var c = u[l];
                o.push(r(r({}, c), {levelCoord: s}))
            }
            return o
        }, e
    }();

    function Vi(e) {
        return e.span.end
    }

    function Fi(e) {
        return e.index + ":" + e.span.start
    }

    function zi(e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            for (var o = r[n], i = [], a = {span: o.span, entries: [o]}, s = 0, l = t; s < l.length; s++) {
                var u = l[s];
                ji(u.span, a.span) ? a = {entries: u.entries.concat(a.entries), span: Bi(u.span, a.span)} : i.push(u)
            }
            i.push(a), t = i
        }
        return t
    }

    function Bi(e, t) {
        return {start: Math.min(e.start, t.start), end: Math.max(e.end, t.end)}
    }

    function ji(e, t) {
        var n = Math.max(e.start, t.start), r = Math.min(e.end, t.end);
        return n < r ? {start: n, end: r} : null
    }

    function Gi(e, t, n) {
        e.splice(t, 0, n)
    }

    function qi(e, t, n) {
        var r = 0, o = e.length;
        if (!o || t < n(e[r])) return [0, 0];
        if (t > n(e[o - 1])) return [o, 0];
        for (; r < o;) {
            var i = Math.floor(r + (o - r) / 2), a = n(e[i]);
            if (t < a) o = i; else {
                if (!(t > a)) return [i, 1];
                r = i + 1
            }
        }
        return [r, 0]
    }

    var Yi = function () {
        function e(e) {
            this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null
        }

        return e.prototype.destroy = function () {
        }, e
    }();

    function Zi(e, t) {
        return {
            component: e,
            el: t.el,
            useEventCenter: null == t.useEventCenter || t.useEventCenter,
            isHitComboAllowed: t.isHitComboAllowed || null
        }
    }

    function Xi(e) {
        var t;
        return (t = {})[e.component.uid] = e, t
    }

    var Ki = {}, $i = function () {
        function e(e, t) {
            this.emitter = new co
        }

        return e.prototype.destroy = function () {
        }, e.prototype.setMirrorIsVisible = function (e) {
        }, e.prototype.setMirrorNeedsRevert = function (e) {
        }, e.prototype.setAutoScrollEnabled = function (e) {
        }, e
    }(), Ji = {}, Qi = {startTime: xt, duration: xt, create: Boolean, sourceId: String};

    function ea(e) {
        var t = fn(e, Qi), n = t.refined, r = t.extra;
        return {
            startTime: n.startTime || null,
            duration: n.duration || null,
            create: null == n.create || n.create,
            sourceId: n.sourceId,
            leftoverProps: r
        }
    }

    var ta = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props.widgetGroups.map((function (t) {
                return e.renderWidgetGroup(t)
            }));
            return yo.apply(void 0, o(["div", {className: "fc-toolbar-chunk"}], t))
        }, t.prototype.renderWidgetGroup = function (e) {
            for (var t = this.props, n = this.context.theme, i = [], a = !0, s = 0, l = e; s < l.length; s++) {
                var u = l[s], c = u.buttonName, d = u.buttonClick, p = u.buttonText, f = u.buttonIcon;
                if ("title" === c) a = !1, i.push(yo("h2", {className: "fc-toolbar-title"}, t.title)); else {
                    var h = f ? {"aria-label": c} : {}, v = ["fc-" + c + "-button", n.getClass("button")];
                    c === t.activeButton && v.push(n.getClass("buttonActive"));
                    var g = !t.isTodayEnabled && "today" === c || !t.isPrevEnabled && "prev" === c || !t.isNextEnabled && "next" === c;
                    i.push(yo("button", r({
                        disabled: g,
                        className: v.join(" "),
                        onClick: d,
                        type: "button"
                    }, h), p || (f ? yo("span", {className: f}) : "")))
                }
            }
            if (i.length > 1) {
                var m = a && n.getClass("buttonGroup") || "";
                return yo.apply(void 0, o(["div", {className: m}], i))
            }
            return i[0]
        }, t
    }(Mo), na = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e, t, n = this.props, r = n.model, o = n.extraClassName, i = !1, a = r.center;
            return r.left ? (i = !0, e = r.left) : e = r.start, r.right ? (i = !0, t = r.right) : t = r.end, yo("div", {className: [o || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(" ")}, this.renderSection("start", e || []), this.renderSection("center", a || []), this.renderSection("end", t || []))
        }, t.prototype.renderSection = function (e, t) {
            var n = this.props;
            return yo(ta, {
                key: e,
                widgetGroups: t,
                title: n.title,
                activeButton: n.activeButton,
                isTodayEnabled: n.isTodayEnabled,
                isPrevEnabled: n.isPrevEnabled,
                isNextEnabled: n.isNextEnabled
            })
        }, t
    }(Mo), ra = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {availableWidth: null}, t.handleEl = function (e) {
                t.el = e, No(t.props.elRef, e), t.updateAvailableWidth()
            }, t.handleResize = function () {
                t.updateAvailableWidth()
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.state, n = e.aspectRatio,
                r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"],
                o = "", i = "";
            return n ? null !== t.availableWidth ? o = t.availableWidth / n : i = 1 / n * 100 + "%" : o = e.height || "", yo("div", {
                ref: this.handleEl,
                onClick: e.onClick,
                className: r.join(" "),
                style: {height: o, paddingBottom: i}
            }, e.children)
        }, t.prototype.componentDidMount = function () {
            this.context.addResizeHandler(this.handleResize)
        }, t.prototype.componentWillUnmount = function () {
            this.context.removeResizeHandler(this.handleResize)
        }, t.prototype.updateAvailableWidth = function () {
            this.el && this.props.aspectRatio && this.setState({availableWidth: this.el.offsetWidth})
        }, t
    }(Mo), oa = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleSegClick = function (e, t) {
                var r = n.component, o = r.context, i = Zn(t);
                if (i && r.isValidSegDownEl(e.target)) {
                    var a = Se(e.target, ".fc-event-forced-url"), s = a ? a.querySelector("a[href]").href : "";
                    o.emitter.trigger("eventClick", {
                        el: t,
                        event: new wr(r.context, i.eventRange.def, i.eventRange.instance),
                        jsEvent: e,
                        view: o.viewApi
                    }), s && !e.defaultPrevented && (window.location.href = s)
                }
            }, n.destroy = Me(t.el, "click", ".fc-event", n.handleSegClick), n
        }

        return n(t, e), t
    }(Yi), ia = function (e) {
        function t(t) {
            var n, r, o, i, a, s = e.call(this, t) || this;
            return s.handleEventElRemove = function (e) {
                e === s.currentSegEl && s.handleSegLeave(null, s.currentSegEl)
            }, s.handleSegEnter = function (e, t) {
                Zn(t) && (s.currentSegEl = t, s.triggerEvent("eventMouseEnter", e, t))
            }, s.handleSegLeave = function (e, t) {
                s.currentSegEl && (s.currentSegEl = null, s.triggerEvent("eventMouseLeave", e, t))
            }, s.removeHoverListeners = (n = t.el, r = ".fc-event", o = s.handleSegEnter, i = s.handleSegLeave, Me(n, "mouseover", r, (function (e, t) {
                if (t !== a) {
                    a = t, o(e, t);
                    var n = function (e) {
                        a = null, i(e, t), t.removeEventListener("mouseleave", n)
                    };
                    t.addEventListener("mouseleave", n)
                }
            }))), s
        }

        return n(t, e), t.prototype.destroy = function () {
            this.removeHoverListeners()
        }, t.prototype.triggerEvent = function (e, t, n) {
            var r = this.component, o = r.context, i = Zn(n);
            t && !r.isValidSegDownEl(t.target) || o.emitter.trigger(e, {
                el: n,
                event: new wr(o, i.eventRange.def, i.eventRange.instance),
                jsEvent: t,
                view: o.viewApi
            })
        }, t
    }(Yi), aa = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildViewContext = zt(ko), t.buildViewPropTransformers = zt(la), t.buildToolbarProps = zt(sa), t.handleNavLinkClick = xe("a[data-navlink]", t._handleNavLinkClick.bind(t)), t.headerRef = So(), t.footerRef = So(), t.interactionsStore = {}, t.registerInteractiveComponent = function (e, n) {
                var r = Zi(e, n), o = [oa, ia].concat(t.props.pluginHooks.componentInteractions).map((function (e) {
                    return new e(r)
                }));
                t.interactionsStore[e.uid] = o, Ki[e.uid] = r
            }, t.unregisterInteractiveComponent = function (e) {
                for (var n = 0, r = t.interactionsStore[e.uid]; n < r.length; n++) {
                    r[n].destroy()
                }
                delete t.interactionsStore[e.uid], delete Ki[e.uid]
            }, t.resizeRunner = new Ci((function () {
                t.props.emitter.trigger("_resize", !0), t.props.emitter.trigger("windowResize", {view: t.props.viewApi})
            })), t.handleWindowResize = function (e) {
                var n = t.props.options;
                n.handleWindowResize && e.target === window && t.resizeRunner.request(n.windowResizeDelay)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e, t = this.props, n = t.toolbarConfig, o = t.options,
                i = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, br(t.options.now, t.dateEnv), t.viewTitle),
                a = !1, s = "";
            t.isHeightAuto || t.forPrint ? s = "" : null != o.height ? a = !0 : null != o.contentHeight ? s = o.contentHeight : e = Math.max(o.aspectRatio, .5);
            var l = this.buildViewContext(t.viewSpec, t.viewApi, t.options, t.dateProfileGenerator, t.dateEnv, t.theme, t.pluginHooks, t.dispatch, t.getCurrentData, t.emitter, t.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
            return yo(To.Provider, {value: l}, n.headerToolbar && yo(na, r({
                ref: this.headerRef,
                extraClassName: "fc-header-toolbar",
                model: n.headerToolbar
            }, i)), yo(ra, {
                liquid: a,
                height: s,
                aspectRatio: e,
                onClick: this.handleNavLinkClick
            }, this.renderView(t), this.buildAppendContent()), n.footerToolbar && yo(na, r({
                ref: this.footerRef,
                extraClassName: "fc-footer-toolbar",
                model: n.footerToolbar
            }, i)))
        }, t.prototype.componentDidMount = function () {
            var e = this.props;
            this.calendarInteractions = e.pluginHooks.calendarInteractions.map((function (t) {
                return new t(e)
            })), window.addEventListener("resize", this.handleWindowResize);
            var t = e.pluginHooks.propSetHandlers;
            for (var n in t) t[n](e[n], e)
        }, t.prototype.componentDidUpdate = function (e) {
            var t = this.props, n = t.pluginHooks.propSetHandlers;
            for (var r in n) t[r] !== e[r] && n[r](t[r], t)
        }, t.prototype.componentWillUnmount = function () {
            window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
            for (var e = 0, t = this.calendarInteractions; e < t.length; e++) {
                t[e].destroy()
            }
            this.props.emitter.trigger("_unmount")
        }, t.prototype._handleNavLinkClick = function (e, t) {
            var n = this.props, r = n.dateEnv, o = n.options, i = n.calendarApi, a = t.getAttribute("data-navlink");
            a = a ? JSON.parse(a) : {};
            var s = r.createMarker(a.date), l = a.type,
                u = "day" === l ? o.navLinkDayClick : "week" === l ? o.navLinkWeekClick : null;
            "function" == typeof u ? u.call(i, r.toDate(s), e) : ("string" == typeof u && (l = u), i.zoomTo(s, l))
        }, t.prototype.buildAppendContent = function () {
            var e = this.props, t = e.pluginHooks.viewContainerAppends.map((function (t) {
                return t(e)
            }));
            return yo.apply(void 0, o([Do, {}], t))
        }, t.prototype.renderView = function (e) {
            for (var t = e.pluginHooks, n = e.viewSpec, o = {
                dateProfile: e.dateProfile,
                businessHours: e.businessHours,
                eventStore: e.renderableEventStore,
                eventUiBases: e.eventUiBases,
                dateSelection: e.dateSelection,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                isHeightAuto: e.isHeightAuto,
                forPrint: e.forPrint
            }, i = 0, a = this.buildViewPropTransformers(t.viewPropsTransformers); i < a.length; i++) {
                var s = a[i];
                r(o, s.transform(o, e))
            }
            var l = n.component;
            return yo(l, r({}, o))
        }, t
    }(xo);

    function sa(e, t, n, r, o, i) {
        var a = n.build(o, void 0, !1), s = n.buildPrev(t, r, !1), l = n.buildNext(t, r, !1);
        return {
            title: i,
            activeButton: e.type,
            isTodayEnabled: a.isValid && !jn(t.currentRange, o),
            isPrevEnabled: s.isValid,
            isNextEnabled: l.isValid
        }
    }

    function la(e) {
        return e.map((function (e) {
            return new e
        }))
    }

    var ua = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {forPrint: !1}, t.handleBeforePrint = function () {
                t.setState({forPrint: !0})
            }, t.handleAfterPrint = function () {
                t.setState({forPrint: !1})
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = e.options, n = this.state.forPrint,
                r = n || "auto" === t.height || "auto" === t.contentHeight, o = r || null == t.height ? "" : t.height,
                i = ["fc", n ? "fc-media-print" : "fc-media-screen", "fc-direction-" + t.direction, e.theme.getClass("root")];
            return Yr() || i.push("fc-liquid-hack"), e.children(i, o, r, n)
        }, t.prototype.componentDidMount = function () {
            var e = this.props.emitter;
            e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint)
        }, t.prototype.componentWillUnmount = function () {
            var e = this.props.emitter;
            e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint)
        }, t
    }(Mo);

    function ca(e, t) {
        return rn(!e || t > 10 ? {weekday: "short"} : t > 1 ? {
            weekday: "short",
            month: "numeric",
            day: "numeric",
            omitCommas: !0
        } : {weekday: "long"})
    }

    var da = "fc-col-header-cell";

    function pa(e) {
        return e.text
    }

    var fa = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.context, t = e.dateEnv, n = e.options, o = e.theme, i = e.viewApi, a = this.props, s = a.date,
                l = a.dateProfile, u = $r(s, a.todayRange, null, l), c = [da].concat(Jr(u, o)),
                d = t.format(s, a.dayHeaderFormat),
                p = n.navLinks && !u.isDisabled && a.colCnt > 1 ? {"data-navlink": Qr(s), tabIndex: 0} : {},
                f = r(r(r({date: t.toDate(s), view: i}, a.extraHookProps), {text: d}), u);
            return yo(Wo, {
                hookProps: f,
                classNames: n.dayHeaderClassNames,
                content: n.dayHeaderContent,
                defaultContent: pa,
                didMount: n.dayHeaderDidMount,
                willUnmount: n.dayHeaderWillUnmount
            }, (function (e, t, n, o) {
                return yo("th", r({
                    ref: e,
                    className: c.concat(t).join(" "),
                    "data-date": u.isDisabled ? void 0 : Lt(s),
                    colSpan: a.colSpan
                }, a.extraDataAttrs), yo("div", {className: "fc-scrollgrid-sync-inner"}, !u.isDisabled && yo("a", r({
                    ref: n,
                    className: ["fc-col-header-cell-cushion", a.isSticky ? "fc-sticky" : ""].join(" ")
                }, p), o)))
            }))
        }, t
    }(Mo), ha = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.dateEnv, o = t.theme, i = t.viewApi, a = t.options,
                s = $e(new Date(2592e5), e.dow),
                l = {dow: e.dow, isDisabled: !1, isFuture: !1, isPast: !1, isToday: !1, isOther: !1},
                u = [da].concat(Jr(l, o), e.extraClassNames || []), c = n.format(s, e.dayHeaderFormat),
                d = r(r(r(r({date: s}, l), {view: i}), e.extraHookProps), {text: c});
            return yo(Wo, {
                hookProps: d,
                classNames: a.dayHeaderClassNames,
                content: a.dayHeaderContent,
                defaultContent: pa,
                didMount: a.dayHeaderDidMount,
                willUnmount: a.dayHeaderWillUnmount
            }, (function (t, n, o, i) {
                return yo("th", r({
                    ref: t,
                    className: u.concat(n).join(" "),
                    colSpan: e.colSpan
                }, e.extraDataAttrs), yo("div", {className: "fc-scrollgrid-sync-inner"}, yo("a", {
                    className: ["fc-col-header-cell-cushion", e.isSticky ? "fc-sticky" : ""].join(" "),
                    ref: o
                }, i)))
            }))
        }, t
    }(Mo), va = function (e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.initialNowDate = br(n.options.now, n.dateEnv), r.initialNowQueriedMs = (new Date).valueOf(), r.state = r.computeTiming().currentState, r
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.state;
            return e.children(t.nowDate, t.todayRange)
        }, t.prototype.componentDidMount = function () {
            this.setTimeout()
        }, t.prototype.componentDidUpdate = function (e) {
            e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout())
        }, t.prototype.componentWillUnmount = function () {
            this.clearTimeout()
        }, t.prototype.computeTiming = function () {
            var e = this.props, t = this.context,
                n = Je(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs),
                r = t.dateEnv.startOf(n, e.unit), o = t.dateEnv.add(r, xt(1, e.unit)), i = o.valueOf() - n.valueOf();
            return i = Math.min(864e5, i), {
                currentState: {nowDate: r, todayRange: ga(r)},
                nextState: {nowDate: o, todayRange: ga(o)},
                waitMs: i
            }
        }, t.prototype.setTimeout = function () {
            var e = this, t = this.computeTiming(), n = t.nextState, r = t.waitMs;
            this.timeoutId = setTimeout((function () {
                e.setState(n, (function () {
                    e.setTimeout()
                }))
            }), r)
        }, t.prototype.clearTimeout = function () {
            this.timeoutId && clearTimeout(this.timeoutId)
        }, t.contextType = To, t
    }(mo);

    function ga(e) {
        var t = ot(e);
        return {start: t, end: $e(t, 1)}
    }

    var ma = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.createDayHeaderFormatter = zt(ya), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.context, t = this.props, n = t.dates, r = t.dateProfile, o = t.datesRepDistinctDays,
                i = t.renderIntro, a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, o, n.length);
            return yo(va, {unit: "day"}, (function (e, t) {
                return yo("tr", null, i && i("day"), n.map((function (e) {
                    return o ? yo(fa, {
                        key: e.toISOString(),
                        date: e,
                        dateProfile: r,
                        todayRange: t,
                        colCnt: n.length,
                        dayHeaderFormat: a
                    }) : yo(ha, {key: e.getUTCDay(), dow: e.getUTCDay(), dayHeaderFormat: a})
                })))
            }))
        }, t
    }(Mo);

    function ya(e, t, n) {
        return e || ca(t, n)
    }

    var Ea = function () {
        function e(e, t) {
            for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r;) t.isHiddenDay(n) ? o.push(a + .5) : (a += 1, o.push(a), i.push(n)), n = $e(n, 1);
            this.dates = i, this.indices = o, this.cnt = i.length
        }

        return e.prototype.sliceRange = function (e) {
            var t = this.getDateDayIndex(e.start), n = this.getDateDayIndex($e(e.end, -1)), r = Math.max(0, t),
                o = Math.min(this.cnt - 1, n);
            return (r = Math.ceil(r)) <= (o = Math.floor(o)) ? {
                firstIndex: r,
                lastIndex: o,
                isStart: t === r,
                isEnd: n === o
            } : null
        }, e.prototype.getDateDayIndex = function (e) {
            var t = this.indices, n = Math.floor(et(this.dates[0], e));
            return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
        }, e
    }(), Sa = function () {
        function e(e, t) {
            var n, r, o, i = e.dates;
            if (t) {
                for (r = i[0].getUTCDay(), n = 1; n < i.length && i[n].getUTCDay() !== r; n += 1) ;
                o = Math.ceil(i.length / n)
            } else o = 1, n = i.length;
            this.rowCnt = o, this.colCnt = n, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates()
        }

        return e.prototype.buildCells = function () {
            for (var e = [], t = 0; t < this.rowCnt; t += 1) {
                for (var n = [], r = 0; r < this.colCnt; r += 1) n.push(this.buildCell(t, r));
                e.push(n)
            }
            return e
        }, e.prototype.buildCell = function (e, t) {
            var n = this.daySeries.dates[e * this.colCnt + t];
            return {key: n.toISOString(), date: n}
        }, e.prototype.buildHeaderDates = function () {
            for (var e = [], t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date);
            return e
        }, e.prototype.sliceRange = function (e) {
            var t = this.colCnt, n = this.daySeries.sliceRange(e), r = [];
            if (n) for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i;) {
                var s = Math.floor(a / t), l = Math.min((s + 1) * t, i + 1);
                r.push({
                    row: s,
                    firstCol: a % t,
                    lastCol: (l - 1) % t,
                    isStart: n.isStart && a === o,
                    isEnd: n.isEnd && l - 1 === i
                }), a = l
            }
            return r
        }, e
    }(), Da = function () {
        function e() {
            this.sliceBusinessHours = zt(this._sliceBusinessHours), this.sliceDateSelection = zt(this._sliceDateSpan), this.sliceEventStore = zt(this._sliceEventStore), this.sliceEventDrag = zt(this._sliceInteraction), this.sliceEventResize = zt(this._sliceInteraction), this.forceDayIfListItem = !1
        }

        return e.prototype.sliceProps = function (e, t, n, r) {
            for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
            var s = e.eventUiBases, l = this.sliceEventStore.apply(this, o([e.eventStore, s, t, n], i));
            return {
                dateSelectionSegs: this.sliceDateSelection.apply(this, o([e.dateSelection, s, r], i)),
                businessHourSegs: this.sliceBusinessHours.apply(this, o([e.businessHours, t, n, r], i)),
                fgEventSegs: l.fg,
                bgEventSegs: l.bg,
                eventDrag: this.sliceEventDrag.apply(this, o([e.eventDrag, s, t, n], i)),
                eventResize: this.sliceEventResize.apply(this, o([e.eventResize, s, t, n], i)),
                eventSelection: e.eventSelection
            }
        }, e.prototype.sliceNowDate = function (e, t) {
            for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
            return this._sliceDateSpan.apply(this, o([{range: {start: e, end: Je(e, 1)}, allDay: !1}, {}, t], n))
        }, e.prototype._sliceBusinessHours = function (e, t, n, r) {
            for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
            return e ? this._sliceEventStore.apply(this, o([Rt(e, ba(t, Boolean(n)), r), {}, t, n], i)).bg : []
        }, e.prototype._sliceEventStore = function (e, t, n, r) {
            for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
            if (e) {
                var a = Gn(e, t, ba(n, Boolean(r)), r);
                return {bg: this.sliceEventRanges(a.bg, o), fg: this.sliceEventRanges(a.fg, o)}
            }
            return {bg: [], fg: []}
        }, e.prototype._sliceInteraction = function (e, t, n, r) {
            for (var o = [], i = 4; i < arguments.length; i++) o[i - 4] = arguments[i];
            if (!e) return null;
            var a = Gn(e.mutatedEvents, t, ba(n, Boolean(r)), r);
            return {
                segs: this.sliceEventRanges(a.fg, o),
                affectedInstances: e.affectedEvents.instances,
                isEvent: e.isEvent
            }
        }, e.prototype._sliceDateSpan = function (e, t, n) {
            for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
            if (!e) return [];
            for (var a = dr(e, t, n), s = this.sliceRange.apply(this, o([e.range], r)), l = 0, u = s; l < u.length; l++) {
                var c = u[l];
                c.eventRange = a
            }
            return s
        }, e.prototype.sliceEventRanges = function (e, t) {
            for (var n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                n.push.apply(n, this.sliceEventRange(i, t))
            }
            return n
        }, e.prototype.sliceEventRange = function (e, t) {
            var n = e.range;
            this.forceDayIfListItem && "list-item" === e.ui.display && (n = {start: n.start, end: $e(n.start, 1)});
            for (var r = this.sliceRange.apply(this, o([n], t)), i = 0, a = r; i < a.length; i++) {
                var s = a[i];
                s.eventRange = e, s.isStart = e.isStart && s.isStart, s.isEnd = e.isEnd && s.isEnd
            }
            return r
        }, e
    }();

    function ba(e, t) {
        var n = e.activeRange;
        return t ? n : {
            start: Je(n.start, e.slotMinTime.milliseconds),
            end: Je(n.end, e.slotMaxTime.milliseconds - 864e5)
        }
    }

    function Ca(e, t, n) {
        var r = e.mutatedEvents.instances;
        for (var o in r) if (!Bn(t.validRange, r[o].range)) return !1;
        return Ra({eventDrag: e}, n)
    }

    function wa(e, t, n) {
        return !!Bn(t.validRange, e.range) && Ra({dateSelection: e}, n)
    }

    function Ra(e, t) {
        var n = t.getCurrentData(), o = r({
            businessHours: n.businessHours,
            dateSelection: "",
            eventStore: n.eventStore,
            eventUiBases: n.eventUiBases,
            eventSelection: "",
            eventDrag: null,
            eventResize: null
        }, e);
        return (t.pluginHooks.isPropsValid || _a)(o, t)
    }

    function _a(e, t, n, o) {
        return void 0 === n && (n = {}), !(e.eventDrag && !function (e, t, n, o) {
            var i = t.getCurrentData(), a = e.eventDrag, s = a.mutatedEvents, l = s.defs, u = s.instances,
                c = Xn(l, a.isEvent ? e.eventUiBases : {"": i.selectionConfig});
            o && (c = mt(c, o));
            var d = (v = e.eventStore, g = a.affectedEvents.instances, {
                defs: v.defs,
                instances: gt(v.instances, (function (e) {
                    return !g[e.instanceId]
                }))
            }), p = d.defs, f = d.instances, h = Xn(p, e.eventUiBases);
            var v, g;
            for (var m in u) {
                var y = u[m], E = y.range, S = c[y.defId], D = l[y.defId];
                if (!Ta(S.constraints, E, d, e.businessHours, t)) return !1;
                var b = t.options.eventOverlap, C = "function" == typeof b ? b : null;
                for (var w in f) {
                    var R = f[w];
                    if (zn(E, R.range)) {
                        if (!1 === h[R.defId].overlap && a.isEvent) return !1;
                        if (!1 === S.overlap) return !1;
                        if (C && !C(new wr(t, p[R.defId], R), new wr(t, D, y))) return !1
                    }
                }
                for (var _ = i.eventStore, T = 0, k = S.allows; T < k.length; T++) {
                    var x = k[T], M = r(r({}, n), {range: y.range, allDay: D.allDay}), P = _.defs[D.defId],
                        I = _.instances[m], N = void 0;
                    if (N = P ? new wr(t, P, I) : new wr(t, D), !x(fr(M, t), N)) return !1
                }
            }
            return !0
        }(e, t, n, o)) && !(e.dateSelection && !function (e, t, n, o) {
            var i = e.eventStore, a = i.defs, s = i.instances, l = e.dateSelection, u = l.range,
                c = t.getCurrentData().selectionConfig;
            o && (c = o(c));
            if (!Ta(c.constraints, u, i, e.businessHours, t)) return !1;
            var d = t.options.selectOverlap, p = "function" == typeof d ? d : null;
            for (var f in s) {
                var h = s[f];
                if (zn(u, h.range)) {
                    if (!1 === c.overlap) return !1;
                    if (p && !p(new wr(t, a[h.defId], h), null)) return !1
                }
            }
            for (var v = 0, g = c.allows; v < g.length; v++) {
                if (!(0, g[v])(fr(r(r({}, n), l), t), null)) return !1
            }
            return !0
        }(e, t, n, o))
    }

    function Ta(e, t, n, r, o) {
        for (var i = 0, a = e; i < a.length; i++) {
            if (!Ma(ka(a[i], t, n, r, o), t)) return !1
        }
        return !0
    }

    function ka(e, t, n, r, o) {
        return "businessHours" === e ? xa(Rt(r, t, o)) : "string" == typeof e ? xa(Sn(n, (function (t) {
            return t.groupId === e
        }))) : "object" == typeof e && e ? xa(Rt(e, t, o)) : []
    }

    function xa(e) {
        var t = e.instances, n = [];
        for (var r in t) n.push(t[r].range);
        return n
    }

    function Ma(e, t) {
        for (var n = 0, r = e; n < r.length; n++) {
            if (Bn(r[n], t)) return !0
        }
        return !1
    }

    var Pa = /^(visible|hidden)$/, Ia = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleEl = function (e) {
                t.el = e, No(t.props.elRef, e)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = e.liquid, n = e.liquidIsAbsolute, r = t && n, o = ["fc-scroller"];
            return t && (n ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")), yo("div", {
                ref: this.handleEl,
                className: o.join(" "),
                style: {
                    overflowX: e.overflowX,
                    overflowY: e.overflowY,
                    left: r && -(e.overcomeLeft || 0) || "",
                    right: r && -(e.overcomeRight || 0) || "",
                    bottom: r && -(e.overcomeBottom || 0) || "",
                    marginLeft: !r && -(e.overcomeLeft || 0) || "",
                    marginRight: !r && -(e.overcomeRight || 0) || "",
                    marginBottom: !r && -(e.overcomeBottom || 0) || "",
                    maxHeight: e.maxHeight || ""
                }
            }, e.children)
        }, t.prototype.needsXScrolling = function () {
            if (Pa.test(this.props.overflowX)) return !1;
            for (var e = this.el, t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) {
                if (n[r].getBoundingClientRect().width > t) return !0
            }
            return !1
        }, t.prototype.needsYScrolling = function () {
            if (Pa.test(this.props.overflowY)) return !1;
            for (var e = this.el, t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) {
                if (n[r].getBoundingClientRect().height > t) return !0
            }
            return !1
        }, t.prototype.getXScrollbarWidth = function () {
            return Pa.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight
        }, t.prototype.getYScrollbarWidth = function () {
            return Pa.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth
        }, t
    }(Mo), Na = function () {
        function e(e) {
            var t = this;
            this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function (e, n) {
                var r = t, o = r.depths, i = r.currentMap, a = !1, s = !1;
                null !== e ? (a = n in i, i[n] = e, o[n] = (o[n] || 0) + 1, s = !0) : (o[n] -= 1, o[n] || (delete i[n], delete t.callbackMap[n], a = !0)), t.masterCallback && (a && t.masterCallback(null, String(n)), s && t.masterCallback(e, String(n)))
            }
        }

        return e.prototype.createRef = function (e) {
            var t = this, n = this.callbackMap[e];
            return n || (n = this.callbackMap[e] = function (n) {
                t.handleValue(n, String(e))
            }), n
        }, e.prototype.collect = function (e, t, n) {
            return wt(this.currentMap, e, t, n)
        }, e.prototype.getAll = function () {
            return Et(this.currentMap)
        }, e
    }();

    function Ha(e) {
        for (var t = 0, n = 0, r = be(e, ".fc-scrollgrid-shrink"); n < r.length; n++) {
            var o = r[n];
            t = Math.max(t, Ze(o))
        }
        return Math.ceil(t)
    }

    function Oa(e, t) {
        return e.liquid && t.liquid
    }

    function Aa(e, t) {
        return null != t.maxHeight || Oa(e, t)
    }

    function Ua(e, t, n) {
        var r = n.expandRows;
        return "function" == typeof t.content ? t.content(n) : yo("table", {
            className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
            style: {minWidth: n.tableMinWidth, width: n.clientWidth, height: r ? n.clientHeight : ""}
        }, n.tableColGroupNode, yo("tbody", {}, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent))
    }

    function La(e, t) {
        return Ft(e, t, St)
    }

    function Wa(e, t) {
        for (var n = [], r = 0, i = e; r < i.length; r++) for (var a = i[r], s = a.span || 1, l = 0; l < s; l += 1) n.push(yo("col", {
            style: {
                width: "shrink" === a.width ? Va(t) : a.width || "",
                minWidth: a.minWidth || ""
            }
        }));
        return yo.apply(void 0, o(["colgroup", {}], n))
    }

    function Va(e) {
        return null == e ? 4 : e
    }

    function Fa(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            if ("shrink" === n[t].width) return !0
        }
        return !1
    }

    function za(e, t) {
        var n = ["fc-scrollgrid", t.theme.getClass("table")];
        return e && n.push("fc-scrollgrid-liquid"), n
    }

    function Ba(e, t) {
        var n = ["fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type, e.className];
        return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n
    }

    function ja(e) {
        return yo("div", {
            className: "fc-scrollgrid-sticky-shim",
            style: {width: e.clientWidth, minWidth: e.tableMinWidth}
        })
    }

    function Ga(e) {
        var t = e.stickyHeaderDates;
        return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t
    }

    function qa(e) {
        var t = e.stickyFooterScrollbar;
        return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t
    }

    var Ya = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.processCols = zt((function (e) {
                return e
            }), La), t.renderMicroColGroup = zt(Wa), t.scrollerRefs = new Na, t.scrollerElRefs = new Na(t._handleScrollerEl.bind(t)), t.state = {
                shrinkWidth: null,
                forceYScrollbars: !1,
                scrollerClientWidths: {},
                scrollerClientHeights: {}
            }, t.handleSizing = function () {
                t.setState(r({shrinkWidth: t.computeShrinkWidth()}, t.computeScrollerDims()))
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = e.props, n = e.state, r = e.context, i = t.sections || [], a = this.processCols(t.cols),
                s = this.renderMicroColGroup(a, n.shrinkWidth), l = za(t.liquid, r);
            t.collapsibleWidth && l.push("fc-scrollgrid-collapsible");
            for (var u, c = i.length, d = 0, p = [], f = [], h = []; d < c && "header" === (u = i[d]).type;) p.push(this.renderSection(u, s)), d += 1;
            for (; d < c && "body" === (u = i[d]).type;) f.push(this.renderSection(u, s)), d += 1;
            for (; d < c && "footer" === (u = i[d]).type;) h.push(this.renderSection(u, s)), d += 1;
            var v = !Yr();
            return yo("table", {
                className: l.join(" "),
                style: {height: t.height}
            }, Boolean(!v && p.length) && yo.apply(void 0, o(["thead", {}], p)), Boolean(!v && f.length) && yo.apply(void 0, o(["tbody", {}], f)), Boolean(!v && h.length) && yo.apply(void 0, o(["tfoot", {}], h)), v && yo.apply(void 0, o(o(o(["tbody", {}], p), f), h)))
        }, t.prototype.renderSection = function (e, t) {
            return "outerContent" in e ? yo(Do, {key: e.key}, e.outerContent) : yo("tr", {
                key: e.key,
                className: Ba(e, this.props.liquid).join(" ")
            }, this.renderChunkTd(e, t, e.chunk))
        }, t.prototype.renderChunkTd = function (e, t, n) {
            if ("outerContent" in n) return n.outerContent;
            var r = this.props, o = this.state, i = o.forceYScrollbars, a = o.scrollerClientWidths,
                s = o.scrollerClientHeights, l = Aa(r, e), u = Oa(r, e),
                c = r.liquid ? i ? "scroll" : l ? "auto" : "hidden" : "visible", d = e.key, p = Ua(e, n, {
                    tableColGroupNode: t,
                    tableMinWidth: "",
                    clientWidth: r.collapsibleWidth || void 0 === a[d] ? null : a[d],
                    clientHeight: void 0 !== s[d] ? s[d] : null,
                    expandRows: e.expandRows,
                    syncRowHeights: !1,
                    rowSyncHeights: [],
                    reportRowHeightChange: function () {
                    }
                });
            return yo("td", {ref: n.elRef}, yo("div", {className: "fc-scroller-harness" + (u ? " fc-scroller-harness-liquid" : "")}, yo(Ia, {
                ref: this.scrollerRefs.createRef(d),
                elRef: this.scrollerElRefs.createRef(d),
                overflowY: c,
                overflowX: r.liquid ? "hidden" : "visible",
                maxHeight: e.maxHeight,
                liquid: u,
                liquidIsAbsolute: !0
            }, p)))
        }, t.prototype._handleScrollerEl = function (e, t) {
            var n = function (e, t) {
                for (var n = 0, r = e; n < r.length; n++) {
                    var o = r[n];
                    if (o.key === t) return o
                }
                return null
            }(this.props.sections, t);
            n && No(n.chunk.scrollerElRef, e)
        }, t.prototype.componentDidMount = function () {
            this.handleSizing(), this.context.addResizeHandler(this.handleSizing)
        }, t.prototype.componentDidUpdate = function () {
            this.handleSizing()
        }, t.prototype.componentWillUnmount = function () {
            this.context.removeResizeHandler(this.handleSizing)
        }, t.prototype.computeShrinkWidth = function () {
            return Fa(this.props.cols) ? Ha(this.scrollerElRefs.getAll()) : 0
        }, t.prototype.computeScrollerDims = function () {
            var e = ro(), t = this.scrollerRefs, n = this.scrollerElRefs, r = !1, o = {}, i = {};
            for (var a in t.currentMap) {
                var s = t.currentMap[a];
                if (s && s.needsYScrolling()) {
                    r = !0;
                    break
                }
            }
            for (var l = 0, u = this.props.sections; l < u.length; l++) {
                a = u[l].key;
                var c = n.currentMap[a];
                if (c) {
                    var d = c.parentNode;
                    o[a] = Math.floor(d.getBoundingClientRect().width - (r ? e.y : 0)), i[a] = Math.floor(d.getBoundingClientRect().height)
                }
            }
            return {forceYScrollbars: r, scrollerClientWidths: o, scrollerClientHeights: i}
        }, t
    }(Mo);
    Ya.addStateEquality({scrollerClientWidths: St, scrollerClientHeights: St});
    var Za = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.elRef = So(), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.options, r = e.seg, o = r.eventRange, i = o.ui, a = {
                event: new wr(t, o.def, o.instance),
                view: t.viewApi,
                timeText: e.timeText,
                textColor: i.textColor,
                backgroundColor: i.backgroundColor,
                borderColor: i.borderColor,
                isDraggable: !e.disableDragging && Qn(r, t),
                isStartResizable: !e.disableResizing && er(r, t),
                isEndResizable: !e.disableResizing && tr(r),
                isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
                isStart: Boolean(r.isStart),
                isEnd: Boolean(r.isEnd),
                isPast: Boolean(e.isPast),
                isFuture: Boolean(e.isFuture),
                isToday: Boolean(e.isToday),
                isSelected: Boolean(e.isSelected),
                isDragging: Boolean(e.isDragging),
                isResizing: Boolean(e.isResizing)
            }, s = or(a).concat(i.classNames);
            return yo(Wo, {
                hookProps: a,
                classNames: n.eventClassNames,
                content: n.eventContent,
                defaultContent: e.defaultContent,
                didMount: n.eventDidMount,
                willUnmount: n.eventWillUnmount,
                elRef: this.elRef
            }, (function (t, n, r, o) {
                return e.children(t, s.concat(n), r, o, a)
            }))
        }, t.prototype.componentDidMount = function () {
            Yn(this.elRef.current, this.props.seg)
        }, t.prototype.componentDidUpdate = function (e) {
            var t = this.props.seg;
            t !== e.seg && Yn(this.elRef.current, t)
        }, t
    }(Mo), Xa = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = e.seg, o = t.options.eventTimeFormat || e.defaultTimeFormat,
                i = nr(n, o, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
            return yo(Za, {
                seg: n,
                timeText: i,
                disableDragging: e.disableDragging,
                disableResizing: e.disableResizing,
                defaultContent: e.defaultContent || Ka,
                isDragging: e.isDragging,
                isResizing: e.isResizing,
                isDateSelecting: e.isDateSelecting,
                isSelected: e.isSelected,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday
            }, (function (t, o, i, a, s) {
                return yo("a", r({
                    className: e.extraClassNames.concat(o).join(" "),
                    style: {borderColor: s.borderColor, backgroundColor: s.backgroundColor},
                    ref: t
                }, function (e) {
                    var t = e.eventRange.def.url;
                    return t ? {href: t} : {}
                }(n)), yo("div", {
                    className: "fc-event-main",
                    ref: i,
                    style: {color: s.textColor}
                }, a), s.isStartResizable && yo("div", {className: "fc-event-resizer fc-event-resizer-start"}), s.isEndResizable && yo("div", {className: "fc-event-resizer fc-event-resizer-end"}))
            }))
        }, t
    }(Mo);

    function Ka(e) {
        return yo("div", {className: "fc-event-main-frame"}, e.timeText && yo("div", {className: "fc-event-time"}, e.timeText), yo("div", {className: "fc-event-title-container"}, yo("div", {className: "fc-event-title fc-sticky"}, e.event.title || yo(Do, null, " "))))
    }

    var $a = function (e) {
        return yo(To.Consumer, null, (function (t) {
            var n = t.options, r = {isAxis: e.isAxis, date: t.dateEnv.toDate(e.date), view: t.viewApi};
            return yo(Wo, {
                hookProps: r,
                classNames: n.nowIndicatorClassNames,
                content: n.nowIndicatorContent,
                didMount: n.nowIndicatorDidMount,
                willUnmount: n.nowIndicatorWillUnmount
            }, e.children)
        }))
    }, Ja = rn({day: "numeric"}), Qa = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.options, r = es({
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                showDayNumber: e.showDayNumber,
                extraProps: e.extraHookProps,
                viewApi: t.viewApi,
                dateEnv: t.dateEnv
            });
            return yo(Fo, {hookProps: r, content: n.dayCellContent, defaultContent: e.defaultContent}, e.children)
        }, t
    }(Mo);

    function es(e) {
        var t = e.date, n = e.dateEnv, o = $r(t, e.todayRange, null, e.dateProfile);
        return r(r(r({
            date: n.toDate(t),
            view: e.viewApi
        }, o), {dayNumberText: e.showDayNumber ? n.format(t, Ja) : ""}), e.extraProps)
    }

    var ts = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.refineHookProps = Bt(es), t.normalizeClassNames = jo(), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.options, r = this.refineHookProps({
                    date: e.date,
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    showDayNumber: e.showDayNumber,
                    extraProps: e.extraHookProps,
                    viewApi: t.viewApi,
                    dateEnv: t.dateEnv
                }), o = Jr(r, t.theme).concat(r.isDisabled ? [] : this.normalizeClassNames(n.dayCellClassNames, r)),
                i = r.isDisabled ? {} : {"data-date": Lt(e.date)};
            return yo(Bo, {
                hookProps: r,
                didMount: n.dayCellDidMount,
                willUnmount: n.dayCellWillUnmount,
                elRef: e.elRef
            }, (function (t) {
                return e.children(t, o, i, r.isDisabled)
            }))
        }, t
    }(Mo);

    function ns(e) {
        return yo("div", {className: "fc-" + e})
    }

    var rs = function (e) {
        return yo(Za, {
            defaultContent: os,
            seg: e.seg,
            timeText: "",
            disableDragging: !0,
            disableResizing: !0,
            isDragging: !1,
            isResizing: !1,
            isDateSelecting: !1,
            isSelected: !1,
            isPast: e.isPast,
            isFuture: e.isFuture,
            isToday: e.isToday
        }, (function (e, t, n, r, o) {
            return yo("div", {
                ref: e,
                className: ["fc-bg-event"].concat(t).join(" "),
                style: {backgroundColor: o.backgroundColor}
            }, r)
        }))
    };

    function os(e) {
        return e.event.title && yo("div", {className: "fc-event-title"}, e.event.title)
    }

    var is = function (e) {
        return yo(To.Consumer, null, (function (t) {
            var n = t.dateEnv, r = t.options, o = e.date, i = r.weekNumberFormat || e.defaultFormat,
                a = n.computeWeekNumber(o), s = n.format(o, i);
            return yo(Wo, {
                hookProps: {num: a, text: s, date: o},
                classNames: r.weekNumberClassNames,
                content: r.weekNumberContent,
                defaultContent: as,
                didMount: r.weekNumberDidMount,
                willUnmount: r.weekNumberWillUnmount
            }, e.children)
        }))
    };

    function as(e) {
        return e.text
    }

    var ss = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleRootEl = function (e) {
                t.rootEl = e, t.props.elRef && No(t.props.elRef, e)
            }, t.handleDocumentMousedown = function (e) {
                var n = _e(e);
                t.rootEl.contains(n) || t.handleCloseClick()
            }, t.handleCloseClick = function () {
                var e = t.props.onClose;
                e && e()
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.context.theme, t = this.props,
                n = ["fc-popover", e.getClass("popover")].concat(t.extraClassNames || []);
            return Co(yo("div", r({className: n.join(" ")}, t.extraAttrs, {ref: this.handleRootEl}), yo("div", {className: "fc-popover-header " + e.getClass("popoverHeader")}, yo("span", {className: "fc-popover-title"}, t.title), yo("span", {
                className: "fc-popover-close " + e.getIconClass("close"),
                onClick: this.handleCloseClick
            })), yo("div", {className: "fc-popover-body " + e.getClass("popoverContent")}, t.children)), t.parentEl)
        }, t.prototype.componentDidMount = function () {
            document.addEventListener("mousedown", this.handleDocumentMousedown), this.updateSize()
        }, t.prototype.componentWillUnmount = function () {
            document.removeEventListener("mousedown", this.handleDocumentMousedown)
        }, t.prototype.updateSize = function () {
            var e = this.context.isRtl, t = this.props, n = t.alignmentEl, r = t.alignGridTop, o = this.rootEl,
                i = function (e) {
                    for (var t = lo(e), n = e.getBoundingClientRect(), r = 0, o = t; r < o.length; r++) {
                        var i = Br(n, o[r].getBoundingClientRect());
                        if (!i) return null;
                        n = i
                    }
                    return n
                }(n);
            if (i) {
                var a = o.getBoundingClientRect(), s = r ? Se(n, ".fc-scrollgrid").getBoundingClientRect().top : i.top,
                    l = e ? i.right - a.width : i.left;
                s = Math.max(s, 10), l = Math.min(l, document.documentElement.clientWidth - 10 - a.width), l = Math.max(l, 10);
                var u = o.offsetParent.getBoundingClientRect();
                we(o, {top: s - u.top, left: l - u.left})
            }
        }, t
    }(Mo), ls = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleRootEl = function (e) {
                t.rootEl = e, e ? t.context.registerInteractiveComponent(t, {
                    el: e,
                    useEventCenter: !1
                }) : t.context.unregisterInteractiveComponent(t)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.context, t = e.options, n = e.dateEnv, r = this.props, o = r.startDate, i = r.todayRange,
                a = r.dateProfile, s = n.format(o, t.dayPopoverFormat);
            return yo(ts, {date: o, dateProfile: a, todayRange: i, elRef: this.handleRootEl}, (function (e, t, n) {
                return yo(ss, {
                    elRef: e,
                    title: s,
                    extraClassNames: ["fc-more-popover"].concat(t),
                    extraAttrs: n,
                    parentEl: r.parentEl,
                    alignmentEl: r.alignmentEl,
                    alignGridTop: r.alignGridTop,
                    onClose: r.onClose
                }, yo(Qa, {date: o, dateProfile: a, todayRange: i}, (function (e, t) {
                    return t && yo("div", {className: "fc-more-popover-misc", ref: e}, t)
                })), r.children)
            }))
        }, t.prototype.queryHit = function (e, t, n, o) {
            var i = this.rootEl, a = this.props;
            return e >= 0 && e < n && t >= 0 && t < o ? {
                dateProfile: a.dateProfile,
                dateSpan: r({allDay: !0, range: {start: a.startDate, end: a.endDate}}, a.extraDateSpan),
                dayEl: i,
                rect: {left: 0, top: 0, right: n, bottom: o},
                layer: 1
            } : null
        }, t
    }(Ho), us = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.linkElRef = So(), t.state = {isPopoverOpen: !1}, t.handleClick = function (e) {
                var n = t, r = n.props, o = n.context, i = o.options.moreLinkClick, a = ds(r).start;

                function s(e) {
                    var t = e.eventRange, n = t.def, r = t.instance, i = t.range;
                    return {
                        event: new wr(o, n, r),
                        start: o.dateEnv.toDate(i.start),
                        end: o.dateEnv.toDate(i.end),
                        isStart: e.isStart,
                        isEnd: e.isEnd
                    }
                }

                "function" == typeof i && (i = i({
                    date: a,
                    allDay: Boolean(r.allDayDate),
                    allSegs: r.allSegs.map(s),
                    hiddenSegs: r.hiddenSegs.map(s),
                    jsEvent: e,
                    view: o.viewApi
                })), i && "popover" !== i ? "string" == typeof i && o.calendarApi.zoomTo(a, i) : t.setState({isPopoverOpen: !0})
            }, t.handlePopoverClose = function () {
                t.setState({isPopoverOpen: !1})
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props;
            return yo(To.Consumer, null, (function (n) {
                var r = n.viewApi, o = n.options, i = n.calendarApi, a = o.moreLinkText, s = t.moreCnt, l = ds(t), u = {
                    num: s,
                    shortText: "+" + s,
                    text: "function" == typeof a ? a.call(i, s) : "+" + s + " " + a,
                    view: r
                };
                return yo(Do, null, Boolean(t.moreCnt) && yo(Wo, {
                    elRef: e.linkElRef,
                    hookProps: u,
                    classNames: o.moreLinkClassNames,
                    content: o.moreLinkContent,
                    defaultContent: t.defaultContent || cs,
                    didMount: o.moreLinkDidMount,
                    willUnmount: o.moreLinkWillUnmount
                }, (function (n, r, o, i) {
                    return t.children(n, ["fc-more-link"].concat(r), o, i, e.handleClick)
                })), e.state.isPopoverOpen && yo(ls, {
                    startDate: l.start,
                    endDate: l.end,
                    dateProfile: t.dateProfile,
                    todayRange: t.todayRange,
                    extraDateSpan: t.extraDateSpan,
                    parentEl: e.parentEl,
                    alignmentEl: t.alignmentElRef.current,
                    alignGridTop: t.alignGridTop,
                    onClose: e.handlePopoverClose
                }, t.popoverContent()))
            }))
        }, t.prototype.componentDidMount = function () {
            this.updateParentEl()
        }, t.prototype.componentDidUpdate = function () {
            this.updateParentEl()
        }, t.prototype.updateParentEl = function () {
            this.linkElRef.current && (this.parentEl = Se(this.linkElRef.current, ".fc-view-harness"))
        }, t
    }(Mo);

    function cs(e) {
        return e.text
    }

    function ds(e) {
        if (e.allDayDate) return {start: e.allDayDate, end: $e(e.allDayDate, 1)};
        var t, n = e.hiddenSegs;
        return {start: ps(n), end: (t = n, t.reduce(hs).eventRange.range.end)}
    }

    function ps(e) {
        return e.reduce(fs).eventRange.range.start
    }

    function fs(e, t) {
        return e.eventRange.range.start < t.eventRange.range.start ? e : t
    }

    function hs(e, t) {
        return e.eventRange.range.end > t.eventRange.range.end ? e : t
    }

    var vs = function (e) {
        function t(t, n) {
            void 0 === n && (n = {});
            var o = e.call(this) || this;
            return o.isRendering = !1, o.isRendered = !1, o.currentClassNames = [], o.customContentRenderId = 0, o.handleAction = function (e) {
                switch (e.type) {
                    case"SET_EVENT_DRAG":
                    case"SET_EVENT_RESIZE":
                        o.renderRunner.tryDrain()
                }
            }, o.handleData = function (e) {
                o.currentData = e, o.renderRunner.request(e.calendarOptions.rerenderDelay)
            }, o.handleRenderRequest = function () {
                if (o.isRendering) {
                    o.isRendered = !0;
                    var e = o.currentData;
                    Eo(yo(ua, {options: e.calendarOptions, theme: e.theme, emitter: e.emitter}, (function (t, n, i, a) {
                        return o.setClassNames(t), o.setHeight(n), yo(Vo.Provider, {value: o.customContentRenderId}, yo(aa, r({
                            isHeightAuto: i,
                            forPrint: a
                        }, e)))
                    })), o.el)
                } else o.isRendered && (o.isRendered = !1, Ro(o.el), o.setClassNames([]), o.setHeight(""));
                wo()
            }, o.el = t, o.renderRunner = new Ci(o.handleRenderRequest), new _i({
                optionOverrides: n,
                calendarApi: o,
                onAction: o.handleAction,
                onData: o.handleData
            }), o
        }

        return n(t, e), Object.defineProperty(t.prototype, "view", {
            get: function () {
                return this.currentData.viewApi
            }, enumerable: !1, configurable: !0
        }), t.prototype.render = function () {
            var e = this.isRendering;
            e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize()
        }, t.prototype.destroy = function () {
            this.isRendering && (this.isRendering = !1, this.renderRunner.request())
        }, t.prototype.updateSize = function () {
            e.prototype.updateSize.call(this), wo()
        }, t.prototype.batchRendering = function (e) {
            this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering")
        }, t.prototype.pauseRendering = function () {
            this.renderRunner.pause("pauseRendering")
        }, t.prototype.resumeRendering = function () {
            this.renderRunner.resume("pauseRendering", !0)
        }, t.prototype.resetOptions = function (e, t) {
            this.currentDataManager.resetOptions(e, t)
        }, t.prototype.setClassNames = function (e) {
            if (!Ft(e, this.currentClassNames)) {
                for (var t = this.el.classList, n = 0, r = this.currentClassNames; n < r.length; n++) {
                    var o = r[n];
                    t.remove(o)
                }
                for (var i = 0, a = e; i < a.length; i++) {
                    o = a[i];
                    t.add(o)
                }
                this.currentClassNames = e
            }
        }, t.prototype.setHeight = function (e) {
            Re(this.el, "height", e)
        }, t
    }(Cr);
    Ji.touchMouseIgnoreWait = 500;
    var gs = 0, ms = 0, ys = !1, Es = function () {
        function e(e) {
            var t = this;
            this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function (e) {
                if (!t.shouldIgnoreMouse() && function (e) {
                    return 0 === e.button && !e.ctrlKey
                }(e) && t.tryStart(e)) {
                    var n = t.createEventFromMouse(e, !0);
                    t.emitter.trigger("pointerdown", n), t.initScrollWatch(n), t.shouldIgnoreMove || document.addEventListener("mousemove", t.handleMouseMove), document.addEventListener("mouseup", t.handleMouseUp)
                }
            }, this.handleMouseMove = function (e) {
                var n = t.createEventFromMouse(e);
                t.recordCoords(n), t.emitter.trigger("pointermove", n)
            }, this.handleMouseUp = function (e) {
                document.removeEventListener("mousemove", t.handleMouseMove), document.removeEventListener("mouseup", t.handleMouseUp), t.emitter.trigger("pointerup", t.createEventFromMouse(e)), t.cleanup()
            }, this.handleTouchStart = function (e) {
                if (t.tryStart(e)) {
                    t.isTouchDragging = !0;
                    var n = t.createEventFromTouch(e, !0);
                    t.emitter.trigger("pointerdown", n), t.initScrollWatch(n);
                    var r = e.target;
                    t.shouldIgnoreMove || r.addEventListener("touchmove", t.handleTouchMove), r.addEventListener("touchend", t.handleTouchEnd), r.addEventListener("touchcancel", t.handleTouchEnd), window.addEventListener("scroll", t.handleTouchScroll, !0)
                }
            }, this.handleTouchMove = function (e) {
                var n = t.createEventFromTouch(e);
                t.recordCoords(n), t.emitter.trigger("pointermove", n)
            }, this.handleTouchEnd = function (e) {
                if (t.isDragging) {
                    var n = e.target;
                    n.removeEventListener("touchmove", t.handleTouchMove), n.removeEventListener("touchend", t.handleTouchEnd), n.removeEventListener("touchcancel", t.handleTouchEnd), window.removeEventListener("scroll", t.handleTouchScroll, !0), t.emitter.trigger("pointerup", t.createEventFromTouch(e)), t.cleanup(), t.isTouchDragging = !1, gs += 1, setTimeout((function () {
                        gs -= 1
                    }), Ji.touchMouseIgnoreWait)
                }
            }, this.handleTouchScroll = function () {
                t.wasTouchScroll = !0
            }, this.handleScroll = function (e) {
                if (!t.shouldIgnoreMove) {
                    var n = window.pageXOffset - t.prevScrollX + t.prevPageX,
                        r = window.pageYOffset - t.prevScrollY + t.prevPageY;
                    t.emitter.trigger("pointermove", {
                        origEvent: e,
                        isTouch: t.isTouchDragging,
                        subjectEl: t.subjectEl,
                        pageX: n,
                        pageY: r,
                        deltaX: n - t.origPageX,
                        deltaY: r - t.origPageY
                    })
                }
            }, this.containerEl = e, this.emitter = new co, e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {passive: !0}), 1 === (ms += 1) && window.addEventListener("touchmove", Ss, {passive: !1})
        }

        return e.prototype.destroy = function () {
            this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {passive: !0}), (ms -= 1) || window.removeEventListener("touchmove", Ss, {passive: !1})
        }, e.prototype.tryStart = function (e) {
            var t = this.querySubjectEl(e), n = e.target;
            return !(!t || this.handleSelector && !Se(n, this.handleSelector)) && (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1, !0)
        }, e.prototype.cleanup = function () {
            ys = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch()
        }, e.prototype.querySubjectEl = function (e) {
            return this.selector ? Se(e.target, this.selector) : this.containerEl
        }, e.prototype.shouldIgnoreMouse = function () {
            return gs || this.isTouchDragging
        }, e.prototype.cancelTouchScroll = function () {
            this.isDragging && (ys = !0)
        }, e.prototype.initScrollWatch = function (e) {
            this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0))
        }, e.prototype.recordCoords = function (e) {
            this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset)
        }, e.prototype.destroyScrollWatch = function () {
            this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0)
        }, e.prototype.createEventFromMouse = function (e, t) {
            var n = 0, r = 0;
            return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
                origEvent: e,
                isTouch: !1,
                subjectEl: this.subjectEl,
                pageX: e.pageX,
                pageY: e.pageY,
                deltaX: n,
                deltaY: r
            }
        }, e.prototype.createEventFromTouch = function (e, t) {
            var n, r, o = e.touches, i = 0, a = 0;
            return o && o.length ? (n = o[0].pageX, r = o[0].pageY) : (n = e.pageX, r = e.pageY), t ? (this.origPageX = n, this.origPageY = r) : (i = n - this.origPageX, a = r - this.origPageY), {
                origEvent: e,
                isTouch: !0,
                subjectEl: this.subjectEl,
                pageX: n,
                pageY: r,
                deltaX: i,
                deltaY: a
            }
        }, e
    }();

    function Ss(e) {
        ys && e.preventDefault()
    }

    var Ds = function () {
        function e() {
            this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0
        }

        return e.prototype.start = function (e, t, n) {
            this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition()
        }, e.prototype.handleMove = function (e, t) {
            this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = t - window.pageYOffset - this.origScreenY, this.updateElPosition()
        }, e.prototype.setIsVisible = function (e) {
            e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e)
        }, e.prototype.stop = function (e, t) {
            var n = this, r = function () {
                n.cleanup(), t()
            };
            e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0)
        }, e.prototype.doRevertAnimation = function (e, t) {
            var n = this.mirrorEl, r = this.sourceEl.getBoundingClientRect();
            n.style.transition = "top " + t + "ms,left " + t + "ms", we(n, {
                left: r.left,
                top: r.top
            }), Ie(n, (function () {
                n.style.transition = "", e()
            }))
        }, e.prototype.cleanup = function () {
            this.mirrorEl && (Ee(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null
        }, e.prototype.updateElPosition = function () {
            this.sourceEl && this.isVisible && we(this.getMirrorEl(), {
                left: this.sourceElRect.left + this.deltaX,
                top: this.sourceElRect.top + this.deltaY
            })
        }, e.prototype.getMirrorEl = function () {
            var e = this.sourceElRect, t = this.mirrorEl;
            return t || ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"), t.classList.add("fc-event-dragging"), we(t, {
                position: "fixed",
                zIndex: this.zIndex,
                visibility: "",
                boxSizing: "border-box",
                width: e.right - e.left,
                height: e.bottom - e.top,
                right: "auto",
                bottom: "auto",
                margin: 0
            }), this.parentNode.appendChild(t)), t
        }, e
    }(), bs = function (e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.handleScroll = function () {
                r.scrollTop = r.scrollController.getScrollTop(), r.scrollLeft = r.scrollController.getScrollLeft(), r.handleScrollChange()
            }, r.scrollController = t, r.doesListening = n, r.scrollTop = r.origScrollTop = t.getScrollTop(), r.scrollLeft = r.origScrollLeft = t.getScrollLeft(), r.scrollWidth = t.getScrollWidth(), r.scrollHeight = t.getScrollHeight(), r.clientWidth = t.getClientWidth(), r.clientHeight = t.getClientHeight(), r.clientRect = r.computeClientRect(), r.doesListening && r.getEventTarget().addEventListener("scroll", r.handleScroll), r
        }

        return n(t, e), t.prototype.destroy = function () {
            this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll)
        }, t.prototype.getScrollTop = function () {
            return this.scrollTop
        }, t.prototype.getScrollLeft = function () {
            return this.scrollLeft
        }, t.prototype.setScrollTop = function (e) {
            this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange())
        }, t.prototype.setScrollLeft = function (e) {
            this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange())
        }, t.prototype.getClientWidth = function () {
            return this.clientWidth
        }, t.prototype.getClientHeight = function () {
            return this.clientHeight
        }, t.prototype.getScrollWidth = function () {
            return this.scrollWidth
        }, t.prototype.getScrollHeight = function () {
            return this.scrollHeight
        }, t.prototype.handleScrollChange = function () {
        }, t
    }(fo), Cs = function (e) {
        function t(t, n) {
            return e.call(this, new ho(t), n) || this
        }

        return n(t, e), t.prototype.getEventTarget = function () {
            return this.scrollController.el
        }, t.prototype.computeClientRect = function () {
            return ao(this.scrollController.el)
        }, t
    }(bs), ws = function (e) {
        function t(t) {
            return e.call(this, new vo, t) || this
        }

        return n(t, e), t.prototype.getEventTarget = function () {
            return window
        }, t.prototype.computeClientRect = function () {
            return {
                left: this.scrollLeft,
                right: this.scrollLeft + this.clientWidth,
                top: this.scrollTop,
                bottom: this.scrollTop + this.clientHeight
            }
        }, t.prototype.handleScrollChange = function () {
            this.clientRect = this.computeClientRect()
        }, t
    }(bs), Rs = "function" == typeof performance ? performance.now : Date.now, _s = function () {
        function e() {
            var e = this;
            this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function () {
                if (e.isAnimating) {
                    var t = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);
                    if (t) {
                        var n = Rs();
                        e.handleSide(t, (n - e.msSinceRequest) / 1e3), e.requestAnimation(n)
                    } else e.isAnimating = !1
                }
            }
        }

        return e.prototype.start = function (e, t, n) {
            this.isEnabled && (this.scrollCaches = this.buildCaches(n), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t))
        }, e.prototype.handleMove = function (e, t) {
            if (this.isEnabled) {
                var n = e - window.pageXOffset, r = t - window.pageYOffset,
                    o = null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
                    i = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
                o < 0 ? this.everMovedUp = !0 : o > 0 && (this.everMovedDown = !0), i < 0 ? this.everMovedLeft = !0 : i > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Rs()))
            }
        }, e.prototype.stop = function () {
            if (this.isEnabled) {
                this.isAnimating = !1;
                for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                    t[e].destroy()
                }
                this.scrollCaches = null
            }
        }, e.prototype.requestAnimation = function (e) {
            this.msSinceRequest = e, requestAnimationFrame(this.animate)
        }, e.prototype.handleSide = function (e, t) {
            var n = e.scrollCache, r = this.edgeThreshold, o = r - e.distance,
                i = o * o / (r * r) * this.maxVelocity * t, a = 1;
            switch (e.name) {
                case"left":
                    a = -1;
                case"right":
                    n.setScrollLeft(n.getScrollLeft() + i * a);
                    break;
                case"top":
                    a = -1;
                case"bottom":
                    n.setScrollTop(n.getScrollTop() + i * a)
            }
        }, e.prototype.computeBestEdge = function (e, t) {
            for (var n = this.edgeThreshold, r = null, o = 0, i = this.scrollCaches; o < i.length; o++) {
                var a = i[o], s = a.clientRect, l = e - s.left, u = s.right - e, c = t - s.top, d = s.bottom - t;
                l >= 0 && u >= 0 && c >= 0 && d >= 0 && (c <= n && this.everMovedUp && a.canScrollUp() && (!r || r.distance > c) && (r = {
                    scrollCache: a,
                    name: "top",
                    distance: c
                }), d <= n && this.everMovedDown && a.canScrollDown() && (!r || r.distance > d) && (r = {
                    scrollCache: a,
                    name: "bottom",
                    distance: d
                }), l <= n && this.everMovedLeft && a.canScrollLeft() && (!r || r.distance > l) && (r = {
                    scrollCache: a,
                    name: "left",
                    distance: l
                }), u <= n && this.everMovedRight && a.canScrollRight() && (!r || r.distance > u) && (r = {
                    scrollCache: a,
                    name: "right",
                    distance: u
                }))
            }
            return r
        }, e.prototype.buildCaches = function (e) {
            return this.queryScrollEls(e).map((function (e) {
                return e === window ? new ws(!1) : new Cs(e, !1)
            }))
        }, e.prototype.queryScrollEls = function (e) {
            for (var t = [], n = 0, r = this.scrollQuery; n < r.length; n++) {
                var o = r[n];
                "object" == typeof o ? t.push(o) : t.push.apply(t, Array.prototype.slice.call(Te(e).querySelectorAll(o)))
            }
            return t
        }, e
    }(), Ts = function (e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            r.containerEl = t, r.delay = null, r.minDistance = 0, r.touchScrollAllowed = !0, r.mirrorNeedsRevert = !1, r.isInteracting = !1, r.isDragging = !1, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, r.delayTimeoutId = null, r.onPointerDown = function (e) {
                r.isDragging || (r.isInteracting = !0, r.isDelayEnded = !1, r.isDistanceSurpassed = !1, Ue(document.body), We(document.body), e.isTouch || e.origEvent.preventDefault(), r.emitter.trigger("pointerdown", e), r.isInteracting && !r.pointer.shouldIgnoreMove && (r.mirror.setIsVisible(!1), r.mirror.start(e.subjectEl, e.pageX, e.pageY), r.startDelay(e), r.minDistance || r.handleDistanceSurpassed(e)))
            }, r.onPointerMove = function (e) {
                if (r.isInteracting) {
                    if (r.emitter.trigger("pointermove", e), !r.isDistanceSurpassed) {
                        var t = r.minDistance, n = e.deltaX, o = e.deltaY;
                        n * n + o * o >= t * t && r.handleDistanceSurpassed(e)
                    }
                    r.isDragging && ("scroll" !== e.origEvent.type && (r.mirror.handleMove(e.pageX, e.pageY), r.autoScroller.handleMove(e.pageX, e.pageY)), r.emitter.trigger("dragmove", e))
                }
            }, r.onPointerUp = function (e) {
                r.isInteracting && (r.isInteracting = !1, Le(document.body), Ve(document.body), r.emitter.trigger("pointerup", e), r.isDragging && (r.autoScroller.stop(), r.tryStopDrag(e)), r.delayTimeoutId && (clearTimeout(r.delayTimeoutId), r.delayTimeoutId = null))
            };
            var o = r.pointer = new Es(t);
            return o.emitter.on("pointerdown", r.onPointerDown), o.emitter.on("pointermove", r.onPointerMove), o.emitter.on("pointerup", r.onPointerUp), n && (o.selector = n), r.mirror = new Ds, r.autoScroller = new _s, r
        }

        return n(t, e), t.prototype.destroy = function () {
            this.pointer.destroy(), this.onPointerUp({})
        }, t.prototype.startDelay = function (e) {
            var t = this;
            "number" == typeof this.delay ? this.delayTimeoutId = setTimeout((function () {
                t.delayTimeoutId = null, t.handleDelayEnd(e)
            }), this.delay) : this.handleDelayEnd(e)
        }, t.prototype.handleDelayEnd = function (e) {
            this.isDelayEnded = !0, this.tryStartDrag(e)
        }, t.prototype.handleDistanceSurpassed = function (e) {
            this.isDistanceSurpassed = !0, this.tryStartDrag(e)
        }, t.prototype.tryStartDrag = function (e) {
            this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY, this.containerEl), this.emitter.trigger("dragstart", e), !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()))
        }, t.prototype.tryStopDrag = function (e) {
            this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
        }, t.prototype.stopDrag = function (e) {
            this.isDragging = !1, this.emitter.trigger("dragend", e)
        }, t.prototype.setIgnoreMove = function (e) {
            this.pointer.shouldIgnoreMove = e
        }, t.prototype.setMirrorIsVisible = function (e) {
            this.mirror.setIsVisible(e)
        }, t.prototype.setMirrorNeedsRevert = function (e) {
            this.mirrorNeedsRevert = e
        }, t.prototype.setAutoScrollEnabled = function (e) {
            this.autoScroller.isEnabled = e
        }, t
    }($i), ks = function () {
        function e(e) {
            this.origRect = so(e), this.scrollCaches = lo(e).map((function (e) {
                return new Cs(e, !0)
            }))
        }

        return e.prototype.destroy = function () {
            for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                t[e].destroy()
            }
        }, e.prototype.computeLeft = function () {
            for (var e = this.origRect.left, t = 0, n = this.scrollCaches; t < n.length; t++) {
                var r = n[t];
                e += r.origScrollLeft - r.getScrollLeft()
            }
            return e
        }, e.prototype.computeTop = function () {
            for (var e = this.origRect.top, t = 0, n = this.scrollCaches; t < n.length; t++) {
                var r = n[t];
                e += r.origScrollTop - r.getScrollTop()
            }
            return e
        }, e.prototype.isWithinClipping = function (e, t) {
            for (var n, r, o = {left: e, top: t}, i = 0, a = this.scrollCaches; i < a.length; i++) {
                var s = a[i];
                if (n = s.getEventTarget(), r = void 0, "HTML" !== (r = n.tagName) && "BODY" !== r && !zr(o, s.clientRect)) return !1
            }
            return !0
        }, e
    }();
    var xs = function () {
        function e(e, t) {
            var n = this;
            this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function (e) {
                var t = n.dragging;
                n.initialHit = null, n.movingHit = null, n.finalHit = null, n.prepareHits(), n.processFirstCoord(e), n.initialHit || !n.requireInitial ? (t.setIgnoreMove(!1), n.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0)
            }, this.handleDragStart = function (e) {
                n.emitter.trigger("dragstart", e), n.handleMove(e, !0)
            }, this.handleDragMove = function (e) {
                n.emitter.trigger("dragmove", e), n.handleMove(e)
            }, this.handlePointerUp = function (e) {
                n.releaseHits(), n.emitter.trigger("pointerup", e)
            }, this.handleDragEnd = function (e) {
                n.movingHit && n.emitter.trigger("hitupdate", null, !0, e), n.finalHit = n.movingHit, n.movingHit = null, n.emitter.trigger("dragend", e)
            }, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new co
        }

        return e.prototype.processFirstCoord = function (e) {
            var t, n = {left: e.pageX, top: e.pageY}, r = n, o = e.subjectEl;
            o instanceof HTMLElement && (r = jr(r, t = so(o)));
            var i = this.initialHit = this.queryHitForOffset(r.left, r.top);
            if (i) {
                if (this.useSubjectCenter && t) {
                    var a = Br(t, i.rect);
                    a && (r = Gr(a))
                }
                this.coordAdjust = qr(r, n)
            } else this.coordAdjust = {left: 0, top: 0}
        }, e.prototype.handleMove = function (e, t) {
            var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
            !t && Ms(this.movingHit, n) || (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e))
        }, e.prototype.prepareHits = function () {
            this.offsetTrackers = mt(this.droppableStore, (function (e) {
                return e.component.prepareHits(), new ks(e.el)
            }))
        }, e.prototype.releaseHits = function () {
            var e = this.offsetTrackers;
            for (var t in e) e[t].destroy();
            this.offsetTrackers = {}
        }, e.prototype.queryHitForOffset = function (e, t) {
            var n = this.droppableStore, r = this.offsetTrackers, o = null;
            for (var i in n) {
                var a = n[i].component, s = r[i];
                if (s && s.isWithinClipping(e, t)) {
                    var l = s.computeLeft(), u = s.computeTop(), c = e - l, d = t - u, p = s.origRect,
                        f = p.right - p.left, h = p.bottom - p.top;
                    if (c >= 0 && c < f && d >= 0 && d < h) {
                        var v = a.queryHit(c, d, f, h);
                        v && Bn(v.dateProfile.activeRange, v.dateSpan.range) && (!o || v.layer > o.layer) && (v.componentId = i, v.context = a.context, v.rect.left += l, v.rect.right += l, v.rect.top += u, v.rect.bottom += u, o = v)
                    }
                }
            }
            return o
        }, e
    }();

    function Ms(e, t) {
        return !e && !t || Boolean(e) === Boolean(t) && lr(e.dateSpan, t.dateSpan)
    }

    function Ps(e, t) {
        for (var n, o, i = {}, a = 0, s = t.pluginHooks.datePointTransforms; a < s.length; a++) {
            var l = s[a];
            r(i, l(e, t))
        }
        return r(i, (n = e, {
            date: (o = t.dateEnv).toDate(n.range.start),
            dateStr: o.formatIso(n.range.start, {omitTime: n.allDay}),
            allDay: n.allDay
        })), i
    }

    var Is = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.handlePointerDown = function (e) {
                var t = n.dragging, r = e.origEvent.target;
                t.setIgnoreMove(!n.component.isValidDateDownEl(r))
            }, n.handleDragEnd = function (e) {
                var t = n.component;
                if (!n.dragging.pointer.wasTouchScroll) {
                    var o = n.hitDragging, i = o.initialHit, a = o.finalHit;
                    if (i && a && Ms(i, a)) {
                        var s = t.context, l = r(r({}, Ps(i.dateSpan, s)), {
                            dayEl: i.dayEl,
                            jsEvent: e.origEvent,
                            view: s.viewApi || s.calendarApi.view
                        });
                        s.emitter.trigger("dateClick", l)
                    }
                }
            }, n.dragging = new Ts(t.el), n.dragging.autoScroller.isEnabled = !1;
            var o = n.hitDragging = new xs(n.dragging, Xi(t));
            return o.emitter.on("pointerdown", n.handlePointerDown), o.emitter.on("dragend", n.handleDragEnd), n
        }

        return n(t, e), t.prototype.destroy = function () {
            this.dragging.destroy()
        }, t
    }(Yi), Ns = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.dragSelection = null, n.handlePointerDown = function (e) {
                var t = n, r = t.component, o = t.dragging,
                    i = r.context.options.selectable && r.isValidDateDownEl(e.origEvent.target);
                o.setIgnoreMove(!i), o.delay = e.isTouch ? function (e) {
                    var t = e.context.options, n = t.selectLongPressDelay;
                    null == n && (n = t.longPressDelay);
                    return n
                }(r) : null
            }, n.handleDragStart = function (e) {
                n.component.context.calendarApi.unselect(e)
            }, n.handleHitUpdate = function (e, t) {
                var o = n.component.context, i = null, a = !1;
                if (e) {
                    var s = n.hitDragging.initialHit;
                    e.componentId === s.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(s, e) || (i = function (e, t, n) {
                        var o = e.dateSpan, i = t.dateSpan,
                            a = [o.range.start, o.range.end, i.range.start, i.range.end];
                        a.sort(qe);
                        for (var s = {}, l = 0, u = n; l < u.length; l++) {
                            var c = (0, u[l])(e, t);
                            if (!1 === c) return null;
                            c && r(s, c)
                        }
                        return s.range = {start: a[0], end: a[3]}, s.allDay = o.allDay, s
                    }(s, e, o.pluginHooks.dateSelectionTransformers)), i && wa(i, e.dateProfile, o) || (a = !0, i = null)
                }
                i ? o.dispatch({
                    type: "SELECT_DATES",
                    selection: i
                }) : t || o.dispatch({type: "UNSELECT_DATES"}), a ? Oe() : Ae(), t || (n.dragSelection = i)
            }, n.handlePointerUp = function (e) {
                n.dragSelection && (pr(n.dragSelection, e, n.component.context), n.dragSelection = null)
            };
            var o = t.component.context.options, i = n.dragging = new Ts(t.el);
            i.touchScrollAllowed = !1, i.minDistance = o.selectMinDistance || 0, i.autoScroller.isEnabled = o.dragScroll;
            var a = n.hitDragging = new xs(n.dragging, Xi(t));
            return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("dragstart", n.handleDragStart), a.emitter.on("hitupdate", n.handleHitUpdate), a.emitter.on("pointerup", n.handlePointerUp), n
        }

        return n(t, e), t.prototype.destroy = function () {
            this.dragging.destroy()
        }, t
    }(Yi);
    var Hs = function (e) {
        function t(n) {
            var o = e.call(this, n) || this;
            o.subjectEl = null, o.subjectSeg = null, o.isDragging = !1, o.eventRange = null, o.relevantEvents = null, o.receivingContext = null, o.validMutation = null, o.mutatedRelevantEvents = null, o.handlePointerDown = function (e) {
                var t = e.origEvent.target, n = o, r = n.component, i = n.dragging, a = i.mirror, s = r.context.options,
                    l = r.context;
                o.subjectEl = e.subjectEl;
                var u = o.subjectSeg = Zn(e.subjectEl), c = (o.eventRange = u.eventRange).instance.instanceId;
                o.relevantEvents = mn(l.getCurrentData().eventStore, c), i.minDistance = e.isTouch ? 0 : s.eventDragMinDistance, i.delay = e.isTouch && c !== r.props.eventSelection ? function (e) {
                    var t = e.context.options, n = t.eventLongPressDelay;
                    null == n && (n = t.longPressDelay);
                    return n
                }(r) : null, s.fixedMirrorParent ? a.parentNode = s.fixedMirrorParent : a.parentNode = Se(t, ".fc"), a.revertDuration = s.dragRevertDuration;
                var d = r.isValidSegDownEl(t) && !Se(t, ".fc-event-resizer");
                i.setIgnoreMove(!d), o.isDragging = d && e.subjectEl.classList.contains("fc-event-draggable")
            }, o.handleDragStart = function (e) {
                var t = o.component.context, n = o.eventRange, r = n.instance.instanceId;
                e.isTouch ? r !== o.component.props.eventSelection && t.dispatch({
                    type: "SELECT_EVENT",
                    eventInstanceId: r
                }) : t.dispatch({type: "UNSELECT_EVENT"}), o.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
                    el: o.subjectEl,
                    event: new wr(t, n.def, n.instance),
                    jsEvent: e.origEvent,
                    view: t.viewApi
                }))
            }, o.handleHitUpdate = function (e, t) {
                if (o.isDragging) {
                    var n = o.relevantEvents, r = o.hitDragging.initialHit, i = o.component.context, a = null, s = null,
                        l = null, u = !1,
                        c = {affectedEvents: n, mutatedEvents: {defs: {}, instances: {}}, isEvent: !0};
                    if (e) {
                        var d = (a = e.context).options;
                        i === a || d.editable && d.droppable ? (s = function (e, t, n) {
                            var r = e.dateSpan, o = t.dateSpan, i = r.range.start, a = o.range.start, s = {};
                            r.allDay !== o.allDay && (s.allDay = o.allDay, s.hasEnd = t.context.options.allDayMaintainDuration, o.allDay && (i = ot(i)));
                            var l = Un(i, a, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
                            l.milliseconds && (s.allDay = !1);
                            for (var u = {datesDelta: l, standardProps: s}, c = 0, d = n; c < d.length; c++) {
                                (0, d[c])(u, e, t)
                            }
                            return u
                        }(r, e, a.getCurrentData().pluginHooks.eventDragMutationMassagers)) && (l = vr(n, a.getCurrentData().eventUiBases, s, a), c.mutatedEvents = l, Ca(c, e.dateProfile, a) || (u = !0, s = null, l = null, c.mutatedEvents = {
                            defs: {},
                            instances: {}
                        })) : a = null
                    }
                    o.displayDrag(a, c), u ? Oe() : Ae(), t || (i === a && Ms(r, e) && (s = null), o.dragging.setMirrorNeedsRevert(!s), o.dragging.setMirrorIsVisible(!e || !Te(o.subjectEl).querySelector(".fc-event-mirror")), o.receivingContext = a, o.validMutation = s, o.mutatedRelevantEvents = l)
                }
            }, o.handlePointerUp = function () {
                o.isDragging || o.cleanup()
            }, o.handleDragEnd = function (e) {
                if (o.isDragging) {
                    var t = o.component.context, n = t.viewApi, i = o, a = i.receivingContext, s = i.validMutation,
                        l = o.eventRange.def, u = o.eventRange.instance, c = new wr(t, l, u), d = o.relevantEvents,
                        p = o.mutatedRelevantEvents, f = o.hitDragging.finalHit;
                    if (o.clearDrag(), t.emitter.trigger("eventDragStop", {
                        el: o.subjectEl,
                        event: c,
                        jsEvent: e.origEvent,
                        view: n
                    }), s) {
                        if (a === t) {
                            var h = new wr(t, p.defs[l.defId], u ? p.instances[u.instanceId] : null);
                            t.dispatch({type: "MERGE_EVENTS", eventStore: p});
                            for (var v = {
                                oldEvent: c, event: h, relatedEvents: _r(p, t, u), revert: function () {
                                    t.dispatch({type: "MERGE_EVENTS", eventStore: d})
                                }
                            }, g = {}, m = 0, y = t.getCurrentData().pluginHooks.eventDropTransformers; m < y.length; m++) {
                                var E = y[m];
                                r(g, E(s, t))
                            }
                            t.emitter.trigger("eventDrop", r(r(r({}, v), g), {
                                el: e.subjectEl,
                                delta: s.datesDelta,
                                jsEvent: e.origEvent,
                                view: n
                            })), t.emitter.trigger("eventChange", v)
                        } else if (a) {
                            var S = {
                                event: c, relatedEvents: _r(d, t, u), revert: function () {
                                    t.dispatch({type: "MERGE_EVENTS", eventStore: d})
                                }
                            };
                            t.emitter.trigger("eventLeave", r(r({}, S), {
                                draggedEl: e.subjectEl,
                                view: n
                            })), t.dispatch({
                                type: "REMOVE_EVENTS",
                                eventStore: d
                            }), t.emitter.trigger("eventRemove", S);
                            var D = p.defs[l.defId], b = p.instances[u.instanceId], C = new wr(a, D, b);
                            a.dispatch({type: "MERGE_EVENTS", eventStore: p});
                            var w = {
                                event: C, relatedEvents: _r(p, a, b), revert: function () {
                                    a.dispatch({type: "REMOVE_EVENTS", eventStore: p})
                                }
                            };
                            a.emitter.trigger("eventAdd", w), e.isTouch && a.dispatch({
                                type: "SELECT_EVENT",
                                eventInstanceId: u.instanceId
                            }), a.emitter.trigger("drop", r(r({}, Ps(f.dateSpan, a)), {
                                draggedEl: e.subjectEl,
                                jsEvent: e.origEvent,
                                view: f.context.viewApi
                            })), a.emitter.trigger("eventReceive", r(r({}, w), {
                                draggedEl: e.subjectEl,
                                view: f.context.viewApi
                            }))
                        }
                    } else t.emitter.trigger("_noEventDrop")
                }
                o.cleanup()
            };
            var i = o.component.context.options, a = o.dragging = new Ts(n.el);
            a.pointer.selector = t.SELECTOR, a.touchScrollAllowed = !1, a.autoScroller.isEnabled = i.dragScroll;
            var s = o.hitDragging = new xs(o.dragging, Ki);
            return s.useSubjectCenter = n.useEventCenter, s.emitter.on("pointerdown", o.handlePointerDown), s.emitter.on("dragstart", o.handleDragStart), s.emitter.on("hitupdate", o.handleHitUpdate), s.emitter.on("pointerup", o.handlePointerUp), s.emitter.on("dragend", o.handleDragEnd), o
        }

        return n(t, e), t.prototype.destroy = function () {
            this.dragging.destroy()
        }, t.prototype.displayDrag = function (e, t) {
            var n = this.component.context, r = this.receivingContext;
            r && r !== e && (r === n ? r.dispatch({
                type: "SET_EVENT_DRAG",
                state: {affectedEvents: t.affectedEvents, mutatedEvents: {defs: {}, instances: {}}, isEvent: !0}
            }) : r.dispatch({type: "UNSET_EVENT_DRAG"})), e && e.dispatch({type: "SET_EVENT_DRAG", state: t})
        }, t.prototype.clearDrag = function () {
            var e = this.component.context, t = this.receivingContext;
            t && t.dispatch({type: "UNSET_EVENT_DRAG"}), e !== t && e.dispatch({type: "UNSET_EVENT_DRAG"})
        }, t.prototype.cleanup = function () {
            this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null
        }, t.SELECTOR = ".fc-event-draggable, .fc-event-resizable", t
    }(Yi);
    var Os = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.draggingSegEl = null, n.draggingSeg = null, n.eventRange = null, n.relevantEvents = null, n.validMutation = null, n.mutatedRelevantEvents = null, n.handlePointerDown = function (e) {
                var t = n.component, r = Zn(n.querySegEl(e)), o = n.eventRange = r.eventRange;
                n.dragging.minDistance = t.context.options.eventDragMinDistance, n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && n.component.props.eventSelection !== o.instance.instanceId)
            }, n.handleDragStart = function (e) {
                var t = n.component.context, r = n.eventRange;
                n.relevantEvents = mn(t.getCurrentData().eventStore, n.eventRange.instance.instanceId);
                var o = n.querySegEl(e);
                n.draggingSegEl = o, n.draggingSeg = Zn(o), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
                    el: o,
                    event: new wr(t, r.def, r.instance),
                    jsEvent: e.origEvent,
                    view: t.viewApi
                })
            }, n.handleHitUpdate = function (e, t, r) {
                var o = n.component.context, i = n.relevantEvents, a = n.hitDragging.initialHit,
                    s = n.eventRange.instance, l = null, u = null, c = !1,
                    d = {affectedEvents: i, mutatedEvents: {defs: {}, instances: {}}, isEvent: !0};
                e && (e.componentId === a.componentId && n.isHitComboAllowed && !n.isHitComboAllowed(a, e) || (l = function (e, t, n, r) {
                    var o = e.context.dateEnv, i = e.dateSpan.range.start, a = t.dateSpan.range.start,
                        s = Un(i, a, o, e.largeUnit);
                    if (n) {
                        if (o.add(r.start, s) < r.end) return {startDelta: s}
                    } else if (o.add(r.end, s) > r.start) return {endDelta: s};
                    return null
                }(a, e, r.subjectEl.classList.contains("fc-event-resizer-start"), s.range)));
                l && (u = vr(i, o.getCurrentData().eventUiBases, l, o), d.mutatedEvents = u, Ca(d, e.dateProfile, o) || (c = !0, l = null, u = null, d.mutatedEvents = null)), u ? o.dispatch({
                    type: "SET_EVENT_RESIZE",
                    state: d
                }) : o.dispatch({type: "UNSET_EVENT_RESIZE"}), c ? Oe() : Ae(), t || (l && Ms(a, e) && (l = null), n.validMutation = l, n.mutatedRelevantEvents = u)
            }, n.handleDragEnd = function (e) {
                var t = n.component.context, o = n.eventRange.def, i = n.eventRange.instance, a = new wr(t, o, i),
                    s = n.relevantEvents, l = n.mutatedRelevantEvents;
                if (t.emitter.trigger("eventResizeStop", {
                    el: n.draggingSegEl,
                    event: a,
                    jsEvent: e.origEvent,
                    view: t.viewApi
                }), n.validMutation) {
                    var u = new wr(t, l.defs[o.defId], i ? l.instances[i.instanceId] : null);
                    t.dispatch({type: "MERGE_EVENTS", eventStore: l});
                    var c = {
                        oldEvent: a, event: u, relatedEvents: _r(l, t, i), revert: function () {
                            t.dispatch({type: "MERGE_EVENTS", eventStore: s})
                        }
                    };
                    t.emitter.trigger("eventResize", r(r({}, c), {
                        el: n.draggingSegEl,
                        startDelta: n.validMutation.startDelta || xt(0),
                        endDelta: n.validMutation.endDelta || xt(0),
                        jsEvent: e.origEvent,
                        view: t.viewApi
                    })), t.emitter.trigger("eventChange", c)
                } else t.emitter.trigger("_noEventResize");
                n.draggingSeg = null, n.relevantEvents = null, n.validMutation = null
            };
            var o = t.component, i = n.dragging = new Ts(t.el);
            i.pointer.selector = ".fc-event-resizer", i.touchScrollAllowed = !1, i.autoScroller.isEnabled = o.context.options.dragScroll;
            var a = n.hitDragging = new xs(n.dragging, Xi(t));
            return a.emitter.on("pointerdown", n.handlePointerDown), a.emitter.on("dragstart", n.handleDragStart), a.emitter.on("hitupdate", n.handleHitUpdate), a.emitter.on("dragend", n.handleDragEnd), n
        }

        return n(t, e), t.prototype.destroy = function () {
            this.dragging.destroy()
        }, t.prototype.querySegEl = function (e) {
            return Se(e.subjectEl, ".fc-event")
        }, t
    }(Yi);
    var As = function () {
        function e(e) {
            var t = this;
            this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function (e) {
                e.jsEvent && (t.isRecentPointerDateSelect = !0)
            }, this.onDocumentPointerDown = function (e) {
                var n = t.context.options.unselectCancel, r = _e(e.origEvent);
                t.matchesCancel = !!Se(r, n), t.matchesEvent = !!Se(r, Hs.SELECTOR)
            }, this.onDocumentPointerUp = function (e) {
                var n = t.context, r = t.documentPointer, o = n.getCurrentData();
                if (!r.wasTouchScroll) {
                    if (o.dateSelection && !t.isRecentPointerDateSelect) {
                        var i = n.options.unselectAuto;
                        !i || i && t.matchesCancel || n.calendarApi.unselect(e)
                    }
                    o.eventSelection && !t.matchesEvent && n.dispatch({type: "UNSELECT_EVENT"})
                }
                t.isRecentPointerDateSelect = !1
            };
            var n = this.documentPointer = new Es(document);
            n.shouldIgnoreMove = !0, n.shouldWatchScroll = !1, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect)
        }

        return e.prototype.destroy = function () {
            this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy()
        }, e
    }(), Us = {fixedMirrorParent: hn}, Ls = {
        dateClick: hn,
        eventDragStart: hn,
        eventDragStop: hn,
        eventDrop: hn,
        eventResizeStart: hn,
        eventResizeStop: hn,
        eventResize: hn,
        drop: hn,
        eventReceive: hn,
        eventLeave: hn
    }, Ws = function () {
        function e(e, t) {
            var n = this;
            this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = function (e) {
                n.dragMeta = n.buildDragMeta(e.subjectEl)
            }, this.handleHitUpdate = function (e, t, o) {
                var i = n.hitDragging.dragging, a = null, s = null, l = !1, u = {
                    affectedEvents: {defs: {}, instances: {}},
                    mutatedEvents: {defs: {}, instances: {}},
                    isEvent: n.dragMeta.create
                };
                e && (a = e.context, n.canDropElOnCalendar(o.subjectEl, a) && (s = function (e, t, n) {
                    for (var o = r({}, t.leftoverProps), i = 0, a = n.pluginHooks.externalDefTransforms; i < a.length; i++) {
                        var s = a[i];
                        r(o, s(e, t))
                    }
                    var l = Pn(o, n), u = l.refined, c = l.extra,
                        d = Nn(u, c, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n),
                        p = e.range.start;
                    e.allDay && t.startTime && (p = n.dateEnv.add(p, t.startTime));
                    var f = t.duration ? n.dateEnv.add(p, t.duration) : hr(e.allDay, p, n),
                        h = ft(d.defId, {start: p, end: f});
                    return {def: d, instance: h}
                }(e.dateSpan, n.dragMeta, a), u.mutatedEvents = gn(s), (l = !Ca(u, e.dateProfile, a)) && (u.mutatedEvents = {
                    defs: {},
                    instances: {}
                }, s = null))), n.displayDrag(a, u), i.setMirrorIsVisible(t || !s || !document.querySelector(".fc-event-mirror")), l ? Oe() : Ae(), t || (i.setMirrorNeedsRevert(!s), n.receivingContext = a, n.droppableEvent = s)
            }, this.handleDragEnd = function (e) {
                var t = n, o = t.receivingContext, i = t.droppableEvent;
                if (n.clearDrag(), o && i) {
                    var a = n.hitDragging.finalHit, s = a.context.viewApi, l = n.dragMeta;
                    if (o.emitter.trigger("drop", r(r({}, Ps(a.dateSpan, o)), {
                        draggedEl: e.subjectEl,
                        jsEvent: e.origEvent,
                        view: s
                    })), l.create) {
                        var u = gn(i);
                        o.dispatch({
                            type: "MERGE_EVENTS",
                            eventStore: u
                        }), e.isTouch && o.dispatch({
                            type: "SELECT_EVENT",
                            eventInstanceId: i.instance.instanceId
                        }), o.emitter.trigger("eventReceive", {
                            event: new wr(o, i.def, i.instance),
                            relatedEvents: [],
                            revert: function () {
                                o.dispatch({type: "REMOVE_EVENTS", eventStore: u})
                            },
                            draggedEl: e.subjectEl,
                            view: s
                        })
                    }
                }
                n.receivingContext = null, n.droppableEvent = null
            };
            var o = this.hitDragging = new xs(e, Ki);
            o.requireInitial = !1, o.emitter.on("dragstart", this.handleDragStart), o.emitter.on("hitupdate", this.handleHitUpdate), o.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = t
        }

        return e.prototype.buildDragMeta = function (e) {
            return "object" == typeof this.suppliedDragMeta ? ea(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? ea(this.suppliedDragMeta(e)) : ea((t = function (e, t) {
                var n = Ji.dataAttrPrefix, r = (n ? n + "-" : "") + t;
                return e.getAttribute("data-" + r) || ""
            }(e, "event")) ? JSON.parse(t) : {create: !1});
            var t
        }, e.prototype.displayDrag = function (e, t) {
            var n = this.receivingContext;
            n && n !== e && n.dispatch({type: "UNSET_EVENT_DRAG"}), e && e.dispatch({type: "SET_EVENT_DRAG", state: t})
        }, e.prototype.clearDrag = function () {
            this.receivingContext && this.receivingContext.dispatch({type: "UNSET_EVENT_DRAG"})
        }, e.prototype.canDropElOnCalendar = function (e, t) {
            var n = t.options.dropAccept;
            return "function" == typeof n ? n.call(t.calendarApi, e) : "string" != typeof n || !n || Boolean(De(e, n))
        }, e
    }();
    Ji.dataAttrPrefix = "";
    var Vs = function () {
        function e(e, t) {
            var n = this;
            void 0 === t && (t = {}), this.handlePointerDown = function (e) {
                var t = n.dragging, r = n.settings, o = r.minDistance, i = r.longPressDelay;
                t.minDistance = null != o ? o : e.isTouch ? 0 : an.eventDragMinDistance, t.delay = e.isTouch ? null != i ? i : an.longPressDelay : 0
            }, this.handleDragStart = function (e) {
                e.isTouch && n.dragging.delay && e.subjectEl.classList.contains("fc-event") && n.dragging.mirror.getMirrorEl().classList.add("fc-event-selected")
            }, this.settings = t;
            var r = this.dragging = new Ts(e);
            r.touchScrollAllowed = !1, null != t.itemSelector && (r.pointer.selector = t.itemSelector), null != t.appendTo && (r.mirror.parentNode = t.appendTo), r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragstart", this.handleDragStart), new Ws(r, t.eventData)
        }

        return e.prototype.destroy = function () {
            this.dragging.destroy()
        }, e
    }(), Fs = function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.shouldIgnoreMove = !1, n.mirrorSelector = "", n.currentMirrorEl = null, n.handlePointerDown = function (e) {
                n.emitter.trigger("pointerdown", e), n.shouldIgnoreMove || n.emitter.trigger("dragstart", e)
            }, n.handlePointerMove = function (e) {
                n.shouldIgnoreMove || n.emitter.trigger("dragmove", e)
            }, n.handlePointerUp = function (e) {
                n.emitter.trigger("pointerup", e), n.shouldIgnoreMove || n.emitter.trigger("dragend", e)
            };
            var r = n.pointer = new Es(t);
            return r.emitter.on("pointerdown", n.handlePointerDown), r.emitter.on("pointermove", n.handlePointerMove), r.emitter.on("pointerup", n.handlePointerUp), n
        }

        return n(t, e), t.prototype.destroy = function () {
            this.pointer.destroy()
        }, t.prototype.setIgnoreMove = function (e) {
            this.shouldIgnoreMove = e
        }, t.prototype.setMirrorIsVisible = function (e) {
            if (e) this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null); else {
                var t = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
                t && (this.currentMirrorEl = t, t.style.visibility = "hidden")
            }
        }, t
    }($i), zs = function () {
        function e(e, t) {
            var n = document;
            e === document || e instanceof Element ? (n = e, t = t || {}) : t = e || {};
            var r = this.dragging = new Fs(n);
            "string" == typeof t.itemSelector ? r.pointer.selector = t.itemSelector : n === document && (r.pointer.selector = "[data-event]"), "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector), new Ws(r, t.eventData)
        }

        return e.prototype.destroy = function () {
            this.dragging.destroy()
        }, e
    }(), Bs = Oo({
        componentInteractions: [Is, Ns, Hs, Os],
        calendarInteractions: [As],
        elementDraggingImpl: Ts,
        optionRefiners: Us,
        listenerRefiners: Ls
    }), js = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.headerElRef = So(), t
        }

        return n(t, e), t.prototype.renderSimpleLayout = function (e, t) {
            var n = this.props, r = this.context, o = [], i = Ga(r.options);
            return e && o.push({
                type: "header",
                key: "header",
                isSticky: i,
                chunk: {elRef: this.headerElRef, tableClassName: "fc-col-header", rowContent: e}
            }), o.push({
                type: "body",
                key: "body",
                liquid: !0,
                chunk: {content: t}
            }), yo(Yo, {viewSpec: r.viewSpec}, (function (e, t) {
                return yo("div", {
                    ref: e,
                    className: ["fc-daygrid"].concat(t).join(" ")
                }, yo(Ya, {
                    liquid: !n.isHeightAuto && !n.forPrint,
                    collapsibleWidth: n.forPrint,
                    cols: [],
                    sections: o
                }))
            }))
        }, t.prototype.renderHScrollLayout = function (e, t, n, r) {
            var o = this.context.pluginHooks.scrollGridImpl;
            if (!o) throw new Error("No ScrollGrid implementation");
            var i = this.props, a = this.context, s = !i.forPrint && Ga(a.options), l = !i.forPrint && qa(a.options),
                u = [];
            return e && u.push({
                type: "header",
                key: "header",
                isSticky: s,
                chunks: [{key: "main", elRef: this.headerElRef, tableClassName: "fc-col-header", rowContent: e}]
            }), u.push({
                type: "body",
                key: "body",
                liquid: !0,
                chunks: [{key: "main", content: t}]
            }), l && u.push({
                type: "footer",
                key: "footer",
                isSticky: !0,
                chunks: [{key: "main", content: ja}]
            }), yo(Yo, {viewSpec: a.viewSpec}, (function (e, t) {
                return yo("div", {
                    ref: e,
                    className: ["fc-daygrid"].concat(t).join(" ")
                }, yo(o, {
                    liquid: !i.isHeightAuto && !i.forPrint,
                    collapsibleWidth: i.forPrint,
                    colGroups: [{cols: [{span: n, minWidth: r}]}],
                    sections: u
                }))
            }))
        }, t
    }(Ho);

    function Gs(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.row].push(a)
        }
        return n
    }

    function qs(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.firstCol].push(a)
        }
        return n
    }

    function Ys(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) n[a] = {affectedInstances: e.affectedInstances, isEvent: e.isEvent, segs: []};
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.row].segs.push(i)
            }
        } else for (var a = 0; a < t; a += 1) n[a] = null;
        return n
    }

    var Zs = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context.options.navLinks ? {"data-navlink": Qr(e.date), tabIndex: 0} : {};
            return yo(Qa, {
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                showDayNumber: e.showDayNumber,
                extraHookProps: e.extraHookProps,
                defaultContent: Xs
            }, (function (n, o) {
                return (o || e.forceDayTop) && yo("div", {
                    className: "fc-daygrid-day-top",
                    ref: n
                }, yo("a", r({className: "fc-daygrid-day-number"}, t), o || yo(Do, null, " ")))
            }))
        }, t
    }(Mo);

    function Xs(e) {
        return e.dayNumberText
    }

    var Ks = rn({hour: "numeric", minute: "2-digit", omitZeroMinute: !0, meridiem: "narrow"});

    function $s(e) {
        var t = e.eventRange.ui.display;
        return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd
    }

    var Js = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props;
            return yo(Xa, r({}, e, {
                extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
                defaultTimeFormat: Ks,
                defaultDisplayEventEnd: e.defaultDisplayEventEnd,
                disableResizing: !e.seg.eventRange.def.allDay
            }))
        }, t
    }(Mo), Qs = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.options.eventTimeFormat || Ks,
                o = nr(e.seg, n, t, !0, e.defaultDisplayEventEnd);
            return yo(Za, {
                seg: e.seg,
                timeText: o,
                defaultContent: el,
                isDragging: e.isDragging,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: e.isSelected,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday
            }, (function (t, n, o, i) {
                return yo("a", r({
                    className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(n).join(" "),
                    ref: t
                }, (a = e.seg, (s = a.eventRange.def.url) ? {href: s} : {})), i);
                var a, s
            }))
        }, t
    }(Mo);

    function el(e) {
        return yo(Do, null, yo("div", {
            className: "fc-daygrid-event-dot",
            style: {borderColor: e.borderColor || e.backgroundColor}
        }), e.timeText && yo("div", {className: "fc-event-time"}, e.timeText), yo("div", {className: "fc-event-title"}, e.event.title || yo(Do, null, " ")))
    }

    var tl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.compileSegs = zt(nl), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.compileSegs(e.singlePlacements), n = t.allSegs, o = t.invisibleSegs;
            return yo(us, {
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                allDayDate: e.allDayDate,
                moreCnt: e.moreCnt,
                allSegs: n,
                hiddenSegs: o,
                alignmentElRef: e.alignmentElRef,
                alignGridTop: e.alignGridTop,
                extraDateSpan: e.extraDateSpan,
                popoverContent: function () {
                    var t = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
                    return yo(Do, null, n.map((function (n) {
                        var o = n.eventRange.instance.instanceId;
                        return yo("div", {
                            className: "fc-daygrid-event-harness",
                            key: o,
                            style: {visibility: t[o] ? "hidden" : ""}
                        }, $s(n) ? yo(Qs, r({
                            seg: n,
                            isDragging: !1,
                            isSelected: o === e.eventSelection,
                            defaultDisplayEventEnd: !1
                        }, rr(n, e.todayRange))) : yo(Js, r({
                            seg: n,
                            isDragging: !1,
                            isResizing: !1,
                            isDateSelecting: !1,
                            isSelected: o === e.eventSelection,
                            defaultDisplayEventEnd: !1
                        }, rr(n, e.todayRange))))
                    })))
                }
            }, (function (e, t, n, r, o) {
                return yo("a", {ref: e, className: ["fc-daygrid-more-link"].concat(t).join(" "), onClick: o}, r)
            }))
        }, t
    }(Mo);

    function nl(e) {
        for (var t = [], n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            t.push(i.seg), i.isVisible || n.push(i.seg)
        }
        return {allSegs: t, invisibleSegs: n}
    }

    var rl = rn({week: "narrow"}), ol = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = So(), t.handleRootEl = function (e) {
                No(t.rootElRef, e), No(t.props.elRef, e)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = e.props, n = e.context, o = e.rootElRef, i = n.options, a = t.date, s = t.dateProfile,
                l = i.navLinks ? {"data-navlink": Qr(a, "week"), tabIndex: 0} : {};
            return yo(ts, {
                date: a,
                dateProfile: s,
                todayRange: t.todayRange,
                showDayNumber: t.showDayNumber,
                extraHookProps: t.extraHookProps,
                elRef: this.handleRootEl
            }, (function (e, n, i, u) {
                return yo("td", r({
                    ref: e,
                    className: ["fc-daygrid-day"].concat(n, t.extraClassNames || []).join(" ")
                }, i, t.extraDataAttrs), yo("div", {
                    className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                    ref: t.innerElRef
                }, t.showWeekNumber && yo(is, {date: a, defaultFormat: rl}, (function (e, t, n, o) {
                    return yo("a", r({ref: e, className: ["fc-daygrid-week-number"].concat(t).join(" ")}, l), o)
                })), !u && yo(Zs, {
                    date: a,
                    dateProfile: s,
                    showDayNumber: t.showDayNumber,
                    forceDayTop: t.forceDayTop,
                    todayRange: t.todayRange,
                    extraHookProps: t.extraHookProps
                }), yo("div", {
                    className: "fc-daygrid-day-events",
                    ref: t.fgContentElRef
                }, t.fgContent, yo("div", {
                    className: "fc-daygrid-day-bottom",
                    style: {marginTop: t.moreMarginTop}
                }, yo(tl, {
                    allDayDate: a,
                    singlePlacements: t.singlePlacements,
                    moreCnt: t.moreCnt,
                    alignmentElRef: o,
                    alignGridTop: !t.showDayNumber,
                    extraDateSpan: t.extraDateSpan,
                    dateProfile: t.dateProfile,
                    eventSelection: t.eventSelection,
                    eventDrag: t.eventDrag,
                    eventResize: t.eventResize,
                    todayRange: t.todayRange
                }))), yo("div", {className: "fc-daygrid-day-bg"}, t.bgContent)))
            }))
        }, t
    }(Ho);

    function il(e, t, n, r, o, i, a) {
        var s = new sl;
        s.allowReslicing = !0, s.strictOrder = r, !0 === t || !0 === n ? (s.maxCoord = i, s.hiddenConsumes = !0) : "number" == typeof t ? s.maxStackCnt = t : "number" == typeof n && (s.maxStackCnt = n, s.hiddenConsumes = !0);
        for (var l = [], u = [], c = 0; c < e.length; c += 1) {
            var d = o[(R = e[c]).eventRange.instance.instanceId];
            null != d ? l.push({index: c, thickness: d, span: {start: R.firstCol, end: R.lastCol + 1}}) : u.push(R)
        }
        for (var p = s.addSegs(l), f = function (e, t, n) {
            for (var r = function (e, t) {
                for (var n = [], r = 0; r < t; r += 1) n.push([]);
                for (var o = 0, i = e; o < i.length; o++) {
                    var a = i[o];
                    for (r = a.span.start; r < a.span.end; r += 1) n[r].push(a)
                }
                return n
            }(e, n.length), o = [], i = [], a = [], s = 0; s < n.length; s += 1) {
                for (var l = r[s], u = [], c = 0, d = 0, p = 0, f = l; p < f.length; p++) {
                    var h = t[(y = f[p]).index];
                    u.push({
                        seg: al(h, s, s + 1, n),
                        isVisible: !0,
                        isAbsolute: !1,
                        absoluteTop: y.levelCoord,
                        marginTop: y.levelCoord - c
                    }), c = y.levelCoord + y.thickness
                }
                var v = [];
                c = 0, d = 0;
                for (var g = 0, m = l; g < m.length; g++) {
                    h = t[(y = m[g]).index];
                    var y, E = y.span.end - y.span.start > 1, S = y.span.start === s;
                    d += y.levelCoord - c, c = y.levelCoord + y.thickness, E ? (d += y.thickness, S && v.push({
                        seg: al(h, y.span.start, y.span.end, n),
                        isVisible: !0,
                        isAbsolute: !0,
                        absoluteTop: y.levelCoord,
                        marginTop: 0
                    })) : S && (v.push({
                        seg: al(h, y.span.start, y.span.end, n),
                        isVisible: !0,
                        isAbsolute: !1,
                        absoluteTop: y.levelCoord,
                        marginTop: d
                    }), d = 0)
                }
                o.push(u), i.push(v), a.push(d)
            }
            return {singleColPlacements: o, multiColPlacements: i, leftoverMargins: a}
        }(s.toRects(), e, a), h = f.singleColPlacements, v = f.multiColPlacements, g = f.leftoverMargins, m = [], y = [], E = 0, S = u; E < S.length; E++) {
            v[(R = S[E]).firstCol].push({seg: R, isVisible: !1, isAbsolute: !0, absoluteTop: 0, marginTop: 0});
            for (var D = R.firstCol; D <= R.lastCol; D += 1) h[D].push({
                seg: al(R, D, D + 1, a),
                isVisible: !1,
                isAbsolute: !1,
                absoluteTop: 0,
                marginTop: 0
            })
        }
        for (D = 0; D < a.length; D += 1) m.push(0);
        for (var b = 0, C = p; b < C.length; b++) {
            var w = C[b], R = e[w.index], _ = w.span;
            v[_.start].push({
                seg: al(R, _.start, _.end, a),
                isVisible: !1,
                isAbsolute: !0,
                absoluteTop: 0,
                marginTop: 0
            });
            for (D = _.start; D < _.end; D += 1) m[D] += 1, h[D].push({
                seg: al(R, D, D + 1, a),
                isVisible: !1,
                isAbsolute: !1,
                absoluteTop: 0,
                marginTop: 0
            })
        }
        for (D = 0; D < a.length; D += 1) y.push(g[D]);
        return {singleColPlacements: h, multiColPlacements: v, moreCnts: m, moreMarginTops: y}
    }

    function al(e, t, n, o) {
        if (e.firstCol === t && e.lastCol === n - 1) return e;
        var i = e.eventRange, a = i.range, s = Vn(a, {start: o[t].date, end: $e(o[n - 1].date, 1)});
        return r(r({}, e), {
            firstCol: t,
            lastCol: n - 1,
            eventRange: {def: i.def, ui: r(r({}, i.ui), {durationEditable: !1}), instance: i.instance, range: s},
            isStart: e.isStart && s.start.valueOf() === a.start.valueOf(),
            isEnd: e.isEnd && s.end.valueOf() === a.end.valueOf()
        })
    }

    var sl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.hiddenConsumes = !1, t.forceHidden = {}, t
        }

        return n(t, e), t.prototype.addSegs = function (t) {
            for (var n = this, r = e.prototype.addSegs.call(this, t), o = this.entriesByLevel, i = function (e) {
                return !n.forceHidden[Fi(e)]
            }, a = 0; a < o.length; a += 1) o[a] = o[a].filter(i);
            return r
        }, t.prototype.handleInvalidInsertion = function (t, n, o) {
            var i = this.entriesByLevel, a = this.forceHidden, s = t.touchingEntry, l = t.touchingLevel,
                u = t.touchingLateral;
            if (this.hiddenConsumes && s) {
                var c = Fi(s);
                if (!a[c]) if (this.allowReslicing) {
                    var d = r(r({}, s), {span: ji(s.span, n.span)});
                    a[Fi(d)] = !0, i[l][u] = d, this.splitEntry(s, n, o)
                } else a[c] = !0, o.push(s)
            }
            return e.prototype.handleInvalidInsertion.call(this, t, n, o)
        }, t
    }(Wi), ll = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.cellElRefs = new Na, t.frameElRefs = new Na, t.fgElRefs = new Na, t.segHarnessRefs = new Na, t.rootElRef = So(), t.state = {
                framePositions: null,
                maxContentHeight: null,
                eventInstanceHeights: {}
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this, n = t.props, r = t.state, o = t.context.options, i = n.cells.length,
                a = qs(n.businessHourSegs, i), s = qs(n.bgEventSegs, i), l = qs(this.getHighlightSegs(), i),
                u = qs(this.getMirrorSegs(), i),
                c = il($n(n.fgEventSegs, o.eventOrder), n.dayMaxEvents, n.dayMaxEventRows, o.eventOrderStrict, r.eventInstanceHeights, r.maxContentHeight, n.cells),
                d = c.singleColPlacements, p = c.multiColPlacements, f = c.moreCnts, h = c.moreMarginTops,
                v = n.eventDrag && n.eventDrag.affectedInstances || n.eventResize && n.eventResize.affectedInstances || {};
            return yo("tr", {ref: this.rootElRef}, n.renderIntro && n.renderIntro(), n.cells.map((function (t, r) {
                var o = e.renderFgSegs(r, n.forPrint ? d[r] : p[r], n.todayRange, v),
                    i = e.renderFgSegs(r, function (e, t) {
                        if (!e.length) return [];
                        var n = function (e) {
                            for (var t = {}, n = 0, r = e; n < r.length; n++) for (var o = 0, i = r[n]; o < i.length; o++) {
                                var a = i[o];
                                t[a.seg.eventRange.instance.instanceId] = a.absoluteTop
                            }
                            return t
                        }(t);
                        return e.map((function (e) {
                            return {
                                seg: e,
                                isVisible: !0,
                                isAbsolute: !0,
                                absoluteTop: n[e.eventRange.instance.instanceId],
                                marginTop: 0
                            }
                        }))
                    }(u[r], p), n.todayRange, {}, Boolean(n.eventDrag), Boolean(n.eventResize), !1);
                return yo(ol, {
                    key: t.key,
                    elRef: e.cellElRefs.createRef(t.key),
                    innerElRef: e.frameElRefs.createRef(t.key),
                    dateProfile: n.dateProfile,
                    date: t.date,
                    showDayNumber: n.showDayNumbers,
                    showWeekNumber: n.showWeekNumbers && 0 === r,
                    forceDayTop: n.showWeekNumbers,
                    todayRange: n.todayRange,
                    eventSelection: n.eventSelection,
                    eventDrag: n.eventDrag,
                    eventResize: n.eventResize,
                    extraHookProps: t.extraHookProps,
                    extraDataAttrs: t.extraDataAttrs,
                    extraClassNames: t.extraClassNames,
                    extraDateSpan: t.extraDateSpan,
                    moreCnt: f[r],
                    moreMarginTop: h[r],
                    singlePlacements: d[r],
                    fgContentElRef: e.fgElRefs.createRef(t.key),
                    fgContent: yo(Do, null, yo(Do, null, o), yo(Do, null, i)),
                    bgContent: yo(Do, null, e.renderFillSegs(l[r], "highlight"), e.renderFillSegs(a[r], "non-business"), e.renderFillSegs(s[r], "bg-event"))
                })
            })))
        }, t.prototype.componentDidMount = function () {
            this.updateSizing(!0)
        }, t.prototype.componentDidUpdate = function (e, t) {
            var n = this.props;
            this.updateSizing(!St(e, n))
        }, t.prototype.getHighlightSegs = function () {
            var e = this.props;
            return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs
        }, t.prototype.getMirrorSegs = function () {
            var e = this.props;
            return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : []
        }, t.prototype.renderFgSegs = function (e, t, n, o, i, a, s) {
            var l = this.context, u = this.props.eventSelection, c = this.state.framePositions,
                d = 1 === this.props.cells.length, p = i || a || s, f = [];
            if (c) for (var h = 0, v = t; h < v.length; h++) {
                var g = v[h], m = g.seg, y = m.eventRange.instance.instanceId, E = y + ":" + e,
                    S = g.isVisible && !o[y], D = g.isAbsolute, b = "", C = "";
                D && (l.isRtl ? (C = 0, b = c.lefts[m.lastCol] - c.lefts[m.firstCol]) : (b = 0, C = c.rights[m.firstCol] - c.rights[m.lastCol])), f.push(yo("div", {
                    className: "fc-daygrid-event-harness" + (D ? " fc-daygrid-event-harness-abs" : ""),
                    key: E,
                    ref: p ? null : this.segHarnessRefs.createRef(E),
                    style: {
                        visibility: S ? "" : "hidden",
                        marginTop: D ? "" : g.marginTop,
                        top: D ? g.absoluteTop : "",
                        left: b,
                        right: C
                    }
                }, $s(m) ? yo(Qs, r({
                    seg: m,
                    isDragging: i,
                    isSelected: y === u,
                    defaultDisplayEventEnd: d
                }, rr(m, n))) : yo(Js, r({
                    seg: m,
                    isDragging: i,
                    isResizing: a,
                    isDateSelecting: s,
                    isSelected: y === u,
                    defaultDisplayEventEnd: d
                }, rr(m, n)))))
            }
            return f
        }, t.prototype.renderFillSegs = function (e, t) {
            var n = this.context.isRtl, i = this.props.todayRange, a = this.state.framePositions, s = [];
            if (a) for (var l = 0, u = e; l < u.length; l++) {
                var c = u[l], d = n ? {right: 0, left: a.lefts[c.lastCol] - a.lefts[c.firstCol]} : {
                    left: 0,
                    right: a.rights[c.firstCol] - a.rights[c.lastCol]
                };
                s.push(yo("div", {
                    key: ir(c.eventRange),
                    className: "fc-daygrid-bg-harness",
                    style: d
                }, "bg-event" === t ? yo(rs, r({seg: c}, rr(c, i))) : ns(t)))
            }
            return yo.apply(void 0, o([Do, {}], s))
        }, t.prototype.updateSizing = function (e) {
            var t = this.props, n = this.frameElRefs;
            if (!t.forPrint && null !== t.clientWidth) {
                if (e) {
                    var r = t.cells.map((function (e) {
                        return n.currentMap[e.key]
                    }));
                    if (r.length) {
                        var o = this.rootElRef.current;
                        this.setState({framePositions: new po(o, r, !0, !1)})
                    }
                }
                var i = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
                this.setState({
                    eventInstanceHeights: this.queryEventInstanceHeights(),
                    maxContentHeight: i ? this.computeMaxContentHeight() : null
                })
            }
        }, t.prototype.queryEventInstanceHeights = function () {
            var e = this.segHarnessRefs.currentMap, t = {};
            for (var n in e) {
                var r = Math.round(e[n].getBoundingClientRect().height), o = n.split(":")[0];
                t[o] = Math.max(t[o] || 0, r)
            }
            return t
        }, t.prototype.computeMaxContentHeight = function () {
            var e = this.props.cells[0].key, t = this.cellElRefs.currentMap[e], n = this.fgElRefs.currentMap[e];
            return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top
        }, t.prototype.getCellEls = function () {
            var e = this.cellElRefs.currentMap;
            return this.props.cells.map((function (t) {
                return e[t.key]
            }))
        }, t
    }(Ho);
    ll.addStateEquality({eventInstanceHeights: St});
    var ul = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.splitBusinessHourSegs = zt(Gs), t.splitBgEventSegs = zt(Gs), t.splitFgEventSegs = zt(Gs), t.splitDateSelectionSegs = zt(Gs), t.splitEventDrag = zt(Ys), t.splitEventResize = zt(Ys), t.rowRefs = new Na, t.handleRootEl = function (e) {
                t.rootEl = e, e ? t.context.registerInteractiveComponent(t, {
                    el: e,
                    isHitComboAllowed: t.props.isHitComboAllowed
                }) : t.context.unregisterInteractiveComponent(t)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props, n = t.dateProfile, r = t.dayMaxEventRows, o = t.dayMaxEvents,
                i = t.expandRows, a = t.cells.length, s = this.splitBusinessHourSegs(t.businessHourSegs, a),
                l = this.splitBgEventSegs(t.bgEventSegs, a), u = this.splitFgEventSegs(t.fgEventSegs, a),
                c = this.splitDateSelectionSegs(t.dateSelectionSegs, a), d = this.splitEventDrag(t.eventDrag, a),
                p = this.splitEventResize(t.eventResize, a), f = !0 === o || !0 === r;
            return f && !i && (f = !1, r = null, o = null), yo("div", {
                className: ["fc-daygrid-body", f ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", i ? "" : "fc-daygrid-body-natural"].join(" "),
                ref: this.handleRootEl,
                style: {width: t.clientWidth, minWidth: t.tableMinWidth}
            }, yo(va, {unit: "day"}, (function (f, h) {
                return yo(Do, null, yo("table", {
                    className: "fc-scrollgrid-sync-table",
                    style: {width: t.clientWidth, minWidth: t.tableMinWidth, height: i ? t.clientHeight : ""}
                }, t.colGroupNode, yo("tbody", null, t.cells.map((function (i, f) {
                    return yo(ll, {
                        ref: e.rowRefs.createRef(f),
                        key: i.length ? i[0].date.toISOString() : f,
                        showDayNumbers: a > 1,
                        showWeekNumbers: t.showWeekNumbers,
                        todayRange: h,
                        dateProfile: n,
                        cells: i,
                        renderIntro: t.renderRowIntro,
                        businessHourSegs: s[f],
                        eventSelection: t.eventSelection,
                        bgEventSegs: l[f].filter(cl),
                        fgEventSegs: u[f],
                        dateSelectionSegs: c[f],
                        eventDrag: d[f],
                        eventResize: p[f],
                        dayMaxEvents: o,
                        dayMaxEventRows: r,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: t.forPrint
                    })
                })))))
            })))
        }, t.prototype.prepareHits = function () {
            this.rowPositions = new po(this.rootEl, this.rowRefs.collect().map((function (e) {
                return e.getCellEls()[0]
            })), !1, !0), this.colPositions = new po(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1)
        }, t.prototype.queryHit = function (e, t) {
            var n = this.colPositions, o = this.rowPositions, i = n.leftToIndex(e), a = o.topToIndex(t);
            if (null != a && null != i) {
                var s = this.props.cells[a][i];
                return {
                    dateProfile: this.props.dateProfile,
                    dateSpan: r({range: this.getCellRange(a, i), allDay: !0}, s.extraDateSpan),
                    dayEl: this.getCellEl(a, i),
                    rect: {left: n.lefts[i], right: n.rights[i], top: o.tops[a], bottom: o.bottoms[a]},
                    layer: 0
                }
            }
            return null
        }, t.prototype.getCellEl = function (e, t) {
            return this.rowRefs.currentMap[e].getCellEls()[t]
        }, t.prototype.getCellRange = function (e, t) {
            var n = this.props.cells[e][t].date;
            return {start: n, end: $e(n, 1)}
        }, t
    }(Ho);

    function cl(e) {
        return e.eventRange.def.allDay
    }

    var dl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.forceDayIfListItem = !0, t
        }

        return n(t, e), t.prototype.sliceRange = function (e, t) {
            return t.sliceRange(e)
        }, t
    }(Da), pl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.slicer = new dl, t.tableRef = So(), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context;
            return yo(ul, r({ref: this.tableRef}, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
                dateProfile: e.dateProfile,
                cells: e.dayTableModel.cells,
                colGroupNode: e.colGroupNode,
                tableMinWidth: e.tableMinWidth,
                renderRowIntro: e.renderRowIntro,
                dayMaxEvents: e.dayMaxEvents,
                dayMaxEventRows: e.dayMaxEventRows,
                showWeekNumbers: e.showWeekNumbers,
                expandRows: e.expandRows,
                headerAlignElRef: e.headerAlignElRef,
                clientWidth: e.clientWidth,
                clientHeight: e.clientHeight,
                forPrint: e.forPrint
            }))
        }, t
    }(Ho), fl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildDayTableModel = zt(hl), t.headerRef = So(), t.tableRef = So(), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.context, n = t.options, r = t.dateProfileGenerator, o = this.props,
                i = this.buildDayTableModel(o.dateProfile, r), a = n.dayHeaders && yo(ma, {
                    ref: this.headerRef,
                    dateProfile: o.dateProfile,
                    dates: i.headerDates,
                    datesRepDistinctDays: 1 === i.rowCnt
                }), s = function (t) {
                    return yo(pl, {
                        ref: e.tableRef,
                        dateProfile: o.dateProfile,
                        dayTableModel: i,
                        businessHours: o.businessHours,
                        dateSelection: o.dateSelection,
                        eventStore: o.eventStore,
                        eventUiBases: o.eventUiBases,
                        eventSelection: o.eventSelection,
                        eventDrag: o.eventDrag,
                        eventResize: o.eventResize,
                        nextDayThreshold: n.nextDayThreshold,
                        colGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        dayMaxEvents: n.dayMaxEvents,
                        dayMaxEventRows: n.dayMaxEventRows,
                        showWeekNumbers: n.weekNumbers,
                        expandRows: !o.isHeightAuto,
                        headerAlignElRef: e.headerElRef,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: o.forPrint
                    })
                };
            return n.dayMinWidth ? this.renderHScrollLayout(a, s, i.colCnt, n.dayMinWidth) : this.renderSimpleLayout(a, s)
        }, t
    }(js);

    function hl(e, t) {
        var n = new Ea(e.renderRange, t);
        return new Sa(n, /year|month|week/.test(e.currentRangeUnit))
    }

    var vl = Oo({
        initialView: "dayGridMonth", views: {
            dayGrid: {
                component: fl, dateProfileGeneratorClass: function (e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }

                    return n(t, e), t.prototype.buildRenderRange = function (t, n, r) {
                        var o, i = this.props.dateEnv, a = e.prototype.buildRenderRange.call(this, t, n, r),
                            s = a.start, l = a.end;
                        (/^(year|month)$/.test(n) && (s = i.startOfWeek(s), (o = i.startOfWeek(l)).valueOf() !== l.valueOf() && (l = Ke(o, 1))), this.props.monthMode && this.props.fixedWeekCount) && (l = Ke(l, 6 - Math.ceil(Qe(s, l))));
                        return {start: s, end: l}
                    }, t
                }(Jo)
            },
            dayGridDay: {type: "dayGrid", duration: {days: 1}},
            dayGridWeek: {type: "dayGrid", duration: {weeks: 1}},
            dayGridMonth: {type: "dayGrid", duration: {months: 1}, monthMode: !0, fixedWeekCount: !0}
        }
    }), gl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.getKeyInfo = function () {
            return {allDay: {}, timed: {}}
        }, t.prototype.getKeysForDateSpan = function (e) {
            return e.allDay ? ["allDay"] : ["timed"]
        }, t.prototype.getKeysForEventDef = function (e) {
            return e.allDay ? qn(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"]
        }, t
    }(Xr), ml = rn({hour: "numeric", minute: "2-digit", omitZeroMinute: !0, meridiem: "short"});

    function yl(e) {
        var t = ["fc-timegrid-slot", "fc-timegrid-slot-label", e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
        return yo(To.Consumer, null, (function (n) {
            if (!e.isLabeled) return yo("td", {className: t.join(" "), "data-time": e.isoTimeStr});
            var r = n.dateEnv, o = n.options, i = n.viewApi,
                a = null == o.slotLabelFormat ? ml : Array.isArray(o.slotLabelFormat) ? rn(o.slotLabelFormat[0]) : rn(o.slotLabelFormat),
                s = {level: 0, time: e.time, date: r.toDate(e.date), view: i, text: r.format(e.date, a)};
            return yo(Wo, {
                hookProps: s,
                classNames: o.slotLabelClassNames,
                content: o.slotLabelContent,
                defaultContent: El,
                didMount: o.slotLabelDidMount,
                willUnmount: o.slotLabelWillUnmount
            }, (function (n, r, o, i) {
                return yo("td", {
                    ref: n,
                    className: t.concat(r).join(" "),
                    "data-time": e.isoTimeStr
                }, yo("div", {className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"}, yo("div", {
                    className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
                    ref: o
                }, i)))
            }))
        }))
    }

    function El(e) {
        return e.text
    }

    var Sl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            return this.props.slatMetas.map((function (e) {
                return yo("tr", {key: e.key}, yo(yl, r({}, e)))
            }))
        }, t
    }(Mo), Dl = rn({week: "short"}), bl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.allDaySplitter = new gl, t.headerElRef = So(), t.rootElRef = So(), t.scrollerElRef = So(), t.state = {slatCoords: null}, t.handleScrollTopRequest = function (e) {
                var n = t.scrollerElRef.current;
                n && (n.scrollTop = e)
            }, t.renderHeadAxis = function (e, n) {
                void 0 === n && (n = "");
                var o = t.context.options, i = t.props.dateProfile.renderRange, a = et(i.start, i.end),
                    s = o.navLinks && 1 === a ? {"data-navlink": Qr(i.start, "week"), tabIndex: 0} : {};
                return o.weekNumbers && "day" === e ? yo(is, {
                    date: i.start,
                    defaultFormat: Dl
                }, (function (e, t, o, i) {
                    return yo("th", {
                        ref: e,
                        className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(t).join(" ")
                    }, yo("div", {
                        className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",
                        style: {height: n}
                    }, yo("a", r({
                        ref: o,
                        className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"
                    }, s), i)))
                })) : yo("th", {className: "fc-timegrid-axis"}, yo("div", {
                    className: "fc-timegrid-axis-frame",
                    style: {height: n}
                }))
            }, t.renderTableRowAxis = function (e) {
                var n = t.context, r = n.options, o = n.viewApi, i = {text: r.allDayText, view: o};
                return yo(Wo, {
                    hookProps: i,
                    classNames: r.allDayClassNames,
                    content: r.allDayContent,
                    defaultContent: Cl,
                    didMount: r.allDayDidMount,
                    willUnmount: r.allDayWillUnmount
                }, (function (t, n, r, o) {
                    return yo("td", {
                        ref: t,
                        className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(n).join(" ")
                    }, yo("div", {
                        className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" + (null == e ? " fc-timegrid-axis-frame-liquid" : ""),
                        style: {height: e}
                    }, yo("span", {
                        className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                        ref: r
                    }, o)))
                }))
            }, t.handleSlatCoords = function (e) {
                t.setState({slatCoords: e})
            }, t
        }

        return n(t, e), t.prototype.renderSimpleLayout = function (e, t, n) {
            var r = this.context, o = this.props, i = [], a = Ga(r.options);
            return e && i.push({
                type: "header",
                key: "header",
                isSticky: a,
                chunk: {elRef: this.headerElRef, tableClassName: "fc-col-header", rowContent: e}
            }), t && (i.push({type: "body", key: "all-day", chunk: {content: t}}), i.push({
                type: "body",
                key: "all-day-divider",
                outerContent: yo("tr", {className: "fc-scrollgrid-section"}, yo("td", {className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded")}))
            })), i.push({
                type: "body",
                key: "body",
                liquid: !0,
                expandRows: Boolean(r.options.expandRows),
                chunk: {scrollerElRef: this.scrollerElRef, content: n}
            }), yo(Yo, {viewSpec: r.viewSpec, elRef: this.rootElRef}, (function (e, t) {
                return yo("div", {
                    className: ["fc-timegrid"].concat(t).join(" "),
                    ref: e
                }, yo(Ya, {
                    liquid: !o.isHeightAuto && !o.forPrint,
                    collapsibleWidth: o.forPrint,
                    cols: [{width: "shrink"}],
                    sections: i
                }))
            }))
        }, t.prototype.renderHScrollLayout = function (e, t, n, r, o, i, a) {
            var s = this, l = this.context.pluginHooks.scrollGridImpl;
            if (!l) throw new Error("No ScrollGrid implementation");
            var u = this.context, c = this.props, d = !c.forPrint && Ga(u.options), p = !c.forPrint && qa(u.options),
                f = [];
            e && f.push({
                type: "header",
                key: "header",
                isSticky: d,
                syncRowHeights: !0,
                chunks: [{
                    key: "axis", rowContent: function (e) {
                        return yo("tr", null, s.renderHeadAxis("day", e.rowSyncHeights[0]))
                    }
                }, {key: "cols", elRef: this.headerElRef, tableClassName: "fc-col-header", rowContent: e}]
            }), t && (f.push({
                type: "body",
                key: "all-day",
                syncRowHeights: !0,
                chunks: [{
                    key: "axis", rowContent: function (e) {
                        return yo("tr", null, s.renderTableRowAxis(e.rowSyncHeights[0]))
                    }
                }, {key: "cols", content: t}]
            }), f.push({
                key: "all-day-divider",
                type: "body",
                outerContent: yo("tr", {className: "fc-scrollgrid-section"}, yo("td", {
                    colSpan: 2,
                    className: "fc-timegrid-divider " + u.theme.getClass("tableCellShaded")
                }))
            }));
            var h = u.options.nowIndicator;
            return f.push({
                type: "body",
                key: "body",
                liquid: !0,
                expandRows: Boolean(u.options.expandRows),
                chunks: [{
                    key: "axis", content: function (e) {
                        return yo("div", {className: "fc-timegrid-axis-chunk"}, yo("table", {style: {height: e.expandRows ? e.clientHeight : ""}}, e.tableColGroupNode, yo("tbody", null, yo(Sl, {slatMetas: i}))), yo("div", {className: "fc-timegrid-now-indicator-container"}, yo(va, {unit: h ? "minute" : "day"}, (function (e) {
                            var t = h && a && a.safeComputeTop(e);
                            return "number" == typeof t ? yo($a, {isAxis: !0, date: e}, (function (e, n, r, o) {
                                return yo("div", {
                                    ref: e,
                                    className: ["fc-timegrid-now-indicator-arrow"].concat(n).join(" "),
                                    style: {top: t}
                                }, o)
                            })) : null
                        }))))
                    }
                }, {key: "cols", scrollerElRef: this.scrollerElRef, content: n}]
            }), p && f.push({
                key: "footer",
                type: "footer",
                isSticky: !0,
                chunks: [{key: "axis", content: ja}, {key: "cols", content: ja}]
            }), yo(Yo, {viewSpec: u.viewSpec, elRef: this.rootElRef}, (function (e, t) {
                return yo("div", {
                    className: ["fc-timegrid"].concat(t).join(" "),
                    ref: e
                }, yo(l, {
                    liquid: !c.isHeightAuto && !c.forPrint,
                    collapsibleWidth: !1,
                    colGroups: [{width: "shrink", cols: [{width: "shrink"}]}, {cols: [{span: r, minWidth: o}]}],
                    sections: f
                }))
            }))
        }, t.prototype.getAllDayMaxEventProps = function () {
            var e = this.context.options, t = e.dayMaxEvents, n = e.dayMaxEventRows;
            return !0 !== t && !0 !== n || (t = void 0, n = 5), {dayMaxEvents: t, dayMaxEventRows: n}
        }, t
    }(Ho);

    function Cl(e) {
        return e.text
    }

    var wl = function () {
        function e(e, t, n) {
            this.positions = e, this.dateProfile = t, this.slotDuration = n
        }

        return e.prototype.safeComputeTop = function (e) {
            var t = this.dateProfile;
            if (jn(t.currentRange, e)) {
                var n = ot(e), r = e.valueOf() - n.valueOf();
                if (r >= Ht(t.slotMinTime) && r < Ht(t.slotMaxTime)) return this.computeTimeTop(xt(r))
            }
            return null
        }, e.prototype.computeDateTop = function (e, t) {
            return t || (t = ot(e)), this.computeTimeTop(xt(e.valueOf() - t.valueOf()))
        }, e.prototype.computeTimeTop = function (e) {
            var t, n, r = this.positions, o = this.dateProfile, i = r.els.length,
                a = (e.milliseconds - Ht(o.slotMinTime)) / Ht(this.slotDuration);
            return a = Math.max(0, a), a = Math.min(i, a), t = Math.floor(a), n = a - (t = Math.min(t, i - 1)), r.tops[t] + r.getHeight(t) * n
        }, e
    }(), Rl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = t.options, o = e.slatElRefs;
            return yo("tbody", null, e.slatMetas.map((function (i, a) {
                var s = {time: i.time, date: t.dateEnv.toDate(i.date), view: t.viewApi},
                    l = ["fc-timegrid-slot", "fc-timegrid-slot-lane", i.isLabeled ? "" : "fc-timegrid-slot-minor"];
                return yo("tr", {key: i.key, ref: o.createRef(i.key)}, e.axis && yo(yl, r({}, i)), yo(Wo, {
                    hookProps: s,
                    classNames: n.slotLaneClassNames,
                    content: n.slotLaneContent,
                    didMount: n.slotLaneDidMount,
                    willUnmount: n.slotLaneWillUnmount
                }, (function (e, t, n, r) {
                    return yo("td", {ref: e, className: l.concat(t).join(" "), "data-time": i.isoTimeStr}, r)
                })))
            })))
        }, t
    }(Mo), _l = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = So(), t.slatElRefs = new Na, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context;
            return yo("div", {
                className: "fc-timegrid-slots",
                ref: this.rootElRef
            }, yo("table", {
                className: t.theme.getClass("table"),
                style: {minWidth: e.tableMinWidth, width: e.clientWidth, height: e.minHeight}
            }, e.tableColGroupNode, yo(Rl, {slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas})))
        }, t.prototype.componentDidMount = function () {
            this.updateSizing()
        }, t.prototype.componentDidUpdate = function () {
            this.updateSizing()
        }, t.prototype.componentWillUnmount = function () {
            this.props.onCoords && this.props.onCoords(null)
        }, t.prototype.updateSizing = function () {
            var e, t = this.context, n = this.props;
            n.onCoords && null !== n.clientWidth && (this.rootElRef.current.offsetHeight && n.onCoords(new wl(new po(this.rootElRef.current, (e = this.slatElRefs.currentMap, n.slatMetas.map((function (t) {
                return e[t.key]
            }))), !1, !0), this.props.dateProfile, t.options.slotDuration)))
        }, t
    }(Mo);

    function Tl(e, t) {
        var n, r = [];
        for (n = 0; n < t; n += 1) r.push([]);
        if (e) for (n = 0; n < e.length; n += 1) r[e[n].col].push(e[n]);
        return r
    }

    function kl(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1) n[a] = {affectedInstances: e.affectedInstances, isEvent: e.isEvent, segs: []};
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.col].segs.push(i)
            }
        } else for (var a = 0; a < t; a += 1) n[a] = null;
        return n
    }

    var xl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = So(), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props;
            return yo(us, {
                allDayDate: null,
                moreCnt: t.hiddenSegs.length,
                allSegs: t.hiddenSegs,
                hiddenSegs: t.hiddenSegs,
                alignmentElRef: this.rootElRef,
                defaultContent: Ml,
                extraDateSpan: t.extraDateSpan,
                dateProfile: t.dateProfile,
                todayRange: t.todayRange,
                popoverContent: function () {
                    return Fl(t.hiddenSegs, t)
                }
            }, (function (n, r, o, i, a) {
                return yo("a", {
                    ref: function (t) {
                        No(n, t), No(e.rootElRef, t)
                    },
                    className: ["fc-timegrid-more-link"].concat(r).join(" "),
                    style: {top: t.top, bottom: t.bottom},
                    onClick: a
                }, yo("div", {ref: o, className: "fc-timegrid-more-link-inner fc-sticky"}, i))
            }))
        }, t
    }(Mo);

    function Ml(e) {
        return e.shortText
    }

    function Pl(e, t, n) {
        var o = new Wi;
        null != t && (o.strictOrder = t), null != n && (o.maxStackCnt = n);
        var i, a, s, l = zi(o.addSegs(e)), u = function (e) {
            var t = e.entriesByLevel, n = Ol((function (e, t) {
                return e + ":" + t
            }), (function (o, i) {
                var a = Il(function (e, t, n) {
                    for (var r = e.levelCoords, o = e.entriesByLevel, i = o[t][n], a = r[t] + i.thickness, s = r.length, l = t; l < s && r[l] < a; l += 1) ;
                    for (; l < s; l += 1) {
                        for (var u = o[l], c = void 0, d = qi(u, i.span.start, Vi), p = d[0] + d[1], f = p; (c = u[f]) && c.span.start < i.span.end;) f += 1;
                        if (p < f) return {level: l, lateralStart: p, lateralEnd: f}
                    }
                    return null
                }(e, o, i), n), s = t[o][i];
                return [r(r({}, s), {nextLevelNodes: a[0]}), s.thickness + a[1]]
            }));
            return Il(t.length ? {level: 0, lateralStart: 0, lateralEnd: t[0].length} : null, n)[0]
        }(o);
        return i = u, a = 1, s = Ol((function (e, t, n) {
            return Fi(e)
        }), (function (e, t, n) {
            var o, i = e.nextLevelNodes, l = e.thickness, u = l + n, c = l / u, d = [];
            if (i.length) for (var p = 0, f = i; p < f.length; p++) {
                var h = f[p];
                if (void 0 === o) o = (v = s(h, t, u))[0], d.push(v[1]); else {
                    var v = s(h, o, 0);
                    d.push(v[1])
                }
            } else o = a;
            var g = (o - t) * c;
            return [o - g, r(r({}, e), {thickness: g, nextLevelNodes: d})]
        })), {
            segRects: function (e) {
                var t = [], n = Ol((function (e, t, n) {
                    return Fi(e)
                }), (function (e, n, i) {
                    var a = r(r({}, e), {levelCoord: n, stackDepth: i, stackForward: 0});
                    return t.push(a), a.stackForward = o(e.nextLevelNodes, n + e.thickness, i + 1) + 1
                }));

                function o(e, t, r) {
                    for (var o = 0, i = 0, a = e; i < a.length; i++) {
                        var s = a[i];
                        o = Math.max(n(s, t, r), o)
                    }
                    return o
                }

                return o(e, 0, 0), t
            }(u = i.map((function (e) {
                return s(e, 0, 0)[1]
            }))), hiddenGroups: l
        }
    }

    function Il(e, t) {
        if (!e) return [[], 0];
        for (var n = e.level, r = e.lateralStart, o = e.lateralEnd, i = r, a = []; i < o;) a.push(t(n, i)), i += 1;
        return a.sort(Nl), [a.map(Hl), a[0][1]]
    }

    function Nl(e, t) {
        return t[1] - e[1]
    }

    function Hl(e) {
        return e[0]
    }

    function Ol(e, t) {
        var n = {};
        return function () {
            for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
            var i = e.apply(void 0, r);
            return i in n ? n[i] : n[i] = t.apply(void 0, r)
        }
    }

    function Al(e, t, n, r) {
        void 0 === n && (n = null), void 0 === r && (r = 0);
        var o = [];
        if (n) for (var i = 0; i < e.length; i += 1) {
            var a = e[i], s = n.computeDateTop(a.start, t), l = Math.max(s + (r || 0), n.computeDateTop(a.end, t));
            o.push({start: Math.round(s), end: Math.round(l)})
        }
        return o
    }

    var Ul = rn({hour: "numeric", minute: "2-digit", meridiem: !1}), Ll = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = ["fc-timegrid-event", "fc-v-event"];
            return this.props.isShort && e.push("fc-timegrid-event-short"), yo(Xa, r({}, this.props, {
                defaultTimeFormat: Ul,
                extraClassNames: e
            }))
        }, t
    }(Mo), Wl = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props;
            return yo(Qa, {
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                extraHookProps: e.extraHookProps
            }, (function (e, t) {
                return t && yo("div", {className: "fc-timegrid-col-misc", ref: e}, t)
            }))
        }, t
    }(Mo), Vl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.sortEventSegs = zt($n), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props, n = this.context, o = n.options.selectMirror,
                i = t.eventDrag && t.eventDrag.segs || t.eventResize && t.eventResize.segs || o && t.dateSelectionSegs || [],
                a = t.eventDrag && t.eventDrag.affectedInstances || t.eventResize && t.eventResize.affectedInstances || {},
                s = this.sortEventSegs(t.fgEventSegs, n.options.eventOrder);
            return yo(ts, {
                elRef: t.elRef,
                date: t.date,
                dateProfile: t.dateProfile,
                todayRange: t.todayRange,
                extraHookProps: t.extraHookProps
            }, (function (n, l, u) {
                return yo("td", r({
                    ref: n,
                    className: ["fc-timegrid-col"].concat(l, t.extraClassNames || []).join(" ")
                }, u, t.extraDataAttrs), yo("div", {className: "fc-timegrid-col-frame"}, yo("div", {className: "fc-timegrid-col-bg"}, e.renderFillSegs(t.businessHourSegs, "non-business"), e.renderFillSegs(t.bgEventSegs, "bg-event"), e.renderFillSegs(t.dateSelectionSegs, "highlight")), yo("div", {className: "fc-timegrid-col-events"}, e.renderFgSegs(s, a, !1, !1, !1)), yo("div", {className: "fc-timegrid-col-events"}, e.renderFgSegs(i, {}, Boolean(t.eventDrag), Boolean(t.eventResize), Boolean(o))), yo("div", {className: "fc-timegrid-now-indicator-container"}, e.renderNowIndicator(t.nowIndicatorSegs)), yo(Wl, {
                    date: t.date,
                    dateProfile: t.dateProfile,
                    todayRange: t.todayRange,
                    extraHookProps: t.extraHookProps
                })))
            }))
        }, t.prototype.renderFgSegs = function (e, t, n, r, o) {
            var i = this.props;
            return i.forPrint ? Fl(e, i) : this.renderPositionedFgSegs(e, t, n, r, o)
        }, t.prototype.renderPositionedFgSegs = function (e, t, n, o, i) {
            var a = this, s = this.context.options, l = s.eventMaxStack, u = s.eventShortHeight, c = s.eventOrderStrict,
                d = s.eventMinHeight, p = this.props, f = p.date, h = p.slatCoords, v = p.eventSelection,
                g = p.todayRange, m = p.nowDate, y = n || o || i, E = function (e, t, n, r) {
                    for (var o = [], i = [], a = 0; a < e.length; a += 1) {
                        var s = t[a];
                        s ? o.push({index: a, thickness: 1, span: s}) : i.push(e[a])
                    }
                    for (var l = Pl(o, n, r), u = l.segRects, c = l.hiddenGroups, d = [], p = 0, f = u; p < f.length; p++) {
                        var h = f[p];
                        d.push({seg: e[h.index], rect: h})
                    }
                    for (var v = 0, g = i; v < g.length; v++) {
                        var m = g[v];
                        d.push({seg: m, rect: null})
                    }
                    return {segPlacements: d, hiddenGroups: c}
                }(e, Al(e, f, h, d), c, l), S = E.segPlacements, D = E.hiddenGroups;
            return yo(Do, null, this.renderHiddenGroups(D, e), S.map((function (e) {
                var s = e.seg, l = e.rect, c = s.eventRange.instance.instanceId, d = y || Boolean(!t[c] && l),
                    p = zl(l && l.span), f = !y && l ? a.computeSegHStyle(l) : {left: 0, right: 0},
                    h = Boolean(l) && l.stackForward > 0, E = Boolean(l) && l.span.end - l.span.start < u;
                return yo("div", {
                    className: "fc-timegrid-event-harness" + (h ? " fc-timegrid-event-harness-inset" : ""),
                    key: c,
                    style: r(r({visibility: d ? "" : "hidden"}, p), f)
                }, yo(Ll, r({
                    seg: s,
                    isDragging: n,
                    isResizing: o,
                    isDateSelecting: i,
                    isSelected: c === v,
                    isShort: E
                }, rr(s, g, m))))
            })))
        }, t.prototype.renderHiddenGroups = function (e, t) {
            var n = this.props, r = n.extraDateSpan, o = n.dateProfile, i = n.todayRange, a = n.nowDate,
                s = n.eventSelection, l = n.eventDrag, u = n.eventResize;
            return yo(Do, null, e.map((function (e) {
                var n, c, d = zl(e.span), p = (n = e.entries, c = t, n.map((function (e) {
                    return c[e.index]
                })));
                return yo(xl, {
                    key: Ut(ps(p)),
                    hiddenSegs: p,
                    top: d.top,
                    bottom: d.bottom,
                    extraDateSpan: r,
                    dateProfile: o,
                    todayRange: i,
                    nowDate: a,
                    eventSelection: s,
                    eventDrag: l,
                    eventResize: u
                })
            })))
        }, t.prototype.renderFillSegs = function (e, t) {
            var n = this.props, o = this.context,
                i = Al(e, n.date, n.slatCoords, o.options.eventMinHeight).map((function (o, i) {
                    var a = e[i];
                    return yo("div", {
                        key: ir(a.eventRange),
                        className: "fc-timegrid-bg-harness",
                        style: zl(o)
                    }, "bg-event" === t ? yo(rs, r({seg: a}, rr(a, n.todayRange, n.nowDate))) : ns(t))
                }));
            return yo(Do, null, i)
        }, t.prototype.renderNowIndicator = function (e) {
            var t = this.props, n = t.slatCoords, r = t.date;
            return n ? e.map((function (e, t) {
                return yo($a, {isAxis: !1, date: r, key: t}, (function (t, o, i, a) {
                    return yo("div", {
                        ref: t,
                        className: ["fc-timegrid-now-indicator-line"].concat(o).join(" "),
                        style: {top: n.computeDateTop(e.start, r)}
                    }, a)
                }))
            })) : null
        }, t.prototype.computeSegHStyle = function (e) {
            var t, n, r = this.context, o = r.isRtl, i = r.options.slotEventOverlap, a = e.levelCoord,
                s = e.levelCoord + e.thickness;
            i && (s = Math.min(1, a + 2 * (s - a))), o ? (t = 1 - s, n = a) : (t = a, n = 1 - s);
            var l = {zIndex: e.stackDepth + 1, left: 100 * t + "%", right: 100 * n + "%"};
            return i && !e.stackForward && (l[o ? "marginLeft" : "marginRight"] = 20), l
        }, t
    }(Mo);

    function Fl(e, t) {
        var n = t.todayRange, o = t.nowDate, i = t.eventSelection, a = t.eventDrag, s = t.eventResize,
            l = (a ? a.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
        return yo(Do, null, e.map((function (e) {
            var t = e.eventRange.instance.instanceId;
            return yo("div", {key: t, style: {visibility: l[t] ? "hidden" : ""}}, yo(Ll, r({
                seg: e,
                isDragging: !1,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: t === i,
                isShort: !1
            }, rr(e, n, o))))
        })))
    }

    function zl(e) {
        return e ? {top: e.start, bottom: -e.end} : {top: "", bottom: ""}
    }

    var Bl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.splitFgEventSegs = zt(Tl), t.splitBgEventSegs = zt(Tl), t.splitBusinessHourSegs = zt(Tl), t.splitNowIndicatorSegs = zt(Tl), t.splitDateSelectionSegs = zt(Tl), t.splitEventDrag = zt(kl), t.splitEventResize = zt(kl), t.rootElRef = So(), t.cellElRefs = new Na, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props,
                n = this.context.options.nowIndicator && t.slatCoords && t.slatCoords.safeComputeTop(t.nowDate),
                r = t.cells.length, o = this.splitFgEventSegs(t.fgEventSegs, r),
                i = this.splitBgEventSegs(t.bgEventSegs, r), a = this.splitBusinessHourSegs(t.businessHourSegs, r),
                s = this.splitNowIndicatorSegs(t.nowIndicatorSegs, r),
                l = this.splitDateSelectionSegs(t.dateSelectionSegs, r), u = this.splitEventDrag(t.eventDrag, r),
                c = this.splitEventResize(t.eventResize, r);
            return yo("div", {
                className: "fc-timegrid-cols",
                ref: this.rootElRef
            }, yo("table", {
                style: {
                    minWidth: t.tableMinWidth,
                    width: t.clientWidth
                }
            }, t.tableColGroupNode, yo("tbody", null, yo("tr", null, t.axis && yo("td", {className: "fc-timegrid-col fc-timegrid-axis"}, yo("div", {className: "fc-timegrid-col-frame"}, yo("div", {className: "fc-timegrid-now-indicator-container"}, "number" == typeof n && yo($a, {
                isAxis: !0,
                date: t.nowDate
            }, (function (e, t, r, o) {
                return yo("div", {
                    ref: e,
                    className: ["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),
                    style: {top: n}
                }, o)
            }))))), t.cells.map((function (n, r) {
                return yo(Vl, {
                    key: n.key,
                    elRef: e.cellElRefs.createRef(n.key),
                    dateProfile: t.dateProfile,
                    date: n.date,
                    nowDate: t.nowDate,
                    todayRange: t.todayRange,
                    extraHookProps: n.extraHookProps,
                    extraDataAttrs: n.extraDataAttrs,
                    extraClassNames: n.extraClassNames,
                    extraDateSpan: n.extraDateSpan,
                    fgEventSegs: o[r],
                    bgEventSegs: i[r],
                    businessHourSegs: a[r],
                    nowIndicatorSegs: s[r],
                    dateSelectionSegs: l[r],
                    eventDrag: u[r],
                    eventResize: c[r],
                    slatCoords: t.slatCoords,
                    eventSelection: t.eventSelection,
                    forPrint: t.forPrint
                })
            }))))))
        }, t.prototype.componentDidMount = function () {
            this.updateCoords()
        }, t.prototype.componentDidUpdate = function () {
            this.updateCoords()
        }, t.prototype.updateCoords = function () {
            var e, t = this.props;
            t.onColCoords && null !== t.clientWidth && t.onColCoords(new po(this.rootElRef.current, (e = this.cellElRefs.currentMap, t.cells.map((function (t) {
                return e[t.key]
            }))), !0, !1))
        }, t
    }(Mo);
    var jl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.processSlotOptions = zt(Gl), t.state = {slatCoords: null}, t.handleRootEl = function (e) {
                e ? t.context.registerInteractiveComponent(t, {
                    el: e,
                    isHitComboAllowed: t.props.isHitComboAllowed
                }) : t.context.unregisterInteractiveComponent(t)
            }, t.handleScrollRequest = function (e) {
                var n = t.props.onScrollTopRequest, r = t.state.slatCoords;
                if (n && r) {
                    if (e.time) {
                        var o = r.computeTimeTop(e.time);
                        (o = Math.ceil(o)) && (o += 1), n(o)
                    }
                    return !0
                }
                return !1
            }, t.handleColCoords = function (e) {
                t.colCoords = e
            }, t.handleSlatCoords = function (e) {
                t.setState({slatCoords: e}), t.props.onSlatCoords && t.props.onSlatCoords(e)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.state;
            return yo("div", {
                className: "fc-timegrid-body",
                ref: this.handleRootEl,
                style: {width: e.clientWidth, minWidth: e.tableMinWidth}
            }, yo(_l, {
                axis: e.axis,
                dateProfile: e.dateProfile,
                slatMetas: e.slatMetas,
                clientWidth: e.clientWidth,
                minHeight: e.expandRows ? e.clientHeight : "",
                tableMinWidth: e.tableMinWidth,
                tableColGroupNode: e.axis ? e.tableColGroupNode : null,
                onCoords: this.handleSlatCoords
            }), yo(Bl, {
                cells: e.cells,
                axis: e.axis,
                dateProfile: e.dateProfile,
                businessHourSegs: e.businessHourSegs,
                bgEventSegs: e.bgEventSegs,
                fgEventSegs: e.fgEventSegs,
                dateSelectionSegs: e.dateSelectionSegs,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                todayRange: e.todayRange,
                nowDate: e.nowDate,
                nowIndicatorSegs: e.nowIndicatorSegs,
                clientWidth: e.clientWidth,
                tableMinWidth: e.tableMinWidth,
                tableColGroupNode: e.tableColGroupNode,
                slatCoords: t.slatCoords,
                onColCoords: this.handleColCoords,
                forPrint: e.forPrint
            }))
        }, t.prototype.componentDidMount = function () {
            this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
        }, t.prototype.componentDidUpdate = function (e) {
            this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
        }, t.prototype.componentWillUnmount = function () {
            this.scrollResponder.detach()
        }, t.prototype.queryHit = function (e, t) {
            var n = this.context, o = n.dateEnv, i = n.options, a = this.colCoords, s = this.props.dateProfile,
                l = this.state.slatCoords, u = this.processSlotOptions(this.props.slotDuration, i.snapDuration),
                c = u.snapDuration, d = u.snapsPerSlot, p = a.leftToIndex(e), f = l.positions.topToIndex(t);
            if (null != p && null != f) {
                var h = this.props.cells[p], v = l.positions.tops[f], g = l.positions.getHeight(f), m = (t - v) / g,
                    y = f * d + Math.floor(m * d), E = this.props.cells[p].date, S = Pt(s.slotMinTime, It(c, y)),
                    D = o.add(E, S), b = o.add(D, c);
                return {
                    dateProfile: s,
                    dateSpan: r({range: {start: D, end: b}, allDay: !1}, h.extraDateSpan),
                    dayEl: a.els[p],
                    rect: {left: a.lefts[p], right: a.rights[p], top: v, bottom: v + g},
                    layer: 0
                }
            }
            return null
        }, t
    }(Ho);

    function Gl(e, t) {
        var n = t || e, r = Ot(e, n);
        return null === r && (n = e, r = 1), {snapDuration: n, snapsPerSlot: r}
    }

    var ql = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.sliceRange = function (e, t) {
            for (var n = [], r = 0; r < t.length; r += 1) {
                var o = Vn(e, t[r]);
                o && n.push({
                    start: o.start,
                    end: o.end,
                    isStart: o.start.valueOf() === e.start.valueOf(),
                    isEnd: o.end.valueOf() === e.end.valueOf(),
                    col: r
                })
            }
            return n
        }, t
    }(Da), Yl = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildDayRanges = zt(Zl), t.slicer = new ql, t.timeColsRef = So(), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props, n = this.context, o = t.dateProfile, i = t.dayTableModel,
                a = n.options.nowIndicator, s = this.buildDayRanges(i, o, n.dateEnv);
            return yo(va, {unit: a ? "minute" : "day"}, (function (l, u) {
                return yo(jl, r({ref: e.timeColsRef}, e.slicer.sliceProps(t, o, null, n, s), {
                    forPrint: t.forPrint,
                    axis: t.axis,
                    dateProfile: o,
                    slatMetas: t.slatMetas,
                    slotDuration: t.slotDuration,
                    cells: i.cells[0],
                    tableColGroupNode: t.tableColGroupNode,
                    tableMinWidth: t.tableMinWidth,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    expandRows: t.expandRows,
                    nowDate: l,
                    nowIndicatorSegs: a && e.slicer.sliceNowDate(l, n, s),
                    todayRange: u,
                    onScrollTopRequest: t.onScrollTopRequest,
                    onSlatCoords: t.onSlatCoords
                }))
            }))
        }, t
    }(Ho);

    function Zl(e, t, n) {
        for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
            var a = i[o];
            r.push({start: n.add(a, t.slotMinTime), end: n.add(a, t.slotMaxTime)})
        }
        return r
    }

    var Xl = [{hours: 1}, {minutes: 30}, {minutes: 15}, {seconds: 30}, {seconds: 15}];

    function Kl(e, t, n, r, o) {
        for (var i = new Date(0), a = e, s = xt(0), l = n || function (e) {
            var t, n, r;
            for (t = Xl.length - 1; t >= 0; t -= 1) if (null !== (r = Ot(n = xt(Xl[t]), e)) && r > 1) return n;
            return e
        }(r), u = []; Ht(a) < Ht(t);) {
            var c = o.add(i, a), d = null !== Ot(s, l);
            u.push({
                date: c,
                time: a,
                key: c.toISOString(),
                isoTimeStr: Wt(c),
                isLabeled: d
            }), a = Pt(a, r), s = Pt(s, r)
        }
        return u
    }

    var $l = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildTimeColsModel = zt(Jl), t.buildSlatMetas = zt(Kl), t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.context, n = t.options, o = t.dateEnv, i = t.dateProfileGenerator, a = this.props,
                s = a.dateProfile, l = this.buildTimeColsModel(s, i), u = this.allDaySplitter.splitProps(a),
                c = this.buildSlatMetas(s.slotMinTime, s.slotMaxTime, n.slotLabelInterval, n.slotDuration, o),
                d = n.dayMinWidth, p = !d, f = d, h = n.dayHeaders && yo(ma, {
                    dates: l.headerDates,
                    dateProfile: s,
                    datesRepDistinctDays: !0,
                    renderIntro: p ? this.renderHeadAxis : null
                }), v = !1 !== n.allDaySlot && function (t) {
                    return yo(pl, r({}, u.allDay, {
                        dateProfile: s,
                        dayTableModel: l,
                        nextDayThreshold: n.nextDayThreshold,
                        tableMinWidth: t.tableMinWidth,
                        colGroupNode: t.tableColGroupNode,
                        renderRowIntro: p ? e.renderTableRowAxis : null,
                        showWeekNumbers: !1,
                        expandRows: !1,
                        headerAlignElRef: e.headerElRef,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: a.forPrint
                    }, e.getAllDayMaxEventProps()))
                }, g = function (t) {
                    return yo(Yl, r({}, u.timed, {
                        dayTableModel: l,
                        dateProfile: s,
                        axis: p,
                        slotDuration: n.slotDuration,
                        slatMetas: c,
                        forPrint: a.forPrint,
                        tableColGroupNode: t.tableColGroupNode,
                        tableMinWidth: t.tableMinWidth,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        onSlatCoords: e.handleSlatCoords,
                        expandRows: t.expandRows,
                        onScrollTopRequest: e.handleScrollTopRequest
                    }))
                };
            return f ? this.renderHScrollLayout(h, v, g, l.colCnt, d, c, this.state.slatCoords) : this.renderSimpleLayout(h, v, g)
        }, t
    }(bl);

    function Jl(e, t) {
        var n = new Ea(e.renderRange, t);
        return new Sa(n, !1)
    }

    var Ql = Oo({
        initialView: "timeGridWeek",
        optionRefiners: {allDaySlot: Boolean},
        views: {
            timeGrid: {
                component: $l,
                usesMinMaxTime: !0,
                allDaySlot: !0,
                slotDuration: "00:30:00",
                slotEventOverlap: !0
            },
            timeGridDay: {type: "timeGrid", duration: {days: 1}},
            timeGridWeek: {type: "timeGrid", duration: {weeks: 1}}
        }
    }), eu = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = e.dayDate, n = e.todayRange, o = this.context, i = o.theme, a = o.dateEnv,
                s = o.options, l = o.viewApi, u = $r(t, n), c = s.listDayFormat ? a.format(t, s.listDayFormat) : "",
                d = s.listDaySideFormat ? a.format(t, s.listDaySideFormat) : "", p = s.navLinks ? Qr(t) : null,
                f = r({date: a.toDate(t), view: l, text: c, sideText: d, navLinkData: p}, u),
                h = ["fc-list-day"].concat(Jr(u, i));
            return yo(Wo, {
                hookProps: f,
                classNames: s.dayHeaderClassNames,
                content: s.dayHeaderContent,
                defaultContent: tu,
                didMount: s.dayHeaderDidMount,
                willUnmount: s.dayHeaderWillUnmount
            }, (function (e, n, r, o) {
                return yo("tr", {
                    ref: e,
                    className: h.concat(n).join(" "),
                    "data-date": Lt(t)
                }, yo("th", {colSpan: 3}, yo("div", {
                    className: "fc-list-day-cushion " + i.getClass("tableCellShaded"),
                    ref: r
                }, o)))
            }))
        }, t
    }(Mo);

    function tu(e) {
        var t = e.navLinkData ? {"data-navlink": e.navLinkData, tabIndex: 0} : {};
        return yo(Do, null, e.text && yo("a", r({className: "fc-list-day-text"}, t), e.text), e.sideText && yo("a", r({className: "fc-list-day-side-text"}, t), e.sideText))
    }

    var nu = rn({hour: "numeric", minute: "2-digit", meridiem: "short"}), ru = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t.prototype.render = function () {
            var e = this.props, t = this.context, n = e.seg, r = t.options.eventTimeFormat || nu;
            return yo(Za, {
                seg: n,
                timeText: "",
                disableDragging: !0,
                disableResizing: !0,
                defaultContent: ou,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday,
                isSelected: e.isSelected,
                isDragging: e.isDragging,
                isResizing: e.isResizing,
                isDateSelecting: e.isDateSelecting
            }, (function (e, o, i, a, s) {
                return yo("tr", {
                    className: ["fc-list-event", s.event.url ? "fc-event-forced-url" : ""].concat(o).join(" "),
                    ref: e
                }, function (e, t, n) {
                    var r = n.options;
                    if (!1 !== r.displayEventTime) {
                        var o = e.eventRange.def, i = e.eventRange.instance, a = !1, s = void 0;
                        if (o.allDay ? a = !0 : An(e.eventRange.range) ? e.isStart ? s = nr(e, t, n, null, null, i.range.start, e.end) : e.isEnd ? s = nr(e, t, n, null, null, e.start, i.range.end) : a = !0 : s = nr(e, t, n), a) {
                            var l = {text: n.options.allDayText, view: n.viewApi};
                            return yo(Wo, {
                                hookProps: l,
                                classNames: r.allDayClassNames,
                                content: r.allDayContent,
                                defaultContent: iu,
                                didMount: r.allDayDidMount,
                                willUnmount: r.allDayWillUnmount
                            }, (function (e, t, n, r) {
                                return yo("td", {className: ["fc-list-event-time"].concat(t).join(" "), ref: e}, r)
                            }))
                        }
                        return yo("td", {className: "fc-list-event-time"}, s)
                    }
                    return null
                }(n, r, t), yo("td", {className: "fc-list-event-graphic"}, yo("span", {
                    className: "fc-list-event-dot",
                    style: {borderColor: s.borderColor || s.backgroundColor}
                })), yo("td", {className: "fc-list-event-title", ref: i}, a))
            }))
        }, t
    }(Mo);

    function ou(e) {
        var t = e.event, n = t.url;
        return yo("a", r({}, n ? {href: n} : {}), t.title)
    }

    function iu(e) {
        return e.text
    }

    var au = function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.computeDateVars = zt(lu), t.eventStoreToSegs = zt(t._eventStoreToSegs), t.setRootEl = function (e) {
                e ? t.context.registerInteractiveComponent(t, {el: e}) : t.context.unregisterInteractiveComponent(t)
            }, t
        }

        return n(t, e), t.prototype.render = function () {
            var e = this, t = this.props, n = this.context,
                r = ["fc-list", n.theme.getClass("table"), !1 !== n.options.stickyHeaderDates ? "fc-list-sticky" : ""],
                o = this.computeDateVars(t.dateProfile), i = o.dayDates, a = o.dayRanges,
                s = this.eventStoreToSegs(t.eventStore, t.eventUiBases, a);
            return yo(Yo, {viewSpec: n.viewSpec, elRef: this.setRootEl}, (function (n, o) {
                return yo("div", {ref: n, className: r.concat(o).join(" ")}, yo(Ia, {
                    liquid: !t.isHeightAuto,
                    overflowX: t.isHeightAuto ? "visible" : "hidden",
                    overflowY: t.isHeightAuto ? "visible" : "auto"
                }, s.length > 0 ? e.renderSegList(s, i) : e.renderEmptyMessage()))
            }))
        }, t.prototype.renderEmptyMessage = function () {
            var e = this.context, t = e.options, n = e.viewApi, r = {text: t.noEventsText, view: n};
            return yo(Wo, {
                hookProps: r,
                classNames: t.noEventsClassNames,
                content: t.noEventsContent,
                defaultContent: su,
                didMount: t.noEventsDidMount,
                willUnmount: t.noEventsWillUnmount
            }, (function (e, t, n, r) {
                return yo("div", {
                    className: ["fc-list-empty"].concat(t).join(" "),
                    ref: e
                }, yo("div", {className: "fc-list-empty-cushion", ref: n}, r))
            }))
        }, t.prototype.renderSegList = function (e, t) {
            var n = this.context, o = n.theme, i = n.options, a = function (e) {
                var t, n, r = [];
                for (t = 0; t < e.length; t += 1) (r[(n = e[t]).dayIndex] || (r[n.dayIndex] = [])).push(n);
                return r
            }(e);
            return yo(va, {unit: "day"}, (function (e, n) {
                for (var s = [], l = 0; l < a.length; l += 1) {
                    var u = a[l];
                    if (u) {
                        var c = t[l].toISOString();
                        s.push(yo(eu, {key: c, dayDate: t[l], todayRange: n}));
                        for (var d = 0, p = u = $n(u, i.eventOrder); d < p.length; d++) {
                            var f = p[d];
                            s.push(yo(ru, r({
                                key: c + ":" + f.eventRange.instance.instanceId,
                                seg: f,
                                isDragging: !1,
                                isResizing: !1,
                                isDateSelecting: !1,
                                isSelected: !1
                            }, rr(f, n, e))))
                        }
                    }
                }
                return yo("table", {className: "fc-list-table " + o.getClass("table")}, yo("tbody", null, s))
            }))
        }, t.prototype._eventStoreToSegs = function (e, t, n) {
            return this.eventRangesToSegs(Gn(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n)
        }, t.prototype.eventRangesToSegs = function (e, t) {
            for (var n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                n.push.apply(n, this.eventRangeToSegs(i, t))
            }
            return n
        }, t.prototype.eventRangeToSegs = function (e, t) {
            var n, r, o, i = this.context.dateEnv, a = this.context.options.nextDayThreshold, s = e.range,
                l = e.def.allDay, u = [];
            for (n = 0; n < t.length; n += 1) if ((r = Vn(s, t[n])) && (o = {
                component: this,
                eventRange: e,
                start: r.start,
                end: r.end,
                isStart: e.isStart && r.start.valueOf() === s.start.valueOf(),
                isEnd: e.isEnd && r.end.valueOf() === s.end.valueOf(),
                dayIndex: n
            }, u.push(o), !o.isEnd && !l && n + 1 < t.length && s.end < i.add(t[n + 1].start, a))) {
                o.end = s.end, o.isEnd = !0;
                break
            }
            return u
        }, t
    }(Ho);

    function su(e) {
        return e.text
    }

    function lu(e) {
        for (var t = ot(e.renderRange.start), n = e.renderRange.end, r = [], o = []; t < n;) r.push(t), o.push({
            start: t,
            end: $e(t, 1)
        }), t = $e(t, 1);
        return {dayDates: r, dayRanges: o}
    }

    function uu(e) {
        return !1 === e ? null : rn(e)
    }

    var cu = Oo({
        optionRefiners: {
            listDayFormat: uu,
            listDaySideFormat: uu,
            noEventsClassNames: hn,
            noEventsContent: hn,
            noEventsDidMount: hn,
            noEventsWillUnmount: hn
        },
        views: {
            list: {
                component: au,
                buttonTextKey: "list",
                listDayFormat: {month: "long", day: "numeric", year: "numeric"}
            },
            listDay: {type: "list", duration: {days: 1}, listDayFormat: {weekday: "long"}},
            listWeek: {
                type: "list",
                duration: {weeks: 1},
                listDayFormat: {weekday: "long"},
                listDaySideFormat: {month: "long", day: "numeric", year: "numeric"}
            },
            listMonth: {type: "list", duration: {month: 1}, listDaySideFormat: {weekday: "long"}},
            listYear: {type: "list", duration: {year: 1}, listDaySideFormat: {weekday: "long"}}
        }
    }), du = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }

        return n(t, e), t
    }(go);
    du.prototype.classes = {
        root: "fc-theme-bootstrap",
        table: "table-bordered",
        tableCellShaded: "table-active",
        buttonGroup: "btn-group",
        button: "btn btn-primary",
        buttonActive: "active",
        popover: "popover",
        popoverHeader: "popover-header",
        popoverContent: "popover-body"
    }, du.prototype.baseIconClass = "fa", du.prototype.iconClasses = {
        close: "fa-times",
        prev: "fa-chevron-left",
        next: "fa-chevron-right",
        prevYear: "fa-angle-double-left",
        nextYear: "fa-angle-double-right"
    }, du.prototype.rtlIconClasses = {
        prev: "fa-chevron-right",
        next: "fa-chevron-left",
        prevYear: "fa-angle-double-right",
        nextYear: "fa-angle-double-left"
    }, du.prototype.iconOverrideOption = "bootstrapFontAwesome", du.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome", du.prototype.iconOverridePrefix = "fa-";
    var pu = Oo({themeClasses: {bootstrap: du}}), fu = "https://www.googleapis.com/calendar/v3/calendars";
    var hu = Oo({
        eventSourceDefs: [{
            parseMeta: function (e) {
                var t = e.googleCalendarId;
                return !t && e.url && (t = function (e) {
                    var t;
                    if (/^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(e)) return e;
                    if ((t = /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(e)) || (t = /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(e))) return decodeURIComponent(t[1]);
                    return null
                }(e.url)), t ? {
                    googleCalendarId: t,
                    googleCalendarApiKey: e.googleCalendarApiKey,
                    googleCalendarApiBase: e.googleCalendarApiBase,
                    extraParams: e.extraParams
                } : null
            }, fetch: function (e, t, n) {
                var o = e.context, i = o.dateEnv, a = o.options, s = e.eventSource.meta,
                    l = s.googleCalendarApiKey || a.googleCalendarApiKey;
                if (l) {
                    var u = function (e) {
                        var t = e.googleCalendarApiBase;
                        t || (t = fu);
                        return t + "/" + encodeURIComponent(e.googleCalendarId) + "/events"
                    }(s), c = s.extraParams, d = "function" == typeof c ? c() : c, p = function (e, t, n, o) {
                        var i, a, s;
                        o.canComputeOffset ? (a = o.formatIso(e.start), s = o.formatIso(e.end)) : (a = $e(e.start, -1).toISOString(), s = $e(e.end, 1).toISOString());
                        i = r(r({}, n || {}), {
                            key: t,
                            timeMin: a,
                            timeMax: s,
                            singleEvents: !0,
                            maxResults: 9999
                        }), "local" !== o.timeZone && (i.timeZone = o.timeZone);
                        return i
                    }(e.range, l, d, i);
                    mi("GET", u, p, (function (e, r) {
                        var o, i;
                        e.error ? n({
                            message: "Google Calendar API: " + e.error.message,
                            errors: e.error.errors,
                            xhr: r
                        }) : t({
                            rawEvents: (o = e.items, i = p.timeZone, o.map((function (e) {
                                return function (e, t) {
                                    var n = e.htmlLink || null;
                                    n && t && (n = function (e, t) {
                                        return e.replace(/(\?.*?)?(#|$)/, (function (e, n, r) {
                                            return (n ? n + "&" : "?") + t + r
                                        }))
                                    }(n, "ctz=" + t));
                                    return {
                                        id: e.id,
                                        title: e.summary,
                                        start: e.start.dateTime || e.start.date,
                                        end: e.end.dateTime || e.end.date,
                                        url: n,
                                        location: e.location,
                                        description: e.description,
                                        attachments: e.attachments || [],
                                        extendedProps: (e.extendedProperties || {}).shared || {}
                                    }
                                }(e, i)
                            }))), xhr: r
                        })
                    }), (function (e, t) {
                        n({message: e, xhr: t})
                    }))
                } else n({message: "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"})
            }
        }],
        optionRefiners: {googleCalendarApiKey: String},
        eventSourceRefiners: {
            googleCalendarApiKey: String,
            googleCalendarId: String,
            googleCalendarApiBase: String,
            extraParams: hn
        }
    });
    return Si.push(Bs, vl, Ql, cu, pu, hu), e.BASE_OPTION_DEFAULTS = an, e.BASE_OPTION_REFINERS = on, e.BaseComponent = Mo, e.BgEvent = rs, e.BootstrapTheme = du, e.Calendar = vs, e.CalendarApi = Cr, e.CalendarContent = aa, e.CalendarDataManager = _i, e.CalendarDataProvider = Ui, e.CalendarRoot = ua, e.Component = mo, e.ContentHook = Fo, e.CustomContentRenderContext = Vo, e.DateComponent = Ho, e.DateEnv = Ir, e.DateProfileGenerator = Jo, e.DayCellContent = Qa, e.DayCellRoot = ts, e.DayGridView = fl, e.DayHeader = ma, e.DaySeriesModel = Ea, e.DayTable = pl, e.DayTableModel = Sa, e.DayTableSlicer = dl, e.DayTimeCols = Yl, e.DayTimeColsSlicer = ql, e.DayTimeColsView = $l, e.DelayedRunner = Ci, e.Draggable = Vs, e.ElementDragging = $i, e.ElementScrollController = ho, e.Emitter = co, e.EventApi = wr, e.EventRoot = Za, e.EventSourceApi = ye, e.FeaturefulElementDragging = Ts, e.Fragment = Do, e.Interaction = Yi, e.ListView = au, e.MoreLinkRoot = us, e.MountHook = Bo, e.NamedTimeZoneImpl = Li, e.NowIndicatorRoot = $a, e.NowTimer = va, e.PointerDragging = Es, e.PositionCache = po, e.RefMap = Na, e.RenderHook = Wo, e.ScrollController = fo, e.ScrollResponder = _o, e.Scroller = Ia, e.SegHierarchy = Wi, e.SimpleScrollGrid = Ya, e.Slicer = Da, e.Splitter = Xr, e.StandardEvent = Xa, e.Table = ul, e.TableDateCell = fa, e.TableDowCell = ha, e.TableView = js, e.Theme = go, e.ThirdPartyDraggable = zs, e.TimeCols = jl, e.TimeColsSlatsCoords = wl, e.TimeColsView = bl, e.ViewApi = yr, e.ViewContextType = To, e.ViewRoot = Yo, e.WeekNumberRoot = is, e.WindowScrollController = vo, e.addDays = $e, e.addDurations = Pt, e.addMs = Je, e.addWeeks = Ke, e.allowContextMenu = Ve, e.allowSelection = Le, e.applyMutationToEventStore = vr, e.applyStyle = we, e.applyStyleProp = Re, e.asCleanDays = function (e) {
        return e.years || e.months || e.milliseconds ? 0 : e.days
    }, e.asRoughMinutes = function (e) {
        return Ht(e) / 6e4
    }, e.asRoughMs = Ht, e.asRoughSeconds = function (e) {
        return Ht(e) / 1e3
    }, e.binarySearch = qi, e.buildClassNameNormalizer = jo, e.buildDayRanges = Zl, e.buildDayTableModel = hl, e.buildEntryKey = Fi, e.buildEventApis = _r, e.buildEventRangeKey = ir, e.buildHashFromArray = function (e, t) {
        for (var n = {}, r = 0; r < e.length; r += 1) {
            var o = t(e[r], r);
            n[o[0]] = o[1]
        }
        return n
    }, e.buildIsoString = Ut, e.buildNavLinkData = Qr, e.buildSegCompareObj = Jn, e.buildSegTimeText = nr, e.buildSlatMetas = Kl, e.buildTimeColsModel = Jl, e.collectFromHash = wt, e.combineEventUis = Rn,e.compareByFieldSpec = Be,e.compareByFieldSpecs = ze,e.compareNumbers = qe,e.compareObjs = bt,e.computeEarliestSegStart = ps,e.computeEdges = io,e.computeFallbackHeaderFormat = ca,e.computeHeightAndMargins = function (e) {
        return e.getBoundingClientRect().height + function (e) {
            var t = window.getComputedStyle(e);
            return parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10)
        }(e)
    },e.computeInnerRect = ao,e.computeRect = so,e.computeSegDraggable = Qn,e.computeSegEndResizable = tr,e.computeSegStartResizable = er,e.computeShrinkWidth = Ha,e.computeSmallestCellWidth = Ze,e.computeVisibleDayRange = On,e.config = Ji,e.constrainPoint = jr,e.createContext = bo,e.createDuration = xt,e.createElement = yo,e.createEmptyEventStore = yn,e.createEventInstance = ft,e.createEventUi = wn,e.createFormatter = rn,e.createPlugin = Oo,e.createPortal = Co,e.createRef = So,e.diffDates = Un,e.diffDayAndTime = tt,e.diffDays = et,e.diffPoints = qr,e.diffWeeks = Qe,e.diffWholeDays = rt,e.diffWholeWeeks = nt,e.disableCursor = Oe,e.elementClosest = Se,e.elementMatches = De,e.enableCursor = Ae,e.eventTupleToStore = gn,e.filterEventStoreDefs = Sn,e.filterHash = gt,e.findDirectChildren = function (e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1) for (var i = n[o].children, a = 0; a < i.length; a += 1) {
            var s = i[a];
            t && !De(s, t) || r.push(s)
        }
        return r
    },e.findElements = be,e.flexibleCompare = je,e.flushToDom = wo,e.formatDate = function (e, t) {
        void 0 === t && (t = {});
        var n = Lr(t), r = rn(t), o = n.createMarkerMeta(e);
        return o ? n.format(o.marker, r, {forcedTzo: o.forcedTzo}) : ""
    },e.formatDayString = Lt,e.formatIsoTimeString = Wt,e.formatRange = function (e, t, n) {
        var r = Lr("object" == typeof n && n ? n : {}), o = rn(n), i = r.createMarkerMeta(e), a = r.createMarkerMeta(t);
        return i && a ? r.formatRange(i.marker, a.marker, o, {
            forcedStartTzo: i.forcedTzo,
            forcedEndTzo: a.forcedTzo,
            isEndExclusive: n.isEndExclusive,
            defaultSeparator: an.defaultRangeSeparator
        }) : ""
    },e.getAllowYScrolling = Aa,e.getCanVGrowWithinCell = Yr,e.getClippingParents = lo,e.getDateMeta = $r,e.getDayClassNames = Jr,e.getDefaultEventEnd = hr,e.getElRoot = Te,e.getElSeg = Zn,e.getEntrySpanEnd = Vi,e.getEventClassNames = or,e.getEventTargetViaRoot = _e,e.getIsRtlScrollbarOnLeft = no,e.getRectCenter = Gr,e.getRelevantEvents = mn,e.getScrollGridClassNames = za,e.getScrollbarWidths = ro,e.getSectionClassNames = Ba,e.getSectionHasLiquidHeight = Oa,e.getSegMeta = rr,e.getSlotClassNames = function (e, t) {
        var n = ["fc-slot", "fc-slot-" + Xe[e.dow]];
        return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-slot-past"), e.isFuture && n.push("fc-slot-future")), n
    },e.getStickyFooterScrollbar = qa,e.getStickyHeaderDates = Ga,e.getUnequalProps = Dt,e.globalLocales = Nr,e.globalPlugins = Si,e.greatestDurationDenominator = At,e.groupIntersectingEntries = zi,e.guid = He,e.hasBgRendering = qn,e.hasShrinkWidth = Fa,e.identity = hn,e.interactionSettingsStore = Ki,e.interactionSettingsToStore = Xi,e.intersectRanges = Vn,e.intersectRects = Br,e.intersectSpans = ji,e.isArraysEqual = Ft,e.isColPropsEqual = La,e.isDateSelectionValid = wa,e.isDateSpansEqual = lr,e.isInt = Ye,e.isInteractionValid = Ca,e.isMultiDayRange = An,e.isPropsEqual = St,e.isPropsValid = _a,e.isValidDate = dt,e.joinSpans = Bi,e.listenBySelector = Me,e.mapHash = mt,e.memoize = zt,e.memoizeArraylike = function (e, t, n) {
        var r = this, o = [], i = [];
        return function (a) {
            for (var s = o.length, l = a.length, u = 0; u < s; u += 1) if (a[u]) {
                if (!Ft(o[u], a[u])) {
                    n && n(i[u]);
                    var c = e.apply(r, a[u]);
                    t && t(c, i[u]) || (i[u] = c)
                }
            } else n && n(i[u]);
            for (; u < l; u += 1) i[u] = e.apply(r, a[u]);
            return o = a, i.splice(l), i
        }
    },e.memoizeHashlike = function (e, t, n) {
        var r = this, o = {}, i = {};
        return function (a) {
            var s = {};
            for (var l in a) if (i[l]) if (Ft(o[l], a[l])) s[l] = i[l]; else {
                n && n(i[l]);
                var u = e.apply(r, a[l]);
                s[l] = t && t(u, i[l]) ? i[l] : u
            } else s[l] = e.apply(r, a[l]);
            return o = a, i = s, s
        }
    },e.memoizeObjArg = Bt,e.mergeEventStores = En,e.multiplyDuration = It,e.padStart = Ge,e.parseBusinessHours = Fr,e.parseClassNames = Dn,e.parseDragMeta = ea,e.parseEventDef = Nn,e.parseFieldSpecs = Fe,e.parseMarker = Pr,e.pointInsideRect = zr,e.preventContextMenu = We,e.preventDefault = ke,e.preventSelection = Ue,e.rangeContainsMarker = jn,e.rangeContainsRange = Bn,e.rangesEqual = Fn,e.rangesIntersect = zn,e.refineEventDef = Pn,e.refineProps = fn,e.removeElement = Ee,e.removeExact = function (e, t) {
        for (var n = 0, r = 0; r < e.length;) e[r] === t ? (e.splice(r, 1), n += 1) : r += 1;
        return n
    },e.render = Eo,e.renderChunkContent = Ua,e.renderFill = ns,e.renderMicroColGroup = Wa,e.renderScrollShim = ja,e.requestJson = mi,e.sanitizeShrinkWidth = Va,e.setElSeg = Yn,e.setRef = No,e.sliceEventStore = Gn,e.sliceEvents = function (e, t) {
        return Gn(e.eventStore, e.eventUiBases, e.dateProfile.activeRange, t ? e.nextDayThreshold : null).fg
    },e.sortEventSegs = $n,e.startOfDay = ot,e.translateRect = function (e, t, n) {
        return {left: e.left + t, right: e.right + t, top: e.top + n, bottom: e.bottom + n}
    },e.triggerDateSelect = pr,e.unmountComponentAtNode = Ro,e.unpromisify = uo,e.version = "5.9.0",e.whenTransitionDone = Ie,e.wholeDivideDurations = Ot,Object.defineProperty(e, "__esModule", {value: !0}),e
}({});

[].push.apply(FullCalendar.globalLocales,function(){"use strict";return[{code:"af",week:{dow:1,doy:4},buttonText:{prev:"Vorige",next:"Volgende",today:"Vandag",year:"Jaar",month:"Maand",week:"Week",day:"Dag",list:"Agenda"},allDayText:"Heeldag",moreLinkText:"Addisionele",noEventsText:"Daar is geen gebeurtenisse nie"},{code:"ar-dz",week:{dow:0,doy:4},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"ar-kw",week:{dow:0,doy:12},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"ar-ly",week:{dow:6,doy:12},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"ar-ma",week:{dow:6,doy:12},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"ar-sa",week:{dow:0,doy:6},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"ar-tn",week:{dow:1,doy:4},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"ar",week:{dow:6,doy:12},direction:"rtl",buttonText:{prev:"السابق",next:"التالي",today:"اليوم",month:"شهر",week:"أسبوع",day:"يوم",list:"أجندة"},weekText:"أسبوع",allDayText:"اليوم كله",moreLinkText:"أخرى",noEventsText:"أي أحداث لعرض"},{code:"az",week:{dow:1,doy:4},buttonText:{prev:"Əvvəl",next:"Sonra",today:"Bu Gün",month:"Ay",week:"Həftə",day:"Gün",list:"Gündəm"},weekText:"Həftə",allDayText:"Bütün Gün",moreLinkText:function(e){return"+ daha çox "+e},noEventsText:"Göstərmək üçün hadisə yoxdur"},{code:"bg",week:{dow:1,doy:7},buttonText:{prev:"назад",next:"напред",today:"днес",month:"Месец",week:"Седмица",day:"Ден",list:"График"},allDayText:"Цял ден",moreLinkText:function(e){return"+още "+e},noEventsText:"Няма събития за показване"},{code:"bn",week:{dow:0,doy:6},buttonText:{prev:"পেছনে",next:"সামনে",today:"আজ",month:"মাস",week:"সপ্তাহ",day:"দিন",list:"তালিকা"},weekText:"সপ্তাহ",allDayText:"সারাদিন",moreLinkText:function(e){return"+অন্যান্য "+e},noEventsText:"কোনো ইভেন্ট নেই"},{code:"bs",week:{dow:1,doy:7},buttonText:{prev:"Prošli",next:"Sljedeći",today:"Danas",month:"Mjesec",week:"Sedmica",day:"Dan",list:"Raspored"},weekText:"Sed",allDayText:"Cijeli dan",moreLinkText:function(e){return"+ još "+e},noEventsText:"Nema događaja za prikazivanje"},{code:"ca",week:{dow:1,doy:4},buttonText:{prev:"Anterior",next:"Següent",today:"Avui",month:"Mes",week:"Setmana",day:"Dia",list:"Agenda"},weekText:"Set",allDayText:"Tot el dia",moreLinkText:"més",noEventsText:"No hi ha esdeveniments per mostrar"},{code:"cs",week:{dow:1,doy:4},buttonText:{prev:"Dříve",next:"Později",today:"Nyní",month:"Měsíc",week:"Týden",day:"Den",list:"Agenda"},weekText:"Týd",allDayText:"Celý den",moreLinkText:function(e){return"+další: "+e},noEventsText:"Žádné akce k zobrazení"},{code:"cy",week:{dow:1,doy:4},buttonText:{prev:"Blaenorol",next:"Nesaf",today:"Heddiw",year:"Blwyddyn",month:"Mis",week:"Wythnos",day:"Dydd",list:"Rhestr"},weekText:"Wythnos",allDayText:"Trwy'r dydd",moreLinkText:"Mwy",noEventsText:"Dim digwyddiadau"},{code:"da",week:{dow:1,doy:4},buttonText:{prev:"Forrige",next:"Næste",today:"I dag",month:"Måned",week:"Uge",day:"Dag",list:"Agenda"},weekText:"Uge",allDayText:"Hele dagen",moreLinkText:"flere",noEventsText:"Ingen arrangementer at vise"},{code:"de-at",week:{dow:1,doy:4},buttonText:{prev:"Zurück",next:"Vor",today:"Heute",year:"Jahr",month:"Monat",week:"Woche",day:"Tag",list:"Terminübersicht"},weekText:"KW",allDayText:"Ganztägig",moreLinkText:function(e){return"+ weitere "+e},noEventsText:"Keine Ereignisse anzuzeigen"},{code:"de",week:{dow:1,doy:4},buttonText:{prev:"Zurück",next:"Vor",today:"Heute",year:"Jahr",month:"Monat",week:"Woche",day:"Tag",list:"Terminübersicht"},weekText:"KW",allDayText:"Ganztägig",moreLinkText:function(e){return"+ weitere "+e},noEventsText:"Keine Ereignisse anzuzeigen"},{code:"el",week:{dow:1,doy:4},buttonText:{prev:"Προηγούμενος",next:"Επόμενος",today:"Σήμερα",month:"Μήνας",week:"Εβδομάδα",day:"Ημέρα",list:"Ατζέντα"},weekText:"Εβδ",allDayText:"Ολοήμερο",moreLinkText:"περισσότερα",noEventsText:"Δεν υπάρχουν γεγονότα προς εμφάνιση"},{code:"en-au",week:{dow:1,doy:4}},{code:"en-gb",week:{dow:1,doy:4}},{code:"en-nz",week:{dow:1,doy:4}},{code:"eo",week:{dow:1,doy:4},buttonText:{prev:"Antaŭa",next:"Sekva",today:"Hodiaŭ",month:"Monato",week:"Semajno",day:"Tago",list:"Tagordo"},weekText:"Sm",allDayText:"Tuta tago",moreLinkText:"pli",noEventsText:"Neniuj eventoj por montri"},{code:"es",week:{dow:0,doy:6},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Agenda"},weekText:"Sm",allDayText:"Todo el día",moreLinkText:"más",noEventsText:"No hay eventos para mostrar"},{code:"es",week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Sig",today:"Hoy",month:"Mes",week:"Semana",day:"Día",list:"Agenda"},weekText:"Sm",allDayText:"Todo el día",moreLinkText:"más",noEventsText:"No hay eventos para mostrar"},{code:"et",week:{dow:1,doy:4},buttonText:{prev:"Eelnev",next:"Järgnev",today:"Täna",month:"Kuu",week:"Nädal",day:"Päev",list:"Päevakord"},weekText:"näd",allDayText:"Kogu päev",moreLinkText:function(e){return"+ veel "+e},noEventsText:"Kuvamiseks puuduvad sündmused"},{code:"eu",week:{dow:1,doy:7},buttonText:{prev:"Aur",next:"Hur",today:"Gaur",month:"Hilabetea",week:"Astea",day:"Eguna",list:"Agenda"},weekText:"As",allDayText:"Egun osoa",moreLinkText:"gehiago",noEventsText:"Ez dago ekitaldirik erakusteko"},{code:"fa",week:{dow:6,doy:12},direction:"rtl",buttonText:{prev:"قبلی",next:"بعدی",today:"امروز",month:"ماه",week:"هفته",day:"روز",list:"برنامه"},weekText:"هف",allDayText:"تمام روز",moreLinkText:function(e){return"بیش از "+e},noEventsText:"هیچ رویدادی به نمایش"},{code:"fi",week:{dow:1,doy:4},buttonText:{prev:"Edellinen",next:"Seuraava",today:"Tänään",month:"Kuukausi",week:"Viikko",day:"Päivä",list:"Tapahtumat"},weekText:"Vk",allDayText:"Koko päivä",moreLinkText:"lisää",noEventsText:"Ei näytettäviä tapahtumia"},{code:"fr",buttonText:{prev:"Précédent",next:"Suivant",today:"Aujourd'hui",year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},weekText:"Sem.",allDayText:"Toute la journée",moreLinkText:"en plus",noEventsText:"Aucun événement à afficher"},{code:"fr-ch",week:{dow:1,doy:4},buttonText:{prev:"Précédent",next:"Suivant",today:"Courant",year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Mon planning"},weekText:"Sm",allDayText:"Toute la journée",moreLinkText:"en plus",noEventsText:"Aucun événement à afficher"},{code:"fr",week:{dow:1,doy:4},buttonText:{prev:"Précédent",next:"Suivant",today:"Aujourd'hui",year:"Année",month:"Mois",week:"Semaine",day:"Jour",list:"Planning"},weekText:"Sem.",allDayText:"Toute la journée",moreLinkText:"en plus",noEventsText:"Aucun événement à afficher"},{code:"gl",week:{dow:1,doy:4},buttonText:{prev:"Ant",next:"Seg",today:"Hoxe",month:"Mes",week:"Semana",day:"Día",list:"Axenda"},weekText:"Sm",allDayText:"Todo o día",moreLinkText:"máis",noEventsText:"Non hai eventos para amosar"},{code:"he",direction:"rtl",buttonText:{prev:"הקודם",next:"הבא",today:"היום",month:"חודש",week:"שבוע",day:"יום",list:"סדר יום"},allDayText:"כל היום",moreLinkText:"אחר",noEventsText:"אין אירועים להצגה",weekText:"שבוע"},{code:"hi",week:{dow:0,doy:6},buttonText:{prev:"पिछला",next:"अगला",today:"आज",month:"महीना",week:"सप्ताह",day:"दिन",list:"कार्यसूची"},weekText:"हफ्ता",allDayText:"सभी दिन",moreLinkText:function(e){return"+अधिक "+e},noEventsText:"कोई घटनाओं को प्रदर्शित करने के लिए"},{code:"hr",week:{dow:1,doy:7},buttonText:{prev:"Prijašnji",next:"Sljedeći",today:"Danas",month:"Mjesec",week:"Tjedan",day:"Dan",list:"Raspored"},weekText:"Tje",allDayText:"Cijeli dan",moreLinkText:function(e){return"+ još "+e},noEventsText:"Nema događaja za prikaz"},{code:"hu",week:{dow:1,doy:4},buttonText:{prev:"vissza",next:"előre",today:"ma",month:"Hónap",week:"Hét",day:"Nap",list:"Lista"},weekText:"Hét",allDayText:"Egész nap",moreLinkText:"további",noEventsText:"Nincs megjeleníthető esemény"},{code:"hy-am",week:{dow:1,doy:4},buttonText:{prev:"Նախորդ",next:"Հաջորդ",today:"Այսօր",month:"Ամիս",week:"Շաբաթ",day:"Օր",list:"Օրվա ցուցակ"},weekText:"Շաբ",allDayText:"Ամբողջ օր",moreLinkText:function(e){return"+ ևս "+e},noEventsText:"Բացակայում է իրադարձությունը ցուցադրելու"},{code:"id",week:{dow:1,doy:7},buttonText:{prev:"mundur",next:"maju",today:"hari ini",month:"Bulan",week:"Minggu",day:"Hari",list:"Agenda"},weekText:"Mg",allDayText:"Sehari penuh",moreLinkText:"lebih",noEventsText:"Tidak ada acara untuk ditampilkan"},{code:"is",week:{dow:1,doy:4},buttonText:{prev:"Fyrri",next:"Næsti",today:"Í dag",month:"Mánuður",week:"Vika",day:"Dagur",list:"Dagskrá"},weekText:"Vika",allDayText:"Allan daginn",moreLinkText:"meira",noEventsText:"Engir viðburðir til að sýna"},{code:"it",week:{dow:1,doy:4},buttonText:{prev:"Prec",next:"Succ",today:"Oggi",month:"Mese",week:"Settimana",day:"Giorno",list:"Agenda"},weekText:"Sm",allDayText:"Tutto il giorno",moreLinkText:function(e){return"+altri "+e},noEventsText:"Non ci sono eventi da visualizzare"},{code:"ja",buttonText:{prev:"前",next:"次",today:"今日",month:"月",week:"週",day:"日",list:"予定リスト"},weekText:"週",allDayText:"終日",moreLinkText:function(e){return"他 "+e+" 件"},noEventsText:"表示する予定はありません"},{code:"ka",week:{dow:1,doy:7},buttonText:{prev:"წინა",next:"შემდეგი",today:"დღეს",month:"თვე",week:"კვირა",day:"დღე",list:"დღის წესრიგი"},weekText:"კვ",allDayText:"მთელი დღე",moreLinkText:function(e){return"+ კიდევ "+e},noEventsText:"ღონისძიებები არ არის"},{code:"kk",week:{dow:1,doy:7},buttonText:{prev:"Алдыңғы",next:"Келесі",today:"Бүгін",month:"Ай",week:"Апта",day:"Күн",list:"Күн тәртібі"},weekText:"Не",allDayText:"Күні бойы",moreLinkText:function(e){return"+ тағы "+e},noEventsText:"Көрсету үшін оқиғалар жоқ"},{code:"km",week:{dow:1,doy:4},buttonText:{prev:"មុន",next:"បន្ទាប់",today:"ថ្ងៃនេះ",year:"ឆ្នាំ",month:"ខែ",week:"សប្តាហ៍",day:"ថ្ងៃ",list:"បញ្ជី"},weekText:"សប្តាហ៍",allDayText:"ពេញមួយថ្ងៃ",moreLinkText:"ច្រើនទៀត",noEventsText:"គ្មានព្រឹត្តិការណ៍ត្រូវបង្ហាញ"},{code:"ko",buttonText:{prev:"이전달",next:"다음달",today:"오늘",month:"월",week:"주",day:"일",list:"일정목록"},weekText:"주",allDayText:"종일",moreLinkText:"개",noEventsText:"일정이 없습니다"},{code:"ku",week:{dow:6,doy:12},direction:"rtl",buttonText:{prev:"پێشتر",next:"دواتر",today:"ئەمڕو",month:"مانگ",week:"هەفتە",day:"ڕۆژ",list:"بەرنامە"},weekText:"هەفتە",allDayText:"هەموو ڕۆژەکە",moreLinkText:"زیاتر",noEventsText:"هیچ ڕووداوێك نیە"},{code:"lb",week:{dow:1,doy:4},buttonText:{prev:"Zréck",next:"Weider",today:"Haut",month:"Mount",week:"Woch",day:"Dag",list:"Terminiwwersiicht"},weekText:"W",allDayText:"Ganzen Dag",moreLinkText:"méi",noEventsText:"Nee Evenementer ze affichéieren"},{code:"lt",week:{dow:1,doy:4},buttonText:{prev:"Atgal",next:"Pirmyn",today:"Šiandien",month:"Mėnuo",week:"Savaitė",day:"Diena",list:"Darbotvarkė"},weekText:"SAV",allDayText:"Visą dieną",moreLinkText:"daugiau",noEventsText:"Nėra įvykių rodyti"},{code:"lv",week:{dow:1,doy:4},buttonText:{prev:"Iepr.",next:"Nāk.",today:"Šodien",month:"Mēnesis",week:"Nedēļa",day:"Diena",list:"Dienas kārtība"},weekText:"Ned.",allDayText:"Visu dienu",moreLinkText:function(e){return"+vēl "+e},noEventsText:"Nav notikumu"},{code:"mk",buttonText:{prev:"претходно",next:"следно",today:"Денес",month:"Месец",week:"Недела",day:"Ден",list:"График"},weekText:"Сед",allDayText:"Цел ден",moreLinkText:function(e){return"+повеќе "+e},noEventsText:"Нема настани за прикажување"},{code:"ms",week:{dow:1,doy:7},buttonText:{prev:"Sebelum",next:"Selepas",today:"hari ini",month:"Bulan",week:"Minggu",day:"Hari",list:"Agenda"},weekText:"Mg",allDayText:"Sepanjang hari",moreLinkText:function(e){return"masih ada "+e+" acara"},noEventsText:"Tiada peristiwa untuk dipaparkan"},{code:"nb",week:{dow:1,doy:4},buttonText:{prev:"Forrige",next:"Neste",today:"I dag",month:"Måned",week:"Uke",day:"Dag",list:"Agenda"},weekText:"Uke",allDayText:"Hele dagen",moreLinkText:"til",noEventsText:"Ingen hendelser å vise"},{code:"ne",week:{dow:7,doy:1},buttonText:{prev:"अघिल्लो",next:"अर्को",today:"आज",month:"महिना",week:"हप्ता",day:"दिन",list:"सूची"},weekText:"हप्ता",allDayText:"दिनभरि",moreLinkText:"थप लिंक",noEventsText:"देखाउनको लागि कुनै घटनाहरू छैनन्"},{code:"nl",week:{dow:1,doy:4},buttonText:{prev:"Vorige",next:"Volgende",today:"Vandaag",year:"Jaar",month:"Maand",week:"Week",day:"Dag",list:"Agenda"},allDayText:"Hele dag",moreLinkText:"extra",noEventsText:"Geen evenementen om te laten zien"},{code:"nn",week:{dow:1,doy:4},buttonText:{prev:"Førre",next:"Neste",today:"I dag",month:"Månad",week:"Veke",day:"Dag",list:"Agenda"},weekText:"Veke",allDayText:"Heile dagen",moreLinkText:"til",noEventsText:"Ingen hendelser å vise"},{code:"pl",week:{dow:1,doy:4},buttonText:{prev:"Poprzedni",next:"Następny",today:"Dziś",month:"Miesiąc",week:"Tydzień",day:"Dzień",list:"Plan dnia"},weekText:"Tydz",allDayText:"Cały dzień",moreLinkText:"więcej",noEventsText:"Brak wydarzeń do wyświetlenia"},{code:"pt-br",buttonText:{prev:"Anterior",next:"Próximo",today:"Hoje",month:"Mês",week:"Semana",day:"Dia",list:"Lista"},weekText:"Sm",allDayText:"dia inteiro",moreLinkText:function(e){return"mais +"+e},noEventsText:"Não há eventos para mostrar"},{code:"pt",week:{dow:1,doy:4},buttonText:{prev:"Anterior",next:"Seguinte",today:"Hoje",month:"Mês",week:"Semana",day:"Dia",list:"Agenda"},weekText:"Sem",allDayText:"Todo o dia",moreLinkText:"mais",noEventsText:"Não há eventos para mostrar"},{code:"ro",week:{dow:1,doy:7},buttonText:{prev:"precedentă",next:"următoare",today:"Azi",month:"Lună",week:"Săptămână",day:"Zi",list:"Agendă"},weekText:"Săpt",allDayText:"Toată ziua",moreLinkText:function(e){return"+alte "+e},noEventsText:"Nu există evenimente de afișat"},{code:"ru",week:{dow:1,doy:4},buttonText:{prev:"Пред",next:"След",today:"Сегодня",month:"Месяц",week:"Неделя",day:"День",list:"Повестка дня"},weekText:"Нед",allDayText:"Весь день",moreLinkText:function(e){return"+ ещё "+e},noEventsText:"Нет событий для отображения"},{code:"sk",week:{dow:1,doy:4},buttonText:{prev:"Predchádzajúci",next:"Nasledujúci",today:"Dnes",month:"Mesiac",week:"Týždeň",day:"Deň",list:"Rozvrh"},weekText:"Ty",allDayText:"Celý deň",moreLinkText:function(e){return"+ďalšie: "+e},noEventsText:"Žiadne akcie na zobrazenie"},{code:"sl",week:{dow:1,doy:7},buttonText:{prev:"Prejšnji",next:"Naslednji",today:"Trenutni",month:"Mesec",week:"Teden",day:"Dan",list:"Dnevni red"},weekText:"Teden",allDayText:"Ves dan",moreLinkText:"več",noEventsText:"Ni dogodkov za prikaz"},{code:"sm",buttonText:{prev:"Talu ai",next:"Mulimuli atu",today:"Aso nei",month:"Masina",week:"Vaiaso",day:"Aso",list:"Faasologa"},weekText:"Vaiaso",allDayText:"Aso atoa",moreLinkText:"sili atu",noEventsText:"Leai ni mea na tutupu"},{code:"sq",week:{dow:1,doy:4},buttonText:{prev:"mbrapa",next:"Përpara",today:"sot",month:"Muaj",week:"Javë",day:"Ditë",list:"Listë"},weekText:"Ja",allDayText:"Gjithë ditën",moreLinkText:function(e){return"+më tepër "+e},noEventsText:"Nuk ka evente për të shfaqur"},{code:"sr-cyrl",week:{dow:1,doy:7},buttonText:{prev:"Претходна",next:"следећи",today:"Данас",month:"Месец",week:"Недеља",day:"Дан",list:"Планер"},weekText:"Сед",allDayText:"Цео дан",moreLinkText:function(e){return"+ још "+e},noEventsText:"Нема догађаја за приказ"},{code:"sr",week:{dow:1,doy:7},buttonText:{prev:"Prethodna",next:"Sledeći",today:"Danas",month:"Mеsеc",week:"Nеdеlja",day:"Dan",list:"Planеr"},weekText:"Sed",allDayText:"Cеo dan",moreLinkText:function(e){return"+ još "+e},noEventsText:"Nеma događaja za prikaz"},{code:"sv",week:{dow:1,doy:4},buttonText:{prev:"Förra",next:"Nästa",today:"Idag",month:"Månad",week:"Vecka",day:"Dag",list:"Program"},weekText:"v.",allDayText:"Heldag",moreLinkText:"till",noEventsText:"Inga händelser att visa"},{code:"ta-in",week:{dow:1,doy:4},buttonText:{prev:"முந்தைய",next:"அடுத்தது",today:"இன்று",month:"மாதம்",week:"வாரம்",day:"நாள்",list:"தினசரி அட்டவணை"},weekText:"வாரம்",allDayText:"நாள் முழுவதும்",moreLinkText:function(e){return"+ மேலும் "+e},noEventsText:"காண்பிக்க நிகழ்வுகள் இல்லை"},{code:"th",week:{dow:1,doy:4},buttonText:{prev:"ก่อนหน้า",next:"ถัดไป",prevYear:"ปีก่อนหน้า",nextYear:"ปีถัดไป",year:"ปี",today:"วันนี้",month:"เดือน",week:"สัปดาห์",day:"วัน",list:"กำหนดการ"},weekText:"สัปดาห์",allDayText:"ตลอดวัน",moreLinkText:"เพิ่มเติม",noEventsText:"ไม่มีกิจกรรมที่จะแสดง"},{code:"tr",week:{dow:1,doy:7},buttonText:{prev:"geri",next:"ileri",today:"bugün",month:"Ay",week:"Hafta",day:"Gün",list:"Ajanda"},weekText:"Hf",allDayText:"Tüm gün",moreLinkText:"daha fazla",noEventsText:"Gösterilecek etkinlik yok"},{code:"ug",buttonText:{month:"ئاي",week:"ھەپتە",day:"كۈن",list:"كۈنتەرتىپ"},allDayText:"پۈتۈن كۈن"},{code:"uk",week:{dow:1,doy:7},buttonText:{prev:"Попередній",next:"далі",today:"Сьогодні",month:"Місяць",week:"Тиждень",day:"День",list:"Порядок денний"},weekText:"Тиж",allDayText:"Увесь день",moreLinkText:function(e){return"+ще "+e+"..."},noEventsText:"Немає подій для відображення"},{code:"uz",buttonText:{month:"Oy",week:"Xafta",day:"Kun",list:"Kun tartibi"},allDayText:"Kun bo'yi",moreLinkText:function(e){return"+ yana "+e},noEventsText:"Ko'rsatish uchun voqealar yo'q"},{code:"vi",week:{dow:1,doy:4},buttonText:{prev:"Trước",next:"Tiếp",today:"Hôm nay",month:"Tháng",week:"Tuần",day:"Ngày",list:"Lịch biểu"},weekText:"Tu",allDayText:"Cả ngày",moreLinkText:function(e){return"+ thêm "+e},noEventsText:"Không có sự kiện để hiển thị"},{code:"zh-cn",week:{dow:1,doy:4},buttonText:{prev:"上月",next:"下月",today:"今天",month:"月",week:"周",day:"日",list:"日程"},weekText:"周",allDayText:"全天",moreLinkText:function(e){return"另外 "+e+" 个"},noEventsText:"没有事件显示"},{code:"zh-tw",buttonText:{prev:"上月",next:"下月",today:"今天",month:"月",week:"週",day:"天",list:"活動列表"},weekText:"周",allDayText:"整天",moreLinkText:"顯示更多",noEventsText:"没有任何活動"}]}());

$(document).ready(function () {
    $(".basic-alert").on("click", function () {
        Swal.fire({title: "Any fool can use a computer", confirmButtonClass: "btn btn-primary", buttonsStyling: !1})
    }), $(".with-title").on("click", function () {
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".footer-alert").on("click", function () {
        Swal.fire({
            type: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href = "javascript:void(0);">Why do I have this issue?</a>',
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".html-alert").on("click", function () {
        Swal.fire({
            title: "<strong>HTML <u>example</u></strong>",
            type: "info",
            html: 'You can use <b>bold text</b>, <a href="https://pixinvent.com/" target="_blank">links</a> and other HTML tags',
            showCloseButton: !0,
            showCancelButton: !0,
            focusConfirm: !1,
            confirmButtonText: '<i class="fa fa-thumbs-o-up"></i> Great!',
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: '<i class="fa fa-thumbs-o-down"></i>',
            cancelButtonAriaLabel: "Thumbs down",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1,
            cancelButtonClass: "btn btn-danger ml-1"
        })
    }), $(".position-top-start").on("click", function () {
        Swal.fire({
            position: "top-start",
            type: "success",
            title: "Your work has been saved",
            showConfirmButton: !1,
            timer: 1500,
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".position-top-end").on("click", function () {
        Swal.fire({
            position: "top-end",
            type: "success",
            title: "Your work has been saved",
            showConfirmButton: !1,
            timer: 1500,
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".position-bottom-start").on("click", function () {
        Swal.fire({
            position: "bottom-start",
            type: "success",
            title: "Your work has been saved",
            showConfirmButton: !1,
            timer: 1500,
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".position-bottom-end").on("click", function () {
        Swal.fire({
            position: "bottom-end",
            type: "success",
            title: "Your work has been saved",
            showConfirmButton: !1,
            timer: 1500,
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".bounce-in-animation").on("click", function () {
        Swal.fire({
            title: "Bounce In Animation",
            animation: !1,
            customClass: "animated bounceIn",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".fade-in-animation").on("click", function () {
        Swal.fire({
            title: "Fade In Animation",
            animation: !1,
            customClass: "animated fadeIn",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".flip-x-animation").on("click", function () {
        Swal.fire({
            title: "Flip In Animation",
            animation: !1,
            customClass: "animated flipInX",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".tada-animation").on("click", function () {
        Swal.fire({
            title: "Tada Animation",
            animation: !1,
            customClass: "animated tada",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".shake-animation").on("click", function () {
        Swal.fire({
            title: "Shake Animation",
            animation: !1,
            customClass: "animated shake",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".type-success").on("click", function () {
        Swal.fire({
            title: "Bien Hecho!",
            text: "El formulario se ah guadado",
            type: "success",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".type-info").on("click", function () {
        Swal.fire({
            title: "Info!",
            text: "You clicked the button!",
            type: "info",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".type-warning").on("click", function () {
        Swal.fire({
            title: "Warning!",
            text: " You clicked the button!",
            type: "warning",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".type-error").on("click", function () {
        Swal.fire({
            title: "Error!",
            text: " You clicked the button!",
            type: "error",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".custom-icon").on("click", function () {
        Swal.fire({
            title: "Sweet!",
            text: "Modal with a custom image.",
            imageUrl: "../app-assets/img/gallery/13.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
            animation: !1,
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".auto-close").on("click", function () {
        var t;
        Swal.fire({
            title: "Auto close alert!",
            html: "I will close in <strong></strong> seconds.",
            timer: 2e3,
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1,
            onBeforeOpen: function () {
                Swal.showLoading(), t = setInterval(function () {
                    Swal.getContent().querySelector("strong").textContent = Swal.getTimerLeft()
                }, 100)
            },
            onClose: function () {
                clearInterval(t)
            }
        }).then(function (t) {
            t.dismiss === Swal.DismissReason.timer && console.log("I was closed by the timer")
        })
    }), $(".outside-click").on("click", function () {
        Swal.fire({
            title: "Outside click is disabled!",
            text: "This is a cool message!",
            allowOutsideClick: !1,
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1
        })
    }), $(".prompt-function").on("click", function () {
        Swal.mixin({
            input: "text",
            confirmButtonText: "Next &rarr;",
            showCancelButton: !0,
            progressSteps: ["1", "2", "3"],
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1,
            cancelButtonClass: "btn btn-danger ml-1"
        }).queue([{
            title: "Question 1",
            text: "Chaining swal2 modals is easy"
        }, "Question 2", "Question 3"]).then(function (t) {
            t.value && Swal.fire({
                title: "All done!",
                html: "Your answers: <pre><code>" + JSON.stringify(t.value) + "</code></pre>",
                confirmButtonText: "Lovely!"
            })
        })
    }), $(".ajax-request").on("click", function () {
        Swal.fire({
            title: "Search for a user",
            input: "text",
            confirmButtonClass: "btn btn-primary",
            buttonsStyling: !1,
            inputAttributes: {autocapitalize: "off"},
            showCancelButton: !0,
            confirmButtonText: "Look up",
            showLoaderOnConfirm: !0,
            cancelButtonClass: "btn btn-danger ml-1",
            preConfirm: function (t) {
                return fetch("//api.github.com/users/" + t).then(function (t) {
                    if (!t.ok) throw console.log(t), new Error(t.statusText);
                    return t.json()
                }).catch(function (t) {
                    Swal.showValidationMessage("Request failed:  " + t)
                })
            },
            allowOutsideClick: function () {
                Swal.isLoading()
            }
        }).then(function (t) {
            t.value && Swal.fire({title: t.value.login + "'s avatar", imageUrl: t.value.avatar_url})
        })
    }), $(".confirm-text").on("click", function () {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#2F8BE6",
            cancelButtonColor: "#F55252",
            confirmButtonText: "Your text here!",
            confirmButtonClass: "btn btn-primary",
            cancelButtonClass: "btn btn-danger ml-1",
            buttonsStyling: !1
        }).then(function (t) {
            t.value && Swal.fire({
                type: "success",
                title: "Deleted!",
                text: "Your file has been deleted.",
                confirmButtonClass: "btn btn-success"
            })
        })
    }), $(".confirm-color").on("click", function () {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#2F8BE6",
            cancelButtonColor: "#F55252",
            confirmButtonText: "Yes, delete it!",
            confirmButtonClass: "btn btn-warning",
            cancelButtonClass: "btn btn-danger ml-1",
            buttonsStyling: !1
        }).then(function (t) {
            t.value ? Swal.fire({
                type: "success",
                title: "Deleted!",
                text: "Your imaginary file has been deleted.",
                confirmButtonClass: "btn btn-success"
            }) : t.dismiss === Swal.DismissReason.cancel && Swal.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                type: "error",
                confirmButtonClass: "btn btn-success"
            })
        })
    })
});

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Sweetalert2=e()}(this,function(){"use strict";function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e,n){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&u(i,n.prototype),i}).apply(null,arguments)}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t,e,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function p(e){return Object.keys(e).map(function(t){return e[t]})}function m(t){return Array.prototype.slice.call(t)}function g(t){console.error("".concat(e," ").concat(t))}function h(t,e){!function(t){-1===n.indexOf(t)&&(n.push(t),y(t))}('"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'))}function v(t){return t&&Promise.resolve(t)===t}function t(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e}function b(e,t,n){m(e.classList).forEach(function(t){-1===p(k).indexOf(t)&&-1===p(B).indexOf(t)&&e.classList.remove(t)}),t&&t[n]&&nt(e,t[n])}var e="SweetAlert2:",y=function(t){console.warn("".concat(e," ").concat(t))},n=[],w=function(t){return"function"==typeof t?t():t},C=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),k=t(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl"]),B=t(["success","warning","info","question","error"]),x={previousBodyPadding:null},S=function(t,e){return t.classList.contains(e)};function P(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return it(t,k[e]);case"checkbox":return t.querySelector(".".concat(k.checkbox," input"));case"radio":return t.querySelector(".".concat(k.radio," input:checked"))||t.querySelector(".".concat(k.radio," input:first-child"));case"range":return t.querySelector(".".concat(k.range," input"));default:return it(t,k.input)}}function A(t){if(t.focus(),"file"!==t.type){var e=t.value;t.value="",t.value=e}}function L(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function E(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?n+"px":n:t.style.removeProperty(e)}function T(t,e){var n=1<arguments.length&&void 0!==e?e:"flex";t.style.opacity="",t.style.display=n}function O(t){t.style.opacity="",t.style.display="none"}function M(t,e,n){e?T(t,n):O(t)}function V(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))}function j(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),o=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<n||0<o}function q(){return document.body.querySelector("."+k.container)}function H(t){var e=q();return e?e.querySelector(t):null}function I(t){return H("."+t)}function R(){var t=rt();return m(t.querySelectorAll("."+k.icon))}function N(){var t=R().filter(function(t){return V(t)});return t.length?t[0]:null}function D(){return I(k.title)}function U(){return I(k.content)}function _(){return I(k.image)}function z(){return I(k["progress-steps"])}function W(){return I(k["validation-message"])}function K(){return H("."+k.actions+" ."+k.confirm)}function F(){return H("."+k.actions+" ."+k.cancel)}function Z(){return I(k.actions)}function Q(){return I(k.header)}function Y(){return I(k.footer)}function $(){return I(k.close)}function J(){var t=m(rt().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=m(rt().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return V(t)})}function X(){return"undefined"==typeof window||"undefined"==typeof document}function G(t){ce.isVisible()&&et!==t.target.value&&ce.resetValidationMessage(),et=t.target.value}function tt(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===f(t)?lt(e,t):t&&(e.innerHTML=t)}var et,nt=function(t,e){L(t,e,!0)},ot=function(t,e){L(t,e,!1)},it=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(S(t.childNodes[n],e))return t.childNodes[n]},rt=function(){return I(k.popup)},at=function(){return!st()&&!document.body.classList.contains(k["no-backdrop"])},st=function(){return document.body.classList.contains(k["toast-shown"])},ut='\n <div aria-labelledby="'.concat(k.title,'" aria-describedby="').concat(k.content,'" class="').concat(k.popup,'" tabindex="-1">\n   <div class="').concat(k.header,'">\n     <ul class="').concat(k["progress-steps"],'"></ul>\n     <div class="').concat(k.icon," ").concat(B.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(k.icon," ").concat(B.question,'"></div>\n     <div class="').concat(k.icon," ").concat(B.warning,'"></div>\n     <div class="').concat(k.icon," ").concat(B.info,'"></div>\n     <div class="').concat(k.icon," ").concat(B.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(k.image,'" />\n     <h2 class="').concat(k.title,'" id="').concat(k.title,'"></h2>\n     <button type="button" class="').concat(k.close,'">&times;</button>\n   </div>\n   <div class="').concat(k.content,'">\n     <div id="').concat(k.content,'"></div>\n     <input class="').concat(k.input,'" />\n     <input type="file" class="').concat(k.file,'" />\n     <div class="').concat(k.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(k.select,'"></select>\n     <div class="').concat(k.radio,'"></div>\n     <label for="').concat(k.checkbox,'" class="').concat(k.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(k.label,'"></span>\n     </label>\n     <textarea class="').concat(k.textarea,'"></textarea>\n     <div class="').concat(k["validation-message"],'" id="').concat(k["validation-message"],'"></div>\n   </div>\n   <div class="').concat(k.actions,'">\n     <button type="button" class="').concat(k.confirm,'">OK</button>\n     <button type="button" class="').concat(k.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(k.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),ct=function(t){if(function(){var t=q();t&&(t.parentNode.removeChild(t),ot([document.documentElement,document.body],[k["no-backdrop"],k["toast-shown"],k["has-column"]]))}(),X())g("SweetAlert2 requires document to initialize");else{var e=document.createElement("div");e.className=k.container,e.innerHTML=ut;var n=function(t){return"string"==typeof t?document.querySelector(t):t}(t.target);n.appendChild(e),function(t){var e=rt();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")}(t),function(t){"rtl"===window.getComputedStyle(t).direction&&nt(q(),k.rtl)}(n),function(){var t=U(),e=it(t,k.input),n=it(t,k.file),o=t.querySelector(".".concat(k.range," input")),i=t.querySelector(".".concat(k.range," output")),r=it(t,k.select),a=t.querySelector(".".concat(k.checkbox," input")),s=it(t,k.textarea);e.oninput=G,n.onchange=G,r.onchange=G,a.onchange=G,s.oninput=G,o.oninput=function(t){G(t),i.value=o.value},o.onchange=function(t){G(t),o.nextSibling.value=o.value}}()}},lt=function(t,e){if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},dt=function(){if(X())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(e.hasOwnProperty(n)&&void 0!==t.style[n])return e[n];return!1}();function pt(t,e,n){M(t,n["showC"+e.substring(1)+"Button"],"inline-block"),t.innerHTML=n[e+"ButtonText"],t.setAttribute("aria-label",n[e+"ButtonAriaLabel"]),t.className=k[e],b(t,n.customClass,e+"Button"),nt(t,n[e+"ButtonClass"])}function ft(t,e){var n=Z(),o=K(),i=F();e.showConfirmButton||e.showCancelButton?T(n):O(n),b(n,e.customClass,"actions"),pt(o,"confirm",e),pt(i,"cancel",e),e.buttonsStyling?function(t,e,n){nt([t,e],k.styled),n.confirmButtonColor&&(t.style.backgroundColor=n.confirmButtonColor),n.cancelButtonColor&&(e.style.backgroundColor=n.cancelButtonColor);var o=window.getComputedStyle(t).getPropertyValue("background-color");t.style.borderLeftColor=o,t.style.borderRightColor=o}(o,i,e):(ot([o,i],k.styled),o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor="",i.style.backgroundColor=i.style.borderLeftColor=i.style.borderRightColor="")}function mt(t,e){var n=q();n&&(function(t,e){"string"==typeof e?t.style.background=e:e||nt([document.documentElement,document.body],k["no-backdrop"])}(n,e.backdrop),!e.backdrop&&e.allowOutsideClick&&y('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),function(t,e){e in k?nt(t,k[e]):(y('The "position" parameter is not valid, defaulting to "center"'),nt(t,k.center))}(n,e.position),function(t,e){if(e&&"string"==typeof e){var n="grow-"+e;n in k&&nt(t,k[n])}}(n,e.grow),b(n,e.customClass,"container"),e.customContainerClass&&nt(n,e.customContainerClass))}function gt(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}var ht={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},vt=function(t,e){var n=P(U(),t);if(n)for(var o in function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},bt=function(t,e,n){t.className=e,n.inputClass&&nt(t,n.inputClass),n.customClass&&nt(t,n.customClass.input)},yt={};yt.text=yt.email=yt.password=yt.number=yt.tel=yt.url=function(t){var e=it(U(),k.input);return"string"==typeof t.inputValue||"number"==typeof t.inputValue?e.value=t.inputValue:v(t.inputValue)||y('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(f(t.inputValue),'"')),gt(e,t),e.type=t.input,e},yt.file=function(t){var e=it(U(),k.file);return gt(e,t),e.type=t.input,e},yt.range=function(t){var e=it(U(),k.range),n=e.querySelector("input"),o=e.querySelector("output");return n.value=t.inputValue,n.type=t.input,o.value=t.inputValue,e},yt.select=function(t){var e=it(U(),k.select);if(e.innerHTML="",t.inputPlaceholder){var n=document.createElement("option");n.innerHTML=t.inputPlaceholder,n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return e},yt.radio=function(){var t=it(U(),k.radio);return t.innerHTML="",t},yt.checkbox=function(t){var e=it(U(),k.checkbox),n=P(U(),"checkbox");return n.type="checkbox",n.value=1,n.id=k.checkbox,n.checked=Boolean(t.inputValue),e.querySelector("span").innerHTML=t.inputPlaceholder,e},yt.textarea=function(t){var e=it(U(),k.textarea);return e.value=t.inputValue,gt(e,t),e};function wt(t,e){var n=U().querySelector("#"+k.content);e.html?(tt(e.html,n),T(n,"block")):e.text?(n.textContent=e.text,T(n,"block")):O(n),function(t,e){for(var n=ht.innerParams.get(t),o=!n||e.input!==n.input,i=U(),r=["input","file","range","select","radio","checkbox","textarea"],a=0;a<r.length;a++){var s=k[r[a]],u=it(i,s);vt(r[a],e.inputAttributes),bt(u,s,e),o&&O(u)}if(e.input){if(!yt[e.input])return g('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));if(o){var c=yt[e.input](e);T(c)}}}(t,e),b(U(),e.customClass,"content")}function Ct(t,i){var r=z();if(!i.progressSteps||0===i.progressSteps.length)return O(r);T(r),r.innerHTML="";var a=parseInt(null===i.currentProgressStep?ce.getQueueStep():i.currentProgressStep);a>=i.progressSteps.length&&y("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(t,e){var n=function(t){var e=document.createElement("li");return nt(e,k["progress-step"]),e.innerHTML=t,e}(t);if(r.appendChild(n),e===a&&nt(n,k["active-progress-step"]),e!==i.progressSteps.length-1){var o=function(t){var e=document.createElement("li");return nt(e,k["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e}(t);r.appendChild(o)}})}function kt(t,e){var n=Q();b(n,e.customClass,"header"),Ct(0,e),function(t,e){var n=ht.innerParams.get(t);if(n&&e.type===n.type&&N())b(N(),e.customClass,"icon");else if(xt(),e.type)if(St(),-1!==Object.keys(B).indexOf(e.type)){var o=H(".".concat(k.icon,".").concat(B[e.type]));T(o),b(o,e.customClass,"icon"),L(o,"swal2-animate-".concat(e.type,"-icon"),e.animation)}else g('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))}(t,e),function(t,e){var n=_();if(!e.imageUrl)return O(n);T(n),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),E(n,"width",e.imageWidth),E(n,"height",e.imageHeight),n.className=k.image,b(n,e.customClass,"image"),e.imageClass&&nt(n,e.imageClass)}(0,e),function(t,e){var n=D();M(n,e.title||e.titleText),e.title&&tt(e.title,n),e.titleText&&(n.innerText=e.titleText),b(n,e.customClass,"title")}(0,e),function(t,e){var n=$();b(n,e.customClass,"closeButton"),M(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)}(0,e)}function Bt(t,e){!function(t,e){var n=rt();E(n,"width",e.width),E(n,"padding",e.padding),e.background&&(n.style.background=e.background),n.className=k.popup,e.toast?(nt([document.documentElement,document.body],k["toast-shown"]),nt(n,k.toast)):nt(n,k.modal),b(n,e.customClass,"popup"),"string"==typeof e.customClass&&nt(n,e.customClass),L(n,k.noanimation,!e.animation)}(0,e),mt(0,e),kt(t,e),wt(t,e),ft(0,e),function(t,e){var n=Y();M(n,e.footer),e.footer&&tt(e.footer,n),b(n,e.customClass,"footer")}(0,e)}var xt=function(){for(var t=R(),e=0;e<t.length;e++)O(t[e])},St=function(){for(var t=rt(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e};function Pt(){var t=rt();t||ce.fire(""),t=rt();var e=Z(),n=K(),o=F();T(e),T(n),nt([t,e],k.loading),n.disabled=!0,o.disabled=!0,t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function At(t){return Mt.hasOwnProperty(t)}function Lt(t){return jt[t]}var Et=[],Tt={},Ot=function(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;Tt.restoreFocusTimeout=setTimeout(function(){Tt.previousActiveElement&&Tt.previousActiveElement.focus?(Tt.previousActiveElement.focus(),Tt.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})},Mt={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",customContainerClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:"",cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:"",buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:"",timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:"",inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,scrollbarPadding:!0},Vt=["title","titleText","text","html","type","customClass","showConfirmButton","showCancelButton","confirmButtonText","confirmButtonAriaLabel","confirmButtonColor","confirmButtonClass","cancelButtonText","cancelButtonAriaLabel","cancelButtonColor","cancelButtonClass","buttonsStyling","reverseButtons","imageUrl","imageWidth","imageHeigth","imageAlt","imageClass","progressSteps","currentProgressStep"],jt={customContainerClass:"customClass",confirmButtonClass:"customClass",cancelButtonClass:"customClass",imageClass:"customClass",inputClass:"customClass"},qt=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],Ht=Object.freeze({isValidParameter:At,isUpdatableParameter:function(t){return-1!==Vt.indexOf(t)},isDeprecatedParameter:Lt,argsToParams:function(n){var o={};switch(f(n[0])){case"object":a(o,n[0]);break;default:["title","html","type"].forEach(function(t,e){switch(f(n[e])){case"string":o[t]=n[e];break;case"undefined":break;default:g("Unexpected type of ".concat(t,'! Expected "string", got ').concat(f(n[e])))}})}return o},isVisible:function(){return V(rt())},clickConfirm:function(){return K()&&K().click()},clickCancel:function(){return F()&&F().click()},getContainer:q,getPopup:rt,getTitle:D,getContent:U,getImage:_,getIcon:N,getIcons:R,getCloseButton:$,getActions:Z,getConfirmButton:K,getCancelButton:F,getHeader:Q,getFooter:Y,getFocusableElements:J,getValidationMessage:W,isLoading:function(){return rt().hasAttribute("data-loading")},fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return c(this,e)},mixin:function(n){return function(t){function e(){return o(this,e),l(this,s(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t),r(e,[{key:"_main",value:function(t){return d(s(e.prototype),"_main",this).call(this,a({},n,t))}}]),e}(this)},queue:function(t){var r=this;Et=t;function a(t,e){Et=[],document.body.removeAttribute("data-swal2-queue-step"),t(e)}var s=[];return new Promise(function(i){!function e(n,o){n<Et.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(Et[n]).then(function(t){void 0!==t.value?(s.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:s})}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(t,e){return e&&e<Et.length?Et.splice(e,0,t):Et.push(t)},deleteQueueStep:function(t){void 0!==Et[t]&&Et.splice(t,1)},showLoading:Pt,enableLoading:Pt,getTimerLeft:function(){return Tt.timeout&&Tt.timeout.getTimerLeft()},stopTimer:function(){return Tt.timeout&&Tt.timeout.stop()},resumeTimer:function(){return Tt.timeout&&Tt.timeout.start()},toggleTimer:function(){var t=Tt.timeout;return t&&(t.running?t.stop():t.start())},increaseTimer:function(t){return Tt.timeout&&Tt.timeout.increase(t)},isTimerRunning:function(){return Tt.timeout&&Tt.timeout.isRunning()}});function It(){var t=ht.innerParams.get(this),e=ht.domCache.get(this);t.showConfirmButton||(O(e.confirmButton),t.showCancelButton||O(e.actions)),ot([e.popup,e.actions],k.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.cancelButton.disabled=!1}function Rt(){null===x.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(x.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=x.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}()+"px")}function Nt(){return!!window.MSInputMethodContext&&!!document.documentMode}function Dt(){var t=q(),e=rt();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var Ut=function(){null!==x.previousBodyPadding&&(document.body.style.paddingRight=x.previousBodyPadding+"px",x.previousBodyPadding=null)},_t=function(){var e,n=q();n.ontouchstart=function(t){e=t.target===n||!function(t){return!!(t.scrollHeight>t.clientHeight)}(n)&&"INPUT"!==t.target.tagName},n.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())}},zt=function(){if(S(document.body,k.iosfix)){var t=parseInt(document.body.style.top,10);ot(document.body,k.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}},Wt=function(){"undefined"!=typeof window&&Nt()&&window.removeEventListener("resize",Dt)},Kt=function(){m(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},Ft={swalPromiseResolve:new WeakMap};function Zt(t,e,n){e?$t(n):(Ot().then(function(){return $t(n)}),Tt.keydownTarget.removeEventListener("keydown",Tt.keydownHandler,{capture:Tt.keydownListenerCapture}),Tt.keydownHandlerAdded=!1),delete Tt.keydownHandler,delete Tt.keydownTarget,t.parentNode&&t.parentNode.removeChild(t),ot([document.documentElement,document.body],[k.shown,k["height-auto"],k["no-backdrop"],k["toast-shown"],k["toast-column"]]),at()&&(Ut(),zt(),Wt(),Kt())}function Qt(t){var e=q(),n=rt();if(n&&!S(n,k.hide)){var o=ht.innerParams.get(this),i=Ft.swalPromiseResolve.get(this),r=o.onClose,a=o.onAfterClose;ot(n,k.show),nt(n,k.hide),dt&&j(n)?n.addEventListener(dt,function(t){t.target===n&&function(t,e,n,o){S(t,k.hide)&&Zt(e,n,o),Yt(ht),Yt(Ft)}(n,e,st(),a)}):Zt(e,st(),a),null!==r&&"function"==typeof r&&r(n),i(t||{}),delete this.params}}var Yt=function(t){for(var e in t)t[e]=new WeakMap},$t=function(t){null!==t&&"function"==typeof t&&setTimeout(function(){t()})};function Jt(t,e,n){var o=ht.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function Xt(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var Gt=function(){function n(t,e){o(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return r(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),te={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function ee(t,e){t.removeEventListener(dt,ee),e.style.overflowY="auto"}function ne(t){var e=q(),n=rt();null!==t.onBeforeOpen&&"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n),t.animation&&(nt(n,k.show),nt(e,k.fade)),T(n),dt&&j(n)?(e.style.overflowY="hidden",n.addEventListener(dt,ee.bind(null,n,e))):e.style.overflowY="auto",nt([document.documentElement,document.body,e],k.shown),t.heightAuto&&t.backdrop&&!t.toast&&nt([document.documentElement,document.body],k["height-auto"]),at()&&(t.scrollbarPadding&&Rt(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!S(document.body,k.iosfix)){var t=document.body.scrollTop;document.body.style.top=-1*t+"px",nt(document.body,k.iosfix),_t()}}(),"undefined"!=typeof window&&Nt()&&(Dt(),window.addEventListener("resize",Dt)),m(document.body.children).forEach(function(t){t===q()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,q())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))}),setTimeout(function(){e.scrollTop=0})),st()||Tt.previousActiveElement||(Tt.previousActiveElement=document.activeElement),null!==t.onOpen&&"function"==typeof t.onOpen&&setTimeout(function(){t.onOpen(n)})}var oe=void 0,ie={select:function(t,e,i){var r=it(t,k.select);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("option");o.value=e,o.innerHTML=n,i.inputValue.toString()===e.toString()&&(o.selected=!0),r.appendChild(o)}),r.focus()},radio:function(t,e,a){var s=it(t,k.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=k.radio,o.value=e,a.inputValue.toString()===e.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=k.label,i.appendChild(o),i.appendChild(r),s.appendChild(i)});var n=s.querySelectorAll("input");n.length&&n[0].focus()}},re=function(e){var n=[];return"undefined"!=typeof Map&&e instanceof Map?e.forEach(function(t,e){n.push([e,t])}):Object.keys(e).forEach(function(t){n.push([t,e[t]])}),n};var ae,se=Object.freeze({hideLoading:It,disableLoading:It,getInput:function(t){var e=ht.innerParams.get(t||this);return P(ht.domCache.get(t||this).content,e.input)},close:Qt,closePopup:Qt,closeModal:Qt,closeToast:Qt,enableButtons:function(){Jt(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){Jt(this,["confirmButton","cancelButton"],!0)},enableConfirmButton:function(){h("Swal.disableConfirmButton()","Swal.getConfirmButton().removeAttribute('disabled')"),Jt(this,["confirmButton"],!1)},disableConfirmButton:function(){h("Swal.enableConfirmButton()","Swal.getConfirmButton().setAttribute('disabled', '')"),Jt(this,["confirmButton"],!0)},enableInput:function(){return Xt(this.getInput(),!1)},disableInput:function(){return Xt(this.getInput(),!0)},showValidationMessage:function(t){var e=ht.domCache.get(this);e.validationMessage.innerHTML=t;var n=window.getComputedStyle(e.popup);e.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),e.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),T(e.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",k["validation-message"]),A(o),nt(o,k.inputerror))},resetValidationMessage:function(){var t=ht.domCache.get(this);t.validationMessage&&O(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),ot(e,k.inputerror))},getProgressSteps:function(){return h("Swal.getProgressSteps()","const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps"),ht.innerParams.get(this).progressSteps},setProgressSteps:function(t){h("Swal.setProgressSteps()","Swal.update()");var e=a({},ht.innerParams.get(this),{progressSteps:t});Ct(0,e),ht.innerParams.set(this,e)},showProgressSteps:function(){var t=ht.domCache.get(this);T(t.progressSteps)},hideProgressSteps:function(){var t=ht.domCache.get(this);O(t.progressSteps)},_main:function(t){var c=this;!function(t){for(var e in t)At(i=e)||y('Unknown parameter "'.concat(i,'"')),t.toast&&(o=e,-1!==qt.indexOf(o)&&y('The parameter "'.concat(o,'" is incompatible with toasts'))),Lt(n=void 0)&&h(n,Lt(n));var n,o,i}(t);var l=a({},Mt,t);!function(e){e.inputValidator||Object.keys(te).forEach(function(t){e.input===t&&(e.inputValidator=te[t])}),e.showLoaderOnConfirm&&!e.preConfirm&&y("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),e.animation=w(e.animation),e.target&&("string"!=typeof e.target||document.querySelector(e.target))&&("string"==typeof e.target||e.target.appendChild)||(y('Target parameter is not valid, defaulting to "body"'),e.target="body"),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />"));var t=rt(),n="string"==typeof e.target?document.querySelector(e.target):e.target;(!t||t&&n&&t.parentNode!==n.parentNode)&&ct(e)}(l),Object.freeze(l),Tt.timeout&&(Tt.timeout.stop(),delete Tt.timeout),clearTimeout(Tt.restoreFocusTimeout);var d={popup:rt(),container:q(),content:U(),actions:Z(),confirmButton:K(),cancelButton:F(),closeButton:$(),validationMessage:W(),progressSteps:z()};ht.domCache.set(this,d),Bt(this,l),ht.innerParams.set(this,l);var p=this.constructor;return new Promise(function(t){function n(t){c.closePopup({value:t})}function s(t){c.closePopup({dismiss:t})}Ft.swalPromiseResolve.set(c,t),l.timer&&(Tt.timeout=new Gt(function(){s("timer"),delete Tt.timeout},l.timer));l.input&&setTimeout(function(){var t=c.getInput();t&&A(t)},0);for(var u=function(e){(l.showLoaderOnConfirm&&p.showLoading(),l.preConfirm)?(c.resetValidationMessage(),Promise.resolve().then(function(){return l.preConfirm(e,l.validationMessage)}).then(function(t){V(d.validationMessage)||!1===t?c.hideLoading():n(void 0===t?e:t)})):n(e)},e=function(t){var e=t.target,n=d.confirmButton,o=d.cancelButton,i=n&&(n===e||n.contains(e)),r=o&&(o===e||o.contains(e));switch(t.type){case"click":if(i)if(c.disableButtons(),l.input){var a=function(){var t=c.getInput();if(!t)return null;switch(l.input){case"checkbox":return t.checked?1:0;case"radio":return t.checked?t.value:null;case"file":return t.files.length?t.files[0]:null;default:return l.inputAutoTrim?t.value.trim():t.value}}();if(l.inputValidator)c.disableInput(),Promise.resolve().then(function(){return l.inputValidator(a,l.validationMessage)}).then(function(t){c.enableButtons(),c.enableInput(),t?c.showValidationMessage(t):u(a)});else c.getInput().checkValidity()?u(a):(c.enableButtons(),c.showValidationMessage(l.validationMessage))}else u(!0);else r&&(c.disableButtons(),s(p.DismissReason.cancel))}},o=d.popup.querySelectorAll("button"),i=0;i<o.length;i++)o[i].onclick=e,o[i].onmouseover=e,o[i].onmouseout=e,o[i].onmousedown=e;if(d.closeButton.onclick=function(){s(p.DismissReason.close)},l.toast)d.popup.onclick=function(){l.showConfirmButton||l.showCancelButton||l.showCloseButton||l.input||s(p.DismissReason.close)};else{var r=!1;d.popup.onmousedown=function(){d.container.onmouseup=function(t){d.container.onmouseup=void 0,t.target===d.container&&(r=!0)}},d.container.onmousedown=function(){d.popup.onmouseup=function(t){d.popup.onmouseup=void 0,t.target!==d.popup&&!d.popup.contains(t.target)||(r=!0)}},d.container.onclick=function(t){r?r=!1:t.target===d.container&&w(l.allowOutsideClick)&&s(p.DismissReason.backdrop)}}l.reverseButtons?d.confirmButton.parentNode.insertBefore(d.cancelButton,d.confirmButton):d.confirmButton.parentNode.insertBefore(d.confirmButton,d.cancelButton);function a(t,e){for(var n=J(l.focusCancel),o=0;o<n.length;o++)return(t+=e)===n.length?t=0:-1===t&&(t=n.length-1),n[t].focus();d.popup.focus()}Tt.keydownTarget&&Tt.keydownHandlerAdded&&(Tt.keydownTarget.removeEventListener("keydown",Tt.keydownHandler,{capture:Tt.keydownListenerCapture}),Tt.keydownHandlerAdded=!1),l.toast||(Tt.keydownHandler=function(t){return function(t,e){e.stopKeydownPropagation&&t.stopPropagation();if("Enter"!==t.key||t.isComposing)if("Tab"===t.key){for(var n=t.target,o=J(e.focusCancel),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}t.shiftKey?a(i,-1):a(i,1),t.stopPropagation(),t.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(t.key)?document.activeElement===d.confirmButton&&V(d.cancelButton)?d.cancelButton.focus():document.activeElement===d.cancelButton&&V(d.confirmButton)&&d.confirmButton.focus():"Escape"!==t.key&&"Esc"!==t.key||!0!==w(e.allowEscapeKey)||(t.preventDefault(),s(p.DismissReason.esc));else if(t.target&&c.getInput()&&t.target.outerHTML===c.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(e.input))return;p.clickConfirm(),t.preventDefault()}}(t,l)},Tt.keydownTarget=l.keydownListenerCapture?window:d.popup,Tt.keydownListenerCapture=l.keydownListenerCapture,Tt.keydownTarget.addEventListener("keydown",Tt.keydownHandler,{capture:Tt.keydownListenerCapture}),Tt.keydownHandlerAdded=!0),c.enableButtons(),c.hideLoading(),c.resetValidationMessage(),l.toast&&(l.input||l.footer||l.showCloseButton)?nt(document.body,k["toast-column"]):ot(document.body,k["toast-column"]),"select"===l.input||"radio"===l.input?function(e,n){function o(t){return ie[n.input](i,re(t),n)}var i=U();v(n.inputOptions)?(Pt(),n.inputOptions.then(function(t){e.hideLoading(),o(t)})):"object"===f(n.inputOptions)?o(n.inputOptions):g("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(f(n.inputOptions)))}(c,l):-1!==["text","email","number","tel","textarea"].indexOf(l.input)&&v(l.inputValue)&&function(e,n){var o=e.getInput();O(o),n.inputValue.then(function(t){o.value="number"===n.input?parseFloat(t)||0:t+"",T(o),o.focus(),e.hideLoading()}).catch(function(t){g("Error in inputValue promise: "+t),o.value="",T(o),o.focus(),oe.hideLoading()})}(c,l),ne(l),l.toast||(w(l.allowEnterKey)?l.focusCancel&&V(d.cancelButton)?d.cancelButton.focus():l.focusConfirm&&V(d.confirmButton)?d.confirmButton.focus():a(-1,1):document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()),d.container.scrollTop=0})},update:function(e){var n={};Object.keys(e).forEach(function(t){ce.isUpdatableParameter(t)?n[t]=e[t]:y('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var t=a({},ht.innerParams.get(this),n);Bt(this,t),ht.innerParams.set(this,t),Object.defineProperties(this,{params:{value:a({},this.params,e),writable:!1,enumerable:!0}})}});function ue(){if("undefined"!=typeof window){"undefined"==typeof Promise&&g("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),ae=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});var i=this._main(this.params);ht.promise.set(this,i)}}ue.prototype.then=function(t){return ht.promise.get(this).then(t)},ue.prototype.finally=function(t){return ht.promise.get(this).finally(t)},a(ue.prototype,se),a(ue,Ht),Object.keys(se).forEach(function(e){ue[e]=function(){var t;if(ae)return(t=ae)[e].apply(t,arguments)}}),ue.DismissReason=C,ue.version="8.11.8";var ce=ue;return ce.default=ce}),"undefined"!=typeof window&&window.Sweetalert2&&(window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@charset \"UTF-8\";@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;word-wrap:break-word}#swal2-content{text-align:center}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;zoom:normal;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;zoom:normal;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:\"!\"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:\"i\"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:\"?\"}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:\"ØŸ\"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}");
