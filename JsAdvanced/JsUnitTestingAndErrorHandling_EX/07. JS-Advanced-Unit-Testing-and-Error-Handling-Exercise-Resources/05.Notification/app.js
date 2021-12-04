function notify(message) {
  let divNotification = document.getElementById('notification')
  divNotification.textContent = message
  divNotification.style.display = 'block'

  divNotification.addEventListener('click', (e) => {
    e.target.style.display = 'none';
  });
  console.log(divNotification)

}