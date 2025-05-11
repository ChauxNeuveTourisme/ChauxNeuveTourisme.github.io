import React from 'react'
import GastronomieContent from './gastronomieContent';

const GastronomieLayout = ({data}) => {
    return (
        <section className=" bg-white px-4 sm:px-8 lg:px-[104px]  py-16 lg:py-[30px]">
            {data.map((item, index) => (
                <GastronomieContent key={index} {...item} />
            ))}
        </section>
    );
};

export default GastronomieLayout