import { c, e, preview, pend, val, dateText, priceText, slotsText, registrationState, registerLink, logoImg, mount } from './core.js';
import { previewArt, systemArt } from './art.js';
import { sceneArt } from './scene.js';

const paths = { root: '', home: '', register: 'register/index.html', privacy: 'privacy/index.html' };
const reg = registrationState();
const cta = (cls = '') =>
  reg.state === 'closed'
    ? c.registration.waitlistUrl
      ? `<a class="btn btn-primary ${cls}" href="${e(c.registration.waitlistUrl)}" target="_blank" rel="noopener"><span>ลงชื่อรอคิว</span></a>`
      : `<span class="btn btn-disabled ${cls}">ปิดรับสมัครแล้ว</span>`
    : registerLink(paths, `btn btn-primary ${cls}`);

// ตัดบรรทัดเฉพาะตรงช่องว่าง ไม่ให้วลีภาษาไทยถูกแยกกลางคำ
const phrases = t => t.split(' ').map(w => `<span class="nowrap">${e(w)}</span>`).join(' ');
const extAttr = href => (/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '');

// ไอคอนเส้นขนาด 24px (วาดเอง)
const ICONS = {
  calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  ticket: '<path d="M3 9V6h18v3a3 3 0 0 0 0 6v3H3v-3a3 3 0 0 0 0-6z"/><path d="M14 7v2M14 11v2M14 15v2"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
  blocks: '<rect x="3" y="12" width="8" height="8" rx="1.5"/><rect x="13" y="12" width="8" height="8" rx="1.5"/><rect x="8" y="3" width="8" height="8" rx="1.5"/>',
  flag: '<path d="M5 21V4M5 4h12l-2.5 4 2.5 4H5"/>',
  map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>',
  cube: '<path d="M12 3 4 7v10l8 4 8-4V7l-8-4zM4 7l8 4 8-4M12 11v10"/>',
  spark: '<path d="M12 3c.8 4.5 2.5 6.2 7 7-4.5.8-6.2 2.5-7 7-.8-4.5-2.5-6.2-7-7 4.5-.8 6.2-2.5 7-7zM19 16v4M17 18h4"/>',
  bolt: '<path d="M13 2 5 13h6l-1 9 8-11h-6l1-9z"/>',
  film: '<rect x="3" y="6" width="13" height="12" rx="2.5"/><path d="M16 10l5-3v10l-5-3"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6 6 0 0 1 3.5 5.5"/>',
  megaphone: '<path d="M4 10v4l10 5V5L4 10zM18 9a4 4 0 0 1 0 6M7 15.5V19h3v-2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  laptop: '<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M2 20h20"/>',
};
const icon = name => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] ?? ICONS.spark}</svg>`;
const badge = name => `<span class="badge">${icon(name)}</span>`;

const sectionHead = (tag, kicker, title, lead = '') => `
<div class="section-head reveal">
  <p class="kicker"><span class="tag">${tag}</span>${kicker}</p>
  <h2>${phrases(title)}</h2>
  ${lead ? `<p class="lead">${lead}</p>` : ''}
</div>`;

// แถวข้อมูลในการ์ด: ซ่อนเมื่อไม่มีค่าและไม่ได้อยู่ในโหมด preview
const row = (label, value) => (value || preview ? `<div class="fact"><dt>${label}</dt><dd>${val(value)}</dd></div>` : '');

function hero() {
  const slotNote = c.timeSlots.arrangement ? '' : preview ? ` ${pend('รอยืนยันการจัดรอบ')}` : '';
  const info = (ic, label, value) => `<div class="info">${badge(ic)}<div><dt>${label}</dt><dd>${value}</dd></div></div>`;
  return `
<section class="hero" id="top">
  ${sceneArt()}
  <div class="wrap hero-inner">
    <div class="hero-logo">
      <span class="hero-rays" aria-hidden="true"></span>
      <span class="hero-halo" aria-hidden="true"></span>
      ${logoImg('', 'hero-logo-img')}
    </div>
    <h1 class="gold">${phrases(c.camp.headline)}</h1>
    <p class="lead">${e(c.camp.subhead)}</p>
    <div class="hero-cta">
      ${cta('btn-lg')}
      <a class="btn btn-ghost btn-lg" href="#missions"><span>ดูภารกิจ 4 วัน</span></a>
    </div>
  </div>
