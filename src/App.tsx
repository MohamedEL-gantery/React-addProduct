import { ChangeEvent, FormEvent, useState, useCallback } from "react";
import ProductCard from "./components/ProductCard";
import { product, formInput, arrayOfColor, productCategory } from "./data";
import Modal from "./components/ui/Model";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validations";
import Message from "./components/Message";
import Circle from "./components/Circle";
import { v4 as uuidv4 } from "uuid";
import Select from "./components/ui/Select";
import toast, { Toaster } from "react-hot-toast";

const defaultProductObj = {
  title: "",
  description: "",
  colors: [],
  imageUrl: "",
  price: "",
  category: {
    name: "",
    photo: "",
  },
};

const defaultErrorObj = {
  title: "",
  description: "",
  imageUrl: "",
  price: "",
};

function App() {
  /* __ STATE __*/
  const [formData, setFormData] = useState<IProduct>(defaultProductObj);
  const [products, setProducts] = useState<IProduct[]>(product);
  const [productEdit, setProductEdit] = useState<IProduct>(defaultProductObj);
  const [index, setIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [msg, setMsg] = useState(defaultErrorObj);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(productCategory[0]);

  /* __ ADD HANDLER __*/
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setMsg((prev) => ({ ...prev, [name]: "" }));
  }, []);

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    const { title, description, imageUrl, price } = formData;
    event.preventDefault();
    const errors = productValidation({
      title,
      description,
      imageUrl,
      price,
    });

    const hasErrorMsg =
      Object.values(errors).some((val) => val === "") &&
      Object.values(errors).every((val) => val === "");

    if (!hasErrorMsg) {
      setMsg(errors);
      return;
    }

    setProducts((prev) => [
      {
        ...formData,
        colors: tempColor,
        id: uuidv4(),
        category: selectedCategory,
      },
      ...prev,
    ]);

    setFormData(defaultProductObj);
    setTempColor([]);
    close();
    toast("Product Add Successfully", {
      style: {
        background: "black",
        color: "white",
        width: "100%",
      },
    });
  }

  function onCloseHandler() {
    setFormData(defaultProductObj);
    close();
  }

  /* __EDIT HANDLER __*/

  const openEdit = useCallback(() => setIsOpenEdit(true), []);
  const closeEdit = () => setIsOpenEdit(false);

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductEdit({
      ...productEdit,
      [name]: value,
    });
    setMsg({
      ...msg,
      [name]: "",
    });
  };

  function onSubmitEditHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { title, description, imageUrl, price } = productEdit;
    const errors = productValidation({
      title,
      description,
      imageUrl,
      price,
    });

    const hasErrorMsg =
      Object.values(errors).some((val) => val === "") &&
      Object.values(errors).every((val) => val === "");

    if (!hasErrorMsg) {
      setMsg(errors);
      return;
    }

    const updateProduct = [...products];

    updateProduct[index] = {
      ...productEdit,
      colors: tempColor.concat(productEdit.colors),
    };
    setProducts(updateProduct);
    setProductEdit(defaultProductObj);
    setTempColor([]);
    closeEdit();
    toast("Product Updated Successfully", {
      style: {
        background: "black",
        color: "white",
        width: "100%",
      },
    });
  }

  function onCloseEditHandler() {
    setProductEdit(defaultProductObj);
    setMsg(defaultErrorObj);
    closeEdit();
  }

  /* __DELETE HANDLER */
  const openConfirmModel = useCallback(() => setOpenConfirm(true), []);
  const closeConfirmModel = () => setOpenConfirm(false);

  const onDelete = () => {
    const filterProduct = products.filter(
      (product) => product.id !== productEdit.id
    );

    setProducts(filterProduct);
    closeConfirmModel();
    toast("Product Deleted", {
      style: {
        background: "black",
        color: "white",
        width: "100%",
      },
    });
  };

  /* __  RENDER __*/
  const RenderProducts = products.map((product) => (
    <ProductCard
      product={product}
      key={product.id}
      setProductEdit={setProductEdit}
      openEdit={openEdit}
      index={index}
      setIndex={setIndex}
      openConfirm={openConfirmModel}
    />
  ));

  const InputForm = formInput.map((input) => (
    <div className="flex flex-col " key={input.id}>
      <label
        htmlFor={input.id}
        className="font-medium text-gray-700 text-sm md-[1px]"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={formData[input.name]}
        onChange={onChangeHandler}
      />
      <Message msg={msg[input.name]} />
    </div>
  ));
  const renderColor = arrayOfColor.map((color) => (
    <Circle
      color={color}
      key={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((val) => val !== color));
          return;
        }

        if (productEdit.colors.includes(color)) {
          setTempColor((prev) => prev.filter((val) => val !== color));
          return;
        }

        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductColor = tempColor.map((val) => (
    <span
      key={val}
      style={{ backgroundColor: val }}
      className="p-1 mr-1 text-xs rounded-md text-white"
    >
      {val}
    </span>
  ));

  /* __EDIT RENDER __*/
  const editInputForm = formInput.map((input) => (
    <div className="flex flex-col " key={input.id}>
      <label
        htmlFor={input.id}
        className="font-medium text-gray-700 text-sm md-[1px]"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={productEdit[input.name]}
        onChange={onChangeEditHandler}
      />
      <Message msg={msg[input.name]} />
    </div>
  ));

  const renderEditProductColor = tempColor
    .concat(productEdit.colors)
    .map((val) => (
      <span
        key={val}
        style={{ backgroundColor: val }}
        className="p-1 mr-1 text-xs rounded-md text-white"
      >
        {val}
      </span>
    ));

  return (
    <>
      <Button
        className="bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium flex justify-center"
        onClick={open}
        width={"w-fit"}
      >
        Add Product
      </Button>
      <main className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl2:grid-cols-5 gap-2 md:gap-4  p-2 rounded-md m-14">
          {RenderProducts}
        </div>
        {/* Add Product Modal */}
        <Modal isOpen={isOpen} close={close} title="Add Product">
          <form onSubmit={onSubmitHandler} className="space-y-3">
            {InputForm}
            <Select
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
            <div className="flex flex-wrap items-center space-x-1">
              {renderColor}
            </div>
            <div className="flex flex-wrap items-center space-x-1">
              {renderProductColor}
            </div>

            <div className="flex items-center space-x-3">
              <Button className="bg-indigo-700 hover:bg-indigo-800">
                Submit
              </Button>
              <Button
                className="bg-red-700 hover:bg-red-800"
                onClick={onCloseHandler}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>

        {/* Edit Product Modal */}
        <Modal isOpen={isOpenEdit} close={closeEdit} title="Edit Product">
          <form onSubmit={onSubmitEditHandler} className="space-y-3">
            <div className="flex flex-col " key={productEdit.id}>
              {editInputForm}
            </div>
            <Select
              selected={productEdit.category}
              setSelected={(val) =>
                setProductEdit({ ...productEdit, category: val })
              }
            />
            <div className="flex flex-wrap items-center space-x-1">
              {renderColor}
            </div>
            <div className="flex flex-wrap items-center space-x-1">
              {renderEditProductColor}
            </div>

            <div className="flex items-center space-x-3">
              <Button className="bg-indigo-700 hover:bg-indigo-800">
                Submit
              </Button>
              <Button
                className="bg-red-700 hover:bg-red-800"
                onClick={onCloseEditHandler}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>

        {/* Delete Product Modal */}
        <Modal
          isOpen={openConfirm}
          close={closeConfirmModel}
          title="Are you sure you want to delete this Product from your Store?"
          description="Deleting this product will delete it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action."
        >
          <div className="flex items-center space-x-3">
            <Button
              className="bg-indigo-700 hover:bg-indigo-800"
              onClick={onDelete}
            >
              Yes, delete
            </Button>
            <Button
              className="bg-red-700 hover:bg-red-800"
              onClick={closeConfirmModel}
            >
              Cancel
            </Button>
          </div>
        </Modal>
      </main>
      <Toaster />
    </>
  );
}

export default App;
