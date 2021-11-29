export function notificationMsg(msg){
    let str = 'block'
    update(str)
    function update(str){
        document.querySelector('#errorBox>span').textContent = msg
        document.querySelector('.notification').style.display = str

    }
    setTimeout(() => update('none'), 3000)
}