</section>
<div class="wrap">
  <dl class="infobar reveal">
    ${info('calendar', 'วันที่', dateText())}
    ${info('clock', 'เวลา', `${slotsText()} น.${slotNote}`)}
    ${info('ticket', 'ค่าสมัคร', `${priceText()}${c.price.unit ? ` ${e(c.price.unit)}` : ''}`)}
    ${c.format.label || preview ? info('pin', 'รูปแบบ', val(c.format.label)) : ''}
  </dl>
</div>`;
}

function tape() {
  const run = c.camp.tape.map(w => `<span>${e(w)}<svg class="tape-spark" viewBox="0 0 24 24"><use href="#i-spark"/></svg></span>`).join('');
  return `<div class="tape" aria-hidden="true"><div class="tape-run">${run}${run}</div></div>`;
}

function about() {
  const look = [['var(--cyan)', 'bulb'], ['var(--pink)', 'blocks'], ['var(--gold)', 'flag']];
  return `
<section id="about" class="section">
  <div class="wrap">
    ${sectionHead('STAGE 01', 'ค่ายนี้คืออะไร', 'เปลี่ยนจากนั่งเล่น มาเป็นคนลงมือสร้าง', e(c.about.body))}
    <ol class="stages">
      ${c.about.stages.map((s, i) => `
      <li class="card lift glow stage reveal" style="--c:${look[i % 3][0]};--d:${i * 0.12}s">
        <span class="stage-n" aria-hidden="true">${i + 1}</span>
        ${badge(look[i % 3][1])}
        <p class="tag">LEVEL ${i + 1}</p>
        <h3>${e(s.title)}</h3>
        <p>${e(s.text)}</p>
      </li>`).join('')}
    </ol>
  </div>
</section>`;
}

function build() {
  const colors = { hero: 'var(--cyan)', world: 'var(--pink)', experience: 'var(--gold)' };
  return `
<section id="build" class="section">
  <div class="wrap">
    ${sectionHead('STAGE 02', 'สิ่งที่จะได้ทำ', 'สามระบบ ในเกมเดียวกัน', 'ทั้งสามส่วนคือชิ้นส่วนของเส้นทางเรียนรู้เดียวกัน ทุกคนได้ทำครบ ไม่ต้องเลือกสายใดสายหนึ่ง')}
    <div class="systems">
      ${c.systems.map((s, i) => `
      <article class="card glow tilt system reveal" style="--c:${colors[s.id]};--d:${i * 0.12}s">
        <div class="system-art">
          ${systemArt[s.id]?.() ?? ''}
          <canvas data-model="${s.id}" aria-hidden="true"></canvas>
        </div>
        <p class="tag">SYSTEM 0${i + 1}</p>
        <h3>${e(s.title)}</h3>
        <p>${e(s.text)}</p>
        <details>
          <summary>ดูรายละเอียด</summary>
          <ul>${s.details.map(d => `<li>${e(d)}</li>`).join('')}</ul>
        </details>
      </article>`).join('')}
    </div>
  </div>
</section>`;
}

function projectPreview() {
  const wt = c.camp.workingTitle;
  const title = wt?.text && (wt.confirmed || preview)
    ? `<p class="working-title">ชื่อโปรเจกต์: <strong>${e(wt.text)}</strong> ${wt.confirmed ? '' : pend('ชื่อชั่วคราว รอยืนยัน')}</p>`
    : '';
  return `
<section id="preview" class="section">
  <div class="wrap preview-grid">
    <figure class="preview-art reveal">
      <div class="monitor">${previewArt()}</div>
      <figcaption>ภาพแนวคิดประกอบการอธิบาย ไม่ใช่ภาพจากเกมหรือผลงานจริงของค่าย</figcaption>
    </figure>
    <div>
      ${sectionHead('STAGE 03', 'ตัวอย่างโปรเจกต์', 'เกมเอาตัวรอดในอวกาศ')}
      <div class="reveal">
        ${title}
        <p>ตัวละครของเราต้องรับมือกับศัตรูที่เข้ามาเรื่อย ๆ ด้วยการเคลื่อนที่และสกิลที่ออกแบบเอง พร้อมหน้าจอแสดงสถานะแบบเรียบง่าย</p>
        <p class="muted">ผลงานที่ได้เป็นเกมต้นแบบสำหรับการเรียนรู้ ขอบเขตของแต่ละคนขึ้นอยู่กับเนื้อหาที่ยืนยันและความคืบหน้าระหว่างค่าย</p>
      </div>
    </div>
  </div>
