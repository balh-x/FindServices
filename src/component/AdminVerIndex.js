import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import AdminVeriTable from './table/adminverification';
import {DOMHelper,} from 'rsuite';
import { useNavigate } from 'react-router-dom';
const { getHeight } = DOMHelper;

const AdVerIndex = () => {
  const navigate = useNavigate();
  return (
    <Panel
      header={
        <>
          <h3 className="title">Verification</h3>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => navigate('/admin')}>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Operations</Breadcrumb.Item>
            <Breadcrumb.Item active>Verification</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
      style={{background: '#EBF2F5',borderRadius:'0',height:Math.max(getHeight(window)),padding:'0px'}}
    >
      <AdminVeriTable />
    </Panel>
  );
};

export default AdVerIndex;