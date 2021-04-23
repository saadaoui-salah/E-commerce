// icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
// pages
/// Product
import Products from '../pages/Product/Products'
import Collections from '../pages/Product/Collections'
import ProductsAnalytics from '../pages/Product/ProductsAnalytics'
import Category from '../pages/Product/Category'
/// Dashboard
import DashboardPage from '../pages/DashboardPage';
/// Orders 
import Orders from '../pages/Orders/Orders'
import OrdersAnalytics from '../pages/Orders/OrdersAnalytics'
/// Users
import UsersAnalyitcs from '../pages/Users/UsersAnalyitcs'
import Costumers from '../pages/Users/Costumers'
import Vendors from '../pages/Users/Vendors'
// router
import Routers from './Routers'

export var productsRouters = {
    items: [
        {
            id: 1,
            enName: 'Products',
            arName: 'لوحة التحكم',
            to: '/',
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
            path: '/',
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
            component: () => <ProductsAnalytics/>,
        },
    ]
}

export var odersRouters = {
    items: [
        {
            id: 1,
            enName: 'Orders',
            arName: 'الطلبات',
            to: '/',
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
            path: '/',
            component: ()=> <Orders />,
        },
        {
            id: 2,
            path: 'analytics',
            component: () => <OrdersAnalytics/>,
        },
    ]
}

export var usersRouters = {
    items: [
        {
            id: 1,
            enName: 'Costumers',
            arName: 'المشتريين',
            to: '/costumers',
        },
        {
            id: 2,
            enName: 'Vendors',
            arName: 'البائعين',
            to: '/vendors',
        },
        {
            id: 3,
            enName: 'Analytics',
            arName: 'لوحة التحكم',
            to: '/analytics',
        },
    ],
    pages: [
        {
            id: 1,
            path: 'costumers',
            component: ()=> <Costumers />,
        },
        {
            id: 2,
            path: 'vendors',
            component: ()=> <Vendors />,
        },
        {
            id: 3,
            path: 'analytics',
            component: () => <UsersAnalyitcs/>,
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
            to: '/products/',
            icon: (style, active) => <LocalMallIcon className={active ? style.active : style.icon} />
        },
        {
            id: 3,
            enName: 'Orders',
            arName: 'لوحة التحكم',
            to: '/orders/',
            icon: (style, active) => <ShoppingCartIcon className={active ? style.active : style.icon} />
        },
        {
            id: 4,
            enName: 'Users',
            arName: 'لوحة التحكم',
            to: '/users/',
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
            path: '/Users',
            component: () => <Routers link="users" data={usersRouters} />,
        },
        {
            id: 5,
            exact: false,
            path: '/chat',
        },
    ]
}