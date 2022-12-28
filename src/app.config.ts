export default {
  pages: [
    'pages/index/index',
    'pages/My/index',
    'pages/My/UserInfo/index',
    'pages/My/UserInfo/UpdateUserInfo/index',
    'pages/WebView/index',
    'pages/Login/index',
  ],
  window: {
    backgroundColor: '#f5f5f5',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    selectedColor: '#1296db',
    backgroundColor:'#fafafa',
    color:'#8b8b8b',
    borderStyle:'white',
    list: [
      {
        text: '首页',
        pagePath: 'pages/index/index',
        iconPath: './assets/tab/home.png',
        selectedIconPath: './assets/tab/homeActive.png',
      },
      {
        text: '我的',
        pagePath: 'pages/My/index',
        iconPath: './assets/tab/my.png',
        selectedIconPath: './assets/tab/myActive.png',
      },
    ],
  },
};
