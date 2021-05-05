import React, {useState} from 'react';
import { Layout, Menu, Breadcrumb, Skeleton, Switch, Card, Avatar, Row, Col, Slider } from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { FaUsers } from 'react-icons/fa';
import { IoDocuments } from "react-icons/io5";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

let state 

function Main() {

    const [loading, setLoading] = useState({});

    const onChange = (checked) => {
        setLoading({loading: !checked})
    }

    return (
        <>
        <Layout className="layout main-component">
            <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
               <Row>
      <Col span={6} order={4}>
        1 col-order-4
      </Col>
      <Col span={6} order={3}>
        2 col-order-3
      </Col>
      <Col span={6} order={2}>
        3 col-order-2
      </Col>
      <Col span={6} order={1}>
        4 col-order-1
      </Col>
    </Row>
            <div className="site-layout-content">
                
                <Switch checked={!loading} onChange={onChange} />

                {/* <Row >
                    <Col>
                    </Col>
                </Row> */}

<Row>
      <Col span={6} order={1}>
      <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    [<FaUsers /> , 45 ],
                    [<IoDocuments />, 45],
                ]}
                >
                <Skeleton loading={loading} avatar active>
                    <Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                    />
                </Skeleton>
                </Card>
      </Col>
      <Col span={6} order={2}>
      <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
                >
                <Skeleton loading={loading} avatar active>
                    <Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                    />
                </Skeleton>
                </Card>
      </Col>
      <Col span={6} order={3}>
      <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
                >
                <Skeleton loading={loading} avatar active>
                    <Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                    />
                </Skeleton>
                </Card>
      </Col>
      <Col span={6} order={4}>
      <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
                >
                <Skeleton loading={loading} avatar active>
                    <Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                    />
                </Skeleton>
                </Card>
      </Col>
    </Row>

                

            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </>
    )
}

export default Main
