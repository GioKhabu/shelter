const checkbt = document.querySelector(".toggle-menu")
const mainPage = document.querySelector('.mainPage')
const petsPage = document.querySelector('.petsPage')
const help1 = document.querySelector('.help1')
const contact1 = document.querySelector('.contact1')
const boundary1 = document.querySelector('bounday1')




const arrTags = [mainPage, help1, contact1];

mainPage.addEventListener('click', () => {
    checkbt.checked = false;
    document.body.style.overflow = 'visible';
})

petsPage.addEventListener('click', () => {
    checkbt.checked = false;
    document.body.style.overflow = 'visible';
})


help1.addEventListener('click', () => {
    checkbt.checked = false;
    document.body.style.overflow = 'visible';
})

contact1.addEventListener('click', () => {
    checkbt.checked = false;
    document.body.style.overflow = 'visible';
})


function disbaleScroll() {

    checkbt.addEventListener('change', () => {
        if (checkbt.checked == true) {
            document.body.style.overflow = 'hidden';
        } else if (checkbt.checked == false) {
            document.body.style.overflow = 'visible';
        }
    })

}
disbaleScroll()


// Carousel Section

let name1, img, type, breed, description, age, inoculations, diseases, parasites, mainObj;

fetch("../../data/shelter.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        name1 = data.name;
        img = data.img;
        type = data.type;
        breed = data.breed;
        description = data.description;
        age = data.age;
        inoculations = data.inoculations;
        diseases = data.diseases;
        parasites = data.parasites;
        mainObj = data;
        bookObj();
        learnMore();
    });

const cardsSlider = document.querySelector('.cardsSlider')

let bookObj = function () {
    for (let prop in mainObj) {
        let windowSize = window.innerWidth
        const card = document.createElement('div')
        card.classList.add('card')
        cardsSlider.appendChild(card)
        card.innerHTML = `<img
    src="${mainObj[prop].img}"
    alt="Pet image"
  />
  <h3>${mainObj[prop].name1}</h3>
  <button class="btn learnMore" onsubmit="return false;" id=${prop}>
    <span>Learn more</span>
  </button>`;
    }
    }

    let learnMore = function () {
        document.querySelectorAll('.learnMore').forEach(item => {
            item.addEventListener('click', e => {
               const detailsContainer = document.querySelector('.detailsContainer')
               detailsContainer.style.display = "flex";
               let currentID =  e.currentTarget.id
               console.log(currentID)
               detailsContainer.innerHTML = `
               <div class="detailsContainer2">
               <div class="detailsImage">
                   <img src="${mainObj[currentID].img}" alt="">
               </div>
               <div class="detailInfo">
                   <h2>${mainObj[currentID].name1}</h2>
                   <h3>${mainObj[currentID].type} - ${mainObj[currentID].breed}</h3>
                   <p>${mainObj[currentID].description}</p>
                   <ul>
                       <li><strong>Age:</strong> <div class="age">${mainObj[currentID].age}</div> </li>
                       <li><strong>Inoculations:</strong> <div class="inoculations">${mainObj[currentID].inoculations}</div> </li>
                       <li><strong>Diseases:</strong> <div class="diseases">${mainObj[currentID].diseases}</div> </li>
                       <li><strong>parasites:</strong> <div class="parasites">${mainObj[currentID].parasites}</div> </li>
                   </ul>
               </div>
               <button class="close">x</button>
           </div>`;
           document.querySelector('body').style.overflow = "hidden"
           let close = document.querySelector('.close')
           if (document.body.contains(close)){
               close.addEventListener('click', (e)=>{
                document.querySelector('body').style.overflow = "visible"
                   console.log(e.target.parentElement.parentElement)
                   e.target.parentElement.parentElement.style.display = "none";
               })
           }
            })

        })
    }





const rightArrow = document.querySelector('.right')
const leftArrow = document.querySelector('.left')

let count = [0];

if (window.innerWidth >= 1280){
    rightArrow.addEventListener('click', (e) => {
        if (count[0] <= 0 && count[0] >= -1820 ){
            count[0] += -365
            cardsSlider.style.transform = `translateX(${count[0]}px)`;
        } else if (count[0] <= -1820) {
            count[0] = 0
            cardsSlider.style.transform = `translateX(${count[0]}px)`;
        }
    })
    leftArrow.addEventListener('click', (e) => {
        if (count[0] < 0){
            count[0] += 365
            cardsSlider.style.transform = `translateX(${count[0]}px)`;
        } else if (count[0] >= 0) {
            count[0] += -1825
            cardsSlider.style.transform = `translateX(${count[0]}px)`;
        }
    })
} else if (window.innerWidth <= 1280) {
        rightArrow.addEventListener('click', (e) => {
            if (count[0] <= 0 && count[0] >= -1860 ){
                count[0] += -310
                cardsSlider.style.transform = `translateX(${count[0]}px)`;
            } else if (count[0] <= -1860) {
                count[0] = 0
                cardsSlider.style.transform = `translateX(${count[0]}px)`;
            }
        })
        leftArrow.addEventListener('click', (e) => {
            if (count[0] < 0){
                count[0] += 310
                cardsSlider.style.transform = `translateX(${count[0]}px)`;
            } else if (count[0] >= 0) {
                count[0] += -2170
                cardsSlider.style.transform = `translateX(${count[0]}px)`;
            }
        })

}
window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1280px)").matches) {
        rightArrow.addEventListener('click', (e) => {
            if (count[0] <= 0 && count[0] >= -1820 ){
                count[0] += -365
                cardsSlider.style.transform = `translateX(${count[0]}px)`;
            } else if (count[0] <= -1820) {
                count[0] = 0
                cardsSlider.style.transform = `translateX(${count[0]}px)`;
            }
        })
        leftArrow.addEventListener('click', (e) => {
            if (count[0] < 0){
                count[0] += 365
                cardsSlider.style.transform = `translateX(${count[0]}px)`;
            } else if (count[0] >= 0) {
                count[0] += -1825
                cardsSlider.style.transform = `translateX(${count[0]}px)`;
            }
        })


    } else if (window.matchMedia("(min-width: 320px)").matches) {
        rightArrow.addEventListener('click', (e) => {
            if (count[0] <= 0 && count[0] >= -1860 ){
                count[0] += -310
                cardsSlider.style.transform = `translateX(${count[0]}px)`;
            } else if (count[0] <= -1860) {
                count[0] = 0
                cardsSlider.style.transform = `translateX(${count[0]}px)`;
            }
        })
        leftArrow.addEventListener('click', (e) => {
            if (count[0] < 0){
                count[0] += 310
                cardsSlider.style.transform = `translateX(${count[0]}px)`;
            } else if (count[0] >= 0) {
                count[0] += -2170
                cardsSlider.style.transform = `translateX(${count[0]}px)`;
            }
        })

    }
  })
