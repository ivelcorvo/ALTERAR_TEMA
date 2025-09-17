import { useTemaContext } from "../hooks/useTemaContext"

const About = () => {
  const {tema} = useTemaContext();
  return (
    <div className={`container mx-auto p-5 rounded-xl shadow-md ${(tema)?"bg-gray-200":"bg-gray-800"}`}>
      <h1 className="text-2xl font-bold mb-5">A importância da mudança de tema</h1>
      <p>A possibilidade de alterar o tema de uma aplicação, como alternar entre claro e escuro, vai muito além de estética. Ela melhora a experiência do usuário, tornando a interface mais confortável em diferentes ambientes de iluminação e reduzindo o cansaço visual. Temas adaptáveis também contribuem para a acessibilidade, permitindo que pessoas com diferentes necessidades visuais usem o sistema de forma mais eficiente.</p>
      <p>Além disso, implementar a mudança de tema de forma consistente, utilizando ferramentas como a Context API no React, garante que as preferências do usuário sejam persistidas entre páginas e sessões, criando uma experiência mais personalizada e agradável. Em aplicações modernas, essa funcionalidade é vista não apenas como um diferencial, mas como um padrão de qualidade em interfaces de usuário.</p>
    </div>
  )
}

export default About