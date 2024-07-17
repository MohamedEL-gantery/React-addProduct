import { ICategory, IFormInput, IProduct } from "../interfaces";

export const product: IProduct[] = [
  {
    id: "65f3f6566af33771412366ed",
    title: "CrochetShirt",
    price: "150",
    description: "StylishShirtttttttttttttt",
    quantity: 4,
    colors: ["#9F4EAE"],
    imageUrl:
      "https://res.cloudinary.com/dpagwp2y8/image/upload/v1710487126/samples/2024-03-15T07.18.46.225Z07545446800-e1_gb5rd3.jpg",
    category: {
      photo:
        "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496691/jo93e66yvhdzvfby1unx.png",
      name: "Jacket",
    },
  },
  {
    id: "65f3e5f3b3d2ab82fd68cfe8",
    title: "asdsadsad",
    price: "150",
    description: "saddddddddddddddddddddddddddddddddd",
    quantity: 1,
    colors: ["#4F4EAa"],
    imageUrl:
      "https://res.cloudinary.com/dpagwp2y8/image/upload/v1710482930/samples/2024-03-15T06.08.48.979Zhomepod-select-midnight-202210_e6uds8.png",
    category: {
      photo:
        "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496665/ijut6lhhmx1ew90b6atn.png",
      name: "Shirt",
    },
  },
  {
    id: "65e0d11c288bfcfaeb8611d4",
    title: "logitech",
    price: "200",
    description: "sadjshajkdkjsahdjksahdksahdlsadsa",
    quantity: 5,
    colors: ["#0F4EAE"],
    imageUrl:
      "https://res.cloudinary.com/dpagwp2y8/image/upload/v1709232411/samples/2024-02-29T18.46.51.297Zpro-wireless-headset-gallery-1_kywqkr.webp",
    category: {
      photo:
        "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496632/b8kj2tmfsir0eirin2jc.png",
      name: "Stockings",
    },
  },
  {
    id: "65e0d0ca288bfcfaeb8611cb",
    title: "airpodsskull",
    price: "150",
    description: "dsahjldsjkahdjkashdkashkjdasas",
    quantity: 10,
    colors: ["#0b1EAE"],
    imageUrl:
      "https://res.cloudinary.com/dpagwp2y8/image/upload/v1709232330/samples/2024-02-29T18.45.29.403Zpngwing.com_nwbf3z.png",
    category: {
      photo:
        "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496600/u47hwhsh6hdjwfrykteo.png",
      name: "Short",
    },
  },
  {
    id: "65dc7b5bd6d2c06f2c2765b5",
    title: "AppleBeats",
    price: "150",
    description: "asdjlkldsalsdajldsjaljdsa",
    quantity: 12,
    colors: ["#9F4EAE"],
    imageUrl:
      "https://res.cloudinary.com/dpagwp2y8/image/upload/v1709125299/samples/2024-02-28T13.01.38.293ZMQTR3_yqpqfj.png",
    category: {
      photo:
        "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496554/ihqbqak1tkmquhqtnbss.png",
      name: "Shoes",
    },
  },
  {
    id: "65d901478da553f125fa0a5b",
    title: "earphones",
    price: "120",
    description: "sdasadsadsadsa",
    quantity: 12,
    colors: ["#9F4EAE"],
    imageUrl:
      "https://res.cloudinary.com/dpagwp2y8/image/upload/v1708720455/samples/2024-02-23T20.34.14.687Zpngwing.com_vbyrdj.png",
    category: {
      photo:
        "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496506/virs9xdvkppi66de9pzk.png",
      name: "Blouse",
    },
  },
];

export const formInput: IFormInput[] = [
  {
    id: "title",
    label: "Product Title",
    name: "title",
    type: "text",
  },
  {
    id: "description",
    label: "Product Description",
    name: "description",
    type: "text",
  },
  {
    id: "image url",
    label: "Product Image URL",
    name: "imageUrl",
    type: "text",
  },
  {
    id: "price",
    label: "Product Price",
    name: "price",
    type: "text",
  },
];

export const arrayOfColor: string[] = [
  "#9F4EAE",
  "#8f469c",
  "#7f3e8b",
  "#d8b8de",
  "#e2c9e6",
  "#f5edf6",
  "#ffffff",
  "#6495ED",
  "#e0e9fb",
  "#4F4EAa",
  "#0F4EAE",
  "#0b1EAE",
];

export const productCategory: ICategory[] = [
  {
    id: "64a46a33baef85004ac7656b",
    name: "Blouse",
    photo:
      "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496691/jo93e66yvhdzvfby1unx.png",
  },
  {
    id: "64a46a19baef85004ac76568",
    name: "Shoes",
    photo:
      "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496665/ijut6lhhmx1ew90b6atn.png",
  },
  {
    id: "64a469f9baef85004ac76565",
    name: "Short",
    photo:
      "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496632/b8kj2tmfsir0eirin2jc.png",
  },
  {
    id: "64a469d8baef85004ac76562",
    name: "Stockings",
    photo:
      "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496600/u47hwhsh6hdjwfrykteo.png",
  },
  {
    id: "64a469aabaef85004ac7655f",
    name: "Jacket",
    photo:
      "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496554/ihqbqak1tkmquhqtnbss.png",
  },
  {
    id: "64a4697abaef85004ac7655c",
    name: "Shirt",
    photo:
      "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496506/virs9xdvkppi66de9pzk.png",
  },
  {
    id: "64a46860baef85004ac76559",
    name: "Glass",
    photo:
      "https://res.cloudinary.com/df4jdldmb/image/upload/v1688496224/dnynosmlpthzselun0yt.png",
  },
  {
    id: "64a465d17f2075004aceca7b",
    name: "Pants",
    photo:
      "https://res.cloudinary.com/df4jdldmb/image/upload/v1688495569/etojbndvyxqsqmqblfyb.png",
  },
];
