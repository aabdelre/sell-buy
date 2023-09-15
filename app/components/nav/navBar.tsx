import Container from "../container";
import Link from "next/link";
import { Redressed } from "next/font/google";

const redressed = Redressed({subsets: ['latin'], weight: ["400"]})

const NavBar = () => {
    return ( <div className="sticky top-0 w-full bg-[#032B76] z-30 shadow-sm text-white">
        <div className="py-4 border-w-[1px]">
            <Container>
                <div className="flex items-center justify-between gap-3 md:gap-0">
                    <Link href="/" className={`${redressed.className} font-bold text-2xl`}>College Market</Link>
                    <div className="hidden md:block">SearchBox</div>
                    <div className="flex items-center gap-8 md:gap-12">
                        <div>Cart</div>
                        <div>UserMenu</div>
                    </div>
                </div>
            </Container>
        </div>
    </div> 
    );
}
 
export default NavBar;