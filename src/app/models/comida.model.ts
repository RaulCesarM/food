import { IBase } from "./base.models";


export interface IComida extends IBase {
    descricao: string;
    valor: number;
}