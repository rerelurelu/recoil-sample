import { RecoilRoot } from 'recoil';
import './App.css';
import { AddTask } from './components/AddTask';
import { InputTask } from './components/InputTask';

export const App = () => {
  return (
    <RecoilRoot>
      <div className="task">
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  );
};
