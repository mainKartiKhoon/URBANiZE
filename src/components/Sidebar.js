import React from 'react'
import { HiArrowLeftEndOnRectangle } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

const Sidebar = ({ }) => {
    return (
        <aside className='h-screen'>
            <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
                <div className='p-4 pb-2 flex justify-between items-center'>
                    <div className='text-[30px] text-white font-bold'>URBANiZE</div>
                    <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
                        <HiArrowLeftEndOnRectangle />
                    </button>
                </div>
                <ul className='flex-1 px-3'>
                    {/* {children} */}
                </ul>
                <div className='border-t flex p-3'>
                    <FaRegUser  className='w-10 h-10 rounded-md'/>
                    <div className={`flex justify-between items-center w-52 ml-3`}>
                        <div className='leading-4'>
                            <h4 className='font-semibold'>John Doe</h4>
                            <span className='text-xs text-gray-600'>johndoe@gmail.com</span>
                        </div>
                        <SlOptionsVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar
