import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return <h1>Repository:{params.repository}</h1>;
};

export default Repository;
