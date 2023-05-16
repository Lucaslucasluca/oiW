
const wrapper = document.querySelector('.wrapper');
const yesBtn = document.querySelector('.sim_btn');
const noBtn = document.querySelector('.nao_btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener('mouseover', () => {
    let i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    let j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

noBtn.addEventListener('touchstart', () => {
    let i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    let j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});