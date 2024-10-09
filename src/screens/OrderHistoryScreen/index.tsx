import React, {useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import {ToggleButton} from '@/components/common';

import S from './OrderHistoryScreen.style';

const OrderHistoryScreen = () => {
  const [selected, setSelected] = useState<'ordered' | 'accepted' | 'done'>(
    'ordered',
  );

  return (
    <View>
      <S.NavbarGroup selected={selected}>
        <ToggleButton
          value={'ordered'}
          onPress={() =>
            setSelected('ordered')
          }>{`예약접수(${3})`}</ToggleButton>
        <ToggleButton
          value={'accepted'}
          onPress={() =>
            setSelected('accepted')
          }>{`픽업대기(${2})`}</ToggleButton>
        <ToggleButton
          value="done"
          onPress={() => setSelected('done')}
          last>{`완료/취소(${10})`}</ToggleButton>
      </S.NavbarGroup>
      {selected === 'ordered' && (
        <View>
          {/* TODO: implement each table */}
          <Text>{`예약접수`}</Text>
        </View>
      )}
      {selected === 'accepted' && (
        <View>
          {/* TODO: implement each table */}
          <Text>{`픽업대기`}</Text>
        </View>
      )}
      {selected === 'done' && (
        <View>
          {/* TODO: implement each table */}
          <Text>{`완료/취소`}</Text>
        </View>
      )}
    </View>
  );
};

export default OrderHistoryScreen;
