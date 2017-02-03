import { Component } from '@angular/core';
import { TarefaService, Tarefa } from '../../services/tarefa.service';
import { NavParams, NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';


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

  tirarFoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 150,
      targetHeight: 150
    }).then((imageData) => {
      this.tarefa.foto = "data:image/jpeg;base64," + imageData;
      this.tarefaService.update(this.tarefa.id, this.tarefa).subscribe();
    }, (err) => {
      console.log(err);
    });
  }
}
