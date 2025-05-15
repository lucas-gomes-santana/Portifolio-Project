import { useState } from 'react'; 
import emailjs from '@emailjs/browser';
import '../css/Contacts.css';


emailjs.init({ // Initialize EmailJS with the public key from the .env file
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

export function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
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

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name.length < 8) {
            alert("Por favor, insira seu nome completo");
            return;
        }

        if (email.length < 8) {
            alert("Por favor, insira um email válido");
            return;
        }

        function validatePhone(phone: string) {
            const phoneRegex = /^[0-9]{10}$/;
            return phoneRegex.test(phone);
        }

        if (phone.length > 0 && !validatePhone(phone)) {
            alert("Por favor, insira um número de telefone válido");
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
                alert('Mensagem enviada com sucesso!');
                setName('');
                setEmail('');
                setMessage('');
            } 
            
            else {
                throw new Error('Falha ao enviar a mensagem');
            }

        } catch (error) {
            console.error('Falha ao enviar a mensagem:', error);
            alert('Falha ao enviar a mensagem. Por favor, tente novamente.');

        } finally {
            setIsSending(false);
        }
    }
    
    return (
        <section className="contacts-container">
            <h2>Envie uma mensagem para mim:</h2>

            <form className='contacts-form' onSubmit={handleSubmit}>
                <div className="container-input">
                    <p>Seu Nome Completo(Obrigatório):</p>
                    <input 
                        type="text" 
                        placeholder="Seu Nome" 
                        value={name} 
                        onChange={handleNameChange}
                        disabled={isSending}
                        required
                    />
                </div>

                <div className="container-input">
                    <p>Seu Email(Obrigatório):</p> 
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={handleEmailChange}
                        disabled={isSending}
                        readOnly
                    />
                </div>

                <div className="container-input">
                    <p>Seu Número de Telefone(Opcional):</p>
                    <input 
                        type="text" 
                        placeholder="Número de Telefone" 
                        value={phone} 
                        onChange={handlePhoneChange}
                    />
                </div>
              
              <div style={{alignItems: 'flex-start'}} className="container-input">
                <p>Sua Mensagem:</p> 
                <textarea 
                    placeholder="Mensagem" 
                    value={message} 
                    onChange={handleMessageChange}
                    disabled={isSending}
                    required
                />
              </div>
                

                <button type="submit" disabled={isSending}>
                    {isSending ? 'Sending...' : 'Send'}
                </button>

            </form>
        </section>
    )
}