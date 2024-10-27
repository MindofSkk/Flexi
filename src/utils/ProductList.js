import bg1 from "../assets/productImages/BG1.jpeg";
import bg2 from "../assets/productImages/BG2.jpeg";
import flexi7 from "../assets/productImages/flexi 8.1 windows 7.jpeg";
import flexi1011 from "../assets/productImages/Flexi 8.1 windows 10 and 11.png";
import flexi105 from "../assets/productImages/Flexi10.5.1.jpeg";
import flexi12 from "../assets/productImages/Flexi 12.jpeg";
import font from "../assets/productImages/font.webp";


const productList = [
  {
    id: 1,
    productName: "Flexi 8.1 for Windows 7",
    price: 350,
    discount: "40% off",
    realPrice: 490.0,
    description:
      "Flexi 8.1 for Windows 7 offers a powerful solution for all your design needs.",
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
      "Designed for Windows 10/11, Flexi 8.1 enhances your creative capabilities.",
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
      "Flexi 10.5.1 delivers advanced tools for professional-level designs.",
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
      "Flexi 12 is the latest version, packed with features for cutting-edge design.",
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
      "bg-1 offers stunning backgrounds for your projects, easy to use.",
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
      "bg-2 provides a wide variety of background options to elevate your designs.",
    productCode: "P6",
    image: bg2,
    url: "Begginer-File-2",
  },
  {
    id: 7,

    productName: "Font hindi/English",
    price: 799,
    discount: "40% off",
    realPrice: 1118.6,
    description:
      "Get the best of both worlds with our Hindi/English font package.",
    productCode: "P7",
    image: font,
    url: "Font",
  },
  {
    id: 8,

    productName: "Redsail Driver",
    price: 299,
    discount: "40% off",
    realPrice: 418.6,
    description:
      "The redsail driver is essential for seamless cutting plotter operations.",
    productCode: "P8",
    image: "",
    url: "Redsail-Driver",
  },
  {
    id: 9,

    productName: "Usb driver for cutting plotter",
    price: 349,
    discount: "40% off",
    realPrice: 488.6,
    description:
      "This USB driver ensures smooth communication with your cutting plotter.",
    productCode: "P9",
    image: "",
    url: "Usb-Driver",
  },
];

export default productList;

