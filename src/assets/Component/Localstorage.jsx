import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const savedataToLocalStorage = (book) => {
    const saveData = JSON.parse(localStorage.getItem("read")) || [];
    console.log(saveData)
    const isexist = saveData.find(item => item.bookId === book.bookId);
    console.log(isexist)
    if (isexist) {

        toast.warning('You have already added this book to your read list')

    } else {
        saveData.push(book)
        localStorage.setItem('read', JSON.stringify(saveData))

        toast.success('successfully added this book to your read list')
    }

    <ToastContainer />
}



export const savedataForWishlist = (book) => {


    const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
    const readData = JSON.parse(localStorage.getItem('read')) || [];

    const isExistInWishlist = wishlistData.find(item => item.bookId === book.bookId);
    const isExistInRead = readData.find(item => item.bookId === book.bookId);

    if (isExistInWishlist) {
        // alert('You have already added this book to your wishlist.');
        toast.warning("You have already added this book to your wishlist.");
    } else if (isExistInRead) {
        toast.warning("You've already added this book to your read list. You cannot add it to your wishlist.");
    } else {
        wishlistData.push(book);
        localStorage.setItem("wishlist", JSON.stringify(wishlistData));
        toast.success("Successfully added this book to your wishlist.");
    }
}


export const readdataFromLocalSorage = () => {

    const defaultData = JSON.parse(localStorage.getItem("read")) || [];
    return defaultData
}
export const wishlistdataFromLocalSorage = () => {

    const defaultData = JSON.parse(localStorage.getItem("wishlist")) || [];
    return defaultData
}