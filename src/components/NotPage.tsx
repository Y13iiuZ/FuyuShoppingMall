import React from "react";
import BackBtn from "@/encapsulationTemplate/BackBtn";
const NotPage: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <BackBtn />
      <img src="/notPage.png" alt="NOT PAGE 404" width={500} height={500} />
    </div>
  );
};

export default NotPage;
