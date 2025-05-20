import React from 'react';

export default function TarifLink({ url, label = "Tarifs" }) {
    return (
        <div className="bg-white  px-4 sm:px-8 lg:px-[104px]  py-16 lg:py-[30px]">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:underline text-lg font-medium"
            >
                🔗 {label}
            </a>
        </div>
    );
}
