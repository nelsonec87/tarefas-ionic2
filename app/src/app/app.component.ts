import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TarefasPage } from '../pages/tarefas/tarefas';
import { FacebookPage } from '../pages/facebook/facebook';
import { GooglePage } from '../pages/google/google';

import { CodePush } from '@ionic-native/code-push';
declare var InstallMode: any;

import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  templateUrl: 'app.html',
  providers: [CodePush, LocalNotifications]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TarefasPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, private codePush: CodePush, private localNotifications: LocalNotifications) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Minhas Tarefas', component: TarefasPage },
      { title: 'Facebook', component: FacebookPage },
      { title: 'Google', component: GooglePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      setInterval(() => {
        this.codePush.sync({ installMode: InstallMode.IMMEDIATE })
          .subscribe(status => console.log('status', status));
      }, 5000);

      this.localNotifications.schedule({
        id: 1,
        text: 'Notificação simples',
        data: { chave: 'teste' }
      });

      this.localNotifications.schedule({
        text: 'Notificação com atraso',
        at: new Date(new Date().getTime() + 10000),
      });

      this.localNotifications.on('click', notification => {
        console.log('Clicou na notificação:', notification);
      });


    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
