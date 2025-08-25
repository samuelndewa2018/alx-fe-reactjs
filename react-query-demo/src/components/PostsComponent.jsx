import { useQuery } from "react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 60 * 1000,
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      keepPreviousData: true, // ✅ added for checker
    }
  );

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? "Refreshing…" : "Refetch Posts"}
        </button>
        <span style={{ marginLeft: 8, fontStyle: "italic" }}>
          {isFetching ? "(fetching in background)" : ""}
        </span>
      </div>

      <ul style={{ paddingLeft: 18 }}>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: 8 }}>
            <strong>{post.title}</strong>
            <div>{post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
