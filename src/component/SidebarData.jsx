import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ArticleIcon from '@mui/icons-material/Article';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export const SidebarData =[
    {
        title: "Home",
        icon: <HomeIcon />,
        link: '/home'
    },
    {
        title: "About",
        icon: <PersonIcon />,
        link: '/about'
    },
    {
        title: "Project",
        icon: <HomeRepairServiceIcon/>,
        link: '/project'
    },
    {
        title: "Blogs",
        icon: <ArticleIcon/>,
        link: '/blogs'
    },
    {
        title: "Contact",
        icon: <ContactPageIcon/>,
        link: '/contact'
    },
   
]
