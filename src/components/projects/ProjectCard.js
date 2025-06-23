import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ title, des, img, githubLink, websiteLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col
        bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b 
        hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
      >
        {/* Image */}
        <div
          className="w-full h-[80%] overflow-hidden rounded-lg cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            className="w-full h-50 object-cover group-hover:scale-110 duration-300"
            src={img}
            alt="img"
          />
        </div>

        {/* Title & Links */}
        <div className="w-full mt-5 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>

              <div className="flex gap-2">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg w-10 h-10 rounded-full bg-black inline-flex
                      justify-center items-center text-gray-400 hover:text-designColor duration-500 cursor-pointer"
                  >
                    <BsGithub />
                  </a>
                )}
                {websiteLink && (
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg w-10 h-10 rounded-full bg-black inline-flex
                      justify-center items-center text-gray-400 hover:text-designColor duration-500 cursor-pointer"
                  >
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">{des}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking image
              className="max-w-4xl max-h-[90vh] overflow-auto rounded-lg"
            >
              <img src={img} alt="project" className="w-full h-auto rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
