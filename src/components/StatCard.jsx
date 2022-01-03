import React from "react";
import CheckCircle from "./CheckCircle";
import ProgressBar from "./ProgressBar";
import StatCardHeader from "./StatCardHeader";

function StatCard({ title, icon, problems, refetch, isFetching }) {
  const progress = (
    (problems.filter((problem) => problem.done).length / problems.length) *
    100
  ).toFixed(1);
  return (
    <div className="bg-white m-4 mt-2 rounded-xl p-3 shadow-damp">
      <StatCardHeader
        title={title}
        progress={progress}
        icon={icon}
        refetch={refetch}
        isFetching={isFetching}
      />
      <p className="text-xs font-semibold text-center mb-0.5">
        Progress {problems.filter((problem) => problem.done).length} of{" "}
        {problems.length}
      </p>
      <ProgressBar progress={progress} />
      <div className="mt-2.5">
        {problems.map((problem, index) => {
          return (
            <a
              target="_blank"
              href={problem.link}
              className="hover:underline mb-2 block"
            >
              <div key={problem.link} className="flex items-center gap-2">
                <CheckCircle checked={problem.done} /> {problem.title}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default StatCard;
