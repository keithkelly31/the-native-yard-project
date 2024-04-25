// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			details?: any;
			message: string;
			redirect?: string;
		}
		interface Locals {
			// mail: any;
			// supabase: SupabaseClient;
			// supabase_admin: SupabaseClient;
			// stripe: Stripe;
			// getSession(): Promise<Session | null>;
		}
		interface PageData {
			// session: Session | null;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
