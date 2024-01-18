import React, { Fragment } from "react";

const Message = ({ message }) => {
    return (
        <div style={{ textAlign: message.isUser ? "right" : "left", margin: "8px" }}>
            <div
                style={{
                    color: message.isUser ? "#ffffff" : "#000000",
                    backgroundColor: message.isUser ? "#635d9e" : "#eaeaea",
                    padding: "15px",
                    borderRadius: "8px",
                }}
            >
                {message.content.split("\n").map((text, index) => (
                    <Fragment key={index}>
                        {text}
                        <br />
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default Message;