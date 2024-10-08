import {Alert, Text} from 'react-native';

import {useState, useEffect} from 'react';

import React from 'react';
import MenuManageDetailScreen from './MenuManageDetailScreenScreen';
import {MenuType} from '@/types/MenuType';
import {getMenus} from '@/apis/Menu';

const MenuManageScreen = () => {
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

export default MenuManageScreen;
