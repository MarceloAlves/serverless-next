import { useQuery } from "react-query";

export default function ClientRendered() {
  const { data, isLoading, isSuccess } = useQuery(
    ["Character", { characterId: 1 }],
    () =>
      fetch("https://rickandmortyapi.com/api/character/1").then((r) => r.json())
  );

  return (
    <div>
      <p>This data is fetched via the client</p>
      <pre>
        {isLoading && <p>Loading....</p>}
        {isSuccess && JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
