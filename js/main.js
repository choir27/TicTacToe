const symbol ={
turn : 'O',
}
    
document.querySelector('p').innerText = `X goes first!`
const Grid = {
    box1: '',
    box2: '',
    box3: '',
    box4: '',
    box5: '',
    box6: '',
    box7: '',
    box8: '',
    box9: '',
}

//1 2 3
//4 5 6
//7 8 9

const checkWin= {
    oScore:0,
    xScore:0,
    whenOWins : function(){
        localStorage.clear();
        document.querySelector('#results').innerText = 'O Wins!'
        document.querySelector('#oScore').innerText = this.oScore +=1
        document.querySelector('article').classList.add('hidden')
        document.querySelector('#replay').classList.remove('hidden')
        localStorage.setItem('oScore',checkWin.oScore)
        localStorage.setItem('xScore',checkWin.xScore)
    },
    whenXWins : function(){
        localStorage.clear();
        document.querySelector('#results').innerText = 'X Wins!'
        document.querySelector('#xScore').innerText = this.xScore +=1
        document.querySelector('article').classList.add('hidden')
        document.querySelector('#replay').classList.remove('hidden')
        localStorage.setItem('oScore',checkWin.oScore)
        localStorage.setItem('xScore',checkWin.xScore)
    },

    CheckForWinConditions : function(){

        if(Grid.box1 === 'O' && Grid.box2 === 'O' && Grid.box3 === 'O'){
            this.whenOWins()
    }
        else if(Grid.box4 === 'O' && Grid.box5 === 'O' && Grid.box6 === 'O'){
            this.whenOWins()

    }
        else if(Grid.box7 === 'O' && Grid.box8 === 'O' && Grid.box9 === 'O'){
            this.whenOWins()

    }
        else if(Grid.box1 === 'X' && Grid.box2 === 'X' && Grid.box3 === 'X'){
            this.whenXWins()
        }
        else if(Grid.box4 === 'X' && Grid.box5 === 'X' && Grid.box6 === 'X'){
            this.whenXWins()
        }
        else if(Grid.box7 === 'X' && Grid.box8 === 'X' && Grid.box9 === 'X'){
            this.whenXWins()  
        }
        else if(Grid.box1 === 'O' && Grid.box4 === 'O' && Grid.box7 === 'O'){
           this.whenOWins()
        }
        else if(Grid.box2 === 'O' && Grid.box5 === 'O' && Grid.box8 === 'O'){
           this.whenOWins()
        }
        else if(Grid.box3 === 'O' && Grid.box6 === 'O' && Grid.box9 === 'O'){
            this.whenOWins()
        }
        else if(Grid.box1 === 'X' && Grid.box4 === 'X' && Grid.box7 === 'X'){
            this.whenXWins()
        }
        else if(Grid.box2 === 'X' && Grid.box5 === 'X' && Grid.box8 === 'X'){
            this.whenXWins()
        }
        else if(Grid.box3 === 'X' && Grid.box6 === 'X' && Grid.box9 === 'X'){
            this.whenXWins()
        }
        else if(Grid.box1 === 'O' && Grid.box5 === 'O' && Grid.box9 === 'O'){
            this.whenOWins()
        }  
        else if(Grid.box1 === 'X' && Grid.box5 === 'X' && Grid.box9 === 'X'){
            this.whenXWins()
        }
        else if(Grid.box3 === 'O' && Grid.box5 === 'O' && Grid.box7 === 'O'){
            this.whenOWins()
        }
        else if(Grid.box3 === 'X' && Grid.box5 === 'X' && Grid.box7 === 'X'){
            this.whenXWins()
        }
        else if(Grid.box1 !== '' && Grid.box2 !== '' && Grid.box3 !== '' && Grid.box4 !== '' && Grid.box5 !== '' && Grid.box6 !== '' && Grid.box7 !== '' && Grid.box8 !== '' && Grid.box9 !== ''){
            this.whenOWins()
            document.querySelector('#results').innerText = ('It is a Tie!')
        }

}
}


class PlayTicTacToe{
    constructor(id){
        this.id = id
    }
    getDOMValue(){
        document.querySelector(`#box${this.id}`).addEventListener('click',this.startGame)
        };
    startGame(){
        if(symbol.turn === 'X'){
            symbol.turn = 'O'
            document.querySelector('p').innerText = 'X goes first'
        }else{
            symbol.turn = 'X'
            document.querySelector('p').innerText = 'O goes first'
        }
        document.querySelector(`#${this.id}`).innerText = symbol.turn
        Grid[`${this.id}`] = symbol.turn
        localStorage.setItem(`${this.id}`,Grid[`${this.id}`])
        checkWin.CheckForWinConditions()
    }
}


function Boxes(){

   let box1 = new PlayTicTacToe('1');
   let box2 = new PlayTicTacToe('2');
   let box3 = new PlayTicTacToe('3');
   let box4 = new PlayTicTacToe('4');
   let box5 = new PlayTicTacToe('5');
   let box6 = new PlayTicTacToe('6');
   let box7 = new PlayTicTacToe('7');
   let box8 = new PlayTicTacToe('8');
   let box9 = new PlayTicTacToe('9');

   box1.getDOMValue()
   box2.getDOMValue()
   box3.getDOMValue()
   box4.getDOMValue()
   box5.getDOMValue()
   box6.getDOMValue()
   box7.getDOMValue()
   box8.getDOMValue()
   box9.getDOMValue()

}

let valuesInBoxes = new Boxes()

const replayTheGame ={
 replayGame: function(){
     document.querySelector('#replay').addEventListener('click',this.resetBoard)
 },
 resetBoard: function(){
    for(let i =1;i<10;i++){
        document.querySelector(`#box${i}`).innerText = ''
        document.querySelector('#results').innerText = 'Results'
        Grid[`box${i}`] = ''
    }
     document.querySelector('#replay').classList.add('hidden')
     document.querySelector('article').classList.remove('hidden')
     valuesInBoxes
 }
}

replayTheGame.replayGame()


document.querySelector('#oScore').innerText= Number(localStorage.getItem('oScore'))
document.querySelector('#xScore').innerText= Number(localStorage.getItem('xScore'))


let box1 = localStorage.getItem('box1')
let box2 = localStorage.getItem('box2')
let box3 = localStorage.getItem('box3')
let box4 = localStorage.getItem('box4')
let box5 = localStorage.getItem('box5')
let box6 = localStorage.getItem('box6')
let box7 = localStorage.getItem('box7')
let box8 = localStorage.getItem('box8')
let box9 = localStorage.getItem('box9')
if(box1 !== null ){
document.querySelector('#box1').innerText = box1
}
if(box2 !== null ){
document.querySelector('#box2').innerText = box2
}
if(box2 !== null ){
document.querySelector('#box2').innerText = box2
}
if(box3 !== null ){
document.querySelector('#box3').innerText = box3
}
if(box4 !== null ){
document.querySelector('#box4').innerText = box4
}
if(box5 !== null ){
document.querySelector('#box5').innerText = box5
}
if(box6 !== null ){
document.querySelector('#box6').innerText = box6
}
if(box7 !== null ){
document.querySelector('#box7').innerText = box7
}
if(box8 !== null ){
document.querySelector('#box8').innerText = box8
}
if(box9 !== null ){
document.querySelector('#box9').innerText = box9
}

document.querySelector('#clear').addEventListener('click',clearScreen)

function clearScreen(){
    localStorage.clear();
    document.querySelector('#xScore').innerText = 0
    document.querySelector('#oScore').innerText = 0

    for(let i = 1;i<10;i++){
        document.querySelector(`#box${i}`).innerText = ''
    }

}