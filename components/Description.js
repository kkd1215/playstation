import React from 'react'

function Description() {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center my-8 md:my-16'>
            <div className='relative ml-12 flex-basis-100 line md:flex-basis-40'>
                <h2 className='font-bold text-4xl md:text-5xl'>PS4 V2 <br /> Dualshock 4</h2>
                <h3 className='text-base md:text-3xl font-light md:font-thin text-[#707070] mt-5 mb-2'>Wireless Controller for Playstation 4</h3>
                <p className='text-base font-light md:font-thin text-[#b7b7b7]'>(Compatible/Generic)</p>
                <h4 className='my-8 text-xl'>$32.50</h4>
                <button >Buy Now<img className='' src="/Playstation_Img/arrow.png" alt="Buy now button" /></button>
            </div>
            <div className='flex-basis-100 md:flex-basis-60 relative flex items-center mb-12 md:mb-0'>
                <img className='w-[77%] md:w-[90%]' src="/Playstation_Img/controller.png" alt="Image of a PS4 dualshock 4 controller" />
                <div className='color-box translate-x-20 md:translate-x-36'></div>
                <div className='flex flex-col items-center text-white cursor-pointer text-center'>
                    <img className='w-8 mb-1' src="/Playstation_Img/add.png" alt="Add to cart button" />
                    <p className='text-lg'><small>Add to Cart</small></p>
                </div>
            </div>
        </div>
    )
}

export default Description
