// const btns = document.querySelectorAll('.btn')
// const forms = document.querySelectorAll('[class*="form"]')

// const btnApply = document.querySelector('.apply__btn')
// const chkbxAgree = document.querySelector('#agree')

// // if(chkbx.checked) proceed
// btnApply.disabled = true;
// chkbxAgree.addEventListener('click', () => {
//     if (chkbxAgree.checked) {
//         btnApply.disabled = false
//     }
// })

// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => e.preventDefault())
// })

// console.log(forms)

// forms.forEach(form => {
//     form.addEventListener('submit', (e) => e.preventDefault())
// })

const btnMenuToggle = document.querySelector('.nav__menu--btn')
const navMenu = document.querySelector('.nav__list')

window.addEventListener('load', function(){
    navMenu.classList.remove('--collapse')
})

btnMenuToggle.addEventListener('click', e => {
    navMenu.classList.toggle('--collapse')    
})

window.addEventListener('resize', e => {
    navMenu.classList.remove('--collapse')
})

