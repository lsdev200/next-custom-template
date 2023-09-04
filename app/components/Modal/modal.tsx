"use client";

// components/ModalDialog.tsx
import React, { useState } from "react";

const ModalDialog: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
      >
        Open Modal
      </button>
      {isModalOpen && (
        //! change the modal content according to your  need
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-80 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
            <p className="text-gray-600">
              Are you sure you want to delete this item?
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 mr-4"
              >
                Cancel
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalDialog;
