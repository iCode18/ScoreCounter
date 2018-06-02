var p1=document.querySelector("#player1");
var p2=document.querySelector("#player2");
var res=document.querySelector("#reset");
var max=document.querySelector("#max");
var maxD=document.querySelector("#maxD");
var p1Score=0;
var p2Score=0;
var gameOver = false;
var winnigScore= 0;


alert("Set number of rounds to start");

max.addEventListener("change" ,function(){
	if(checkValue()){
		winnigScore=Number(this.value);
		maxD.textContent=winnigScore;
		reset();
	}
	else{
		alert("Only positive number is accepted");
	};
});

p1.addEventListener("click" ,function(){
	if(!gameOver && checkValue()){
		p1Score++;
		if(p1Score===winnigScore){
			document.querySelector("#p1").classList.add("win");
			document.querySelector("#p2").classList.add("los");
			alert("Player One is winner!!");
			gameOver=true;
		}
		document.querySelector("#p1").textContent=p1Score;
	}
});

p2.addEventListener("click" ,function(){
	if(!gameOver && checkValue()){
		p2Score++;
		if(p2Score===winnigScore){
			document.querySelector("#p2").classList.add("win");
			document.querySelector("#p1").classList.add("los");
			alert("Player Two is winner!!");
			gameOver=true;
		}
		document.querySelector("#p2").textContent=p2Score;
	}
});

res.addEventListener("click" ,function(){
	reset();
});

function reset(){
	p1Score=0;
	p2Score=0;
	document.querySelector("#p1").textContent=p1Score;
	document.querySelector("#p2").textContent=p2Score;
	document.querySelector("#p1").classList.remove("win");
	document.querySelector("#p2").classList.remove("win");
	document.querySelector("#p1").classList.remove("los");
	document.querySelector("#p2").classList.remove("los");
	gameOver=false;
};

function checkValue(){
	return (Number(max.value)>0);
}