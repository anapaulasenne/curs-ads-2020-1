let barranome = document.querySelector("#idnome");
let barraemail = document.querySelector("#idemail");
let btnassinar = document.querySelector("#assinar");

let arrViagens = [];
let viagens;

const insert = () => {
   
    viagens = new Viagens (barranome.value,barraemail.value);
  
    arrViagens.push(viagens);
   
   
    alert("Cadastrado com sucesso!!");
    
   

    clear();
    console.log(arrViagens);
}
    const clear = () =>{
        barranome.value = '';
        barraemail.value = '';
       
    }
    btnassinar.addEventListener('click', insert);