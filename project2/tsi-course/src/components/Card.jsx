import React from 'react';
import samsa from '../assets/samsa.png'
import Button from './button';

const Card = () => {
    return (
        <div className="w-[220px] mr-[20px] mb-[60px]">
            <div className="flex flex-col justify-between">
                <div className="m-0 w-full text-[14px]">
                    <img src={samsa} alt="samsa" className="p-1 hover:p-0 transition duration-300"/>
                    <div className="">
                        <div className="my-[8px] text-[20px] font-bold">Самса</div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam error commodi repudiandae inventore, saepe provident?
                    </div>
                </div>
                <div className="flex justify-between items-center  mt-[16px]">
                    <div>99$</div>
                    <Button onClick={() => alert('Clicked!')} className="bg-[#009394]/[.1] text-[#009394]">В корзину</Button>
                </div>
            </div>
        </div>
    );
};

export default Card;