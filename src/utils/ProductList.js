import bg1 from "../assets/productImages/BG1.jpeg";
import bg2 from "../assets/productImages/BG2.jpeg";
import flexi7 from "../assets/productImages/flexi 8.1 windows 7.jpeg";
import flexi1011 from "../assets/productImages/Flexi 8.1 windows 10 and 11.png";
import flexi105 from "../assets/productImages/Flexi10.5.1.jpeg";
import flexi12 from "../assets/productImages/Flexi 12.jpeg";
import font from "../assets/productImages/font.webp";
import Redsail from "../assets/productImages/Redsail.png";


const productList = [
  {
    id: 1,
    productName: "Flexi 8.1 for Windows 7",
    price: 350,
    discount: "40% off",
    realPrice: 490.0,
    description:
      "This Flexi 8.1 software supports only Windows 7 (32 Bit) ",
    productCode: "P1",
    image: flexi7,
    url: "flex-8.1",
  },
  {
    id: 2,

    productName: "Flexi 8.1 Windows 10/11",
    price: 1999,
    discount: "40% off",
    realPrice: 2798.6,
    description:
      "This Flexi 8.1 software is fully supported on both Windows 10 and Windows 11.",
    productCode: "P2",
    image: flexi1011,
    url: "flex-8.1-windows10-windows11",
  },
  {
    id: 3,

    productName: "Flexi 10.5.1",
    price: 850,
    discount: "40% off",
    realPrice: 1190.0,
    description:
      "Flexi 10.5.1 software is  supported  Windows 10",
    productCode: "P3",
    image: flexi105,
    url: "flex-10.5.1-windows10-windows11",
  },
  {
    id: 4,

    productName: "Flexi 12",
    price: 2999,
    discount: "40% off",
    realPrice: 4198.6,
    description:
      "Flexi 12 is the latest version and fully supported on both Windows 10 and Windows 11.",
    productCode: "P4",
    image: flexi12,
    url: "flex-12-windows10-windows11",
  },
  {
    id: 5,

    productName: "Begginer File 1",
    price: 799,
    discount: "40% off",
    realPrice: 1118.6,
    description:
      "Beginner File design by Mind of Skk & inside of this file you got lots of new sticker designs.",
    productCode: "P5",
    image: bg1,
    url: "Begginer-File-1",
  },
  {
    id: 6,

    productName: "Begginer File 2",
    price: 699,
    discount: "40% off",
    realPrice: 978.6,
    description:
      "this file is designed by Mind of Skk and this successor of the beginner file ",
    productCode: "P6",
    image: bg2,
    url: "Begginer-File-2",
  },
  // {
  //   id: 7,

  //   productName: "Font hindi/English",
  //   price: 799,
  //   discount: "40% off",
  //   realPrice: 1118.6,
  //   description:
  //     "Get the best of both worlds with our Hindi/English font package.",
  //   productCode: "P7",
  //   image: font,
  //   url: "Font",
  // },
  // {
  //   id: 8,

  //   productName: "Redsail Driver",
  //   price: 299,
  //   discount: "40% off",
  //   realPrice: 418.6,
  //   description:
  //     "The redsail driver is essential for seamless cutting plotter operations.",
  //   productCode: "P8",
  //   image: Redsail,
  //   url: "Redsail-Driver",
  // },
  // {
  //   id: 9,

  //   productName: "Usb driver for cutting plotter",
  //   price: 349,
  //   discount: "40% off",
  //   realPrice: 488.6,
  //   description:
  //     "This USB driver ensures smooth communication with your cutting plotter.",
  //   productCode: "P9",
  //   image: "",
  //   url: "Usb-Driver",
  // },
];

export default productList;

