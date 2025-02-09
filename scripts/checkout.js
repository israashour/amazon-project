import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage() {
  try {
    // throw 'error1';

    await loadProductsFetch();

    await new Promise((resolve, reject) => {
      // throw 'error2';
      loadCart(() => {
        // reject('error3');
        resolve();
      });
    });

  } catch(error) {
    console.log('unexpected error');
  }
  

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage()
/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });

}).then(() => {
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
})
*/
// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });


