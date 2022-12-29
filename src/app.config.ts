export default {
  pages: [
    'pages/index/index',
    'pages/My/index',
    'pages/My/UserInfo/index',
    'pages/My/UserInfo/UpdateUserInfo/index',
    'pages/WebView/index',
    'pages/Login/index',
    'pages/Category/index',
    'pages/Cart/index',
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
        text: '分类',
        pagePath: 'pages/Category/index',
        iconPath: './assets/tab/category.png',
        selectedIconPath: './assets/tab/categoryActive.png',
      },
      {
        text: '购物车',
        pagePath: 'pages/Cart/index',
        iconPath: './assets/tab/cart.png',
        selectedIconPath: './assets/tab/cartActive.png',
      },
      {
        text: '我的',
        pagePath: 'pages/My/index',
        iconPath: './assets/tab/user.png',
        selectedIconPath: './assets/tab/userActive.png',
      },
    ],
  },
};
