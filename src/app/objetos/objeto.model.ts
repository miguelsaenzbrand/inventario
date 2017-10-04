
export class Objeto {
  public descripcion: string;
  public estado: boolean;
  public fecha: string;
  public img: string;
  public marca: string;
  public modelo: string;
  public numeroserie: string;
  public nombre: string;
  public observaciones: string;
  public patrimonios: boolean;

  constructor(descripcion: string, estado: boolean, fecha: string, img: string, marca: string, modelo: string, numeroserie: string, nombre: string, observaciones: string, patrimonios: boolean) {
    this.descripcion = descripcion;
    this.estado = estado;
    this.fecha = fecha;
    this.img = img;
    this.marca = marca;
    this.modelo = modelo;
    this.nombre = nombre;
    this.numeroserie = numeroserie;
    this.observaciones = observaciones;
    this.patrimonios = patrimonios
  }
}
