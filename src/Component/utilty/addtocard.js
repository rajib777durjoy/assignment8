
const gettoCardfun=()=>{
    const checkStorage=localStorage.getItem('product');
    if(checkStorage){
     const value=JSON.parse(checkStorage)
     return value;
    }
    else{
       return [] 
    }
}
const addtoCardfun=(id)=>{
 const getValue=gettoCardfun()
 if(getValue.includes(id)){
 }
 else{
    getValue.push(id);
    const LocalStore=JSON.stringify(getValue)
    localStorage.setItem('product',LocalStore)
    
 }
}

/// wish button //
const wishList=()=>{
   const CheckWishlist=localStorage.getItem("wishProduct");
   if(CheckWishlist){
      return JSON.parse(CheckWishlist)
   }
   else{
      return []
   }
}
const AddWishList=(value)=>{
  const wishItem=wishList();
  if(wishItem.includes(value)){
   
  }
  else{
   wishItem.push(value)
   const setWish=JSON.stringify(wishItem);
   localStorage.setItem("wishProduct",setWish)
  }
}
export {addtoCardfun,gettoCardfun,wishList,AddWishList,}