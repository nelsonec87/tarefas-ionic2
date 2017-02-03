import { Component } from '@angular/core';
import { TarefaService, Tarefa } from '../../services/tarefa.service';
import { AlertController, NavParams, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
  providers: [TarefaService]
})
export class DetalhePage {
  tarefa: Tarefa;

  constructor(private navParams: NavParams, public tarefaService: TarefaService, public navCtrl: NavController) {
    this.tarefa = navParams.get('tarefa');
  }

  marcar() {
    this.tarefa.checked = !this.tarefa.checked;
    this.tarefaService.update(this.tarefa.id, this.tarefa).subscribe();
  }

  excluir() {
    this.tarefaService.remove(this.tarefa.id)
      .subscribe(() => this.navCtrl.pop());
  }
}
