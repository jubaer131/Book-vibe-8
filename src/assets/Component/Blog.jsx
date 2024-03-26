import { Link } from "react-router-dom";


const Blog = ({ book }) => {
    const { bookId, author, bookName, tags, category, rating, image } = book
    return (
        <Link key={bookId} to={`/book/${bookId}`} className="p-6">
            <article className="flex flex-col bg-[#1313130d] ">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-cover w-full h-52 bg-[#1313130d]" src={image} />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <div className="flex gap-5">

                        {
                            tags.map((tag, index) => <button key={index} className="text-green-400 btn">{tag}</button>)
                        }
                    </div>

                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{bookName}</h3>
                    <p>By : {author}</p>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                        <span>{category}</span>
                        <span>{rating}</span>
                    </div>
                </div>
            </article>
        </Link>



    );
};

export default Blog;