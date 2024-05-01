import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import ABApolloClient from "./componentes/ABApolloClient";
import Rotas from "./rotas";
import CarrinhoProvider from "./contexts/CarrinhoContext";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <ABApolloClient>
      <AuthProvider>
        <CarrinhoProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Rotas />
            </BrowserRouter>
          </QueryClientProvider>
        </CarrinhoProvider>
      </AuthProvider>
    </ABApolloClient>
  );
}

export default App;
