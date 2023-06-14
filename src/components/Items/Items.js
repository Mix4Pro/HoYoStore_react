import React from 'react';
import './Items.css'

const Items_Arr = [
    {id: 1, name: "Hoodie", price: 10, img: "https://firebasestorage.googleapis.com/v0/b/telegrambot-7d459.appspot.com/o/Hoodie.png?alt=media&token=5dfe5e3b-88ab-4a37-ad5b-8d8fae2ed8ad"},
    {id: 2, name: "Pants", price: 8, img: "https://firebasestorage.googleapis.com/v0/b/telegrambot-7d459.appspot.com/o/Pants.png?alt=media&token=9f5df55f-b8dd-4748-a443-37c9365d35ff"},
    {id: 3, name: "Sneakers", price: 15, img: "https://firebasestorage.googleapis.com/v0/b/telegrambot-7d459.appspot.com/o/Sneakers.png?alt=media&token=933bcca5-7b19-45c8-bd9d-77de7d17abc7"},
    {id: 4, name: "Cap", price: 5, img: "https://firebasestorage.googleapis.com/v0/b/telegrambot-7d459.appspot.com/o/Cap.png?alt=media&token=9fd67555-a339-45d5-a5ca-e21aac36f25c"},
    {id: 5, name: "Shirt", price: 8, img: "https://firebasestorage.googleapis.com/v0/b/telegrambot-7d459.appspot.com/o/Shirt.png?alt=media&token=15f8ddf5-3bff-47d4-9e64-f9366de870a4"},
    {id: 6, name: "Socks", price: 5, img: "https://firebasestorage.googleapis.com/v0/b/telegrambot-7d459.appspot.com/o/Socks.png?alt=media&token=1f30d476-d95f-4d6b-80ac-c259ae7fdfaf"}

]

const Items = () => {
    return (
        <div className='items'>
            {
                Items_Arr.map((val,i)=>{
                    return (
                        <div className='item'>
                            <img className='item-img' src={val.img} alt="Failed" />

                            <p className='item-price'>{val.price}</p>

                            <div className='item-buttons'>
                                <div className='after-purchase'>
                                    <button className='item-btn-positive'>+</button>
                                    <button className='item-btn-negative'>-</button>
                                </div>

                                <button className='item-purchase'>Purchase</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Items;