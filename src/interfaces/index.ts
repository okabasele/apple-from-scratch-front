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