import React, {useState} from 'react';
import { Layout, Menu, Breadcrumb,Input, Space, Skeleton, Switch, Card, Avatar, Row, Col, Slider, Divider , Button} from 'antd';
import 'antd/dist/antd.css';
import { EditOutlined, EllipsisOutlined, AudioOutlined , PlusOutlined } from '@ant-design/icons';
import { FaUsers } from 'react-icons/fa';
import { IoDocuments } from "react-icons/io5";
import Axious from 'axios';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const { Search } = Input;




function Main() {
    const [loading, setLoading] = useState({});
    const [teams, setTeams] = useState({});


    const onChange = (checked) => {
        setLoading({loading: !checked})
    }
    const loadTeams = () => {
        Axious.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            if(res.status == 200){
                setTeams({teams: res.data});
            }
            // console.log(teams)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    window.onload = () => {

        loadTeams();
    }
    const teamArray = [
        {id: 1, title: "Here", desc: "description"}, 
        {id: 1, title: "Here", desc: "description"},
        {id: 1, title: "Here", desc: "description"},
        {id: 1, title: "Here", desc: "description"},
        {id: 1, title: "Here", desc: "description"},
        {id: 1, title: "Here", desc: "description"},
        {id: 1, title: "Here", desc: "description"},

    ]
 
    const onSearch = (value) => console.log(value);
    console.log(teams.teams)
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
            <div className="site-layout-content">
                
            <Row className="row-search">
                <Col span={12} order={1} className="col-search">
                        <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />

                </Col>
            </Row>

            <Divider style={{ borderWidth: 2 }} />

            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Criadas Por mim</Breadcrumb.Item>
            </Breadcrumb>

            <Row>
                {
                    teamArray.map((item, index) => (
                        <Col span={6} order={index} key={index}>
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
                    ))
                }
            </Row>

            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Convites de participação</Breadcrumb.Item>
            </Breadcrumb>
            
            <Row>
                {
                    teamArray.map((item, index) => (
                        <Col span={6} order={index} key={index}>
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
                    ))
                }
            </Row>

            </div>
            </Content>
            <Button className="open-creat-team-modal" type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </>
    )
}

export default Main
