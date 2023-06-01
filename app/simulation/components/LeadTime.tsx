import { useSelector } from "react-redux";
import { intialStateType } from "@/app/slice/workItemsSlice";

const LeadTime = () => {
  const workItems = useSelector(
    (state: intialStateType) => state.workItems.workItems
  );

  let sumLeadTimes = 0;
  const countAvgLeadTime = workItems["Release"]?.filter((wi) => wi.stage === 4);

  countAvgLeadTime?.forEach((wi) => {
    sumLeadTimes += wi.lead_time;
  });

  const avgLeadTime = (
    sumLeadTimes / (countAvgLeadTime?.length as number)
  )?.toFixed(2);

  return (
    <div className="font-bold">
      Avg Lead Time:{" "}
      <span className="text-orang">
        {countAvgLeadTime?.length === 0 ? 0 : avgLeadTime}
      </span>
    </div>
  );
};

export default LeadTime;
