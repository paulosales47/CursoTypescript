import * as firebase from 'firebase'

export class BD {

    public SalvarNovaPublicacao(publicacao: any):void {
        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
        .push({titulo: publicacao.titulo})
    }
}