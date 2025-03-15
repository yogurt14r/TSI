import React from 'react'
import Card from '../components/Card';

const Home = () => {
    return (
    <>
        
            <div className="max-w-[1200px] mx-auto">
                <div className="w-full text-black text-[36px] my-[32px]">Самса</div>
                <div className="flex flex-wrap mx-auto">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
    </>
    );
}
export default Home