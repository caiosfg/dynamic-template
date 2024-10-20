import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, title }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/40 ">
            <div className="w-96 min-h-96">
                <div className="bg-white h-full w-full rounded-lg text-gray-500">
                    <div className="flex justify-between items-center border-b-2 p-4 text-lg">
                        {title && <h1>{title}</h1>}
                        <button onClick={handleCloseClick}>x</button>
                    </div>
                    <div className="p-4">{children}</div>
                    <div className="flex justify-end items-center border-t-2 py-4 text-lg">
                        <button 
                            className="py-2 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            type="button"
                            onClick={handleCloseClick}
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit"
                            className="py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={handleCloseClick}
                        >
                            Salvar Alterações
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
};

export default Modal