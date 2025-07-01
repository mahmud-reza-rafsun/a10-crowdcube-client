const About = () => {
    return (
        <div className="my-8">
            <h2 className="text-center font-semibold text-2xl lg:text-3xl pb-3 lg:pb-6">About <span className="text-indigo-500">Us</span> </h2>
            <div className="flex gap-10 flex-col lg:flex-row items-center justify-center py-3 lg:py-5">
                <div data-aos="fade-right">
                    <img src="https://winter-cloth-donation.netlify.app/assets/donate-B1p8_D-T.webp" className="rounded-md" alt="" />
                </div>
                <div data-aos="fade-left">
                    <h1 className="text-xl lg:text-3xl font-semibold">Warm Hearts, Warm Hands.</h1>
                    <p className="py-3">
                        emphasizes both emotional warmth compassion, kindness and physical warmth donating clothes. Your message should highlight
                    </p>
                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">Learn More</button>
                </div>
            </div>
            <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-center pt-3">Why Donate Winter <span className="text-indigo-500">Clothes to our Org?</span> </h3>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center py-5 gap-5">
                    <div className="space-y-2 lg:space-y-4 w-full lg:w-3/6 mt-2 lg:mt-5" data-aos="fade-up-right">
                        <div tabIndex={0} className="collapse collapse-arrow border-indigo-500 bg-indigo-500 text-white border">
                            <div className="collapse-title text-lg lg:text-xl font-medium">Spreading Warmth, Saving Lives</div>
                            <div className="collapse-content">
                                <p tabIndex={0}> Winter is harsh for those without shelter or proper clothing. By donating your gently used winter wear, you're not just clearing your closet—you're saving someone from the bitter cold.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-indigo-500 bg-indigo-500 text-white border">
                            <div className="collapse-title text-lg lg:text-xl font-medium">Every Coat Tells a Story</div>
                            <div className="collapse-content">
                                <p tabIndex={0}> That jacket you don’t wear anymore could be a shield for someone facing the freezing nights. Your donation carries more than fabric—it carries hope, dignity, and warmth.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-indigo-500 bg-indigo-500 text-white border">
                            <div className="collapse-title text-lg lg:text-xl font-medium">Community Helping Community</div>
                            <div className="collapse-content">
                                <p tabIndex={0}> Our neighbors in need shouldn’t have to choose between warmth and food. Your winter clothes can make the season easier, safer, and kinder for those struggling.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-indigo-500 bg-indigo-500 text-white border">
                            <div className="collapse-title text-lg lg:text-xl font-medium"> Reuse with a Purpose</div>
                            <div className="collapse-content">
                                <p tabIndex={0}> Instead of letting winter clothes go unused, give them a second life. Sustainable giving not only helps the planet but also brings comfort to people who need it the most.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-indigo-500 bg-indigo-500 text-white border">
                            <div className="collapse-title text-lg lg:text-xl font-medium">Shelter from the Storm</div>
                            <div className="collapse-content">
                                <p tabIndex={0}>We can’t control the weather, but we can control how we respond. Your donation helps provide a layer of protection against the cold to children, the elderly, and families in need.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow border-indigo-500 bg-indigo-500 text-white border">
                            <div className="collapse-title text-lg lg:text-xl font-medium">A Simple Act, A Huge Impact</div>
                            <div className="collapse-content">
                                <p tabIndex={0}>It might be just a sweater to you—but to someone without one, it’s a gift of warmth and compassion. Small donations make a big difference.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/6" data-aos="fade-up-left">
                        <img src="https://winter-cloth-donation.netlify.app/assets/Gorkha-10-oCKtVyL6.jpg" className="rounded-md" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;