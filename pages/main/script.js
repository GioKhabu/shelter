const checkbt = document.querySelector(".toggle-menu")
const mainPage =  document.querySelector('.mainPage')
const petsPage =  document.querySelector('.petsPage')
const help1 =  document.querySelector('.help1')
const contact1 =  document.querySelector('.contact1')

const arrTags = [mainPage, help1, contact1];

mainPage.addEventListener('click', ()=>{
    checkbt.checked = false;
    document.body.style.overflow = 'visible';
})

petsPage.addEventListener('click', ()=>{
    checkbt.checked = false;
    document.body.style.overflow = 'visible';
})


help1.addEventListener('click', ()=>{
    checkbt.checked = false;
    document.body.style.overflow = 'visible';
})

contact1.addEventListener('click', ()=>{
    checkbt.checked = false;
    document.body.style.overflow = 'visible';
})


function disbaleScroll (){

    checkbt.addEventListener('change', ()=>{
        if (checkbt.checked==true) {
            document.body.style.overflow = 'hidden';
        } else if (checkbt.checked==false){
            document.body.style.overflow = 'visible';
        }
    })

}
disbaleScroll ()
