const translate = document.querySelector('.translate');
const translateArr = [
    'எதீரியம்','Эфириум','Etérium','イーサリアム','Ethereum','Ξ','اتریوم','ఇథిరియూమ్','อีเธอเรียม','ইথেরিয়াম','etérea','Эфириум','...'
]
console.log(translateArr.length)
let x=0;
setInterval(function(){
        translate.innerHTML = translateArr[x];
        x++;
        if(x>=translateArr.length) x=0;
},2500);
   