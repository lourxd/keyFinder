import { createSignal } from 'solid-js';
import styles from './App.module.css';
import KeyShow from './components/keyshow';
import WholePageInput from './components/wholePageInput';

function App() {

  const [key, setKey]= createSignal("Click one key to begin")

  return (
    <div class={styles.App}>
      <WholePageInput setKey={{setKey}}>
        <KeyShow key={key}/>
      </WholePageInput>
    </div>
  );
}

export default App;
