import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent{
  valor: number=0;
  valorConvertido: number=0;
  moedaOrigem: string="";
  moedaDestino: string="";

  converter(){
    if (this.moedaOrigem === "real" && this.moedaDestino === "dolar") {
      this.valorConvertido = this.valor / 5.5;
    } else if (this.moedaOrigem === "real" && this.moedaDestino === "euro") {
      this.valorConvertido = this.valor / 6.2;
    } else if (this.moedaOrigem === "dolar" && this.moedaDestino === "real") {
      this.valorConvertido = this.valor * 5.5;
    } else if (this.moedaOrigem === "euro" && this.moedaDestino === "real") {
      this.valorConvertido = this.valor * 6.2;
    } else {
      this.valorConvertido = this.valor;
    }
  }
}
