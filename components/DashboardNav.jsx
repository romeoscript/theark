import React from 'react'


const DashboardNav = () => {
    return (
        <div className='h-[80px] fixed w-full flex items-center  z-100 bg-[#060853] '>
            
            <figure className='ml-[300px] '>
                <label className="input input-bordered flex text-black items-center bg-white gap-2 w-[300px]">
                    <input type="text" className="grow " placeholder="Search wallet/token" />
                    <svg color='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </figure>
            <figure></figure>

        </div>
    )
}

export default DashboardNav
