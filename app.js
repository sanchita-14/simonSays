let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"]

let started= false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
	if(started == false){
		console.log("Game Started");
		started=true;

		levelUp();
	}
});
function btnFlash(btn){

	btn.classList.add("flash");

	setTimeout(function(){
		btn.classList.remove("flash")
	},250);



}
function userFlash(btn){

	btn.classList.add("userFlash");

	setTimeout(function(){
		btn.classList.remove("userFlash")
	},250);
}


function levelUp(){
	userSeq=[];
level++;
h2.innerText=`Level ${level}`;

let RandIndex=Math.floor(Math.random()*3);
let RanCol= btns[RandIndex];
let randBtn=document.querySelector(`.${RanCol}`);

gameSeq.push(RanCol);
btnFlash(randBtn);

}

function checkAns(idx){
	

	if(userSeq[idx]==gameSeq[idx]){
		if(userSeq.length==gameSeq.length){
			setTimeout(levelUp,1000);
		}

	}else{
		document.querySelector("body").style.backgroundColor="red";
		setTimeout(function(){
			document.querySelector("body").style.backgroundColor="white";
		},150)
		h2.innerHTML=`Game Over! Your score was <b> ${level}</b>  <br>  Press Any Key To Start`;
		reset();
		
	}


}

function btnPress(){
	let btn=this;
	userFlash(btn);

	userColor=btn.getAttribute("id");
	userSeq.push(userColor);

	checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns) {
	btn.addEventListener("click",btnPress);
}

function reset(){
	started=false;
	gameSeq=[];
	userSeq=[];
	level=0;

}
