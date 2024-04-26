import React, { useState } from 'react'

const Display = ({image}) => {
    const [count, setCount] = useState(0);
    const handleCount = (c) => {
        if (image.length - 1 === count && c === 1) {
            setCount(0);
        }
        else if (count === 0 && c === -1) {
            setCount(image.length - 1)
        }
        else {
            setCount(count + c)
        }
    }
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image[count]} className="w-[448px] h-[448px] object-contain" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a onClick={() => handleCount(-1)} className="btn btn-circle">❮</a>
                        <a onClick={() => handleCount(1)} className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display