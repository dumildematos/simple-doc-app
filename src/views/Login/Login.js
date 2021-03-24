import React, { useState } from 'react'
import { Layout, Row, Col, Form, Input, Button, Checkbox , Space  } from 'antd';
const {  Content,  } = Layout;
import { LinkedinFilled, FacebookFilled, GoogleSquareFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './../../scss/views/Login.scss';


const layout = {
  labelCol: {
    span: 16,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 0,
    span: 16,
  },
};



const  Login = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  


  return (
    <>
      <Layout style={{ height: '100%' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            height: '100%'
          }}
        >
          <Row>
          <Space align="baseline">
            <Col span={12} xs={{ order: 12 }} sm={{ order: 12 }} md={{ order: 12 }} lg={{ order: 12 }}>
            <div className='loginFormHeader'>
              <div className='logo'>
                <h3>Simple <b>Doc</b></h3>
              </div>
              <p>
              Documente seus produtos, serviços, processos e muito mais de forma  fácil e ágil.
              </p>
            </div>
            <Form
                {...layout}
                name="loginForm"
                layout="vertical"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="E-mail:"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Digite o seu email!',
                      type:'email'
                    },
                  ]}
                >
                  <Input placeholder="jhondoe@email.com" />
                </Form.Item>

                <Form.Item
                  label="Palavra-passe"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Digite sua Palavra-passe!',
                    },
                  ]}
                >
                  <Input.Password placeholder="************"/>
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button className='btnLogin' htmlType="submit" block>
                    Entrar
                  </Button>
                </Form.Item>
              </Form>
              <div className='loginSocialMedia'>
                  <p>ou</p>
                  <div>
                  <Button className='btnLinkedin' type="primary" icon={<LinkedinFilled />} size='large'></Button>
                  <Button className='btnFacebook' type="primary" icon={<FacebookFilled />} size='large'></Button>
                  <Button className='btngPlus' type="primary" icon={<GoogleSquareFilled />} size='large'></Button>
                  </div>
              </div>
              <div className='signInCall'>
                <p>Ainda não tem uma conta? <a href="!#">Registra-se</a></p>
              </div>
            </Col>
            <Col span={6} xs={{ order: 6 }} sm={{ order: 6 }} md={{ order: 6 }} lg={{ order: 6 }}>
              4 col-order-responsive
            </Col>
          </Space>
          </Row>
        </Content>
      </Layout>
    </>
  )
}

export default Login
