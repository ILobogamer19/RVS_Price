const Imagens_de_Slide_Json = await fetch("./data/Slides_Apresentacao.json");

const Imagens_de_Slide = await Imagens_de_Slide_Json.json();

export default function Navegacao_Entre_Slides() {
  var Ultima_Escolhida;

  function Avancar_Slide() {
    const Atual_Input_Radio_Selecionado = document.querySelector(
      "input[name='Slides_Control']:checked"
    );

    const Numero_Do_Id_Ativo = Atual_Input_Radio_Selecionado.value;

    var Numero_Do_Id_Para_Ativar = parseInt(Numero_Do_Id_Ativo) + 1;

    if (
      document.getElementById("Barra_De_Pesquisa_" + Numero_Do_Id_Para_Ativar)
    ) {
      var Proximo_Input_Radio = document.getElementById(
        "Barra_De_Pesquisa_" + Numero_Do_Id_Para_Ativar
      );
    } else {
      var Proximo_Input_Radio = document.getElementById(
        "Barra_De_Pesquisa_" + 1
      );
    }

    Proximo_Input_Radio.click();
  }

  function Voltar_Slide() {
    var Anterior_Input_Radio;
    const Atual_Input_Radio_Selecionado = document.querySelector(
      "input[name='Slides_Control']:checked"
    );

    const Numero_Do_Id_Ativo = Atual_Input_Radio_Selecionado.value;

    var Numero_Do_Id_Para_Ativar = parseInt(Numero_Do_Id_Ativo) - 1;

    if (
      document.getElementById("Barra_De_Pesquisa_" + Numero_Do_Id_Para_Ativar)
    ) {
      Anterior_Input_Radio = document.getElementById(
        "Barra_De_Pesquisa_" + Numero_Do_Id_Para_Ativar
      );
    } else {
      for (var i = 5; i >= 1; i--) {
        if (document.getElementById("Barra_De_Pesquisa_" + i)) {
          var Anterior_Input_Radio = document.getElementById(
            "Barra_De_Pesquisa_" + i
          );
          break;
        }
      }
    }

    Anterior_Input_Radio.click();
  }

  return (
    <div className="Navegacao_Entre_Slides">
      <button onClick={Voltar_Slide} className="Botao_Slide_Anterior">
        {"<"}
      </button>
      {Imagens_de_Slide.map((item) => {
        return (
          <>
            {item.Id > 5 ? (
              alert("Não é possível adicionar mais que 5 slides")
            ) : (
              <label
                className="Barra_De_Navegacao_De_Imagem"
                htmlFor={"Slide_" + item.Id}
                key={item.Id + item.Imagem}
                id={"Barra_De_Pesquisa_" + item.Id}
                style={
                  item.Id === 1
                    ? { backgroundColor: "rgb(29, 29, 29)" }
                    : { backgroundColor: "" }
                }
                onClick={() => {
                  if (Ultima_Escolhida) {
                    Ultima_Escolhida.style.backgroundColor = "";
                  } else {
                    document.getElementById(
                      "Barra_De_Pesquisa_1"
                    ).style.backgroundColor = "";
                  }
                  document.getElementById(
                    "Barra_De_Pesquisa_" + item.Id
                  ).style.backgroundColor = "rgb(29, 29, 29)";
                  Ultima_Escolhida = document.getElementById(
                    "Barra_De_Pesquisa_" + item.Id
                  );
                }}
              ></label>
            )}
          </>
        );
      })}
      <button onClick={Avancar_Slide} className="Botao_Proximo_Slide">
        {">"}
      </button>
    </div>
  );
}
