class CadTrab {

    constructor(nome, data, telefone, email, curriculo ) {

        this._nome = nome;
        this._data = data;
        this._telefone = telefone;
        this._email = email;
        this._curriculo = curriculo;

    
    }
     get Nome(){
         return this._nome;
    }
      get Data(){
        return this._data;
    }
     get Telefone(){
        return this._telefone; 
    }
     get Email(){
        return this._email;
    }
     get Curriculo(){
        return this._Curriculo;
    }

      set Nome(value){
          this.nome = value;
    }
      set Data(value){
        this.data = value;
    }
      set Telefone(value){
        this.telefone = value;
    }
      set Email(value){
      this.email = value;
    }

      set Curriculo(value){
      this.curriculo = value;
}
}
