import React, { useState } from 'react';
import Modal from "./Modal";

const Card = ({ title, des, modalContent, icon }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    return (
        <div>
            <div 
                onClick={handleModalOpen}
                className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center
                bg-gradient-to-r from-bodyColor to-[#202327] cursor-pointer
                transform transition duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0.5"
            >
                <div className="flex flex-col justify-between h-full gap-6">
                    <div>
                        <span className="text-5xl text-designColor">{icon}</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">{title}</h2>
                        <p className="text-base text-gray-400">{des}</p>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <Modal
                    title={title}
                    content={modalContent}
                    onClose={handleModalClose}
                />
            )}
        </div>
    );
};

export default Card;
