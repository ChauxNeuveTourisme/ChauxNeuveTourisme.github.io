import React from 'react'
import GastronomieContent from './gastronomieContent';

const GastronomieLayout = ({data}) => {
    return (
        <section className=" bg-white lg:px-[104px] py-16 lg:py-[128px]">
            {data.map((item, index) => (
                <GastronomieContent key={index} {...item} />
            ))}
        </section>
    );
};

export default GastronomieLayout