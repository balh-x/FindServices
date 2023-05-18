import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import CusOrderTable from './table/cus_order_table';
import {DOMHelper,} from 'rsuite';
import { useNavigate } from 'react-router-dom';
const { getHeight } = DOMHelper;

const CusOrderIndex = () => {
  const navigate = useNavigate();
  return (
    <Panel
      header={
        <>
          <h3 className="title">Order</h3>
          <Breadcrumb>
            <Breadcrumb.Item onClick={() => navigate('/cus')}>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Functions</Breadcrumb.Item>
            <Breadcrumb.Item active>Orders</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
      style={{background: '#EBF2F5',borderRadius:'0',height:Math.max(getHeight(window)),padding:'0px'}}
    >
      <CusOrderTable />
    </Panel>
  );
};

export default CusOrderIndex;