</section>`;
}

function outcomes() {
  const icons = ['map', 'cube', 'spark', 'bolt', 'film', 'users', 'megaphone'];
  const colors = ['var(--cyan)', 'var(--gold)', 'var(--pink)', 'var(--violet-hi)'];
  return `
<section id="outcomes" class="section">
  <div class="wrap">
    ${sectionHead('SKILL TREE', 'สิ่งที่จะได้ฝึก', 'ทักษะที่ได้ลงมือจริงตลอด 4 วัน')}
    <ul class="skills">
      ${c.outcomes.map((o, i) => `<li class="card lift skill reveal" style="--c:${colors[i % 4]};--d:${(i % 4) * 0.07}s">${badge(icons[i])}<span>${e(o)}</span></li>`).join('')}
    </ul>
    <p class="muted note reveal">รายการนี้คือเป้าหมายการเรียนรู้ของค่าย ไม่ใช่การรับประกันผลงานสำเร็จรูป${c.extras.certificate ? '' : preview ? ` ส่วนเกียรติบัตรหรือไฟล์ผลงานที่ได้รับ ${pend()}` : ''}</p>
  </div>
</section>`;
}

function missions() {
  const colors = ['var(--violet-hi)', 'var(--cyan)', 'var(--pink)', 'var(--gold)'];
  const topic = t => {
    if (typeof t === 'string') return `<li>${e(t)}</li>`;
    const detail = c.extras[t.detailKey];
    return `<li>${e(t.text)}${detail ? ` <span class="muted">— ${e(detail)}</span>` : ` ${pend()}`}</li>`;
  };
  return `
<section id="missions" class="section">
  <div class="wrap">
    ${sectionHead('MISSION MAP', 'ภารกิจ 4 วัน', 'จากไอเดียบนกระดาษ สู่เกมที่เพื่อนได้ลองเล่น')}
    <div class="mission-map">
      <div class="mission-track" aria-hidden="true">
        <i class="mission-fill"></i>
        <svg class="mission-rocket" viewBox="0 0 48 48"><use href="#i-rocket"/></svg>
      </div>
      <ol class="missions">
        ${c.agenda.map((d, i) => `
        <li class="mission" style="--c:${colors[i % 4]}">
          <div class="mission-node" aria-hidden="true"><div class="planet planet-${(i % 4) + 1}"><span>${i + 1}</span></div></div>
          <article class="card glow mission-card reveal">
            <header>
              <p class="tag">DAY ${i + 1}</p>
              <h3>${e(d.title)}</h3>
            </header>
            <p class="mission-sum">${e(d.summary)}</p>
            <ul>${d.topics.map(topic).join('')}</ul>
          </article>
        </li>`).join('')}
      </ol>
    </div>
  </div>
</section>`;
}

function people() {
  const inst = c.instructors.length ? `
<section id="team" class="section">
  <div class="wrap">
    ${sectionHead('CREW', 'ทีมผู้สอน', 'คนที่จะร่วมภารกิจกับเรา')}
    <ul class="people">
      ${c.instructors.map(p => `
      <li class="card lift reveal">${p.photo ? `<img src="${e(p.photo)}" alt="" width="96" height="96" loading="lazy">` : ''}
        <h3>${e(p.name)}</h3><p class="role">${e(p.role)}</p><p>${e(p.experience)}</p></li>`).join('')}
    </ul>
  </div>
</section>` : '';
  const ev = c.evidence.length ? `
<section id="past" class="section">
  <div class="wrap">
    ${sectionHead('REPLAY', 'จากกิจกรรมที่ผ่านมา', 'บรรยากาศและผลงานจริง')}
    <ul class="evidence">
      ${c.evidence.map(x => x.type === 'quote'
        ? `<li class="card reveal"><blockquote><p>${e(x.caption)}</p><footer>${e(x.attribution)}</footer></blockquote></li>`
        : `<li class="reveal"><figure><img src="${e(x.src)}" alt="${e(x.alt)}" width="640" height="360" loading="lazy"><figcaption>${e(x.caption)}</figcaption></figure></li>`).join('')}
    </ul>
  </div>
