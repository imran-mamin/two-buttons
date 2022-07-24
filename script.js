const btnYes = document.querySelector('.btn-yes');
const btnNo = document.querySelector('.btn-no');

const btns = document.querySelector('.btns');
let sum = 0;
let yes = 0;
let no = 0;
let answering = true;

const yesOrNoClass = function () {
  btns.classList.toggle('no');
  btns.classList.toggle('yes');
};

btnYes.addEventListener('click', function () {
  if (answering) {
    btns.classList.remove('no');
    btns.classList.add('yes');

    sum += 1;
    yes += 1;
    btnYes.textContent = `Yes ${Math.trunc((yes / sum) * 100)}%`;
    btnNo.textContent = `No ${Math.trunc((no / sum) * 100)}%`;
  }
  console.log('Yes', yes);
});

btnNo.addEventListener('click', function () {
  if (answering) {
    btns.classList.remove('yes');
    btns.classList.add('no');

    sum += 1;
    no += 1;

    btnYes.textContent = `Yes ${Math.trunc((yes / sum) * 100)}%`;
    btnNo.textContent = `No ${Math.trunc((no / sum) * 100)}%`;
  }
  console.log(no);
});
