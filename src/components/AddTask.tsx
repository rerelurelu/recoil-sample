import { useRecoilValue } from 'recoil';
import { addTitleState, addTitleStateLength } from '../states/addTitleState';
import './AddTask.css';

export const AddTask = () => {
  const addTitle = useRecoilValue(addTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength);

  return (
    <div className="taskField">
      <div>{addTitleLength} Tasks</div>
      <ul>
        {addTitle.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};
