module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/app/api/verify-master/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$master$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/master.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.js [app-route] (ecmascript)");
;
;
;
const dynamic = 'force-dynamic';
async function POST(req) {
    const key = req.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COOKIE"])?.value || req.headers.get('x-forwarded-for') || 'anon';
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$master$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isLocked"])(key)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: false,
        error: 'too_many_attempts'
    }, {
        status: 429
    });
    let body = {};
    try {
        body = await req.json();
    } catch  {}
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$master$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkMaster"])(String(body.password || ''));
    if (!c.ok) {
        if (c.status === 403) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$master$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recordFailure"])(key);
            await new Promise((r)=>setTimeout(r, 700));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: c.error
        }, {
            status: c.status
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$master$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clearFailures"])(key);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true
    });
}
}),
"[project]/lib/master.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MASTER_HEADER",
    ()=>MASTER_HEADER,
    "checkMaster",
    ()=>checkMaster,
    "clearFailures",
    ()=>clearFailures,
    "isLocked",
    ()=>isLocked,
    "recordFailure",
    ()=>recordFailure
]);
// Master password for editing scores that are already saved.
// The password lives ONLY in the server env (MASTER_PASSWORD). Never prefix it with NEXT_PUBLIC_.
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.js [app-route] (ecmascript)");
;
const MASTER_HEADER = 'x-master-password';
function checkMaster(provided, env = process.env) {
    const expected = env.MASTER_PASSWORD;
    if (!expected) {
        if (env.NODE_ENV === 'production') return {
            ok: false,
            status: 503,
            error: 'master_password_not_configured'
        };
        return {
            ok: true,
            devBypass: true
        };
    }
    if (!provided) return {
        ok: false,
        status: 403,
        error: 'master_password_required'
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeEqual"])(String(provided), expected) ? {
        ok: true
    } : {
        ok: false,
        status: 403,
        error: 'master_password_invalid'
    };
}
// Best-effort brute-force guard. In-memory, so on serverless it only holds per warm instance;
// it slows guessing but is not a hard guarantee.
const MAX_FAILS = 5;
const WINDOW_MS = 5 * 60 * 1000;
const fails = new Map(); // key -> number[] (timestamps)
const recent = (key, now)=>(fails.get(key) || []).filter((t)=>now - t < WINDOW_MS);
function isLocked(key, now = Date.now()) {
    return recent(key, now).length >= MAX_FAILS;
}
function recordFailure(key, now = Date.now()) {
    const list = [
        ...recent(key, now),
        now
    ];
    fails.set(key, list);
    if (fails.size > 500) {
        for (const [k, v] of fails)if (!v.some((t)=>now - t < WINDOW_MS)) fails.delete(k);
    }
}
function clearFailures(key) {
    fails.delete(key);
}
}),
"[project]/lib/session.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Cookie session (signed with HMAC-SHA256). Works in both the proxy and route handlers.
__turbopack_context__.s([
    "COOKIE",
    ()=>COOKIE,
    "authConfigured",
    ()=>authConfigured,
    "cookieOptions",
    ()=>cookieOptions,
    "createToken",
    ()=>createToken,
    "safeEqual",
    ()=>safeEqual,
    "verifyToken",
    ()=>verifyToken
]);
const COOKIE = 'tt_session';
const DAYS = 30;
const enc = new TextEncoder();
const secret = ()=>process.env.AUTH_SECRET || `${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}:tt-arena`;
async function hmac(msg) {
    const key = await crypto.subtle.importKey('raw', enc.encode(secret()), {
        name: 'HMAC',
        hash: 'SHA-256'
    }, false, [
        'sign'
    ]);
    const sig = await crypto.subtle.sign('HMAC', key, enc.encode(msg));
    return [
        ...new Uint8Array(sig)
    ].map((b)=>b.toString(16).padStart(2, '0')).join('');
}
function safeEqual(a, b) {
    a = String(a);
    b = String(b);
    if (a.length !== b.length) return false;
    let r = 0;
    for(let i = 0; i < a.length; i++)r |= a.charCodeAt(i) ^ b.charCodeAt(i);
    return r === 0;
}
const authConfigured = ()=>!!(process.env.BASIC_AUTH_USER && process.env.BASIC_AUTH_PASSWORD);
async function createToken() {
    const exp = String(Date.now() + DAYS * 864e5);
    return `${exp}.${await hmac(exp)}`;
}
async function verifyToken(token) {
    if (!token) return false;
    const [exp, sig] = token.split('.');
    if (!exp || !sig || Number(exp) < Date.now()) return false;
    return safeEqual(sig, await hmac(exp));
}
const cookieOptions = {
    httpOnly: true,
    sameSite: 'lax',
    secure: ("TURBOPACK compile-time value", "development") === 'production',
    path: '/',
    maxAge: DAYS * 86400
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__012hx_kefzpgy._.js.map