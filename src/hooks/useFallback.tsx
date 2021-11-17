import { Loading } from '../components/Loading/Loading';
import { Typography } from 'antd';

const { Text } = Typography;

export const useFallback = (
  isLoading: boolean,
  isError: boolean,
  data: boolean
) => {
  let fallback = null;

  if (isError) {
    fallback = (
      <Text strong style={{ color: 'red' }}>
        Failed To Load Dataset.
      </Text>
    );
  }

  if (isLoading) {
    fallback = <Loading />;
  }

  if (!data && !isLoading) {
    fallback = <Text strong>No Data Found.</Text>;
  }

  return { fallback };
};
