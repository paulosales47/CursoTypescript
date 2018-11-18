import {PipeTransform, Pipe} from '@angular/core'

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{

    transform(texto: string, quantidadeCaracter: number): string {
        if(texto.length > quantidadeCaracter) {
            return texto.substr(0, quantidadeCaracter) + '...';
        }

        return texto;
    }
}