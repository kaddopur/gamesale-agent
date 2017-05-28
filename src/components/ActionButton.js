import React from 'react';
import {Button} from 'antd';

const ActionButton = ({type}) => {
  const wording = `我要${type === 'buy' ? '買' : '賣'}遊戲`;
  return (
    <div>
      <Button type="primary" size="small" style={{marginTop: 7, marginRight: 10}}>{wording}</Button>
    </div>
  );
};

export default ActionButton;
