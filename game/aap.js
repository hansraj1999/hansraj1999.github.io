let userScore=0;
let compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score");
const result_div=document.querySelector(".newres > p");
const rock_div=document.getElementById("r");
const sis_div=document.getElementById("s");
const pap_div=document.getElementById("pa");

function compchoice(){
	const choices=['Rock','Paper','Sissors'];
	var values=(Math.floor(Math.random()*3));
	return choices[values];
}
function game(userChoic){
	const compchoi=compchoice();
	console.log("comp has took"+compchoi);
	if(userChoic=="Paper" && compchoi=="Sissors"){
		console.log("Comp Win");
		lose(userChoic,compchoi);
	}
	else if(userChoic=="Sissors" && compchoi=="Paper"){
		console.log("User win");
		win(userChoic,compchoi);		
	}
	else if(userChoic=="Rock" && compchoi=="Paper"){
		console.log("Comp win");
		lose(userChoic,compchoi);

	}
	else if(userChoic=="Paper" && compchoi=="Rock"){
		console.log("User Win");
		win(userChoic,compchoi);
	}
	else if(userChoic=="Sissors" && compchoi=="Rock"){
		console.log("Comp Win");
		lose(userChoic,compchoi);
	}
	else if(userChoic=="Rock" && compchoi=="Sissors"){
		console.log("User win Win");
		win(userChoic,compchoi);
	}
	else{
		console.log("same");
		draw(userChoic,compchoi);
	}

}

function lose(userChoic,compchoi){
	compScore++;
	console.log(userScore);
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_div.innerHTML="Your choice :"+userChoic +","+" **loses** to Computer Choice :"+compchoi+"💩";
}
function win(userChoic,compchoi){
	userScore++;
	console.log(userScore);
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_div.innerHTML="Your choice :"+userChoic + ","+" **Beats** Computer Choice :"+compchoi+"🔥";

}
function draw(userChoic,compchoi){
	console.log("draww");
	userScore_span.innerHTML=userScore;
	compScore_span.innerHTML=compScore;
	result_div.innerHTML="Your choice :"+userChoic + ","+" **Draws** to Computer Choice :"+compchoi+"😑";
}



function main(){
	rock_div.addEventListener("click",function(){
		game("Rock");
	})
	sis_div.addEventListener("click",function(){
		game("Sissors");
	})

	pap_div.addEventListener("click",function(){
		game("Paper");
	})
}
main();