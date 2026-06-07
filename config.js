const CONFIG = {
  // ══ ПАРА ══
  name1: 'Михо',
  name2: 'Анастасия',
  
  // ══ ДАТА ══
  date: '25.07.2025',
  // день недели в календаре (1=пн, счёт с начала месяца)
  weddingDay: 25,
  weddingDayCol: 5, // 5-я колонка = пятница (0=пн...6=вс)
  
  // ══ ФОТО ══s
  couplePhoto: './img/couple.jpg',
  
  // ══ МЕСТА ══
  venue1: {
    label: 'Регистрация',
    name: 'Курчатовский отдел ЗАГС',
    address: 'г.Челябинск, ул. Молдавская, 11',
    mapUrl: 'https://yandex.ru/maps/org/kurchatovskiy_otdel_zags_administratsii_g_chelyabinska/1017465596/?ll=61.303065%2C55.193458&z=16'
  },
  venue2: {
    label: 'Основное торжество',
    name: 'Досуговый центр «Пегас»',
    address: 'г.Челябинск, ул. Блюхера, 56',
    mapUrl: 'https://yandex.ru/maps/org/pegas/1097572938/?ll=61.361557%2C55.129572&mode=search&sctx=ZAAAAAgBEAAaKAoSCUolPKHX30tAEZwxzAnaCk1AEhIJLjcY6rDCpT8RYCFzZVBtkD8iBgABAgMEBSgKOABA5VZIAWoCcnWdAc3MzD2gAQCoAQC9AZiKF4XCAQXKxK6LBIICKNC00L7RgdGD0LPQvtCy0YvQuSDRhtC10L3RgtGAINC%2F0LXQs9Cw0YGKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=61.361557%2C55.129572&sspn=0.170004%2C0.069417&text=%D0%B4%D0%BE%D1%81%D1%83%D0%B3%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%20%D0%BF%D0%B5%D0%B3%D0%B0%D1%81&z=12.94'
  },
  
  // ══ ПРОГРАММА ══
  schedule: [
    { time: '12:00', event: 'Торжественная регистрация', place: 'ЗАГС' },
    { time: '13:30', event: 'Фотосессия с молодожёнами и свободное время', place: 'Трансфер до ресторана' },
    { time: '14:30', event: 'Лёгкий фуршет', place: 'Досуговый центр «Пегас»' },
    { time: '16:00', event: 'Банкет', place: 'Досуговый центр «Пегас»' },
  ],
  
  // ══ ДРЕСС-КОД ══
  dresscode: [
    { color: '#E8D44D', label: 'Лимонный' },
    { color: '#F5F0E4', label: 'Слоновая кость', border: true },
    { color: '#D4C4A8', label: 'Бежевый' },
    { color: '#8A9E7A', label: 'Шалфейный' },
    { color: '#4E7848', label: 'Оливковый' },
    { color: '#3D2B1A', label: 'Кофейный' },
  ],
  
  // ══ ИНТЕГРАЦИИ ══
  scriptURL: 'https://script.google.com/macros/s/AKfycbyHihUvl6CKow7qzbIG7MHtp88cdLwoUDOHWLTayA97PMXP-A7H4LKcwH9n8Z7_wA3i-g/exec',
};

 