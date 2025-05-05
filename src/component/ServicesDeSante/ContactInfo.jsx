import React from 'react';

const ContactInfo = ({ address, phone, email, website }) => {
    return (
        <div className="border-t pt-6 space-y-2">
            <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
            <ul className="space-y-2">
                <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-blue-600">location_on</span>
                    <span>{address}</span>
                </li>
                {phone&&(
                    <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-blue-600">call</span>
                        <a href={`tel:${phone}`} className="text-blue-700 underline">{phone}</a>
                    </li>
                )}
                {email&&(
                    <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-blue-600">mail</span>
                        <a href={`mailto:${email}`} className="text-blue-700 underline">{email}</a>
                    </li>
                )}
                {website&&(
                    <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-blue-600">language</span>
                        <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
                            {website.replace(/^https?:\/\//, '')}
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ContactInfo;