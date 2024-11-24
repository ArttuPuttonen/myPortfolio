import React from 'react';

const Modal = ({ title, content, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-bodyColor rounded-lg p-6 shadow-shadowOne w-11/12 max-w-lg">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-300">{title}</h2>
                    <button onClick={onClose} className="text-designColor text-2xl font-bold">
                        &times;
                    </button>
                </div>
                <div className="mt-4 text-gray-300">{content}</div>
            </div>
        </div>
    );
};

export default Modal;
