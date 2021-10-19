function solve() {

    let addButton = document.querySelector('.form-control button')
    addButton.addEventListener('click', onClick)

    function onClick(e){
        e.preventDefault()
        let inputs = Array.from(e.target.parentElement.parentElement.children).map(div => div.lastElementChild).slice(0, -1)
        if (inputs[0].value && inputs[1].value && inputs[2].value !== 'Select module'){
            let trainings = document.querySelector('.modules')
            let [date, hour] = inputs[1].value.split('T')
            date = date.split('-').join('/')
            
            let lecture = {
                'div': creatEl('div', 'module', undefined),
                'h3': creatEl('h3', undefined, `${inputs[2].value.toUpperCase()}-MODULE`),
                'ul': creatEl('ul', undefined, undefined),
                'li': creatEl('li', 'flex', undefined),
                'h4': creatEl('h4', undefined, `${inputs[0].value} - ${date} - ${hour}`),
                'button': creatEl('button', 'red', 'Del'),

            }
            lecture.div.appendChild(lecture.h3)
            lecture.li.appendChild(lecture.h4), lecture.li.appendChild(lecture.button)
            lecture.ul.appendChild(lecture.li)
            lecture.div.appendChild(lecture.ul)

            let isModuleExists = Array.from(trainings.children).filter(l => l.children[0].textContent == `${inputs[2].value.toUpperCase()}-MODULE`)
            if (isModuleExists.length == 1){
                let ul = isModuleExists[0].children[1]
                // lecture.h3.remove()
                ul.appendChild(lecture.li)
                Array.from(ul.children).sort((a, b) => a.firstElementChild.textContent.split(' - ')[1].localeCompare(b.firstElementChild.textContent.split(' - ')[1])).forEach(li => ul.appendChild(li))
                // console.log(isModuleExists)
            }else{
                // console.log(isModuleExists)
                trainings.appendChild(lecture.div)
            
            }


            lecture.button.addEventListener('click', del)

            function del(e){
                lecture.li.remove()
                if(Array.from(lecture.div.children[1].children).length == 0){
                    lecture.div.remove()
                }
            }

            function creatEl(tag, classContent, content){
                let t = document.createElement(tag)
                if (classContent !== undefined){
                    t.setAttribute('class', classContent)
                }if (content !== undefined){
                    t.textContent = content
                }
                return t

            }

        }
    }

}


// let arrayDates = ['2021/06/01', '2021/05/20']
// let newArr = arrayDates.sort((a, b) =>a.localeCompare(b))
// console.log((newArr))