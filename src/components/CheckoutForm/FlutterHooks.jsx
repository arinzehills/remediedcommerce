import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { Button } from '@material-ui/core';
export default function App({formatted,shippingData, confirmation}) {
    let price=formatted
    function replaceComma(num) {
        return num.replace(/,/g, '');
      };
      console.log(shippingData)
  const config = {
    public_key: 'FLWPUBK_TEST-b6fec30caf684ee6845762074efb8ce3-X',
    tx_ref: Date.now(),
    amount: replaceComma(price),
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
  const Confirmation =() => (
    <div>
        Confirmation
    </div>
)
  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <Button variant="contained"  color="primary"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              //  console.log(response);
                // closePaymentModal()
                 
                if(response.status == 'successful'){
                  console.log(response.status)
                  console.log(response.amount)
                  return confirmation
                }
                // console.log(response); // this will close the modal programmatically
            },
            onClose: () => { 
              console.log('closed')
              Confirmation() },
          });
        }}
      >
        Pay {formatted}
      </Button>
    </div>
  );
}