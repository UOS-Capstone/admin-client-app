import styled from '@emotion/native';
import {Button} from 'react-native-paper';

// TODO: last prop를 Context API로 처리하기
const ToggleButton = styled(Button)<{selected?: boolean; last?: boolean}>`
  flex: 1;
  border-radius: 0;

  border: 1px solid black;
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;

  border-right-width: ${props => (props.last ? '0' : '1px')};

  background-color: ${props => (props.selected ? 'blue' : 'white')};
`;

const S = {
  ToggleButton,
};

export default S;
