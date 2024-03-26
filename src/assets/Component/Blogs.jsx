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
        <section className="py-6 sm:py-12  text-black-100 ">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>

                <div className="grid grid-cols-1 gap-y-[50px]  gap-x-5 md:grid-cols-2 lg:grid-cols-3 p-0">


                    {
                        books.map((book) => <Blog book={book}></Blog>)
                    }
                </div>

            </div>
        </section >
    );
};

export default Blogs;