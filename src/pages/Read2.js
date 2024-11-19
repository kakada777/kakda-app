import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { products } from '../data/products'; 

export default function Read2() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function
  
  useEffect(() => {
    const foundProduct = products.find(product => product.id === parseInt(id));
    setProduct(foundProduct); 
  }, [id]); 

  if (!product) {
    return <div>Loading...</div>; 
  }

  // Function to navigate back to the Shoes page
  const handleClose = () => {
    navigate('/shoes'); // Navigates to the Shoes page
  };

  return (
  <>
    <button onClick={handleClose} type="button" class="btn-close mx-5 my-5" aria-label="Close"></button>
    <main className='container my-5'>
      <div className="row d-flex">
        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
          <div className="flex-shrink-0" style={{ width: '500px', height: '500px', position: 'relative' }}>
              <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} className="position-absolute top-0 start-0 w-100 h-100 object-cover" loading="lazy" />
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
          <form className="flex-grow-1 p-4">
            <div className="d-flex flex-wrap">
              <h1 className="flex-grow-1 h5 font-weight-semibold text-dark">
                {product.title}
              </h1>
              <div className="h5 font-weight-semibold text-muted">
                {product.price}
              </div>
              <div className="w-100 text-muted small mt-2">
                In stock
              </div>
            </div>
            <div class="d-flex align-items-baseline mt-4 mb-6 pb-6 border-bottom border-muted py-3" >
              <div class="d-flex space-x-2 text-muted small">
                <label>
                  <input class="d-none" name="size" type="radio" value="xs" checked />
                  <div class="btn btn-dark px-3 py-2 mx-1" type="submit" >
                    Xs
                  </div>
                </label>
                <label>
                  <input class="d-none " name="size" type="radio" value="s" />
                  <div class="btn btn-dark px-3 py-2 mx-1" type="submit" >
                    S
                  </div>
                </label>
                <label>
                  <input class="btn btn-primary d-none" name="size" type="radio" value="m" />
                  <div class="btn btn-dark px-3 py-2 mx-1" type="submit" >
                    M
                  </div>
                </label>
                <label>
                  <input class="d-none" name="size" type="radio" value="l" />
                  <div class="btn btn-dark px-3 py-2 mx-1" type="submit" >
                    L
                  </div>
                </label>
                <label>
                  <input class="d-none" name="size" type="radio" value="xl" />
                  <div class="btn btn-dark px-3 py-2 mx-1 mb-1" type="submit" >
                    XL
                  </div>
                </label>
              </div>
            </div>
            <div className="d-flex justify-content-between mb-6 small font-weight-medium">
              <div className="d-flex space-x-3">
                <button className="btn btn-dark px-4 py-2 my-3" type="submit">
                  Buy now
                </button>
                <button className="btn btn-outline-secondary px-4 py-2 mx-4 my-3" type="button">
                  Add to bag
                </button>
              </div>
              <div className="btn btn-outline-dark py-2 my-3 btn-heart">
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>
            <p className="text-muted small">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      </div>
    </main>
    </>    
  );
}

