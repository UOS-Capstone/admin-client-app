import React from 'react';
import {View} from 'react-native';
import {PropsOf} from '@emotion/react';

import {ToggleButtonProvider} from './ToggleButtonContext';

import S from './ToggleButtonGroup.style';

type ToggleButtonGroupProps = {selected: string} & PropsOf<typeof View>;

const ToggleButtonGroup = ({selected, ...props}: ToggleButtonGroupProps) => {
  return (
    <ToggleButtonProvider selectedValue={selected}>
      <S.ToggleButtonGroupContainer {...props} />
    </ToggleButtonProvider>
  );
};

export default ToggleButtonGroup;
