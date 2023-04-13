import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { Plan } from '../components/Plan'
import type { PricingPlan } from '../types/pricing'
import { getPlans } from '../lib/pricing'
import styles from '../styles/Pricing.module.css'
import { CheckoutForm } from '../components/CheckoutForm'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default function Pricing() {
  const plans: PricingPlan[] = getPlans()

  return (
    <div className={styles.container}>
      <h1>Pricing Plans</h1>
      <div className={styles.planContainer}>
        {plans.map((plan) => (
          <Plan
            key={plan.id}
            plan={plan}
          />
        ))}
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm plan={undefined} />
      </Elements>
    </div>
  )
}
