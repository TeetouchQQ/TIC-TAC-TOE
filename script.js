var game_status = document.getElementById('game_status');
game_status.innerHTML = 'Player 1 Turn X ';
var game_slot = [
    '','','',//
    '','','',//
    '','','' //

]
winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]
player_1 = true;
player_2 = false;
game_live = true;
var player1_score = 0;
var player2_score = 0;

turn = 0;
function SwapTurn(){
    turn += 1;
    if(player_1 == false){
        player_1 = true;
        player_2 = false;
    }else{
        player_1 = false;
        player_2 = true;
    }
    console.log('swap')
    
}

function checkDisplay(slot){
    if (game_slot[slot] == ''){
        return true;
    }else{
        return false;
    }
    
}

function changeDisplay(mark,slot){
    if (checkDisplay(slot) == true){
        game_slot[slot] = mark
        var grid = document.getElementById(slot);
        grid.innerHTML = mark
    }


}
function reset_game(){
    for(var i=0;i<9;i++){
        var grid = document.getElementById(i);
        grid.innerHTML = '';        

    }
    game_slot = [
        '','','',//
        '','','',//
        '','','' //
    ]
    turn = 0;
    game_live = true;
    game_status.innerHTML = 'Player 1 Turn X ';
    
}
function win_check(){
    for(var i=0;i<8;i++){
        var a = winCondition[i][0];
        var b = winCondition[i][1];
        var c = winCondition[i][2];
        console.log(game_slot[a])
        console.log(game_slot[b])
        console.log(game_slot[c])
        console.log('==============================')
        if(game_slot[a] == '' || game_slot[b] == '' || game_slot[c] == ''){
            continue 
        }
        if(game_slot[a] === game_slot[b] && game_slot[a] === game_slot[c]){
            if(player_1 == true){
                console.log('player 1 win')
                game_status.innerHTML = 'Player 1 win ';
                player1_score += 1
                game_live = false;
      
            }else {

                console.log('player 2 win')
                game_status.innerHTML = 'Player 2 win ';
                player2_score += 1
                game_live = false;
      
            }

        }
    }
    player1 = document.getElementById('player1_score');
    player1.innerHTML = player1_score;
    player2 = document.getElementById('player2_score');
    player2.innerHTML = player2_score;



}

function go(id){
    console.log(game_slot);
    if(game_live == true){
        if(checkDisplay(id) == true){
            if(player_1 == true){
                console.log('Player 1 Turn!')
                game_status.innerHTML = 'Player 1 Turn O ';
                changeDisplay('X',id)

            }else{
                changeDisplay('O',id)
                console.log('Player 2 Turn!')
                game_status.innerHTML = 'Player 2 Turn X';
            }
            
            SwapTurn();
            
            if(turn > 8){
                console.log('DRAW')
                game_status.innerHTML = 'DRAW';
                game_live = false;
        
            }
        win_check();
        }
           
    }
    
}
