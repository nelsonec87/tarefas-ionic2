import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { FacebookPage } from '../pages/facebook/facebook';

@NgModule({
  declarations: [
    MyApp,
    TarefasPage,
    DetalhePage,
    FacebookPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TarefasPage,
    DetalhePage,
    FacebookPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
