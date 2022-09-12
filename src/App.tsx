import { ClipboardText, PlusCircle } from 'phosphor-react';
import {
  ChangeEvent,
  FormEvent,
  InputHTMLAttributes,
  InvalidEvent,
  useState,
} from 'react';
import logotipo from './assets/logo.svg';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('You need to set a task name');
  }

  return (
    <>
      <div className='bg-gray-600 h-screen w-screen'>
        <div className='bg-gray-700 w-screen flex flex-col pt-14 pb-20'>
          <img src={logotipo} alt='Logotipo' className='mx-auto' />
        </div>

        <div className='grid grid-cols-12'>
          <div className='h-14 col-span-2'></div>
          <div className='w-full h-14 col-span-8'>
            <form onSubmit={handleSubmit}>
              <section
                id='form'
                className='flex flex-row gap-2 justify-center -mt-7'>
                <input
                  name='task'
                  value={newTask}
                  autoComplete='off'
                  onChange={handleNewTaskChange}
                  onInvalid={handleNewTaskInvalid}
                  className='bg-gray-400 text-gray-200 placeholder:text-gray-300 rounded-md border border-gray-700 pl-2 h-14 w-full active:outline focus-visible:outline outline-blue outline-2'
                  type='text'
                  placeholder='Create a new task'
                  required
                />

                <button
                  type='submit'
                  className='w-30 py-2 px-4 flex justify-center items-center gap-2 rounded-md bg-blue hover:bg-blue-dark text-gray-100 active:outline focus-visible:outline outline-blue outline-2 transition ease-in duration-200 text-center text-base font-semibold'>
                  <span>Create</span>
                  <PlusCircle size={23} />
                </button>
              </section>
            </form>

            <section id='tasks' className='mt-10'>
              <div className='flex flex-row justify-between mb-10'>
                <div className='text-blue font-bold'>
                  New tasks
                  <span className='ml-2 py-1 px-2 rounded-md bg-gray-400 text-gray-100'>
                    0
                  </span>
                </div>
                <div className='text-purple font-bold'>
                  Finished
                  <span className='ml-2 py-1 px-2 rounded-md bg-gray-400 text-gray-100'>
                    0
                  </span>
                </div>
              </div>

              {tasks.length <= 0 && (
                <div className='flex flex-col justify-center items-center text-gray-300 border-t border-gray-400 rounded-md w-full pt-10'>
                  <ClipboardText size={48} />
                  <p className='mt-3'>You have no new tasks</p>
                  <p>Create tasks and organize your things to do</p>
                </div>
              )}

              {tasks.length >= 0 &&
                tasks.map((t) => {
                  return (
                    <div className='flex flex-col gap-1 mt-3 w-full'>
                      <div
                        key={t}
                        className='rounded-md p-2 text-gray-100 border border-gray-400 bg-gray-500'>
                        <label className='flex items-center space-x-3'>
                          <input
                            type='checkbox'
                            name='checked-demo'
                            className='bg-gray-400 border rounded-full w-5 h-5 checked:bg-purple focus:ring-0 focus:bg-purple-dark hover:bg-danger border-gray-300'
                          />
                          <span className='text-gray-100 dark:text-white font-normal break-words'>
                            {t}
                          </span>
                        </label>
                      </div>
                    </div>
                  );
                })}
            </section>
          </div>
          <div className='h-14 col-span-2'></div>
        </div>
      </div>
    </>
  );
}

export default App;
