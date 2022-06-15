import {Endereco} from "./endereco";

export interface Cliente{
    id?: string
    nome: string
    cpf: string
    telefone: string
    email: string
    profissao: string
    renda: string
    status:string
    endereco: Endereco

}
