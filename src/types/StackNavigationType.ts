import {ParamListBase} from '@react-navigation/native';

type StackParamType<T> = {
  screen?: keyof T;
  params?: T[keyof T];
};

export interface HomeStackParamList extends ParamListBase {
  Feed: undefined;
  MarketInfo: undefined;
  MyPage: undefined;
  OrderHistory: undefined;
}

export interface RegisterStackParamList extends ParamListBase {
  Signup: undefined;
  Login: undefined;
}

export interface DetailStackParamList extends ParamListBase {
  Payment: undefined;
}

export interface RegisterMarketParmaList extends ParamListBase {
  RegisterMarket: undefined;
  RegisterMarketDone: undefined;
}

export interface RootStackParamList extends ParamListBase {
  Home: StackParamType<HomeStackParamList>;
  Register: StackParamType<RegisterStackParamList>;
  Detail: StackParamType<DetailStackParamList>;
  RegisterMarket: StackParamType<RegisterMarketParmaList>;
}
