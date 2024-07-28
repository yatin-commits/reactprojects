import React, { useState } from 'react'
import Loading from './loading';
// import '.'; // Adjust the path as necessary
export default function Tours({tours}) {
    const[readMore,setReadMore]=useState(false);
    let[toursData,setToursData]=useState(tours);
    

    const readmore=(e)=>
    {  
        setReadMore(!readMore);
        e.preventDefault();
    }

    const notIntrested=(index)=>
    {
        
            let final=toursData.filter((tours)=>tours.id!==index);
            
            setToursData(final)
            // setToursData(toursData)     
            
    }
    const refresh=()=>
    {
        setToursData(tours)
    }
  return (
        <>
            <h1 className='font-mono item-center text-[30px] underline  text-center' >Our Tours</h1>
            {
            toursData.length === 0 
            ? <><div className='p-4  flex flex-col text-[20px] text-center font-[poppins] '><span>No tours available</span><button className=' items-center border-2 text-white font-bold  rounded-md bg-blue-500 p-[5px] ' onClick={refresh}>Refresh</button></div></>:
            <div className='flex  justify-center items-center flex-col'>  
                {
                    toursData.map((data,index)=>
                    {
                        
                        return(
                            <>
                           
                            
                            <div className='border-2 border-black w-[100vh] m-5   flex text-center flex-col p-5'>

                            <img src={data.image} className='h-80'></img>

                            <div className='flex justify-between p-6 text-center items-center'>
                            <div className='font-[poppins] underline text-[20px]'>{data.name}</div>
                            <div className=' p-1 bg-blue-700 text-white font-mono rounded-md border-blue-500'>{data.price}</div>
                            </div>
                            <p className='p-5 text-justify'>{readMore?data.info:`${data.info.substring(0,200)}`}...<a href="#" className='text-blue-400' onClick={readmore}>{readMore?"readless":"read more"}</a></p>
                            <button onClick={()=>notIntrested(data.id)}  className='text-red-700 font-bold p-2 border-2 border-red-500 cursor-pointer'>NOT INTRESTED</button>                  
                            </div>
                            
                            </>

                        )
                    })
                }

          


            </div>
}
            
            
        </>
  )
}



// tours.map((data)=>
//     {
//        return(
//         <p>{data.nam}</p>
//        )
//     })
