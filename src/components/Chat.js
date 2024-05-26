import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import Message from "./Message";
import { analyze } from "./Utils";

export default function Chat() {
    const [messages, setMessages] = useState([
        { message: "Hi, May I have your name" }
    ]);
    const [text, setText] = useState("");

    const onSend = () => {
        let list = [...messages, { message: text, user: true }];
        if (list.length > 2) {
            list = [...list, { message: analyze(text) }];
        } else {
            list = [
                ...list,
                { message: `Hi, ${text}` },
                { message: "How can I help you?" }
            ];
        }
        setMessages(list);
        setText("");
        setTimeout(() => {
            document.querySelector('#copyright').scrollIntoView();
        }, 100);
    };

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <img 
                    src='https://png.pngtree.com/png-vector/20230225/ourmid/pngtree-smart-chatbot-cartoon-clipart-png-image_6620453.png'
                    alt='logo'
                    height={200}
                    width={200} 
                />
                <h2 className="text-primary">ChatBot</h2>
            </div>
            <div className="chat-message">
                {messages.length > 0 && messages.map((data, index) => 
                    <Message key={index} message={data.message} user={data.user} />
                )}
                <div className="d-flex mt-2 justify-content-center">
                    <input 
                        type="text" 
                        className='form-control' 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                    />
                    <Button 
                        variant='primary' 
                        className='ms-3' 
                        
                        onClick={onSend}
                    >
                        Send
                    </Button>
                </div>
            </div>
            <div id="copyright" className='mt-3' style={{ textAlign: "center" }}>
                Copyright @ Sharvina V
            </div>
        </div>
    );
}
