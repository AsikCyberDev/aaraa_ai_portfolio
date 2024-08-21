import {
    FacebookOutlined,
    GithubOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    SendOutlined,
    TwitterOutlined
} from '@ant-design/icons';
import { Button, Col, Divider, Input, Layout, Row, Space, Typography } from 'antd';
import React from 'react';

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const BeautifulFooter = () => {
    return (
        <Footer style={{
            background: 'linear-gradient(135deg, #001529 0%, #003a8c 100%)',
            color: 'white',
            padding: '40px 50px 20px'
        }}>
            <Row gutter={[32, 32]}>
                <Col xs={24} sm={12} md={6}>
                    <Title level={3} style={{ color: 'white', marginBottom: '20px' }}>Aaraa.Ai</Title>
                    <Text style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Empowering businesses with cutting-edge AI solutions. Create, deploy, and manage intelligent chatbots with ease.
                    </Text>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Title level={4} style={{ color: 'white', marginBottom: '20px' }}>Quick Links</Title>
                    <Space direction="vertical">
                        <Link href="/features" style={{ color: 'rgba(255,255,255,0.8)' }}>Features</Link>
                        <Link href="/pricing" style={{ color: 'rgba(255,255,255,0.8)' }}>Pricing</Link>
                        <Link href="/about" style={{ color: 'rgba(255,255,255,0.8)' }}>About Us</Link>
                        <Link href="/contact" style={{ color: 'rgba(255,255,255,0.8)' }}>Contact</Link>
                        <Link href="/blog" style={{ color: 'rgba(255,255,255,0.8)' }}>Blog</Link>
                    </Space>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Title level={4} style={{ color: 'white', marginBottom: '20px' }}>Contact Us</Title>
                    <Space direction="vertical">
                        <Text style={{ color: 'rgba(255,255,255,0.8)' }}>Email: info@aaraa.ai</Text>
                        <Text style={{ color: 'rgba(255,255,255,0.8)' }}>Phone: +1 (206) 769-6344</Text>
                        <Text style={{ color: 'rgba(255,255,255,0.8)' }}>Address: 4117 Wallingford Ave N, Seattle, WA 98103</Text>
                    </Space>
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <Title level={4} style={{ color: 'white', marginBottom: '20px' }}>Newsletter</Title>
                    <Text style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '10px', display: 'block' }}>
                        Stay updated with our latest news and offers!
                    </Text>
                    <Input.Group compact>
                        <Input
                            style={{ width: 'calc(100% - 40px)' }}
                            placeholder="Enter your email"
                        />
                        <Button type="primary" icon={<SendOutlined />} />
                    </Input.Group>
                </Col>
            </Row>
            <Divider style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '24px 0' }} />
            <Row justify="space-between" align="middle">
                <Col>
                    <Text style={{ color: 'rgba(255,255,255,0.8)' }}>
                        © 2024 Aaraa.Ai. All rights reserved.
                    </Text>
                </Col>
                <Col>
                    <Space size="large">
                        <Link href="https://facebook.com" target="_blank" style={{ color: 'white' }}>
                            <FacebookOutlined style={{ fontSize: '24px' }} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" style={{ color: 'white' }}>
                            <TwitterOutlined style={{ fontSize: '24px' }} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" style={{ color: 'white' }}>
                            <LinkedinOutlined style={{ fontSize: '24px' }} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" style={{ color: 'white' }}>
                            <InstagramOutlined style={{ fontSize: '24px' }} />
                        </Link>
                        <Link href="https://github.com" target="_blank" style={{ color: 'white' }}>
                            <GithubOutlined style={{ fontSize: '24px' }} />
                        </Link>
                    </Space>
                </Col>
            </Row>
        </Footer>
    );
};

export default BeautifulFooter;