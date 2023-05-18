import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import Notifiprotable from './ser_pro_notifi_table';
import {DOMHelper,} from 'rsuite';
import { useNavigate } from 'react-router-dom';
const { getHeight } = DOMHelper;

const NotiproIndex = () => {
  const navigate = useNavigate();
  return (
    <Panel
      header={
        <>
          <h3 className="title">Notifications</h3>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => navigate('/provider')}>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Functions</Breadcrumb.Item>
            <Breadcrumb.Item active>Notifications</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
      style={{background: '#F6F8FA',borderRadius:'0',height:Math.max(getHeight(window)),padding:'0px'}}
    >
      <Notifiprotable />
    </Panel>
  );
};

export default NotiproIndex;