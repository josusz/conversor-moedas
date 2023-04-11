import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent{
  valor: number=0;
  valorCambio: number=0;
  valorConvertido: number=0;
  moedaOrigem: string="real";
  moedaDestino: string="dolar";

  converter(){
    if (this.moedaOrigem === "real" && this.moedaDestino === "dolar") {
      this.valorConvertido = this.valor / this.valorCambio;
    } else if (this.moedaOrigem === "real" && this.moedaDestino === "euro") {
      this.valorConvertido = this.valor / this.valorCambio;
    } else if (this.moedaOrigem === "dolar" && this.moedaDestino === "real") {
      this.valorConvertido = this.valor * this.valorCambio;
    } else if (this.moedaOrigem === "euro" && this.moedaDestino === "real") {
      this.valorConvertido = this.valor * this.valorCambio;
    } else {
      this.valorConvertido = this.valor;
    }
  }
}
