export interface Tarefa {
    descricao: string;
    finalizada: boolean;
    prioridade: Prioridade;
    id: string;
}

export enum Prioridade {
    alto = 1,
    medio = 2,
    baixo = 3
}