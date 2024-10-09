import React, {useContext} from 'react';
import {GestureResponderEvent} from 'react-native';

import {ToggleButtonContext} from './ToggleButtonContext';

import {PropsOf} from '@emotion/react';
import S from './ToggleButton.style';

type RequiredProps = {
  children: React.ReactNode;
  value: string;
  onPress: (e: GestureResponderEvent) => void;
};

type ToggleButtonProps = RequiredProps &
  Omit<PropsOf<typeof S.ToggleButton>, keyof RequiredProps>;

const ToggleButton = ({
  children,
  value,
  onPress,
  ...rest
}: ToggleButtonProps) => {
  const context = useContext(ToggleButtonContext);

  if (!context) {
    throw new Error('ToggleButton must be used within a ToggleButtonGroup');
  }

  const {selected, setSelected} = context;

  return (
    <S.ToggleButton
      {...rest}
      onPress={e => {
        setSelected(value);
        onPress(e);
      }}
      selected={selected === value}
      aria-selected={selected === value}
      role={'tab'}>
      {children}
    </S.ToggleButton>
  );
};

export default ToggleButton;
