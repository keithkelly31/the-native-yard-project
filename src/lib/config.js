import { STRIPE_PRICE } from '$env/static/private';

// @ts-ignore
export function checkoutActivating({ origin, stripe_customer, team_id }) {
	return {
		cancel_url: `${origin}/teams/${team_id}`,
		customer: stripe_customer,
		line_items: [
			{
				price: STRIPE_PRICE,
				quantity: 1
			}
		],
		mode: 'subscription',
		subscription_data: {
			trial_period_days: 7,
			trial_settings: {
				end_behavior: {
					missing_payment_method: 'pause'
				}
			}
		},
		success_url: `${origin}/teams/activate/${team_id}`
	};
}
