import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import productList from "../../utils/ProductList";

// Lazy load the PaymentForm component
const PaymentForm = lazy(() => import("./PaymentForm"));

const ProductDetails: React.FC = () => {
//   const images = [
//     "https://dummyimage.com/600x400/000/fff",
//     "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
//     "https://www.hubspot.com/hs-fs/hubfs/parts-url_1.webp?width=595&height=400&name=parts-url_1.webp",
//   ];
  const { productUrl } = useParams();

  const product = productList.find((p) => p.url === productUrl);
  console.log("test", product, productUrl);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentForm
        images={[product.image]}
        title={product.productName}
        productInfo={product.description}
        amount={product.price}
        originalAmount={product.realPrice}
        discountPercentage={product.discount}
      />
    </Suspense>
  );
};

export default ProductDetails;
