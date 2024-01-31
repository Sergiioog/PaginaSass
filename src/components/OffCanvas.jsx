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
          X
        </Button>
      </Space>
      <Drawer
        title="MyAgenda"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        height={260}
      >
      <div className='divSeccionHeader'>
        <p className='seccionDrawer'>Inicio</p>
      </div>
      <div className='divSeccionHeader'>
        <p className='seccionDrawer'>Mi calendario</p>
      </div>
      <div className='divSeccionHeader'>
        <p className='seccionDrawer'>Ejercicios</p>
      </div>
      <div className='divSeccionHeader'>
        <p className='seccionDrawer'>Estiramientos</p>
      </div>
      </Drawer>
    </>
  );
};
export default App;