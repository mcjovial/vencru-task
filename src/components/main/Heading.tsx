import React, { FC } from 'react';

interface HeadingProps {
  page: string;
  description: string;
}
const Heading: FC<HeadingProps> = ({ page, description }) => {
  return (
    <div className="items-center">
      <h2 className="text-3xl text-primary; mb-2">{page}</h2>
      <p className="font-light text-gray-500">{description}</p>
    </div>
  );
};

export default Heading;
