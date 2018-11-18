import * as firebase from 'firebase'

export class BD {

    public SalvarNovaPublicacao(publicacao: any):void {

        let nomeImagem = `${Date.now()}`

        firebase.storage().ref()
        .child(`imagens/${nomeImagem}`)
        .put(publicacao.imagem)
        
        // firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
        // .push({titulo: publicacao.titulo})
    }
}