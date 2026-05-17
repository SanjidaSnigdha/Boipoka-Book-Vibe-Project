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
 const addToStoreDB = (id) =>{

 }