// ภาพประกอบต้นฉบับแบบ inline SVG (ภาพแนวคิด ไม่ใช่ภาพจากเกมจริง)
// ภาพในการ์ดสามระบบเป็นภาพสำรอง: แสดงระหว่างรอ/เมื่อใช้โมเดล 3D ไม่ได้

const NAVY = '#0c0630', PURPLE = '#7c4dff', CYAN = '#6fe6ff', ORANGE = '#ffb52e', WHITE = '#f7f4ff', PINK = '#ff8fb8';

const player = (x, y, s = 1, cls = '') => `
<g class="${cls}" transform="translate(${x} ${y}) scale(${s})">
  <ellipse cx="0" cy="33" rx="17" ry="4" fill="#000" opacity=".28"/>
  <rect x="-20" y="6" width="9" height="18" rx="4" fill="#AEB8E6"/>
  <rect x="-13" y="2" width="26" height="29" rx="10" fill="${WHITE}"/>
  <rect x="-5" y="13" width="10" height="7" rx="2" fill="${ORANGE}"/>
  <circle cx="0" cy="-9" r="15" fill="${WHITE}"/>
  <rect x="-10" y="-16" width="21" height="13" rx="6.5" fill="${NAVY}"/>
  <rect x="-6" y="-13" width="8" height="3" rx="1.5" fill="${CYAN}"/>
</g>`;

const enemy = (x, y, s = 1, color = PURPLE, cls = '') => `
<g class="${cls}" transform="translate(${x} ${y}) scale(${s})">
  <ellipse cx="0" cy="16" rx="15" ry="3.5" fill="#000" opacity=".28"/>
  <path d="M-3 -15 L-7 -24 M3 -15 L7 -24" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
  <path d="M-17 12 Q-18 -16 0 -16 Q18 -16 17 12 L11 6 L6 12 L0 6 L-6 12 L-11 6 Z" fill="${color}"/>
  <circle cx="-6" cy="-3" r="4.5" fill="${WHITE}"/><circle cx="6" cy="-3" r="4.5" fill="${WHITE}"/>
  <circle cx="-5" cy="-2" r="2" fill="${NAVY}"/><circle cx="7" cy="-2" r="2" fill="${NAVY}"/>
</g>`;

