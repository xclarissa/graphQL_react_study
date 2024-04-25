import { useState } from "react";
import { AbBotao, AbCampoTexto } from "ds-alurabooks";
import CardLivro from "../CardLivro"; 
import { ICategoria } from "../../interfaces/ICategoria";
import { useLivros } from "../../hooks/queries/useLivros";
import { useReactiveVar } from "@apollo/client";
import { livrosVar } from "../../hooks/queries/state";
import "./ListaLivros.css";

interface ListaLivrosProps {
  categoria: ICategoria;
}

// O APOLLO CLIENT SEMPRE MANDA REQUISIÇOES USANDO O VERBO POST

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  const [textoBusca, setTextoDaBusca] = useState("");

  useLivros(categoria);
  
  const livros = useReactiveVar(livrosVar);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (textoBusca) {
      // refetch({
      //   categoriaId: categoria.id,
      //   titulo: textoBusca,
      // });
    }
  };

  return (
    <section>
      <form
        style={{ maxWidth: "80%", margin: "0 auto", textAlign: "center" }}
        onSubmit={handleSubmit}
      >
        <AbCampoTexto
          value={textoBusca}
          onChange={setTextoDaBusca}
          placeholder="Digite o título"
        />
        <div style={{ marginTop: "16px" }}>
          <AbBotao texto="Buscar" />
        </div>
      </form>
      <div className="livros">
        {livros.map((livro) => (
          <CardLivro livro={livro} key={livro.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaLivros;
