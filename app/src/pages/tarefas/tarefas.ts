import { Component } from '@angular/core';
import { TarefaService, Tarefa } from '../../services/tarefa.service';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
  providers: [TarefaService]
})
export class TarefasPage {
  items: Observable<Tarefa[]>;

  constructor(private tarefaService: TarefaService, public alertCtrl: AlertController) {
    this.items = tarefaService.get();
  }

  itemTapped(tarefa) {
    console.log('linha')
    tarefa.checked = !tarefa.checked;
    this.tarefaService.update(tarefa.id, tarefa).subscribe();
  }

  addTarefa() {
    let prompt = this.alertCtrl.create({
      title: 'Adicionar Tarefa',
      inputs: [{ name: 'tarefa', placeholder: 'digite sua tarefa' }],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Savar',
          handler: data => {
            this.tarefaService.add({ title: data.tarefa, checked: false })
              .subscribe(() => this.items = this.tarefaService.get());
          }
        }
      ]
    });

    prompt.present();
  }

  removerTarefa(ev, tarefa: Tarefa) {
    this.tarefaService.remove(tarefa.id)
      .subscribe(() => this.items = this.tarefaService.get());
    ev.stopPropagation();
  }
}
