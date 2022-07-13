import { createSignal } from 'solid-js';
import styles from './App.module.css';
import KeyShow from './components/keyshow';
import WholePageInput from './components/wholePageInput';
import ThemeContext from './context/themeContext';

function App() {

  const [key, setKey]= createSignal("Click one key to begin")

  return (
    <ThemeContext>
      <div class={styles.App}>
        <WholePageInput setKey={{setKey}}>
          <KeyShow key={key}/>
        </WholePageInput>
      </div>
    </ThemeContext>
  );
}

export default App;
