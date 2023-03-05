import React from 'react'

function ImgCard({position,imgUrl,description}) {

    return (
        <div className="outerImgCard d-flex">
            <div class="imgCard d-flex " style={{ bottom: `${position}px`,background:`url(${imgUrl})`}} >
                <p class="imgCard-name my-1">Sanju & Pooja</p>
                <div class="imgCard-details">
                    Pooja's mother called on our number one evening and then we talked over phone. After sharing some photos of our families over whatsapp, it turned out that our families already <span className='readMore'>Read more</span>...
                </div>
            </div>

        </div>
    )
}

export default ImgCard