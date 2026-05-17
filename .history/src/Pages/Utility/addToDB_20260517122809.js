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

    const storeWishBookSTR = localStorage.getItem("wishList");
    if(storeWishBookSTR){
        const storeWishBookData = JSON.parse(storeWishBookSTR);
        return storeWishBookData;
    }
    else{
       return []; 
    }

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
    const storeWishBookData = getStoreWishBook();
    if(storeWishBookData.includes(id)) {
        alert('already exist')

    }else{
        storeWishBookData.push(id);
    }

}
 export { addToStoreDB };