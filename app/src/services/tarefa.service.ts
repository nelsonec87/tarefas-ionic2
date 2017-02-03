import { Injectable } from '@angular/core';

@Injectable()
export class TarefaService {

    private itens: Tarefa[] = [
        { title: 'item 1', checked: false },
        { title: 'item 2', checked: false }
    ];

    getItens() {
        return this.itens;
    }

    addTafera(tarefa: Tarefa) {
        this.itens.push(tarefa);
    }

    removerTarefa(tarefa: Tarefa) {
        let i = this.itens.indexOf(tarefa);
        if (i > -1)
            this.itens.splice(i, 1);
    }

}

export interface Tarefa {
    title: string
    checked: boolean
}