var game_display = document.getElementById('show-grid');
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

function SwapTurn(){
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
    if (checkDisplay(slot)){
        game_slot[slot] = mark
        var grid = document.getElementById(slot);
        grid.innerHTML = mark
    }


}
function win_check(){
    for(var i=0;i<7;i++){
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

            }else{

                console.log('player 2 win')
            }

        }
    }

}

function go(id){
    console.log(game_slot);
    if(checkDisplay(id) == true){
        if(player_1 == true){
            console.log('Player 1 Turn!')
            changeDisplay('X',id)

        }else{
            changeDisplay('O',id)
            console.log('Player 2 Turn!')
        }
        win_check();
        SwapTurn();
    }
    
    

}
