import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=1000&auto=format&fit=crop",
                    description: "Removes indoor air pollutants and thrives in low light.",
                    cost: "$18"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1000&auto=format&fit=crop",
                    description: "Calming scent, helps reduce stress and anxiety.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729808998-261545465934?q=80&w=1000&auto=format&fit=crop",
                    description: "Sweet fragrance, promotes better sleep.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=80&w=1000&auto=format&fit=crop",
                    description: "Invigorating herbal scent used in cooking and aromatherapy.",
                    cost: "$15"
                }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true,
        }));
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-logo">
                    <h2>e-plantShopping</h2>
                </div>
                <ul className="navbar-links">
                    <li><a href="#plants">Plants</a></li>
                    <li><a href="#cart">Cart</a></li>
                </ul>
            </nav>
            <div className="product-grid">
                {plantsArray.map((category, index) => (
                    <div key={index}>
                        <h2>{category.category}</h2>
                        <div className="plant-list">
                            {category.plants.map((plant, plantIndex) => (
                                <div className="product-card" key={plantIndex}>
                                    <img src={plant.image} alt={plant.name} className="product-image" />
                                    <div className="product-title">{plant.name}</div>
                                    <div className="product-description">{plant.description}</div>
                                    <div className="product-cost">{plant.cost}</div>
                                    <button
                                        className="product-button"
                                        disabled={addedToCart[plant.name]}
                                        onClick={() => handleAddToCart(plant)}
                                    >
                                        {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;