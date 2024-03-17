import Input_Tipo_Radio from "./Subcomponents_Banner_Apresentacoes/Input_Tipo_Radio";
import Imagens_Do_Slide from "./Subcomponents_Banner_Apresentacoes/Imagens_Do_Slide";
import Navegacao_Entre_Slides from "./Subcomponents_Banner_Apresentacoes/Navegacao_Entre_Slides";

export default function Banner_Apresentacoes() {
  return (
    <div className="Imagens_De_Apresentacoes">
      <div className="Slides">
        <Input_Tipo_Radio />
        <Imagens_Do_Slide />
        <Navegacao_Entre_Slides />
      </div>
    </div>
  );
}
