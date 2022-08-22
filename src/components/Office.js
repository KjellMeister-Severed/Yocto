import React from 'react'
import { Link } from 'react-router-dom'

export default function Office() {
    return (
        <section class="bg-gray-800 h-full">
            <div class="py-8 px-4 mx-auto max-w-screen-xl md:text-center lg:py-16 lg:px-12">
                <div className='h-56 rounded-lg bg-opacity-90' style={{ backgroundImage: 'url("./corp.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <div className='w-full h-full backdrop-blur-sm flex flex-col items-center justify-center'>
                        <div className='h-20 w-20 z-10' style={{ backgroundImage: 'url("./cyc.png")', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    </div>
                </div>
                <h1 class="mb-4 mt-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Contact Info</h1>
                <p className='font-bold mt-10 text-white text-left'>Address and Contact info:</p>
                <div className='block md:flex text-left mt-5 justify-center'>
                    <p class="mb-8 text-lg font-normal w-full text-gray-400 lg:text-xl sm:px-16 dark:text-gray-400">
                        <span>YoctoConsult <br />
                            Knaagreepstraat 18 <br />
                            8890 Moorslede <br />
                            Belgium <br /></span>
                    </p>
                    <p class="mb-8 text-lg font-normal w-full text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        <span>Phone 003256504038<br />
                            Mobile 0032473698706 <br />
                            Fax 003256505350 <br /></span>
                        <span>
                            Email
                            <a className='inline ml-2 hover:underline text-white' href="mailto:info@yoctoconsult.be">info@yoctoconsult.be</a>

                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}