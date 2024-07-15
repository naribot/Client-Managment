// src/pages/Detail.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_CLIENTS } from '../querey';
import { Client } from '../type';

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const client = data.clients.find((client: Client) => client.id === id);

  if (!client) return <p>Client not found</p>;

  return (
    <div>
      <h1>Client Details</h1>
      <p>ID: {client.id}</p>
      <p>Name: {client.name}</p>
      <p>Age: {client.age}</p>
      <p>Gender: {client.gender}</p>
      {client.additionalInfo && (
        <div>
          <p>Address: {client.additionalInfo.address}</p>
          <p>Company: {client.additionalInfo.company}</p>
          <p>Email: {client.additionalInfo.email}</p>
          <p>Phone: {client.additionalInfo.phone}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
