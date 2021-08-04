import { useQuery } from "react-query";

export default function ApiRequest() {
  const { data, isLoading, isSuccess } = useQuery(
    ["Character", { characterId: 1 }],
    () => fetch("/api/character/1").then((r) => r.json())
  );

  return (
    <div>
      <p>This page fetches data using the /api route</p>
      <pre>
        {isLoading && <p>Loading....</p>}
        {isSuccess && JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
