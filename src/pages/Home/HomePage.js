import "./style.css";
import Banner_Topo from "../../components/Banner_Topo";
import Banner_Apresentacoes from "../../components/Banner_Apresentacoes";

export default function HomePage() {
  return (
    <div className="Corpo_Site">
      <Banner_Topo />
      <Banner_Apresentacoes />
    </div>
  );
}
