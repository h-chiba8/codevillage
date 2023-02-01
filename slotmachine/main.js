const stop1 = document.getElementById('setTime1');
const stop2 = document.getElementById('setTime2');
const stop3 = document.getElementById('setTime3');
const nowTime1 = document.getElementById('nowTime');
const nowTime2 = document.getElementById('nowTime2');
const nowTime3 = document.getElementById('nowTime3');
const nowTime4 = document.getElementById('nowTime4');
const nowTime5 = document.getElementById('nowTime5');
const nowTime6 = document.getElementById('nowTime6');
const nowTime7 = document.getElementById('nowTime7');
const nowTime8 = document.getElementById('nowTime8');
const nowTime9 = document.getElementById('nowTime9');
const startBtn = document.getElementById('startTimer');

let counter1;
let counter2;
let counter3;
let count1 = 1;
let count2 = 1;
let count3 = 1;
let count4 = 9;
let count5 = 9;
let count6 = 9;
let count7 = 2;
let count8 = 2;
let count9 = 2;

const countUp1 = () => {
    count1++;
    count4++;
    count7++;
    if (count1 === 10) {
        count1 = 1;
    }
    if (count4 === 10) {
        count4 = 1;
    }
    if (count7 === 10) {
        count7 = 1;
    }
    nowTime1.innerHTML = count1;
    nowTime4.innerHTML = count4;
    nowTime7.innerHTML = count7;
};

const countUp2 = () => {
    count2++;
    count5++;
    count8++;
    if (count2 === 10) {
        count2 = 1;
    }
    if (count5 === 10) {
        count5 = 1;
    }
    if (count8 === 10) {
        count8 = 1;
    }
    nowTime2.innerHTML = count2;
    nowTime5.innerHTML = count5;
    nowTime8.innerHTML = count8;
};

const countUp3 = () => {
    count3++;
    count6++;
    count9++;
    if (count3 === 10) {
        count3 = 1;
    }
    if (count6 === 10) {
        count6 = 1;
    }
    if (count9 === 10) {
        count9 = 1;
    }
    nowTime3.innerHTML = count3;
    nowTime6.innerHTML = count6;
    nowTime9.innerHTML = count9;
};

startBtn.addEventListener('click', function () {
    counter1 = setInterval('countUp1()', 800);
    counter2 = setInterval('countUp2()', 800);
    counter3 = setInterval('countUp3()', 800);
    startBtn.disabled = true;
    stop1.disabled = false;
    stop2.disabled = false;
    stop3.disabled = false;
});

stop1.addEventListener('click', function () {
    stop1.disabled = true;
    if (stop2.disabled && stop3.disabled) {
        if (count1 === count2 && count2 === count3) {
            clearInterval(counter1);
            alert('あたり');
            startBtn.disabled = false;
        } else {
            clearInterval(counter1);
            alert('再挑戦');
            startBtn.disabled = false;
        }
    } else {
        clearInterval(counter1);
    }
});

stop2.addEventListener('click', function () {
    stop2.disabled = true;
    if (stop1.disabled && stop3.disabled) {
        if (count1 === count2 && count2 === count3) {
            clearInterval(counter2);
            alert('あたり');
            startBtn.disabled = false;
        } else {
            clearInterval(counter2);
            alert('再挑戦');
            startBtn.disabled = false;
        }
    } else {
        clearInterval(counter2);
    }
});

stop3.addEventListener('click', function () {
    stop3.disabled = true;
    if (stop2.disabled && stop1.disabled) {
        if (count1 === count2 && count2 === count3) {
            clearInterval(counter3);
            alert('あたり');
            startBtn.disabled = false;
        } else {
            clearInterval(counter3);
            alert('再挑戦');
            startBtn.disabled = false;
        }
    } else {
        clearInterval(counter3);
    }
});