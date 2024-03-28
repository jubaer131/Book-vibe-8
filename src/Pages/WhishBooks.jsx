import { useEffect, useState } from "react";
import { wishlistdataFromLocalSorage } from "../assets/Component/Localstorage";
import WhishBook2 from "../assets/Component/WhishBook2";

const WhishBooks = () => {

    const [whishBooks, setwhishBooks] = useState([])
    useEffect(() => {
        const data = wishlistdataFromLocalSorage()
        setwhishBooks(data)


    }, [])


    return (
        <div>
            {
                whishBooks.map(item => <WhishBook2 item={item} key={item.bookId}></WhishBook2>)
            }
        </div>
    );
};

export default WhishBooks;