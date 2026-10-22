(function () {
'use strict';

/* ---------- Ayarlar ---------- */
var CFG = {
  total: 40,            // sınav soru sayısı
  minutes: 60,          // süre (dk)
  passPct: 70,          // başarı barajı (%)
  title: 'Bilgi Güvenliği Farkındalık Eğitimi',
  issuer: 'Cemal Taner',
  issuerTitle: 'Ağ Teknolojileri Eğitmeni & Bilgi Güvenliği Danışmanı',
  site: 'www.cemaltaner.com.tr',
  key: 'bgfe_exam_v1',
  salt: 'bgfe-2026-cemaltaner'
};

var TRAINING = [
  ['Bilgi güvenliğinin temelleri', [
    'Üç temel unsur: gizlilik, bütünlük, erişilebilirlik.',
    'Bilgi varlığı; dijital veriler, basılı belgeler, yazılımlar, donanımlar ve kişilerin bilgisini kapsar.',
    'Risk = tehdidin bir zafiyeti kullanma olasılığı × etkisi.',
    'Bilgi güvenliği yalnızca BT ekibinin değil, tüm çalışanların sorumluluğudur.']],
  ['ISO/IEC 27001 ve BGYS', [
    'ISO/IEC 27001, Bilgi Güvenliği Yönetim Sistemi (BGYS) gerekliliklerini tanımlar.',
    'Çalışanlar politikayı bilmeli, kendi katkılarının farkında olmalı ve uyumsuzluğun sonuçlarını bilmelidir.',
    'Düzenli farkındalık eğitimi BGYS\'nin zorunlu bir parçasıdır.']],
  ['Parola ve kimlik doğrulama', [
    'Uzun parola cümleleri kullanın; kişisel bilgiden (doğum yılı, isim) kaçının.',
    'Her hesap için benzersiz parola kullanın; parola yöneticisinden yararlanın.',
    'Parolanızı kimseyle paylaşmayın; BT destek bile parolanızı istemez.',
    'Mümkün olan her yerde çok faktörlü kimlik doğrulamayı (MFA) açın.',
    'Siz başlatmadığınız MFA isteklerini asla onaylamayın ve bildirin.']],
  ['Oltalama ve sosyal mühendislik', [
    'Aciliyet, korku, ödül vaadi; oltalamanın klasik tetikleyicileridir.',
    'Bağlantıya tıklamadan önce gerçek alan adını kontrol edin; şüpheli eki açmayın.',
    'Vishing (telefon), smishing (SMS), quishing (QR kod) ve hedefli oltalama (spear phishing) türlerini tanıyın.',
    'Mali talepleri (özellikle "üst yönetici" adına gelenleri) ayrı bir kanaldan doğrulayın.',
    'Yapay zekâ ile ses ve görüntü taklit edilebilir; tanıdık ses yeterli kanıt değildir.',
    'Tıkladıysanız/açtıysanız saklamayın, hemen bildirin.']],
  ['Fiziksel güvenlik ve temiz masa', [
    'Masadan kalkarken ekranı kilitleyin (Win + L); gizli belgeleri açıkta bırakmayın.',
    'Ziyaretçiler kayıt altına alınmalı, kart takmalı ve refakatsiz gezdirilmemelidir.',
    'Kartsız kişiyi arkanızdan içeri almayın (tailgating).',
    'Gizli kâğıtları imha makinesiyle yok edin; yazıcıda çıktı unutmayın (güvenli yazdırma kullanın).']],
  ['Cihaz, ağ ve yazılım güvenliği', [
    'Bulduğunuz USB belleği takmayın; BT\'ye teslim edin.',
    'Onaysız yazılım kurmayın; antivirüs/EDR\'yi devre dışı bırakmayın.',
    'Güncellemeleri zamanında yükleyin; çoğu saldırı bilinen açıkları kullanır.',
    'Halka açık Wi-Fi\'de kurumsal VPN kullanın.',
    'Cihazlarda disk şifrelemeyi ve ekran kilidini etkin tutun.']],
  ['Zararlı yazılım ve yedekleme', [
    'Fidye yazılımı en çok oltalama ve güncellenmemiş sistemler yoluyla bulaşır.',
    'Fidye ödemek verinin geri geleceğini garanti etmez; olay müdahale sürecini başlatın.',
    '3-2-1 yedekleme: 3 kopya, 2 farklı ortam, 1 uzak konum. Yedeklerin geri dönüşünü test edin.']],
  ['Veri sınıflandırma ve kişisel veri', [
    'Bilgiyi hassasiyetine göre sınıflandırın ve sınıfına uygun koruyun.',
    'Gizli bilgiyi kişisel e-postaya, bulut hesaplarına veya sosyal medyaya göndermeyin.',
    'Kimliği belirli/belirlenebilir kişiye ait her bilgi kişisel veridir (KVKK).',
    'Yanlış alıcıya gönderilen e-posta bile bir veri ihlali olabilir; bildirin.']],
  ['Mobil, uzaktan çalışma ve toplantılar', [
    'İş cihazını aile bireyleriyle paylaşmayın.',
    'Ev ağında varsayılan yönlendirici parolasını değiştirin, WPA2/WPA3 kullanın.',
    'Halka açık alanlarda ekran filtresi kullanın; hassas konuşmaları başkalarının duyacağı yerde yapmayın.',
    'Toplantı bağlantılarını herkese açık paylaşmayın; ekran paylaşmadan önce hassas pencereleri kapatın.',
    'BYOD cihazlarda kurum politikasına uyun.']],
  ['Sosyal medya ve yapay zekâ araçları', [
    'İş yerinde çekilen fotoğraflarda ekran, ağ şeması, rozet gibi unsurların görünmediğinden emin olun.',
    'Gizli veya kişisel veriyi kurum onayı olmadan genel yapay zekâ araçlarına girmeyin.']],
  ['Erişim yönetimi ve olay bildirimi', [
    'En az yetki ilkesi: yalnızca işiniz için gereken erişim.',
    'İşten ayrılan kişinin erişimleri gecikmeden kapatılır.',
    'Şüpheli her durumu (kayıp cihaz, oltalama, yanlış gönderim) hemen bildirin; erken bildirim zararı sınırlar.']]
];

/* ---------- Yardımcılar ---------- */
var $ = function (s) { return document.querySelector(s); };
function show(id) {
  document.querySelectorAll('.screen').forEach(function (e) { e.hidden = true; });
  $(id).hidden = false;
  window.scrollTo(0, 0);
}
function shuffle(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}
function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
function pad(n) { return n < 10 ? '0' + n : '' + n; }
function save() { try { localStorage.setItem(CFG.key, JSON.stringify(st)); } catch (e) {} }
function load() { try { return JSON.parse(localStorage.getItem(CFG.key)); } catch (e) { return null; } }
function clearSt() { try { localStorage.removeItem(CFG.key); } catch (e) {} }
function checksum(str) {
  var s = str + CFG.salt, h1 = 0x811c9dc5, h2 = 0x1b873593;
  for (var i = 0; i < s.length; i++) {
    h1 ^= s.charCodeAt(i); h1 = Math.imul(h1, 16777619);
    h2 = Math.imul(h2 ^ s.charCodeAt(i), 2654435761); h2 ^= h2 >>> 13;
  }
  return ((h1 >>> 0).toString(16) + (h2 >>> 0).toString(16)).slice(0, 12);
}
function b64e(o) { return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
function b64d(s) { s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; return JSON.parse(decodeURIComponent(escape(atob(s)))); }
function trDate(iso) {
  var p = iso.split('-');
  return new Date(+p[0], +p[1] - 1, +p[2]).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
}
function todayISO() { var d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
function baseUrl() { return location.origin + location.pathname; }

/* ---------- Durum ---------- */
var st = null, timerH = null, cert = null;

/* ---------- Ana sayfa ---------- */
function renderTraining() {
  $('#training').innerHTML = TRAINING.map(function (t, i) {
    return '<details class="topic"><summary>' + (i + 1) + '. ' + esc(t[0]) + '</summary><ul>' +
      t[1].map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></details>';
  }).join('');
}
function updateStart() {
  var ok = $('#nameInput').value.trim().length >= 3 && $('#readChk').checked && $('#rulesChk').checked;
  $('#startBtn').disabled = !ok;
}
function renderResume() {
  var box = $('#resumeBox'); box.hidden = true;
  if (!st) return;
  if (!st.done && st.end > Date.now()) {
    box.hidden = false;
    box.innerHTML = '<b>Devam eden bir sınavınız var</b> (' + esc(st.name) + '). Süre işlemeye devam ediyor.<div class="btn-row"><button class="btn primary" id="resumeBtn">Sınava devam et</button><button class="btn ghost" id="dropBtn">Vazgeç ve sil</button></div>';
    $('#resumeBtn').onclick = function () { enterExam(); };
    $('#dropBtn').onclick = function () { if (confirm('Devam eden sınav silinecek. Emin misiniz?')) { clearSt(); st = null; renderResume(); } };
  } else if (!st.done && st.end <= Date.now()) {
    finish(true);
  } else if (st.done) {
    box.hidden = false;
    box.innerHTML = '<b>Son sınav sonucunuz kayıtlı</b> (' + esc(st.name) + ', ' + st.score + '/' + CFG.total + ').<div class="btn-row"><button class="btn primary" id="lastBtn">Sonucu / sertifikayı gör</button></div>';
    $('#lastBtn').onclick = function () { showResult(); };
  }
}

/* ---------- Sınav ---------- */
function startExam() {
  var pool = window.QUESTIONS;
  var ids = shuffle(pool.map(function (_, i) { return i; })).slice(0, CFG.total);
  st = {
    name: $('#nameInput').value.trim().replace(/\s+/g, ' '),
    items: ids.map(function (id) { return { id: id, perm: shuffle([0, 1, 2, 3]) }; }),
    ans: ids.map(function () { return null; }),
    flag: ids.map(function () { return false; }),
    idx: 0,
    end: Date.now() + CFG.minutes * 60000,
    done: false
  };
  save(); enterExam();
}
function enterExam() {
  show('#exam'); $('#timerBox').hidden = false;
  renderQ(); tick();
  clearInterval(timerH); timerH = setInterval(tick, 500);
}
function tick() {
  var rem = Math.max(0, Math.round((st.end - Date.now()) / 1000));
  $('#timer').textContent = pad(Math.floor(rem / 60)) + ':' + pad(rem % 60);
  $('#timerBox').classList.toggle('low', rem <= 300);
  if (rem <= 0) { clearInterval(timerH); alert('Süre doldu. Sınavınız teslim ediliyor.'); finish(true); }
}
function renderQ() {
  var it = st.items[st.idx], q = window.QUESTIONS[it.id];
  $('#qNo').textContent = 'Soru ' + (st.idx + 1) + ' / ' + CFG.total;
  $('#qCat').textContent = q[6];
  $('#qText').textContent = q[0];
  var L = ['A', 'B', 'C', 'D'];
  $('#opts').innerHTML = it.perm.map(function (orig, pos) {
    return '<button class="opt' + (st.ans[st.idx] === pos ? ' sel' : '') + '" data-p="' + pos + '"><span class="k">' + L[pos] + '</span><span>' + esc(q[1 + orig]) + '</span></button>';
  }).join('');
  document.querySelectorAll('.opt').forEach(function (b) {
    b.onclick = function () { st.ans[st.idx] = +b.dataset.p; save(); renderQ(); };
  });
  $('#prevBtn').disabled = st.idx === 0;
  $('#nextBtn').disabled = st.idx === CFG.total - 1;
  $('#flagBtn').textContent = st.flag[st.idx] ? '⚑ İşareti kaldır' : '⚑ İşaretle';
  var n = st.ans.filter(function (a) { return a !== null; }).length;
  $('#answeredCnt').textContent = n;
  $('#bar').style.width = (n / CFG.total * 100) + '%';
  $('#grid').innerHTML = st.ans.map(function (a, i) {
    return '<button data-i="' + i + '" class="' + (a !== null ? 'a ' : '') + (st.flag[i] ? 'f ' : '') + (i === st.idx ? 'c' : '') + '">' + (i + 1) + '</button>';
  }).join('');
  document.querySelectorAll('#grid button').forEach(function (b) {
    b.onclick = function () { st.idx = +b.dataset.i; save(); renderQ(); };
  });
}

/* ---------- Bitiş ve sonuç ---------- */
function finish(auto) {
  if (!auto) {
    var blank = st.ans.filter(function (a) { return a === null; }).length;
    var msg = blank ? blank + ' soru cevapsız. Yine de bitirmek istiyor musunuz?' : 'Sınavı bitirmek istiyor musunuz?';
    if (!confirm(msg)) return;
  }
  clearInterval(timerH);
  var score = 0;
  st.items.forEach(function (it, i) { if (st.ans[i] !== null && it.perm[st.ans[i]] === 0) score++; });
  st.score = score;
  st.pct = Math.round(score / CFG.total * 100);
  st.pass = st.pct >= CFG.passPct;
  st.done = true;
  st.date = todayISO();
  if (st.pass) {
    st.certId = 'BGF-' + st.date.replace(/-/g, '') + '-' + Math.random().toString(36).slice(2, 8).toUpperCase();
  }
  save();
  showResult();
}
function showResult() {
  $('#timerBox').hidden = true;
  show('#result');
  var cats = {};
  st.items.forEach(function (it, i) {
    var c = window.QUESTIONS[it.id][6];
    cats[c] = cats[c] || [0, 0]; cats[c][1]++;
    if (st.ans[i] !== null && it.perm[st.ans[i]] === 0) cats[c][0]++;
  });
  $('#scoreCard').innerHTML =
    '<div class="score-ring ' + (st.pass ? 'ok' : 'bad') + '">%' + st.pct + '</div>' +
    '<h2>' + (st.pass ? 'Tebrikler ' + esc(st.name) + ', sınavı geçtiniz!' : 'Bu sefer olmadı, ' + esc(st.name)) + '</h2>' +
    '<p class="muted">' + st.score + ' / ' + CFG.total + ' doğru. Başarı barajı: %' + CFG.passPct + ' (' + Math.ceil(CFG.total * CFG.passPct / 100) + ' doğru).' +
    (st.pass ? '' : ' Eğitim içeriğini tekrar gözden geçirip yeniden deneyebilirsiniz.') + '</p>' +
    '<div class="cat-row">' + Object.keys(cats).map(function (k) { return '<span>' + esc(k) + ': ' + cats[k][0] + '/' + cats[k][1] + '</span>'; }).join('') + '</div>';

  var L = ['A', 'B', 'C', 'D'], html = '', wrong = 0;
  st.items.forEach(function (it, i) {
    var q = window.QUESTIONS[it.id], a = st.ans[i];
    if (a !== null && it.perm[a] === 0) return;
    wrong++;
    var right = it.perm.indexOf(0);
    html += '<div class="rv bad"><b>' + (i + 1) + '. ' + esc(q[0]) + '</b>' +
      '<div class="ans you">' + (a === null ? 'Cevapsız' : 'Cevabınız: ' + L[a] + ') ' + esc(q[1 + it.perm[a]])) + '</div>' +
      '<div class="ans right">Doğru cevap: ' + L[right] + ') ' + esc(q[1]) + '</div>' +
      '<div class="exp">' + esc(q[5]) + '</div></div>';
  });
  $('#review').innerHTML = wrong ? html : '<p>Tüm soruları doğru yanıtladınız. 🎉</p>';

  $('#certSection').hidden = !st.pass;
  if (st.pass) setupCert();
}

/* ---------- Sertifika ---------- */
function certData() { return { n: st.name, d: st.date, s: st.score, t: CFG.total, id: st.certId }; }
function verifyUrl(d) {
  var p = b64e(d);
  return baseUrl() + '?v=' + p + '&k=' + checksum(JSON.stringify(d));
}
function wrapText(ctx, text, x, y, maxW, lh) {
  var words = text.split(' '), line = '';
  words.forEach(function (w) {
    var test = line ? line + ' ' + w : w;
    if (ctx.measureText(test).width > maxW && line) { ctx.fillText(line, x, y); line = w; y += lh; } else line = test;
  });
  ctx.fillText(line, x, y);
}
function drawCert(canvas, d) {
  var W = 1754, H = 1240, x;
  canvas.width = W; canvas.height = H; x = canvas.getContext('2d');
  var g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#fffefa'); g.addColorStop(1, '#f5f1e3');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  x.strokeStyle = '#0b2545'; x.lineWidth = 16; x.strokeRect(36, 36, W - 72, H - 72);
  x.strokeStyle = '#c9a227'; x.lineWidth = 4; x.strokeRect(66, 66, W - 132, H - 132);
  x.lineWidth = 1.5; x.strokeRect(80, 80, W - 160, H - 160);
  // köşe süsleri
  [[66, 66, 1, 1], [W - 66, 66, -1, 1], [66, H - 66, 1, -1], [W - 66, H - 66, -1, -1]].forEach(function (c) {
    x.fillStyle = '#c9a227'; x.beginPath(); x.arc(c[0], c[1], 14, 0, 7); x.fill();
    x.fillStyle = '#0b2545'; x.beginPath(); x.arc(c[0], c[1], 6, 0, 7); x.fill();
  });
  var cx = W / 2;
  // kalkan
  x.save(); x.translate(cx, 190); x.scale(1.5, 1.5);
  x.beginPath(); x.moveTo(0, -56); x.lineTo(-48, -38); x.lineTo(-48, 6); x.bezierCurveTo(-48, 40, -26, 62, 0, 74); x.bezierCurveTo(26, 62, 48, 40, 48, 6); x.lineTo(48, -38); x.closePath();
  x.fillStyle = '#0b2545'; x.fill(); x.lineWidth = 4; x.strokeStyle = '#c9a227'; x.stroke();
  x.beginPath(); x.moveTo(-22, 4); x.lineTo(-6, 22); x.lineTo(24, -16); x.lineWidth = 9; x.lineCap = 'round'; x.lineJoin = 'round'; x.strokeStyle = '#2dd4bf'; x.stroke();
  x.restore();

  x.textAlign = 'center'; x.fillStyle = '#c9a227';
  x.font = '600 34px Georgia, "Times New Roman", serif';
  if ('letterSpacing' in x) x.letterSpacing = '10px';
  x.fillText('BAŞARI SERTİFİKASI', cx + 5, 380);
  if ('letterSpacing' in x) x.letterSpacing = '0px';

  x.fillStyle = '#0b2545'; x.font = 'bold 84px Georgia, "Times New Roman", serif';
  x.fillText(CFG.title, cx, 500);

  x.fillStyle = '#5b6b82'; x.font = 'italic 32px Georgia, serif';
  x.fillText('Bu sertifika', cx, 590);

  var name = d.n.toLocaleUpperCase('tr-TR'), fs = 92;
  x.font = 'bold ' + fs + 'px Georgia, serif';
  while (x.measureText(name).width > W - 360 && fs > 40) { fs -= 4; x.font = 'bold ' + fs + 'px Georgia, serif'; }
  x.fillStyle = '#14213d'; x.fillText(name, cx, 700);
  x.strokeStyle = '#c9a227'; x.lineWidth = 2; x.beginPath(); x.moveTo(cx - 420, 725); x.lineTo(cx + 420, 725); x.stroke();

  x.fillStyle = '#5b6b82'; x.font = 'italic 32px Georgia, serif';
  x.fillText('adlı katılımcıya verilmiştir.', cx, 785);

  x.fillStyle = '#0b2545'; x.font = '600 44px Georgia, serif';
  x.fillText('Eğitimi ve sınavı başarı ile tamamlamıştır.', cx, 870);

  x.fillStyle = '#5b6b82'; x.font = '28px system-ui, Arial, sans-serif';
  wrapText(x, 'ISO/IEC 27001 Bilgi Güvenliği Yönetim Sistemi kapsamında ' + d.t + ' soruluk sınavda ' + d.s + ' doğru cevap (%' + Math.round(d.s / d.t * 100) + ') ile başarılı olmuştur.', cx, 930, W - 460, 40);

  // alt alan
  x.textAlign = 'left'; x.fillStyle = '#14213d'; x.font = 'bold 30px Georgia, serif';
  x.fillText(trDate(d.d), 190, 1070);
  x.fillStyle = '#5b6b82'; x.font = '22px system-ui, Arial, sans-serif'; x.fillText('Tarih', 190, 1102);
  x.fillStyle = '#14213d'; x.font = 'bold 26px ui-monospace, Consolas, monospace'; x.fillText(d.id, 190, 1000);
  x.fillStyle = '#5b6b82'; x.font = '22px system-ui, Arial, sans-serif'; x.fillText('Sertifika No', 190, 968);

  x.textAlign = 'center';
  x.fillStyle = '#14213d'; x.font = 'italic 56px "Brush Script MT", "Segoe Script", cursive';
  x.fillText(CFG.issuer, W - 420, 1040);
  x.strokeStyle = '#14213d'; x.lineWidth = 1.5; x.beginPath(); x.moveTo(W - 640, 1060); x.lineTo(W - 200, 1060); x.stroke();
  x.fillStyle = '#5b6b82'; x.font = '22px system-ui, Arial, sans-serif';
  x.fillText(CFG.issuerTitle, W - 420, 1094);

  x.fillStyle = '#0b2545'; x.font = 'bold 30px Georgia, serif';
  x.fillText(CFG.site, cx, H - 110);
}
function setupCert() {
  var d = certData(), cv = $('#certCanvas');
  drawCert(cv, d);
  var url = verifyUrl(d);
  var dt = new Date(d.d + 'T00:00:00');
  $('#liAdd').href = 'https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME' +
    '&name=' + encodeURIComponent(CFG.title) +
    '&organizationName=' + encodeURIComponent(CFG.issuer + ' | ' + CFG.site) +
    '&issueYear=' + dt.getFullYear() + '&issueMonth=' + (dt.getMonth() + 1) +
    '&certId=' + encodeURIComponent(d.id) + '&certUrl=' + encodeURIComponent(url);
  $('#liShare').href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url);
  var fname = 'Bilgi-Guvenligi-Farkindalik-Sertifikasi-' + d.id;
  $('#dlPng').onclick = function () {
    var a = document.createElement('a'); a.download = fname + '.png'; a.href = cv.toDataURL('image/png'); a.click();
  };
  $('#dlPdf').onclick = function () {
    if (!window.jspdf) { alert('PDF kütüphanesi yüklenemedi. Lütfen PNG olarak indirin veya sayfayı yenileyin.'); return; }
    var pdf = new window.jspdf.jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    pdf.addImage(cv.toDataURL('image/jpeg', 0.95), 'JPEG', 0, 0, 297, 210);
    pdf.save(fname + '.pdf');
  };
  var post = '🎓 "' + CFG.title + '" eğitimini ve sınavını %' + Math.round(d.s / d.t * 100) + ' başarı ile tamamladım.\n\n' +
    'ISO/IEC 27001 kapsamında bilgi güvenliği farkındalığı, her çalışanın sorumluluğudur. Siz de ücretsiz katılabilirsiniz:\n' + baseUrl() +
    '\n\n#BilgiGüvenliği #ISO27001 #SiberGüvenlik #Farkındalık';
  $('#copyPost').onclick = function () {
    (navigator.clipboard ? navigator.clipboard.writeText(post) : Promise.reject()).then(function () {
      $('#copyPost').textContent = 'Kopyalandı ✓';
    }, function () { prompt('Metni kopyalayın:', post); });
  };
}

/* ---------- Sertifika doğrulama sayfası ---------- */
function checkVerify() {
  var q = new URLSearchParams(location.search), v = q.get('v'), k = q.get('k');
  if (!v) return false;
  var card = $('#verifyCard'), ok = false, d = null;
  try { d = b64d(v); ok = k === checksum(JSON.stringify(d)) && d.n && d.id && d.s >= Math.ceil(d.t * CFG.passPct / 100); } catch (e) { ok = false; }
  show('#verify');
  $('#verifyHome').href = baseUrl();
  if (ok) {
    card.innerHTML = '<h2 style="color:var(--ok)">✔ Sertifika bilgileri tutarlı</h2><p class="muted">' + esc(d.n) + ' adlı katılımcı, ' + trDate(d.d) + ' tarihinde ' + esc(CFG.title) + ' sınavını ' + d.s + '/' + d.t + ' ile geçmiştir. Sertifika No: <b>' + esc(d.id) + '</b></p><canvas id="vc" class="cert-preview"></canvas>';
    drawCert($('#vc'), d);
  } else {
    card.innerHTML = '<h2 style="color:var(--bad)">✖ Doğrulanamadı</h2><p class="muted">Bağlantı geçersiz veya değiştirilmiş olabilir.</p>';
  }
  return true;
}

/* ---------- Başlat ---------- */
document.addEventListener('DOMContentLoaded', function () {
  if (checkVerify()) return;
  renderTraining();
  ['#nameInput', '#readChk', '#rulesChk'].forEach(function (s) { $(s).addEventListener('input', updateStart); $(s).addEventListener('change', updateStart); });
  $('#startBtn').onclick = function () {
    if (st && !st.done && st.end > Date.now() && !confirm('Devam eden sınavınız silinip yenisi başlayacak. Emin misiniz?')) return;
    startExam();
  };
  $('#prevBtn').onclick = function () { if (st.idx > 0) { st.idx--; save(); renderQ(); } };
  $('#nextBtn').onclick = function () { if (st.idx < CFG.total - 1) { st.idx++; save(); renderQ(); } };
  $('#flagBtn').onclick = function () { st.flag[st.idx] = !st.flag[st.idx]; save(); renderQ(); };
  $('#finishBtn').onclick = function () { finish(false); };
  $('#retryBtn').onclick = function () { clearSt(); st = null; $('#timerBox').hidden = true; show('#home'); renderResume(); };
  document.addEventListener('keydown', function (e) {
    if ($('#exam').hidden) return;
    var m = { a: 0, b: 1, c: 2, d: 3, '1': 0, '2': 1, '3': 2, '4': 3 }[e.key.toLowerCase()];
    if (m !== undefined && !e.ctrlKey && !e.metaKey) { st.ans[st.idx] = m; save(); renderQ(); }
    else if (e.key === 'ArrowRight' && st.idx < CFG.total - 1) { st.idx++; save(); renderQ(); }
    else if (e.key === 'ArrowLeft' && st.idx > 0) { st.idx--; save(); renderQ(); }
  });
  window.addEventListener('beforeunload', function (e) {
    if (st && !st.done && !$('#exam').hidden) { e.preventDefault(); e.returnValue = ''; }
  });
  st = load();
  if (st && st.name) $('#nameInput').value = st.name;
  updateStart(); renderResume();
});
})();
