import { CheckOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Col, List, Row, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

const PricingComponent = ({ handleStartAIJourney }) => {
    const pricingPlans = [
        {
            key: 'basic',
            title: 'Basic',
            price: '$9.99',
            period: 'per month',
            features: [
                '1 AI Assistant',
                '1,000 interactions/month',
                'Basic customization',
                'Email support',
                '99.9% uptime guarantee'
            ],
            buttonText: 'Start Free Trial',
            popular: false
        },
        {
            key: 'pro',
            title: 'Pro',
            price: '$29.99',
            period: 'per month',
            features: [
                '3 AI Assistants',
                '10,000 interactions/month',
                'Advanced customization',
                'Priority support',
                'Analytics dashboard',
                'API access'
            ],
            buttonText: 'Get Started',
            popular: true
        },
        {
            key: 'enterprise',
            title: 'Enterprise',
            price: 'Custom',
            period: 'contact for pricing',
            features: [
                'Unlimited AI Assistants',
                'Unlimited interactions',
                'Full customization',
                '24/7 dedicated support',
                'Advanced analytics',
                'Custom integrations',
                'On-premise deployment option'
            ],
            buttonText: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <div style={{ padding: '40px 0', background: '#f0f2f5' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
                Choose the Perfect Plan for Your Needs
            </Title>
            <Row gutter={[32, 32]} justify="center">
                {pricingPlans.map((plan) => (
                    <Col xs={24} sm={20} md={8} key={plan.key}>
                        <Badge.Ribbon text="Most Popular" color="#1890ff" style={{ display: plan.popular ? 'block' : 'none' }}>
                            <Card
                                hoverable
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    boxShadow: plan.popular ? '0 8px 24px rgba(24, 144, 255, 0.3)' : '0 4px 12px rgba(0,0,0,0.1)',
                                    border: plan.popular ? '2px solid #1890ff' : '1px solid #e8e8e8',
                                    transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                                    transition: 'all 0.3s ease'
                                }}
                                bodyStyle={{
                                    padding: '24px',
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Title level={3} style={{ textAlign: 'center', color: plan.popular ? '#1890ff' : 'inherit' }}>
                                    {plan.title}
                                </Title>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                                    <Text style={{ fontSize: '36px', fontWeight: 'bold' }}>{plan.price}</Text>
                                    <Text style={{ fontSize: '16px', color: '#8c8c8c' }}> /{plan.period}</Text>
                                </div>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={plan.features}
                                    renderItem={(item) => (
                                        <List.Item style={{ border: 'none', padding: '8px 0' }}>
                                            <List.Item.Meta
                                                avatar={<CheckOutlined style={{ color: '#52c41a' }} />}
                                                title={<Text>{item}</Text>}
                                            />
                                        </List.Item>
                                    )}
                                    style={{ flex: 1 }}
                                />
                                <Button
                                    type={plan.popular ? "primary" : "default"}
                                    size="large"
                                    block
                                    onClick={() => handleStartAIJourney(plan.key)}
                                    style={{
                                        marginTop: '20px',
                                        height: '50px',
                                        fontSize: '16px',
                                        borderRadius: '25px'
                                    }}
                                >
                                    {plan.buttonText}
                                </Button>
                            </Card>
                        </Badge.Ribbon>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default PricingComponent;