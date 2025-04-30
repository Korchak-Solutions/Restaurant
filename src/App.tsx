import './App.css';
import {EntryText} from './components/EntryText';
import {Header} from './components/Header';
import {MenuPicker} from './components/MenuPicker';
import {Slider} from './components/Slider';

function App() {
  return (
    <>
      <Header />
      <EntryText />
      <MenuPicker />
      <Slider />
    </>
  );
}

export default App;
