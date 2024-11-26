import React, {useState} from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Modal from "./Modal";

const Card = ({title, des, modalContent, icon}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <div 
                onClick={handleModalOpen} 
                className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center
                bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024]
                transition-colors duration-100 group cursor-pointer"
            >
                <div className="h-72 overflow-y-hidden">
                    <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                        <div>
                            <span className="text-5xl text-designColor">{icon}</span>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-xl mg:text-2xl font-titleFont font-bold text-gray-300">{title}</h2>
                            <p className="base">{des}</p>
                            <span className="text-2xl text-designColor">
                                <HiArrowRight />
                            </span>
                        </div>
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



