import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';// Import the context

const Card = ({ produit }) => {
    const { cart, addToCart } = useCart();

    const isProductInCart = (_id) => {
        return cart.some(item => item._id === _id);
    };
    return (


        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div id={`carousel-${produit._id}`} className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {produit.productImage.map((image, index) => (
                        <div key={index} className={`duration-700 ease-in-out ${index === 0 ? 'block' : 'hidden'}`} data-carousel-item>
                            <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Product Image ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {produit.productImage.map((_, index) => (
                        <button key={index} type="button" className="w-3 h-3 rounded-full" aria-current={index === 0 ? 'true' : 'false'} aria-label={`Slide ${index + 1}`} data-carousel-slide-to={index}></button>
                    ))}
                </div>

                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLlinejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div className="px-5 pb-5">
                <a href="#">
                    <h2 className="text-xl font-semibold tracking-tight text-red-500">{produit.productName}</h2>
                </a>
                <h4 className="text-xs  tracking-tight text-yellow-500 dark:text-white">Description: {produit.shortDescription}</h4>
                <h4 className="text-sm font-semibold tracking-tight text-yellow-500 dark:text-white">Prix: {produit.price}</h4>
                <h4 className="text-sm font-semibold tracking-tight text-yellow-500 dark:text-white">Quantite: {produit.quantity}</h4>

                <button className={isProductInCart(produit._id) ? "px-4 py-2 mt-2 text-white bg-green-500 rounded hover:bg-green-700" : "px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700"}

                    onClick={() => addToCart(produit)}
                    disabled={isProductInCart(produit._id)} //  Désactiver le bouton si le produit est dans le panier
                >
                    {isProductInCart(produit._id) ? 'Already Added' : 'Add to Cart'}
                </button>
            </div>
        </div>

    )
}
export default Card;