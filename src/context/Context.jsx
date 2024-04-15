import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

const Context = ({children}) => {
    const [items,setItems] = useState([]);
    const [total,setTotal] = useState(0);


    const addItems = (newitems,p)=>{ 
        let val =  items[newitems] ;
        if(val===undefined){
            setItems({...items,[newitems] : 1});
            val=1;
        }else{
            setItems({...items,[newitems] : val+1});
        }
        setTotal(total+p)
        // console.log(val,p)
    }
    const deleteItems = (newitems,p)=>{ 
        let val =  items[newitems] ;
        setItems({...items,[newitems] : val-1});
        setTotal(total-p)
    }

    const deleteAll = ()=>{
        setItems([]);
        setTotal(0)
    }


  return (
    <GlobalContext.Provider value={{addItems,deleteItems,deleteAll,items,total}}>{children}</GlobalContext.Provider>
  )
}

export default Context