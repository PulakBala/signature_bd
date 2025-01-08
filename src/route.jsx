import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/layouts';
import MainContent from './components/MainContent';
import Sustainability from './Sustainability';
import NewsEvents from './NewsEvents';
import Careers from './Careers';
import Contact from './Contact';
import BioDegradable from './BioDegradable';
import Offset from './Offset';
import Advise from './advise';
import Corggoted_cartton from './Corggoted_cartton';


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
                path: 'bio-degradable',
                element: <BioDegradable/>
            },
            {
                path: 'offset-printing',
                element: <Offset/>
            },
            {
                path: 'sustainability',
                element: <Sustainability/>
            },
            {
                path: 'advise',
                element: <Advise/>
            },
            {
                path: 'corggoted-cartton',
                element: <Corggoted_cartton/>
            },
            {
                path: 'news-events',
                element: <NewsEvents/>
            },
            {
                path: 'careers',
                element: <Careers/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
        
            // অন্যান্য রাউট এখানে যোগ করুন
        ]
    }
]);

export default router;