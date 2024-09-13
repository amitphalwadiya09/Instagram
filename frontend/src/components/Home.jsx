// import React from 'react'
// import Feed from './Feed'
// import { Outlet } from 'react-router-dom'
// import RightSidebar from './RightSidebar'
// import useGetAllPost from '@/hooks/useGetAllPost'
// import useGetSuggestedUsers from '@/hooks/useGetSuggestedUsers'

// const Home = () => {
//     useGetAllPost();
//     useGetSuggestedUsers();
//     return (
//         // <div className='flex'>
//         //     <div className='flex-grow'>
//         //         <Feed />
//         //         <Outlet />
                
//         //     </div>
//         //     <RightSidebar />
//         // </div>
//         <div className='flex flex-grow'>
        
//             <Feed />
//             <Outlet />
            
       
//         <RightSidebar />
//     </div>
//     )
// }


import React from 'react';
import Feed from './Feed';
import { Outlet } from 'react-router-dom';
import RightSidebar from './RightSidebar';
import useGetAllPost from '@/hooks/useGetAllPost';
import useGetSuggestedUsers from '@/hooks/useGetSuggestedUsers';
import '../CSS/Home.css'; // Import the CSS file

const Home = () => {
    useGetAllPost();
    useGetSuggestedUsers();

    return (
        <div className='home-container'>
            <div className='feed-outlet-container'>
                <Feed />
                <Outlet />
            </div>
            <RightSidebar className="right-sidebar-container" />
        </div>
    );
}

// export default Home;

export default Home