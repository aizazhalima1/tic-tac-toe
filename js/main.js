const boxes=document.querySelectorAll('[data-box]')
const startButton=document.querySelector('[data-start]')
const statusPlay=document.querySelector('[data-status]')
startButton.disabled=false


class Game{
    constructor(){
        this.count=0
        this.currentPlayer=''
        this.currentSymbol=''
        this.p1=[]
        this.p2=[]

    }   
startGame(){ 
    
}

updateStatus(){
    if(statusPlay.innerHTML!='Player 1 wins'&& statusPlay.innerHTML!='Player 2 wins'){
        if(this.count%2==0){
        this.currentPlayer='Player 1'}
    else{
    this.currentPlayer='Player 2'
}
statusPlay.innerHTML=this.currentPlayer
this.count++
}
else{
    
} 
}
updateGame(box){
  
    let arr=['X','O']

    if(this.count%2==1 && box.innerHTML!=''){
        this.currentSymbol=arr[0]
        this.p2.push(box)
       
        }
    else if(this.count%2==0 && box.innerHTML!=''){
        this.currentSymbol=arr[1]
        this.p1.push(box) 
    }
    
    
if(boxes[Number(box)-1].innerHTML==''){
boxes[Number(box)-1].innerHTML=this.currentSymbol

}
else return
}

checkWin(pol){
    
    let winComb=[['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']]
    let p1= new Set(this.p1)
    let p2= new Set(this.p2)


    for(let i=0;i<=winComb.length-1;i++){
//
        if(new Set(winComb[i]).isSubsetOf(p2)){
            statusPlay.innerHTML=`Player 1 wins`
            document.getElementById(winComb[i][0]).classList.add('win')
            document.getElementById(winComb[i][1]).classList.add('win')
            document.getElementById(winComb[i][2]).classList.add('win')
            this.endGame()
        }
        else if(new Set(winComb[i]).isSubsetOf(p1)){
            statusPlay.innerHTML=`Player 2 wins`
            document.getElementById(winComb[i][0]).classList.add('win')
            document.getElementById(winComb[i][1]).classList.add('win')
            document.getElementById(winComb[i][2]).classList.add('win')
            this.endGame()
            
        }
        
    
    }
    this.updateStatus()}
endGame(){
   boxes.forEach((box)=>box.addEventListener('click',()=>{
    box.innerHTML=''
    
    
   }))
   this.p1=''
   this.p2=''
   
    
}

}

const game=new Game()

startButton.addEventListener('click',()=>{
   game.updateStatus()
   startButton.disabled=true
   boxes.forEach((box)=>box.addEventListener('click',()=>{
    game.updateGame(event.currentTarget.getAttribute('value'))
    game.checkWin(event.currentTarget.getAttribute('value'))
    
   
 }))
 
 })
