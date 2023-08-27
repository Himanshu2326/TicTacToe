// JavaScript Logic :-

let turn = "X";
let music = new Audio("Click.mp3");
let isgameover = false;

// Function to change turn :

const changeTurn =()=>{
    return turn === "X" ? "0":"X" ;
}

// Function To check For a Win :

const checkWin=()=>{
    let Boxtext = document.getElementsByClassName("BoxText"); 
    let win = [
        [0,1,2,0,4,0],
        [3,4,5,0,12,0],
        [6,7,8,0,20,0],
        [0,3,6,-8,12,90],
        [1,4,7,0,12,90],
        [2,5,8,8,12,90],
        [0,4,8,0,12,45],
        [2,4,6,0,12,-45],
    ]
    win.forEach(e=>{
        if((Boxtext[e[0]].innerText === Boxtext[e[1]].innerText) && (Boxtext[e[2]].innerText === Boxtext[e[1]].innerText) && (Boxtext[e[0]].innerText !== ""))
        {
        document.querySelector(".info").innerText = Boxtext[e[0]].innerText + " Won "
        isgameover= true;
        document.querySelector(".line").style.width = "24vw";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
} 

// Game Logic :

let boxes = document.getElementsByClassName("Box");
Array.from(boxes).forEach((element)=>{
    let Boxtext = element.querySelector(".BoxText");
    element.addEventListener('click',()=>{
        if(Boxtext.innerText === '')
        {   
            
            Boxtext.innerText = turn;
            turn = changeTurn();
            music.play();
            checkWin();
            if(!isgameover)
            {
            document.getElementsByClassName("info")[0].innerText = "Turn For : " + turn ;
            }

        }
    })
})

// Reset Button :

let reset = document.getElementsByClassName("btn")[0];
reset.addEventListener("click",()=>{
    let Boxtext = document.querySelectorAll(".BoxText");
    Array.from(Boxtext).forEach(element=> {  
         element.innerText=""; 
    });
    turn ="X";
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn For : " + turn;
    
})