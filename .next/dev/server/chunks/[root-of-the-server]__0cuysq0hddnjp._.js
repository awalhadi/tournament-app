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
"[project]/app/api/login/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.js [app-route] (ecmascript)");
;
;
const dynamic = 'force-dynamic';
async function POST(req) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authConfigured"])()) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: false,
        error: 'Auth is not configured on the server'
    }, {
        status: 503
    });
    let body = {};
    try {
        body = await req.json();
    } catch  {}
    const okUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeEqual"])(String(body.username || '').trim(), process.env.BASIC_AUTH_USER);
    const okPass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeEqual"])(String(body.password || ''), process.env.BASIC_AUTH_PASSWORD);
    if (!(okUser && okPass)) {
        await new Promise((r)=>setTimeout(r, 700)); // slow down guessing
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false,
            error: 'Wrong username or password'
        }, {
            status: 401
        });
    }
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true
    });
    res.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COOKIE"], await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createToken"])(), __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookieOptions"]);
    return res;
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0cuysq0hddnjp._.js.map