import styles from '../App.module.css';
import { onMount } from 'solid-js';

export default function WholePageInput({children, setKey}) {

    let inputRef

    document.addEventListener("click", ()=>inputRef.focus())
    onMount(()=>{
        inputRef.focus()
    })

  return (
    <>
        <input ref={inputRef} class={styles.wholePageInput} maxLength="1" onKeyDown={(e)=>setKey.setKey(e.keyCode)}></input>
        {children}
    </>
  )
}
