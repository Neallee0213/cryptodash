import React from 'react';
import './sass/main.scss'
import Layout from './components/Layout';
import AppBar from './components/AppBar';
import { AppProvider } from './components/AppProvider'
import Setting from './setting/index'
import Content from './Shared/Content'
import Dashboard from './Dashboard'


function App() {
  return (
    <AppProvider>
      <Layout className="container-fluid">
        <AppBar />
        <Content>
          <Setting />
          <Dashboard />
        </Content>
      </Layout>
    </AppProvider>
  );
}

export default App;
