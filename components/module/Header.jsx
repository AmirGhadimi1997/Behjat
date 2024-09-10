

function Header() {
  return (
    <header className="flex justify-around ">

        <div className="w-[70%] h-auto flex ">
           <div className="w-[20%] h-auto  flex gap-3">
             <img src="/images/logo-site.png" alt="LOGO" className="w-[50px] h-[50px] "/>

             <div className="w-[10%] h-auto  flex items-center ">
              <h2 className="text-2xl font-Estedad-Bold gap-3 mt-3">یادکد</h2>
             </div>
           </div>
           

         <div className="w-[80%] h-auto flex justify-end ">
            <ul className="flex justify-center gap-5 mt-3 ">
                <li className="flex items-center text-lg font-Estedad-Bold hover:text-accent cursor-pointer">یادکدهای ثبت شده</li>
                <li className="flex items-center text-lg font-Estedad-Regular hover:text-accent cursor-pointer">فروشگاه</li>
                <li className="flex items-center text-lg font-Estedad-Regular hover:text-accent cursor-pointer">بلاگ</li>
                <li className="flex items-center text-lg font-Estedad-Regular hover:text-accent cursor-pointer">رایگان یادکد بسازید</li>
                <li className="flex items-center text-lg font-Estedad-Regular hover:text-accent cursor-pointer">جستجوی متوفیان در کشور</li>
            </ul>
         </div>

        </div>
         
        
    

    </header>
   

  )
}

export default Header




      //  <ul className="flex gap-5 ">
      //           <li className="">یادکدهای ثبت شده</li>
      //           <li className="">فروشگاه</li>
      //           <li className="">بلاگ</li>
      //           <li className="">رایگان یادکد بسازید</li>
      //           <li className="">جستجوی متوفیان در کشور</li>
      //       </ul>
