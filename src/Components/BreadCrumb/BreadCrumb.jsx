import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from "react-icons/fi"
import { AiFillHome } from "react-icons/ai"
const BreadCrumb = memo(
    ({ links }) => {
        return (
            <div className='container my-5 bg-white text-gray p-4 rounded'>
                <ul className='flex gap-x-1 items-center'>
                    <AiFillHome className='text-xl' />
                    {links.map(link => {
                        console.log(link);
                        return (
                            <div className='flex items-center gp-x-1'>
                                <li>
                                    <Link to={link.to}>{link.title}</Link>
                                </li>
                                {links.length !== link.id ? (
                                    <FiChevronLeft />
                                ) :
                                    null
                                }
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
)
export default BreadCrumb