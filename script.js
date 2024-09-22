let bgMusic=new Audio("")
let tuen=new Audio("music.wav")
let gameOver=new Audio("music1.wav")
let turn="X"
let over=false
const turnChange=()=>{
    return turn==="X"?"0":"X"
}

const checkWin=()=>{
let spantext=document.getElementsByClassName("boxtext")
let win=[
    [0,1,2,2,5,0],
    [3,4,5,2,18,0],
    [6,7,8,2,28,0],
    [0,3,6,-8,17,90],
    [1,4,7,3,17,90],
    [2,5,8,15,17,90],
    [0,4,8,3,17,45],
    [2,4,6,4,17,135]
]
win.forEach(ele=>{
    if((spantext[ele[0]].innerText===spantext[ele[1]].innerText) && (spantext[ele[1]].innerText===spantext[ele[2]].innerText) && (spantext[ele[0]].innerText!=="")){
    //    document.querySelector(".infor").innerText=spantext[ele[0]].innerText + " won"
       
       document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="150px"
       document.querySelector(".line").style.width="30vw"
       document.querySelector(".line").style.transform=`translate(${ele[3]}vw, ${ele[4]}vw) rotate(${ele[5]}deg)`
       over=true
       
       gameOver.play()
       setTimeout(() => {
        document.querySelector(".infor").innerText=spantext[ele[0]].innerText + " won"
        document.getElementById("playGame").style.display="none"
       }, 1000);
    }
})

}
let allbox=document.getElementsByClassName("box")
Array.from(allbox).forEach(ele=>{
    let innerte=ele.querySelector(".boxtext")
    ele.addEventListener("click",()=>{
        if(innerte.innerText==='' && !over){
            innerte.innerText=turn
           turn= turnChange()
            tuen.play()
            checkWin()
             if(!over){
            document.getElementsByClassName("infor")[0].innerText="turn for"+turn
             }
        }
    })
     
})
reset.addEventListener('click',()=>{
    let sty=document.getElementById("playGame")
    // if(document.getElementById("playGame").style.display="none"){
    //     document.getElementById("playGame").style.display="block"
    // }
    document.getElementById("playGame").style.display="grid"
    let spantext=document.querySelectorAll(".boxtext")
    Array.from(spantext).forEach(e=>{
        e.innerText=""
    })
    turn="X"
    over=false
    document.getElementsByClassName("infor")[0].innerText="turn for"+turn
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px"
    document.querySelector(".line").style.width="0vw"
    
})
