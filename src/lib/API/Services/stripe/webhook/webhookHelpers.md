Webhook triggers can be triggered by stripe CLI to similate webhook events. Copy and paste into terminal
ngrok setup can also be used to directly trigger events from the app.

stripe.exe trigger checkout.session.completed --add checkout_session:metadata.user_id={REPLACE WITH A SUPABASE USER ID}

stripe.exe trigger customer.subscription.updated

stripe.exe trigger invoice.paid
