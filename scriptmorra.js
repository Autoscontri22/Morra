const btnSasso=document.getElementById("sasso");
const btnCarta=document.getElementById("carta");
const btnForbici=document.getElementById("forbici");
const giocate=["Sasso", "Carta", "Forbici"];
var userScore=0;
var computerScore=0;

document.getElementById("contatore").textContent =
    "user " + userScore + " - " + computerScore + " computer";
    
    
document.getElementById("esito").textContent = "Nuova partita: fai la tua scelta :)";



btnSasso.addEventListener("click", function (){
		
	let giocata=computerPlay();
	document.getElementById("user").innerHTML="User: Sasso";
	document.getElementById("computer").innerHTML="Computer: " + giocate[giocata];
		
	if(giocata==1){
		computerScore=computerScore+1;
		document.getElementById("esito").textContent = "Pessima scelta, hai perso il round!";
			
	}
	else if(giocata==2){
		userScore=userScore+1;	
		document.getElementById("esito").textContent = "Che culo, hai vinto il round!";
			
	}
	else{
		computerScore=computerScore+1;
		userScore=userScore+1;
		document.getElementById("esito").textContent = "Pareggio!";
	}
		
		
	document.getElementById("contatore").textContent =
	"user " + userScore + " - " + computerScore + " computer";
    
	checkWinner();
});




btnCarta.addEventListener("click", function (){
	let giocata=computerPlay();
	document.getElementById("user").innerHTML="User: Carta";
	document.getElementById("computer").innerHTML="Computer: " + giocate[giocata];
		
	if(giocata==2){
		computerScore=computerScore+1;
		document.getElementById("esito").textContent = "Che figura di merda, hai perso il round!";
	}
	else if(giocata==0){
		userScore=userScore+1;	
		document.getElementById("esito").textContent = "Che culo, hai vinto il round!";
	}
	else{
		computerScore=computerScore+1;
		userScore=userScore+1;
		document.getElementById("esito").textContent = "Pareggio!";
	}
		
	document.getElementById("contatore").textContent =
	"user " + userScore + " - " + computerScore + " computer";
    
	checkWinner();
});



btnForbici.addEventListener("click", function (){
	let giocata=computerPlay();
	document.getElementById("user").innerHTML="User: Forbici";
	document.getElementById("computer").innerHTML="Computer: " + giocate[giocata];
	if(giocata==0){
		computerScore=computerScore+1;
		document.getElementById("esito").textContent = "Vergognati, hai perso il round!";
	}
	else if(giocata==1){
		userScore=userScore+1;	
		document.getElementById("esito").textContent = "Che culo, hai vinto il round!";
	}
	else{
		computerScore=computerScore+1;
		userScore=userScore+1;
		document.getElementById("esito").textContent = "Pareggio!";
	}
		
	document.getElementById("contatore").textContent =
	"user " + userScore + " - " + computerScore + " computer";
    
	checkWinner();
});



function computerPlay(){
	return [Math.floor(Math.random()*3)];
}



function checkWinner(){
	if(userScore!=5){
		if(computerScore==5){
			for(int i=0; i<100; i++;){
			alert("GRANDISSIMO CONIGLIO HAI PERSO 5 A " + userScore);
			}
			computerScore=0;
			userScore=0;
			document.getElementById("contatore").textContent =
			"user " + userScore + " - " + computerScore + " computer";
    
			document.getElementById("esito").textContent = "Nuova partita: fai la tua scelta :)";
		}
	}
	else if(computerScore==5){
		for(int i=0; i<100; i++;){
		alert("CONIGLIETTO HAI PAREGGIATO");
		}
		computerScore=0;
		userScore=0;
		document.getElementById("contatore").textContent =
		"user " + userScore + " - " + computerScore + " computer";
    
		document.getElementById("esito").textContent = "Nuova partita: fai la tua scelta :)";
	}
	else{
		for(int i=0; i<100; i++;){
		alert("PER STAVOLTA HAI VINTO 5 A " + computerScore);
		}
		computerScore=0;
		userScore=0;
		document.getElementById("contatore").textContent =
		"user " + userScore + " - " + computerScore + " computer";
    
		document.getElementById("esito").textContent = "Nuova partita: fai la tua scelta :)";
	}
}

