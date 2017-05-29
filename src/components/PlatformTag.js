import React from 'react';
import { Tag } from 'antd';

const PlatformTag = ({ platform }) => {
  switch (platform) {
    case 'NS':
      return <Tag color="#ED3A3E">{platform}</Tag>;
    case 'PS4':
      return <Tag color="#2D549C">{platform}</Tag>;
    case 'XONE':
      return <Tag color="#497A56">{platform}</Tag>;
    case 'WiiU':
      return <Tag color="#518DB2">{platform}</Tag>;
    case 'PSV':
      return <Tag color="#4A8C9F">{platform}</Tag>;
    case '3DS':
      return <Tag color="#9F504D">{platform}</Tag>;
    case 'PC':
      return <Tag color="#77428D">{platform}</Tag>;
    default:
      return <Tag>{platform}</Tag>;
  }
};

export default PlatformTag;
