import React, { useState } from 'react';
import { Row, Col, Button, Drawer, Form, InputNumber, DatePicker } from 'antd';

const CustomDrawer = () => {

  const [ visible, setVisible ] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  }

  const onClose = () => {
    setVisible(false);
  }

  return(
    <div>
      <Button type="primary" shape="round" size="large" onClick={showDrawer}>
        Enter Weight
      </Button>
      <Drawer
        title="Enter your weight"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </div>
        }
      >
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
      </Drawer>
    </div>
  );
}

export default CustomDrawer;
