import * as React from 'react';

export function useLocalStorageState(keyName, defaultValue = '') {
  const getLSValue = () => window.localStorage.getItem(keyName) ?? defaultValue;
  const [item, setItem] = React.useState(getLSValue);

  React.useEffect(() => {
    window.localStorage.setItem(keyName, item);
  }, [keyName, item]);

  return [item, setItem];
}