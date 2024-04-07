let gameSeq = [];
let userSeq = [];

let btns = ['red','green','orange','blue'];

let gameStatus = false;

let level = 0 ;

let h2 = document.querySelector('h2');

let body = document.querySelector('body');


document.addEventListener('keypress',function(){
    if(gameStatus == false){
        console.log('game started');
        gameStatus = true;

        levelUp();
    }
});

function buttonFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}



function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level-${level}`;

    //random indx
    let rndBtnIdx = Math.floor(Math.random()*4);
    console.log(rndBtnIdx);
    let rndClr = btns[rndBtnIdx];
    
    let rndBtn = document.querySelector(`.${rndClr}`);
    gameSeq.push(rndClr);
    buttonFlash(rndBtn);
    
}

function checkAns(indx){

    // console.log('current level',level);
    // let indx = level-1;
    if(gameSeq[indx] === userSeq[indx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{

        h2.innerHTML = `Game over, Your Score-<b>${level}</b> <br>Press any key to start`;
        
        body.classList.add('reds');
        setTimeout(function(){
            body.classList.remove('reds');
        },250);
        reset();
    }


}

function btnPressed(){
    let btn = this;
    buttonFlash(btn);

    let userClr = btn.getAttribute("id");
    userSeq.push(userClr);
    checkAns(userSeq.length-1);
}


let allBtn = document.querySelectorAll('.box');

for(btn of allBtn){
    btn.addEventListener('click', btnPressed);
}


function reset(){
    level = 0 
    gameSeq = [];
    userSeq = [];
    gameStatus = false;
}





// let url = "https://catfact.ninja/fact";


// fetch(url)
// .then((result)=>{
//     console.log("ans -->",result);
//     result.json().then((res) =>{
//         console.log("data--->",res.fact);
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })


// async function getFacts(){
//     let req1 = await fetch(url);
//     let data1 = await req1.json();
//     console.log("data" ,data1.fact);
    
    
// }







