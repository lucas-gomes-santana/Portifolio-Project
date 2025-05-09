import '../css/Contacts.css';

function Contacts() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

        const mailtoLink = `mailto:ls8294921@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section className='main-container'>
            <h2>Contact Me</h2>

            <h3>Feel free to send me a E-mail message using the form below:</h3>
            
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

            <h4>Or you can contact me using this number: +55 (75) 99245-9695 <i className='fa-solid fa-phone'></i></h4>

        </section>
    );
}

export default Contacts;