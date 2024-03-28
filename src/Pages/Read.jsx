import { useEffect, useState } from "react";
import { readdataFromLocalSorage } from "../assets/Component/Localstorage";
import Read2 from "../assets/Component/Read2";

const Read = () => {

    const [readdata, setreaddata] = useState([])
    useEffect(() => {
        const data = readdataFromLocalSorage()
        setreaddata(data)


    }, [])

    return (
        <div className="space-y-5">

            {
                readdata.map(item => <Read2 item={item} key={item.bookId}></Read2>)
            }
        </div>

    );
};

export default Read;