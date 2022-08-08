"use strict";
// const submit_btn = document.getElementById('contactform')
window.addEventListener('load', () => {
    let bg_section = document.querySelectorAll('.set-bg');
    for (let i = 0; i < bg_section.length; i++) {
        const bg = bg_section[i].getAttribute('data-bg');
        bg_section[i].setAttribute('style', `background-image: url(${bg});`);
    }
});
setTimeout(() => {
    let alertc = document.getElementsByClassName('alert');
    for (let index = 0; index < alertc.length; index++) {
        const element = alertc[index];
        element.setAttribute('style', 'display:none;');
    }
}, 4000);
// function send_message(name: String, email: String, subject: String, body: String, csrfmiddlewaretoken: String) {
//       let data = {
//             'name': name,
//             'email': email,
//             'subject': subject,
//             'body': body,
//             'csrfmiddlewaretoken': csrfmiddlewaretoken
//       }
//       //console.log(data, JSON.stringify(data));
//       fetch('/send-message/',
//             { method: 'POST', body: JSON.stringify(data) })
//             .then(response => response.json())
//             .then(data => {
//                   console.log(data)
//             })
//             .catch(error => {
//                   console.error('Error:', error);
//             });
//       // console.log(response)
//       // return response
// }
// document.getElementById('contactform')!.addEventListener('submit', (e) => {
//       console.log('works...!')
//       e.preventDefault()
//       let name = document.getElementById("name") as HTMLInputElement;
//       let email = document.getElementById("email") as HTMLInputElement;
//       let subject = document.getElementById("subject") as HTMLInputElement;
//       let body = document.getElementById("message") as HTMLInputElement;
//       let csrfmiddlewaretoken = document.getElementsByName('csrfmiddlewaretoken')[0] as HTMLInputElement;
//       send_message(name.value, email.value, subject.value, body.value, csrfmiddlewaretoken.value);
// })
