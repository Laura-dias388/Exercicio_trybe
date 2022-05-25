const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


function resetText(event) {
  if(this.innerText === 'Opção reiniciada'){
    event.target.innerText = 'Aqui está a primeira tecnologia que mais gostei.';
  } else {
    event.target.innerText = 'Opção reiniciada';
  }
}
  firstLi.addEventListener('dblclick', resetText);
  myWebpage.addEventListener('mouseover',changeColor);
  firstLi.addEventListener('click', techChanger);
  secondLi.addEventListener('click', techChanger);
  thirdLi.addEventListener('click', techChanger);
 
  function changeColor (event){
    event.target.style.color = 'yellow';
   
  }
   

   function techChanger(event){
       
    let resp = document.getElementsByClassName('tech');
    resp[0].classList.remove('tech');
    this.classList.add('tech');
    
  }

   
  
