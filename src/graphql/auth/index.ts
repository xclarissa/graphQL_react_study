import { ApolloLink } from "@apollo/client";
import { useAuth } from "../../contexts/AuthContext";

export const authLink = new ApolloLink((operation, forward) => {
  const { token } = useAuth();

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation);
});