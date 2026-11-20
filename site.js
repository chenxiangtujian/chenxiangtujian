
function copyWechat(el) {
  var id = 'jiami366';
  function done() { var t = el.querySelector('.copy-hint'); if (t) t.textContent = '微信号已复制，去微信添加好友发照片'; }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(id).then(done).catch(function(){ fallbackCopy(id); done(); });
  } else { fallbackCopy(id); done(); }
}
function fallbackCopy(text) {
  var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
  ta.select(); try { document.execCommand('copy'); } catch(e) {} document.body.removeChild(ta);
}
/* 首页产区展开 */
function toggleOrigin(i) {
  var cards = document.querySelectorAll('.origin-card');
  var panels = document.querySelectorAll('.origin-panel');
  var isOpen = panels[i].classList.contains('open');
  cards.forEach(function(c){ c.classList.remove('sel'); });
  panels.forEach(function(p){ p.classList.remove('open'); });
  if (!isOpen) { cards[i].classList.add('sel'); panels[i].classList.add('open'); }
}
