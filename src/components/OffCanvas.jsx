import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';



const App = () => {
  const [open, setOpen] = useState(false);
  const placement = 'top';
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button  className='botonOffCanvas' onClick={showDrawer}>
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default App;