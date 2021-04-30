import React from "react";

const Notice: React.FC<{ title: string }> = ({ title }) => {
  return <div>Notice{title}</div>;
};

export default Notice;
