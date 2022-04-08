import React from 'react';

const CoinCard = ({coin}) => {
    return (
        <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4'>
           <div className='gap-4 flex justify-between items-center'>
          <div className='flex-shrink-0'>
            <div>
              <img
                alt='profile'
                src={coin.image}
                className='mx-auto object-cover rounded-full h-16 w-16 '
              />
            </div>
          </div>

          <div>
              <span>{coin.name}</span>
              <span>{coin.symbol}</span>
          </div>


          </div> 

            
        </div>
    );
};

export default CoinCard;