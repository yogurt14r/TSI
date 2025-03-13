import React from 'react';
import samsa from '../assets/samsa.png'

const Card = () => {
    return (
        <div className="w-[220px] mr-[20px] border-1">
            <div className="flex flex-col justify-center mb-[60px]">
                <img src={samsa} alt="samsa" />
                <div>asderrge</div>
                <div>цена</div>
                <div>в корзину</div>
            </div>
        </div>
    );
};

export default Card;