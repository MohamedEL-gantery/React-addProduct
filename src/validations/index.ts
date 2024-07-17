/**
 * 
 * @param productValidation product:{ title: string;
  description: string;
  imageUrl: string;
  price: string;} 
 * @returns  errors: { title: message; description: message; imageUrl: message; price: message; }
 */

export const productValidation = (product: {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageUrl);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product title must be between 10 and 80 characters";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 200
  ) {
    errors.description =
      "Product description must be between 10 and 200 characters";
  }
  if (!product.imageUrl.trim() || !validUrl) {
    errors.imageUrl = "Valid image url is required";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Valid price is required";
  }

  return errors;
};
