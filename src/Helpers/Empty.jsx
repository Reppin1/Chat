import React from 'react';
import { Empty } from 'antd';

const EmptyBlock = ({description}) => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    description={description}
  />
);

export { EmptyBlock };
