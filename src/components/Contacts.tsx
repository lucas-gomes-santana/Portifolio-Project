import { useState } from 'react'; 
import emailjs from '@emailjs/browser';
import '../css/Contacts.css';


emailjs.init({ // Initialize EmailJS with the public key from the .env file
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

export function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name.length < 8) {
            alert("Please insert your full name");
            return;
        }

        setIsSending(true);

        try {
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
            };

            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams
            );

            if (response.status === 200) {
                alert('Message sent with success!');
                setName('');
                setEmail('');
                setMessage('');
            } 
            
            else {
                throw new Error('Fail to send message');
            }

        } catch (error) {
            console.error('Fail to send message:', error);
            alert('Fail to send message. Please try again.');

        } finally {
            setIsSending(false);
        }
    }
    
    return (
        <section className="contacts">
            <h2>Contact me</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={handleNameChange}
                    disabled={isSending}
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={handleEmailChange}
                    disabled={isSending}
                />
                <textarea 
                    placeholder="Message" 
                    value={message} 
                    onChange={handleMessageChange}
                    disabled={isSending}
                />

                <button type="submit" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send'}
                </button>
            </form>
        </section>
    )
}