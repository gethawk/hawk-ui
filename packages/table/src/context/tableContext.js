import React from 'react';

export const TableContext = React.createContext({
  onSearch: () => {},
  onSort: () => {},
  onEntries: () => {},
});
