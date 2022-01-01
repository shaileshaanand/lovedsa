import React from "react";
import Checked from "./Checked";
import ProgressBar from "./ProgressBar";
import StatCardHeader from "./StatCardHeader";
import Unchecked from "./Unchecked";

function StatCard({ title, icon, problems }) {
  const progress =
    (problems.filter((problem) => problem.done).length / problems.length) * 100;
  console.log(progress);
  return (
    <div className="bg-white m-4 mt-2 rounded-xl p-3 shadow-damp">
      <StatCardHeader title={title} progress={progress} icon={icon} />
      <p className="text-xs font-semibold text-center mb-0.5">Progress</p>
      <ProgressBar progress={progress} />
      <div className="mt-2.5">
        {problems.map((problem, index) => {
          return (
            <div key={problem.link} className="flex items-center gap-2">
              {problem.done ? <Checked /> : <Unchecked />}{" "}
              <a target="_blank" href={problem.link}>
                {problem.title}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatCard;
