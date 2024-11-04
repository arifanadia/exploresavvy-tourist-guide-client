import{ useState } from 'react';
import { Helmet } from 'react-helmet-async';
import bg from '/assets/home/contact-us.jpg'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';
        const userID = 'YOUR_USER_ID';

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log(result.text);
                setSubmissionSuccess(true);
                setFormData({ name: '', email: '', message: '' }); // Clear form
            }, (error) => {
                console.log(error.text);
                setSubmissionSuccess(false);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <section
                className="relative bg-cover bg-center h-[400px]"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl text-white font-bold">Contact Us</h1>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                  
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-gray-700 mb-4">
                            If you have any questions or need assistance, please feel free to reach out to us. We look forward to hearing from you!
                        </p>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Address</h3>
                            <p className="text-gray-600">1234 Street Name, City, State, ZIP</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Phone</h3>
                            <p className="text-gray-600">(123) 456-7890</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Email</h3>
                            <p className="text-gray-600">info@example.com</p>
                        </div>
                    </div>

            
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-2"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg p-2"
                                    rows="4"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow text-black px-4 py-2 rounded-lg font-semibold "
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Send Message'} 
                            </button>
                            {submissionSuccess !== null && (
                                <div className={`mt-4 text-sm ${submissionSuccess ? 'text-green-600' : 'text-red-600'}`}>
                                    {submissionSuccess ? 'Your message has been sent successfully!' : 'Failed to send your message. Please try again.'}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
