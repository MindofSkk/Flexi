import React from 'react';
import PaymentForm from './PaymentPage';

const Home: React.FC = () => {
    const images = [
        'https://dummyimage.com/600x400/000/fff',
        'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',

        "https://www.hubspot.com/hs-fs/hubfs/parts-url_1.webp?width=595&height=400&name=parts-url_1.webp"
    ];
    return (
        <>
            <PaymentForm
                images={images}
                title="Beginner File – 2 Flexi Design"
                productInfo="This file is designed by Mind of Skk and is the successor of the beginner file."
                amount="₹699.00"
                originalAmount="₹1,899.00"
                discountPercentage="84%"
        />
        </>
    );
};

export default Home;
