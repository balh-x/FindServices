import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import CusServicetable from './customerservice';
import {DOMHelper,} from 'rsuite';
import { useNavigate } from 'react-router-dom';
const { getHeight } = DOMHelper;


const CusserIndex = () => {
  const navigate = useNavigate();
  return (
    <Panel
      header={
        <>
          <h3 className="title">Services</h3>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => navigate('/cus')}>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Functions</Breadcrumb.Item>
            <Breadcrumb.Item active>Services</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
      style={{background: '#F6F8FA',borderRadius:'0',height:Math.max(getHeight(window)),padding:'0px'}}
    >
      <CusServicetable />
    </Panel>
  );
};

export default CusserIndex;