

function Navbar() {
  
  return (
    <header className="container lg:container md:container lg:w-[1000px] h-[50px] lg:mx-auto flex ">
        <div className="lg:w-[350px] h-[50px] flex items-center gap-3">
          <div>
             <img src="/images/logo-site.png" alt="Logo" className="w-[50px] h-[50px] lg:w-[50px] lg:h-[50px] " />
          </div>

          <div className="pt-3 ">
             <h1 className="text-2xl font-Estedad-Bold ">یادکد</h1>
          </div>

         
        </div>


        <div className="lg:w-[650px] lg:h-[50px]  flex justify-around pt-3">
          <ul className="flex gap-4 justify-center items-center ">
           
           <li className="hidden md:flex  text-lg font-Estedad-Bold hover:text-accent cursor-pointer">یادکدهای ثبت شده</li>
           <li className="hidden md:flex  text-lg font-Estedad-Regular hover:text-accent cursor-pointer">فروشگاه</li>
           <li className="hidden md:flex  text-lg font-Estedad-Regular hover:text-accent cursor-pointer">بلاگ</li>
           <li className="hidden md:flex  text-lg font-Estedad-Regular hover:text-accent cursor-pointer">رایگان یادکد بسازید</li>
           <li className="hidden md:flex  text-lg font-Estedad-Regular hover:text-accent cursor-pointer">جستجوی متوفیان در کشور</li>
         </ul>
        </div>
    


    </header>

  

  );
}

export default Navbar;




// import { useState } from 'react';
// const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };


// <header className="flex justify-between md:justify-around">
//       <div className="flex ">
//         <div className="flex items-center px-3">
//           <img src="/images/logo-site.png" alt="LOGO" className="w-[50px] h-[50px]" />
//         </div>
//         <div className="flex items-center">
//           <h2 className="text-2xl font-Estedad-Bold mt-3">یادکد</h2>
//         </div>
//       </div>

//       <div className="flex ">
//         <ul className="flex  gap-5 mt-3 pr-80">
//           {/* این 5 <li> در موبایل مخفی و در دستگاه‌های بزرگتر نمایش داده می‌شوند */}
//           <li className="hidden md:flex items-center text-lg font-Estedad-Bold hover:text-accent cursor-pointer">یادکدهای ثبت شده</li>
//           <li className="hidden md:flex items-center text-lg font-Estedad-Regular hover:text-accent cursor-pointer">فروشگاه</li>
//           <li className="hidden md:flex items-center text-lg font-Estedad-Regular hover:text-accent cursor-pointer">بلاگ</li>
//           <li className="hidden md:flex items-center text-lg font-Estedad-Regular hover:text-accent cursor-pointer">رایگان یادکد بسازید</li>
//           <li className="hidden md:flex items-center text-lg font-Estedad-Regular hover:text-accent cursor-pointer">جستجوی متوفیان در کشور</li>
//         </ul>
//       </div>

//       <div className="flex  items-center px-3 gap-3">
//         <button className="w-[180px] h-[30px] bg-accent rounded-md text-white font-Estedad-Bold md:hidden ">رایگان یادکد بسازید!</button>

//         <div className="relative">
//           <div onClick={toggleMenu} className="cursor-pointer md:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//             </svg>
//           </div>

//           {/* Dropdown Menu */}
          

//           <div
//             className={`absolute top-full left-0 bg-white shadow-md rounded-md transition-all duration-300 overflow-hidden ${
//               isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
//             } w-[250px] p-4`} >

//             <ul className="space-y-2">
//               <li className="border-b py-2 cursor-pointer ">صفحه اصلی</li>
//               <li className="border-b py-2 cursor-pointer ">یادکدهای ثبت شده</li>
//               <li className="border-b py-2 cursor-pointer ">فروشگاه</li>
//               <li className="border-b py-2 cursor-pointer ">بلاگ</li>
//               <li className="border-b py-2 cursor-pointer ">یادکد</li>
//               <li className="border-b py-2 cursor-pointer ">رایگان یادکد بسازید</li>
//               <li className="border-b py-2 cursor-pointer ">جستجوی متوفیان در کشور</li>
//               <li className="border-b py-2 cursor-pointer ">جستجوی در صفحات درگذشتگان</li>
//             </ul>
//           </div>
//         </div>
//       </div>

