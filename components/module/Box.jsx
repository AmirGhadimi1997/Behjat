import { useState } from 'react';



function Box() {

    const [count, setCount] = useState(0);

    const Salavat = () => {
      setCount(count + 1);
    };
    
    

    const [num, setNum] = useState(0);
    
    const Fatehe = () => {
      setNum(num + 1);
    };
    
    
    
    
    

    const [number, setNumber] = useState(0);
    
    const Quran = () => {
      setNumber(number + 1);
    };




  return (


    <div className="container lg:container md:container lg:w-[1000px] h-[200px] lg:mx-auto mt-5 flex  ">
       <div className="lg:w-[700px] h-[150px] bg-primary lg:mx-auto flex items-center justify-around rounded-2xl">

          <div className="flex items-center flex-col gap-1 ">
             <p className="text-sm font-Estedad-Regular text-accent ">ذکر صلوات</p>
             <p className="text-sm font-Estedad-Regular text-accent text-center ">{count}</p>
             <button onClick={Salavat} className="w-[40px] h-[40px]  font-Estedad-Regular text-accent border-solid border-2 border-[#ace6dc] bg-white rounded-lg hover:bg-accent "><svg className="text-center hover:text-white " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>
             </button>
          </div>


          <div className="flex items-center flex-col gap-1 ">
             <p className="text-sm font-Estedad-Regular text-accent">قرائت فاتحه</p>
             <p className="text-sm font-Estedad-Regular text-accent ">{num}</p>
             <button onClick={Fatehe} className="w-[40px] h-[40px]  text-lg font-Estedad-Regular text-accent border-solid border-2 border-[#ace6dc] bg-white rounded-lg hover:bg-accent "><svg className="text-center hover:text-white " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>
             </button>
          </div>


          <div className="flex items-center flex-col gap-1 ">
             <p className="text-sm font-Estedad-Regular text-accent">خواندن قرآن</p>
             <p className="text-sm font-Estedad-Regular text-accent ">{number}</p>
             <button onClick={Quran} className="w-[40px] h-[40px]  text-lg font-Estedad-Regular text-accent border-solid border-2 border-[#ace6dc] bg-white rounded-lg hover:bg-accent "><svg className="text-center hover:text-white " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>
             </button>
          </div>




    

       </div>
    </div>
  )
}

export default Box