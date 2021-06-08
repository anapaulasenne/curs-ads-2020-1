let Nome = document.querySelector("#txtNome");
let Rg = document.querySelector("#txtRg");
let Telefone = document.querySelector("#txtTelefone");
let Profissao = document.querySelector("#txtProfissao");
let Botao = document.querySelector("#btn");
let content = document.querySelector("#content");


let arrHospital = [];
let hospital;
const insert = () => {
    console.log()

    hospital = new Hospital(

        Nome.value,
        Rg.value,
        Telefone.value,
        Profissao.value

    );
    
    arrHospital.push(hospital);

    alert("Cadastro efetuado com sucesso!");
    print();
    clear();
    qtd();

    console.log(arrHospital);

}

const print = () => {

    let str = '';

    for(let i = 0; i < arrHospital.length; i++){

        str +=`
        
        <tr>
            <th scope="row">${arrHospital[i].Nome}</th>
            <td> ${arrHospital[i].Rg} </td>
            <td> ${arrHospital[i].Telefone} </td>
            <td> ${arrHospital[i].Profissao} </td>
        </tr>
        
        `;

    }

    content.innerHTML = str;

}

const clear = () => {
qtdH3.innerHTML = `<p>${arrHospital.length}</p>`;
}
    const qtd = () =>{
        

}

btn.addEventListener('click', insert);