import React from "react";

export default function InfoBlock({ title, textBefore = "", list = [], textAfter = "" }) {
    return (
        <div className="max-w-screen-3xl mx-auto relative bg-[hsla(0,0%,100%,1)] px-4 sm:px-8 lg:px-[104px]  pb-4 lg:pb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>  
            {/* Text before list */}
            {textBefore &&
                textBefore.split("\n").map((para, index) => (
                <p key={`before-${index}`} className="text-gray-600 mb-4">
                    {para.trim()}
                </p>
            ))}   
            {/* List items */}
            {list.length > 0 && (
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-600">
                    {list.map((item, index) => (
                        <li key={`list-${index}`}>{item}</li>
                    ))}
                </ul>
            )}  
            {/* Text after list */}
            {textAfter &&
                textAfter.split("\n").map((para, index) => (
                <p key={`after-${index}`} className="text-gray-600 mb-4">
                    {para.trim()}
                </p>
            ))}
        </div>
    );
}


