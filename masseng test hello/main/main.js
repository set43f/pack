console.log(localStorage.getItem('infoName'))
console.log(localStorage.getItem('age'))
let a = localStorage.getItem('infoName')
let b = localStorage.getItem('age')
alert(`Здравствуйте ${a},ваш возраст ${b}`);
let infoName = prompt('ФИО' );
    

let age = prompt('Ваш возраст' );
localStorage.setItem('infoName',infoName)
localStorage.setItem('age',age)
alert('Спасибо')