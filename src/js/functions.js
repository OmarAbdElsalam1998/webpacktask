// Question 1 Change images Opacity When Mouse Over It
//when mouse over on image function
 function over(e){
    var opacity=1;
    var interval=setInterval(function(){
        if(opacity>0.3){
        e.style.opacity=opacity;
        opacity=opacity-0.1;
        }
        else{
            clearInterval(interval);
        }
    },100);
}
//when mouse out from image function

function out(e){
    var opacity=0.3;
   var int=setInterval(function(){
        if(opacity<=1){
        e.style.opacity=opacity;
        opacity=opacity+0.1;
        }
        else{
        clearInterval(int);

        }
    },100);
}
//get RandomNumber in given range{x,y}
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}
function toggleClass(x) {
    if (x.classList.contains('fa-eye-slash')) {
      x.classList.remove('fa-eye-slash');
      x.classList.add('fa-eye');

    } else {
        x.classList.add('fa-eye-slash');
        x.classList.remove('fa-eye');
    }
}
export {
    over,out,getRandomNumber,toggleClass
}

