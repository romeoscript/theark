
"use client"
import { Inter } from "next/font/google";
import "../globals.css";
import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { CiHome } from "react-icons/ci";
import { MdOutlineBrightnessHigh } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";
import Link from "next/link";
import logo from '../../public/assets/logo.svg'

const { Header, Content, Footer, Sider } = Layout;


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <main >
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              width={300}
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              <div className="demo-logo-vertical" />
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
              >
                <Menu.Item key="1" icon={<CiHome />}>
                  <Link href="/Dashboard">
                    Dashboard
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<MdOutlineBrightnessHigh />}>
                  <Link href="/Dashboard/pnl">
                    Highest PNL
                  </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<IoRocketSharp />}>
                  <Link href="/Dashboard/holdings">
                    Top Holdings
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                  background: colorBgContainer,
                }}
              >
                <img src={logo.src} alt="" />
              </Header>


              <Content
                style={{
                  margin: '24px 16px',
                  padding: 14,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <div
                  style={{
                    minHeight: 360,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                > {children}</div>

              </Content>
              <Footer
                style={{
                  textAlign: 'center',
                }}
              >
                theark ©{new Date().getFullYear()} Created by <Link href='https://github.com/romeoscript'>Romeoscript</Link>
              </Footer>
            </Layout>
          </Layout>
        </main>
      </body>
    </html>
  );
}
