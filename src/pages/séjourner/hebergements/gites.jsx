import React from 'react'
import HeroPages from '../../../component/hero/HeroPages'

function Gites() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[hsla(206,14%,97%,1)] dark:bg-gray-900 text-center px-4">
            <HeroPages
                titleText=" gîtes"
                titleStyle="text-white"
                img="/images/ims.jpeg"
            />
            <h1 className="text-4xl sm:text-5xl font-bold text-basis-95 dark:text-white mb-4">
                En cours de construction 🚧
            </h1>
            <p className="text-lg text-basis-70 dark:text-gray-400 max-w-xl">
                Cette page est actuellement en développement!
            </p>
        </div>
    )
}

export default Gites
