const fullName = document.querySelector('#name');
const feedback = document.querySelector('#emailAdress');
const Message = document.querySelector('#user-message');

function visitorData() {
  const visitor = {
    Name: fullName.value,
    Email: feedback.value,
    Message: Message.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
}

[fullName, feedback, Message].forEach((input) => input.addEventListener('focusout', visitorData));
const visitorDataExist = JSON.parse(localStorage.getItem('visitor'));
if (visitorDataExist) {
  fullName.value = visitorDataExist.Name;
  feedback.value = visitorDataExist.Email;
  Message.value = visitorDataExist.Message;
}
