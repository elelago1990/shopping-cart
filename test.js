import { calcularTotal } from './index.js';
import { equal } from "assert";

describe(('Cálculo del total'), () => {
  it('carrito vacío', () => { equal(calcularTotal([]), 0) })
  it('carrito vacío', () => { equal(calcularTotal([ 
    {producto:"pan", precio:1 }
  ]),1) });
 
})