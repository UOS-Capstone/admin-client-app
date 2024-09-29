import {Alert, Text} from 'react-native';

import {useState, useEffect} from 'react';

import React from 'react';
import MenuManageDetailScreen from './MarketManageDetailScreen';
import {MenuType} from '@/types/MenuType';
import {getMenus} from '@/apis/Menu';

// TODO : 홈 화면에서 navigation을 통해 여기로 이동
const MarketDetailScreen = () => {
  const [menus, setMenus] = useState<MenuType[] | null>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const res = await getMenus();
      if (!res) {
        Alert.alert('메뉴 정보를 불러오는데 실패했습니다.');
        return;
      }
      setMenus(res);
    };

    fetchMenus();
  }, []);

  if (!menus) {
    return <Text>메뉴 정보를 불러오는데 실패했습니다.</Text>;
  }

  return <MenuManageDetailScreen menus={menus} updateMenus={setMenus} />;
};

export default MarketDetailScreen;
