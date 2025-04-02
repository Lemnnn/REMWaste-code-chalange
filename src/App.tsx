import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SkipProvider } from "./context/SkipContext";
import WebRouter from "./router/router";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SkipProvider>
        <WebRouter />
      </SkipProvider>
    </QueryClientProvider>
  );
}

export default App;
