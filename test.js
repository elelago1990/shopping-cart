import { calcularTotal, calcularPeso } from './index.js';
import { equal } from "assert";

describe(('Cálculo del total'), () => {
  it('carrito vacío', () => { equal(calcularTotal([]), 0) })
  it('pan', () => { equal(calcularTotal([ 
    {producto:"pan", precio:1 }
  ]),1) });
  
  it('pan y leche', () => { equal(calcularTotal([ 
    {producto:"pan", precio:1 },
    {producto: "leche", precio: 1}
  ]),2) });

  it('comprar huevos', () => { equal(calcularTotal([ 
    {producto:"huevo", precio:30, cantidad:12 }
    
  ]),360) });
});

describe(('Calculo del peso'),()=>{
   it('carrito vacio', ()=> {equal(calcularPeso([]),0)});
})