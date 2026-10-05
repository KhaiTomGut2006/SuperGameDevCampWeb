// แหล่งข้อมูลเดียวของค่าย — แก้ไฟล์นี้แล้วรีเฟรชหน้าเว็บ ไม่ต้อง build
// ค่าที่เป็น null คือ "ยังไม่ยืนยัน": โหมด preview จะแสดงป้าย "รอยืนยันรายละเอียด"
// โหมด live จะซ่อนส่วนเสริมที่ยังว่าง และถ้าค่าที่จำเป็นยังไม่ครบ เว็บจะกลับไปแสดงแบบ preview เอง

export default {
  // 'preview' = สำหรับตรวจทาน (noindex, มีแถบแจ้งเตือน) | 'live' = เผยแพร่จริง
  mode: 'preview',

  site: {
    baseUrl: 'https://hamsterhub.co/superdev',
  },

  // การฝังในเว็บหลัก Hamster Hub (โปรเจค profile_HH): ไฟล์ชุดนี้ถูกวางที่ public/superdev-site
  // และแสดงผ่านหน้า /superdev ปุ่มสมัครจะเปิดระบบรับสมัครของเว็บหลักแทนฟอร์มตัวอย่างในชุดนี้
  // ตั้งเป็น null ถ้านำไปวางที่อื่นแบบ static ล้วน
  host: {
    route: '/superdev',
    registerRoute: '/superdev/register',
    staticPrefix: '/superdev-site/',
  },

  camp: {
    name: 'Super GameDev Camp',
    organizer: 'Hamster Hub',
    headline: 'จากคนเล่น สู่คนสร้างเกม',
    subhead: 'ภารกิจ 4 วัน เรียนรู้การสร้างเกมเอาตัวรอดธีมอวกาศด้วย Unity และ AI',
    // คำบนแถบวิ่งใต้ภาพหลัก (มาจากหัวข้อในกำหนดการ)
    tape: ['UNITY', 'AI', 'STORYBOARD', 'MAP DESIGN', 'SKILL', 'ENEMY', 'GAMEPLAY', 'CAMERA', 'CUTSCENE', 'UI'],
    // ชื่อโปรเจกต์ชั่วคราวจากบรีฟ — แสดงเฉพาะ preview จนกว่า confirmed จะเป็น true
    workingTitle: { text: 'A Chance of the Survivor', confirmed: false },
  },

  dates: {
    startDay: 9,
    endDay: 12,
    month: 10,
    monthTh: 'ตุลาคม',
    year: null, // ค.ศ. เช่น 2026 — ยังไม่ยืนยัน จึงไม่แสดงปี
  },

  timeSlots: {
    slots: ['14:00–16:00', '19:00–21:00'],
    // คำอธิบายว่า 2 ช่วงเวลานี้จัดอย่างไร (ทุกวันทั้งสองช่วง / แยกรอบ / เลือกรอบ)
    arrangement: null,
    // true เฉพาะเมื่อยืนยันว่าเป็น "รอบให้เลือก" — จะเปิดตัวเลือกรอบในฟอร์มสมัคร
    selectable: false,
  },

  price: {
    amount: 490,
    currency: 'บาท',
    unit: null, // เช่น 'ต่อคน'
    perParticipant: false, // true เมื่อยืนยันว่าคิดต่อคน (ใช้คำนวณยอดรวมแบบกลุ่ม)
    includes: [], // สิ่งที่รวมในค่าสมัคร เฉพาะที่ยืนยันแล้ว
  },

  format: {
    label: null, // เช่น 'ออนไลน์ผ่าน Zoom' หรือ 'On-site'
    detail: null, // แพลตฟอร์ม / สถานที่
  },

  audience: {
    who: null, // ช่วงอายุหรือระดับชั้น
    prerequisites: null, // พื้นฐานที่ต้องมี
    language: null, // ภาษาที่ใช้สอน
    teamMode: null, // งานเดี่ยวหรือทีม
    capacity: null, // จำนวนที่รับ
  },

  preparation: {
    computer: null, // สเปกและระบบปฏิบัติการที่รองรับ
    unity: null, // เวอร์ชัน Unity และการติดตั้ง
    internet: null, // อินเทอร์เน็ต / แพลตฟอร์ม
    accounts: null, // ซอฟต์แวร์หรือบัญชีที่ต้องมี
    instructions: null, // ขั้นตอนเตรียมตัวก่อนวันค่าย
  },

  extras: {
    certificate: null,
    recordings: null,
    finalAnnouncement: null, // ความหมายของ "ช่วงประกาศผล" วันสุดท้าย
    absencePolicy: null, // กรณีเข้าร่วมไม่ได้ / นโยบายคืนเงิน
  },

  // { name, role, experience, photo } — เฉพาะบุคคลจริงที่ยืนยันแล้ว ว่างไว้ = ซ่อนทั้ง section
  instructors: [],
  // { type: 'photo'|'project'|'quote', src, alt, caption, attribution } — ของจริงที่ได้รับอนุญาตเท่านั้น
  evidence: [],

  registration: {
    // ISO พร้อมเขตเวลาไทย เช่น '2026-10-07T23:59:00+07:00' — มีค่าเมื่อไรจึงแสดงนับถอยหลัง
    deadline: null,
    waitlistUrl: null,
  },

  enrollment: {
    // URL ของ backend ที่รับใบสมัคร (ดูสัญญา API ใน README) — null = ฟอร์มทำงานแบบตัวอย่าง ไม่บันทึกข้อมูล
    endpoint: null,
    // ช่องทางติดต่อหลักที่ยืนยันแล้ว: 'phone' | 'email' | 'line'
    contactMethod: null,
    fields: { schoolLevel: false, parentContact: false },
    marketingConsent: false,
    group: { enabled: false, maxMembers: 5 },
    // วิธีชำระเงินที่ยืนยันแล้วเท่านั้น เช่น { label: 'โอนผ่านบัญชี…', detail: '…' }
    payment: null,
    // อธิบายว่าการยืนยันสิทธิ์เกิดขึ้นอย่างไร
    confirmation: null,
    steps: [
      'กรอกข้อมูลผู้สมัคร',
      'ตรวจสอบสรุปใบสมัคร',
      'ชำระเงินหรือยืนยันสิทธิ์ตามขั้นตอนที่ผู้จัดกำหนด',
      'รับรายละเอียดการเตรียมตัวและการเข้าร่วม',
    ],
    // ข้อความ "ขั้นตอนถัดไป" ตามสถานะที่ backend ส่งกลับ (backend ส่ง nextSteps มาแทนได้)
    nextSteps: {
      received: null,
      awaiting_payment: null,
      under_review: null,
      confirmed: null,
    },
  },

  // { label, href } — ช่องทางทางการของ Hamster Hub (ชุดเดียวกับ footer ของ hamsterhub.co)
  contact: {
    links: [
      { label: 'LINE @smart-school', href: 'https://page.line.me/jkm4247u?openQrModal=true' },
      { label: 'โทร 090-060-2555', href: 'tel:0900602555' },
      { label: 'Facebook Hamster Hub', href: 'https://www.facebook.com/HamsterHubThailand' },
      { label: 'Instagram hamsterhub_ig', href: 'https://www.instagram.com/hamsterhub_ig/' },
    ],
  },

  privacy: {
    confirmed: false, // true เมื่อผู้จัดตรวจและอนุมัติข้อความนโยบายแล้ว
    url: null, // ลิงก์นโยบายความเป็นส่วนตัวของเว็บหลัก (ใช้เมื่อฝังผ่าน host)
    controller: 'Hamster Hub',
    retention: null, // ระยะเวลาเก็บข้อมูล
    contact: null, // ช่องทางใช้สิทธิ์เจ้าของข้อมูล
  },

  about: {
    body: 'Super GameDev Camp คือค่าย 4 วันที่ชวนผู้เข้าร่วมเปลี่ยนบทบาทจากผู้เล่นมาเป็นผู้สร้าง เริ่มจากสำรวจว่าอะไรทำให้เกมสนุก ออกแบบโลกของตัวเอง ลงมือสร้างตัวละครและระบบต่าง ๆ ด้วย Unity โดยมี AI เป็นผู้ช่วย แล้วทดสอบ ปรับปรุง และนำเสนอผลงานให้เพื่อนได้ลองเล่น',
    stages: [
      { title: 'คิดและออกแบบ', text: 'สำรวจว่าเกมสนุกเพราะอะไร แล้ววาง Storyboard และแผนที่ของเกมตัวเอง' },
      { title: 'สร้างและทดลอง', text: 'ลงมือทำตัวละคร สกิล และศัตรูใน Unity โดยใช้ AI ช่วยในขั้นตอนพัฒนา' },
      { title: 'ทดสอบ ปรับปรุง และนำเสนอ', text: 'ให้เพื่อนลองเล่น เก็บรายละเอียด แล้วเล่าเรื่องผลงานของเรา' },
    ],
  },

  systems: [
    {
      id: 'hero',
      title: 'ฮีโร่และสกิล',
      text: 'ทำให้ตัวละครเคลื่อนไหวได้ และใส่ความสามารถในแบบที่ชอบ',
      details: ['ฝึกสร้างตัวละครให้เคลื่อนไหว', 'ออกแบบและใส่ Skill ให้ตัวละคร', 'ฝึกเขียนโปรแกรมเบื้องต้นเพื่อควบคุมตัวละคร'],
    },
    {
      id: 'world',
      title: 'โลกเกมและศัตรู',
      text: 'ออกแบบแผนที่ วางศัตรู และสร้างความท้าทายในการเอาตัวรอด',
      details: ['Storyboard & Map Design', 'ระบบ Enemy และบทบาทของศัตรูในเกม', 'จัดความท้าทายให้เข้ากับธีมอวกาศ'],
    },
    {
      id: 'experience',
      title: 'ประสบการณ์เล่นเกม',
      text: 'ประกอบ Gameplay กล้อง Cutscene และ UI ให้เป็นเกมหนึ่งเกม',
      details: ['ประกอบทุกองค์ประกอบเข้าด้วยกัน', 'ฝึกควบคุมมุมกล้อง', 'สร้าง Cutscene และ UI หน้าเมนูหลัก'],
    },
  ],

  outcomes: [
    'ฝึกออกแบบ Gameplay และแผนที่',
    'ฝึกใช้งาน Unity',
    'ใช้ AI เป็นผู้ช่วยในการพัฒนา',
    'สร้างระบบการเคลื่อนไหว สกิล และศัตรู',
    'ฝึกประกอบ Gameplay กล้อง Cutscene และ UI เข้าด้วยกัน',
    'ทดสอบผลงานร่วมกับเพื่อน',
    'ฝึกนำเสนอผลงานและรับคำแนะนำ',
  ],

  agenda: [
    {
      title: 'ออกแบบจักรวาลของเรา',
      summary: 'สำรวจเกมที่สนุก ออกแบบไอเดีย และเริ่มใช้งาน Unity',
      topics: [
        'เกมสนุกได้เพราะอะไร',
        'ลองออกแบบไอเดียเกมของตัวเอง',
        'เทคนิคที่จำเป็นในการพัฒนาเกม',
        'Storyboard & Map Design',
        'Unity Game Engine',
      ],
    },
    {
      title: 'สร้างฮีโร่ พร้อมเอาตัวรอด',
      summary: 'เริ่มสร้างตัวละครที่เล่นได้และระบบหลักของเกม',
      topics: [
        'ใช้ AI ช่วยทำงานใน Engine',
        'ฝึกสร้างตัวละครให้เคลื่อนไหว',
        'ใส่ Skill ที่ชอบให้ตัวละคร',
        'ระบบ Enemy และบทบาทของศัตรูในเกม',
        'ฝึกเขียนโปรแกรมเบื้องต้น',
      ],
    },
    {
      title: 'ประกอบทุกอย่างให้เป็นเกม',
      summary: 'รวมระบบต่าง ๆ ให้เป็นประสบการณ์เล่นที่สมบูรณ์ขึ้น',
      topics: [
        'พัฒนา Gameplay ให้สนุกขึ้น',
        'ประกอบทุกองค์ประกอบของเกม',
        'ฝึกควบคุมมุมกล้อง',
        'สร้าง Cutscene',
        'ทำ UI และหน้าเมนูหลักของเกม',
      ],
    },
    {
      title: 'ปล่อยเกมให้เพื่อนได้ลอง',
      summary: 'ทดสอบ เก็บรายละเอียด นำเสนอ และฉลองร่วมกัน',
      topics: [
        'เก็บรายละเอียดความรู้สึกตอนเล่น',
        'ฝึกเทคนิคการนำเสนอ',
        'ให้เพื่อนลองเล่นเกมของเรา',
        'โชว์ผลงาน',
        'รับคำแนะนำจากคณะกรรมการ',
        { text: 'ช่วงประกาศผล', detailKey: 'finalAnnouncement' },
        'After Party',
      ],
    },
  ],
};
