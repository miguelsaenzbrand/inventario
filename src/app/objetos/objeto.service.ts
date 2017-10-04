import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

import { Objeto } from "./objeto.model";

@Injectable()
export class ObjetoService {
  objetoChanged = new Subject<Objeto[]>();

  private objetos: Objeto[] = [
  ];

  constructor() { }
  
  setObjetos(objetos: Objeto[]) {
    this.objetos = objetos;
    this.objetoChanged.next(this.objetos.slice());
  }

  getObjetos() {
    return this.objetos.slice();
  }

  getObjeto(index: number) {
    return this.objetos[index];
  }

  addObjeto(objeto: Objeto) {
    this.objetos.push(objeto);
    this.objetoChanged.next(this.objetos.slice());
  }

  updateObjeto(index: number, newObjeto: Objeto) {
    this.objetos[index] = newObjeto;
    this.objetoChanged.next(this.objetos.slice());
  }

  deleteObjeto(index: number) {
    this.objetos.splice(index, 1);
    this.objetoChanged.next(this.objetos.slice());
  }

}
