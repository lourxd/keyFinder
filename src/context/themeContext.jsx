import { createContext, createSignal } from "solid-js"

export const ThemeContextAPI = createContext()

export const lightTheme = {
    font: "#000000",
    background: "#fff"
}

export const darkTheme = {
    font: "#fff",
    background: "#20232a"
}


export default function ThemeContext({children}) {

    const [theme, setTheme] = createSignal(lightTheme)


  return (
    <ThemeContextAPI.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContextAPI.Provider>
  )
}
