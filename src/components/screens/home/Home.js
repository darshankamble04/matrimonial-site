import React from 'react'
import Header from '../../common/header/Header'
import ImgCard from './components/ImgCard';
import "./css/home.css"
function Home() {

  const cards = document.querySelectorAll("div");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });

  return (
    <div>
      <Header />
      {/* Home */}
      <main className="main">
        <section className="section1">

        </section>
        <section className="section2">
          <section className='imgCardColl d-flex h-center' >
            <ImgCard imgUrl="https://notebook-covers.s3.us-west-2.amazonaws.com/imgCard1.jpg" position="-35" />
            <ImgCard imgUrl="https://notebook-covers.s3.us-west-2.amazonaws.com/imgCard2.jpg" position="35" />
            <ImgCard imgUrl="https://notebook-covers.s3.us-west-2.amazonaws.com/imgCard3.jpg" position="-35" />
            <ImgCard imgUrl="https://notebook-covers.s3.us-west-2.amazonaws.com/imgCard4.jpg" position="35" />
          </section>
        </section>
        <section className="section3">
          <div className="sec3a">
            <h2 className="secTitle container my-4">About Us!</h2>
          </div>
          <div className="sec3b d-flex container">
            <div className="left3b">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti praesentium facere reprehenderit dolor modi illum dicta, atque totam? Laborum minus ullam nisi repudiandae nobis ratione illum ducimus aliquam accusantium minima excepturi, facere corrupti quasi.br <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti praesentium facere reprehenderit dolor modi illum dicta, atque totam? Laborum minus ullam nisi repudiandae nobis ratione illum ducimus aliquam accusantium minima excepturi, facere corrupti quasi.
            </div>
            <div className="right3b d-flex">
              <div class="card mx-3" style={{width: "13rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
              <div class="card mx-3" style={{width: "13rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
              <div class="card mx-3" style={{width: "13rem"}}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section4">

        </section>
      </main>
    </div>

  )
}

export default Home 