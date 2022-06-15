import {Select} from "./select";

export interface Dividas{
    id?:string
    valor: any
    dataAbertura: any
    dataQuitacao?: any
    descricao: string
    statusDivida:string
    cliente:Select


}
