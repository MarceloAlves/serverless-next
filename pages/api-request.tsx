import { GetStaticProps } from "next";
import useTranslation from "next-translate/useTranslation";
import { useQuery } from "react-query";

export default function ApiRequest() {
  const { t } = useTranslation("apiRequest");
  const { data, isLoading, isSuccess } = useQuery(
    ["Character", { characterId: 1 }],
    () => fetch("/api/character/1").then((r) => r.json())
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
