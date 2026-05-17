const getStoreBook = () => {

    const storeBookSTR = localStorage.getItem("readList");

    if (storeBookSTR) {
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;
    }



}
 const addToStoreDB = (id) =>{

 }