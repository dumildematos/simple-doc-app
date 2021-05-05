import React, {useState} from 'react';
import { Layout, Menu, Breadcrumb, Skeleton, Switch, Card, Avatar, Row, Col, Slider, Divider , Button} from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined, PlusOutlined } from '@ant-design/icons';
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

            <div className="site-layout-content">
                
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

            <Divider style={{ borderWidth: 2 }} />

            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Criadas Por mim</Breadcrumb.Item>
            </Breadcrumb>
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
                    [<FaUsers /> , <span>46</span> ],
                    [<IoDocuments />,  <span>46</span>],
                ]}
                className="teams-card"
                >
                <Skeleton loading={loading} active>
                    <Meta
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

    <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Convites de participação</Breadcrumb.Item>
            </Breadcrumb>
                

            </div>
            </Content>
            <Button className="open-creat-team-modal" type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </>
    )
}

export default Main
