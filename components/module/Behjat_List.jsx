import React, { useState } from 'react';
import Behjat_Share from './Behjat_Share';
import Behjat_Memoirs from './Behjat_Memoirs';
import Behjat_Pilgrimage from './Behjat_Pilgrimage';
import Ceremony from './Ceremony';
import Specifications from './Specifications';
import Autobiography from './Autobiography';








const Behjat_List = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { title: 'اشتراک گذاری', content: <Behjat_Share/> },
    { title: 'فیلم و تصویر', content: <p>dfsd</p> },
    { title: 'دلنوشته و خاطرات', content: <Behjat_Memoirs/> },
    { title: 'زیارت', content: <Behjat_Pilgrimage/>  },
    { title: 'مراسم', content: <Ceremony/> },
    { title: 'بارکد', content: <img src="path/to/barcode.jpg" alt="Barcode" /> },
    { title: 'خلاصه زندگی نامه', content: <Specifications/> },
    { title: 'زندگی نامه', content: <Autobiography/> },
    { title: 'فیلم ماندگار', content: <p>dfsd</p> },
    
    
    
    
    
    
  ];

  return (
    <div>
      <ul className="flex border-b-2 border-transparent justify-center mt-5">
        {items.map((item, index) => (
          <li
            key={index}
            className={`mx-4 py-2 font-Estedad-Regular cursor-pointer relative ${
              activeIndex === index ? 'after:bg-green-500' : ''
            } after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:transition-colors`}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </li>
        ))}
      </ul>

      <div className="content mt-5 flex justify-center">
        {items[activeIndex].content}
      </div>
    </div>
  );
};






export default Behjat_List;
