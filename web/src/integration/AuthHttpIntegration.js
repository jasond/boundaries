import { getToken } from '../auth';
import HttpIntegration from './HttpIntegration';

export default () => {
  const getAuthHeaders = () => ({
    Authorization: `bearer ${getToken()}`,
  });

  return HttpIntegration(getAuthHeaders);
};
