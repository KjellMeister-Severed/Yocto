import React from 'react'
import { Link } from 'react-router-dom'

export default function Values() {
    return (
        <section class="bg-gray-800 h-full">
            <div class="py-8 px-4 mx-auto max-w-screen-xl md:text-center lg:py-16 lg:px-12">
                <div className='h-56 rounded-lg bg-opacity-90' style={{ backgroundImage: 'url("./corp.jpg")', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <div className='w-full h-full backdrop-blur-sm flex flex-col items-center justify-center'>
                        <div className='h-20 w-20 z-10' style={{ backgroundImage: 'url("./cyc.png")', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    </div>
                </div>
                <h1 class="mb-4 mt-5 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Values</h1>
                <p className='font-bold mt-10 text-white'>Our most important values are:</p>
                <p class="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Integrity, honesty, excellence, fairness and teamwork.</p>
                <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link to="/office" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Get in touch
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}