import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Box, Text } from '@chakra-ui/react';

const GET_CLIENT = gql`
  query GetClient($id: ID!) {
    client(id: $id) {
      id
      name
      age
      gender
      additionalInfo {
        company
        email
        phone
        address
      }
    }
  }
`;

const ClientDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_CLIENT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { name, age, gender, additionalInfo } = data.client;

  return (
    <Box>
      <Text>ID: {id}</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Gender: {gender}</Text>
      <Text>Company: {additionalInfo.company}</Text>
      <Text>Email: {additionalInfo.email}</Text>
      <Text>Phone: {additionalInfo.phone}</Text>
      <Text>Address: {additionalInfo.address}</Text>
    </Box>
  );
};

export default ClientDetail;
