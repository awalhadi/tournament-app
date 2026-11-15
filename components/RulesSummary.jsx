'use client';
import * as L from '../lib/logic';
import { Icon } from './ui';

/** Plain-language summary of the current rules, so everyone knows how the table is calculated. */
export function rulesLines(settings) {
  const c = L.ruleCfg(settings);
  const n = c.gamesPerMatch;
  const pts =
    c.pointSystem === 'games'
      ? 'Table points = number of games won (each game win is 1 point).'
      : `Table points per match: win ${c.ptsWin}${c.allowDraw ? ` · draw ${c.ptsDraw}` : ''} · loss ${c.ptsLoss}.`;
  return [
    ['Game', `First to ${c.pointsPerGame} points${c.winByTwo ? `; at ${c.pointsPerGame - 1}–${c.pointsPerGame - 1} play on until one side leads by 2 (deuce)` : ' (no deuce)'}.`],
    ['Group match', `${n} game${n > 1 ? 's' : ''}${c.playAll || n % 2 === 0 ? ', all played and counted' : ', best-of (stops when decided)'}. ${c.allowDraw ? 'A level result is a draw.' : 'No draws.'}`],
    ['Table points', pts],
    ['Tie-break', L.TIEBREAKS[c.tiebreak]?.text || ''],
    ['Knockout', `Best of ${c.knockoutGames} games, no draws.`],
  ];
}

export default function RulesSummary({ settings, title = 'How the table is calculated' }) {
  return (
    <div className="note rules-sum">
      <Icon name="info" size={18} />
      <div>
        <b>{title}</b>
        <ul>
          {rulesLines(settings).map(([k, v]) => (
            <li key={k}><span>{k}</span> {v}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
