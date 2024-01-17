import React, { useState, useEffect, useRef } from 'react';
import ModalGPT from './ModalGPT'; // Remplacez par le chemin d'accès correct vers votre composant Modal

const BulleGPT = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const modalRef = useRef(null);

    const handleBulleClick = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div>
            {modalOpen && <ModalGPT closeModal={closeModal} />} {/* Affiche le modal si modalOpen est true */}
            <div
                ref={modalRef}
                style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '20px',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#bacf00',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    cursor: 'pointer',
                    zIndex: '1000',
                }}
                onClick={handleBulleClick}
            >
                Chat
            </div>
        </div>
    );
};

export default BulleGPT;
