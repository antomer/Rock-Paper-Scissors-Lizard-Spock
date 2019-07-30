var playerScore = 0, computerScore = 0, rounds=11;
var round = computerScore+playerScore;
#typeo
$(document).ready(function(){ 
    
    $('.weapon').click(function (){
        playRound(this.id);
    });
    
    $(".newGame").click(function(){
        $(".weapon").unbind("click");
        if(this.id != "newGame") {
            rounds=this.value;  
        }
        makeMove('nochoice', 'nochoice');
        playerScore = 0;
        computerScore = 0;
        $("#rounds").html(rounds);
        $("#state").html('Start Game!');
        $("#playerScore").html(playerScore);
        $("#computerScore").html(computerScore); 
        $("#round").html(round);  
        $(".weapon").bind('click', function (){
            playRound(this.id);
        });
    });
});

function playRound(playerChoice) {
        computerChoice = computerMove();
        makeMove(playerChoice,computerChoice);
        compare(playerChoice,computerChoice);
        $("#round").html(round);   
        if(round>=rounds){
            if(playerScore>computerScore) 
                { $("#state").html('You Won The Match');}
            else if(playerScore<computerScore) 
                { $("#state").html('You Lose The Match'); }
            $(".weapon").unbind("click");
        }
    }
function compare(choise1, choise2) {
    var rules = {
        'paper'    : ['rock', 'spock'],
        'rock'     : ['scissors', 'lizard'],
        'scissors' : ['paper', 'lizard'],
        'lizard'   : ['paper', 'spock'],
        'spock'    : ['scissors', 'rock']
    };
    if (choise1 == choise2) {
        $("#state").html('Draw');
    } else if (rules[choise1][0] == choise2 || rules[choise1][1] == choise2) {
        playerScore++;
        $("#state").html('You win');
        $("#playerScore").html(playerScore);
    } else {
        computerScore++;
        $("#state").html('Computer win');
        $("#computerScore").html(computerScore);
    }
}
function makeMove(playerChoice,computerChoice) {
    $("#computerChoice").attr("src", "img/"+computerChoice+".png");
    $("#playerChoice").attr("src", "img/"+playerChoice+".png");
}

function computerMove() {
    var weapon = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return weapon[Math.floor((Math.random() * 5))];
}
$("#rules").click( function() {
    $(".rules").show();
    $(".mainwrap").hide();  
});
$("#back").click( function() {
    $(".rules").hide();
    $(".mainwrap").show();  
});
