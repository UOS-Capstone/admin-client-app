import styled from '@emotion/native';

const MainText = styled.Text`
  font-size: 20px;
  font-style: normal;
  font-weight: 600px;
  padding: 4px 12px;
`;

const AddProductView = styled.View`
  align-items: center;
`;

const AddProductWrapper = styled.TouchableOpacity`
  background-color: #4682b4;
  border-radius: 8px;
  width: 180px;
  padding: 4px 24px;
  margin: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddText = styled.Text`
  padding: 4px;
  color: white;
  font-size: 16px;
  font-weight: 500;
`;
const S = {AddProductWrapper, AddProductView, MainText, AddText};
export default S;
