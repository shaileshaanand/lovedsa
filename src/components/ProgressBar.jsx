import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-tertiarylight h-5 rounded">
      <div
        className="bg-secondary text-xs text-white font-semibold h-full rounded px-2 flex justify-end pt-[2px]"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBar;
