import Container from "../container";
import FooterList from "./footerList";
import Link from "next/link";
import {MdFacebook} from "react-icons/md";
import {AiFillTwitterCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Footer = () => {
    return ( <footer className="bg-[#032B76] text-white text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Categories</h3>
                    <Link href='#'>Technology</Link>
                    <Link href='#'>Cookware</Link>
                    <Link href='#'>Furniture</Link>
                    <Link href='#'>Clothing</Link>
                    <Link href='#'>Books</Link>
                    <Link href='#'>Sports</Link>
                    <Link href='#'>Office Supplies</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Customer Service</h3>
                    <Link href='#'>Contact Us</Link>
                    <Link href='#'>Reciption Policy</Link>
                    <Link href='#'>Watches</Link>
                    <Link href='#'>FAQs</Link>
                </FooterList>
                <FooterList>
                    <div className="w-full mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">About Us</h3>
                        <p className="mb-2">College Market is your one-stop online platform designed 
                        exclusively for college students within the same campus to effortlessly 
                        buy and sell goods. Whether you are looking to declutter your dorm 
                        room or find affordable textbooks, our user-friendly 
                        website has you covered.
                        </p>
                        <p>&copy; {new Date().getFullYear()} College Market. All rights reserved.</p>
                    </div>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Follow Us</h3>
                    <div className="flex gap-2">
                        <Link href='#'>
                            <MdFacebook size={24}/>
                        </Link>
                        <Link href='#'>
                            <AiFillTwitterCircle size={24}/>
                        </Link>
                        <Link href='#'>
                            <AiFillInstagram size={24}/>
                        </Link>
                        <Link href='#'>
                            <AiFillYoutube size={24}/>
                        </Link>
                    </div>
                </FooterList>
            </div>
        </Container>
    </footer> );
}
 
export default Footer;