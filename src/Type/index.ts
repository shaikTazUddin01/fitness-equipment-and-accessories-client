export type TProduct = {
  key?: string;
  _id: string;
  name: string;
  images: string;
  price: number;
  detail: string;
  rating: number;
  category: string;
  stockQuentity: number;
};

export type TCategory = {
  _id?: string;
  key?: string;
  no?: number;
  category?:string;
  name: string;
  image: string;
};

export * from "./path";
export * from "./user";
export * from "./order";
