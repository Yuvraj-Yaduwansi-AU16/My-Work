document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('keyboard').style.display = 'none';
    document.getElementById('ans-div').style.display = 'none';
    Game.clickEvent();

})

class UI{
    static mainUI = document.querySelector('.ui');
    static newGameBtn = document.querySelector('.new-game')
    static heading(msg){
        document.getElementById('heading').innerText=msg;
    }
    
    static loadNewGame(){
        UI.newGameBtn.style.display='inline-block';
    }
    static displayCorrectAns(){
        document.getElementById('correct-ans').innerText = `Correct Answer: ${Game.answer}`;
        document.getElementById('correct-ans').style.display='block';

    }

    static loadingKeyboard(){
        document.getElementById('1-1').innerHTML = ''
        document.getElementById('2-2').innerHTML = ''
        document.getElementById('3-3').innerHTML = ''
        document.getElementById('ans-para').innerHTML = '';

        Keyboard.firstline.forEach((K)=>{
            Keyboard.createBoard(document.getElementById('1-1'),K)
        })
    
        Keyboard.secondLine.forEach((K)=>{
            Keyboard.createBoard(document.getElementById('2-2'),K)
        })
    
        Keyboard.thirdline.forEach((K)=>{
            Keyboard.createBoard(document.getElementById('3-3'),K)
        })
        document.getElementById('keyboard').style.display = 'block';
        document.getElementById('ans-div').style.display = 'block';
    }
}

class Keyboard{
    static firstline=['Q','W','E','R','T','Y','U','I','O','P']
    static secondLine=['A','S','D','F','G','H','J','K','L']
    static thirdline=['Z','X','C','V','B','N','M']
    static createBoard(span,K){
        const btn = document.createElement('button')
        btn.type = 'button';
        btn.className = 'btn btn-outline-success'
        btn.innerText= K
        span.appendChild(btn);
    }
    
    static loadAnswersTab(answer){
        const ansPara = document.getElementById('ans-para')
        for(let i=0;i<answer.length;i++){
            const span = document.createElement('span');
            span.className = 'border-3 mx-3';
            span.id = `${i}`;
            span.innerText = '__';
            ansPara.appendChild(span)
        }
    }
}

class Game{
    static words =['abruptly','absurd','abyss','affix','avenue','awkward','bagpipes','bandwagon','beekeeper','blizzard','bookworm','buffalo','buzzing','cobweb','crypt',
    'cycle','dwarves','embezzle','equip','espionage','exodus','faking','fishhook','fixable','flopping','fluffiness','funny','galaxy','gossip','rickshaw']
    static answer='';
    static inputStr=[];
    static chances = 6;
    static imgNumber =2;
    static randomWord(){
        const randomIdx = Math.floor(Math.random()*30);
        Game.answer = Game.words[randomIdx].toUpperCase();
        Game.inputStr =new Array(Game.answer.length).fill('')
        Keyboard.loadAnswersTab(Game.answer);
    }
    
    static clickEvent(){
        document.querySelector('.new-game').addEventListener('click',Game.newGameClickEvent)
    }

    static keyboardClickEvent(e){
        if(e.target.classList.contains('btn-outline-success')){
            if(Game.chances>1){
                const alphabet = e.target.innerText;
                e.target.className = 'btn btn-outline-warning';
                e.target.disabled = true;
                if(Game.answer.includes(alphabet)){
                    for(let i=0;i<Game.answer.length;i++)
                    {
                        if(Game.answer[i]=== alphabet){
                            document.getElementById(`${i}`).innerText = alphabet;
                            Game.inputStr[i] = alphabet
                            if(Game.inputStr.join('') === Game.answer) {
                                UI.heading(`You're Saved`,'text-success')
                                keyboard.removeEventListener('click',Game.keyboardClickEvent)
                                UI.loadNewGame();
                                break;
                
                            }
                        }
                    }
                    
                } else {
                    Game.chances-=1;
                    Game.imgNumber+=1;
                    UI.heading(`${Game.chances} Wrong Guesses left.`)
                    document.querySelector('.img-fluid').src = `./new_images/${Game.imgNumber}.png`
                }
            }else{
                UI.heading(`You Hanged`)
                keyboard.removeEventListener('click',Game.keyboardClickEvent)
                Game.imgNumber+=1;
                document.querySelector('.img-fluid').src = `./new_images/${Game.imgNumber}.png`
                UI.displayCorrectAns();
                UI.loadNewGame();

            }
            

            }
        e.preventDefault();
    }

    static newGameClickEvent(e){
        UI.heading('Save Before 6 Wrong Guesses')
        document.querySelector('.img-fluid').src = `./new_images/${Game.imgNumber}.png`
        Game.imgNumber = 2;
        Game.chances = 6;
        UI.newGameBtn.style.display='none';
        UI.loadingKeyboard();
        Game.randomWord();
        document.getElementById('keyboard').addEventListener('click',Game.keyboardClickEvent)
        document.getElementById('correct-ans').style.display='none';
        e.preventDefault();
    }
}