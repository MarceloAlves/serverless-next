export default function ServerRendered({ character }: any) {
  return (
    <div>
      <p>This fetches data serverside and returns it</p>
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch("https://rickandmortyapi.com/api/character/1").then(
    (r) => r.json()
  );

  return {
    props: {
      character: data,
    },
  };
};
