export interface Item {
  id: number
  name: string
  type: string
  url: string
  image:string
  price: number
}

export interface CartItem extends Item {
  quantity: number
}

export interface StripeSession {
  id: string;
  url: string;
}

export interface Order {
  id: string;
  total: number;
  date: string;
  items: CartItem[];
}