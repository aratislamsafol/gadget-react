import { toast } from 'react-toastify';
const getStoreList = () => {
    const storeListStr = localStorage.getItem('wishlist');
    if(storeListStr) {
        const storedList = JSON.parse(storeListStr);
        return storedList;
    }else {
        return [];
    }
}

const addToStoreList = (id) => {
    const storedList = getStoreList();
    if(storedList.includes(id)){
        toast('Do not Add this, Already Exist');
    }else {
        storedList.push(id);
        const storeListStr = JSON.stringify(storedList);
        localStorage.setItem('wishlist', storeListStr);
        toast('this book is added');
    }
}

const removeFromStoreList = (id) => {
    const storedList = getStoreList();
    const updatedList = storedList.filter(itemId => itemId !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedList));
}

export {addToStoreList , getStoreList, removeFromStoreList};