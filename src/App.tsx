import {
  Check,
  ClipboardText,
  PlusCircle,
  Trash,
  TrashSimple,
} from 'phosphor-react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {
  ChangeEvent,
  FormEvent,
  InputHTMLAttributes,
  InvalidEvent,
  useState,
} from 'react';
import logotipo from './assets/logo.svg';
import * as cx from 'classnames';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const lastId = tasks[tasks.length - 1]?.id ?? 0;
    const taskToBeCreated: Task = {
      id: lastId + 1,
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, taskToBeCreated]);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('You need to set a task name');
  }

  function handleCompleteTask(task: Task) {
    task.completed = !task.completed;
    const taskIndex = tasks.findIndex((x) => x.id === task.id);
    const newTasksArray = [...tasks];
    newTasksArray[taskIndex] = task;
    setTasks(newTasksArray);
  }

  function handleDeteleTask(task: Task) {
    setTasks((current) => current.filter((x) => x.id !== task.id));
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
                    {tasks.length}
                  </span>
                </div>
                <div className='text-purple font-bold'>
                  Finished
                  <span className='ml-2 py-1 px-2 rounded-md bg-gray-400 text-gray-100'>
                    {tasks.filter((x) => x.completed).length}
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
                tasks.map((t: Task) => {
                  return (
                    <div key={t.id} className='mb-3 w-full inline-block'>
                      <div className='flex gap-2 rounded-md p-4 text-gray-100 border border-gray-400 bg-gray-500 items-center justify-between'>
                        <div
                          className='flex flex-row gap-3 cursor-pointer'
                          onClick={() => handleCompleteTask(t)}>
                          <CheckboxPrimitive.Root
                            id='c1'
                            checked={t.completed}
                            className='flex bg-white w-6 h-6 rounded-full items-center justify-center shadow radix-state-checked:bg-purple hover:text-white'>
                            <CheckboxPrimitive.Indicator className='text-purple radix-state-checked:text-gray-100'>
                              <Check size={16} weight={'bold'} />
                            </CheckboxPrimitive.Indicator>
                          </CheckboxPrimitive.Root>
                          <label
                            htmlFor='c1'
                            className={cx('text-gray-100 cursor-pointer', {
                              'line-through': t.completed,
                            })}>
                            {t.text}
                          </label>
                        </div>

                        <button className='hover:text-danger transition-colors 0.2'>
                          <Trash
                            size={25}
                            onClick={() => handleDeteleTask(t)}
                          />
                        </button>
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
