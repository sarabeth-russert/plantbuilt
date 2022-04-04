import React from "react";
import MailTo from "./MailTo";

const ComingSoon = () => {
  return (
    <div style={{ marginLeft: "10px" }}>
      <p>
        Coming soon... for information on how to become involved in sponsoring
        the 2022 team contact us.
      </p>
      <MailTo
        label="giacomo@veganproteins.com"
        mailto="giacomo@veganproteins.com"
      />
    </div>
  );
};

export default ComingSoon;
