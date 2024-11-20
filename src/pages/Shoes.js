import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import LoadingView from '../components/LoadingView';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ScrollButton from '../components/ScrollButton';

export default function Shoes() {
  const [isLoading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All'); // State to track selected category

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // Handle button click to filter shoes by category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'Men') {
      return product.type === 'Men'; // Adjust this condition based on actual data
    } else if (selectedCategory === 'Women') {
      return product.type === 'Women'; // Adjust this condition based on actual data
    } else {
      return true; // Show all products
    }
  });

  return (
    <>
    <ScrollButton/>
      <div id="carouselExampleInterval" className="carousel slide mb-5" data-bs-ride="carousel">       
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000000">
            <img src={require('./picshoes/shoes-1.jpg')} className="d-block w-100" alt="Description 1"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={require('./picshoes/shoes-2.jpg')} className="d-block w-100" alt="Description 2"/>
          </div>
          <div className="carousel-item">
            <img src={require('./picshoes/shoes-3.jpg')} className="d-block w-100" alt="Description 3"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="mb-4 text-center">
        <button onClick={() => handleCategoryClick('Men')} className="btn btn-dark me-2">
          Men Shoes
        </button>
        <button onClick={() => handleCategoryClick('Women')} className="btn btn-dark me-2">
          Women Shoes
        </button>
        <button onClick={() => handleCategoryClick('All')} className="btn btn-dark">
          All Shoes
        </button>
      </div>
      <div className="row container mx-auto">
        {isLoading ? (
          <>
            <div className="col-12 col-md-3">
              <LoadingView />
            </div>
            <div className="col-12 col-md-3">
              <LoadingView />
            </div>
            <div className="col-12 col-md-3">
              <LoadingView />
            </div>
          </>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Link to={`/read/${product.id}`} className="text-decoration-none">
                <Card
                  imageURL={product.image}
                  name={product.title}
                  price={product.price}
                  desc={product.description}
                />
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
}


