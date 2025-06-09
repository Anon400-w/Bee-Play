document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chat-form');
    const messageList = document.getElementById('message-list');

    // Загрузка сообщений из localStorage
    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    // Функция для отображения сообщений
    function displayMessages() {
        messageList.innerHTML = '';
        messages.forEach((message, index) => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${message.username}:</strong> ${message.comment}`;
            messageList.appendChild(div);
        });
    }

    // Отображение сообщений при загрузке страницы
    displayMessages();

    // Обработка отправки формы
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;

        // Добавление нового сообщения
        messages.push({ username, comment });
        localStorage.setItem('messages', JSON.stringify(messages));

        // Обновление отображения сообщений
        displayMessages();

        // Очистка формы
        form.reset();
    });
});