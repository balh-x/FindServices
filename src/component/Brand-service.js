import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Stack } from 'rsuite';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
const Brand = props => {
  return (
    <Stack className="brand" {...props}>
      <Logo height={26} style={{ marginTop: 6 }} />
        <span style={{ marginLeft: 14 }} onClick={() => navigate('/')}>Service Provider</span>
    </Stack>
  );
};

export default Brand;