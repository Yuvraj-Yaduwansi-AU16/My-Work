class UIproperties{
    constructor(){
        this.icon = 'X';
        this.clickCounter = 0;
    }
    onMouseEnter(tile){
        if(tile.classList.contains('clicked') ===false){
            if(this.icon==='X'){

                tile.style.backgroundColor = 'red';        
            }else{
                tile.style.backgroundColor = 'green';        

            }
            var element = document.createElement('h1');
            element.className = 'text-light center';
            element.innerText = this.icon;
            element.style.fontSize = '10vh';
            tile.appendChild(element);

        }
    }
    
    onmouseleave(tile){
        if(tile.classList.contains('clicked') ===false){
            tile.style.backgroundColor = 'cadetblue';        
            tile.innerText = '';

        }
    }

    onmouseClicked(tile){
        if(tile.classList.contains('clicked') ===false){
            var classes = tile.className;
            classes+=' clicked';
            tile.className = classes;
            if(this.icon ==='X'){
                this.icon = 'O';
                redHeading.style.opacity = '0.5';
                redHeading.style.fontSize = '3.0rem';

                greenHeading.style.opacity = '1.0';
                greenHeading.style.fontSize = '5.0rem';
            }else{
                this.icon ='X';
                greenHeading.style.opacity = '0.5';
                greenHeading.style.fontSize = '3.0rem';

                redHeading.style.opacity = '1.0';
                redHeading.style.fontSize = '5.0rem';


            }

            game.checkIfWon(tile.id);
            this.clickCounter+=1;
            if(this.clickCounter == 9){
                game.checkIfWon(tile.id);
                if(this.clickCounter == 9){
                    game.itsAtie();
                }

            }

        }
    }

    displayMsg(winnerIcon){
        greenHeading.style.fontSize = '3.0rem';
        redHeading.style.fontSize = '3.0rem';
        
        if(winnerIcon ==='X'){
            this.gameOver('Red Wins!')
        }if(winnerIcon ==='O'){
            this.gameOver('Green Wins!')
        }if(winnerIcon === 'T'){
            this.gameOver('Its a Tie!')
        }
    }

    gameOver(msg){
        mainDiv.style.opacity = '0.2';
        mainDiv.style.pointerEvents = 'none';
        gameOverDisplay.style.display = 'block';
        const heading = document.querySelector('.game-over-heading');
        heading.innerText = msg;


    }
}

class Game{
    
    checkIfWon(id){
        var curelement = document.getElementById(id);
        var tileNo = parseInt((id));
        var row = tileNo%10;
        var col = Math.floor(tileNo/10);
        this.rowCheck(curelement,tileNo,row,col);
        this.colCheck(curelement,tileNo,row,col);
        this.mainDiagonal(curelement,tileNo,row,col);
        this.secondDiagonal(curelement,tileNo,row,col);

    }

    rowCheck(curelement,tileNo,row,col){
        // FOr Row Check
        var rowCounter =0;
        for(let i=1;i<4;i++){
            var checkId = ""+col+i;
            var getelement = document.getElementById(checkId);
            if(getelement.firstChild && checkId!= tileNo){
                if (getelement.firstChild.innerText=== curelement.firstChild.innerText){
                    rowCounter+=1
                }
            }
        }
        this.counterCheck(rowCounter,curelement.firstChild.innerText);

    }

    colCheck(curelement,tileNo,row,col){
        // FOr Column Check
        var colCounter =0;
        for(let i=1;i<4;i++){
            var checkId = ""+i+row;
            var getelement = document.getElementById(checkId);
            if(getelement.firstChild && checkId!= tileNo){
                if (getelement.firstChild.innerText=== curelement.firstChild.innerText){
                    colCounter+=1
                }
            }
        }
        this.counterCheck(colCounter,curelement.firstChild.innerText);
    }

    mainDiagonal(curelement,tileNo,row,col){
        // For Main Diagonal
        if(tileNo == 11 || tileNo == 22 || tileNo == 33){
            var mDCounter =0;
            for(let i=1;i<4;i++){
                var checkId = ""+i+i;
                var getelement = document.getElementById(checkId);
                if(getelement.firstChild && checkId!= tileNo){
                    if (getelement.firstChild.innerText=== curelement.firstChild.innerText){
                        mDCounter+=1
                    }
                }
            }
            this.counterCheck(mDCounter,curelement.firstChild.innerText);           
        }
    }
    secondDiagonal(curelement,tileNo,row,col){
        // For Secondary Diagonal
        if(tileNo == 13 || tileNo == 22 || tileNo == 31){
            var sDCounter =0;
            for(let i=1;i<4;i++){
                var j =4-i;
                var checkId = ""+i+j;
                var getelement = document.getElementById(checkId);
                if(getelement.firstChild && checkId!= tileNo){
                    if (getelement.firstChild.innerText=== curelement.firstChild.innerText){
                        sDCounter+=1
                    }
                }
            }
            this.counterCheck(sDCounter,curelement.firstChild.innerText);           
        }       
    }

    counterCheck(counter,text){
        if (counter == 2){
            ui.clickCounter+=1;
            ui.displayMsg(text);
        }  
    }

    itsAtie(){
        ui.displayMsg('T');
    }
}

var allTiles = document.querySelectorAll('.tiles');
const ui = new UIproperties;
const game = new Game;

const mainDiv = document.querySelector('.main');
const gameOverDisplay = document.querySelector('.game-over')
// Get Red & Green Headings
const redHeading = document.querySelector('.red-heading');
const greenHeading = document.querySelector('.green-heading');

document.addEventListener('DOMContentLoaded',function(){
    gameOverDisplay.style.display='none';
    greenHeading.style.opacity = '0.5';
    redHeading.style.fontSize = '5.0rem';

})

allTiles.forEach((tile)=>{
    tile.addEventListener('mouseenter',function(){
        ui.onMouseEnter(tile);
    });
})

allTiles.forEach((tile)=>{
    tile.addEventListener('click',function(){
        ui.onmouseClicked(tile);
    });
})

allTiles.forEach((tile)=>{
    tile.addEventListener('mouseleave',function(){
        ui.onmouseleave(tile);
    });
})

