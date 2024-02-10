const g1 = document.querySelector (".g1");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const g2 = document.querySelector(".g2");
const ilybtn = document.querySelector(".ily-btn");

yesBtn.addEventListener("click", function (){
    question.innerHTML = "KYAAAAAAAAA I LOVE YOU MY HONEY BUNCH SUGAR PALM!!:>";
    gif.src =
    "https://media.giphy.com/media/yNvmkSbnamOXEfnYxY/giphy.gif";
    ilybtn.style.opacity = "1";
    yesBtn.style.opacity = "0";
    noBtn.style.opacity = "0";
});

ilybtn.addEventListener("click", function(){
    question.innerHTML = "KINELEG ANG POOKIE KU!!!";
    gif.src =
    "https://media.giphy.com/media/w1pDeIIP4RPCe4egFr/giphy.gif";
    ilybtn.style.opacity = "1";
    ilybtn.style.opacity = "0";
    yesBtn.style.opacity = "0";
    noBtn.style.opacity = "0";
    
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});


