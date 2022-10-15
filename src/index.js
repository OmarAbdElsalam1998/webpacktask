
import {over,out,getRandomNumber,toggleClass} from './js/functions';
import './css/style.min.css';

var imagesCollection=document.querySelectorAll(".image-opacity .img img");
for(let i=0;i<imagesCollection.length;i++){
    imagesCollection[i].addEventListener('mouseover',function(){
            over(this);
          
    
    });
    imagesCollection[i].addEventListener('mouseout',function(){
        out(this);
    
    });
}



//Start Question 2 change span color and background Randomly


//Array Of Colors
var colors=["red","green","blue","orange","black","brown",
"dodgerblue","gray","yellow","#526e2d"];

var spanCollection=document.querySelectorAll(".question2 span");
console.log(spanCollection);
var changeColorBtn=document.getElementById("changeColorBtn");
//On ChangeColor Button Click event
changeColorBtn.addEventListener('click',function(){
    var colorsCopy=Array(...colors);
    var colorsCopy2=Array(...colors);
    for(let i=0;i<spanCollection.length;i++){
        var randomnum=getRandomNumber(0,colorsCopy.length);
        console.log(randomnum);
        spanCollection[i].style.backgroundColor=colorsCopy[randomnum];
         colorsCopy.splice(randomnum,1);
        var randomnum2=getRandomNumber(0,colorsCopy2.length);
        spanCollection[i].style.color=colorsCopy2[randomnum2];
        colorsCopy2.splice(randomnum2,1);


    }
});


//

var showHidePasswordButton=document.getElementById("showHidePassword");
var eye=document.getElementsByClassName("fa-solid")[0];
var password=document.querySelector("input[type='password']");
showHidePasswordButton.addEventListener('click',function(){
    if(eye.classList.contains('fa-eye-slash')){
        toggleClass(eye);
        password.setAttribute('type','text')

    }
    else{
        toggleClass(eye);
        password.setAttribute('type','password');
    }
});



//Question 4
var question=["Where is a good dentist?","Where is the fireman?",
"Who is a good lawyer?","Who is a plumber?","Who are the firemen?",
"Why is he a good teacher?","Why is he a good teacher?",
"What are badger reporters what are good teachers?",
"How are the classes?","Why is he a good teacher?"
];

var questionDisplayField=document.getElementById("question");
var nextBtn=document.getElementById("next");
var prevBtn=document.getElementById("prev");
var counter=0;
questionDisplayField.innerHTML=question[0];
nextBtn.addEventListener("click",function(){
    if(counter<question.length-1){
        counter++;
        questionDisplayField.innerHTML=question[counter];
        
    }
    else{
        alert("no Next Question");
    }
});
prevBtn.addEventListener("click",function(){
    if(counter>0){
        counter--;
        questionDisplayField.innerHTML=question[counter];
        
    }
    else{
        alert("no prev Question");
    }
});



//Question 5
var resultBtn=document.querySelector(".calculator #result");
var clearBtn=document.getElementById("clear");
var calculatorbtns=document.querySelectorAll(".calculator > div:not(:first-of-type) #cal");
console.log(calculatorbtns);
var textField="";
for(let i=0;i<calculatorbtns.length;i++){
    
    calculatorbtns[i].addEventListener('click',function(){
        textField+=this.innerText;
        document.getElementById("claculatorField").value=textField;
    });
  
}
resultBtn.addEventListener("click",function(){
    var result=eval(document.getElementById("claculatorField").value);
    document.getElementById("claculatorField").value=result;
});

clearBtn.addEventListener("click",function(){
    document.getElementById("claculatorField").value="";
    textField="";
});
