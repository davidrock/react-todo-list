import { Task } from '../App';
import {
  Check,
  ClipboardText,
  PlusCircle,
  Trash,
  TrashSimple,
} from 'phosphor-react';
import * as cx from 'classnames';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

interface TaskListProps {
  tasks: Task[];
  onCompleteTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
}

export default function TaskList({
  tasks,
  onCompleteTask,
  onDeleteTask,
}: TaskListProps) {
  return (
    <>
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
            <>
              <div className='flex justify-between gap-0 mb-3 w-full'>
                <div
                  className='flex gap-2 rounded-tl-md rounded-bl-md p-4 text-gray-100 border-y border-l cursor-pointer border-gray-400 bg-gray-500 items-center justify-between w-full'
                  onClick={() => onCompleteTask(t)}>
                  <div className='flex flex-row gap-3'>
                    <CheckboxPrimitive.Root
                      id='c1'
                      checked={t.completed}
                      className='flex bg-white w-6 h-6 rounded-full items-center justify-center shadow radix-state-checked:bg-purple hover:text-white'>
                      <CheckboxPrimitive.Indicator className='text-purple radix-state-checked:text-gray-100'>
                        <Check size={16} weight={'bold'} />
                      </CheckboxPrimitive.Indicator>
                    </CheckboxPrimitive.Root>
                    <span
                      className={cx(
                        'text-gray-100 cursor-pointer text-ellipsis overflow-hidden',
                        {
                          'line-through': t.completed,
                        }
                      )}>
                      {t.text}
                    </span>
                  </div>
                </div>
                <div
                  className='flex gap-2 rounded-tr-md rounded-br-md p-4 text-gray-100 border-y border-r border-gray-400 bg-gray-500 hover:bg-gray-600 hover:text-danger transition-colors 0.2 items-center justify-between cursor-pointer'
                  onClick={() => onDeleteTask(t)}>
                  <button className=''>
                    <Trash size={25} />
                  </button>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
}
