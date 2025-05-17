// src/components/ChatWidget.jsx
import React, { useState, useRef, useEffect } from 'react';

const FAQ = {
  'how do i upload my license?': 
    'To upload your license, go to the “How It Works” section and click the Upload step, then follow the prompts to select and submit your files.',
  'what license types do you accept?': 
    'We currently accept Single User, Multi User, and Enterprise licenses. Select the appropriate type in the Contact form dropdown.',
  'how long does valuation take?': 
    'Our automated system provides a valuation within 24 hours of upload.',
  'how will i get paid?': 
    'After valuation, we’ll email you a link to choose your payout method—bank transfer, PayPal, or check.',
  'is my data secure?': 
    'Absolutely. We use bank-grade encryption (AES-256) and GDPR-compliant data handling to keep your documents safe.'
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hi! Ask me about SoftSell in lowercase please —e.g. “how do i upload my license?”' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    if (open && endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const toggleOpen = () => setOpen(o => !o);

  const handleSend = e => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add user's message
    setMessages(msgs => [...msgs, { sender: 'user', text: trimmed }]);
    setInput('');

    // Determine bot response
    const key = trimmed.toLowerCase();
    const answer = FAQ[key] 
      || "Sorry, I don't have an answer for that. Try asking something like “What license types do you accept?”";

    // Simulate a short delay
    setTimeout(() => {
      setMessages(msgs => [...msgs, { sender: 'bot', text: answer }]);
    }, 500);
  };

  return (
    <>
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '300px',
            zIndex: 1050
          }}
        >
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>SoftSell Support</strong>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setOpen(false)}
              ></button>
            </div>
            <div
              className="card-body"
              style={{ maxHeight: '300px', overflowY: 'auto', backgroundColor: '#f8f9fa' }}
            >
              {messages.map((m, i) => (
                <div key={i} className={`mb-2 ${m.sender === 'user' ? 'text-end' : 'text-start'}`}>
                  <div
                    className={`d-inline-block p-2 rounded ${
                      m.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="card-footer">
              <form onSubmit={handleSend}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a message..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                  />
                  <button className="btn btn-primary" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Floating chat button */}
      <button
        onClick={toggleOpen}
        className="btn btn-primary rounded-circle"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          zIndex: 1050
        }}
        aria-label="Toggle chat"
      >
        <i className="bi bi-chat-dots-fill" style={{ fontSize: '1.5rem' }}></i>
      </button>
    </>
  );
};

export default ChatWidget;
