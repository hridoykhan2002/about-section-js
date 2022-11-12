// selecting elements 

const btns = document.querySelectorAll('.tab-btn');
const container = document.querySelector('.button-box');
const content = document.querySelectorAll('.singleEle');
const imgEle = document.querySelectorAll('.imgEle');



// function

const f1 = (e) =>{
    const dataiD = e.target.dataset.id;
    if(dataiD){
        btns.forEach((btn) =>{
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
        imgEle.forEach((img) =>{
            img.classList.remove('active')
        })
        content.forEach((item) =>{
            item.classList.remove('active')
        })
        const imgValue = document.getElementById(dataiD)
        const getValue = document.getElementById(dataiD)
        getValue.classList.add('active');
        imgValue.classList.add('active');
    }
};


// add event listener
container.addEventListener('click',f1);

