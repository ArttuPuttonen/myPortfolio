import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ title, content, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            {/* Animated Modal Box */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }} // Starting state
                animate={{ opacity: 1, scale: 1 }} // Animate to this state
                exit={{ opacity: 0, scale: 0.9 }} // Exit animation
                transition={{ duration: 0.3 }} // Animation duration
                className="bg-bodyColor rounded-lg p-6 shadow-shadowOne w-11/12 max-w-lg"
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-300">{title}</h2>
                    <button onClick={onClose} className="text-designColor text-2xl font-bold">
                        &times;
                    </button>
                </div>
                <div className="mt-4 text-gray-300">{content}</div>
            </motion.div>
        </div>
    );
};

export default Modal;
