import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import Review from './Review';
import FlutterHooks from './FlutterHooks'

const PaymentForm = ({checkoutToken,shippingData, backStep, onCaptureCheckout, nextStep}) => {
  
  console.log(shippingData)
  let price=checkoutToken.live.subtotal.formatted;
  function replaceComma(num) {
    return num.replace(/,/g, '');
  };
  const config = {
    public_key: 'FLWPUBK_TEST-b6fec30caf684ee6845762074efb8ce3-X',
    tx_ref: Date.now(),
    amount: replaceComma(price),
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: shippingData.email,
      phonenumber: '07064586146',
      name: shippingData.firstName,
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
  const handleFlutterPayment = useFlutterwave(config);

  // if (error) {
  //   console.log('[error]', error);
  // } else {
  //   // const orderData = {
  //   //   line_items: checkoutToken.live.line_items,
  //   //   customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
  //   //   shipping: { name: 'International', street: shippingData.address, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
  //   //   fulfillment: { shipping_method: shippingData.shippingOption },
  //   //   payment: {
  //   //     gateway: 'stripe',
  //   //     stripe: {
  //   //       payment_method_id: paymentMethod.id,
  //   //     },
  //   //   },
  //   // };

  //   onCaptureCheckout();

  //   nextStep();
  // }

    return (
        <>
            <Review checkoutToken ={checkoutToken}/>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              {/* <Button type="submit" variant="contained"  color="primary">
                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
              </Button> */}
              <p ></p>
              <Button variant="contained"  color="primary"
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              //  console.log(response);
                // closePaymentModal()
                 
                if(response.status == 'successful'){
                  // console.log(response.status)
                  console.log(response);
                  nextStep();
                  onCaptureCheckout();
                }
                // console.log(response); // this will close the modal programmatically
            },
            onClose: () => { 
              console.log('closed')
              // Confirmation() }
              
            },
          });
        }}
      >
        Pay {checkoutToken.live.subtotal.formatted}
      </Button>
                
                
            </div>
        </>
    )
}

export default PaymentForm
