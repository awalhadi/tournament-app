import { rand } from './logic.js';

const COLORS = ['#10b981', '#06b6d4', '#6366f1', '#a855f7', '#ec4899', '#f59e0b', '#ef4444', '#14b8a6', '#3b82f6', '#84cc16'];
const TAU = Math.PI * 2;

export class Wheel {
  constructor(canvas, items, angle = 0) {
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
    for (let i = 0; i < n; i++) {
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
      const fs = Math.max(11, Math.min(18, (R * seg) / 3.2, 18));
      ctx.font = `700 ${fs}px "Plus Jakarta Sans", sans-serif`;
      ctx.shadowColor = 'rgba(0,0,0,.45)';
      ctx.shadowBlur = 4;
      let label = items[i].label;
      const maxW = R - 48;
      while (ctx.measureText(label).width > maxW && label.length > 3) label = label.slice(0, -2);
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

  /** Spins and resolves with the index of the winning item (under the top pointer). */
  spin(fast = false) {
    const n = this.items.length;
    if (this.spinning || !n) return Promise.resolve(-1);
    this.spinning = true;
    const win = rand(n);
    const seg = TAU / n;
    const jitter = (Math.random() - 0.5) * seg * 0.7;
    const center = win * seg + seg / 2 + jitter;
    const target = -Math.PI / 2 - center; // slice centre ends at the pointer (top)
    const cur = this.angle;
    const delta = (((target - cur) % TAU) + TAU) % TAU + TAU * ((fast ? 3 : 6) + rand(3));
    const dur = fast ? 2300 + rand(500) : 4300 + rand(900);
    const t0 = performance.now();
    return new Promise((resolve) => {
      const step = (t) => {
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
  const f = (v) => Math.max(0, Math.min(255, v + amt));
  return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`;
}
