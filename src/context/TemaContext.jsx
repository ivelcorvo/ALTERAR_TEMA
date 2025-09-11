import { useState, createContext } from "react";

// ### CRIAR CONTEXT ###
// children é uma prop especial do React.
// Tudo que você coloca dentro do componente <TemaContext> ... </TemaContext> será recebido dentro da função como children.
// "Um Provider é como uma caixa."
// "O children é o que vai dentro da caixa."
// "O Provider entrega o "contexto" pra tudo que está dentro dela."


// tudo que estiver dentrode  <TemaProvider> aqui dentro </TemaProvider> vai poder receber: tema,setTema por isso o ideao é que ele fique em index.js a não ser qu eseja algo expecifico

export const TemaContext = createContext();

export const TemaProvider = ({children})=>{
    const [tema,setTema] = useState(true);

    return(
        <TemaContext.Provider value={{tema,setTema}}>
            {children}
        </TemaContext.Provider>
    );
};