</section>` : '';
  return inst + ev;
}

function prepare() {
  const a = c.audience, p = c.preparation;
  const who = [row('เหมาะกับ', a.who), row('พื้นฐานที่ต้องมี', a.prerequisites), row('ภาษาที่ใช้สอน', a.language), row('รูปแบบการทำงาน', a.teamMode), row('จำนวนที่รับ', a.capacity)].join('');
  const prep = [row('คอมพิวเตอร์และระบบปฏิบัติการ', p.computer), row('Unity', p.unity), row('อินเทอร์เน็ตและแพลตฟอร์ม', p.internet), row('ซอฟต์แวร์หรือบัญชีที่ต้องมี', p.accounts), row('ขั้นตอนเตรียมตัว', p.instructions)].join('');
  if (!who && !prep) return '';
  const panel = (color, ic, title, rows, delay) => rows ? `
      <div class="card glow info-card reveal" style="--c:${color};--d:${delay}s">
        <header>${badge(ic)}<h3>${title}</h3></header>
        <dl class="facts stack">${rows}</dl>
      </div>` : '';
  return `
<section id="prepare" class="section">
  <div class="wrap">
    ${sectionHead('LOADOUT', 'ก่อนเข้าค่าย', 'ค่ายนี้เหมาะกับใคร และต้องเตรียมอะไร')}
    <div class="two-col">
      ${panel('var(--cyan)', 'user', 'ผู้เข้าร่วม', who, 0)}
      ${panel('var(--pink)', 'laptop', 'สิ่งที่ต้องเตรียม', prep, 0.12)}
    </div>
  </div>
</section>`;
}

function faq() {
  const p = c.preparation, x = c.extras;
  const join = (...parts) => (parts.every(Boolean) ? parts.join(' ') : null);
  const contact = c.contact.links.length
    ? `ติดต่อได้ทาง ${c.contact.links.map(l => `<a href="${e(l.href)}"${extAttr(l.href)}>${e(l.label)}</a>`).join(' · ')}`
    : null;
  const items = [
    ['ต้องมีพื้นฐานมาก่อนไหม', c.audience.prerequisites],
    ['อายุหรือระดับชั้นเท่าไรจึงสมัครได้', c.audience.who],
    ['จะได้เรียนและสร้างอะไรบ้าง', 'ได้ฝึกออกแบบเกมและแผนที่ สร้างตัวละคร สกิล และศัตรูด้วย Unity จากนั้นประกอบ Gameplay กล้อง Cutscene และ UI เข้าด้วยกัน ก่อนทดสอบและนำเสนอผลงานในวันสุดท้าย'],
    ['ในค่ายใช้ AI และ Unity อย่างไร', 'Unity เป็น Game Engine หลักที่ใช้สร้างเกมตลอดค่าย ส่วน AI ทำหน้าที่เป็นผู้ช่วยในขั้นตอนพัฒนา ผู้เข้าร่วมยังเป็นคนออกแบบ ตัดสินใจ และลงมือทำเอง'],
    ['ต้องใช้คอมพิวเตอร์หรือโปรแกรมอะไร', join(p.computer, p.unity)],
    ['ค่ายจัดที่ไหน รูปแบบใด', c.format.label ? [c.format.label, c.format.detail].filter(Boolean).join(' — ') : null],
    ['สองช่วงเวลาจัดอย่างไร', c.timeSlots.arrangement, `ช่วงเวลาที่แจ้งไว้คือ ${slotsText()} น. `],
    ['ทำงานเดี่ยวหรือเป็นทีม', c.audience.teamMode],
    ['ค่าสมัครรวมอะไรบ้าง', c.price.includes.length ? c.price.includes.join(', ') : null, `ค่าสมัคร ${priceText()} `],
    ['ยืนยันสิทธิ์เข้าค่ายอย่างไร', c.enrollment.confirmation],
    ['มีบันทึกย้อนหลังหรือเกียรติบัตรไหม', join(x.recordings, x.certificate)],
    ['หากสมัครแล้วเข้าร่วมไม่ได้ต้องทำอย่างไร', x.absencePolicy],
    ['ผู้ปกครองหรือผู้สมัครติดต่อผู้จัดได้ทางไหน', contact, '', true],
  ].filter(([, a]) => a || preview);

  return `
<section id="faq" class="section">
  <div class="wrap narrow">
    ${sectionHead('HELP', 'FAQ', 'คำถามที่พบบ่อย')}
    <div class="faq reveal">
      ${items.map(([q, a, prefix = '', raw = false]) => `
      <details>
        <summary>${e(q)}</summary>
        <p>${a ? (raw ? a : e(a)) : `${e(prefix)}${pend()}`}</p>
      </details>`).join('')}
    </div>
  </div>
