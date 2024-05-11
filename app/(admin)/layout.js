"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { useState } from "react";
import { Layout, Menu, theme, Input, Drawer, Tooltip } from "antd";
import { CiHome, CiTrophy } from "react-icons/ci";
import { MdOutlineBrightnessHigh } from "react-icons/md";
import { RiHome2Fill } from "react-icons/ri";
import { IoRocketSharp, IoWalletOutline } from "react-icons/io5";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const { Header, Content, Footer, Sider } = Layout;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [filterDrawer, setFilterDrawer] = useState(false);
  const [searchText, setSearchText] = useState("");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const TriggerFilterDrawer = (e) => {
    e.preventDefault();

    if (!filterDrawer) {
      setFilterDrawer(true);
    } else {
      setSearchText(e.target.value);
    }
  };


  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <main>                  

          <Layout style={{ minHeight: "100vh" }}>
            <Layout>
              <Header
                style={{
                  padding: 0,
                  height: "100px",
                  background: "#060853",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div className="flex items-center gap-4 pl-20">
                  <img src={logo.src} alt="" className="" />
                  <span className="text-xl font-semibold text-white ">
                    The Ark
                  </span>
                </div>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["1"]}
                  style={{
                    width: "45.5%",
                    padding: 0,
                    borderRadius: 25,
                    borderColor: "white",
                    border: "1px",
                  }}
                  className=""
                >
                  <Menu.Item key="1" icon={<RiHome2Fill />} className='rounded-menu-item'>
                    <Link href="/dashboard">Dashboard</Link>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<MdOutlineBrightnessHigh />} >
                    <Link href="/dashboard/pnl">Highest PNL</Link>
                  </Menu.Item>
                   <Menu.Item key="3" icon={<IoWalletOutline />} >
                    <Link href="/dashboard/wallets">Wallets</Link>
                  </Menu.Item>
                  <Menu.Item key="4" icon={<CiTrophy />}>
                    <Link href="/dashboard/holdings">Top Holdings</Link>
                  </Menu.Item>
                  <Menu.Item key="5" icon={<IoRocketSharp />} className="new-listings-item">
                    <Link href="/dashboard/listings">
                      <span clanssName="flex space-x-6">
                        <span>New Listings</span>
                        <span className="bg-red-600 p-1 rounded-md text-white text-xs ml-5">
                          Beta
                        </span>
                      </span>
                    </Link>
                  </Menu.Item>
                </Menu>

                <div className="pr-20">
                  <Input
                    placeholder="Search wallet/token"
                    onChange={(e) => TriggerFilterDrawer(e)}
                    value={searchText}
                    placeholderTextColor="white"
                    style={{
                      backgroundColor: "#FFFFFF1A",
                      alignItems: "center",
                      border: "none",
                      boxShadow: "none",
                      padding: 15,
                      color: "#FFFFFF80",
                      borderRadius: 12,
                    }}
                    prefix={
                      <SearchOutlined
                        style={{
                          color: "#FFFFFF80",
                          paddingRight: 5,
                        }}
                      />
                    }
                  />
                </div>
              </Header>

              <Content
                style={{
                  padding: 50,
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
                  className={`bg-black transition-opacity duration-300 ease-in-out ${
                    filterDrawer
                      ? "opacity-100"
                      : "opacity-100"
                  }`}
                >
                  {children}
                </div>
              </Content>
              <Footer
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  padding: 10,
                }}
              >
                <div className="w-[95%]">
                  <div className="border-b border-gray-300 w-full"></div>
                  <div className="flex justify-between p-3 items-center">
                    <span>
                      Copyright ©2023 - {new Date().getFullYear()} The Ark Inc.
                      All rights reserved
                    </span>
                    <div className="flex space-x-5">
                      <div className="p-2 bg-gray-200 rounded-full">
                        <FaTwitter size={24} className="text-[#80808080]" />
                      </div>
                      <div className="p-2 bg-gray-200 rounded-full">
                        <FaGithub size={24} className="text-[#80808080]" />
                      </div>
                      <div className="p-2 bg-gray-200 rounded-full">
                        <FaYoutube size={24} className="text-[#80808080]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Footer>
            </Layout>
          </Layout>
        </main>
      </body>
    </html>
  );
}
