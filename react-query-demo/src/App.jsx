import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent";
import Dummy from "./components/Dummy";

// Create a single QueryClient for the whole app
const queryClient = new QueryClient();

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ fontFamily: "system-ui", padding: 24 }}>
        <h1>React Query Demo</h1>

        <div style={{ marginBottom: 16 }}>
          <button onClick={() => setShowPosts((s) => !s)}>
            {showPosts
              ? "Go to Dummy page (navigate away)"
              : "Back to Posts (navigate back)"}
          </button>
        </div>

        {showPosts ? <PostsComponent /> : <Dummy />}
      </div>
    </QueryClientProvider>
  );
}
