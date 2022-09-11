import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import logotipo from './assets/logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='bg-gray-600 h-screen w-screen'>
        <div className='bg-gray-700 w-screen flex flex-col pt-14 pb-20'>
          <img src={logotipo} alt='Logotipo' className='mx-auto' />
        </div>

        <div className='grid grid-cols-12'>
          <div className='h-14 col-span-2'></div>
          <div className='w-full h-14 col-span-8'>
            <div className='flex flex-row gap-2 justify-center -mt-7'>
              <input
                className='bg-gray-400 text-gray-200 placeholder:text-gray-300 rounded-md border border-gray-700 pl-2 h-14 w-full active:outline focus-visible:outline outline-blue outline-2'
                type='text'
                placeholder='Create a new task'
              />

              {/* <button
                type='button'
                className='w-36 py-2 px-4 flex justify-center items-center bg-blue hover:bg-blue-dark text-gray-100 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
                Upload <PlusCircle size={20} />
              </button> */}

              <button className='w-30 py-2 px-4 flex justify-center items-center gap-2 rounded-md bg-blue hover:bg-blue-dark text-gray-100 active:outline focus-visible:outline outline-blue outline-2 transition ease-in duration-200 text-center text-base font-semibold'>
                <span>Criar</span>
                <PlusCircle size={23} />
              </button>
            </div>
          </div>
          <div className='h-14 col-span-2'></div>
        </div>

        {/* <div className='flex flex-row align-center w-8/12 mx-auto px-20'>
          <div className='grid grid-cols-12 gap-2 w-full -mt-7 h-14'>
            <input
              className='bg-gray-400 text-gray-200 placeholder:text-gray-300 rounded-md border border-gray-700 pl-2 col-span-11'
              type='text'
              placeholder='Create a new task'
            />
            <button className='rounded-md bg-blue hover:bg-blue-dark text-gray-100 w-36 col-span-1'>
              <span>Criar</span>
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
