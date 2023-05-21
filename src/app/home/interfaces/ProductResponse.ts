export interface ProductResponse {
  uuid: number;
  product: Product;
  available: boolean;
  discounts: Discounts;
  info: Info;
  characteristics: Characteristic[];
}

export interface Characteristic {
  title: string;
  data: Items[];
}

export interface Items {
  item: string;
  value: string;
}


export interface Discounts {
  enabled: boolean;
  percentageDiscount: string;
}

export interface Info {
  category: string;
  description: string;
  colors: Color[];
  amount: number;
}

export enum Color {
  Azul = "AZUL",
  Blanco = "BLANCO",
  Negro = "NEGRO",
}

export interface Product {
  name: string;
  image: string;
  price: string;
}
