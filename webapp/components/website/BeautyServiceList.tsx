import React, { JSX } from 'react';

interface ServicesType {
  id: number;
  title: string;
  image: string;
  link: string;
}

interface BeautyServiceListProps {
    services: ServicesType[];
    title: () => JSX.Element;
}

const BeautyServiceList: React.FC<BeautyServiceListProps> = ({ services, title }) => {
  return (
    <div className="container">
      {title()}
    </div>
  );
};

export default BeautyServiceList;
