

const Banner = () => {
    return (
        <section className="bg-[#1313130d] text-black-100 shadow-sm rounded-xl">
            <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:gap-10">
                <div className="flex flex-col justify-center items-center p-6  rounded-sm lg:w-6/12  space-y-8">
                    <h1 className="text-6xl font-bold lg:w-[526px] leading-none sm:text-4xl lg:text-left">Books to freshen <br /> up your booksshelf

                    </h1>

                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start lg:lg:w-[526px]">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900 "><button>View the lis</button>t</a>

                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co/mh5hMBK/thought-catalog-B1d-QCWz0-U2w-unsplash-1.jpg" alt="" className=" h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 bg-cover w-full" />
                </div>
            </div>
        </section>
    );
};

export default Banner;