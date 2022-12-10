
import './App.css';
import Todo from './components/Todo';
import { List } from '@mui/material';
import AddTodo from './components/AddTodo';

//화면에 렌더링할 할일데이터
const items = [
  {
      id: 1,
      title: 'hello world1',
      done: true
  },
  {
      id: 2,
      title: 'hello world2',
      done: false
  },
  {
      id: 3,
      title: '동영상 강의 보기',
      done: false
  }
];

// const todoItems = items.map((item) => {
//   return <Todo item={item} />
// });

const todoItems = items.map(item => <Todo key={item.id} item={item} />);

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <List>
        {todoItems}
      </List>
    </div>
  );
};

export default App;
