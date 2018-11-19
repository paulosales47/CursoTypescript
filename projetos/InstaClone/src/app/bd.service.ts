import * as firebase from 'firebase'
import {Injectable} from '@angular/core'
import {ProgressoUpload} from './progresso-upload.service'

@Injectable()
export class BD {

    constructor(private progressoUpload: ProgressoUpload){}

    public SalvarNovaPublicacao(publicacao: any):void {
        

        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
        .push({titulo: publicacao.titulo})
        .then((resposta: any) => {
            let nomeImagem = resposta.key

            firebase.storage().ref()
            .child(`imagens/${nomeImagem}`)
            .put(publicacao.imagem)
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
                 (snapshot: any)=> this.progressoUpload.estado = snapshot
                 ,(erro) => this.progressoUpload.status = `Ocorreu o seguinte erro durante a publicação: ${erro}`
                 ,() => this.progressoUpload.status = 'concluido')
        })


    }
}