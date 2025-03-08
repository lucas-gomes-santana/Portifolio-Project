import { useNavigate } from 'react-router-dom';
import '../css/Contacts.css';

function Contacts() {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

        const mailtoLink = `mailto:ls8294921@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section className='main-container'>
            <h2>Contact Me</h2>
            <h3>Feel free to send me a message using the form below:</h3>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Subject:
                    <input type="text" name="subject" required placeholder="Enter the subject..." />
                </label>
                <label>
                    Message:
                    <textarea name="message" rows={5} required placeholder="Write your message here..."></textarea>
                </label>
                <button type="submit">Send Email</button>
            </form>
            <button className='return-button' onClick={() => navigate('/')}>Return to Home Page</button>
        </section>
    );
}

export default Contacts;