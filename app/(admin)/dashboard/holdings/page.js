"use client"
import BeautifulTable from '@/components/Beautifultalbe'
import { useFetch } from '@/components/Hooks/useFetch'
import Loading from '@/components/Loading'
import React from 'react'

const Page = () => {
    const { data, isLoading } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/top-holdings`)

    if (isLoading) {
      return <Loading/>
    }

    console.log(data)

  return (
    <div className='w-[90%] m-auto '>
        <h2 className='text-2xl text-black text-start font-bold my-[2rem]'>Top Holdings</h2>
      <BeautifulTable data={data} />
    </div>
  )
}

export default Page
