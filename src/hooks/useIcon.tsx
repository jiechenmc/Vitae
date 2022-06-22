import { Icon } from "@iconify/react";

import React, { useState, useEffect } from "react";

const useIcon = (icon: string) => {
  const [_icon, _setIcon] = useState<React.ReactElement>();
  const table: { [key: string]: React.ReactElement } = {
    react: <Icon icon="logos:react" />,
    playwright: <Icon icon="logos:playwright" />,
    typescript: <Icon icon="logos:typescript-icon" />,
    python: <Icon icon="logos:python" />,
    firebase: <Icon icon="logos:firebase" />,
  };

  useEffect(() => {
    _setIcon(table[icon] ?? <Icon icon="emojione:warning" />);
  }, []);

  return _icon;
};

export default useIcon;
