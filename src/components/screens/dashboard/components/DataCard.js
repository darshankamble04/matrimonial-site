import React from 'react'
import RippleBtn from '../../../common/header/components/RippleBtn'
import "../css/dataCard.css"
function DataCard({ imgUrl }) {
    return (
        <div className="dataCard mx-3 d-flex">
            <img src={imgUrl} alt="girl" />
            <div className="data d-flex">
                <div className='nameC'>Shree K</div>
                <div className="infoC">

                    <span className="mr-2">Status :</span>	 Never Married
                    <br /> <span className="mr-2">Caste :</span>	 Maratha
                    <br /> <span className="mr-2">Age :</span>	 20 Yrs
                    <br /> <span className="mr-2">Height :</span>	 4ft.6in-137cm
                    <br /> <span className="mr-2">Location :</span>	 Chinchwad
                    <br /> <span className="mr-2">State :</span>	 Maharashtra
                    <br /> <span className="mr-2">Education :</span>	 BE
                    <br /> <span className="mr-2">Occupation :</span>	 Software Engineer
                    <br /> <span className="mr-2">Income :</span>	 Rs. 7,00,001
                </div>
                <RippleBtn text="view profile" link="/view-profile/shreeya-jog" />
            </div>
        </div>
    )
}

export default DataCard


    // < div className = "d-flex justify-content-between" ><span>Status</span><span>Never Married</span></ >
    //                     <div className="d-flex justify-content-between"><span>Caste</span><span>Maratha</span></div>
    //                     <div className="d-flex justify-content-between"><span>Age</span><span>32 Yrs</span></div>
    //                     <div className="d-flex justify-content-between"><span>Height</span><span>5ft.6in-167cm</span></div>
    //                     <div className="d-flex justify-content-between"><span>Location</span><span>Pune</span></div>
    //                     <div className="d-flex justify-content-between"><span>State</span><span>Maharashtra</span></div>
    //                     <div className="d-flex justify-content-between"><span>Education</span><span>Diploma</span></div>
    //                     <div className="d-flex justify-content-between"><span>Occupation</span><span>Hotel / Hospitality Professional</span></div>
    //                     <div className="d-flex justify-content-between"><span>Income</span><span>Rs. 7,00,001</span></div>