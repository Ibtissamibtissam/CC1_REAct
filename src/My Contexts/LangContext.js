import React, {createContext, useState} from 'react' 


// 1-objet context
export  const Langc = createContext();

//const supportedLangs = ['EN', 'FR', 'ES'];







// 2-component context
export default function Langcontext ({children})   {

    const [lang, setLang] = useState("FR")

    

    return (
        <Langc.Provider value={{lang, setLang}}>
            {children}
        </Langc.Provider>
    )

}

