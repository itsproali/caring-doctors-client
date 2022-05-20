import React, { useState } from "react";
import AptBanner from "./AptBanner";
import AvailableApt from "./AvailableApt";

const Appointments = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <AptBanner date={date} setDate={setDate} />
      {date && <AvailableApt date={date} />}
    </div>
  );
};

export default Appointments;
