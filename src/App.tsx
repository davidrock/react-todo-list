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
        <div className='flex flex-row align-center w-8/12 mx-auto px-20'>
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
        </div>
      </div>
    </>
  );
}

export default App;
