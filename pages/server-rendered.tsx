import useTranslation from "next-translate/useTranslation";

export default function ServerRendered({ character }: any) {
  const { t } = useTranslation("serverRendered");

  return (
    <div>
      <p>{t("description")}</p>
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = async ({ locale }: any) => {
  const data = await fetch("https://rickandmortyapi.com/api/character/1").then(
    (r) => r.json()
  );

  return {
    props: {
      character: data,
    },
  };
};
