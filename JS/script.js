// Проверка темной темы в localStorage
const btnDarkMode = document.querySelector('.dark-mode-btn')

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active")
    document.body.classList.add("dark")
} else {
    // Убедитесь, что по умолчанию включен светлый режим
    btnDarkMode.classList.remove("dark-mode-btn--active")
    document.body.classList.remove("dark")
}

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active")

    const isDark = document.body.classList.toggle('dark')

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem("darkMode", "light")
    }
}