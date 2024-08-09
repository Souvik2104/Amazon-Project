import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backened-practise.js';

async function loadPage() { //async makes a func return a promise
  

  await loadProductsFetch(); //await only inside async fnc

  await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    }); 
  });

  renderOrderSummary();
  renderPaymentSummary(); 
}
loadPage();
/*
Promise.all([  //load 2 things at a time
 loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    }); 
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    }); 
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  }); 
});
*/
