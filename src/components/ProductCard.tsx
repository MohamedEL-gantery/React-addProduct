import Image from "./Image";
import Button from "../ui/Button";
import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/function";
import Circle from "./Circle";

interface IProps {
  product: IProduct;
  setProductEdit: (product: IProduct) => void;
  openEdit: () => void;
  index: number;
  setIndex: (index: number) => void;
  openConfirm: () => void;
}
const ProductCard = ({
  product,
  setProductEdit,
  openEdit,
  index,
  setIndex,
  openConfirm,
}: IProps) => {
  /* __HANDLER __*/
  const onEdit = () => {
    setProductEdit(product);
    openEdit();
    setIndex(index);
  };

  const onDelete = () => {
    setProductEdit(product);
    openConfirm();
  };

  return (
    <>
      <div className="border rounded-md flex flex-col p-2 max-w-sm mx-auto md:max-w-lg md:mx-0 shadow hover:shadow-red-950">
        <Image
          imageUrl={product.imageUrl}
          alt="photo"
          className="rounded-md mb-3  md:w-full md:h-full object-center"
        />

        <h2 className="font-bold mt-1">{product.title}</h2>
        <p className="mt-4">{textSlicer(product.description)}</p>
        <div className="flex space-x-2 my-4">
          {product.colors.map((color) => (
            <Circle color={color} key={color} />
          ))}
        </div>
        <div className=" flex items-center justify-between ">
          <span>${product.price}</span>
          <Image
            imageUrl={product.category.photo}
            alt="photo"
            className="rounded-full h-10 w-10 object-center"
          />
        </div>
        <div className="flex items-center justify-center space-x-2 mt-5 ">
          <Button className="bg-indigo-700 " onClick={onEdit}>
            Edit
          </Button>
          <Button className="bg-red-700" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
