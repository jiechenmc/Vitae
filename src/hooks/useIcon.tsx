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
    mysql: <Icon icon="logos:mysql-icon" />,
    flask: <Icon icon="file-icons:flask" />,
    docker: <Icon icon="logos:docker-icon" />,
    bash: <Icon icon="logos:bash-icon" />,
    fastapi: <Icon icon="simple-icons:fastapi" color="#089484" />,
    mongodb: <Icon icon="vscode-icons:file-type-mongo" />,
    digitalocean: <Icon icon="simple-icons:digitalocean" color="#0069ff" />,
  };

  useEffect(() => {
    _setIcon(table[icon] ?? <Icon icon="emojione:warning" />);
  }, []);

  return _icon;
};

export default useIcon;
