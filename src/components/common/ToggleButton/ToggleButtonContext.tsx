import React, {createContext, useState} from 'react';

export const ToggleButtonContext = createContext<{
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}>({
  selected: '',
  setSelected: () => {},
});

export const ToggleButtonProvider = ({
  children,
  selectedValue,
}: {
  children: React.ReactNode;
  selectedValue: string;
}) => {
  const [selected, setSelected] = useState(selectedValue);

  return (
    <ToggleButtonContext.Provider value={{selected, setSelected}}>
      {children}
    </ToggleButtonContext.Provider>
  );
};
