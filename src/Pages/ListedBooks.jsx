

const ListedBooks = () => {
    return (
        <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Books</div>
            <div className="grid h-20 card  rounded-box place-items-center"><button className="btn bg-green-500 text-white">Sort By</button></div>
        </div>
    );
};

export default ListedBooks;