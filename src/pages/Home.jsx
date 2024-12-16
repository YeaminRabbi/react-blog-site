import React from "react";

export default function Home() {
    return (
        <>
            <section className="bg-dark">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7 animate__animated animate__fadeInUp">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Speak to Sales
                        </a>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex animate__animated animate__fadeInRight animate__slower">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
                    </div>
                </div>
            </section>

           

            <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    <div class="text-center">
                        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Blog Section</h1>

                        <p class="max-w-lg mx-auto mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                            quia tempore delect
                        </p>
                    </div>
                        
                    <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                        <div data-aos="fade-up">
                            <img class="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                    <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                        All the features you want to know
                                    </a>

                                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                        laudantium quia tempore delect
                                    </p>

                                    <p class="mt-3 text-sm text-blue-500">21 October 2019</p>
                                </div>
                        </div>

                        <div data-aos="fade-up">
                            <img class="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                    <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                        How to use sticky note for problem solving
                                    </a>

                                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                        laudantium quia tempore delect
                                    </p>

                                    <p class="mt-3 text-sm text-blue-500">20 October 2019</p>
                                </div>
                        </div>

                        <div data-aos="fade-up">
                            <img class="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                    <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                        How to use sticky note for problem solving
                                    </a>

                                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                        laudantium quia tempore delect
                                    </p>

                                    <p class="mt-3 text-sm text-blue-500">20 October 2019</p>
                                </div>
                        </div>

                        <div data-aos="fade-up">
                            <img class="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                    <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                        How to use sticky note for problem solving
                                    </a>

                                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                                        laudantium quia tempore delect
                                    </p>

                                    <p class="mt-3 text-sm text-blue-500">20 October 2019</p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
