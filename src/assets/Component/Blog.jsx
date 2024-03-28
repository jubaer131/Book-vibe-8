import { Link } from "react-router-dom";
import { GoStar } from "react-icons/go";


const Blog = ({ book }) => {
    const { bookId, author, bookName, tags, category, rating, image } = book
    return (
        <Link key={bookId} to={`/book/${bookId}`} >

            <article className="flex flex-col shadow-lg p-6 rounded-3xl ">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="bg-cover w-full h-[300px] bg-[#1313130d] rounded-2xl" src={image} />
                </a>
                <div className="flex flex-col flex-1 ">
                    <div className="lg:flex gap-5 mt-5">

                        {
                            tags.map((tag, index) => <button key={index} className="text-green-400 btn">{tag}</button>)
                        }
                    </div>

                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{bookName}</h3>
                    <p>By : {author}</p>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                        <span>{category}</span>
                        <div className="flex justify-center items-center gap-3">

                            <span>{rating}</span>
                            <GoStar></GoStar>
                        </div>

                    </div>
                </div>
            </article>

        </Link>



    );
};

export default Blog;