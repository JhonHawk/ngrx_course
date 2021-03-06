import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  contador: number;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    })
  }

  multiplicar(){
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
  }

  dividir(){
    const accion = new DividirAction(5);
    this.store.dispatch(accion);
  }

}
