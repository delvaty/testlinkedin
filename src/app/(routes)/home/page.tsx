import Information from "@/components/Information";
import { getInformationList } from "@/services/information";

export default async function Page() {
  const dataResponse = await getInformationList();
  console.log(dataResponse);
  return <Information informationData={dataResponse.data} />;
}
