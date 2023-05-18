import React, { useState } from 'react';
import {
  Drawer,
  Button,
  Form,
  Input,
} from 'rsuite';
import { collection, doc, setDoc, addDoc, serverTimestamp, getDoc, query, where, getDocs } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { updateDoc } from "firebase/firestore";

const CusUpdateRe = (props) => {
  const { onClose, rowData, ...rest } = props;
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {

    console.log("这里的数据为：", rowData.status);
    try {
      const demandData = {
        customerId: rowData.customerId,
        description: description,
      };
      console.log("更新的数据为：", demandData);

      const docRef = doc(db, "customer_requests", rowData.requestId); // 替换"yourCollection"为你的具体的集合名
      console.log("文档的引用为：", docRef);
      await updateDoc(docRef, { description: demandData.description }); // update the document

      // 清空输入框
      setDescription('');
      onClose();
    } catch (error) {
      console.error("Error updating demand request: ", error);
    }
  };


  return (
    <Drawer backdrop="static" size="sm" placement="right" onClose={onClose} {...rest}>
      <Drawer.Header>
        <Drawer.Title>Demand an Update</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={onClose} appearance="primary">
            Confirm
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Drawer.Actions>
      </Drawer.Header>

      <Drawer.Body>
        <Form fluid onSubmit={handleSubmit}>
          <Form.Group>
            <Form.ControlLabel>Update Requirement:</Form.ControlLabel>
            <Input as="textarea" rows={5} placeholder="Update requirement here" name='update' value={description}
              onChange={value => setDescription(value)} />
          </Form.Group>
          <Button type="submit" appearance="primary">
            Submit
          </Button>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default CusUpdateRe;