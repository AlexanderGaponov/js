function ajax() {
    
    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);


        //AJAX

        let request = new XMLHttpRequest();
        request.open("POST", "server.php")
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);

        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                    //Добавляем контент на страницу
                }
            } else {
                statusMessage.innerHTML = message.failure;
            }
        }
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
            //Очищаем поля ввода
        }
    });

    let contact = document.getElementById('form'),
        email = contact.getElementsByTagName('input')[0],
        tel = contact.getElementsByTagName('input')[1],
        statusContact = document.createElement('div');
    statusContact.classList.add('status');

    contact.addEventListener('submit', function(event) {
        event.preventDefault();
        contact.appendChild(statusContact);

        let request = new XMLHttpRequest();
        request.open("POST", "server.php")
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(contact);

        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusContact.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusContact.innerHTML = message.success;
                    //Добавляем контент на страницу
                }
            } else {
                statusContact.innerHTML = message.failure;
            }
        }
        email.value = '';
        tel.value = '';
        //Очищаем поля ввода
    });
}

module.exports = ajax;