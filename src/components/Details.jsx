import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/Context'
import Display from './Display';

const Details = () => {
    const { data,items ,addItems } = useContext(GlobalContext);
    const [item, setItem] = useState()
    const currentUrl = window.location.href;

    // Split the URL by forward slashes (/)
    const parts = currentUrl.split('/');


    // Get the last part of the URL
    const lastPart = parts[parts.length - 1];

    // Convert the last part to a number
    const lastNumber = parseInt(lastPart);

    // Now you have the last number from the URL
    // console.log(lastNumber); // Output: 8

    useEffect(() => {
        setItem(data.filter(d => d.id === lastNumber))
    }, [])

    
    // item!==undefined && console.log(item[0]);
    return (
        <div >
            {item === undefined && <span className="loading loading-spinner loading-xs"></span>}
            {item !== undefined &&
                <div className='sm:flex gap-3 p-5'>
                    <div className='flex items-center flex-1'>
                        <Display image={item[0].images}/>
                    </div>
                    <div className='my-8 flex-1 px-8 sm:px-16'><p className='text-3xl font-semibold text-center mb-8'>{item[0].title}</p><p>{item[0].description}</p>
                    <button onClick={()=>addItems(item[0].id,item[0].price)} className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">Add{(items[item[0].id] !==undefined && items[item[0].id] !==0) && <p>({items[item[0].id]})</p>}</button>
                    </div>
                </div>}
        </div>
    )
}

export default Details
