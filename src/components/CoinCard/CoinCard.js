import React from 'react';

const CoinCard = ({coin}) => {
    return (
        <div>
            <p>id:{coin.id}</p>
            <p>name:{coin.name}</p>

            
        </div>
    );
};

export default CoinCard;