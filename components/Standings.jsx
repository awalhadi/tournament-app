'use client';
import * as L from '../lib/logic';
import { Art, Icon, Empty, members, tn } from './ui';
import RulesSummary from './RulesSummary';

export function Standings({ S }) {
  if (S.stage === 'setup')
    return <Empty icon="chart" title="Standings will appear here">Start the tournament and enter scores — everything is calculated live.</Empty>;
  const qual = new Set(L.qualifiedSeeds(S));
  return (
    <>
      {L.groupsOf(S).map((g) => {
        const rows = L.computeStandings(g.teamIds, S.matches, S.settings);
        const showD = !!S.settings.allowDraw || rows.some((r) => r.d > 0);
        return (
          <section className="card" style={{ marginBottom: 18 }} key={g.name || 'league'}>
            <div className="card-h">
              <h2>
                {g.name ? (<><span className="gl">{g.name}</span>Group {g.name}</>) : (<><Art name="chart" size={30} />League Table</>)}
              </h2>
              <span className="badge em"><Icon name="check" size={12} />Qualification zone</span>
            </div>
            <div className="table-wrap">
              <table className="st">
                <thead>
                  <tr><th>#</th><th>Team</th><th>P</th><th>W</th>{showD && <th>D</th>}<th>L</th><th title={L.ruleCfg(S.settings).pointSystem === 'games' ? 'Game wins = table points' : 'Match result points'}>Pts</th><th title="Games won">GW</th><th title="Games lost">GL</th><th>PF</th><th>PA</th><th>+/−</th></tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className={qual.has(r.id) ? 'q' : ''}>
                      <td><span className="rk">{r.rank}</span></td>
                      <td>{tn(S, r.id)}<small>{members(S, L.getTeam(S, r.id))}</small></td>
                      <td>{r.p}</td><td>{r.w}</td>{showD && <td>{r.d}</td>}<td>{r.l}</td>
                      <td className="pts">{r.pts}</td><td>{r.gw}</td><td>{r.gl}</td><td>{r.pf}</td><td>{r.pa}</td>
                      <td className={r.diff > 0 ? 'pos' : r.diff < 0 ? 'neg' : ''}>
                        {r.diff > 0 ? '+' : r.diff < 0 ? '−' : ''}{Math.abs(r.diff)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
      <RulesSummary settings={S.settings} />
      <div className="hint">Green rows are in the qualification zone (final once all group matches are played).</div>
    </>
  );
}
