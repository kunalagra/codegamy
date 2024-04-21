import React from "react";

const OutputWindow = ({ outputDetails, additionalStyles }) => {
  return (
    <div className={`!w-full flex-grow flex flex-col ${additionalStyles}`}>
      <h3 className="font-bold text-lg mb-2">Output</h3>
      
      {outputDetails?
        (outputDetails.submitted ? (
          <div className="w-full flex flex-col flex-grow bg-dark-2 rounded-lg text-white p-2 font-mono text-sm overflow-y-auto">
            <p className="text-lg">
              Status:{" "}
              <span
                className={`${outputDetails.accepted ? "text-green-500" : "text-red-500"}`}
              >
                {outputDetails.accepted ? "ACCEPTED" : "REJECTED"}
              </span>
            </p>
            {!outputDetails.accepted && (
              <textarea
                value={outputDetails.output || ""}
                className="flex-grow bg-dark-2 resize-none text-xs"
                disabled
              ></textarea>
            )}
          </div>
        ) : (
          <div className="w-full flex flex-col flex-grow bg-dark-2 rounded-lg text-white p-2 font-mono text-sm overflow-y-auto">
            <p className="text-xs text-blue-500">
              CPUTime: {outputDetails.cpuTime}s
            </p>
            <p className="text-xs text-blue-500 mb-2">
              Memory: {outputDetails.memory}b
            </p>
            <textarea
              value={outputDetails.output || ""}
              className="flex-grow bg-dark-2 resize-none"
              disabled
            ></textarea>
            </div>
        )) : (
          <div className="w-full flex flex-col flex-grow bg-dark-2 rounded-lg text-white p-2 font-mono text-sm overflow-y-auto" />
        )}
    </div>
  );
};

export default OutputWindow;
