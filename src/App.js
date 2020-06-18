import React, { Component } from 'react';
import { Layout, Menu, Typography, Input, Row, Col } from 'antd';
import {
  ApiOutlined,
  FolderOutlined,
  UserOutlined
} from '@ant-design/icons';
import './App.css';
import appSettings from './appSettings.json';

const { Sider, Content } = Layout;
const { Text, Link } = Typography;

class App extends Component {
  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
  }

  componentDidMount = function () {
    this.createMenu(appSettings.Pages);
  }

  state = {
    collapsed: false,
    pageList: (<div></div>),
    pageContent: (<div></div>)
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  handleMenuClick = e => {
    this.getPage(e.key);
  };

  createMenu(pages) {
    var view = pages.map((item) => {
      return (
        <Menu.Item key={item.Id} icon={<ApiOutlined />}>
          {item.Name}
        </Menu.Item>
      );
    });

    this.setState({ pageList: view });
  }

  getPage = function (itemId) {
    var page = appSettings.Pages.find((e) => e.Id === itemId);

    let showIframe = page.SourceLink !== undefined && page.SourceLink !== null && page.SourceLink !== "";
    let showExternalLink = page.ExternalLink !== undefined && page.ExternalLink !== null && page.ExternalLink !== "";
    let showDescription = page.Description !== undefined && page.Description !== null && page.Description !== "";
    let showPeoples = page.Peoples !== undefined && page.Peoples != null && page.Peoples.length > 0;
    var peoplesView = null;
    if (showPeoples) {
      peoplesView = page.Peoples.map((item, i) => {
        return (
          <div style={{ paddingRight: 10 }} key={i}>
            <UserOutlined /> {item}
          </div>
        );
      });
    }

    var view = (
      <Content style={{ margin: '15px 15px 0' }}>
        <div className="site-layout-background" style={{ padding: 20, minHeight: 50 }}>
          <Row>
            <Col>
              <Text strong>{page.Name}</Text>
            </Col>
            {showExternalLink &&
              <Col style={{ paddingLeft: 10 }}>
                <Link href={page.ExternalLink} target="_blank">
                  <FolderOutlined />
                </Link>
              </Col>
            }
          </Row>
          {
            showDescription &&
            <Row>
              <Col span={24}>
                <Text type="secondary">{page.Description}</Text>
              </Col>
            </Row>
          }
          {
            showPeoples &&
            <Row>
              {peoplesView}
            </Row>
          }
        </div>
        {
          showIframe &&
          <div style={{ paddingTop: 20 }}>
            <iframe ref={this.iframeRef} title={page.Name} src={page.SourceLink}
              style={{ width: '100%', minHeight: '800px', overflow: 'auto' }} ></iframe>
          </div>
        }
      </Content>
    );

    this.setState({ pageContent: view });
  }

  searchPage = function (e) {
    var keyword = e.target.value;
    if (keyword.length === 0) {
      this.createMenu(appSettings.Pages);
      return;
    }

    var pages = appSettings.Pages.filter((e) => e.Name.toLowerCase().includes(keyword.toLowerCase()));
    this.createMenu(pages);
  }

  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="appName">
              {appSettings.Name}
            </div>
            <Input
              placeholder="Page name"
              onChange={e => this.searchPage(e)}
            />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handleMenuClick}>
              {this.state.pageList}
            </Menu>
          </Sider>
          <Layout>
            {this.state.pageContent}
          </Layout>
        </Layout>
      </div>
    )
  };
}

export default App;
