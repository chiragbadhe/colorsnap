import React from 'react'

type Props = {}

function Weather({}: Props) {
  return (
    <div className=''>
      <div className='p-24 rounded-2 bg-cyan-500'>
        <p className='flex flex-col'>
          <span className='text-md'>
            Mostly Sunny
          </span>
          <span className='text-xs'>
            Now
          </span>
        </p>
        <p>
          <span className='text-[120px] font-bold'>
            31
          </span>
        </p>

      </div>

    </div>
  )
}

export default Weather