// icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
// pages
import Products from '../pages/Product/Products'
import DashboardPage from '../pages/DashboardPage';
import ProductsAnalytics from '../pages/Product/ProductsAnalytics'
import Collections from '../pages/Product/Collections'
import Category from '../pages/Product/Category'
import OrdersAnalytics from '../pages/Orders/OrdersAnalytics'
import UsersAnalyitcs from '../pages/Users/UsersAnalyitcs'
import Routers from './Routers'
import Orders from '../pages/Orders/Orders'
import Users from '../pages/Users/Users'



export var productsRouters = {
    items: [
        {
            id: 1,
            enName: 'Products',
            arName: 'لوحة التحكم',
            to: '/details',
        },
        {
            id: 2,
            enName: 'Categories',
            arName: 'لوحة التحكم',
            to: '/categories',
        },
        {
            id: 3,
            enName: 'Collections',
            arName: 'لوحة التحكم',
            to: '/collections',
        },
        {
            id: 4,
            enName: 'Analytics',
            arName: 'لوحة التحكم',
            to: '/analytics',
        },
    ],
    pages: [
        {
            id: 1,
            path: 'details',
            component: ()=> <Products />,
        },
        {
            id: 2,
            path: 'categories',
            component: ()=> <Category/>,
        },
        {
            id: 3,
            path: 'collections',
            component: () => <Collections/>,
        },
        {
            id: 4,
            path: 'analytics',
            component: () => <h1>Analytics</h1>,
        },
    ]
}

export var odersRouters = {
    items: [
        {
            id: 1,
            enName: 'Orders',
            arName: 'الطلبات',
            to: '/details',
        },
        {
            id: 2,
            enName: 'Analytics',
            arName: 'لوحة التحكم',
            to: '/analytics',
        },
    ],
    pages: [
        {
            id: 1,
            path: 'details',
            component: ()=> <Orders />,
        },
        {
            id: 2,
            path: 'analytics',
            component: () => <h1>Analytics</h1>,
        },
    ]
}


export var routers = {
    items: [
        {
            id: 1,
            enName: 'Dashboard',
            arName: 'لوحة التحكم',
            to: '/dashboard',
            icon: (style, active) => <DashboardIcon className={active ? style.active : style.icon} />
        },
        {
            id: 2,
            enName: 'Products',
            arName: 'لوحة التحكم',
            to: '/products/details',
            icon: (style, active) => <LocalMallIcon className={active ? style.active : style.icon} />
        },
        {
            id: 3,
            enName: 'Orders',
            arName: 'لوحة التحكم',
            to: '/orders',
            icon: (style, active) => <ShoppingCartIcon className={active ? style.active : style.icon} />
        },
        {
            id: 4,
            enName: 'Users',
            arName: 'لوحة التحكم',
            to: '/users',
            icon: (style, active) => <PeopleIcon className={active ? style.active : style.icon} />
        },
        {
            id: 5,
            enName: 'Chat',
            arName: 'لوحة التحكم',
            to: '/chat',
            icon: (style, active) => <ChatIcon className={active ? style.active : style.icon} />
        },
    ],
    pages: [
        {
            id: 1,
            exact: true,
            path: '/dashboard',
            component: () => <DashboardPage />,
        },
        {
            id: 2,
            exact: false,
            path: '/products',
            component: () => <Routers link="products" data={productsRouters} />,
        },
        {
            id: 3,
            exact: false,
            path: '/Orders',
            component: () => <Routers link="orders" data={odersRouters} />,
        },
        {
            id: 4,
            exact: false,
            path: '/users',
            component: () => <Users />,
        },
        {
            id: 5,
            exact: false,
            path: '/chat',
        },
    ]
}