const stars = (pts, fill = WHITE) =>
  pts.map(([x, y, r = 1.4, o = 0.7]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" opacity="${o}"/>`).join('');

const skill = (x, y, color, glyph) => `
<g transform="translate(${x} ${y})">
  <circle r="19" fill="${NAVY}" stroke="${color}" stroke-width="2.5"/>
  <g fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${glyph}</g>
</g>`;

const GLYPH = {
  bolt: '<path d="M2 -10 L-6 2 H1 L-2 10 L6 -2 H-1 Z"/>',
  shield: '<path d="M0 -10 L8 -6 V1 Q8 7 0 10 Q-8 7 -8 1 V-6 Z"/>',
  dash: '<path d="M-9 -4 H3 M-6 4 H6 M4 -8 L9 0 L4 8"/>',
};

export function previewArt() {
  return `
<svg viewBox="0 0 720 405" width="720" height="405" role="img" aria-labelledby="preview-art-title" class="art">
  <title id="preview-art-title">ภาพแนวคิด: เกมเอาตัวรอดในอวกาศ ตัวละครผู้เล่นใช้สกิลรับมือศัตรู พร้อมแถบพลังชีวิตและปุ่มสกิล</title>
  <defs>
    <clipPath id="pv"><rect width="720" height="405" rx="18"/></clipPath>
    <linearGradient id="pvsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c0630"/><stop offset="1" stop-color="#3a1fa8"/></linearGradient>
  </defs>
  <g clip-path="url(#pv)">
    <rect width="720" height="405" fill="url(#pvsky)"/>
    ${stars([[40, 60], [110, 130, 1], [190, 46, 2, 0.9], [300, 96, 1], [420, 50], [505, 120, 1.8], [610, 70, 1], [680, 150], [80, 220, 1], [640, 230, 1], [350, 170, 1]])}
    <circle cx="610" cy="96" r="44" fill="${PURPLE}" opacity=".85"/>
    <circle cx="596" cy="84" r="9" fill="#000" opacity=".15"/><circle cx="626" cy="108" r="6" fill="#000" opacity=".15"/>
    <ellipse cx="360" cy="520" rx="560" ry="210" fill="#2a1680"/>
    <ellipse cx="360" cy="536" rx="560" ry="210" fill="#1a0e5c"/>
    <rect x="96" y="286" width="150" height="16" rx="8" fill="${CYAN}" fill-opacity=".7"/>
    <rect x="470" y="262" width="130" height="16" rx="8" fill="${ORANGE}"/>

    ${enemy(520, 236, 1.3, PURPLE, 'a-bob')}
    ${enemy(628, 320, 1.1, PINK, 'a-bob')}
    ${enemy(110, 258, 1.1, PINK, 'a-bob')}
    ${enemy(420, 342, 0.95, PURPLE, 'a-bob')}

    <circle cx="330" cy="300" r="70" fill="none" stroke="${CYAN}" stroke-width="3" stroke-opacity=".7"/>
    <circle class="a-pulse" cx="330" cy="300" r="92" fill="none" stroke="${CYAN}" stroke-opacity=".45" stroke-dasharray="4 8"/>
    ${player(330, 296, 1.6, 'a-float')}
    <path d="M372 286 L470 250" stroke="${ORANGE}" stroke-width="6" stroke-linecap="round"/>
    <g class="a-shot"><circle cx="480" cy="246" r="10" fill="${ORANGE}"/><circle cx="480" cy="246" r="18" fill="${ORANGE}" opacity=".3"/></g>

    <!-- interface -->
    <rect x="24" y="22" width="210" height="18" rx="9" fill="${NAVY}" fill-opacity=".7" stroke="${WHITE}" stroke-opacity=".25"/>
    <rect x="27" y="25" width="140" height="12" rx="6" fill="${ORANGE}"/>
    <rect x="24" y="48" width="140" height="10" rx="5" fill="${NAVY}" fill-opacity=".7"/>
    <rect x="26" y="50" width="84" height="6" rx="3" fill="${CYAN}"/>
    <g transform="translate(646 32)"><rect x="-50" y="-14" width="100" height="28" rx="14" fill="${NAVY}" fill-opacity=".7" stroke="${WHITE}" stroke-opacity=".25"/>
      <circle cx="-32" r="6" fill="${ORANGE}"/><rect x="-18" y="-4" width="52" height="8" rx="4" fill="${WHITE}" fill-opacity=".6"/></g>
    <g transform="translate(560 366)">
      ${skill(0, 0, CYAN, GLYPH.dash)}${skill(54, 0, ORANGE, GLYPH.bolt)}${skill(108, 0, '#b9a2ff', GLYPH.shield)}
    </g>
  </g>
</svg>`;
}

const cardFrame = inner => `<svg viewBox="0 0 320 150" width="320" height="150" aria-hidden="true" class="art">${inner}</svg>`;

export const systemArt = {
  hero: () => cardFrame(`
    <path d="M40 118 H280" stroke="${WHITE}" stroke-opacity=".18" stroke-width="2"/>
    <path d="M60 104 H96 M52 88 H80" stroke="${CYAN}" stroke-width="4" stroke-linecap="round" opacity=".7"/>
    ${player(140, 82, 1.2)}
    ${skill(210, 52, ORANGE, GLYPH.bolt)}${skill(256, 92, CYAN, GLYPH.dash)}
    <path d="M168 70 L188 60" stroke="${ORANGE}" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 7"/>`),
  world: () => cardFrame(`
    <g stroke="${WHITE}" stroke-opacity=".14"><path d="M30 30 H290 M30 60 H290 M30 90 H290 M30 120 H290 M60 16 V134 M110 16 V134 M160 16 V134 M210 16 V134 M260 16 V134"/></g>
    <path d="M60 120 V90 H110 V60 H210 V30 H260" fill="none" stroke="${CYAN}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 10"/>
    <circle cx="60" cy="120" r="8" fill="${CYAN}"/>
    <path d="M260 30 V10 L276 16 L260 22" fill="${ORANGE}" stroke="${ORANGE}" stroke-width="3" stroke-linejoin="round"/>
    ${enemy(160, 96, 0.9)}${enemy(236, 78, 0.75, PINK)}
    <circle cx="96" cy="40" r="14" fill="${ORANGE}" opacity=".9"/>`),
  experience: () => cardFrame(`
    <rect x="52" y="18" width="216" height="118" rx="12" fill="${NAVY}" stroke="${WHITE}" stroke-opacity=".3" stroke-width="2"/>
    <rect x="66" y="30" width="82" height="10" rx="5" fill="${ORANGE}"/>
    <rect x="106" y="62" width="108" height="20" rx="10" fill="${CYAN}"/>
    <rect x="122" y="90" width="76" height="14" rx="7" fill="${WHITE}" fill-opacity=".22"/>
    <rect x="122" y="110" width="76" height="14" rx="7" fill="${WHITE}" fill-opacity=".22"/>
    <g fill="none" stroke="${WHITE}" stroke-opacity=".7" stroke-width="2.5" stroke-linecap="round">
      <path d="M40 30 V10 H60 M280 30 V10 H260 M40 124 V144 H60 M280 124 V144 H260"/></g>
    <g transform="translate(244 36)"><circle r="9" fill="${PURPLE}"/><path d="M-3 -4.5 L5 0 L-3 4.5 Z" fill="${WHITE}"/></g>`),
};
