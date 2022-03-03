const Probability = document.getElementById("probability");
const Result = document.getElementById("result");
const A = document.getElementById("one");
const B = document.getElementById("two");
const startSound = document.getElementById("startvoice");
const goodSound = document.getElementById("good");
const badSound = document.getElementById("bad");
let correct = 0;
let ProbabilityNumber = 50;
let times = 0;
let push = 0;

correct = Math.floor(Math.random()*2);

A.addEventListener("click",function(){
    if(push == 0){
        if(correct == 0){
            Result.innerText = "成功";
            goodSound.play();
            push = 1;
            setTimeout(function(){
                Result.innerText = "";
                times++;
                let i = 0;
                let denominator = 1;
                while(i <= times){
                    denominator = denominator*2;
                    i++;
                }
                ProbabilityNumber = 1/denominator*100;
                Probability.innerText = ProbabilityNumber;
                correct = Math.floor(Math.random()*2);
                push = 0;
            },3000);
        }else{
            push = 1;
            Result.innerText = "残念\nリセットされます";
            badSound.play();
            setTimeout("location.reload()",5000);
        }
    }
});

B.addEventListener("click",function(){
    if(push == 0){
        if(correct == 1){
            Result.innerText = "成功";
            goodSound.play();
            push = 1;
            setTimeout(function(){
                Result.innerText = "";
                times++;
                let i = 0;
                let denominator = 1;
                while(i <= times){
                    denominator = denominator*2;
                    i++;
                }
                ProbabilityNumber = 1/denominator*100;
                Probability.innerText = ProbabilityNumber;
                correct = Math.floor(Math.random()*2);
                push = 0;
            },3000);
        }else{
            push = 1;
            Result.innerText = "残念\nリセットされます";
            badSound.play();
            setTimeout("location.reload()",5000);
        }
    }
});