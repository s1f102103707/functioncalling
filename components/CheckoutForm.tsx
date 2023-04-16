/*
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { useState } from 'react'
import type { PricingPlan } from '../Types/pricing'
import styles from '../styles/Pricing.module.css'

type Props = {
  plan: PricingPlan
}

export function CheckoutForm({ plan }: Props) {
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has.
      return
    }

    setLoading(true)

    const cardElement = elements.getElement(CardElement)

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })

      if (error) {
        console.log('[error]', error)
      } else {
        console.log('[paymentMethod]', paymentMethod)
        // TODO: Payment is successful, complete checkout flow.
      }
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.cardElement}>
        <CardElement />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
      >
        {loading ? 'Processing...' : `Pay ${plan.price}`}
      </button>
    </form>
  )
}
*/
