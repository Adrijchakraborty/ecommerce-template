import React, { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext();

const Context = ({children}) => {
    const [items,setItems] = useState([]);
    const [data,setData] = useState([]);
    const [newItems,setNewItems] = useState([]);
    const [loading,setLoading] = useState(false);
    const [total,setTotal] = useState(0);
    const [count,setCount] = useState(0);
    const [search,setSearch] = useState("");


    useEffect(() => {
        Fetch();
    },[])

    const Fetch = async () => {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        if (!data.error) {
            setLoading(false);
        }
        setData(data.products);
        console.log(data.products)
    }

    const addItems = (newitems,p)=>{ 
        let val =  items[newitems] ;
        if(val===undefined){
            setItems({...items,[newitems] : 1});
            val=1;
        }else{
            setItems({...items,[newitems] : val+1});
        }
        setTotal((prev)=>(prev+p));
        setCount((prev)=>(prev+1));
    }
    // console.log(count);
    const deleteItems = (newitems,p)=>{ 
        let val =  items[newitems] ;
        setItems({...items,[newitems] : val-1});
        setTotal((prev)=>prev-p);
        setCount((prev)=>(prev-1));
    }

    const deleteAll = ()=>{
        setItems([]);
        setTotal(0)
    }

    

    const filterItems = (query)=>{
        setNewItems(data.filter(item => item.title.toLowerCase().includes(query.toLowerCase())));
        setSearch(query);
    }

    // console.log(newItems)


  return (
    <GlobalContext.Provider value={{addItems,deleteItems,deleteAll,items,total,data,loading,filterItems,newItems,search,count}}>{children}</GlobalContext.Provider>
  )
}

export default Context