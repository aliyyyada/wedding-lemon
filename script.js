
function render() {
  // Заголовок страницы
document.title = `${CONFIG.name1} & ${CONFIG.name2} — ${CONFIG.date}`;
  
  // Имена
document.querySelectorAll('.hero-names, .sn').forEach(el => {
  el.innerHTML = `${CONFIG.name1}<br>&amp; ${CONFIG.name2}`;
});
  
  // Дата
document.querySelectorAll('.hero-date, .di').forEach(el => {
  el.textContent = CONFIG.date;
});
  
  // Фото
document.querySelector('.couple-wrap img').src = CONFIG.couplePhoto;
  
  // Места
const venues = document.querySelectorAll('.li');
[CONFIG.venue1, CONFIG.venue2].forEach((v, i) => {
  venues[i].querySelector('.lt').textContent = v.label;
  venues[i].querySelector('.ln').textContent = v.name;
  venues[i].querySelector('.la').textContent = v.address;
  venues[i].querySelector('.mb').onclick = () => window.open(v.mapUrl);
});
  
  // Программа
const progWrap = document.querySelector('.prog-wrap');
const piItems = progWrap.querySelectorAll('.pi');
piItems.forEach(el => el.remove());
CONFIG.schedule.forEach(item => {
  progWrap.insertAdjacentHTML('beforeend', `
    <div class="pi">
      <div class="pt">${item.time}</div>
      <div class="pv"></div>
      <div class="pe">${item.event}</div>
      <div class="pp">${item.place}</div>
  </div>
  `);
});
  
  // Дресс-код
const cg = document.querySelector('.cg');
cg.innerHTML = CONFIG.dresscode.map(c => `
    <div>
      <div class="cd" style="background:${c.color}${c.border ? ';border:1px solid #ddd' : ''}"></div>
      <div class="cl">${c.label}</div>
    </div>
  `).join('');
}

render(); 


const SCRIPT_URL = CONFIG.scriptURL;
function sel(b) {
  b.closest('.rg').querySelectorAll('.rb').forEach(x => x.classList.remove('on'));
  b.classList.add('on');

  const guestsField = document.getElementById('guests-field');
  if (b.textContent.trim() === 'Не смогу') {
    guestsField.style.display = 'none';
    guestsField.value = '';
  } else {
    guestsField.style.display = 'block';
  }
}

document.getElementById('rf').addEventListener('submit', async function(e) {
e.preventDefault();
  
const form = e.target;
const btn = form.querySelector('.sbtn');
btn.textContent = 'Отправляем...';
btn.disabled = true;
 
const data = {
  name:    form.querySelector('input[type="text"]').value,
  status:  form.querySelector('.rb.on').textContent,
  guests:  form.querySelector('input[type="number"]').value,
  comment: form.querySelectorAll('input[type="text"]')[1].value
  };
  
try {
  await fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
  form.style.display = 'none';
  document.getElementById('fs').style.display = 'block';
} catch(err) {
  btn.textContent = 'Отправить';
  btn.disabled = false;
  alert('Ошибка отправки, попробуй ещё раз');
}
});
