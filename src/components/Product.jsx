import React from 'react'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {add, remove} from "../redux/Slices/CartSlice";  

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () =>{
     dispatch(add(post));
     toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className='flex flex-col items-center justify-between
    hover:scale-110 transition duration-200 ease-in rounded-xl gap-3 p-4 mt-10 ml-5 outline  outline-gray-100
    shadow-2xl shadow-[#d3f2dd]'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 '>{post.title}</p>
      </div>

      <div className=''>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
      </div>
      
      <div className='h-[180px]'>
        <img className="h-full w-full" src={post.image}></img>
      </div>

      <div className='flex justify-between gap-12 items-center w-full mt-5'>
        <div>
          <p className='text-green-600 font-semibold '>${post.price}</p>
        </div>

        {
          cart.some((p) => p.id === post.id) ? 
          (<button className='text-gray-700 border-2 border-gray-700 rounded-full 
          text-[12px] p-1 px-3 uppercase
          hover:bg-gray-700
          hover:text-white transition duration-200 ease-in'
          onClick={removeFromCart}>
            Remove Item
          </button>):
          (<button className='text-gray-700 border-2 border-gray-700 rounded-full 
          text-[12px] p-1 px-3 uppercase
          hover:bg-gray-700
          hover:text-white transition duration-200 ease-in'
          onClick={addToCart}>
            Add to Cart
          </button>)     
      }   
      </div>
      
    </div>
  );
};

export default Product
