import styled from '@emotion/native';

const MenuWrapper = styled.View`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px 20px;
  padding: 12px;
`;
const MenuImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 24px;
  border-radius: 16px;
`;
const MenuInfoWrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const MenuNameText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;
const DicountInfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin: 2px 0px;
`;
const DiscountRateText = styled.Text`
  color: red;
`;
const DiscountPriceText = styled.Text`
  color: #b5b5b5;
  text-decoration-line: line-through;
`;
const CurrentInfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin: 2px 0px;
`;
const CurrentStatusText = styled.Text`
  color: blue;
`;
const MenuCounter = styled.View`
  display: flex;
  flex-direction: row;
  width: 100px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
const MenuCounterButtonWrapper = styled.TouchableOpacity`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  background-color: lightblue;
  height: 24px;
  text-align: center;
`;

const MenuCounterButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const ModifyButtonWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: lightblue;
  text-align: center;
  width: 60px;
  height: 40px;
`;
const ModifyButtonText = styled.Text`
  font-weight: bold;
  text-align: center;
`;
const S = {
  MenuWrapper,
  MenuImage,
  MenuInfoWrapper,
  MenuNameText,
  DicountInfoWrapper,
  DiscountRateText,
  DiscountPriceText,
  CurrentInfoWrapper,
  CurrentStatusText,
  ModifyButtonWrapper,
  ModifyButtonText,
  MenuCounter,
  MenuCounterButton,
  MenuCounterButtonWrapper,
};

export default S;
