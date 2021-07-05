import React from 'react';
import { Row, Col, Card, Progress } from 'antd';

import Model from './Model';
// import CustomDrawer from './Drawer';

function Main() {

  return(
    <Row justify="center">
      <Col span={18} >
        <Card className="main-container" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
          <Row>
            <Col span={6}>
              <Card>
                <p>54.0 kg</p>
                <p>BMI : 18.6</p>
                <p>Jun 25, 2021</p>
              </Card>
            </Col>
            <Col span={12}>
              <Card style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
              <Progress style={{color:'#fff'}}
                type="circle"
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                percent={80}
              />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <p>61.0 kg</p>
                <p>BMI : 21.2</p>
                <p>Oct 19, 2021</p>
              </Card>
            </Col>
          </Row>
          <hr />
          <Row className="progress-container">
            Progress
            <Progress
              strokeColor={{
                from: '#108ee9',
                to: '#87d068',
              }}
              percent={6.7}
              status="active"
            />
            Time
            <Progress
              strokeColor={{
                from: '#108ee9',
                to: '#87d068',
              }}
              percent={8.6}
              status="active"
            />
          </Row>
          <hr />
          <div style={{textAlign: 'center'}}>
            Current Statistics
          </div>
            <Row>
              <Col span={8}>
                <Card>
                  <p>Body fat</p>
                  <p>11.8 %</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <p>You gained</p>
                  <p>0.5 kg</p>
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <p>Remaining</p>
                  <p>7.0 kg</p>
                </Card>
              </Col>
            </Row>
            <div style={{textAlign: 'center'}}>
              <Model />
            </div>
        </Card>
      </Col>

    </Row>
    );
}

export default Main;
