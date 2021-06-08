class Viagens {

constructor(nome, email ) {

    this._nome = nome;
    this._email = email;

}
 get Nome(){
     return this._nome;
 }
  get Email(){
    return this._email;
 }
  set Nome(value){
      this.nome = value;
  }  
  set Email(value){
    this.email = value;
}  

}