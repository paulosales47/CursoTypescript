import * as firebase from 'firebase'

export class BD {

    public SalvarNovaPublicacao(publicacao: any):void {

        let nomeImagem = `${Date.now()}`

        firebase.storage().ref()
        .child(`imagens/${nomeImagem}`)
        .put(publicacao.imagem)
        .on(firebase.storage.TaskEvent.STATE_CHANGED,
             (snapshot: any)=> console.log(snapshot)
            ,(erro) => console.log(erro)
            ,() => console.log('Fim do upload')
            )
        
        // firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
        // .push({titulo: publicacao.titulo})
    }
}