import { ICategoria } from "../../interfaces/ICategoria";
import { AbBotao, AbCampoTexto } from "ds-alurabooks";
import CardLivro from "../CardLivro"; 

import "./ListaLivros.css";
import { ILivro } from "../../interfaces/ILivro";
import { useState } from "react";
import { useLivros } from "../../hooks/queries/useLivros";

interface ListaLivrosProps {
  categoria: ICategoria;
}

// O APOLLO CLIENT SEMPRE MANDA REQUISIÇOES USANDO O VERBO POST

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  const [textoBusca, setTextoDaBusca] = useState("");

  const { data, refetch } = useLivros(categoria);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (textoBusca) {
      refetch({
        categoriaId: categoria.id,
        titulo: textoBusca,
      });
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
        {data?.livros.map((livro) => (
          <CardLivro livro={livro} key={livro.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaLivros;
