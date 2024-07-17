export interface IProduct {
  id?: string;
  title: string;
  price: string;
  description: string;
  quantity?: number;
  colors: string[];
  imageUrl: string;
  category: {
    photo: string;
    name: string;
  };
}

export interface IFormInput {
  id: string;
  name: "title" | "price" | "description" | "imageUrl";
  label: string;
  type: string;
}

export interface ICategory {
  id: string;
  name: string;
  photo: string;
}
