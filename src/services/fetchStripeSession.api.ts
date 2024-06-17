import { CartItem, StripeSession } from "@/interfaces";

export const fetchStripeSession = async (products: CartItem[]): Promise<StripeSession> => {
  try { 
    console.log({products})
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/checkout-session`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({products}),
    });

    const data = await res.json();
    console.log({data})
      if (!data.success){
          throw new Error(data.error)
      }

    return data.session as StripeSession;
  
  }
    catch (error) {
        throw error;
    }
}