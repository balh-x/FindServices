import React, {useState} from 'react';
import { Form, Button, Panel, InputGroup, Stack, Checkbox, Divider } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import 'rsuite/dist/rsuite.min.css';
import Brand from '../component/Brand';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();


function SignUpCus() {
    const [visible, setVisible] = useState(false);
    return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{
        height: '100vh'
      }}
    >
      <Brand style={{ marginBottom: 10 }} /> 
      <Panel
        header={<h3>Create an Account</h3>}
        bordered
        style={{ background: '#fff', width: 400 }}
      >
        <p>
          <span>Already have an account?</span> <p onClick={() => navigate('/SignIn')}>Sign in here</p>
        </p>

        <Divider>OR</Divider>

        <Form fluid>
          <Form.Group>
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control name="name" />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control name="email" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Password</Form.ControlLabel>
            <InputGroup inside style={{ width: '100%' }}>
              <Form.Control
                name="password"
                type={visible ? 'text' : 'password'}
                autoComplete="off"
              />
              {<InputGroup.Button onClick={() => setVisible(!visible)}>
                {visible ? <EyeIcon /> : <EyeSlashIcon />}
              </InputGroup.Button> }
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Confirm Password</Form.ControlLabel>
            <Form.Control name="confirm-password" type="password" />
          </Form.Group>

          <Form.Group>
            <Stack style={{ marginLeft: -10 }}>
              <Checkbox>I Agree</Checkbox>
              <Button appearance="link">Terms and conditions.</Button>
            </Stack>
          </Form.Group>

          <Form.Group>
            <Stack spacing={6}>
              <Button appearance="primary">Submit</Button>
            </Stack>
          </Form.Group>
        </Form>
      </Panel>
    </Stack>
  );
}

  export default SignUpCus;

    

  
