import React from 'react';
import {Text} from 'react-native';
import {MenuType} from '@/types/MenuType';
import S from './Menu.style';

const Menu = ({
  name,
  image,
  discountRate,
  originalPrice,
  discountPrice,
  status,
  stock,
  onEdit,
  onIncreaseStock,
  onDecreaseStock,
}: MenuType & {onEdit: () => void} & {onIncreaseStock: () => void} & {
  onDecreaseStock: () => void;
}) => {
  return (
    <S.MenuWrapper>
      <S.MenuImage source={{uri: image}} />
      <S.MenuInfoWrapper>
        <S.MenuNameText>{name}</S.MenuNameText>
        <S.DicountInfoWrapper>
          <S.DiscountRateText>{discountRate} %</S.DiscountRateText>
          <S.DiscountPriceText>
            {originalPrice.toLocaleString()}원
          </S.DiscountPriceText>
        </S.DicountInfoWrapper>
        <S.CurrentInfoWrapper>
          <Text>{discountPrice.toLocaleString()}원</Text>
          <S.CurrentStatusText>{status}</S.CurrentStatusText>
        </S.CurrentInfoWrapper>
        <S.CurrentInfoWrapper>
          <S.MenuCounter>
            <S.MenuCounterButtonWrapper onPress={onDecreaseStock}>
              <S.MenuCounterButton>-</S.MenuCounterButton>
            </S.MenuCounterButtonWrapper>
            <S.MenuCounterButton>{stock} 개</S.MenuCounterButton>
            <S.MenuCounterButtonWrapper>
              <S.MenuCounterButton onPress={onIncreaseStock}>
                +
              </S.MenuCounterButton>
            </S.MenuCounterButtonWrapper>
          </S.MenuCounter>
        </S.CurrentInfoWrapper>
      </S.MenuInfoWrapper>

      <S.ModifyButtonWrapper onPress={onEdit}>
        <S.ModifyButtonText>수정</S.ModifyButtonText>
      </S.ModifyButtonWrapper>
    </S.MenuWrapper>
  );
};
export default Menu;
