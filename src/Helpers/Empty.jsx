import React from 'react';
import { Empty } from 'antd';

const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const EmptyBlock = ({description}) => (
  <Empty
    description={(
      <span style={container}>
        {description}
      </span>
    )}
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
  />
);

export { EmptyBlock };
