import React, { useState } from "react";
import Tailwind from "./ModalTab/Tailwind";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal(props: ModalProps) {
  const { isOpen, setIsOpen } = props;
  const [activeTab, setActiveTab] = useState("Tailwind");

  return (
    <>
      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30  z-50 flex items-center justify-center">
          {/* Modal content */}
          <div className="bg-gray-800 rounded-lg p-4 max-w-md w-full backdrop-filter backdrop-blur-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Tab menu */}
            <div className="flex mb-4 w-full">
              <button
                className={`${
                  activeTab === "Tailwind" ? "bg-gray-700" : "bg-gray-600"
                } text-white py-1 px-3  focus:outline-none`}
                onClick={() => setActiveTab("Tailwind")}
              >
                Tailwind
              </button>
              <button
                className={`${
                  activeTab === "SCSS" ? "bg-gray-700" : "bg-gray-600"
                } text-white py-1 px-3 focus:outline-none`}
                onClick={() => setActiveTab("SCSS")}
              >
                SCSS
              </button>
            </div>
            {/* Tab content */}
            <div className="text-white">
              {activeTab === "Tailwind" && (
                <div>
                  <h2 className="text-lg font-bold mb-2">Tailwind</h2>
                  <Tailwind />
                </div>
              )}
              {activeTab === "SCSS" && (
                <div>
                  <h2 className="text-lg font-bold mb-2">SCSS</h2>
                  <p>SCSS content goes here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
