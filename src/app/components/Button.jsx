
import React from 'react'
import { useFormStatus } from "react-dom";
 
export default function Button() {
    const { pending } = useFormStatus();
  return (
    <div className='flex justify-center w-full'>
       <button
              className="bg-green-700 p-3 text-white font-bold hover:bg-green-800 hover:shadow-black-500 active:bg-green-900 w-full rounded-lg"
              type="submit"
              disabled={pending}
            >
              { pending ? "Loading please wait": 'Register'}
            </button> 
    </div>
  )
}
