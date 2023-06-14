import { Problem } from "@/utils/types/problem";
import { useState } from "react";
import Split from "react-split";
import Playground from "./Playground/Playground";
import ProblemDescription from "./ProblemDescription/ProblemDescription";

type WorkspaceProps = {
  problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} />
      <div className="bg-dark-fill-2">
        <Playground problem={problem} />
      </div>
    </Split>
  );
};
export default Workspace;
