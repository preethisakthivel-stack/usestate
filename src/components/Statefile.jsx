import React, { useState } from 'react'

export default function Statefile() {
    let [count,setCount]=useState(0);
    let [fruits,setFruits]=useState('');
    let [bool,setBool]=useState('false');
    let [array,setArray]=useState([12,2,33]);
    let [obj,setObj]=useState({
        name:'Preethi',
        age:24,
        college:'Nandha',
    });
  return (
    <div className='mb-[50px]'>
        <div className=' mt-[50px]'>
            <button onClick={()=>setCount(count+1)} className=' border-[1px] bg-orange-300 text-[18px] w-[140px] ml-[20px] hover:bg-green-300'>
                Increment
                </button>
            <button onClick={()=>setCount(count-1)} className=' border-[1px] bg-orange-300 text-[18px] w-[140px] ml-[20px] hover:bg-green-300'>
                Decrement
                </button>
            <button onClick={()=>setCount(0)} className=' border-[1px] bg-orange-300 text-[18px] w-[140px] ml-[20px] hover:bg-green-300'>
                Reset
                </button>

            <p className=' border-[1px] border-gray-800 w-[120px] mt-[30px] ml-[30px] bg-sky-200'>Count value:-{count}</p>
        </div>

        <div className='mt-[30px]'>
            <p onClick={()=>setFruits('Apple')} className='ml-[30px] text-[20px] border-[1px] bg-violet-100 hover:bg-orange-200 w-[150px] text-center mt-[10px]'>
                Apple</p>
            <p onClick={()=>setFruits('Mango')} className='ml-[30px] text-[20px] border-[1px] bg-violet-100 hover:bg-orange-200 w-[150px] text-center mt-[10px]'>
                Mango</p>
            <p onClick={()=>setFruits('Pappya')} className='ml-[30px] text-[20px] border-[1px] bg-violet-100 hover:bg-orange-200 w-[150px] text-center mt-[10px]'>
                Pappaya</p>
            <p onClick={()=>setFruits('Grapes')} className='ml-[30px] text-[20px] border-[1px] bg-violet-100 hover:bg-orange-200 w-[150px] text-center mt-[10px]'>
                Grapes</p>
            <p onClick={()=>setFruits((prev)=>prev+'Cherry')} className='ml-[30px] text-[20px] border-[1px] bg-red-100 hover:bg-orange-200 w-[150px] text-center mt-[10px]'>
                Cherry</p>

            {fruits && (<h1 className=' text-[20px] italic ml-[20px] mt-[30px]'>{`${fruits} is
            ${fruits==='Apple'
                ?'sweet to eat'
                :fruits==='Mango'
                ?'sweet and juicy to eat'
                :fruits==='Pappaya'
                ?'sweet and juicy to eat'
                :'sweet and sour to eat'
            }`}</h1>)}
        </div>
        
        <div>
            <button onClick={()=>setBool(!bool)} className='border-[1px] w-[150px] mt-[50px] ml-[30px] bg-amber-100 text-[20px]'>
                {bool?'open button':'close button'}
                </button>
        </div>


        <div className=' mt-[50px] ml-[30px]'>
            <button onClick={()=>setArray(prev=>
                (
                    [
                        ...prev,[4,5,6,7]
                    ]
                )
            )} className='  border-[1px] w-[200px] bg-lime-900'>
                Click to show
                </button>
                <h1>The Array Value:-</h1>
                {array?.map(arr=>(
                    <p>{arr}</p>
                ))}
        </div>

        <div className=' mt-[50px] ml-[30px]'>
             <button onClick={()=>setObj(prev=>
                ({
                    ...prev,['course']:'Full stack',
                    ['Hobby']:'Reading',['age']:'22',
                }
                )
            )} className='  border-[1px] w-[200px] bg-lime-900'>
                Click to show
                </button>
                <button onClick={()=>setObj(prev=>
                    ({
                        ...prev,['course']:'',
                        ['Hobby']:'',['age']:'24',
                    })
                )
                } className='  border-[1px] w-[200px] bg-lime-900'>
                    Click to close</button>
                
                <h1>The Details are :-</h1>
                <p>{obj.name}</p>
                <p>{obj.age}</p>
                <p>{obj.college}</p>
                {obj?.course && <p>{obj.course}</p>}
                {obj?.Hobby && <p>{obj.Hobby}</p>}
        </div>
    </div>
  )
}
