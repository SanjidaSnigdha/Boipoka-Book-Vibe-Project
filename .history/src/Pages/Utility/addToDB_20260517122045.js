const getStoreBook = () => {

    const storeBookSTR = localStorage.getItem("readList");

    if (storeBookSTR) {
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;
    }
    else{
        return [];
    }



}

// wishList
const getStoreWishBook = ()=>{

    const storeWishBookSTR = localStorage.getItem("wishList")

}
 const addToStoreDB = (id) =>{
    const storeBookData = getStoreBook();

    if (storeBookData.includes(id)) {
        alert("bhai ei id already exist")
    }else{
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readList", data)
    }

 }
//  wishList
const addWishBookToStoreDB = (id) =>{

}
 export { addToStoreDB };