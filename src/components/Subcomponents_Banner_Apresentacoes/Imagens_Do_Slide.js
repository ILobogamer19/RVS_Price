const Imagens_de_Slide_Json = await fetch("./data/Slides_Apresentacao.json");

const Imagens_de_Slide = await Imagens_de_Slide_Json.json();

export default function Imagens_Do_Slide() {
  return (
    <>
      {Imagens_de_Slide.map((item) => {
        return (
          <div
            className={"Slide" + (item.Id === 1 ? " Primeiro_Slide" : "")}
            key={item.Imagem}
          >
            {item.Id > 5 ? (
              alert("Não é possível adicionar mais que 5 slides")
            ) : (
              <img src={item.Imagem} />
            )}
          </div>
        );
      })}
    </>
  );
}
