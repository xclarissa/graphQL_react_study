import { useEffect, useState } from "react";
import { AbCampoTexto } from "ds-alurabooks";
import CardLivro from "../CardLivro";
import { ICategoria } from "../../interfaces/ICategoria";
import { useLivros } from "../../hooks/queries/useLivros";
import { useReactiveVar } from "@apollo/client";
import { filtroLivrosVar, livrosVar } from "../../hooks/queries/state";

import "./ListaLivros.css";

interface ListaLivrosProps {
  categoria: ICategoria;
}

// O APOLLO CLIENT SEMPRE MANDA REQUISIÇOES USANDO O VERBO POST

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  const [textoBusca, setTextoDaBusca] = useState("");

  useEffect(() => {
    filtroLivrosVar({
      ...filtroLivrosVar(),
      titulo: textoBusca.length >= 3 ? textoBusca : "",
    });
  }, [textoBusca]);

  filtroLivrosVar({
    ...filtroLivrosVar(),
    categoria,
  });

  const livros = useReactiveVar(livrosVar);

  useLivros();

  return (
    <section>
      <form style={{ maxWidth: "80%", margin: "0 auto", textAlign: "center" }}>
        <AbCampoTexto
          value={textoBusca}
          onChange={setTextoDaBusca}
          placeholder="Digite o título"
        />
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
