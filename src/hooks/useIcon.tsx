import React, { useState, useEffect } from "react";
import table from "../data/icons";
import { Icon } from "@iconify/react";
import { v4 as uuidv4 } from "uuid";

const useIcon = (icon: string) => {
  const iconQuery = icon.toLowerCase().replace(" ", "_");
  const [_icon, _setIcon] = useState<React.ReactElement>();

  useEffect(() => {
    _setIcon(
      table[iconQuery] ?? (
        <Icon icon="emojione:warning" width="24" height="24" />
      )
    );
  }, []);

  return (
    <div key={uuidv4()} className="tooltip capitalize" data-tip={icon}>
      {_icon}
    </div>
  );
};

export default useIcon;
