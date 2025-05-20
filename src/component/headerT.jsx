import React from 'react'

function HeaderT({title}) {
    return (
        <section className="max-w-screen-3xl mx-auto relative bg-[hsla(0,0%,100%,1)] px-4 sm:px-8 lg:px-[104px]  py-16 lg:py-[30px]">
            <header className="border-b  border-gray-700 mb-12 flex flex-wrap items-center justify-between gap-4 pb-6">
                <h2 className="text-3xl font-bold text-gray-900 ">
                    {title}
                </h2>
            </header>
        </section>
    )
}

export default HeaderT