import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-tertiarylight h-5 rounded">
      {progress >= 0 ? (
        <div
          className="bg-secondary text-xs text-white font-semibold h-full rounded px-2 flex justify-end pt-[2px] min-w-min"
          style={{ width: `max(${progress}%,30px)` }}
        >
          {progress}%
        </div>
      ) : (
        <p className="text-center text-xs font-semibold text-white">
          {progress}%
        </p>
      )}
    </div>
  );
}

export default ProgressBar;
