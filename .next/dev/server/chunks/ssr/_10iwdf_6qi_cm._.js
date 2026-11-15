module.exports = [
"[project]/components/App.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Setup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Setup.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Players$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Players.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Matches$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Matches.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Standings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Standings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$History$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/History.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const fresh = (d, history)=>({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["freshState"])(d.settings, history, d.players),
        seeded: true
    });
/** Freeze a whole tournament (teams, scores, standings source, bracket) for the History tab. */ function makeEntry(d) {
    const ch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["championOf"](d);
    const { history, ...snap } = structuredClone(d);
    const kind = d.settings.format === 'groups' ? 'Groups' : 'League';
    return {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"]('h'),
        title: `${d.teams.length}-team ${kind.toLowerCase()} tournament`,
        date: new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }),
        champion: ch ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tn"])(d, ch.champion) : null,
        members: ch ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["members"])(d, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](d, ch.champion)) : '',
        runnerUp: ch ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tn"])(d, ch.runnerUp) : '',
        teams: d.teams.length,
        format: kind,
        note: ch ? '' : d.stage === 'group' ? 'Reset during the group stage' : 'Reset before the final',
        snapshot: snap
    };
}
const tabFor = (S)=>S.stage === 'setup' ? 'setup' : S.stage === 'group' ? 'fixtures' : 'bracket';
function App() {
    const [S, setS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const Sref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [ui, setUi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        tab: 'setup',
        mode: 'players',
        filter: 'all',
        lastPick: null,
        histView: null,
        histTab: 'standings'
    });
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // load persisted JSON once on the client
    const [sync, setSync] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('pending');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onSync"])(setSync);
        let alive = true;
        (async ()=>{
            const remote = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadRemote"])();
            if (!alive) return;
            const s = remote.data || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["load"])();
            Sref.current = s;
            setS(s);
            setUi((u)=>({
                    ...u,
                    tab: tabFor(s)
                }));
            setSync(remote.status);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["save"])(s); // persist (also adds the seeded document tournament on first run)
        })();
        // when you come back to this tab/window, pull the latest saved data (another device may have changed it)
        const refresh = async ()=>{
            if (document.visibilityState !== 'visible') return;
            const remote = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadRemote"])();
            if (!alive || !remote.data) return;
            if (JSON.stringify(remote.data) !== JSON.stringify(Sref.current)) {
                Sref.current = remote.data;
                setS(remote.data);
            }
            setSync(remote.status);
        };
        document.addEventListener('visibilitychange', refresh);
        window.addEventListener('focus', refresh);
        return ()=>{
            alive = false;
            document.removeEventListener('visibilitychange', refresh);
            window.removeEventListener('focus', refresh);
        };
    }, []);
    const patchUi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((p)=>setUi((u)=>({
                ...u,
                ...p
            })), []);
    /** Clone → mutate → persist → render. */ const mutate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((fn)=>{
        const d = structuredClone(Sref.current);
        fn(d);
        Sref.current = d;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["save"])(d);
        setS(d);
    }, []);
    const replace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((d)=>{
        Sref.current = d;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["save"])(d);
        setS(d);
    }, []);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((msg, type = '')=>{
        const id = Math.random();
        setToasts((t)=>[
                ...t,
                {
                    id,
                    msg,
                    type
                }
            ]);
        setTimeout(()=>setToasts((t)=>t.filter((x)=>x.id !== id)), 3200);
    }, []);
    const ask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((opts)=>new Promise((resolve)=>setModal({
                ...opts,
                resolve
            })), []);
    const closeModal = (v)=>{
        modal?.resolve(v);
        setModal(null);
    };
    const A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Team list changed. Spin mode: regroup from scratch. Custom mode: keep deliberate manual
        // placements, only drop those pointing at a group letter that no longer exists.
        const regroup = (d)=>{
            if (d.settings.assignMode !== 'custom') return d.teams.forEach((x)=>x.group = null);
            const valid = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customGroupNames"](d));
            d.teams.forEach((x)=>{
                if (x.group && !valid.has(x.group)) x.group = null;
            });
        };
        const makeTeam = (d, ids, name = '')=>{
            const t = {
                id: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"]('t'),
                name,
                playerIds: [
                    ...ids
                ],
                group: null
            };
            d.teams.push(t);
            regroup(d);
            return t;
        };
        // When only one outcome is left, finish it without another spin.
        const settlePlayers = (d)=>{
            const inTeam = new Set(d.teams.flatMap((t)=>t.playerIds));
            const rest = d.players.filter((p)=>!inTeam.has(p.id) && !d.draft.includes(p.id)).map((p)=>p.id);
            if (rest.length && d.draft.length + rest.length === d.settings.teamSize) {
                const t = makeTeam(d, [
                    ...d.draft,
                    ...rest
                ]);
                d.draft = [];
                return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamName"](d, t);
            }
            return null;
        };
        const settleGroups = (d)=>{
            const caps = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupCaps"](d.teams.length, d.settings.groupSize);
            const open = caps.map((c, i)=>i).filter((i)=>d.teams.filter((t)=>t.group === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["letters"](i)).length < caps[i]);
            const left = d.teams.filter((t)=>!t.group);
            if (open.length === 1 && left.length) {
                left.forEach((t)=>t.group = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["letters"](open[0]));
                return {
                    g: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["letters"](open[0]),
                    n: left.length
                };
            }
            return null;
        };
        const go = (tab)=>{
            patchUi(tab === 'history' ? {
                tab,
                histView: null
            } : {
                tab
            });
            window.scrollTo({
                top: 0
            });
        };
        return {
            setTab: go,
            setFilter: (filter)=>patchUi({
                    filter
                }),
            setMode: (mode)=>patchUi({
                    mode,
                    lastPick: null
                }),
            setFormat: (format)=>mutate((d)=>{
                    if (d.stage !== 'setup') return;
                    d.settings.format = format;
                    d.teams.forEach((t)=>t.group = null);
                }),
            // calculation/validation settings can change any time; structural ones only before the tournament starts
            setMany: (patch)=>mutate((d)=>{
                    const live = [
                        'pointsPerGame',
                        'winByTwo',
                        'checkScores',
                        'pointSystem',
                        'ptsWin',
                        'ptsDraw',
                        'ptsLoss',
                        'tiebreak'
                    ];
                    for (const [k, v] of Object.entries(patch)){
                        const allowed = live.includes(k) || k === 'knockoutGames' && !d.bracket || d.stage === 'setup';
                        if (allowed) d.settings[k] = v;
                    }
                }),
            setting: (key, val)=>{
                mutate((d)=>{
                    const live = [
                        'pointsPerGame',
                        'winByTwo',
                        'checkScores',
                        'pointSystem',
                        'ptsWin',
                        'ptsDraw',
                        'ptsLoss',
                        'tiebreak'
                    ];
                    if (d.stage !== 'setup' && !live.includes(key) && !(key === 'knockoutGames' && !d.bracket)) return;
                    d.settings[key] = val;
                    if (key === 'groupSize' || key === 'qualifiers') d.teams.forEach((t)=>t.group = null);
                    if (key === 'teamSize' && d.draft.length >= val) {
                        makeTeam(d, d.draft);
                        d.draft = [];
                    }
                });
            },
            addPlayers: (text)=>{
                const list = text.split(/[,\n]+/).map((x)=>x.trim()).filter(Boolean);
                const cur = Sref.current.players;
                const fresh = [];
                for (const n of list){
                    if (cur.some((p)=>p.name.toLowerCase() === n.toLowerCase())) continue;
                    if (fresh.some((p)=>p.name.toLowerCase() === n.toLowerCase())) continue;
                    fresh.push({
                        id: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uid"]('p'),
                        name: n
                    });
                }
                if (!fresh.length) {
                    toast(list.length ? 'Those players already exist' : 'Type at least one name', 'err');
                    return false;
                }
                mutate((d)=>d.players.push(...fresh));
                toast(`${fresh.length} player${fresh.length > 1 ? 's' : ''} added`);
                return true;
            },
            delPlayer: (id)=>mutate((d)=>{
                    d.players = d.players.filter((p)=>p.id !== id);
                    d.draft = d.draft.filter((x)=>x !== id);
                    d.teams.forEach((t)=>t.playerIds = t.playerIds.filter((x)=>x !== id));
                    d.teams = d.teams.filter((t)=>t.playerIds.length);
                    regroup(d);
                }),
            pick: (mode, item)=>{
                let msg = '';
                mutate((d)=>{
                    if (mode === 'players') {
                        d.draft.push(item.id);
                        msg = `${item.label} joined the draft!`;
                        if (d.draft.length >= d.settings.teamSize) {
                            const t = makeTeam(d, d.draft);
                            msg = `${item.label} completes → ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamName"](d, t)}`;
                            d.draft = [];
                        }
                        const auto = settlePlayers(d);
                        if (auto) msg += ` · last players auto-paired → ${auto}`;
                    } else {
                        const caps = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupCaps"](d.teams.length, d.settings.groupSize);
                        const counts = caps.map((_, gi)=>d.teams.filter((t)=>t.group === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["letters"](gi)).length);
                        const gi = counts.findIndex((c, i)=>c < caps[i]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](d, item.id).group = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["letters"](gi);
                        msg = `${item.label} → Group ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["letters"](gi)}`;
                        const auto = settleGroups(d);
                        if (auto) msg += ` · remaining ${auto.n} team${auto.n > 1 ? 's' : ''} auto-placed in Group ${auto.g}`;
                    }
                });
                patchUi({
                    lastPick: msg
                });
            },
            settle: (mode)=>{
                let msg = '';
                mutate((d)=>{
                    if (mode === 'players') {
                        const t = settlePlayers(d);
                        if (t) msg = `Last players paired automatically → ${t}`;
                    } else {
                        const r = settleGroups(d);
                        if (r) msg = `Remaining ${r.n} team${r.n > 1 ? 's' : ''} placed in Group ${r.g} automatically`;
                    }
                });
                if (msg) patchUi({
                    lastPick: msg
                });
            },
            autoDraw: ()=>{
                mutate((d)=>{
                    const inTeam = new Set(d.teams.flatMap((t)=>t.playerIds));
                    const pool = d.players.filter((p)=>!inTeam.has(p.id) && !d.draft.includes(p.id)).map((p)=>p.id);
                    const all = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shuffle"]([
                        ...d.draft,
                        ...pool
                    ]);
                    const size = d.settings.teamSize;
                    d.draft = [];
                    while(all.length >= size)makeTeam(d, all.splice(0, size));
                    d.draft = all;
                });
                patchUi({
                    lastPick: 'Teams drawn at random!'
                });
            },
            finishDraft: ()=>mutate((d)=>{
                    if (d.draft.length) {
                        makeTeam(d, d.draft);
                        d.draft = [];
                    }
                }),
            clearDraft: ()=>{
                mutate((d)=>d.draft = []);
                patchUi({
                    lastPick: null
                });
            },
            delTeam: (id)=>mutate((d)=>{
                    d.teams = d.teams.filter((t)=>t.id !== id);
                    regroup(d);
                }),
            /* ---- custom (manual) mode ---- */ setAssignMode: (mode)=>mutate((d)=>{
                    if (d.stage !== 'setup') return;
                    d.settings.assignMode = mode === 'custom' ? 'custom' : 'spin';
                    d.draft = []; // an unfinished spin draft doesn't carry across modes
                }),
            createTeam: (playerIds, name)=>{
                const err = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canFormTeam"](Sref.current, playerIds);
                if (Sref.current.stage !== 'setup') return false;
                if (err) {
                    toast(err, 'err');
                    return false;
                }
                mutate((d)=>makeTeam(d, playerIds, (name || '').trim()));
                return true;
            },
            updateTeam: (id, { name, playerIds })=>{
                const cur = Sref.current;
                const t = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](cur, id);
                if (cur.stage !== 'setup' || !t || t.locked) return false;
                const err = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canFormTeam"](cur, playerIds, id);
                if (err) {
                    toast(err, 'err');
                    return false;
                }
                mutate((d)=>{
                    const x = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](d, id);
                    x.name = (name || '').trim();
                    x.playerIds = [
                        ...playerIds
                    ];
                });
                return true;
            },
            assignGroup: (teamId, letter)=>mutate((d)=>{
                    const t = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](d, teamId);
                    if (d.stage !== 'setup' || !t) return;
                    t.group = letter && __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customGroupNames"](d).includes(letter) ? letter : null;
                }),
            renameTeam: (id)=>{
                const t = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](Sref.current, id);
                const v = window.prompt('Team name (leave empty to use player names)', t.name || '');
                if (v === null) return;
                mutate((d)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](d, id).name = v.trim());
            },
            autoGroups: ()=>{
                mutate((d)=>{
                    const caps = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupCaps"](d.teams.length, d.settings.groupSize);
                    let gi = 0, c = 0;
                    for (const t of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shuffle"](d.teams)){
                        if (c >= caps[gi]) {
                            gi++;
                            c = 0;
                        }
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](d, t.id).group = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["letters"](gi);
                        c++;
                    }
                });
                patchUi({
                    lastPick: 'Groups drawn at random!'
                });
            },
            clearGroups: ()=>{
                mutate((d)=>d.teams.forEach((t)=>t.group = null));
                patchUi({
                    lastPick: null
                });
            },
            start: ()=>{
                const d = Sref.current;
                if (d.teams.length < 2) return toast('You need at least 2 teams', 'err');
                if (d.draft.length) return toast('Finish the team being drafted first (Make team / Undo picks)', 'err');
                if (d.settings.format === 'groups') {
                    if (d.teams.some((t)=>!t.group)) return toast('Put every team in a group first (spin or auto-group)', 'err');
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupsOf"](d).some((g)=>g.teamIds.length < 2)) return toast('Every group needs at least 2 teams', 'err');
                }
                let count = 0;
                mutate((x)=>{
                    x.matches = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildGroupMatches"](x);
                    x.bracket = null;
                    x.stage = 'group';
                    count = x.matches.length;
                });
                patchUi({
                    tab: 'fixtures',
                    filter: 'all'
                });
                window.scrollTo({
                    top: 0
                });
                toast(`${count} matches generated`);
            },
            startKO: ()=>{
                mutate((d)=>{
                    const seeds = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["qualifiedSeeds"](d);
                    d.bracket = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeBracket"](seeds, d.settings.knockoutGames || 3, d.settings.playAll);
                    d.stage = 'knockout';
                });
                go('bracket');
            },
            backToGroups: async ()=>{
                const ok = await ask({
                    title: 'Edit group results?',
                    text: 'The knockout bracket and its scores will be removed. Group results stay.',
                    ok: 'Remove bracket',
                    danger: true
                });
                if (!ok) return;
                mutate((d)=>{
                    d.bracket = null;
                    d.stage = 'group';
                });
                go('fixtures');
            },
            setScore: (id, ko, g, s, raw)=>{
                let val = raw === '' ? null : parseInt(raw, 10);
                if (Number.isNaN(val)) val = null;
                if (val !== null) val = Math.max(0, Math.min(99, val));
                mutate((d)=>{
                    if (ko) {
                        const before = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveBracket"](d.bracket).flat().find((m)=>m.id === id);
                        d.bracket.rounds[before.r][before.i].games[g][s] = val;
                        const after = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveBracket"](d.bracket)[before.r][before.i];
                        if (after.winner !== before.winner) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearDownstream"](d.bracket, before.r, before.i);
                    } else {
                        d.matches.find((m)=>m.id === id).games[g][s] = val;
                    }
                });
            },
            finish: ()=>{
                const d = Sref.current;
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["championOf"](d)) return;
                replace(fresh(d, [
                    ...d.history,
                    makeEntry(d)
                ]));
                patchUi({
                    tab: 'history',
                    histView: null,
                    lastPick: null
                });
                toast('Saved to History! Teams reset — all players kept');
            },
            reset: async ()=>{
                const ok = await ask({
                    title: 'Start a new tournament?',
                    text: 'The current tournament is saved to the History tab first (if it was started).\nThen only the default team Sayem + Mosaraf stays. Your player list is kept.',
                    ok: 'Reset',
                    danger: true
                });
                if (!ok) return;
                const d = Sref.current;
                const started = d.stage !== 'setup';
                replace(fresh(d, started ? [
                    ...d.history,
                    makeEntry(d)
                ] : d.history));
                patchUi({
                    tab: 'setup',
                    lastPick: null
                });
                toast(started ? 'Saved to History & reset' : 'Reset complete');
            },
            openHist: (id)=>patchUi({
                    histView: id,
                    histTab: 'standings'
                }),
            closeHist: ()=>patchUi({
                    histView: null
                }),
            setHistTab: (histTab)=>patchUi({
                    histTab
                }),
            delHist: async (id)=>{
                const ok = await ask({
                    title: 'Delete this tournament?',
                    text: 'Its saved teams, scores and bracket will be removed permanently.',
                    ok: 'Delete',
                    danger: true
                });
                if (ok) mutate((d)=>d.history = d.history.filter((h)=>h.id !== id));
            },
            logout: async ()=>{
                try {
                    await fetch('/api/logout', {
                        method: 'POST'
                    });
                } catch  {}
                window.location.assign('/login');
            },
            exportData: ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportJSON"])(Sref.current);
                toast('JSON downloaded');
            },
            importFile: async (file)=>{
                try {
                    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validate"])(JSON.parse(await file.text()));
                    const ok = await ask({
                        title: 'Load this file?',
                        text: 'It will replace the current tournament data.',
                        ok: 'Load'
                    });
                    if (!ok) return;
                    replace(data);
                    patchUi({
                        tab: tabFor(data)
                    });
                    toast('Data loaded');
                } catch  {
                    toast('Invalid JSON file', 'err');
                }
            }
        };
    }, [
        mutate,
        replace,
        patchUi,
        toast,
        ask
    ]);
    if (!S) return null;
    const champ = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["championOf"](S);
    const cur = champ ? 3 : S.stage === 'setup' ? 0 : S.stage === 'group' ? 1 : 2;
    const steps = [
        'Team Setup',
        'Group Stage',
        'Knockout',
        'Champion'
    ];
    const tabs = [
        [
            'setup',
            'users',
            'Teams'
        ],
        [
            'players',
            'person',
            'Players'
        ],
        [
            'fixtures',
            'paddle',
            'Matches'
        ],
        [
            'standings',
            'chart',
            'Standings'
        ],
        [
            'bracket',
            'bracket',
            'Knockout'
        ],
        [
            'history',
            'medal',
            'History'
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArtDefs"], {}, void 0, false, {
                fileName: "[project]/components/App.jsx",
                lineNumber: 447,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-orb o1"
            }, void 0, false, {
                fileName: "[project]/components/App.jsx",
                lineNumber: 448,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-orb o2"
            }, void 0, false, {
                fileName: "[project]/components/App.jsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap top-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "brand",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                                    fileName: "[project]/components/App.jsx",
                                    lineNumber: 453,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "ITclan TT Arena"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.jsx",
                                            lineNumber: 454,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "Table Tennis Manager"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.jsx",
                                            lineNumber: 454,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.jsx",
                                    lineNumber: 454,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.jsx",
                            lineNumber: 452,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "top-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `sync ${sync}`,
                                    title: sync === 'cloud' ? 'Saved in the cloud (same data on every device)' : sync === 'file' ? 'Saved in project file data/tournament.json' : sync === 'browser' ? 'Server file storage unavailable — saved in this browser only' : 'Saving…',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                            fileName: "[project]/components/App.jsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this),
                                        sync === 'cloud' ? 'Saved to cloud' : sync === 'file' ? 'Saved to file' : sync === 'browser' ? 'Browser only' : 'Saving…'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.jsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn",
                                    onClick: A.exportData,
                                    title: "Download all data as JSON",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "download"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.jsx",
                                            lineNumber: 460,
                                            columnNumber: 94
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Export"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.jsx",
                                            lineNumber: 460,
                                            columnNumber: 118
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.jsx",
                                    lineNumber: 460,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn",
                                    onClick: ()=>fileRef.current.click(),
                                    title: "Load a JSON backup",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "upload"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.jsx",
                                            lineNumber: 461,
                                            columnNumber: 104
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Import"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.jsx",
                                            lineNumber: 461,
                                            columnNumber: 126
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.jsx",
                                    lineNumber: 461,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn danger",
                                    onClick: A.reset,
                                    title: "Reset to default",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "reset"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.jsx",
                                            lineNumber: 462,
                                            columnNumber: 87
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "New"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.jsx",
                                            lineNumber: 462,
                                            columnNumber: 108
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.jsx",
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn",
                                    onClick: A.logout,
                                    title: "Sign out",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "logout"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.jsx",
                                            lineNumber: 463,
                                            columnNumber: 73
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Logout"
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.jsx",
                                            lineNumber: 463,
                                            columnNumber: 95
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/App.jsx",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.jsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/App.jsx",
                    lineNumber: 451,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/App.jsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stepper",
                        children: steps.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `step ${i === cur ? 'on' : i < cur ? 'done' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        children: i < cur ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "check",
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/components/App.jsx",
                                            lineNumber: 472,
                                            columnNumber: 29
                                        }, this) : i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.jsx",
                                        lineNumber: 472,
                                        columnNumber: 15
                                    }, this),
                                    n
                                ]
                            }, n, true, {
                                fileName: "[project]/components/App.jsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/App.jsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "tabs",
                        children: tabs.map(([k, ic, n])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `tab ${ui.tab === k ? 'on' : ''}`,
                                onClick: ()=>A.setTab(k),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                                        name: ic,
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/components/App.jsx",
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this),
                                    n
                                ]
                            }, k, true, {
                                fileName: "[project]/components/App.jsx",
                                lineNumber: 478,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/App.jsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: [
                            ui.tab === 'setup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Setup$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                S: S,
                                ui: ui,
                                A: A
                            }, void 0, false, {
                                fileName: "[project]/components/App.jsx",
                                lineNumber: 485,
                                columnNumber: 34
                            }, this),
                            ui.tab === 'players' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Players$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                S: S,
                                A: A
                            }, void 0, false, {
                                fileName: "[project]/components/App.jsx",
                                lineNumber: 486,
                                columnNumber: 36
                            }, this),
                            ui.tab === 'fixtures' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Matches$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fixtures"], {
                                S: S,
                                ui: ui,
                                A: A
                            }, void 0, false, {
                                fileName: "[project]/components/App.jsx",
                                lineNumber: 487,
                                columnNumber: 37
                            }, this),
                            ui.tab === 'standings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Standings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Standings"], {
                                S: S
                            }, void 0, false, {
                                fileName: "[project]/components/App.jsx",
                                lineNumber: 488,
                                columnNumber: 38
                            }, this),
                            ui.tab === 'bracket' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Matches$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bracket"], {
                                S: S,
                                A: A
                            }, void 0, false, {
                                fileName: "[project]/components/App.jsx",
                                lineNumber: 489,
                                columnNumber: 36
                            }, this),
                            ui.tab === 'history' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$History$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                S: S,
                                ui: ui,
                                A: A
                            }, void 0, false, {
                                fileName: "[project]/components/App.jsx",
                                lineNumber: 490,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                className: "foot",
                                children: "Your data is saved automatically · use Export for a backup copy"
                            }, void 0, false, {
                                fileName: "[project]/components/App.jsx",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/App.jsx",
                        lineNumber: 484,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/App.jsx",
                lineNumber: 468,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toasts",
                children: toasts.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `toast ${t.type}`,
                        children: t.msg
                    }, t.id, false, {
                        fileName: "[project]/components/App.jsx",
                        lineNumber: 496,
                        columnNumber: 29
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/App.jsx",
                lineNumber: 495,
                columnNumber: 7
            }, this),
            modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal",
                onClick: (e)=>e.target === e.currentTarget && closeModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-c",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: modal.title
                        }, void 0, false, {
                            fileName: "[project]/components/App.jsx",
                            lineNumber: 502,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: modal.text
                        }, void 0, false, {
                            fileName: "[project]/components/App.jsx",
                            lineNumber: 503,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn",
                                    onClick: ()=>closeModal(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/App.jsx",
                                    lineNumber: 505,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `btn ${modal.danger ? 'danger' : 'primary'}`,
                                    onClick: ()=>closeModal(true),
                                    children: modal.ok || 'Confirm'
                                }, void 0, false, {
                                    fileName: "[project]/components/App.jsx",
                                    lineNumber: 506,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/App.jsx",
                            lineNumber: 504,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/App.jsx",
                    lineNumber: 501,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/App.jsx",
                lineNumber: 500,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileRef,
                type: "file",
                accept: "application/json,.json",
                hidden: true,
                onChange: (e)=>{
                    const f = e.target.files[0];
                    e.target.value = '';
                    if (f) A.importFile(f);
                }
            }, void 0, false, {
                fileName: "[project]/components/App.jsx",
                lineNumber: 512,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/App.jsx",
        lineNumber: 446,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/CustomManager.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function CustomManager({ S, A }) {
    const s = S.settings;
    const isGroups = s.format === 'groups';
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // team being edited, or null = building a new one
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const editing = editId ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](S, editId) : null;
    // while editing, the team's own players are selectable too
    const pool = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unassignedPlayers"](S),
        ...editing ? editing.playerIds.map((id)=>S.players.find((p)=>p.id === id)).filter(Boolean) : []
    ];
    const err = sel.length === s.teamSize ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canFormTeam"](S, sel, editId) : null;
    const ready = sel.length === s.teamSize && !err;
    const reset = ()=>{
        setEditId(null);
        setSel([]);
        setName('');
    };
    const toggle = (id)=>setSel((x)=>x.includes(id) ? x.filter((y)=>y !== id) : x.length < s.teamSize ? [
                ...x,
                id
            ] : x);
    const submit = ()=>{
        if (!ready) return;
        const ok = editId ? A.updateTeam(editId, {
            name,
            playerIds: sel
        }) : A.createTeam(sel, name);
        if (ok) reset();
    };
    const startEdit = (t)=>{
        setEditId(t.id);
        setSel([
            ...t.playerIds
        ]);
        setName(t.name || '');
    };
    const groups = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customGroupNames"](S);
    const warns = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupWarnings"](S);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card custom-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-h",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                            name: "users",
                            size: 30
                        }, void 0, false, {
                            fileName: "[project]/components/CustomManager.jsx",
                            lineNumber: 34,
                            columnNumber: 35
                        }, this),
                        "Custom Teams",
                        isGroups ? ' & Groups' : ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CustomManager.jsx",
                    lineNumber: 34,
                    columnNumber: 31
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/CustomManager.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rs-title",
                children: editing ? `Edit team · ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamName"](S, editing)}` : 'Build a team'
            }, void 0, false, {
                fileName: "[project]/components/CustomManager.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            !pool.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty",
                children: [
                    "No free players — add some in the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Players"
                    }, void 0, false, {
                        fileName: "[project]/components/CustomManager.jsx",
                        lineNumber: 38,
                        columnNumber: 66
                    }, this),
                    " tab",
                    S.draft.length ? ' (or clear the spin draft)' : ''
                ]
            }, void 0, true, {
                fileName: "[project]/components/CustomManager.jsx",
                lineNumber: 38,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pick-list",
                children: pool.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: `pick ${sel.includes(p.id) ? 'on' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: sel.includes(p.id),
                                onChange: ()=>toggle(p.id)
                            }, void 0, false, {
                                fileName: "[project]/components/CustomManager.jsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            p.name
                        ]
                    }, p.id, true, {
                        fileName: "[project]/components/CustomManager.jsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/CustomManager.jsx",
                lineNumber: 40,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                style: {
                    marginTop: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "input",
                        style: {
                            flex: 1,
                            minWidth: 140
                        },
                        placeholder: "Team name (optional)",
                        value: name,
                        maxLength: 40,
                        onChange: (e)=>setName(e.target.value),
                        onKeyDown: (e)=>e.key === 'Enter' && submit()
                    }, void 0, false, {
                        fileName: "[project]/components/CustomManager.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary",
                        disabled: !ready,
                        onClick: submit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "check",
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/components/CustomManager.jsx",
                                lineNumber: 51,
                                columnNumber: 76
                            }, this),
                            editing ? 'Save team' : 'Create team'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CustomManager.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn ghost",
                        onClick: reset,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/CustomManager.jsx",
                        lineNumber: 52,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CustomManager.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sub",
                style: {
                    marginTop: 8
                },
                children: [
                    sel.length,
                    "/",
                    s.teamSize,
                    " players selected",
                    err ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            " · ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--danger, #f87171)'
                                },
                                children: err
                            }, void 0, false, {
                                fileName: "[project]/components/CustomManager.jsx",
                                lineNumber: 54,
                                columnNumber: 107
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CustomManager.jsx",
                        lineNumber: 54,
                        columnNumber: 102
                    }, this) : ''
                ]
            }, void 0, true, {
                fileName: "[project]/components/CustomManager.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rs-title",
                style: {
                    marginTop: 18
                },
                children: "Teams"
            }, void 0, false, {
                fileName: "[project]/components/CustomManager.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            !S.teams.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty",
                children: "No teams yet"
            }, void 0, false, {
                fileName: "[project]/components/CustomManager.jsx",
                lineNumber: 58,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cm-list",
                children: S.teams.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `cm-row ${editId === t.id ? 'on' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatars"], {
                                S: S,
                                team: t
                            }, void 0, false, {
                                fileName: "[project]/components/CustomManager.jsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cm-name",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamName"](S, t)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CustomManager.jsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    t.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: t.playerIds.map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playerName"](S, id)).join(' + ')
                                    }, void 0, false, {
                                        fileName: "[project]/components/CustomManager.jsx",
                                        lineNumber: 66,
                                        columnNumber: 28
                                    }, this),
                                    t.locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "default team"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CustomManager.jsx",
                                        lineNumber: 67,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CustomManager.jsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            isGroups && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "input cm-sel",
                                value: t.group || '',
                                onChange: (e)=>A.assignGroup(t.id, e.target.value || null),
                                title: "Group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "No group"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CustomManager.jsx",
                                        lineNumber: 71,
                                        columnNumber: 19
                                    }, this),
                                    groups.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: g,
                                            children: [
                                                "Group ",
                                                g
                                            ]
                                        }, g, true, {
                                            fileName: "[project]/components/CustomManager.jsx",
                                            lineNumber: 72,
                                            columnNumber: 39
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CustomManager.jsx",
                                lineNumber: 70,
                                columnNumber: 17
                            }, this),
                            !t.locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn icon-btn",
                                title: "Edit team",
                                onClick: ()=>startEdit(t),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "pencil",
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/components/CustomManager.jsx",
                                    lineNumber: 75,
                                    columnNumber: 109
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CustomManager.jsx",
                                lineNumber: 75,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn icon-btn danger",
                                title: "Delete team",
                                onClick: ()=>{
                                    if (editId === t.id) reset();
                                    A.delTeam(t.id);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "trash",
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/components/CustomManager.jsx",
                                    lineNumber: 76,
                                    columnNumber: 142
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/CustomManager.jsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this)
                        ]
                    }, t.id, true, {
                        fileName: "[project]/components/CustomManager.jsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/CustomManager.jsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            isGroups && S.teams.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rs-title",
                        style: {
                            marginTop: 18
                        },
                        children: "Group board"
                    }, void 0, false, {
                        fileName: "[project]/components/CustomManager.jsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gboard",
                        children: [
                            ...groups,
                            null
                        ].map((g)=>{
                            const list = S.teams.filter((t)=>g ? t.group === g : !t.group);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gcol",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group-h",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "gl",
                                                style: g ? undefined : {
                                                    background: 'rgba(255,255,255,.1)',
                                                    color: 'var(--muted)'
                                                },
                                                children: g || '?'
                                            }, void 0, false, {
                                                fileName: "[project]/components/CustomManager.jsx",
                                                lineNumber: 90,
                                                columnNumber: 44
                                            }, this),
                                            g ? `Group ${g}` : 'Unassigned',
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sub",
                                                children: [
                                                    "· ",
                                                    list.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CustomManager.jsx",
                                                lineNumber: 90,
                                                columnNumber: 202
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CustomManager.jsx",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, this),
                                    list.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "gteam",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamName"](S, t)
                                        }, t.id, false, {
                                            fileName: "[project]/components/CustomManager.jsx",
                                            lineNumber: 91,
                                            columnNumber: 37
                                        }, this)),
                                    !list.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sub",
                                        children: "empty"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CustomManager.jsx",
                                        lineNumber: 92,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, g || 'none', true, {
                                fileName: "[project]/components/CustomManager.jsx",
                                lineNumber: 89,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/CustomManager.jsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    warns.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hint",
                            children: w.msg
                        }, w.group, false, {
                            fileName: "[project]/components/CustomManager.jsx",
                            lineNumber: 97,
                            columnNumber: 30
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/CustomManager.jsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CustomManager.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/History.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>History
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Standings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Standings.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Matches$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Matches.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function History({ S, ui, A }) {
    const open = ui.histView && S.history.find((h)=>h.id === ui.histView);
    if (open) {
        const V = {
            ...open.snapshot,
            history: []
        };
        const tabs = [
            [
                'standings',
                'chart',
                'Standings'
            ],
            [
                'matches',
                'paddle',
                'Matches'
            ],
            ...V.bracket ? [
                [
                    'bracket',
                    'bracket',
                    'Knockout'
                ]
            ] : []
        ];
        const t = tabs.some(([k])=>k === ui.histTab) ? ui.histTab : 'standings';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    style: {
                        marginBottom: 18
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn",
                            onClick: A.closeHist,
                            children: "← All tournaments"
                        }, void 0, false, {
                            fileName: "[project]/components/History.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sp"
                        }, void 0, false, {
                            fileName: "[project]/components/History.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "badge",
                            children: [
                                open.teams,
                                " teams"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/History.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "badge",
                            children: open.format
                        }, void 0, false, {
                            fileName: "[project]/components/History.jsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sub",
                            children: open.date
                        }, void 0, false, {
                            fileName: "[project]/components/History.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/History.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "card",
                    style: {
                        marginBottom: 20
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                                name: open.champion ? 'trophy' : 'paddle',
                                size: 44
                            }, void 0, false, {
                                fileName: "[project]/components/History.jsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sp",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: 18
                                        },
                                        children: open.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/History.jsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sub",
                                        children: open.champion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Champion: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    style: {
                                                        color: 'var(--gold)'
                                                    },
                                                    children: open.champion
                                                }, void 0, false, {
                                                    fileName: "[project]/components/History.jsx",
                                                    lineNumber: 28,
                                                    columnNumber: 46
                                                }, this),
                                                " · ",
                                                open.members
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/History.jsx",
                                            lineNumber: 28,
                                            columnNumber: 34
                                        }, this) : open.note || 'No champion recorded'
                                    }, void 0, false, {
                                        fileName: "[project]/components/History.jsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/History.jsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/History.jsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/History.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "filters",
                    children: [
                        tabs.map(([k, ic, n])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `pill ${t === k ? 'on' : ''}`,
                                onClick: ()=>A.setHistTab(k),
                                children: n
                            }, k, false, {
                                fileName: "[project]/components/History.jsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "badge gold",
                            style: {
                                marginLeft: 'auto'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "lock",
                                    size: 12
                                }, void 0, false, {
                                    fileName: "[project]/components/History.jsx",
                                    lineNumber: 37,
                                    columnNumber: 71
                                }, this),
                                "Read only"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/History.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/History.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                t === 'standings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Standings$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Standings"], {
                    S: V
                }, void 0, false, {
                    fileName: "[project]/components/History.jsx",
                    lineNumber: 39,
                    columnNumber: 31
                }, this),
                t === 'matches' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Matches$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fixtures"], {
                    S: V,
                    ui: ui,
                    A: A,
                    readOnly: true
                }, void 0, false, {
                    fileName: "[project]/components/History.jsx",
                    lineNumber: 40,
                    columnNumber: 29
                }, this),
                t === 'bracket' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Matches$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bracket"], {
                    S: V,
                    A: A,
                    readOnly: true
                }, void 0, false, {
                    fileName: "[project]/components/History.jsx",
                    lineNumber: 41,
                    columnNumber: 29
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/History.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    const list = [
        ...S.history
    ].reverse();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-h",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                            name: "medal",
                            size: 30
                        }, void 0, false, {
                            fileName: "[project]/components/History.jsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        "Past Tournaments ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "badge",
                            children: list.length
                        }, void 0, false, {
                            fileName: "[project]/components/History.jsx",
                            lineNumber: 50,
                            columnNumber: 60
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/History.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/History.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            list.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hist",
                children: list.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hist-i click",
                        onClick: ()=>e.snapshot && A.openHist(e.id),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tro",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                                    name: e.champion ? 'trophy' : 'paddle',
                                    size: 30
                                }, void 0, false, {
                                    fileName: "[project]/components/History.jsx",
                                    lineNumber: 56,
                                    columnNumber: 36
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/History.jsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sp",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: e.title || e.champion
                                    }, void 0, false, {
                                        fileName: "[project]/components/History.jsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sub",
                                        children: e.champion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Champion: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    style: {
                                                        color: 'var(--gold)'
                                                    },
                                                    children: e.champion
                                                }, void 0, false, {
                                                    fileName: "[project]/components/History.jsx",
                                                    lineNumber: 60,
                                                    columnNumber: 45
                                                }, this),
                                                " · ",
                                                e.members,
                                                " · Runner-up: ",
                                                e.runnerUp || '—'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/History.jsx",
                                            lineNumber: 60,
                                            columnNumber: 33
                                        }, this) : e.note || ''
                                    }, void 0, false, {
                                        fileName: "[project]/components/History.jsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/History.jsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge",
                                children: [
                                    e.teams,
                                    " teams"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/History.jsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge",
                                children: e.format
                            }, void 0, false, {
                                fileName: "[project]/components/History.jsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sub",
                                children: e.date
                            }, void 0, false, {
                                fileName: "[project]/components/History.jsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            e.snapshot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn sm primary",
                                onClick: (ev)=>{
                                    ev.stopPropagation();
                                    A.openHist(e.id);
                                },
                                children: "View"
                            }, void 0, false, {
                                fileName: "[project]/components/History.jsx",
                                lineNumber: 66,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn sm icon-btn danger",
                                title: "Delete",
                                onClick: (ev)=>{
                                    ev.stopPropagation();
                                    A.delHist(e.id);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "trash",
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/components/History.jsx",
                                    lineNumber: 67,
                                    columnNumber: 134
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/History.jsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        ]
                    }, e.id || e.date + e.champion, true, {
                        fileName: "[project]/components/History.jsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/History.jsx",
                lineNumber: 53,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty",
                children: "Finished and reset tournaments are saved here, with all teams, scores, standings and bracket."
            }, void 0, false, {
                fileName: "[project]/components/History.jsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/History.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Matches.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bracket",
    ()=>Bracket,
    "Fixtures",
    ()=>Fixtures,
    "KoCta",
    ()=>KoCta,
    "MatchCard",
    ()=>MatchCard,
    "infoMap",
    ()=>infoMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function infoMap(S) {
    const m = new Map();
    S.matches.forEach((x)=>m.set(x.id, {
            ...x,
            ev: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["evalMatch"](x.games, x.all, x.draw),
            ready: true
        }));
    if (S.bracket) __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveBracket"](S.bracket).flat().forEach((x)=>m.set(x.id, {
            ...x,
            all: S.bracket.all
        }));
    return m;
}
function MatchCard({ S, info, ko, label, badge, onScore, readOnly }) {
    const { t1, t2, ev, ready, games } = info;
    const n = games.length;
    const teams = [
        t1,
        t2
    ];
    const w = ev.done ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tn"])(S, ev.winner === 1 ? t1 : t2) : '';
    const hasTie = ev.states.includes('tie');
    const issues = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scoreIssues"](games, S.settings);
    const firstIssue = issues.findIndex((x)=>x);
    const statusCls = ev.draw ? 'gold' : ev.done ? 'em' : ev.started ? 'live' : '';
    const statusTxt = ev.draw ? 'Draw' : ev.done ? 'Completed' : ev.started ? 'In progress' : ready ? 'Upcoming' : 'Waiting';
    const cell = (g, s)=>{
        const st = ev.states[g];
        const cls = [
            'sc'
        ];
        if (st === 'w1' && s === 0 || st === 'w2' && s === 1) cls.push('w');
        if (st === 'w1' && s === 1 || st === 'w2' && s === 0) cls.push('l');
        if (st === 'tie') cls.push('bad');
        else if (issues[g]) cls.push('warn');
        if (st === 'skipped') cls.push('skip');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: cls.join(' '),
            type: "number",
            inputMode: "numeric",
            min: "0",
            max: "99",
            disabled: !ready || readOnly,
            value: games[g][s] ?? '',
            "aria-label": `Game ${g + 1} score`,
            onChange: (e)=>onScore(info.id, ko, g, s, e.target.value)
        }, `${g}-${s}`, false, {
            fileName: "[project]/components/Matches.jsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `match ${ev.done ? 'done' : ''} ${ready ? '' : 'locked'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "match-h",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "num",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "badge vio",
                        children: badge
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 52,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sp"
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `badge ${statusCls}`,
                        children: statusTxt
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "board",
                style: {
                    '--g': n
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    games.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hd",
                            children: [
                                "G",
                                i + 1
                            ]
                        }, i, true, {
                            fileName: "[project]/components/Matches.jsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hd",
                        children: "WON"
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    [
                        1,
                        2
                    ].map((side)=>{
                        const t = teams[side - 1] ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](S, teams[side - 1]) : null;
                        const win = ev.done && ev.winner === side;
                        return [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `tn ${win ? 'win' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                                                name: win ? 'crown' : 'ball',
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/Matches.jsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamName"](S, t) : 'TBD'
                                            }, void 0, false, {
                                                fileName: "[project]/components/Matches.jsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Matches.jsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: t ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["members"])(S, t) : 'Waiting for result'
                                    }, void 0, false, {
                                        fileName: "[project]/components/Matches.jsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `n${side}`, true, {
                                fileName: "[project]/components/Matches.jsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            games.map((_, g)=>cell(g, side - 1)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `gw ${win ? 'win' : ''}`,
                                children: side === 1 ? ev.w1 : ev.w2
                            }, `w${side}`, false, {
                                fileName: "[project]/components/Matches.jsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ];
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            hasTie ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "verdict err",
                children: "A game can’t end level — one side must win each game."
            }, void 0, false, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 79,
                columnNumber: 9
            }, this) : ev.draw ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "verdict ok",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "check",
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 81,
                        columnNumber: 37
                    }, this),
                    " Match drawn ",
                    ev.w1,
                    "–",
                    ev.w2
                ]
            }, void 0, true, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 81,
                columnNumber: 9
            }, this) : ev.level ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "verdict err",
                children: [
                    "Level ",
                    ev.w1,
                    "–",
                    ev.w2,
                    " — draws are off. Enable “Allow draws” or use an odd number of games."
                ]
            }, void 0, true, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 83,
                columnNumber: 9
            }, this) : ev.done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "verdict ok",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                        name: "trophy",
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    " ",
                    w,
                    " wins ",
                    Math.max(ev.w1, ev.w2),
                    "–",
                    Math.min(ev.w1, ev.w2)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 85,
                columnNumber: 9
            }, this) : !ready ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "verdict",
                children: "Waiting for the previous round to finish."
            }, void 0, false, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 89,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "verdict",
                children: "Enter the score of each game (e.g. 21 – 17)."
            }, void 0, false, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            !hasTie && firstIssue >= 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "verdict warn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "info",
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 94,
                        columnNumber: 39
                    }, this),
                    " Game ",
                    firstIssue + 1,
                    ": ",
                    issues[firstIssue]
                ]
            }, void 0, true, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Matches.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
function KoCta({ S, A }) {
    const pg = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupProgress"](S);
    if (S.stage === 'group' && pg.complete) {
        const seeds = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["qualifiedSeeds"](S);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "cta",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "big",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                        name: "trophy",
                        size: 40
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 106,
                        columnNumber: 30
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Matches.jsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sp",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Group stage complete!"
                        }, void 0, false, {
                            fileName: "[project]/components/Matches.jsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sub",
                            children: [
                                "Qualified:",
                                ' ',
                                seeds.map((id, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    i + 1,
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Matches.jsx",
                                                lineNumber: 112,
                                                columnNumber: 30
                                            }, this),
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tn"])(S, id),
                                            "   "
                                        ]
                                    }, id, true, {
                                        fileName: "[project]/components/Matches.jsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Matches.jsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Matches.jsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn gold lg",
                    onClick: A.startKO,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "swords"
                        }, void 0, false, {
                            fileName: "[project]/components/Matches.jsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        " Start ",
                        seeds.length === 2 ? 'Final' : 'Knockout'
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Matches.jsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Matches.jsx",
            lineNumber: 105,
            columnNumber: 7
        }, this);
    }
    if (S.stage === 'knockout') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "cta",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "big",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                        name: "bracket",
                        size: 40
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 125,
                        columnNumber: 30
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Matches.jsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sp",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Knockout stage is live"
                        }, void 0, false, {
                            fileName: "[project]/components/Matches.jsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sub",
                            children: "Group results are locked while the bracket is running."
                        }, void 0, false, {
                            fileName: "[project]/components/Matches.jsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Matches.jsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn primary",
                    onClick: ()=>A.setTab('bracket'),
                    children: [
                        "Open bracket ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "arrow",
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/Matches.jsx",
                            lineNumber: 131,
                            columnNumber: 24
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Matches.jsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Matches.jsx",
            lineNumber: 124,
            columnNumber: 7
        }, this);
    }
    return null;
}
function Fixtures({ S, ui, A, readOnly }) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>infoMap(S), [
        S
    ]);
    if (S.stage === 'setup') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Empty"], {
            icon: "paddle",
            title: "No matches yet",
            children: [
                "Build your teams, then press ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: "Start Tournament"
                }, void 0, false, {
                    fileName: "[project]/components/Matches.jsx",
                    lineNumber: 144,
                    columnNumber: 38
                }, this),
                " to generate the fixtures automatically.",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 16
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary",
                        onClick: ()=>A.setTab('setup'),
                        children: "Go to Teams"
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Matches.jsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Matches.jsx",
            lineNumber: 143,
            columnNumber: 7
        }, this);
    }
    const groups = [
        ...new Set(S.matches.map((m)=>m.group).filter(Boolean))
    ];
    const f = ui.filter;
    const idx = new Map(S.matches.map((m, i)=>[
            m.id,
            i + 1
        ]));
    const list = S.matches.filter((m)=>{
        const d = map.get(m.id).ev.done;
        if (f === 'all') return true;
        if (f === 'pending') return !d;
        if (f === 'done') return d;
        return m.group === f;
    });
    const pg = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupProgress"](S);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KoCta, {
                S: S,
                A: A
            }, void 0, false, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 164,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                style: {
                    marginBottom: 18
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-h",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                                        name: "paddle",
                                        size: 30
                                    }, void 0, false, {
                                        fileName: "[project]/components/Matches.jsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    "Group Stage Fixtures"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Matches.jsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sub",
                                children: [
                                    pg.done,
                                    " / ",
                                    pg.total,
                                    " matches played"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Matches.jsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prog",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            style: {
                                width: `${pg.total ? pg.done / pg.total * 100 : 0}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Matches.jsx",
                            lineNumber: 170,
                            columnNumber: 31
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filters",
                children: [
                    'all',
                    ...groups,
                    'pending',
                    'done'
                ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `pill ${f === k ? 'on' : ''}`,
                        onClick: ()=>A.setFilter(k),
                        children: k === 'all' ? 'All' : k === 'pending' ? 'Pending' : k === 'done' ? 'Completed' : 'Group ' + k
                    }, k, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "matches",
                children: list.length ? list.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MatchCard, {
                        S: S,
                        info: map.get(m.id),
                        ko: false,
                        label: 'Match ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pad"])(idx.get(m.id)),
                        badge: m.group ? `Group ${m.group}` : null,
                        onScore: A.setScore,
                        readOnly: readOnly
                    }, m.id, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "empty",
                    children: "Nothing here"
                }, void 0, false, {
                    fileName: "[project]/components/Matches.jsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Matches.jsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
const COLORS = [
    '#fbbf24',
    '#10b981',
    '#22d3ee',
    '#f472b6',
    '#818cf8'
];
function Confetti() {
    const bits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 46
        }, ()=>({
                l: Math.random() * 100,
                c: COLORS[Math.floor(Math.random() * 5)],
                d: 2.4 + Math.random() * 3,
                w: Math.random() * 3
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "confetti",
        children: bits.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                style: {
                    left: `${b.l}%`,
                    background: b.c,
                    animationDuration: `${b.d}s`,
                    animationDelay: `${b.w}s`
                }
            }, i, false, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 202,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Matches.jsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
function Bracket({ S, A, readOnly }) {
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>infoMap(S), [
        S
    ]);
    const pg = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupProgress"](S);
    if (!S.bracket) {
        if (S.stage === 'setup') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Empty"], {
            icon: "bracket",
            title: "Knockout bracket",
            children: "Appears after the group stage is finished."
        }, void 0, false, {
            fileName: "[project]/components/Matches.jsx",
            lineNumber: 213,
            columnNumber: 14
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KoCta, {
                    S: S,
                    A: A
                }, void 0, false, {
                    fileName: "[project]/components/Matches.jsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Empty"], {
                    icon: "bracket",
                    title: "Group stage in progress",
                    children: [
                        pg.done,
                        " of ",
                        pg.total,
                        " matches played. The bracket is generated automatically from the standings."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Matches.jsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Matches.jsx",
            lineNumber: 215,
            columnNumber: 7
        }, this);
    }
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveBracket"](S.bracket);
    const ch = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["championOf"](S);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            ch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "champ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Confetti, {}, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tro",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                            name: "trophy",
                            size: 58
                        }, void 0, false, {
                            fileName: "[project]/components/Matches.jsx",
                            lineNumber: 230,
                            columnNumber: 32
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sub",
                        style: {
                            letterSpacing: '.2em',
                            textTransform: 'uppercase',
                            fontWeight: 800
                        },
                        children: "Tournament Champion"
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tn"])(S, ch.champion)
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sub",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["members"])(S, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](S, ch.champion)),
                            "  ·  Runner-up: ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tn"])(S, ch.runnerUp)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn gold lg",
                            onClick: A.finish,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                    name: "check"
                                }, void 0, false, {
                                    fileName: "[project]/components/Matches.jsx",
                                    lineNumber: 235,
                                    columnNumber: 78
                                }, this),
                                "Save to history & start new"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Matches.jsx",
                            lineNumber: 235,
                            columnNumber: 27
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 228,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                style: {
                    marginBottom: 14
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 17
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                                name: "bracket",
                                size: 30
                            }, void 0, false, {
                                fileName: "[project]/components/Matches.jsx",
                                lineNumber: 240,
                                columnNumber: 38
                            }, this),
                            " Knockout Bracket"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sp"
                    }, void 0, false, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    !ch && !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn sm",
                        onClick: A.backToGroups,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "reset",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/components/Matches.jsx",
                                lineNumber: 242,
                                columnNumber: 82
                            }, this),
                            "Edit group results"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 242,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bracket",
                children: res.map((round, r)=>{
                    const name = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roundName"](S.bracket.size, r);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "round",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "round-h",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/components/Matches.jsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, this),
                            round.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MatchCard, {
                                    S: S,
                                    info: map.get(m.id),
                                    ko: true,
                                    label: round.length > 1 ? `${name} ${m.i + 1}` : name,
                                    onScore: A.setScore,
                                    readOnly: readOnly
                                }, m.id, false, {
                                    fileName: "[project]/components/Matches.jsx",
                                    lineNumber: 251,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, r, true, {
                        fileName: "[project]/components/Matches.jsx",
                        lineNumber: 248,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/Matches.jsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Matches.jsx",
        lineNumber: 226,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Players.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Players
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
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
function Players({ S, A }) {
    const [names, setNames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const locked = S.stage !== 'setup';
    const teamOf = new Map();
    S.teams.forEach((t)=>t.playerIds.forEach((id)=>teamOf.set(id, t)));
    const inTeams = S.players.filter((p)=>teamOf.has(p.id)).length;
    function add() {
        if (A.addPlayers(names)) setNames('');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "stack",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-h",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                                        name: "person",
                                        size: 30
                                    }, void 0, false, {
                                        fileName: "[project]/components/Players.jsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    "Players"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Players.jsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "badge",
                                        children: [
                                            S.players.length,
                                            " total"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Players.jsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "badge em",
                                        children: [
                                            inTeams,
                                            " in teams"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Players.jsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "badge gold",
                                        children: [
                                            S.players.length - inTeams,
                                            " available"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Players.jsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Players.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Players.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "input sp",
                                value: names,
                                onChange: (e)=>setNames(e.target.value),
                                onKeyDown: (e)=>e.key === 'Enter' && add(),
                                placeholder: "Add players — separate names with comma (e.g. Rafi, Nabil)",
                                autoComplete: "off"
                            }, void 0, false, {
                                fileName: "[project]/components/Players.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn primary",
                                onClick: add,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "plus"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Players.jsx",
                                        lineNumber: 39,
                                        columnNumber: 57
                                    }, this),
                                    "Add"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Players.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Players.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sub",
                        style: {
                            marginTop: 10
                        },
                        children: "This list stays even after a tournament reset. Players who are not in a team yet are the ones the spinner will pick from."
                    }, void 0, false, {
                        fileName: "[project]/components/Players.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Players.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "players-grid",
                children: [
                    S.players.map((p, i)=>{
                        const t = teamOf.get(p.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "pl-av",
                                    style: {
                                        background: AV[i % AV.length]
                                    },
                                    children: p.name[0]?.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/components/Players.jsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pl-i",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: p.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/Players.jsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            className: t ? 'in' : '',
                                            children: t ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamName"](S, t) : 'Available for draw'
                                        }, void 0, false, {
                                            fileName: "[project]/components/Players.jsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Players.jsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                !locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn icon-btn ghost",
                                    title: "Remove player",
                                    onClick: ()=>A.delPlayer(p.id),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                        name: "trash",
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/components/Players.jsx",
                                        lineNumber: 58,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Players.jsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/components/Players.jsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this);
                    }),
                    !S.players.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "empty",
                        children: "No players yet"
                    }, void 0, false, {
                        fileName: "[project]/components/Players.jsx",
                        lineNumber: 64,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Players.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Players.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/RulesSummary.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RulesSummary,
    "rulesLines",
    ()=>rulesLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function rulesLines(settings) {
    const c = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ruleCfg"](settings);
    const n = c.gamesPerMatch;
    const pts = c.pointSystem === 'games' ? 'Table points = number of games won (each game win is 1 point).' : `Table points per match: win ${c.ptsWin}${c.allowDraw ? ` · draw ${c.ptsDraw}` : ''} · loss ${c.ptsLoss}.`;
    return [
        [
            'Game',
            `First to ${c.pointsPerGame} points${c.winByTwo ? `; at ${c.pointsPerGame - 1}–${c.pointsPerGame - 1} play on until one side leads by 2 (deuce)` : ' (no deuce)'}.`
        ],
        [
            'Group match',
            `${n} game${n > 1 ? 's' : ''}${c.playAll || n % 2 === 0 ? ', all played and counted' : ', best-of (stops when decided)'}. ${c.allowDraw ? 'A level result is a draw.' : 'No draws.'}`
        ],
        [
            'Table points',
            pts
        ],
        [
            'Tie-break',
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIEBREAKS"][c.tiebreak]?.text || ''
        ],
        [
            'Knockout',
            `Best of ${c.knockoutGames} games, no draws.`
        ]
    ];
}
function RulesSummary({ settings, title = 'How the table is calculated' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "note rules-sum",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: "info",
                size: 18
            }, void 0, false, {
                fileName: "[project]/components/RulesSummary.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/RulesSummary.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: rulesLines(settings).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: k
                                    }, void 0, false, {
                                        fileName: "[project]/components/RulesSummary.jsx",
                                        lineNumber: 30,
                                        columnNumber: 25
                                    }, this),
                                    " ",
                                    v
                                ]
                            }, k, true, {
                                fileName: "[project]/components/RulesSummary.jsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/RulesSummary.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RulesSummary.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RulesSummary.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Setup.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Setup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WheelCanvas$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WheelCanvas.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RulesSummary$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RulesSummary.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomManager$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CustomManager.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Setup({ S, ui, A }) {
    const locked = S.stage !== 'setup';
    const s = S.settings;
    const c = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ruleCfg"](s);
    const isGroups = s.format === 'groups';
    const custom = s.assignMode === 'custom';
    const mode = isGroups ? ui.mode : 'players';
    const wheelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const angleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [spinning, setSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const stopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [auto, setAuto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const inTeam = new Set(S.teams.flatMap((t)=>t.playerIds));
    const poolPlayers = S.players.filter((p)=>!inTeam.has(p.id) && !S.draft.includes(p.id));
    const poolTeams = S.teams.filter((t)=>!t.group);
    const items = (mode === 'players' ? poolPlayers : poolTeams).map((x)=>({
            id: x.id,
            label: mode === 'players' ? x.name : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamName"](S, x)
        }));
    const caps = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupCaps"](S.teams.length, s.groupSize);
    const counts = caps.map((_, gi)=>S.teams.filter((t)=>t.group === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["letters"](gi)).length);
    const gi = counts.findIndex((c, i)=>c < caps[i]);
    const openGroups = caps.filter((c, i)=>counts[i] < c).length;
    const determined = mode === 'players' ? poolPlayers.length > 0 && S.draft.length + poolPlayers.length === s.teamSize : poolTeams.length > 0 && openGroups === 1;
    async function spin() {
        if (spinning || !items.length) return;
        if (determined) return A.settle(mode);
        setSpinning(true);
        const idx = await wheelRef.current.spin();
        setSpinning(false);
        if (idx >= 0) A.pick(mode, items[idx]);
    }
    /** Spins the wheel one pick at a time (animated) until nobody is left. */ async function autoSpin() {
        if (spinning || !items.length) return;
        if (determined) return A.settle(mode);
        stopRef.current = false;
        setSpinning(true);
        setAuto(true);
        try {
            while(!stopRef.current && wheelRef.current && wheelRef.current.items().length){
                const list = wheelRef.current.items();
                const idx = await wheelRef.current.spin(true);
                if (idx < 0) break;
                A.pick(mode, list[idx]);
                await new Promise((r)=>setTimeout(r, 1000)); // show the pick, let the wheel rebuild
            }
        } finally{
            setSpinning(false);
            setAuto(false);
        }
    }
    const select = (key, vals, labels)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "input",
            value: s[key],
            disabled: locked,
            onChange: (e)=>A.setting(key, Number(e.target.value)),
            children: vals.map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: x,
                    children: labels ? labels[i] : x
                }, x, false, {
                    fileName: "[project]/components/Setup.jsx",
                    lineNumber: 72,
                    columnNumber: 28
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Setup.jsx",
            lineNumber: 71,
            columnNumber: 5
        }, this);
    const TeamCard = ({ t })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "team",
            children: [
                !locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tools",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn icon-btn",
                            title: "Rename",
                            onClick: ()=>A.renameTeam(t.id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "pencil",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 80,
                                columnNumber: 94
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Setup.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn icon-btn danger",
                            title: "Delete team",
                            onClick: ()=>A.delTeam(t.id),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                name: "trash",
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 81,
                                columnNumber: 103
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Setup.jsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Setup.jsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatars"], {
                    S: S,
                    team: t
                }, void 0, false, {
                    fileName: "[project]/components/Setup.jsx",
                    lineNumber: 84,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tn",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamName"](S, t)
                }, void 0, false, {
                    fileName: "[project]/components/Setup.jsx",
                    lineNumber: 85,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tm",
                    children: [
                        t.name ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["members"])(S, t) : `${t.playerIds.length} player${t.playerIds.length === 1 ? '' : 's'}`,
                        t.locked ? ' · default' : ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Setup.jsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Setup.jsx",
            lineNumber: 77,
            columnNumber: 5
        }, this);
    const groupNames = [
        ...new Set(S.teams.map((t)=>t.group).filter(Boolean))
    ].sort();
    const matchesCount = S.teams.length > 1 ? S.teams.length * (S.teams.length - 1) / 2 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stack",
                children: locked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "note",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "info",
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/Setup.jsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                "The tournament is running, so teams and rules are locked. Use ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "New"
                                }, void 0, false, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 102,
                                    columnNumber: 80
                                }, this),
                                " (top right) to start a fresh one — only ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Sayem + Mosaraf"
                                }, void 0, false, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 102,
                                    columnNumber: 131
                                }, this),
                                " stays as a team (all players are kept)."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Setup.jsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Setup.jsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "cta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "big",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                                        name: "paddle",
                                        size: 38
                                    }, void 0, false, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 107,
                                        columnNumber: 36
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sp",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Ready to play?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sub",
                                            children: [
                                                S.teams.length,
                                                " team",
                                                S.teams.length === 1 ? "" : "s",
                                                " · ",
                                                isGroups ? 'grouped round-robin' : `${matchesCount} league matches`,
                                                " · ",
                                                s.gamesPerMatch,
                                                " games per match"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn primary lg",
                                    onClick: A.start,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "play"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 114,
                                            columnNumber: 68
                                        }, this),
                                        "Start Tournament"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Setup.jsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rs-title",
                                    style: {
                                        marginTop: 0
                                    },
                                    children: "Team & group assignment"
                                }, void 0, false, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "seg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: !custom ? 'on' : '',
                                            onClick: ()=>A.setAssignMode('spin'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "zap",
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Setup.jsx",
                                                    lineNumber: 120,
                                                    columnNumber: 97
                                                }, this),
                                                "Spin (default)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: custom ? 'on' : '',
                                            onClick: ()=>A.setAssignMode('custom'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "pencil",
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Setup.jsx",
                                                    lineNumber: 121,
                                                    columnNumber: 98
                                                }, this),
                                                "Custom"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Setup.jsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        custom ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomManager$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            S: S,
                            A: A
                        }, void 0, false, {
                            fileName: "[project]/components/Setup.jsx",
                            lineNumber: 125,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "card wheel-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-h",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                                                    name: "wheel",
                                                    size: 30
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Setup.jsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this),
                                                "Lucky Spinner"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        isGroups && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "seg modes",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: mode === 'players' ? 'on' : '',
                                                    onClick: ()=>A.setMode('players'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "users",
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Setup.jsx",
                                                            lineNumber: 131,
                                                            columnNumber: 109
                                                        }, this),
                                                        "Players ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "arr",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Setup.jsx",
                                                            lineNumber: 131,
                                                            columnNumber: 148
                                                        }, this),
                                                        " Teams"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Setup.jsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: mode === 'teams' ? 'on' : '',
                                                    onClick: ()=>A.setMode('teams'),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "layers",
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Setup.jsx",
                                                            lineNumber: 132,
                                                            columnNumber: 105
                                                        }, this),
                                                        "Teams ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "arr",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Setup.jsx",
                                                            lineNumber: 132,
                                                            columnNumber: 143
                                                        }, this),
                                                        " Groups"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Setup.jsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WheelCanvas$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    ref: wheelRef,
                                    items: items,
                                    angleRef: angleRef
                                }, void 0, false, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row",
                                    style: {
                                        justifyContent: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn gold lg",
                                            disabled: !items.length || spinning,
                                            onClick: spin,
                                            children: determined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "check",
                                                        size: 19
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Setup.jsx",
                                                        lineNumber: 139,
                                                        columnNumber: 35
                                                    }, this),
                                                    "COMPLETE"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 139,
                                                columnNumber: 33
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "zap",
                                                        size: 19
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Setup.jsx",
                                                        lineNumber: 139,
                                                        columnNumber: 82
                                                    }, this),
                                                    "SPIN"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 139,
                                                columnNumber: 80
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        auto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn lg danger",
                                            onClick: ()=>stopRef.current = true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "x"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Setup.jsx",
                                                    lineNumber: 142,
                                                    columnNumber: 94
                                                }, this),
                                                "Stop"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn lg",
                                            disabled: !items.length || spinning,
                                            onClick: autoSpin,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                    name: "shuffle"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Setup.jsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this),
                                                "Auto ",
                                                mode === 'players' ? 'draw all' : 'group all'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                determined && !spinning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hint",
                                    children: mode === 'players' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Only ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: poolPlayers.length + S.draft.length
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 152,
                                                columnNumber: 30
                                            }, this),
                                            " left — they form the last team, ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "no spin needed"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 152,
                                                columnNumber: 107
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 152,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Only one group left — remaining teams go there, ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "no spin needed"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 153,
                                                columnNumber: 73
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 153,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this),
                                mode === 'players' && !determined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hint",
                                    children: [
                                        poolPlayers.length,
                                        " player",
                                        poolPlayers.length === 1 ? '' : 's',
                                        " waiting · manage the list in the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Players"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 157,
                                            columnNumber: 137
                                        }, this),
                                        " tab"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 157,
                                    columnNumber: 17
                                }, this),
                                ui.lastPick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "picked",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "sparkles",
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 159,
                                            columnNumber: 74
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: ui.lastPick
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 159,
                                            columnNumber: 109
                                        }, this)
                                    ]
                                }, ui.lastPick, true, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 159,
                                    columnNumber: 32
                                }, this),
                                mode === 'players' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sub",
                                            style: {
                                                marginTop: 16
                                            },
                                            children: [
                                                "Next team drafting · ",
                                                S.draft.length,
                                                "/",
                                                s.teamSize,
                                                " picked"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "draft",
                                            children: Array.from({
                                                length: s.teamSize
                                            }, (_, i)=>{
                                                const id = S.draft[i];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `slot ${id ? 'f' : ''}`,
                                                    children: id ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playerName"](S, id) : 'Player ' + (i + 1)
                                                }, i, false, {
                                                    fileName: "[project]/components/Setup.jsx",
                                                    lineNumber: 166,
                                                    columnNumber: 31
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this),
                                        S.draft.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "row",
                                            style: {
                                                justifyContent: 'center',
                                                marginTop: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn sm",
                                                    onClick: A.finishDraft,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "check",
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Setup.jsx",
                                                            lineNumber: 171,
                                                            columnNumber: 74
                                                        }, this),
                                                        "Make team with ",
                                                        S.draft.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Setup.jsx",
                                                    lineNumber: 171,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn sm ghost",
                                                    onClick: A.clearDraft,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                            name: "reset",
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Setup.jsx",
                                                            lineNumber: 172,
                                                            columnNumber: 79
                                                        }, this),
                                                        "Undo picks"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Setup.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 170,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sub",
                                            style: {
                                                marginTop: 16
                                            },
                                            children: gi >= 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "Next spin goes to ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        style: {
                                                            color: 'var(--em)'
                                                        },
                                                        children: [
                                                            "Group ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["letters"](gi)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Setup.jsx",
                                                        lineNumber: 179,
                                                        columnNumber: 53
                                                    }, this),
                                                    " · ",
                                                    counts[gi],
                                                    "/",
                                                    caps[gi],
                                                    " filled"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 179,
                                                columnNumber: 33
                                            }, this) : 'All teams are grouped 🎉'
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "row",
                                            style: {
                                                justifyContent: 'center',
                                                marginTop: 8
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn sm ghost",
                                                onClick: A.clearGroups,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                        name: "reset",
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Setup.jsx",
                                                        lineNumber: 182,
                                                        columnNumber: 78
                                                    }, this),
                                                    "Clear groups"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 182,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Setup.jsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Setup.jsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Setup.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stack",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-h",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                                            name: "users",
                                            size: 30
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 194,
                                            columnNumber: 39
                                        }, this),
                                        "Teams ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "badge em",
                                            children: S.teams.length
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 194,
                                            columnNumber: 75
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 194,
                                    columnNumber: 35
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            !S.teams.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty",
                                children: custom ? 'No teams yet — build one in Custom Teams' : 'No teams yet — spin the wheel to build some'
                            }, void 0, false, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this) : isGroups ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    groupNames.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group-h",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "gl",
                                                            children: g
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Setup.jsx",
                                                            lineNumber: 201,
                                                            columnNumber: 44
                                                        }, this),
                                                        "Group ",
                                                        g
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Setup.jsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "teams-grid",
                                                    children: S.teams.filter((t)=>t.group === g).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamCard, {
                                                            t: t
                                                        }, t.id, false, {
                                                            fileName: "[project]/components/Setup.jsx",
                                                            lineNumber: 202,
                                                            columnNumber: 96
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Setup.jsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, g, true, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this)),
                                    S.teams.some((t)=>!t.group) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group-h",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "gl",
                                                        style: {
                                                            background: 'rgba(255,255,255,.1)',
                                                            color: 'var(--muted)'
                                                        },
                                                        children: "?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Setup.jsx",
                                                        lineNumber: 207,
                                                        columnNumber: 44
                                                    }, this),
                                                    "Not grouped yet"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "teams-grid",
                                                children: S.teams.filter((t)=>!t.group).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamCard, {
                                                        t: t
                                                    }, t.id, false, {
                                                        fileName: "[project]/components/Setup.jsx",
                                                        lineNumber: 208,
                                                        columnNumber: 91
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "teams-grid",
                                children: S.teams.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamCard, {
                                        t: t
                                    }, t.id, false, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 213,
                                        columnNumber: 61
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Setup.jsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-h",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                                                name: "sliders",
                                                size: 30
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this),
                                            "Tournament Rules"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "badge gold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                                name: "lock",
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 220,
                                                columnNumber: 53
                                            }, this),
                                            "Format locked · scoring rules editable"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 220,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rs-title",
                                children: "Format"
                            }, void 0, false, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                style: {
                                    marginBottom: 14
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "seg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: !isGroups ? 'on' : '',
                                            disabled: locked,
                                            onClick: ()=>A.setFormat('league'),
                                            children: "League · all vs all"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: isGroups ? 'on' : '',
                                            disabled: locked,
                                            onClick: ()=>A.setFormat('groups'),
                                            children: "Groups"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "settings",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Players per team"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 231,
                                                columnNumber: 36
                                            }, this),
                                            select('teamSize', [
                                                1,
                                                2,
                                                3,
                                                4
                                            ])
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this),
                                    isGroups ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: "Teams per group"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Setup.jsx",
                                                        lineNumber: 234,
                                                        columnNumber: 40
                                                    }, this),
                                                    select('groupSize', [
                                                        2,
                                                        3,
                                                        4,
                                                        5,
                                                        6
                                                    ])
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: "Qualify per group"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Setup.jsx",
                                                        lineNumber: 235,
                                                        columnNumber: 40
                                                    }, this),
                                                    select('advancePerGroup', [
                                                        1,
                                                        2,
                                                        3,
                                                        4
                                                    ])
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Qualify for knockout"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            select('qualifiers', [
                                                2,
                                                4,
                                                8
                                            ], [
                                                'Top 2 (Final)',
                                                'Top 4 (Semi-Finals)',
                                                'Top 8 (Quarter-Finals)'
                                            ])
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rs-title",
                                children: "Match & game"
                            }, void 0, false, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "settings",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Games per group match"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 247,
                                                columnNumber: 36
                                            }, this),
                                            select('gamesPerMatch', [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5,
                                                6,
                                                7
                                            ])
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Games per knockout match"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "input",
                                                value: s.knockoutGames,
                                                disabled: !!S.bracket,
                                                onChange: (e)=>A.setting('knockoutGames', Number(e.target.value)),
                                                children: [
                                                    1,
                                                    3,
                                                    5,
                                                    7
                                                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: x,
                                                        children: [
                                                            "Best of ",
                                                            x
                                                        ]
                                                    }, x, true, {
                                                        fileName: "[project]/components/Setup.jsx",
                                                        lineNumber: 251,
                                                        columnNumber: 43
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field",
                                        style: {
                                            gridColumn: '1 / -1'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Points per game (a game is played to…)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "input",
                                                        style: {
                                                            width: 96
                                                        },
                                                        type: "number",
                                                        min: "1",
                                                        max: "99",
                                                        defaultValue: c.pointsPerGame,
                                                        onBlur: (e)=>{
                                                            const n = parseInt(e.target.value, 10);
                                                            if (n >= 1 && n <= 99) A.setting('pointsPerGame', n);
                                                            else e.target.value = c.pointsPerGame;
                                                        },
                                                        onKeyDown: (e)=>e.key === 'Enter' && e.currentTarget.blur()
                                                    }, c.pointsPerGame, false, {
                                                        fileName: "[project]/components/Setup.jsx",
                                                        lineNumber: 257,
                                                        columnNumber: 17
                                                    }, this),
                                                    [
                                                        11,
                                                        15,
                                                        20,
                                                        21
                                                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: `pill ${c.pointsPerGame === n ? 'on' : ''}`,
                                                            onClick: ()=>A.setting('pointsPerGame', n),
                                                            children: n
                                                        }, n, false, {
                                                            fileName: "[project]/components/Setup.jsx",
                                                            lineNumber: 269,
                                                            columnNumber: 19
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sub",
                                                        children: "11 = ITTF standard"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Setup.jsx",
                                                        lineNumber: 271,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 256,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tgl-list",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "toggle",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: !!c.winByTwo,
                                                onChange: (e)=>A.setting('winByTwo', e.target.checked)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 276,
                                                columnNumber: 39
                                            }, this),
                                            "Win by 2 points (deuce) ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sub",
                                                children: "e.g. 11–9, 12–10 · ITTF rule"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 276,
                                                columnNumber: 169
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "toggle",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: !!c.checkScores,
                                                onChange: (e)=>A.setting('checkScores', e.target.checked)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 277,
                                                columnNumber: 39
                                            }, this),
                                            "Warn me when a score breaks the game rules"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "toggle",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: !!s.playAll,
                                                disabled: locked,
                                                onChange: (e)=>A.setting('playAll', e.target.checked)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 278,
                                                columnNumber: 39
                                            }, this),
                                            "Play & count all games in every match ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sub",
                                                children: "(ITclanBD rule)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 278,
                                                columnNumber: 203
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "toggle",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: !!c.allowDraw,
                                                disabled: locked,
                                                onChange: (e)=>A.setting('allowDraw', e.target.checked)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 279,
                                                columnNumber: 39
                                            }, this),
                                            "Allow draws in group matches ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sub",
                                                children: "needs an even number of games, e.g. 2 or 4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 279,
                                                columnNumber: 194
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rs-title",
                                children: "Group table points"
                            }, void 0, false, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "input",
                                    value: c.pointPreset || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presetOf"](s),
                                    onChange: (e)=>{
                                        const k = e.target.value, q = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["POINT_PRESETS"][k];
                                        if (k === 'games') A.setMany({
                                            pointPreset: k,
                                            pointSystem: 'games'
                                        });
                                        else if (k === 'custom') A.setMany({
                                            pointPreset: k,
                                            pointSystem: 'match'
                                        });
                                        else A.setMany({
                                            pointPreset: k,
                                            pointSystem: 'match',
                                            ptsWin: q.ptsWin,
                                            ptsDraw: q.ptsDraw,
                                            ptsLoss: q.ptsLoss
                                        });
                                    },
                                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["POINT_PRESETS"]).map(([k, q])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: k,
                                            children: q.label
                                        }, k, false, {
                                            fileName: "[project]/components/Setup.jsx",
                                            lineNumber: 294,
                                            columnNumber: 65
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Setup.jsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            (c.pointPreset || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presetOf"](s)) !== 'games' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pts-row",
                                children: [
                                    [
                                        'ptsWin',
                                        'Win'
                                    ],
                                    [
                                        'ptsDraw',
                                        'Draw'
                                    ],
                                    [
                                        'ptsLoss',
                                        'Loss'
                                    ]
                                ].map(([k, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "input",
                                                type: "number",
                                                step: "0.5",
                                                min: "0",
                                                max: "20",
                                                disabled: (c.pointPreset || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presetOf"](s)) !== 'custom',
                                                defaultValue: c[k],
                                                onBlur: (e)=>{
                                                    const n = parseFloat(e.target.value);
                                                    if (n >= 0 && n <= 20) A.setting(k, n);
                                                    else e.target.value = c[k];
                                                },
                                                onKeyDown: (e)=>e.key === 'Enter' && e.currentTarget.blur()
                                            }, c[k], false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 302,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, k, true, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rs-title",
                                children: "If teams are level on points"
                            }, void 0, false, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "input",
                                        value: c.tiebreak,
                                        onChange: (e)=>A.setting('tiebreak', e.target.value),
                                        children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIEBREAKS"]).map(([k, q])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: k,
                                                children: q.label
                                            }, k, false, {
                                                fileName: "[project]/components/Setup.jsx",
                                                lineNumber: 322,
                                                columnNumber: 61
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sub",
                                        style: {
                                            marginTop: 8
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIEBREAKS"][c.tiebreak]?.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/Setup.jsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Setup.jsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Setup.jsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RulesSummary$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        settings: s,
                        title: "Current rules in one look"
                    }, void 0, false, {
                        fileName: "[project]/components/Setup.jsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Setup.jsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Setup.jsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Standings.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Standings",
    ()=>Standings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RulesSummary$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RulesSummary.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Standings({ S }) {
    if (S.stage === 'setup') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Empty"], {
        icon: "chart",
        title: "Standings will appear here",
        children: "Start the tournament and enter scores — everything is calculated live."
    }, void 0, false, {
        fileName: "[project]/components/Standings.jsx",
        lineNumber: 8,
        columnNumber: 12
    }, this);
    const qual = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["qualifiedSeeds"](S));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupsOf"](S).map((g)=>{
                const rows = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeStandings"](g.teamIds, S.matches, S.settings);
                const showD = !!S.settings.allowDraw || rows.some((r)=>r.d > 0);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "card",
                    style: {
                        marginBottom: 18
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-h",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: g.name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "gl",
                                                children: g.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/Standings.jsx",
                                                lineNumber: 19,
                                                columnNumber: 30
                                            }, this),
                                            "Group ",
                                            g.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Standings.jsx",
                                        lineNumber: 19,
                                        columnNumber: 28
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Art"], {
                                                name: "chart",
                                                size: 30
                                            }, void 0, false, {
                                                fileName: "[project]/components/Standings.jsx",
                                                lineNumber: 19,
                                                columnNumber: 90
                                            }, this),
                                            "League Table"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Standings.jsx",
                                        lineNumber: 19,
                                        columnNumber: 88
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Standings.jsx",
                                    lineNumber: 18,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "badge em",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                                            name: "check",
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/components/Standings.jsx",
                                            lineNumber: 21,
                                            columnNumber: 42
                                        }, this),
                                        "Qualification zone"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Standings.jsx",
                                    lineNumber: 21,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Standings.jsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "table-wrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "st",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "#"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Standings.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Team"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Standings.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "P"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Standings.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "W"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Standings.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 56
                                                }, this),
                                                showD && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "D"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Standings.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 76
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "L"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Standings.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 87
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    title: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ruleCfg"](S.settings).pointSystem === 'games' ? 'Game wins = table points' : 'Match result points',
                                                    children: "Pts"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Standings.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 97
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    title: "Games won",
                                                    children: "GW"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Standings.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 216
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    title: "Games lost",
                                                    children: "GL"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Standings.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 245
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "PF"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Standings.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 275
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "PA"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Standings.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 286
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "+/−"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Standings.jsx",
                                                    lineNumber: 26,
                                                    columnNumber: 297
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Standings.jsx",
                                            lineNumber: 26,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Standings.jsx",
                                        lineNumber: 25,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: qual.has(r.id) ? 'q' : '',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rk",
                                                            children: r.rank
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Standings.jsx",
                                                            lineNumber: 31,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Standings.jsx",
                                                        lineNumber: 31,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tn"])(S, r.id),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["members"])(S, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](S, r.id))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Standings.jsx",
                                                                lineNumber: 32,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Standings.jsx",
                                                        lineNumber: 32,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: r.p
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Standings.jsx",
                                                        lineNumber: 33,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: r.w
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Standings.jsx",
                                                        lineNumber: 33,
                                                        columnNumber: 37
                                                    }, this),
                                                    showD && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: r.d
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Standings.jsx",
                                                        lineNumber: 33,
                                                        columnNumber: 61
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: r.l
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Standings.jsx",
                                                        lineNumber: 33,
                                                        columnNumber: 76
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "pts",
                                                        children: r.pts
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Standings.jsx",
                                                        lineNumber: 34,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: r.gw
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Standings.jsx",
                                                        lineNumber: 34,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: r.gl
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Standings.jsx",
                                                        lineNumber: 34,
                                                        columnNumber: 70
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: r.pf
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Standings.jsx",
                                                        lineNumber: 34,
                                                        columnNumber: 85
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: r.pa
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Standings.jsx",
                                                        lineNumber: 34,
                                                        columnNumber: 100
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: r.diff > 0 ? 'pos' : r.diff < 0 ? 'neg' : '',
                                                        children: [
                                                            r.diff > 0 ? '+' : r.diff < 0 ? '−' : '',
                                                            Math.abs(r.diff)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Standings.jsx",
                                                        lineNumber: 35,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, r.id, true, {
                                                fileName: "[project]/components/Standings.jsx",
                                                lineNumber: 30,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Standings.jsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Standings.jsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Standings.jsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this)
                    ]
                }, g.name || 'league', true, {
                    fileName: "[project]/components/Standings.jsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RulesSummary$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                settings: S.settings
            }, void 0, false, {
                fileName: "[project]/components/Standings.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hint",
                children: "Green rows are in the qualification zone (final once all group matches are played)."
            }, void 0, false, {
                fileName: "[project]/components/Standings.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Standings.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/WheelCanvas.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$wheel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/wheel.js [app-ssr] (ecmascript)");
