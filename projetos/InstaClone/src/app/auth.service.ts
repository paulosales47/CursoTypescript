import { Usuario } from "./acesso/shared/usuario.model";
import * as firebase from 'firebase'
export class Autenticacao{
    
    public CadastrarUsuario(usuario: Usuario): Promise<any>{
        
        return firebase.auth()
        .createUserWithEmailAndPassword(usuario.email,usuario.senha)
        .then((resposta: any) => {

            delete usuario.senha;

            firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
            .set(usuario)
        })
        .catch((erro: any) => console.log(erro))
    }

    public Autenticar(usuario: Usuario): Promise<any>{
         return firebase.auth()
        .signInWithEmailAndPassword(usuario.email, usuario.senha)
        .then((resposta: any) => resposta)
        .catch((erro: any) => console.log(erro));
    }
}