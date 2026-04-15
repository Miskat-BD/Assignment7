import React from 'react';
import footerImg from '../../assets/images/logo-xl.png'
import instaImg from '../../assets/images/instagram.png'
import fbImg from '../../assets/images/facebook.png'
import twitterImg from '../../assets/images/twitter.png'

const Footer = () => {
    return (
        <div className='bg-[#244D3F] '>
            {/* Footer top */}
            <div className="pt-16 text-center space-y-4 border-b border-b-gray-400 container mx-auto">
                <div className="flex justify-center">
                    <img src={footerImg} alt="" className='max-sm:w-48'/>
                </div>
                <h1 className='text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</h1>
                <p className='text-white text-xl font-medium'>Social Links</p>
                <div className="flex justify-center gap-3 pb-10">
                    <img src={instaImg} alt="" />
                    <img src={fbImg} alt="" />
                    <img src={twitterImg} alt="" />
                </div>

            </div>

            {/* Footer down */}
            <div className="container mx-auto">
                <footer className="footer sm:footer-horizontal text-neutral-content items-center pt-8 p-4">
                    <aside className="grid-flow-col items-center ">
                        <p className='text-[#FAFAFA]'> © {new Date().getFullYear()} KeenKeeper. All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <a>

                            Privacy Policy
                        </a>
                        <a>
                            Terms of Service
                        </a>
                        <a>
                            Cookies
                        </a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;