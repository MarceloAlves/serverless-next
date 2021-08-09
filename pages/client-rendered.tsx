import { GetStaticProps } from "next";
import useTranslation from "next-translate/useTranslation";
import { useQuery } from "react-query";

export default function ClientRendered() {
  const { t } = useTranslation("clientRendered");
  const { data, isLoading, isSuccess } = useQuery(
    ["Character", { characterId: 1 }],
    () =>
      fetch("https://rickandmortyapi.com/api/character/1").then((r) => r.json())
  );

  return (
    <div>
      <p>{t("description")}</p>
      <pre>
        {isLoading && <p>Loading....</p>}
        {isSuccess && JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
