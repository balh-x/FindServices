import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from 'rsuite';
import { useNavigate } from 'react-router-dom';

const Brand = props => {
  const navigate = useNavigate();
  return (
    <Stack className="brand" {...props}>
        <span style={{ marginLeft: 14 }} onClick={() => navigate('/')}>Find A Service</span>
    </Stack>
  );
};

export default Brand;