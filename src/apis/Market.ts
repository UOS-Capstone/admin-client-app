import axios from 'axios';

export const verifyMarket = async (
  businessNumber: string,
  startDate: string,
  name: string,
  marketName: string,
): Promise<boolean> => {
  try {
    const query = `?businessNumber=${businessNumber}&startDate=${startDate}&name=${name}&marketName=${marketName}`;

    const response = await axios.get(
      `http://223.130.152.252:8080/v1/market/verification/business-number${query}`,
    );

    if (response.data.code === 200) {
      return response.data.validBusinessNumber;
    }

    return false;
  } catch (error) {
    console.error('Error verifying market:', error);
    return false;
  }
};