</section>`;
}

// ปิดท้ายด้วยจุดสมัครจุดเดียว: ตั๋วค่าย (ราคา + ปุ่ม) คู่กับขั้นตอนการสมัคร
function joinSection() {
  const en = c.enrollment;
  const includes = c.price.includes.length
    ? `<ul class="ticks">${c.price.includes.map(i => `<li>${e(i)}</li>`).join('')}</ul>`
    : preview ? `<p class="ticket-note">สิ่งที่รวมในค่าสมัคร ${pend()}</p>` : '';
  const payNote = c.host
    ? `<p class="muted">กดปุ่มสมัครเพื่อกรอกข้อมูลและดำเนินการต่อผ่านระบบรับสมัครของ ${e(c.camp.organizer)}</p>`
    : en.payment
      ? `<p><strong>การชำระเงิน:</strong> ${e(en.payment.label)}${en.payment.detail ? ` — ${e(en.payment.detail)}` : ''}</p>`
      : `<p class="muted">แบบฟอร์มสมัครเป็นการบันทึกใบสมัครเท่านั้น ยังไม่มีการชำระเงินบนเว็บไซต์ การยืนยันสิทธิ์เข้าค่ายจะแจ้งในขั้นตอนถัดไป</p>`;
  return `
<section id="join" class="section join">
  <div class="wrap">
    ${sectionHead('READY?', 'สมัครเข้าค่าย', 'พร้อมออกเดินทางหรือยัง')}
    <div class="join-grid">
      <div class="ticket reveal">
        <div class="ticket-main">
          <p class="tag">CAMP PASS</p>
          <p class="price"><strong class="gold">${c.price.amount.toLocaleString('th-TH')}</strong> <span>${e(c.price.currency)}</span> ${c.price.unit ? `<span>${e(c.price.unit)}</span>` : pend('รอยืนยันหน่วย')}</p>
          <p class="ticket-date">${icon('calendar')} ${dateText()}</p>
          ${includes}
          ${reg.deadline && reg.state === 'open' ? `<p class="countdown" id="countdown" role="timer" aria-live="off"></p>` : ''}
          ${cta('btn-lg')}
        </div>
        <div class="ticket-stub" aria-hidden="true">${logoImg('', '', true)}</div>
      </div>
      <div class="reveal" style="--d:.12s">
        <h3 class="stepper-title">สมัครอย่างไร</h3>
        <ol class="stepper">${en.steps.map(s => `<li>${e(s)}</li>`).join('')}</ol>
        ${payNote}
        ${en.confirmation ? `<p><strong>การยืนยันสิทธิ์:</strong> ${e(en.confirmation)}</p>` : ''}
      </div>
    </div>
  </div>
</section>`;
}

mount(paths, [hero(), tape(), about(), build(), projectPreview(), outcomes(), missions(), people(), prepare(), faq(), joinSection()].join(''));

const cd = document.getElementById('countdown');
if (cd) {
  const tick = () => {
    const ms = reg.deadline.getTime() - Date.now();
    if (ms <= 0) return location.reload();
    const m = Math.floor(ms / 60000);
    cd.textContent = `ปิดรับสมัครในอีก ${Math.floor(m / 1440)} วัน ${Math.floor((m % 1440) / 60)} ชั่วโมง ${m % 60} นาที (เวลาประเทศไทย)`;
  };
  tick();
  setInterval(tick, 30000);
}

// ข้อมูลกิจกรรมแบบ structured data — เฉพาะเมื่อข้อเท็จจริงหลักยืนยันครบ และเป็นหน้าเดี่ยว (เว็บหลักมี metadata ของตัวเอง)
if (!preview && !c.host && c.dates.year && c.format.label) {
  const d = c.dates, pad = n => String(n).padStart(2, '0');
  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'EducationEvent',
    name: c.camp.name,
    description: c.camp.subhead,
    startDate: `${d.year}-${pad(d.month)}-${pad(d.startDay)}`,
    endDate: `${d.year}-${pad(d.month)}-${pad(d.endDay)}`,
    organizer: { '@type': 'Organization', name: c.camp.organizer },
    offers: { '@type': 'Offer', price: c.price.amount, priceCurrency: 'THB', url: c.site.baseUrl },
    url: c.site.baseUrl,
  });
  document.head.append(ld);
}
