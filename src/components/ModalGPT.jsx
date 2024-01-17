import React, { useState, useRef, useEffect } from 'react';
import Chat from './GPT/Chat';
import "./ModalGPT.css"

const ModalGPT = () => {
    const [message, setMessage] = useState('');
    const [discussion, setDiscussion] = useState([]);

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDiscussion([...discussion, message]);
        setMessage('');
    };


    return (
        <div>
            {/* Modal */}
            <div className="modal" >
                {/* Header */}
                <div className="header">
                    <h2>BaCIR Bot</h2>
                </div>

                <Chat discussion={discussion} />
            </div>
        </div>
    );
};

export default ModalGPT;


