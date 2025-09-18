import React, { useState, createContext, useEffect, ReactNode, useMemo } from "react";

// ### CRIAR CONTEXT ###
// children é uma prop especial do React.
// Tudo que você coloca dentro do componente <TemaContext> ... </TemaContext> será recebido dentro da função como children.
// "Um Provider é como uma caixa."
// "O children é o que vai dentro da caixa."
// "O Provider entrega o "contexto" pra tudo que está dentro dela."
// tudo que estiver dentrode  <TemaProvider> aqui dentro </TemaProvider> vai poder receber: tema,setTema por isso o ideao é que ele fique em index.js a não ser qu eseja algo expecifico

interface IAppContext {
  tema: boolean,
  toggleTema: () => void;
  // setTema: React.Dispatch<React.SetStateAction<boolean>>
}
export const TemaContext = createContext<IAppContext | undefined>(undefined);

interface TemaProviderProps {
  children: ReactNode,
}

// export const TemaProvider: React.FC<React.PropsWithChildren> = ({children})=>{
export const TemaProvider = ({ children }: TemaProviderProps) => {

  // melhor forma em typescript
  // interface Props {
  //   children: ReactNode;
  // }
  // const MeuComponenteProvider = ({ children }: Props) => { ... }

  const [tema, setTema] = useState<boolean>(() => {
    const saved = localStorage.getItem("tema");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("tema", JSON.stringify(tema));
  }, [tema]);

  const toggleTema = () => setTema(prev => !prev);

  // useMemo evita que o objeto value seja recriado toda vez que o componente renderiza
  const value = useMemo(()=>({tema,toggleTema}),[tema]);

  return (
    <TemaContext.Provider value={value}>
      {children}
    </TemaContext.Provider>
  );
};