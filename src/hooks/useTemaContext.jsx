import { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

export const useTemaContext = ()=>{
    // ### VALIDAÇÃO PARA VERIFICAR SE O CONTEXT ESTÁ FUNCIONANDO
    const context = useContext(TemaContext);

    if(!context){
        console.log("Contexto não encontrado!");
    }

    return context;
}