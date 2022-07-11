import styles from '../App.module.css';


export default function KeyShow({key}) {

    
    async function copyClipboard(text){
        await navigator.clipboard.writeText(text)
    }

    console.log(key())

  return (   
        <div class={styles.keyContainer}>
            <div class={styles.headerTop}>
                <button class={styles.infoButtons}></button>
                <h2>Key Info</h2>
                <button></button>
            </div>
            <div class={styles.mainKeyContainer}>
                <span id="keyText" class={styles.keyText}>{key}</span>
                <button onClick={()=>copyClipboard(key())} class={styles.keyCopyButton}>COPY</button>
            </div>
            <div class={styles.footerDown}>
                
            </div>
        </div>
  )
}
