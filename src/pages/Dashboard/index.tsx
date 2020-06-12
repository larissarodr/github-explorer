import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Github repositories</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Type the repository name"
        />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/55484431?s=460&u=9ae833c57404e459ddd0bfb7753d8374fb39e21b&v=4"
            alt="Larissa Rodrigues"
          />
          <div>
            <strong>larissarodr/rovers-challenge</strong>
            <p>Challenge: Rovers on Mars</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
