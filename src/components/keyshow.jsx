import styles from '../App.module.css';
import { FaBrandsLinkedinIn, FaBrandsGithubAlt } from "solid-icons/fa"
import { IoSunny, IoMoon } from "solid-icons/io"

export default function KeyShow({key}) {

    async function copyClipboard(text){
        await navigator.clipboard.writeText(text)
    }

  return (   
        <div class={styles.keyContainer}>
            <div class={styles.headerTop}>
                <button class={styles.infoButtons}><IoSunny size={40}/></button>
                <h2>Key Info</h2>
                <span style={{width: "51px"}}></span>
            </div>
            <div class={styles.mainKeyContainer}>
                <span id="keyText" class={styles.keyText}>{key}</span>
                <button onClick={()=>copyClipboard(key())} class={styles.keyCopyButton}>COPY</button>
            </div>
            <div class={styles.footerDown}>
                
                <h2 style={{marginLeft: "20px"}}>Key Info</h2>
                <h2>Key Info</h2>
                <div class={styles.socials}>
                    <button onClick={()=>window.open("https://github.com/lourxd", "_blank")} class={styles.infoButtons}><FaBrandsGithubAlt/></button>
                    <button onClick={()=>window.open("https://www.linkedin.com/in/lourenco-rosado/", "_blank")} class={styles.infoButtons}><FaBrandsLinkedinIn/></button>
                </div>
            </div>
        </div>
  )
}
