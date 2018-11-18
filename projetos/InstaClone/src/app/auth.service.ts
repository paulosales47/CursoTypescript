import { Usuario } from "./acesso/shared/usuario.model";
import * as firebase from 'firebase'
export class Autenticacao{
    
    public CadastrarUsuario(usuario: Usuario){
        firebase.auth()
        .createUserWithEmailAndPassword(usuario.email,usuario.senha)
        .then((resposta: any) => {console.log(resposta)})
        .catch((erro: any) => console.log(erro))
    }
}