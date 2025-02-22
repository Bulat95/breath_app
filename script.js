const circle = document.querySelector('.breath-circle');
const instruction = document.querySelector('.instruction');
const toggleButton = document.querySelector('.toggle-button');
const body = document.body;

function updateInstruction(text) {
    instruction.style.opacity = '0'; // Сначала делаем текст прозрачным
    
    setTimeout(() => {
        instruction.textContent = text; // Меняем текст когда он невидим
        instruction.style.opacity = '1'; // Плавно показываем новый текст
    }, 300); // Ждем пока текст исчезнет
}

function breathingCycle() {
    setTimeout(() => {
        updateInstruction('Вдох');
        circle.classList.remove('exhale', 'hold');
        circle.classList.add('inhale');
    }, 0);

    setTimeout(() => {
        updateInstruction('Задержите дыхание');
        circle.classList.remove('inhale', 'exhale');
        circle.classList.add('hold');
    }, 4000);

    setTimeout(() => {
        updateInstruction('Выдох');
        circle.classList.remove('inhale', 'hold');
        circle.classList.add('exhale');
    }, 8000);

    setTimeout(breathingCycle, 14000);
}

// Переключение темы с предотвращением повторных кликов
let isToggling = false;
toggleButton.addEventListener('click', () => {
    if (isToggling) return; // Блокируем повторные клики во время анимации
    isToggling = true;
    body.classList.toggle('dark');
    setTimeout(() => {
        isToggling = false; // Разблокируем после завершения анимации
    }, 300); // Время совпадает с transition в CSS
});

breathingCycle();