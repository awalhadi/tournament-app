(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Login.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Login() {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    async function submit(e) {
        e.preventDefault();
        if (busy) return;
        setBusy(true);
        setError('');
        try {
            const r = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            const j = await r.json().catch(()=>({}));
            if (r.ok && j.ok) {
                window.location.assign('/');
                return;
            }
            setError(j.error || 'Could not sign in');
        } catch  {
            setError('Network error — please try again');
        }
        setBusy(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "login-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArtDefs"], {}, void 0, false, {
                fileName: "[project]/components/Login.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-orb o1"
            }, void 0, false, {
                fileName: "[project]/components/Login.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-orb o2"
            }, void 0, false, {
                fileName: "[project]/components/Login.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "login-float f1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Art"], {
                    name: "trophy",
                    size: 78
                }, void 0, false, {
                    fileName: "[project]/components/Login.jsx",
                    lineNumber: 36,
                    columnNumber: 39
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Login.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "login-float f2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Art"], {
                    name: "wheel",
                    size: 64
                }, void 0, false, {
                    fileName: "[project]/components/Login.jsx",
                    lineNumber: 37,
                    columnNumber: 39
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Login.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "login-float f3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Art"], {
                    name: "medal",
                    size: 58
                }, void 0, false, {
                    fileName: "[project]/components/Login.jsx",
                    lineNumber: 38,
                    columnNumber: 39
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Login.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "login-float f4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Art"], {
                    name: "ball",
                    size: 44
                }, void 0, false, {
                    fileName: "[project]/components/Login.jsx",
                    lineNumber: 39,
                    columnNumber: 39
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Login.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "login-card",
                onSubmit: submit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "login-logo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Art"], {
                            name: "paddle",
                            size: 58
                        }, void 0, false, {
                            fileName: "[project]/components/Login.jsx",
                            lineNumber: 42,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Login.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "ITclan TT Arena"
                    }, void 0, false, {
                        fileName: "[project]/components/Login.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "login-sub",
                        children: "Table tennis tournament manager"
                    }, void 0, false, {
                        fileName: "[project]/components/Login.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "lf",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Username"
                            }, void 0, false, {
                                fileName: "[project]/components/Login.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lf-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "user",
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/Login.jsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: username,
                                        onChange: (e)=>setUsername(e.target.value),
                                        autoComplete: "username",
                                        autoFocus: true,
                                        required: true,
                                        placeholder: "Enter username"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Login.jsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Login.jsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Login.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "lf",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Password"
                            }, void 0, false, {
                                fileName: "[project]/components/Login.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lf-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "lock",
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/Login.jsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: show ? 'text' : 'password',
                                        value: password,
                                        onChange: (e)=>setPassword(e.target.value),
                                        autoComplete: "current-password",
                                        required: true,
                                        placeholder: "Enter password"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Login.jsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "eye",
                                        onClick: ()=>setShow((s)=>!s),
                                        "aria-label": show ? 'Hide password' : 'Show password',
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: show ? 'eyeOff' : 'eye',
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/Login.jsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Login.jsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Login.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Login.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "login-err",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "info",
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/Login.jsx",
                                lineNumber: 72,
                                columnNumber: 46
                            }, this),
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Login.jsx",
                        lineNumber: 72,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary lg login-btn",
                        disabled: busy,
                        children: busy ? 'Signing in…' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Sign in ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "arrow",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/components/Login.jsx",
                                    lineNumber: 75,
                                    columnNumber: 45
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Login.jsx",
                            lineNumber: 75,
                            columnNumber: 35
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Login.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "login-foot",
                        children: "Private tournament area · authorised users only"
                    }, void 0, false, {
                        fileName: "[project]/components/Login.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Login.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Login.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Login, "/Zp6wYZAlTR6LAFS8ikM5XSvnQM=");
_c = Login;
var _c;
__turbopack_context__.k.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Art",
    ()=>Art,
    "ArtDefs",
    ()=>ArtDefs,
    "Avatars",
    ()=>Avatars,
    "Empty",
    ()=>Empty,
    "Icon",
    ()=>Icon,
    "Logo",
    ()=>Logo,
    "members",
    ()=>members,
    "pad",
    ()=>pad,
    "tn",
    ()=>tn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/art.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logic.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function Icon({ name, size = 18, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `ic ${className}`,
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.9",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        dangerouslySetInnerHTML: {
            __html: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"][name] || ''
        }
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Icon;
function ArtDefs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "0",
        height: "0",
        style: {
            position: 'absolute'
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            dangerouslySetInnerHTML: {
                __html: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRADIENTS"]
            }
        }, void 0, false, {
            fileName: "[project]/components/ui.jsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = ArtDefs;
function Art({ name, size = 24, className = '', style }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `art ${className}`,
        width: size,
        height: size,
        viewBox: "0 0 48 48",
        "aria-hidden": "true",
        style: style,
        dangerouslySetInnerHTML: {
            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["artMarkup"])(name)
        }
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c2 = Art;
function Logo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Art, {
        name: "paddle",
        size: 40
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
_c3 = Logo;
const pad = (n)=>String(n).padStart(2, '0');
const tn = (S, id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamName"](S, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTeam"](S, id));
const members = (S, t)=>t ? t.playerIds.map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playerName"](S, id)).join(', ') : '';
const AV = [
    '#34d399',
    '#22d3ee',
    '#818cf8',
    '#c084fc',
    '#f472b6',
    '#fbbf24',
    '#fb7185',
    '#2dd4bf'
];
function Avatars({ S, team }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "av",
        children: team.playerIds.map((id)=>{
            const i = Math.max(0, S.players.findIndex((p)=>p.id === id));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                style: {
                    background: AV[i % AV.length]
                },
                children: (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playerName"](S, id)[0] || '?').toUpperCase()
            }, id, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 62,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = Avatars;
function Empty({ icon, title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "empty card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Art, {
                name: icon,
                size: 52
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    margin: '10px 0 4px',
                    color: 'var(--text)'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c5 = Empty;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Icon");
__turbopack_context__.k.register(_c1, "ArtDefs");
__turbopack_context__.k.register(_c2, "Art");
__turbopack_context__.k.register(_c3, "Logo");
__turbopack_context__.k.register(_c4, "Avatars");
__turbopack_context__.k.register(_c5, "Empty");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/art.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Illustrated, full-colour icons (48x48). Gradients are defined once in <ArtDefs/>.
__turbopack_context__.s([
    "ART",
    ()=>ART,
    "GRADIENTS",
    ()=>GRADIENTS,
    "artMarkup",
    ()=>artMarkup
]);
const GRADIENTS = `
<linearGradient id="gGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fef08a"/><stop offset=".5" stop-color="#fbbf24"/><stop offset="1" stop-color="#d97706"/></linearGradient>
<linearGradient id="gRed" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fda4af"/><stop offset=".55" stop-color="#e11d48"/><stop offset="1" stop-color="#9f1239"/></linearGradient>
<linearGradient id="gEm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6ee7b7"/><stop offset=".55" stop-color="#10b981"/><stop offset="1" stop-color="#047857"/></linearGradient>
<linearGradient id="gCy" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a5f3fc"/><stop offset=".55" stop-color="#22d3ee"/><stop offset="1" stop-color="#0e7490"/></linearGradient>
<linearGradient id="gVio" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c7d2fe"/><stop offset=".55" stop-color="#818cf8"/><stop offset="1" stop-color="#4338ca"/></linearGradient>
<linearGradient id="gWood" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f3c98b"/><stop offset=".5" stop-color="#c9822b"/><stop offset="1" stop-color="#8a5a1d"/></linearGradient>
<radialGradient id="gBall" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#cbd5e1"/></radialGradient>`;
const paddle = `<g transform="rotate(-32 24 26)"><rect x="21" y="28" width="6" height="16" rx="3" fill="url(#gWood)"/><rect x="20" y="27" width="8" height="3" rx="1.5" fill="#78350f" opacity=".55"/><circle cx="24" cy="17" r="14" fill="url(#gRed)"/><circle cx="24" cy="17" r="14" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="1.2"/><circle cx="24" cy="17" r="10.5" fill="none" stroke="#7f1d1d" stroke-opacity=".25"/><ellipse cx="18.5" cy="11" rx="6" ry="3" transform="rotate(-30 18.5 11)" fill="#fff" opacity=".28"/></g><circle cx="38" cy="39" r="5.5" fill="url(#gBall)"/><circle cx="36.3" cy="37.4" r="1.6" fill="#fff"/>`;
const ART = {
    paddle,
    ball: `<circle cx="24" cy="24" r="14" fill="url(#gBall)"/><circle cx="19" cy="19" r="4" fill="#fff" opacity=".8"/>`,
    trophy: `<path d="M15 10c-6 0-8 1-8 4 0 5 4 9 9 10" fill="none" stroke="url(#gGold)" stroke-width="3" stroke-linecap="round"/><path d="M33 10c6 0 8 1 8 4 0 5-4 9-9 10" fill="none" stroke="url(#gGold)" stroke-width="3" stroke-linecap="round"/><path d="M13 5h22v13a11 11 0 0 1-22 0z" fill="url(#gGold)"/><path d="M17.5 9v9a7 7 0 0 0 3 5.7" stroke="#fff" stroke-opacity=".55" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M24 10.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z" fill="#fff" opacity=".85"/><rect x="21.5" y="29" width="5" height="7" fill="url(#gGold)"/><rect x="14" y="36" width="20" height="6" rx="2" fill="url(#gGold)"/><rect x="14" y="36" width="20" height="2.4" rx="1" fill="#fff" opacity=".35"/>`,
    medal: `<path d="M13 2h9l4 15h-9z" fill="url(#gRed)"/><path d="M35 2h-9l-4 15h9z" fill="url(#gCy)"/><circle cx="24" cy="31" r="13" fill="url(#gGold)"/><circle cx="24" cy="31" r="9.5" fill="none" stroke="#b45309" stroke-opacity=".5" stroke-width="1.5"/><path d="M24 23.5l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z" fill="#fff" opacity=".92"/>`,
    crown: `<path d="M5 36 8 14l10 9 6-13 6 13 10-9 3 22z" fill="url(#gGold)"/><rect x="5" y="35" width="38" height="7" rx="2.5" fill="url(#gGold)"/><rect x="5" y="35" width="38" height="2.5" rx="1" fill="#fff" opacity=".35"/><circle cx="8" cy="12" r="2.8" fill="#fde68a"/><circle cx="24" cy="8" r="2.8" fill="#fde68a"/><circle cx="40" cy="12" r="2.8" fill="#fde68a"/>`,
    users: `<circle cx="33" cy="17" r="6.5" fill="url(#gCy)"/><path d="M24 30c2.5-2 5.5-3 9-3 8 0 12 5 12 13H29z" fill="url(#gCy)"/><circle cx="17" cy="16" r="7.5" fill="url(#gEm)" stroke="#0b1220" stroke-width="2"/><path d="M3 41c0-8 6-14 14-14s14 6 14 14z" fill="url(#gEm)" stroke="#0b1220" stroke-width="2"/>`,
    person: `<circle cx="24" cy="15" r="8" fill="url(#gVio)"/><path d="M8 42c0-10 7-16 16-16s16 6 16 16z" fill="url(#gVio)"/>`,
    chart: `<rect x="6" y="26" width="9" height="16" rx="2.5" fill="url(#gCy)"/><rect x="19.5" y="14" width="9" height="28" rx="2.5" fill="url(#gEm)"/><rect x="33" y="5" width="9" height="37" rx="2.5" fill="url(#gGold)"/>`,
    bracket: `<rect x="3" y="5" width="15" height="9" rx="2.5" fill="url(#gCy)"/><rect x="3" y="34" width="15" height="9" rx="2.5" fill="url(#gCy)"/><path d="M18 9.5h6v29h-6M24 24h6" stroke="#94a3b8" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="30" y="18" width="15" height="12" rx="2.5" fill="url(#gGold)"/>`,
    wheel: `<circle cx="24" cy="25" r="20" fill="none" stroke="url(#gGold)" stroke-width="3"/><path d="M24 25L24 8A17 17 0 0 1 38.72 16.5Z" fill="url(#gEm)"/><path d="M24 25L38.72 16.5A17 17 0 0 1 38.72 33.5Z" fill="url(#gCy)"/><path d="M24 25L38.72 33.5A17 17 0 0 1 24 42Z" fill="url(#gVio)"/><path d="M24 25L24 42A17 17 0 0 1 9.28 33.5Z" fill="#f472b6"/><path d="M24 25L9.28 33.5A17 17 0 0 1 9.28 16.5Z" fill="url(#gRed)"/><path d="M24 25L9.28 16.5A17 17 0 0 1 24 8Z" fill="url(#gGold)"/><circle cx="24" cy="25" r="4.5" fill="#fff"/><path d="M24 1l4.5 7h-9z" fill="#fff" stroke="#0b1220" stroke-width="1.2" stroke-linejoin="round"/>`,
    sliders: `<g stroke="#64748b" stroke-width="3" stroke-linecap="round"><path d="M6 12h36M6 24h36M6 36h36"/></g><circle cx="16" cy="12" r="5.5" fill="url(#gGold)"/><circle cx="33" cy="24" r="5.5" fill="url(#gEm)"/><circle cx="20" cy="36" r="5.5" fill="url(#gCy)"/>`
};
const artMarkup = (name)=>ART[name] || '';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/icons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Inline Lucide-style stroke icons (no network needed).
__turbopack_context__.s([
    "P",
    ()=>P,
    "icon",
    ()=>icon,
    "logo",
    ()=>logo
]);
const P = {
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    shuffle: '<path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/>',
    reset: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    sliders: '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
    crown: '<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>',
    medal: '<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/>',
    swords: '<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/>',
    chart: '<line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>',
    bracket: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>',
    history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    pencil: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    list: '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    eyeOff: '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'
};
function icon(name, size = 18, cls = '') {
    return `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;
}
const logo = `<svg viewBox="0 0 32 32" width="34" height="34" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#34d399"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs><circle cx="13" cy="13" r="10" fill="url(#lg)"/><circle cx="13" cy="13" r="10" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1"/><path d="M20.5 20.5 27 27" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/><circle cx="25.5" cy="7.5" r="3" fill="#fff"/></svg>`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/logic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Pure tournament logic: no DOM here, so it can be unit-tested in Node.
__turbopack_context__.s([
    "POINT_PRESETS",
    ()=>POINT_PRESETS,
    "RULE_DEFAULTS",
    ()=>RULE_DEFAULTS,
    "TIEBREAKS",
    ()=>TIEBREAKS,
    "buildGroupMatches",
    ()=>buildGroupMatches,
    "canFormTeam",
    ()=>canFormTeam,
    "championOf",
    ()=>championOf,
    "clearDownstream",
    ()=>clearDownstream,
    "computeStandings",
    ()=>computeStandings,
    "customGroupNames",
    ()=>customGroupNames,
    "emptyGames",
    ()=>emptyGames,
    "evalMatch",
    ()=>evalMatch,
    "findProtectedChanges",
    ()=>findProtectedChanges,
    "findScoreEdits",
    ()=>findScoreEdits,
    "getTeam",
    ()=>getTeam,
    "groupCaps",
    ()=>groupCaps,
    "groupProgress",
    ()=>groupProgress,
    "groupWarnings",
    ()=>groupWarnings,
    "groupsOf",
    ()=>groupsOf,
    "letters",
    ()=>letters,
    "makeBracket",
    ()=>makeBracket,
    "needsMaster",
    ()=>needsMaster,
    "playerName",
    ()=>playerName,
    "pow2floor",
    ()=>pow2floor,
    "presetOf",
    ()=>presetOf,
    "qualifiedSeeds",
    ()=>qualifiedSeeds,
    "rand",
    ()=>rand,
    "resolveBracket",
    ()=>resolveBracket,
    "roundName",
    ()=>roundName,
    "roundRobin",
    ()=>roundRobin,
    "ruleCfg",
    ()=>ruleCfg,
    "scoreIssue",
    ()=>scoreIssue,
    "scoreIssues",
    ()=>scoreIssues,
    "seedOrder",
    ()=>seedOrder,
    "shuffle",
    ()=>shuffle,
    "teamName",
    ()=>teamName,
    "uid",
    ()=>uid,
    "unassignedPlayers",
    ()=>unassignedPlayers
]);
const letters = (i)=>String.fromCharCode(65 + i);
function rand(n) {
    const u = new Uint32Array(1);
    crypto.getRandomValues(u);
    return u[0] % n;
}
function shuffle(arr) {
    const a = [
        ...arr
    ];
    for(let i = a.length - 1; i > 0; i--){
        const j = rand(i + 1);
        [a[i], a[j]] = [
            a[j],
            a[i]
        ];
    }
    return a;
}
const uid = (p)=>p + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-3);
function groupCaps(n, size) {
    if (n <= 0) return [];
    const g = Math.max(1, Math.ceil(n / Math.max(2, size)));
    const base = Math.floor(n / g);
    const rem = n % g;
    return Array.from({
        length: g
    }, (_, i)=>base + (i < rem ? 1 : 0));
}
const pow2floor = (n)=>{
    let p = 1;
    while(p * 2 <= n)p *= 2;
    return p;
};
function playerName(state, id) {
    return state.players.find((p)=>p.id === id)?.name ?? '?';
}
function teamName(state, team) {
    if (!team) return 'TBD';
    if (team.name) return team.name;
    const n = team.playerIds.map((id)=>playerName(state, id)).join(' + ');
    return n || 'Empty team';
}
const getTeam = (state, id)=>state.teams.find((t)=>t.id === id);
function unassignedPlayers(state) {
    const used = new Set(state.teams.flatMap((t)=>t.playerIds));
    return state.players.filter((p)=>!used.has(p.id) && !state.draft.includes(p.id));
}
function canFormTeam(state, playerIds, ignoreTeamId = null) {
    const size = state.settings.teamSize;
    if (new Set(playerIds).size !== playerIds.length) return 'A player is picked twice';
    if (playerIds.length !== size) return `A team needs exactly ${size} player${size === 1 ? '' : 's'}`;
    for (const id of playerIds){
        if (!state.players.some((p)=>p.id === id)) return 'Unknown player';
        if (state.draft.includes(id)) return `${playerName(state, id)} is in the spin draft`;
        const other = state.teams.find((t)=>t.id !== ignoreTeamId && t.playerIds.includes(id));
        if (other) return `${playerName(state, id)} is already in ${teamName(state, other)}`;
    }
    return null;
}
function customGroupNames(state) {
    return groupCaps(state.teams.length, state.settings.groupSize).map((_, i)=>letters(i));
}
function groupWarnings(state) {
    const out = [];
    const max = Math.max(2, state.settings.groupSize);
    for (const g of customGroupNames(state)){
        const n = state.teams.filter((t)=>t.group === g).length;
        if (n < 2) out.push({
            group: g,
            msg: `Group ${g} needs at least 2 teams`
        });
        else if (n > max) out.push({
            group: g,
            msg: `Group ${g} has ${n} teams (usual max ${max})`
        });
    }
    return out;
}
const RULE_DEFAULTS = {
    gamesPerMatch: 3,
    knockoutGames: 3,
    playAll: true,
    allowDraw: false,
    pointsPerGame: 20,
    winByTwo: false,
    checkScores: true,
    pointSystem: 'games',
    pointPreset: 'games',
    ptsWin: 2,
    ptsDraw: 1,
    ptsLoss: 0,
    tiebreak: 'classic'
};
const POINT_PRESETS = {
    games: {
        label: 'Game wins = points (ITclanBD)',
        system: 'games'
    },
    w3: {
        label: 'Win 3 · Draw 1 · Loss 0',
        system: 'match',
        ptsWin: 3,
        ptsDraw: 1,
        ptsLoss: 0
    },
    w2: {
        label: 'Win 2 · Draw 1 · Loss 0',
        system: 'match',
        ptsWin: 2,
        ptsDraw: 1,
        ptsLoss: 0
    },
    ittf: {
        label: 'Win 2 · Loss 1 (ITTF team events)',
        system: 'match',
        ptsWin: 2,
        ptsDraw: 1.5,
        ptsLoss: 1
    },
    custom: {
        label: 'Custom…',
        system: 'match'
    }
};
const TIEBREAKS = {
    classic: {
        label: 'ITclanBD · points → match wins → head-to-head → point difference',
        text: 'Table points, then match wins, then head-to-head wins between the tied teams, then point difference, then points scored.'
    },
    ittf: {
        label: 'ITTF · head-to-head ratios (matches → games → points)',
        text: 'Among tied teams only: points from their mutual matches, then match win/loss ratio, then game ratio, then points ratio (repeated for any teams still level), then overall game and point difference.'
    },
    gamediff: {
        label: 'Game difference → point difference',
        text: 'Table points, then overall game difference (won − lost), then overall point difference, then points scored. Head-to-head is not used.'
    }
};
const ruleCfg = (settings = {})=>({
        ...RULE_DEFAULTS,
        ...settings || {}
    });
function presetOf(settings) {
    const c = ruleCfg(settings);
    if (c.pointSystem === 'games') return 'games';
    for (const k of [
        'w3',
        'w2',
        'ittf'
    ]){
        const q = POINT_PRESETS[k];
        if (q.ptsWin === c.ptsWin && q.ptsDraw === c.ptsDraw && q.ptsLoss === c.ptsLoss) return k;
    }
    return 'custom';
}
function scoreIssue(a, b, cfg) {
    const c = ruleCfg(cfg);
    if (!Number.isInteger(a) || !Number.isInteger(b) || a === b) return null;
    const hi = Math.max(a, b), lo = Math.min(a, b), T = c.pointsPerGame;
    const ok = c.winByTwo ? hi === T && lo <= T - 2 || hi > T && hi - lo === 2 : hi === T && lo < T;
    if (ok) return null;
    return c.winByTwo ? `A game is played to ${T} and must be won by 2 (e.g. ${T}–${T - 2}, ${T + 1}–${T - 1})` : `A game is played to ${T} points (the winner has exactly ${T})`;
}
const scoreIssues = (games, cfg)=>ruleCfg(cfg).checkScores ? games.map(([a, b, ow])=>ow ? null : scoreIssue(a, b, cfg)) : games.map(()=>null);
/* ---------------- match evaluation ---------------- */ const isScore = (v)=>Number.isInteger(v) && v >= 0;
function evalMatch(games, all = false, draw = false) {
    const need = Math.floor(games.length / 2) + 1;
    let w1 = 0, w2 = 0, pf1 = 0, pf2 = 0;
    let winner = null;
    const states = games.map(([a, b, ow])=>{
        if (winner && !all) return 'skipped';
        if (a == null && b == null) return 'empty';
        if (!isScore(a) || !isScore(b)) return 'partial';
        if (a === b && ow !== 1 && ow !== 2) return 'tie'; // ow = recorded game winner for imported 20-20 style results
        const g1 = a === b ? ow === 1 : a > b;
        pf1 += a;
        pf2 += b;
        if (g1) w1++;
        else w2++;
        if (!all) {
            if (w1 >= need) winner = 1;
            else if (w2 >= need) winner = 2;
        }
        return g1 ? 'w1' : 'w2';
    });
    let isDraw = false;
    let level = false;
    if (all && states.every((s)=>s === 'w1' || s === 'w2')) {
        if (w1 === w2) {
            if (draw) isDraw = true;
            else level = true; // level but draws are off → not finished
        } else winner = w1 > w2 ? 1 : 2;
    }
    const started = states.some((s)=>s !== 'empty' && s !== 'skipped');
    return {
        w1,
        w2,
        pf1,
        pf2,
        winner,
        done: winner !== null || isDraw,
        draw: isDraw,
        level,
        states,
        started,
        need
    };
}
/* ---------------- standings ---------------- */ const ratio = (a, b)=>b === 0 ? a === 0 ? 0 : Infinity : a / b;
function computeStandings(teamIds, matches, settings) {
    const c = ruleCfg(settings);
    const S = {};
    teamIds.forEach((id)=>S[id] = {
            id,
            p: 0,
            w: 0,
            d: 0,
            l: 0,
            gw: 0,
            gl: 0,
            pf: 0,
            pa: 0,
            pts: 0,
            h2h: 0
        });
    const done = [];
    for (const m of matches){
        if (!S[m.t1] || !S[m.t2]) continue;
        const r = evalMatch(m.games, m.all, m.draw);
        if (!r.done) continue;
        done.push({
            m,
            r
        });
        const a = S[m.t1], b = S[m.t2];
        a.p++;
        b.p++;
        a.gw += r.w1;
        a.gl += r.w2;
        b.gw += r.w2;
        b.gl += r.w1;
        a.pf += r.pf1;
        a.pa += r.pf2;
        b.pf += r.pf2;
        b.pa += r.pf1;
        if (r.draw) {
            a.d++;
            b.d++;
        } else if (r.winner === 1) {
            a.w++;
            b.l++;
        } else {
            b.w++;
            a.l++;
        }
    }
    const points = (r)=>c.pointSystem === 'games' ? r.gw : r.w * c.ptsWin + r.d * c.ptsDraw + r.l * c.ptsLoss;
    const rows = Object.values(S);
    rows.forEach((r)=>{
        r.diff = r.pf - r.pa;
        r.gd = r.gw - r.gl;
        r.pts = points(r);
    });
    /** Mini-league among `cl` only (results between those teams). */ const mini = (cl)=>{
        const ids = new Set(cl.map((r)=>r.id));
        const M = {};
        cl.forEach((r)=>M[r.id] = {
                w: 0,
                d: 0,
                l: 0,
                gw: 0,
                gl: 0,
                pf: 0,
                pa: 0
            });
        for (const { m, r } of done){
            if (!ids.has(m.t1) || !ids.has(m.t2)) continue;
            const a = M[m.t1], b = M[m.t2];
            a.gw += r.w1;
            a.gl += r.w2;
            b.gw += r.w2;
            b.gl += r.w1;
            a.pf += r.pf1;
            a.pa += r.pf2;
            b.pf += r.pf2;
            b.pa += r.pf1;
            if (r.draw) {
                a.d++;
                b.d++;
            } else if (r.winner === 1) {
                a.w++;
                b.l++;
            } else {
                b.w++;
                a.l++;
            }
        }
        for (const id of ids){
            const x = M[id];
            x.pts = c.pointSystem === 'games' ? x.gw : x.w * c.ptsWin + x.d * c.ptsDraw + x.l * c.ptsLoss;
        }
        return M;
    };
    const group = (list, keyFn)=>{
        const out = [];
        for (const r of list){
            const k = keyFn(r);
            const last = out[out.length - 1];
            if (last && last.k === k) last.items.push(r);
            else out.push({
                k,
                items: [
                    r
                ]
            });
        }
        return out.map((g)=>g.items);
    };
    // ITTF: only the tied teams' mutual results; repeat for teams that are still level
    const ittf = (cl)=>{
        if (cl.length < 2) return cl;
        const M = mini(cl);
        const key = (r)=>[
                M[r.id].pts,
                ratio(M[r.id].w, M[r.id].l),
                ratio(M[r.id].gw, M[r.id].gl),
                ratio(M[r.id].pf, M[r.id].pa)
            ];
        const cmp = (x, y)=>{
            const a = key(x), b = key(y);
            for(let i = 0; i < a.length; i++)if (a[i] !== b[i]) return b[i] > a[i] ? 1 : -1;
            return 0;
        };
        const sorted = [
            ...cl
        ].sort(cmp);
        const groups = group(sorted, (r)=>key(r).join('|'));
        if (groups.length === 1) return [
            ...cl
        ].sort((x, y)=>y.gd - x.gd || y.diff - x.diff || y.pf - x.pf);
        return groups.flatMap((g)=>g.length < cl.length ? ittf(g) : g);
    };
    rows.sort((x, y)=>y.pts - x.pts || (c.tiebreak === 'classic' ? y.w - x.w : 0));
    const out = [];
    const sameLevel = (a, b)=>a.pts === b.pts && (c.tiebreak !== 'classic' || a.w === b.w);
    let i = 0;
    while(i < rows.length){
        let j = i;
        while(j < rows.length && sameLevel(rows[j], rows[i]))j++;
        let cl = rows.slice(i, j);
        if (cl.length > 1) {
            if (c.tiebreak === 'ittf') cl = ittf(cl);
            else if (c.tiebreak === 'gamediff') cl.sort((x, y)=>y.gd - x.gd || y.diff - x.diff || y.pf - x.pf);
            else {
                const M = mini(cl);
                cl.forEach((r)=>r.h2h = M[r.id].w);
                cl.sort((x, y)=>y.h2h - x.h2h || y.diff - x.diff || y.pf - x.pf);
            }
        }
        out.push(...cl);
        i = j;
    }
    out.forEach((r, k)=>r.rank = k + 1);
    return out;
}
function roundRobin(ids) {
    const list = [
        ...ids
    ];
    if (list.length % 2) list.push(null);
    const n = list.length;
    const rounds = [];
    for(let r = 0; r < n - 1; r++){
        const pairs = [];
        for(let i = 0; i < n / 2; i++){
            const a = list[i], b = list[n - 1 - i];
            if (a && b) pairs.push(r % 2 ? [
                b,
                a
            ] : [
                a,
                b
            ]);
        }
        rounds.push(pairs);
        list.splice(1, 0, list.pop());
    }
    return rounds;
}
const emptyGames = (n)=>Array.from({
        length: n
    }, ()=>[
            null,
            null
        ]);
function buildGroupMatches(state) {
    const n = state.settings.gamesPerMatch;
    const groups = groupsOf(state);
    const perGroup = groups.map((g)=>({
            g,
            rounds: roundRobin(g.teamIds)
        }));
    const maxR = Math.max(...perGroup.map((x)=>x.rounds.length), 0);
    const out = [];
    for(let r = 0; r < maxR; r++){
        for (const { g, rounds } of perGroup){
            for (const [t1, t2] of rounds[r] || []){
                out.push({
                    id: uid('m'),
                    group: g.name,
                    round: r + 1,
                    t1,
                    t2,
                    all: !!state.settings.playAll || n % 2 === 0,
                    draw: !!state.settings.allowDraw,
                    games: emptyGames(n)
                });
            }
        }
    }
    return out;
}
function groupsOf(state) {
    if (state.settings.format === 'groups') {
        const map = new Map();
        for (const t of state.teams){
            if (!t.group) continue;
            if (!map.has(t.group)) map.set(t.group, []);
            map.get(t.group).push(t.id);
        }
        return [
            ...map.keys()
        ].sort().map((name)=>({
                name,
                teamIds: map.get(name)
            }));
    }
    return [
        {
            name: null,
            teamIds: state.teams.map((t)=>t.id)
        }
    ];
}
function qualifiedSeeds(state) {
    const s = state.settings;
    const groups = groupsOf(state);
    let list = [];
    if (s.format === 'groups') {
        for (const g of groups){
            const st = computeStandings(g.teamIds, state.matches, s);
            st.slice(0, s.advancePerGroup).forEach((r)=>list.push({
                    ...r,
                    gr: r.rank
                }));
        }
        list.sort((a, b)=>a.gr - b.gr || b.pts - a.pts || b.w - a.w || b.diff - a.diff || b.pf - a.pf);
    } else {
        list = computeStandings(groups[0].teamIds, state.matches, s).slice(0, s.qualifiers).map((r)=>({
                ...r,
                gr: r.rank
            }));
    }
    const size = Math.max(2, pow2floor(Math.min(list.length, 16)));
    return list.slice(0, size).map((r)=>r.id);
}
function seedOrder(n) {
    let o = [
        1
    ];
    while(o.length < n){
        const m = o.length * 2 + 1;
        o = o.flatMap((x)=>[
                x,
                m - x
            ]);
    }
    return o;
}
function roundName(size, r) {
    const left = size / 2 ** r;
    if (left === 2) return 'Final';
    if (left === 4) return 'Semi-Final';
    if (left === 8) return 'Quarter-Final';
    return `Round of ${left}`;
}
function makeBracket(seeds, gamesPerMatch, all = false) {
    const size = seeds.length;
    const rounds = [];
    for(let r = 0, cnt = size / 2; cnt >= 1; r++, cnt /= 2){
        rounds.push(Array.from({
            length: cnt
        }, (_, i)=>({
                id: `k${r}_${i}`,
                games: emptyGames(gamesPerMatch)
            })));
    }
    return {
        size,
        seeds,
        all,
        rounds
    };
}
function resolveBracket(b) {
    const order = seedOrder(b.size);
    const res = [];
    b.rounds.forEach((round, r)=>{
        res.push(round.map((m, i)=>{
            let t1, t2;
            if (r === 0) {
                t1 = b.seeds[order[2 * i] - 1];
                t2 = b.seeds[order[2 * i + 1] - 1];
            } else {
                t1 = res[r - 1][2 * i].winner;
                t2 = res[r - 1][2 * i + 1].winner;
            }
            const ev = evalMatch(m.games, b.all);
            const winner = t1 && t2 && ev.done ? ev.winner === 1 ? t1 : t2 : null;
            return {
                ...m,
                r,
                i,
                t1: t1 || null,
                t2: t2 || null,
                ev,
                winner,
                ready: !!(t1 && t2)
            };
        }));
    });
    return res;
}
function clearDownstream(b, r, i) {
    if (r + 1 >= b.rounds.length) return;
    const nxt = b.rounds[r + 1][i >> 1];
    nxt.games = nxt.games.map(()=>[
            null,
            null
        ]);
    clearDownstream(b, r + 1, i >> 1);
}
function findScoreEdits(prev, next) {
    const collect = (d)=>{
        const m = new Map();
        for (const x of d?.matches || [])if (x?.id) m.set(x.id, x.games);
        for (const round of d?.bracket?.rounds || [])for (const x of round || [])if (x?.id) m.set(x.id, x.games);
        return m;
    };
    if (!prev || !next) return [];
    const before = collect(prev);
    const after = collect(next);
    const edited = [];
    for (const [id, pg] of before){
        if (!after.has(id)) continue;
        const ng = after.get(id) || [];
        const hit = (pg || []).some((game, g)=>{
            const saved = game && (game[0] != null || game[1] != null);
            if (!saved) return false;
            const n = ng[g] || [];
            return [
                0,
                1,
                2
            ].some((k)=>(game[k] ?? null) !== (n[k] ?? null));
        });
        if (hit) edited.push(id);
    }
    return edited;
}
function findProtectedChanges(prev, next) {
    if (!prev || !next) return {
        scores: [],
        reset: false,
        historyRemoved: []
    };
    const nextIds = new Set((next.history || []).map((h)=>h?.id));
    return {
        scores: findScoreEdits(prev, next),
        reset: !!prev.stage && prev.stage !== 'setup' && next.stage === 'setup',
        historyRemoved: (prev.history || []).map((h)=>h?.id).filter((id)=>id && !nextIds.has(id))
    };
}
const needsMaster = (c)=>!!(c && (c.scores.length || c.reset || c.historyRemoved.length));
function championOf(state) {
    if (!state.bracket) return null;
    const res = resolveBracket(state.bracket);
    const fin = res[res.length - 1][0];
    if (!fin.winner) return null;
    return {
        champion: fin.winner,
        runnerUp: fin.winner === fin.t1 ? fin.t2 : fin.t1
    };
}
function groupProgress(state) {
    const total = state.matches.length;
    const done = state.matches.filter((m)=>evalMatch(m.games, m.all, m.draw).done).length;
    return {
        total,
        done,
        complete: total > 0 && done === total
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_0pr_t-6ventp8._.js.map