import '../../globals.css'
import Link from 'next/link'


export default function Home() {
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto md:px-6 lg:px-8 md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-xl font-semibold text-gray-900 dark:text-white">
                        <h2>Supplier Dash</h2>
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-4 md:p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-lg md:text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                                Sign-up to our system
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div className="md:flex md:space-x-4">
                                    <div className="md:w-1/2">
                                        <label htmlFor="sup_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                                        <input type="text" name="sup_name" id="sup_name" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div className="md:w-1/2">
                                        <label htmlFor="sup_phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                        <input type="text" name="sup_phone" id="sup_phone" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="sup_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Email</label>
                                    <input type="email" name="sup_email" id="sup_email" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="sup_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="sup_password" id="sup_password" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="sup_address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Address</label>
                                    <input type="text" name="sup_address" id="sup_address" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                              
                                <Link href="/supplier/dash">
                                    <div className="flex justify-center items-center mt-5">
                                        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-12 py-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign Up</button>
                                    </div>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
