import { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogs = () => {

    const [books, setbooks] = useState([])
    useEffect(() => {
        fetch('pakage.json')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])




    return (

        <div className="container  mx-auto space-y-8 lg:mt-20 ">
            <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold">Books</h2>

            </div>

            <div className="grid grid-cols-1 gap-y-[50px]  gap-x-5 md:grid-cols-2 lg:grid-cols-3 p-0  rounded-3xl">


                {
                    books.map((book) => <Blog book={book}></Blog>)
                }
            </div>

        </div>

    );
};

export default Blogs;