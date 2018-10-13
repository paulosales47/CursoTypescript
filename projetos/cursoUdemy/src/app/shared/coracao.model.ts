export class Coracao{

    constructor(
        public Cheio: boolean,
        public UrlCoracaoCheio: string = '/assets/coracao_cheio.png',
        public UrlCoracaoVazio: string = '/assets/coracao_vazio.png'
    ){}

    public ExibeCoracao(): string{
        if(this.Cheio)
            return this.UrlCoracaoCheio;
        else
            return this.UrlCoracaoVazio;

    }
}