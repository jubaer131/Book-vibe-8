import { useLoaderData, useParams } from "react-router-dom";
import { savedataForWishlist, savedataToLocalStorage } from "../assets/Component/Localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const BookDetails = () => {
    const Books = useLoaderData()
    const { bookId } = useParams()
    const idint = parseInt(bookId)

    const book = Books.find(book => book.bookId === idint)

    const { author, bookName, review, tags, totalPages, category, publisher, rating, yearOfPublishing, image } = book




    const handleReadBook = () => {

        savedataToLocalStorage(book)
    }
    const saveWishlist = () => {
        savedataForWishlist(book)
    }


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl gap-6 px-8 mt-20">
            <div className="lg:w-6/12 ">
                <figure><img className="w-full h-[650px] bg-cover bg-no-repeat" src={image} alt="Album" /></figure>
            </div>

            <div className=" lg:w-6/12">
                <div className="  mx-auto space-y-16 ">
                    <article className="space-y-4  text-black">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{bookName}</h1>
                            <p>by: {author}</p>
                        </div>

                        <hr className=" border-t border-dashed border-gray-400" />
                        <p>{category}</p>
                        <hr className=" border-b border-dashed border-gray-400" />
                        <p>review : {review}</p>

                    </article>
                    <div>
                        <div className="flex flex-wrap items-center justify-start gap-2 mb-5">
                            <h2>Tag :</h2>


                            {
                                tags.map((tag, index) => <button key={index} className="text-green-400 btn">{tag}</button>)
                            }

                        </div>
                        <div className="space-y-6">
                            <hr className=" border-t border-dashed border-gray-400" />
                            <h4 className="text-lg font-semibold">Related posts</h4>
                            <p>Number of page : {totalPages}</p>
                            <p>publisher : {publisher}</p>
                            <p>Year of publishing : {yearOfPublishing}</p>
                            <p>Rating :{rating}</p>
                            <div className="space-x-5">
                                <button onClick={handleReadBook} className="btn">Read </button>
                                <button onClick={saveWishlist} className="btn text-green-400">Wishlist</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;