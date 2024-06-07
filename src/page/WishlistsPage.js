import React from 'react';
import TopHeader from "../components/Header/TopHeader";
import Wishlists from "../components/Wishlists";
import Footer from "../components/Footer";

function WishlistsPage(props) {
    return (
        <div>
            <TopHeader styles="w-full h-[121px]  flex items-center justify-between px-6 border border-b-2 border-gray-100 shadow-sm"/>
            <div className="mt-12 w-2/3 bg-transparent  pb-7 flex items-center justify-center">
                <h1 className="text-5xl">Wishlists</h1></div>
            <Wishlists />
            <Footer />
        </div>
    );
}

export default WishlistsPage;