import { FaUserFriends } from "react-icons/fa";
import { BsFileEarmarkPdf } from "react-icons/bs";

const Read2 = ({ item }) => {


    const { bookName, author, image, tags, yearOfPublishing, publisher, totalPages, category, rating } = item

    return (
        <div>
            <div className="card lg:card-side  bg-base-100 shadow-xl">
                <figure><img className="w-96 rounded-3xl" src={image} alt="Movie" /></figure>
                <div className="card-body space-y-10">
                    <div>
                        <h2 className="card-title">{bookName}</h2>
                        <p > By : {author}</p>
                    </div>

                    <div className=" lg:flex justify-start items-center gap-x-5">
                        <h2>Tag : </h2>
                        <div className="lg:space-x-5">
                            {
                                tags.map(item => <button className="btn"> {item}</button>)
                            }
                        </div>
                        <div>
                            <span></span>
                            <p>Year of publishing : {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="lg:flex justify-start items-center gap-5">
                        <div className="flex justify-center items-center gap-3">
                            <FaUserFriends></FaUserFriends>
                            <p>Publishar :{publisher}</p>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <BsFileEarmarkPdf></BsFileEarmarkPdf>
                            <p> Page : {totalPages}</p>
                        </div>
                    </div>
                    <hr className=" border-b border-dashed border-gray-400" />
                    <div className="card-actions justify-start">
                        <button className="btn "> Catagory :{category}</button>
                        <button className="btn "> Rating :{rating}</button>
                        <button className="btn bg-green-500 rounded-3xl text-white">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Read2;