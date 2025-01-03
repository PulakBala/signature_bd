import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/layouts';
import MainContent from './components/MainContent';
import Sustainability from './Sustainability';
import NewsEvents from './NewsEvents';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <MainContent/>
            },
            {
                path: 'sustainability',
                element: <Sustainability/>
            },
            {
                path: 'news-events',
                element: <NewsEvents/>
            }
        
            // অন্যান্য রাউট এখানে যোগ করুন
        ]
    }
]);

export default router;