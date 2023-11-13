import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App from './pages/login'
import App from './pages/home'
// 全局样式
import './common/styles/frame.styl'
// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import { globalRouters } from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Antd默认语言是英文，需进行以下设置调整为中文。
  <ConfigProvider locale={zhCN}>
     <App />
     <RouterProvider router={globalRouters}></RouterProvider>
  </ConfigProvider>
);

