const ContactUs = () => {
    return (
        <div>
            <h2 className="text-center font-semibold text-2xl lg:text-3xl pb-6">Contact <span className="text-indigo-500">Us</span> </h2>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-15">
                <div className="w-full lg:w-1/2" data-aos="fade-left">
                    <div className="hero-content flex-col">
                        <div className="bg-base-100 w-full shadow-xl rounded-md">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="email" className="input w-full" placeholder="Name" />
                                    <label className="label">Email</label>
                                    <input type="email" className="input w-full" placeholder="Email" />
                                    <label className="label">Phone</label>
                                    <input type="number" className="input w-full" placeholder="Phone" />
                                    <label className="label">Your Bio</label>
                                    <textarea className="textarea w-full" placeholder="Your Bio"></textarea>
                                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white mt-4">Send</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2" data-aos="fade-right">
                    <div style={{ width: '100%', height: '420px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131104.37420561045!2d8.6365638!3d50.121212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%20am%20Main%2C%20Germany!5e1!3m2!1sen!2sbd!4v1745678080698!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '5px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Frankfurt Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;