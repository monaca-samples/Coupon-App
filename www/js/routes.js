
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    name: 'List',
    path: '/list/',
    componentUrl: './pages/list.html',
  },
  {
    name: 'Login',
    path: '/login/',
    componentUrl: './pages/login.html'
  },
  {
    name: 'AdminList',
    path: '/admin/list/',
    componentUrl: './pages/admin/list.html',
  },
  {
    name: 'AdminForm',
    path: '/admin/form/',
    componentUrl: './pages/admin/form.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
