import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atividade04';

  alertar(e: any) {
    console.log('Pacote Comprado')
    console.log(e)
  }
}
