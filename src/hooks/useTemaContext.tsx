import { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

export const useTemaContext = ()=>{
    const context = useContext(TemaContext);

    if (!context) {
        throw new Error("useTemaContext deve ser usado dentro do TemaProvider");
    }

    return context;
}