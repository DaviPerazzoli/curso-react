import React,{useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";


export default function Home(){
    const {theme,toggleTheme} = useContext(ThemeContext);

    return(
        <div>
            <h1>Página inicial</h1>
            <p>O tema atual é {theme}</p>
            <button onClick={toggleTheme}>Mudar tema</button>
        </div>
    )
}