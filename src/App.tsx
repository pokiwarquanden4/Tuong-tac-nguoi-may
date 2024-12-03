// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/homepage';
import Login from './pages/Login/login';
import { urlList } from './routers';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {urlList.map((url) => {
          const Layout = url.content.layout
          const Content = url.content.content
          const page = (
            <Layout>
              <Content></Content>
            </Layout>
          )

          return <Route path={url.url} element={page}></Route>
        })}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
