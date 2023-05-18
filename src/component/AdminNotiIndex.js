import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import AdminNotification from './card/admin_notification';
import {DOMHelper,} from 'rsuite';
import { useNavigate } from 'react-router-dom';
const { getHeight } = DOMHelper;

const AdminNotiIndex = () => {
  const navigate = useNavigate();
  return (
    <Panel
      header={
        <>
          <h3 className="title">Notifications</h3>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => navigate('/admin')}>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Operations</Breadcrumb.Item>
            <Breadcrumb.Item active>Notifications</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
      style={{background: '#EBF2F5',borderRadius:'0',height:Math.max(getHeight(window)),padding:'0px'}}
    >
      <AdminNotification />
    </Panel>
  );
};

export default AdminNotiIndex;