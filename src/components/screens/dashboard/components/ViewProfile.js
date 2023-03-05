import React from 'react'
import Header from '../../../common/header/Header'
import Sidebar from '../../../common/sidebar/Sidebar'
import Topbar from './Topbar'
import '../css/viewProfile.css'
import DataCard from './DataCard'
function ViewProfile() {
    return (
        <div className='d-flex'>
            <Sidebar />
            <main className="mainD">
                <div className="container mt-4">
                    <div className="viewProfile d-flex">
                        <img className='m-5' src="https://notebook-covers.s3.us-west-2.amazonaws.com/g1.jpg" alt="girl" />
                        <div className="data d-flex flex-column">
                            <div className='nameC'>Shree K</div>
                            <div className="infoC">
                                Status	: Never Married
                                <br /> Caste	: Maratha
                                <br /> Age	: 32 Yrs
                                <br /> Height	: 5ft.6in-167cm
                                <br /> Location	: Pune
                                <br /> State	: Maharashtra
                                <br /> Education	: Diploma
                                <br /> Occupation	: Hotel / Hospitality Professional
                                <br /> Income	: Rs. 7,00,001
                            </div>
                        </div>
                    </div>
                    <section className="viewProfile my-3 p-4">
                        <h3 className="subtitleVP">A few words about me</h3>
                        <p className="subdesVP">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ab a, architecto ducimus distinctio quis corporis quae officiis quo consequuntur, odio dolore ullam laborum eius possimus perferendis? Soluta corporis quidem voluptas cupiditate labore temporibus.</p>
                    </section>
                    <section className="viewProfile my-3 p-4">
                        <h3 className="subtitleVP">Basic Details</h3>
                        <p className="subdesVP d-flex flex-row">
                            <div className='d-flex justify-content-between'>
                                <span>Profile created for</span><span>Sister</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>Age</span><span>20 Years</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>Weight</span><span>55 Kg</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>Physical Status</span><span>Normal</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>Height</span><span>5 Ft 5 in / 165 Cms</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>Weight</span><span>55 Kg</span>
                            </div>
                            {/* dublicates 👇 */}
                            <div className='d-flex justify-content-between'>
                                <span>Profile created for</span><span>Sister</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>Age</span><span>20 Years</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>Weight</span><span>55 Kg</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>Physical Status</span><span>Normal</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>Height</span><span>5 Ft 5 in / 165 Cms</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>Weight</span><span>55 Kg</span>
                            </div>
                        </p>
                    </section>
                    <div className="viewProfile my-3 p-4">
                        <h3 className='subtitleVP'>Similar Profiles</h3>
                        {/* <div className="d-flex ">
                            <DataCard imgUrl="https://notebook-covers.s3.us-west-2.amazonaws.com/g1.jpg" />
                            <DataCard imgUrl="https://notebook-covers.s3.us-west-2.amazonaws.com/g2.jpg" />
                        </div> */}

                    </div>
                </div>
            </main>
        </div>
    )
}

export default ViewProfile