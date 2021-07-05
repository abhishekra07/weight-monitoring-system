import React, { useState } from 'react';
import { Row, Col, Button, Form, InputNumber, Modal, DatePicker } from 'antd';

const Model = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" shape="round" size="large" onClick={showModal}>
        Enter Weight
      </Button>
      <Modal title="Enter Weight" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={8}>
              <InputNumber min={1} max={200} defaultValue={45} style={{ width: '100%'}}/>
            </Col>
            <Col span={8}>
              <InputNumber min={0} max={9} defaultValue={0} style={{ width: '100%'}}/>
            </Col>
            <Col span={8}>
              <DatePicker />
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
}

export default Model;
