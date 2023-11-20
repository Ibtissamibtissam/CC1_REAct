import React, {createContext, useState} from 'react';


//1-objet context
export const ThemeContext = createContext();




//2-component context

export default function ThemeContextProvider({children}) {

    const [theme, setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme(!theme)
    }

   if(theme){
        document.body.classList.add('dark-body');
    } else {
        document.body.classList.remove('dark-body');
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )

}

