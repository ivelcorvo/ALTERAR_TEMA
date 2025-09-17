import { useTemaContext } from "../hooks/useTemaContext";

const Home = () => {
  
  const {tema} = useTemaContext();

  return (
    // container bg-gray-800 mx-auto p-10 rounded-xl shadow-sm text-center
    <div className={`container mx-auto p-5 rounded-xl shadow-md ${(tema?"bg-gray-200":"bg-gray-800")}`}>
      <p>
        Projeto React demonstrando a implementação de um sistema de alteração de tema (claro/escuro) utilizando Context API. A aplicação é uma SPA (Single Page Application) com React Router, garantindo que a escolha do tema seja persistida entre diferentes páginas, permitindo uma experiência de navegação consistente e fluida. Ideal para aprender como gerenciar estado global e aplicar estilos dinâmicos em múltiplas rotas.
      </p>
    </div>
  )
}

export default Home