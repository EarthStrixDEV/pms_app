import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
function Chart() {
    const [data ,setData] = useState(30)
  return (
    <div>
        <div className='flex flex-row items-center justify-between rounded-md bg-white p-3'>
            <div className='flex flex-row bg-slate-300 border-2 border-slate-300 p-3 rounded-md'>
                <div className='flex flex-col items-start mr-3'>
                    <h2 className='bg-slate-500 text-white px-5 py-2 font-semibold rounded-md text-sm'>Add OOR</h2>
                    <p className='text-sm text-slate-600 font-medium my-2'>Pending Submit: </p>
                </div>
                <div className='w-24 h-24'>
                    <CircularProgressbar value={data} text={data.toString()} minValue={0} maxValue={50} />
                </div>
            </div>
            <div className='flex flex-row bg-slate-300 border-2 border-slate-300 p-3 rounded-md'>
                <div className='flex flex-col items-start mr-3'>
                    <div className='flex flex-row justify-center items-center'>
                        <h2 className='bg-green-600 text-white px-5 py-2 font-semibold rounded-md text-sm'>Order Below MOQ</h2>
                        <p className='px-2 font-medium text-slate-600 text-sm'>Pending</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p className='text-sm text-slate-600 font-medium my-2'>Join: </p>
                        <p className='text-lg text-slate-700 font-bold mx-2'>10</p>
                        <p className='text-sm text-slate-600 font-medium my-2'>Response: </p>
                        <p className='text-lg text-slate-500 font-bold mx-2'>10</p>
                    </div>
                </div>
                <div className='w-24 h-24'>
                    <CircularProgressbar value={data} text={data.toString()} minValue={0} maxValue={50} />
                </div>
            </div>
            <div className='flex flex-row bg-slate-300 border-2 border-slate-300 p-3 rounded-md'>
                <div className='flex flex-col items-start mr-3'>
                    <div className='flex flex-row justify-center items-center'>
                        <h2 className='bg-slate-600 text-white px-5 py-2 font-semibold rounded-md text-sm'>Order Submitted</h2>
                        <p className='px-2 font-medium text-slate-600 text-sm'>Pending for ETD</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p className='text-sm text-slate-600 font-medium my-2'>MIL: </p>
                        <p className='text-lg text-slate-700 font-bold mx-2'>10</p>
                        <p className='text-sm text-slate-600 font-medium my-2'>MZL: </p>
                        <p className='text-lg text-slate-500 font-bold mx-2'>10</p>
                        <p className='text-sm text-slate-600 font-medium my-2'>MTC: </p>
                        <p className='text-lg text-indigo-500 font-bold mx-2'>10</p>
                    </div>
                </div>
                <div className='w-24 h-24'>
                    <CircularProgressbar value={data} text={data.toString()} minValue={0} maxValue={50} />
                </div>
            </div>
            <div className='flex flex-row bg-slate-300 border-2 border-slate-300 p-3 rounded-md'>
                <div className='flex flex-col items-start mr-3'>
                    <div className='flex flex-row justify-center items-center'>
                        <h2 className='bg-blue-600 text-white px-5 py-2 font-semibold rounded-md text-sm'>Sharing</h2>
                        <p className='px-2 font-medium text-slate-600 text-sm'>Pending Sharing</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p className='text-sm text-slate-600 font-medium my-2'>Request: </p>
                        <p className='text-lg text-slate-700 font-bold mx-2'>10</p>
                        <p className='text-sm text-slate-600 font-medium my-2'>Response: </p>
                        <p className='text-lg text-slate-500 font-bold mx-2'>10</p>
                    </div>
                </div>
                <div className='w-24 h-24'>
                    <CircularProgressbar value={data} text={data.toString()} minValue={0} maxValue={50} />
                </div>
            </div>
            <div className='flex flex-row bg-slate-300 border-2 border-slate-300 p-2 rounded-md'>
                <div className='flex flex-col items-start mr-3'>
                    <div className='flex flex-row justify-center items-center'>
                        <h2 className='bg-gray-400 text-white px-5 py-2 font-semibold rounded-md text-sm'>Issue PO</h2>
                        <p className='px-2 font-medium text-slate-600 text-sm'>Pending Issue PO</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p className='text-sm text-slate-600 font-medium my-2'>Pass Due: </p>
                        <p className='text-lg text-red-500 font-bold mx-2'>10</p>
                        <p className='text-sm text-slate-600 font-medium my-2'>Awaiting: </p>
                        <p className='text-lg text-slate-500 font-bold mx-2'>10</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <p className='text-sm text-slate-600 font-medium my-2'>Reached LT: </p>
                        <p className='text-lg text-orange-500 font-bold mx-2'>10</p>
                        <p className='text-sm text-slate-600 font-medium my-2'>Conf. Liab: </p>
                        <p className='text-lg text-slate-400 font-bold mx-2'>10</p>
                    </div>
                </div>
                <div className='w-24 h-24'>
                    <CircularProgressbar value={data} text={data.toString()} minValue={0} maxValue={50} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Chart