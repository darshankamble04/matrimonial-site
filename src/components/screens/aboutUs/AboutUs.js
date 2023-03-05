import React from 'react'
import Sidebar from '../../common/sidebar/Sidebar'

function AboutUs() {
    return (
        <div className='d-flex'>
            <Sidebar />
            <main className="mainD">
                <div className="container mt-4">
                    <section className="">
                        <div className="sec3a">
                            <h2 className="secTitle container my-4">About Us!</h2>
                        </div>
                        <div className="sec3b d-flex container">
                            <div className="left3b">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti praesentium facere reprehenderit dolor modi illum dicta, atque totam? Laborum minus ullam nisi repudiandae nobis ratione illum ducimus aliquam accusantium minima excepturi, facere corrupti quasi.br <br />
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti praesentium facere reprehenderit dolor modi illum dicta, atque totam? Laborum minus ullam nisi repudiandae nobis ratione illum ducimus aliquam accusantium minima excepturi, facere corrupti quasi.
                            </div>
                            <div className="right3b d-flex">
                                <div class="card mx-3" style={{ width: "13rem" }}>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                <div class="card mx-3" style={{ width: "13rem" }}>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                <div class="card mx-3" style={{ width: "13rem" }}>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default AboutUs