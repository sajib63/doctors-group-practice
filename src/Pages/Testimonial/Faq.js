import React from 'react';

const Faq = ({faq}) => {
    const {name, title, image, location}=faq;
    return (
      

          <div className=" shadow-xl p-3 rounded-2xl">
           
            <div>
             
              <p className="mb-5 text-gray-700">
           {title}
              </p>
              <div className="flex items-center">
            
                  <img
                    src={image}
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm mr-3"
                  />
               
                <div>
                  <p className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400" >
                    {name}
                  </p>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    {location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          

         
     
    );
};

export default Faq;