import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context/Context'

export const Page = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [current, setCurrent] = useState(8)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Fetch();
    }, [])

    const Fetch = async () => {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        if (!data.error) {
            setLoading(false);
        }
        setData(data.products);
    }
    //console.log(data);

    const lastPage = current * page;
    const firstPage = lastPage - current;

    const newData = data.slice(firstPage, lastPage)

    // console.log(newData);
    // console.log(page)

    const {items,addItems} = useContext(GlobalContext);

    return (
        <div>
            {loading ?
                <span className="loading loading-spinner loading-lg"></span>
                :
                <div>
                    <div className='flex flex-wrap justify-center'>
                        {newData.map((item) => {
                            return (
                                <div key={item.id} className='flex flex-col items-center justify-center gap-2 border-2 border-slate-800 m-2 max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 py-3'>
                                    <img src={item.images[0]} alt="" className='h-full w-full border-2' />
                                    <p>{item.title}</p>
                                    <div className='flex w-full items-center justify-around'>
                                        <p>Price:${item.price}</p>
                                        <button onClick={()=>addItems(item.id,item.price)} className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">Add{(items[item.id] !==undefined && items[item.id] !==0) && <p>({items[item.id]})</p>}</button>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                    <div className='flex justify-between p-4 '>
                        <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' disabled={page === 1} onClick={() => setPage(page - 1)}>prev</button>
                        <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' disabled={page === Math.round(data.length / 8)} onClick={() => setPage(page + 1)}>next</button>

                    </div>

                </div>
            }


        </div>
    )
}
