import {
  AppstoreOutlined,
  BookOutlined,
  CodeOutlined,
  DollarOutlined,
  HomeOutlined,
  PlayCircleOutlined,
  RobotOutlined,
  ShopOutlined,
  ToolOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Avatar, Button, Card, Carousel, Col, Layout, List, Menu, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';
import BeautifulFooter from './BeautifulFooter'; // Import the new footer component
import PricingComponent from './PricingComponent';


const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const AaraaHomepage = () => {
  const [activeSection, setActiveSection] = useState('home');

  const features = [
    {
      title: 'Personal AI Companions',
      icon: <UserOutlined />,
      description: 'Create lifelike chatbots that capture the essence of loved ones. Perfect for preserving memories or creating unique digital experiences.'
    },
    {
      title: 'Educational Study Aids',
      icon: <BookOutlined />,
      description: 'Revolutionize your learning with AI tutors tailored to any subject. Available 24/7, these assistants adapt to your learning style.'
    },
    {
      title: 'Development Team Assistants',
      icon: <CodeOutlined />,
      description: 'Boost productivity with AI that understands your codebase. Get instant answers, code suggestions, and documentation assistance.'
    },
    {
      title: 'E-commerce Customer Support',
      icon: <ShopOutlined />,
      description: 'Elevate customer service with AI representatives that handle inquiries, process returns, and provide product recommendations round the clock.'
    }
  ];

  const steps = [
    { title: 'Sign Up', description: 'Create your Aaraa.Ai account in seconds, no credit card required.' },
    { title: 'Choose Your Foundation', description: 'Select from our diverse library of pre-built templates or start with a blank canvas.' },
    { title: 'Customize and Train', description: `Easily upload your data and fine-tune your AI's personality, knowledge, and capabilities.` },
    { title: 'Test and Refine', description: 'Interact with your AI in our sandbox environment, perfecting its responses and behavior.' },
    { title: 'Deploy and Integrate', description: 'Launch your AI assistant across multiple platforms with our one-click deployment system.' },
    { title: 'Monitor and Improve', description: `Utilize advanced analytics to track performance and continuously enhance your AI's abilities.` }
  ];

  const testimonials = [
    {
      name: 'Sarah, University Student',
      quote: `Aaraa.Ai transformed my study habits! I created an AI study buddy for my biochemistry course, and it's like having a brilliant tutor available 24/7. My grades have soared, and I actually enjoy studying now!`,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Alex, Lead Developer at TechInnovate',
      quote: `Implementing Aaraa.Ai was a game-changer for our development team. Our custom AI assistant handles routine queries, suggests code improvements, and has become an indispensable part of our workflow. Project delivery times have been cut by 30%!`,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Maria, Founder of EcoGoods Online',
      quote: `As a small business owner, I couldn't afford 24/7 customer support. Aaraa.Ai changed everything. Our AI chatbot now handles 80% of customer queries, has increased sales by 25%, and our customer satisfaction ratings have never been higher!`,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const resources = [
    { title: 'Getting Started Guide', description: 'Learn the basics of creating your first AI assistant with Aaraa.Ai.' },
    { title: 'API Documentation', description: 'Detailed documentation for developers looking to integrate Aaraa.Ai into their applications.' },
    { title: 'Use Case Studies', description: 'Explore real-world examples of how businesses are leveraging Aaraa.Ai.' },
    { title: 'Community Forum', description: 'Connect with other Aaraa.Ai users, share tips, and get help from the community.' }
  ];

  const handleMenuClick = (key) => {
    setActiveSection(key);
  };

  const handleStartAIJourney = (planKey) => {
    // You can use the planKey to determine which plan was selected
    window.location.href = `https://chatbots.aaraa.ai/signup?plan=${planKey}`;
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <div className="hero" style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1586775490184-b79f0621891f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: 'calc(100vh - 64px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'white',
              marginTop: '64px'
            }}>
              <div style={{ background: 'rgba(0,0,0,0.7)', padding: '40px', borderRadius: '15px', maxWidth: '800px' }}>
                <Title style={{ color: 'white', fontSize: '48px', marginBottom: '20px' }}>Transform Your World with the Power of AI</Title>
                <Paragraph style={{ fontSize: '18px', color: '#ffffff', margin: '20px auto' }}>
                  From personal companions to enterprise solutions, Aaraa.Ai empowers you to create custom AI chatbots for any purpose. No coding required. Unleash the potential of AI in your life and work today.
                </Paragraph>
                <Space size="large">
                  <Button type="primary" size="large" icon={<RobotOutlined />} style={{ height: '50px', fontSize: '18px' }} onClick={handleStartAIJourney}>Start Your AI Journey</Button>
                  <Button size="large" icon={<PlayCircleOutlined />} style={{ height: '50px', fontSize: '18px', background: 'white', color: '#1890ff' }}>Watch Demo</Button>
                </Space>
              </div>
            </div>
            <div style={{ padding: '50px', background: '#ffffff' }}>
              <Title level={2} style={{ textAlign: 'center', marginBottom: '50px', color: '#001529' }}>What Our Users Say</Title>
              <Carousel autoplay effect="fade">
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <Row gutter={32} align="middle" justify="center">
                      <Col xs={24} md={8}>
                        <img src={testimonial.image} alt={testimonial.name} style={{ width: '100%', borderRadius: '10px', maxHeight: '300px', objectFit: 'cover' }} />
                      </Col>
                      <Col xs={24} md={16}>
                        <Card style={{ height: '100%' }}>
                          <Paragraph style={{ fontSize: '18px', fontStyle: 'italic', color: '#333333' }}>{testimonial.quote}</Paragraph>
                          <Text strong style={{ fontSize: '16px', color: '#001529' }}>{testimonial.name}</Text>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Carousel>
            </div>
          </>
        );
      case 'features':
        return (
          <div style={{ padding: '50px', background: '#ffffff', marginTop: '64px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '50px', color: '#001529' }}>Unleash the Potential of AI in Every Aspect of Life</Title>
            <Row gutter={[32, 32]} justify="center">
              {features.map((feature, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <Card hoverable style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flexGrow: 1 }}>
                      <Avatar size={64} icon={feature.icon} style={{ backgroundColor: '#1890ff', marginBottom: '20px' }} />
                      <Title level={4} style={{ color: '#001529' }}>{feature.title}</Title>
                      <Paragraph style={{ color: '#333333' }}>{feature.description}</Paragraph>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        );
      case 'how-it-works':
        return (
          <div style={{ padding: '50px', background: '#f0f2f5', marginTop: '64px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '50px', color: '#001529' }}>How It Works: Your Journey to AI Excellence</Title>
            <List
              itemLayout="horizontal"
              dataSource={steps}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar size={64} style={{ backgroundColor: '#1890ff', fontSize: '24px' }}>{index + 1}</Avatar>}
                    title={<Title level={4} style={{ color: '#001529', marginBottom: '10px' }}>{item.title}</Title>}
                    description={<Paragraph style={{ fontSize: '16px', color: '#333333', margin: 0 }}>{item.description}</Paragraph>}
                  />
                </List.Item>
              )}
            />
          </div>
        );
      case 'pricing':
        return <PricingComponent handleStartAIJourney={handleStartAIJourney} />;
      case 'resources':
        return (
          <div style={{ padding: '50px', background: '#f0f2f5', marginTop: '64px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '50px', color: '#001529' }}>Resources to Help You Succeed</Title>
            <Row gutter={[32, 32]} justify="center">
              {resources.map((resource, index) => (
                <Col xs={24} sm={12} key={index}>
                  <Card hoverable style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Title level={4}>{resource.title}</Title>
                    <Paragraph style={{ flexGrow: 1 }}>{resource.description}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 50px' }}>
        <div className="logo" style={{ float: 'left', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
          Aaraa.Ai
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[activeSection]}
          onClick={({ key }) => handleMenuClick(key)}
          style={{ justifyContent: 'flex-end' }}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="features" icon={<AppstoreOutlined />}>Features</Menu.Item>
          <Menu.Item key="how-it-works" icon={<ToolOutlined />}>How It Works</Menu.Item>
          <Menu.Item key="pricing" icon={<DollarOutlined />}>Pricing</Menu.Item>
          <Menu.Item key="resources" icon={<BookOutlined />}>Resources</Menu.Item>
          <Menu.Item key="start-ai-journey" icon={<RobotOutlined />} onClick={() => handleStartAIJourney('default')}>
            Start AI Journey
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '24px 0' }}>
          {renderContent()}
        </div>
      </Content>
      <BeautifulFooter />
    </Layout>
  );
};

export default AaraaHomepage;