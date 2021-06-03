var game_display = document.getElementById('show-grid');
var game_slot = [
    '','','',//
    '','','',//
    '','','' //

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
        SwapTurn();
    }
    
    

}
