import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  emitirEvento(): void {
    this.btnClickEvent.emit('Comprado')
  }

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open('Já está querendo saber demais ', 'sair');
  }

  @Input()
  titulo: string = ''

  @Input()
  sifrao: string = '$'

  @Input()
  subtitulo: string = 'valor'

  @Input()
  conteudo1: string = '1'
  
  @Input()
  conteudo2: string = '2'
  
  @Input()
  conteudo3: string = '3'

  @Input()
  background: string = ''

  @Input()
  cordaletra: string = ''

  @Input()
  altura: string = ''


  
}