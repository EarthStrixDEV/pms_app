import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div>
        <nav className='flex flex-row justify-between items-center px-3 bg-white rounded-tl-md rounded-tr-md'>
            <div className='flex flex-row items-center text-slate-700'>
                <FontAwesomeIcon icon={faGlobeAsia} size='1x' />
                <h2 className='font-bold mx-2 text-lg'>Global Planning System</h2>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='p-1 mx-3 font-semibold text-green-600 hover:text-indigo-800'>
                    <FontAwesomeIcon icon={faChartBar} size='1x' />
                    <a href="/new_demand" className='p-5'>New Demand</a>
                </div>
                <div className='p-1 mx-3 font-semibold text-green-600 hover:text-indigo-800'>
                    <FontAwesomeIcon icon={faEdit} size='1x' />
                    <a href="/order_management" className='p-5'>Order Management</a>
                </div>
                <div className='p-1 mx-3 font-semibold text-green-600 hover:text-indigo-800'>
                    <FontAwesomeIcon icon={faCartShopping} size='1x'/>
                    <a href="/po" className='p-5'>PO/Global Draw</a>
                </div>
                <div className='p-1 mx-3 font-semibold text-green-600 hover:text-indigo-800'>
                    <FontAwesomeIcon icon={faCalendarCheck} size='1x'/>
                    <a href="/capacity_smoothing" className='p-5'>Capacity Smoothing</a>
                </div>
                <div className='p-1 mx-3 font-semibold text-green-600 hover:text-indigo-800'>
                    <FontAwesomeIcon icon={faCheckToSlot} size='1x' />
                    <a href="material_preparation" className='p-5'>Material Preparation</a>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <FontAwesomeIcon icon={faBell} size='1x' className='mx-3 cursor-pointer hover:text-orange-400 text-black p-5' /> 
                <FontAwesomeIcon icon={faArrowRightFromBracket} size='1x' className='mx-3 cursor-pointer hover:text-orange-400 text-black p-5' />
                <div className='flex flex-row'>
                    <img src="" alt="" />
                    <h2>MUS</h2>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar