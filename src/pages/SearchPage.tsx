import React from 'react';
import { useParams } from 'react-router-dom';

const SearchPage = () => {
  const { id } = useParams();
  console.log({ id });
  return (
    <section className="min-h-screen container max-w-lg">SearchPage</section>
  );
};

export default SearchPage;
