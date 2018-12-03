import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import { Usuario } from "./acesso/shared/usuario.model";
import * as firebase from 'firebase'

@Injectable()
export class Autenticacao{
    
    constructor(private router: Router){}

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

    public Autenticar(usuario: Usuario): any{
        
        return firebase.auth()
        .signInWithEmailAndPassword(usuario.email, usuario.senha)
        .then(() => {
            firebase.auth().currentUser.getIdToken()
            .then((token:string) => {
                localStorage.setItem('token', token);
                this.router.navigate(['/home']);
            });
        })
        .catch((erro: any) => erro);
    }

    public UsuarioAutenticado(): boolean
    {
        if(localStorage.getItem('token') !== null)
            return true;

        this.router.navigate(['/']);
        return false;
    }

    public Sair(): void{
        firebase.auth().signOut()
        .then(() => localStorage.removeItem('token'))
        
    }

}