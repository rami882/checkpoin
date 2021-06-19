import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import Profilecomponent from './profile/Profilecomponent';

function App() {
  const fullname = 'rami';
  const bio ='test';
  const profession ='dev';
  const handlename = (Name) => alert(`my name is ${Name}`);
  return (
    <div className="App">
    <Profilecomponent
    Name = {fullname}
    bio = {bio}
    pro = {profession}
    handlename = {handlename}
    >
      <img src="logo512.png"/>
    </Profilecomponent>
    </div>
  );
}

export default App;
