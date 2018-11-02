import {Oferta} from "./shared/oferta.model"
import { ReturnStatement } from "@angular/compiler";
export class OfertasService{

    public ofertas: Array<Oferta> = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricaoOferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricaoOferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricaoOferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]

    public GetOfertas(): Array<Oferta>
    {
        return this.ofertas;
    }

    public GetOfertasPromise(): Promise<Array<Oferta>>
    {    
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.ofertas), 3000)
            //reject({codigoErro: 404, mensagemErro: 'Servidor não encontrado'})
        })
        .then(( ofertas: Array<Oferta>) => {
            console.log("Tratando retorno 1");
            return ofertas;
        })
        .then(( ofertas: Array<Oferta>) => {
            console.log("Tratando retorno 2");
            return ofertas;
        })
        .then(( ofertas: Array<Oferta>) => {
            console.log("Tratando retorno 3");
            return new Promise( (resolve2, reject2) =>{
                setTimeout(() => resolve2(ofertas), 3000);
            });
        })
        .then(( ofertas: Array<Oferta>) => {
            console.log("Tratando retorno 3 após execução do segundo promise");
            return ofertas;
        })
    }
}