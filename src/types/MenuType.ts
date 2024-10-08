export type MenuType = {
  id: number;
  name: string;
  image: string;
  discountRate: number;
  originalPrice: number;
  discountPrice: number;
  status: '판매중' | '품절' | '숨김';
  stock: number;
};
