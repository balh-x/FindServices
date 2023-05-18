import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import Cusnotification from './card/cus_notification';
import {DOMHelper,} from 'rsuite';
import { useNavigate } from 'react-router-dom';
const { getHeight } = DOMHelper;

const CusNotiproIndex = () => {
  const navigate = useNavigate();
  return (
    <Panel
      header={
        <>
          <h3 className="title">Notifications</h3>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => navigate('/cus')}>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Functions</Breadcrumb.Item>
            <Breadcrumb.Item active>Notifications</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
      style={{background: '#EBF2F5',borderRadius:'0',height:Math.max(getHeight(window)),padding:'0px'}}
    >
      <Cusnotification />
    </Panel>
  );
};

export default CusNotiproIndex;