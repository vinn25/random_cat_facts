import ButtonDefault from "@/components/Button/ButtonDefault";
import React from "react";

const ButtonBack = () => {
  return (
    <ButtonDefault
      size="lg"
      text="Back"
      onClick={() => window.history.back()}
    />
  );
};

export default ButtonBack;
