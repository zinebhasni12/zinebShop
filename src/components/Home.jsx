import React, { useState, useEffect, useMemo } from 'react';
import CardList from './CardListe';
import produitData from './data.json';
import { Header } from "./Header.jsx";

function Home() {
    const [categorie, setCategorie] = useState('');
    const [recherche, setRecherche] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoriesUniques = new Set(produitData.map(produit => produit.categoryName));
        setCategories([...categoriesUniques]);
    }, []);



    const produitFiltres = useMemo(() => {
        return produitData.filter(produit =>
            produit.productName.toLowerCase().includes(recherche.toLowerCase()) &&
            (categorie === '' || produit.categoryName === categorie)
        );
    }, [recherche, categorie]);

    return (
        <div className="bg-white dark:bg-gray-800">

        <div className="container mx-auto p-4 mt-20">
                <div className="grid grid-cols-4 gap-2 mb-4">
                    <input
                        className="flex-1 p-2 border rounded text-black"
                        type='text'
                        placeholder='Rechercher un produit'
                        value={recherche}
                        onChange={(e) => setRecherche(e.target.value)}
                    />
                    <select
                        className="p-2 border rounded text-black"
                        value={categorie}
                        onChange={(e) => setCategorie(e.target.value)}
                    >
                        <option value="">Toutes les catégories</option>
                        {categories.map(categorie => (
                            <option key={categorie} value={categorie}>{categorie}</option>
                        ))}
                    </select>
                </div>
                <CardList produits={produitFiltres} />
            </div>
        </div>
    );
}

export default Home;
