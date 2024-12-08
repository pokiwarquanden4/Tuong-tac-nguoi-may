// App.tsx
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { urlList } from './routers';
import { useCookies } from 'react-cookie';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const App: React.FC = () => {
  return (
    <Fragment>
      <ReactNotifications></ReactNotifications>
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
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
