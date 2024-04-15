import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context/Context'

const Cart = () => {
    const { total, items, addItems, deleteItems, deleteAll } = useContext(GlobalContext);

    const [data, setData] = useState()

    useEffect(() => {
        callApi();
    }, [])

    const callApi = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        setData(data.products)
    }
    // console.log(data)
    return (
        <div>
            {data !== undefined && data.map(products => {
                if (items[products.id] != 0 && items[products.id] !== undefined) {
                    return <div key={products.id} className='flex justify-between items-center p-3 border-b border-gray-300'>
                        <p className="flex-1">{products.title}</p>
                        <div className="flex items-center">
                            <button onClick={() => deleteItems(products.id, products.price)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">-</button>
                            <p className="mx-2">{items[products.id]}</p>
                            <button onClick={() => addItems(products.id, products.price)} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">+</button>
                        </div>
                    </div>
                }
            })}
            {total == 0 ? <p className='text-center font-serif'>Your cart is empty</p> : <div className='mt-5 p-3'>Total is <p className='text-red-700'>${total}</p><button className='uppercase bg-red-600 p-2 rounded-lg hover:opacity-80 mt-5' onClick={() => deleteAll()}>delete all</button></div>}
        </div>
    );
};

export default Cart