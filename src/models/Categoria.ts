export default interface Produto {
    id: number;
    nome: string;
    produto?: Produto[] | null;
}