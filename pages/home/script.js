const homeMainImg = document.getElementById('homeMainImg');
const homeMainImgTitle = document.getElementById('homeMainImgTitle');
const homeMainImgDate = document.getElementById('homeMainImgDate');
const homeMainImges = [
    {
        url: 'homeMainImg-1.png',
        title: {
            text: 'ЦИМ-КАБИНЕТ МОГЭ СТАЛ ВАЖНЫМ ИНСТРУМЕНТОМ ПОВЫШЕНИЯ ЭФФЕКТИВНОСТИ ЭКСПЕРТИЗЫ ЦИФРОВЫХ МОДЕЛЕЙ',
            date: '24.01.2024'
        }
    },
    {
        url: 'homeMainImg-2.png',
        title: {
            text: 'Проект МКД  по программе расселения аварийного фонда в Шатурском г.о.',
            date: '24.01.2024'
        }
    },
    {
        url: 'homeMainImg-3.png',
        title: {
            text: 'МОГЭ КООРДИНИРУЕТ ПЕРЕХОД НА РИМ',
            date: '06.12.2023'
        }
    },
]
const speedAnimation = 3000; // каждые 3 сек заменять картинку

let indexhomeMainImg = 0;
setInterval(() => {
    const indexhomeMainImgAfter = indexhomeMainImg + 1;
    if (indexhomeMainImgAfter < homeMainImges.length) {
        indexhomeMainImg++
    } else {
        indexhomeMainImg = 0;
    }

    homeMainImg.src = `../../assets/images/home/${homeMainImges[indexhomeMainImg].url}`;
    homeMainImgTitle.innerHTML = (homeMainImges[indexhomeMainImg].title.text).toUpperCase();
    homeMainImgDate.innerHTML = homeMainImges[indexhomeMainImg].title.date;
}, speedAnimation);

const partners = document.querySelector('.partners');
let leftPartners = 0;

setInterval(() => {
    leftPartners -= 160;

    if (leftPartners === -1920) {
        leftPartners = 0;
        partners.style.transition = '0s';
        partners.style.marginLeft = `${leftPartners}px`;

        setTimeout(() => {
            leftPartners -= 160;
            partners.style.transition = '0.5s';
            partners.style.marginLeft = `${leftPartners}px`;
        }, 100)
    } else {
        partners.style.transition = '0.5s';
        partners.style.marginLeft = `${leftPartners}px`;
    }
}, 3000);
