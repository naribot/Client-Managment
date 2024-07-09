import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      name
      age
    }
  }
`;

const Clients: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Age</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.clients.map((client: { id: string; name: string; age: number }) => (
          <Tr key={client.id}>
            <Td>{client.id}</Td>
            <Td>
              <Link to={`/clients/${client.id}`}>{client.name}</Link>
            </Td>
            <Td>{client.age}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Clients;
