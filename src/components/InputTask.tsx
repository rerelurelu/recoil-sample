import { ChangeEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { addTitleState } from '../states/addTitleState';
import { inputTitleState } from '../states/inputTitleState';
import './InputTask.css';

const getKey = () => Math.random().toString(32).substring(2);

export const InputTask = () => {
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const handleClick = () => {
    setAddTitle([...addTitle, { id: getKey(), title: inputTitle }]);
    setInputTitle('');
  };

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
    },
    [inputTitle]
  );

  return (
    <div className="inputField">
      <input type="text" className="inputTitle" onChange={onChange} value={inputTitle} />
      <button type="button" className="addButton" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};
