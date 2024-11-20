/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import ScrollButton from '../components/ScrollButton'


export default function Home() {
  
  return (
    <>
    <ScrollButton/>
    
      <div className=" text-center  bg-body-tertiary home ">
        <div className="col-md-6 p-lg-5 mx-auto my-5 small-home">
          <h1 className="display-3 fw-bold text-white">Designed for engineers</h1>
          <h3 className="home-h3 mb-3 text-white">Pellentesque dapibus hendrerit tortor. Cras non dolor. Fusce vel dui. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Cras sagittis</h3>
          <div className="d-flex gap-3 justify-content-center lead fw-normal home-btn">
            <button className="btn btn-"> See More <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div className='container ' >
        <div className='row d-flex home-main1 p-3'>
          <div className='home-box1 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 '>
            <h1>TOP Seller</h1>
            <p>The Nike Reax 8 TR combines lightweight containment with responsive cushioning for premium performance while training.</p>
            <div className='container main-smallbox'>
              <div className='row home-smallbox '>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 box-1  py-5'>    
                  <h2>100+</h2> <p>Sell 100pairs per/day</p>      
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 box-2 py-5'>
                  <h1>Top Selling Shoes</h1>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 box-3 py-5'>    
                  <h2>450+</h2> <p>order By Customer</p>      
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 box-4 py-5'>    
                  <h2>155$</h2> <p>Price of Shoes</p>      
                </div>
              </div>
            </div>
          </div>
          <div className='home-box2 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 py-5'>
            <img src={ require('./picshoes/background.jpeg')}></img>
          </div>
        </div>
      </div>
      {/* <div className='container' data-aos="zoom-in-up">
        <div className='row d-flex home-main1 p-3'>
          <div className='home-box3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 py-5'>
            <img src={ require('./picshoes/Screenshot 2024-10-20 at 3.52.57 in the afternoon.png')}></img>
          </div>
          <div className='home-box1 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 '>
            <h1>TOP Seller</h1>
            <p>The Nike Reax 8 TR combines lightweight containment with responsive cushioning for premium performance while training.</p>
            <div className='container main-smallbox'>
              <div className='row home-smallbox '>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 box-1  py-5'>    
                  <h2>100+</h2> <p>Sell 100pairs per/day</p>      
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 box-2 py-5'>
                  <h1>Top Selling Shoes</h1>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 box-3 py-5'>    
                  <h2>450+</h2> <p>order By Customer</p>      
                </div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 box-4 py-5'>    
                  <h2>155$</h2> <p>Price of Shoes</p>      
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  */}
      <div className='main-services' >
        <div className='container d-flex services'> 
            <p>Our Services</p>
            <p className='btn'>View All Services</p>
        </div>
        <div className='container main' >
            <dic className='row box-services p-5 '>
              <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 services-1 ' >
                <img src={require('./picshoes/services1.png')} />
                <h1>Shop Online</h1>
                <p>We need to pay money first and select Item you want to buy and pay if we will send this item to you after a few buy.</p>
                <Link>Learn More</Link>
              </div>
              <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 services-1 ' >
                <img src={require('./picshoes/services2.png')} />
                <h1>Buy At The Shop</h1>
                <p>You can ask information and show picture item you want to buy we will find it and send to you.</p>
                <Link>Learn More</Link>
              </div>
              <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 services-1 ' >
                <img src={require('./picshoes/services3.png')} />
                  <h1>Pay ment</h1>
                  <p>You can pay money cash or transfers by app so ABA.</p>
                  <Link>Learn More</Link>
              </div>
            </dic>
          </div>
       </div>
       <div className=' main-model'>
          <div className='container d-flex model'> 
            <p>Our Services</p>
            <p className='btn'>View All Services</p>
          </div>
          <div className='container' >
           <div className="row model-shoes">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-5" >
               <div className="card card-model" >
                <img src={require('./model/newmodel-1.webp')} />
                <div className='model-box'>
                  <h6>Nike Court Borough Mid 2</h6>
                  <p>$57.97 , 13 Colors</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-5" >
               <div className="card card-model" >
                  <img src={require('./model/newmodel-3.webp')} alt="..."/>
                  <div className='model-box'>
                    <h6>Nike Court Borough Mid 2</h6>
                    <p>$57.97 , 13 Colors</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-5" >
               <div className="card card-model" >
                  <img src={require('./model/newmodel-2.webp')} alt="..."/>
                  <div className='model-box'>
                    <h6>Nike Court Borough Mid 2</h6>
                    <p>$57.97 , 13 Colors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
       <div>
          <div className='container d-flex model'> 
            <p>What People Say About Us?</p>
          </div>
          <div className='container'>
            <div className="row ">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-5" >
               <div className="card card-about" >
                  <h5>Nike, a globally renowned sportswear brand, with its iconic “Swoosh” logo and popular,has amassed a vast number of loyal fans</h5>
                  <img src={require('./model/unnamed.webp')} />
                  <h4>Customer</h4>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-5" >
                <div className="card card-about" >
                  <h5>Nike and adidas are sportswear companies whose products are very popular around the world,</h5>
                  <img src={require('./model/unnamed.webp')} />
                  <h4>Customer</h4>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-5" >
                <div className="card card-about" >
                  <h5>Nike has been established for a long time, and because of that it is embedded in alot of peoples subconscious.</h5>
                  <img src={require('./model/unnamed.webp')} />
                  <h4>Customer</h4>
                </div>
              </div>
            </div>
          </div>
       </div>
       <div className='main-ask'>
          <div className='container '> 
            <div className='row  ' >
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-5 ask'>
                <p>Frequently Asked Questions</p>
              </div>
              <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 my-5 ask'>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header ask">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <i class="fa-solid fa-caret-right"></i>What is EliteGrove?
                      </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                  </div>
                  <div class="accordion-item ">
                    <h2 class="accordion-header ask">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <i class="fa-solid fa-caret-right "></i>Why should I hire a EliteGrove Consultant?
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header ask">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <i class="fa-solid fa-caret-right"></i>What service do you offer?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header ask">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <i class="fa-solid fa-caret-right"></i>How can EliteGrove benefits my business?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header ask">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <i class="fa-solid fa-caret-right"></i>How do you ensure data security?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
       <div className=' main-collection'>
          <div className='container d-flex model'> 
            <p>New Collection</p>
            <p className='btn'>View All Services</p>
          </div>
          <div className='container '>
           <div className="row ">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-5">
               <div className="card card-collection" >
                <img src={require('./model/newmodel-1.webp')} />
                <div className='collection-box'>
                  <h6>Nike Court Borough Mid 2</h6>
                  <h6>2 color</h6>
                  <p>$57.97 , 13 Colors</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-5" >
               <div className="card card-collection" >
                  <img src={require('./model/newmodel-3.webp')} alt="..."/>
                  <div className='collection-box'>
                    <h6>Nike Court Borough Mid 2</h6>
                    <h6>4 color</h6>
                    <p>$57.97 , 13 Colors</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 my-5" >
               <div className="card card-collection" >
                  <img src={require('./model/newmodel-2.webp')} alt="..."/>
                  <div className='collection-box'>
                    <h6>Nike Court Borough Mid 2</h6>
                    <h6>6 color</h6>
                    <p>$57.97 , 13 Colors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='container main-about'>
              <div className='text-center small-about'>
                <h1>Information about a lot shoes in shop</h1>
                <p>Nulla metus id vivamus tempor mauris libero taciti aenean ultrices aliquam <br/> euismod class Ac eleifend quam integer elit adipiscing</p>
                <Link to="/about-us" className='btn btn-about' >See More <i class="fa-solid fa-arrow-right"></i></Link>
              </div>
          </div>
        </div>
        
    </>

  )
}

