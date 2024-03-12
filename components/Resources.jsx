import React from 'react'

const Resources = () => {
  return (
    <div className='text-black p-[2rem]'>

      <figure className='flex items-center gap-8 p-[1rem]'>
        <p className='font-bold'>Resources to:</p>
        <aside className='rounded-full border-black border-[1px] px-[2rem] p-[0.5rem]'>
          DEX trading
        </aside>
        <aside className='rounded-full border-[#808080] text-[#808080] border-[1px] px-[2rem] p-[0.5rem]'>
          Smartchain wallet
        </aside>
        <aside className='rounded-full border-[#808080] text-[#808080] border-[1px] px-[2rem] p-[0.5rem]'>
          Token tracking
        </aside>
      </figure>
      <figure className='flex items-center justify-between p-[1rem]'>
        <aside className='w-[200px] p-[0.5rem] text-[14px] shadow-sm bg-[#F9F9F9] border-[1px] rounded-md border-[#1AABF4]'>
          Understanding dencentralized exchanges
        </aside>
        <aside className='w-[200px] p-[0.5rem] text-[14px] shadow-sm bg-[#F9F9F9] border-[1px] rounded-md border-[#1AABF4]'>
          Exploring the benefits of DEX trading
        </aside>
        <aside className='w-[200px] p-[0.5rem] text-[14px] shadow-sm bg-[#F9F9F9] border-[1px] rounded-md border-[#1AABF4]'>
          Top DEX trading strategies for success
        </aside>
        <aside className='w-[200px] p-[0.5rem] text-[14px] shadow-sm bg-[#F9F9F9] border-[1px] rounded-md border-[#1AABF4]'>
          Navigatting liquidity on Decentralized Exchanges
        </aside>
        <aside className='w-[200px] p-[0.5rem] text-[14px] shadow-sm bg-[#F9F9F9] border-[1px] rounded-md border-[#1AABF4]'>
          Ensuring security: Best practices for DEX trading
        </aside>
      </figure>
    </div>
  )
}

export default Resources
