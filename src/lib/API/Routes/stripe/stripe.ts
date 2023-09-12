import 'client-only';
import axios from 'axios';

export const CreateStripeCheckoutSession = async (price, id, email) => {
  const res: any = await axios
    .post('/api/stripe/create-checkout-session', {
      price,
      user_id: id,
      customer_email: email
    })
    .catch(function (error) {
      console.log(error);
    });

  return res;
};