'use client';
;
;
;
/** items: [{id,label}]. angleRef keeps the rotation across re-renders. */ const WheelCanvas = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function WheelCanvas({ items, angleRef }, ref) {
    const cv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const key = items.map((i)=>i.id).join('|');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        wheel.current = new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$wheel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Wheel"](cv.current, items, angleRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        key
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>({
            async spin (fast = false) {
                const w = wheel.current;
                const idx = await w.spin(fast);
                angleRef.current = w.angle;
                return idx;
            },
            items: ()=>wheel.current?.items || []
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wheel-box",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer"
            }, void 0, false, {
                fileName: "[project]/components/WheelCanvas.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: cv
            }, void 0, false, {
                fileName: "[project]/components/WheelCanvas.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WheelCanvas.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
});
const __TURBOPACK__default__export__ = WheelCanvas;
}),
"[project]/components/ui.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/icons.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/art.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logic.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Icon({ name, size = 18, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            __html: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"][name] || ''
        }
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
function ArtDefs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "0",
        height: "0",
        style: {
            position: 'absolute'
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            dangerouslySetInnerHTML: {
                __html: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GRADIENTS"]
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
function Art({ name, size = 24, className = '', style }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `art ${className}`,
        width: size,
        height: size,
        viewBox: "0 0 48 48",
        "aria-hidden": "true",
        style: style,
        dangerouslySetInnerHTML: {
            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$art$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["artMarkup"])(name)
        }
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function Logo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Art, {
        name: "paddle",
        size: 40
    }, void 0, false, {
        fileName: "[project]/components/ui.jsx",
        lineNumber: 48,
        columnNumber: 10
    }, this);
}
const pad = (n)=>String(n).padStart(2, '0');
const tn = (S, id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teamName"](S, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeam"](S, id));
const members = (S, t)=>t ? t.playerIds.map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playerName"](S, id)).join(', ') : '';
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "av",
        children: team.playerIds.map((id)=>{
            const i = Math.max(0, S.players.findIndex((p)=>p.id === id));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                style: {
                    background: AV[i % AV.length]
                },
                children: (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playerName"](S, id)[0] || '?').toUpperCase()
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
function Empty({ icon, title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "empty card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Art, {
                name: icon,
                size: 52
            }, void 0, false, {
                fileName: "[project]/components/ui.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
}),
"[project]/lib/art.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/icons.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/logic.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/seed.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEED_ENTRY",
    ()=>SEED_ENTRY,
    "SEED_ID",
    ()=>SEED_ID
]);
// The ITclanBD tournament from the Word document, stored as a read-only history entry.
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logic.js [app-ssr] (ecmascript)");
;
const PLAYERS = [
    'Oli',
    'Himel',
    'Mahabub',
    'Hadi',
    'Tayef',
    'Ridoy',
    'Shaikat',
    'Mashud',
    'Sani',
    'Joy',
    'Sayem',
    'Mosaraf'
];
const pid = (n)=>'d_' + n.toLowerCase();
const TEAMS = {
    A: [
        'Oli',
        'Himel'
    ],
    B: [
        'Mahabub',
        'Hadi'
    ],
    C: [
        'Tayef',
        'Ridoy'
    ],
    D: [
        'Shaikat',
        'Mashud'
    ],
    E: [
        'Sani',
        'Joy'
    ],
    F: [
        'Sayem',
        'Mosaraf'
    ]
};
// [team1, team2, [[score1, score2, (winner if scores are level)], ...]]
const M = [
    [
        'A',
        'B',
        [
            [
                20,
                20,
                2
            ],
            [
                20,
                15
            ],
            [
                16,
                20
            ]
        ]
    ],
    [
        'C',
        'D',
        [
            [
                16,
                20
            ],
            [
                20,
                18
            ],
            [
                13,
                20
            ]
        ]
    ],
    [
        'E',
        'F',
        [
            [
                20,
                16
            ],
            [
                20,
                14
            ],
            [
                20,
                11
            ]
        ]
    ],
    [
        'A',
        'C',
        [
            [
                20,
                20,
                2
            ],
            [
                15,
                20
            ],
            [
                20,
                10
            ]
        ]
    ],
    [
        'B',
        'E',
        [
            [
                20,
                19
            ],
            [
                20,
                15
            ],
            [
                18,
                20
            ]
        ]
    ],
    [
        'D',
        'F',
        [
            [
                20,
                8
            ],
            [
                20,
                13
            ],
            [
                20,
                7
            ]
        ]
    ],
    [
        'A',
        'D',
        [
            [
                20,
                13
            ],
            [
                20,
                9
            ],
            [
                20,
                10
            ]
        ]
    ],
    [
        'B',
        'F',
        [
            [
                20,
                7
            ],
            [
                20,
                1
            ],
            [
                20,
                7
            ]
        ]
    ],
    [
        'C',
        'E',
        [
            [
                14,
                20
            ],
            [
                13,
                20
            ],
            [
                20,
                17
            ]
        ]
    ],
    [
        'A',
        'E',
        [
            [
                20,
                20,
                2
            ],
            [
                18,
                20
            ],
            [
                20,
                18
            ]
        ]
    ],
    [
        'B',
        'D',
        [
            [
                9,
                20
            ],
            [
                20,
                16
            ],
            [
                20,
                12
            ]
        ]
    ],
    [
        'C',
        'F',
        [
            [
                20,
                7
            ],
            [
                20,
                9
            ],
            [
                20,
                9
            ]
        ]
    ],
    [
        'A',
        'F',
        [
            [
                20,
                8
            ],
            [
                20,
                15
            ],
            [
                20,
                14
            ]
        ]
    ],
    [
        'B',
        'C',
        [
            [
                20,
                20,
                1
            ],
            [
                20,
                17
            ],
            [
                19,
                20
            ]
        ]
    ],
    [
        'D',
        'E',
        [
            [
                20,
                18
            ],
            [
                14,
                20
            ],
            [
                20,
                13
            ]
        ]
    ]
];
const tid = (k)=>'dt_' + k;
const SEED_ID = 'seed-itclanbd-1';
const SEED_ENTRY = {
    id: SEED_ID,
    title: 'ITclanBD Indoor Table Tennis Tournament',
    date: 'From Word document',
    champion: null,
    members: '',
    runnerUp: '',
    teams: 6,
    format: 'League',
    note: 'Group stage complete · Semi-Finals (B vs D, E vs A) and Final not played yet',
    snapshot: {
        version: 1,
        settings: {
            format: 'league',
            teamSize: 2,
            gamesPerMatch: 3,
            playAll: true,
            groupSize: 3,
            advancePerGroup: 2,
            qualifiers: 4
        },
        players: PLAYERS.map((n)=>({
                id: pid(n),
                name: n
            })),
        teams: Object.entries(TEAMS).map(([k, ps])=>({
                id: tid(k),
                name: `Team ${k}`,
                playerIds: ps.map(pid),
                group: null
            })),
        draft: [],
        stage: 'knockout',
        matches: M.map(([a, b, games], i)=>({
                id: 'dm_' + (i + 1),
                group: null,
                round: 1,
                t1: tid(a),
                t2: tid(b),
                all: true,
                games
            })),
        bracket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeBracket"])([
            tid('B'),
            tid('E'),
            tid('A'),
            tid('D')
        ], 3, true)
    }
};
}),
"[project]/lib/store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PLAYERS",
    ()=>DEFAULT_PLAYERS,
    "DEFAULT_SETTINGS",
    ()=>DEFAULT_SETTINGS,
    "exportJSON",
    ()=>exportJSON,
    "freshState",
    ()=>freshState,
    "load",
    ()=>load,
    "loadRemote",
    ()=>loadRemote,
    "onSync",
    ()=>onSync,
    "save",
    ()=>save,
    "validate",
    ()=>validate
]);
// State + persistence. All data is one JSON document (no database).
// Stored in this browser's localStorage and exportable/importable as a .json file.
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seed.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logic.js [app-ssr] (ecmascript)");
;
;
const KEY = 'itclan-tt-v1';
const DEFAULT_PLAYERS = [
    {
        id: 'p_sayem',
        name: 'Sayem'
    },
    {
        id: 'p_mosaraf',
        name: 'Mosaraf'
    }
];
const DEFAULT_SETTINGS = {
    format: 'league',
    assignMode: 'spin',
    teamSize: 2,
    groupSize: 3,
    advancePerGroup: 2,
    qualifiers: 4,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RULE_DEFAULTS"]
};
function freshState(settings = DEFAULT_SETTINGS, history = [], keepPlayers = []) {
    // Player roster survives a reset; the default players are always present.
    const players = [
        ...DEFAULT_PLAYERS.map((p)=>({
                ...p
            }))
    ];
    for (const p of keepPlayers)if (!players.some((x)=>x.id === p.id)) players.push({
        ...p
    });
    return {
        version: 1,
        settings: {
            ...settings
        },
        players,
        teams: [
            {
                id: 't_default',
                name: '',
                playerIds: DEFAULT_PLAYERS.map((p)=>p.id),
                group: null,
                locked: true
            }
        ],
        draft: [],
        stage: 'setup',
        matches: [],
        bracket: null,
        history
    };
}
function load() {
    try {
        const raw = localStorage.getItem(KEY);
        if (raw) return validate(JSON.parse(raw));
    } catch (e) {
        console.warn('Could not load saved data', e);
    }
    return validate(freshState());
}
// 'file' = saved in project data/tournament.json, 'browser' = only this browser, 'pending'
let syncCb = ()=>{};
const onSync = (cb)=>syncCb = cb;
let timer = null;
function save(state) {
    try {
        localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
        console.warn('Could not save', e);
    }
    syncCb('pending');
    clearTimeout(timer);
    timer = setTimeout(()=>pushRemote(state), 250);
}
async function pushRemote(state) {
    try {
        const r = await fetch('/api/data', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        });
        if (r.status === 401) return window.location.assign('/login');
        const j = await r.json().catch(()=>({}));
        syncCb(r.ok ? j.store === 'blob' ? 'cloud' : 'file' : 'browser');
    } catch  {
        syncCb('browser');
    }
}
async function loadRemote() {
    try {
        const r = await fetch('/api/data', {
            cache: 'no-store'
        });
        if (r.status === 401) {
            window.location.assign('/login');
            return {
                status: 'browser',
                data: null
            };
        }
        if (!r.ok) return {
            status: 'browser',
            data: null
        };
        const j = await r.json();
        return {
            status: j.store === 'blob' ? 'cloud' : 'file',
            data: j.data ? validate(j.data) : null
        };
    } catch  {
        return {
            status: 'browser',
            data: null
        };
    }
}
function validate(s) {
    if (!s || typeof s !== 'object' || !Array.isArray(s.players) || !Array.isArray(s.teams) || !Array.isArray(s.matches)) {
        throw new Error('Invalid tournament file');
    }
    const base = freshState();
    const out = {
        ...base,
        ...s,
        settings: {
            ...DEFAULT_SETTINGS,
            ...s.settings || {}
        },
        draft: Array.isArray(s.draft) ? s.draft : [],
        history: Array.isArray(s.history) ? s.history : []
    };
    if (out.settings.assignMode !== 'custom') out.settings.assignMode = 'spin';
    // add the tournament from the Word document once (user can delete it afterwards)
    if (!out.seeded) {
        if (!out.history.some((h)=>h.id === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_ID"])) out.history = [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEED_ENTRY"],
            ...out.history
        ];
        out.seeded = true;
    }
    return out;
}
function exportJSON(state) {
    const blob = new Blob([
        JSON.stringify(state, null, 2)
    ], {
        type: 'application/json'
    });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `tt-tournament-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    setTimeout(()=>URL.revokeObjectURL(a.href), 1000);
}
}),
"[project]/lib/wheel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wheel",
    ()=>Wheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/logic.js [app-ssr] (ecmascript)");
;
const COLORS = [
    '#10b981',
    '#06b6d4',
    '#6366f1',
    '#a855f7',
    '#ec4899',
    '#f59e0b',
    '#ef4444',
    '#14b8a6',
    '#3b82f6',
    '#84cc16'
];
const TAU = Math.PI * 2;
class Wheel {
    constructor(canvas, items, angle = 0){
        this.c = canvas;
        this.items = items; // [{label}]
        this.angle = angle;
        this.spinning = false;
        this.dpr = Math.min(window.devicePixelRatio || 1, 2);
        const size = canvas.clientWidth || 360;
        canvas.width = canvas.height = size * this.dpr;
        this.size = size;
        this.draw();
    }
    draw() {
        const { c, items, size, dpr } = this;
        const ctx = c.getContext('2d');
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, size, size);
        const cx = size / 2, R = size / 2 - 10;
        // outer ring
        const ring = ctx.createLinearGradient(0, 0, size, size);
        ring.addColorStop(0, '#fbbf24');
        ring.addColorStop(0.5, '#f59e0b');
        ring.addColorStop(1, '#b45309');
        ctx.beginPath();
        ctx.arc(cx, cx, R + 8, 0, TAU);
        ctx.fillStyle = ring;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx, cx, R + 2, 0, TAU);
        ctx.fillStyle = '#0b1220';
        ctx.fill();
        const n = items.length;
        if (!n) {
            ctx.beginPath();
            ctx.arc(cx, cx, R, 0, TAU);
            ctx.fillStyle = '#111a2e';
            ctx.fill();
            ctx.fillStyle = '#64748b';
            ctx.font = '600 15px "Plus Jakarta Sans", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('All done ✓', cx, cx + 5);
            return;
        }
        const seg = TAU / n;
        for(let i = 0; i < n; i++){
            const a0 = this.angle + i * seg;
            ctx.beginPath();
            ctx.moveTo(cx, cx);
            ctx.arc(cx, cx, R, a0, a0 + seg);
            ctx.closePath();
            const g = ctx.createRadialGradient(cx, cx, R * 0.15, cx, cx, R);
            const col = COLORS[i % COLORS.length];
            g.addColorStop(0, shade(col, -35));
            g.addColorStop(1, col);
            ctx.fillStyle = g;
            ctx.fill();
            ctx.strokeStyle = 'rgba(8,12,24,.65)';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.save();
            ctx.translate(cx, cx);
            ctx.rotate(a0 + seg / 2);
            ctx.textAlign = 'right';
            ctx.fillStyle = '#fff';
            const fs = Math.max(11, Math.min(18, R * seg / 3.2, 18));
            ctx.font = `700 ${fs}px "Plus Jakarta Sans", sans-serif`;
            ctx.shadowColor = 'rgba(0,0,0,.45)';
            ctx.shadowBlur = 4;
            let label = items[i].label;
            const maxW = R - 48;
            while(ctx.measureText(label).width > maxW && label.length > 3)label = label.slice(0, -2);
            if (label !== items[i].label) label += '…';
            ctx.fillText(label, R - 16, fs / 3);
            ctx.restore();
        }
        // hub
        const hub = ctx.createRadialGradient(cx, cx - 6, 4, cx, cx, 36);
        hub.addColorStop(0, '#1e293b');
        hub.addColorStop(1, '#0b1220');
        ctx.beginPath();
        ctx.arc(cx, cx, 32, 0, TAU);
        ctx.fillStyle = hub;
        ctx.fill();
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#fbbf24';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, cx, 7, 0, TAU);
        ctx.fillStyle = '#fff';
        ctx.fill();
    }
    /** Spins and resolves with the index of the winning item (under the top pointer). */ spin(fast = false) {
        const n = this.items.length;
        if (this.spinning || !n) return Promise.resolve(-1);
        this.spinning = true;
        const win = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rand"])(n);
        const seg = TAU / n;
        const jitter = (Math.random() - 0.5) * seg * 0.7;
        const center = win * seg + seg / 2 + jitter;
        const target = -Math.PI / 2 - center; // slice centre ends at the pointer (top)
        const cur = this.angle;
        const delta = ((target - cur) % TAU + TAU) % TAU + TAU * ((fast ? 3 : 6) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rand"])(3));
        const dur = fast ? 2300 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rand"])(500) : 4300 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rand"])(900);
        const t0 = performance.now();
        return new Promise((resolve)=>{
            const step = (t)=>{
                const p = Math.min(1, (t - t0) / dur);
                const e = 1 - Math.pow(1 - p, 4);
                this.angle = cur + delta * e;
                this.draw();
                if (p < 1) requestAnimationFrame(step);
                else {
                    this.spinning = false;
                    resolve(win);
                }
            };
            requestAnimationFrame(step);
        });
    }
}
function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const f = (v)=>Math.max(0, Math.min(255, v + amt));
    return `rgb(${f(n >> 16)},${f(n >> 8 & 255)},${f(n & 255)})`;
}
}),
];

//# sourceMappingURL=_10iwdf_6qi_cm._.js.map