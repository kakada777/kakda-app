/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ScrollButton from '../components/ScrollButton'

export default function About(){
  return (
    <> 
    <ScrollButton/>
      <main>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
          </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item active ">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
              </div>
            </div>
          </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div  iv className="container marketing mt-5">
          <div className="row">
          <div className="col-lg-4">
            <img className="bd-placeholder-img rounded-circle" src={ require('./About-img/about-1.jpg')} width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" />
            <h2 className="fw-normal">CEO Nike</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img className="bd-placeholder-img rounded-circle" src={ require('./About-img/about-2.jpeg')} width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" />
            <h2 className="fw-normal">CEO Adidas</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img className="bd-placeholder-img rounded-circle" src={ require('./About-img/about-3.jpg')} width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false" />
            <h2 className="fw-normal">CEO Jordan</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
          </div>
        <hr className="featurette-divider"/>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">First Model of Nike Shoes .<span className="text-body-secondary">Price to $437,500 world</span></h2>
            <p className="lead">The so-called Nike "Moon Shoe," designed by Nike co-founder and track coach Bill Bowerman for runners at the 1972 Olympics trials, was the top lot in the first-ever auction dedicated to sneakers at Sotheby's auction house in New York.</p>
          </div>
          <div className="col-md-5">
            <img src={ require('./About-img/LYNXNPEF6M1L9.jpeg')}  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="2000"  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
            
          </div>
        </div>
        <hr className="featurette-divider"/>
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">First Model of Adidas Shoes  <span className="text-body-secondary">See for yourself.</span></h2>
            <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={ require('./About-img/adidas-history-small-steps-1950s.jpg.webp')}  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="2000"  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          </div>
        </div>
        <hr className="featurette-divider"/>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">First Model of Jordan Shoes . <span className="text-body-secondary">Price to  $672,000 world</span></h2>
            <p className="lead">The1985 Air Jordan 1 Vintage Originals were produced for Jordan in the white, black and red of his Chicago Bulls, and were the colourway he wore most often on court. In 1984, </p>
          </div>
          <div className="col-md-5">
            <img src={ require('./About-img/download.avif')}  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="2000"  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
          </div>
        </div>
        <hr className="featurette-divider"/>
      </div>
      <footer className="container">
        <p className="float-end"><a href="#">Back to top</a></p>
        <p>© 2017–2024 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
      </footer>
      </main>
    </>
  )
}
