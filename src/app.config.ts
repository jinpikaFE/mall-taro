export default {
  pages: [
    'pages/index/index',
    'pages/My/index',
    'pages/My/UserInfo/index',
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
    list: [
      {
        text: 'Blog',
        pagePath: 'pages/index/index',
        iconPath: './assets/tab/home.png',
        selectedIconPath: './assets/tab/homeActive.png',
      },
      {
        text: 'My',
        pagePath: 'pages/My/index',
        iconPath: './assets/tab/my.png',
        selectedIconPath: './assets/tab/myActive.png',
      },
    ],
  },
};
