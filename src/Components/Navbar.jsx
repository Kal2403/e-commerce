import { Check, Info } from 'lucide-react';
import { Link } from "react-router";

const Navbar = () => {
    return (
        <div>
            <div className='navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full'>
                <div className='lg:container flex justify-between items-center'>
                    <p className='flex items-center gap-2 text-sm font-normal text-white capitalize'><Check />Free on all orders over $50</p>

                    <div className='navbar_top_right flex items-center gap-6'>
                        <select defaultValue="Server location" className='bg-none h-[30px] w-[70px] text-sm font-normal capitalize text-white'>
                            <option>eng</option>
                            <option>bangla</option>
                        </select>
                    </div>

                    <button><Link className='text-sm text-white font-normal capitalize'>Faqs</Link></button>
                    <button><Link className='flex items-center text-sm text-white font-normal capitalize'><Info />need help</Link></button>
                </div>
            </div>

            
        </div>
    )
}

export default Navbar;
