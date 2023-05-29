/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'dashboardCustom',
        link : '/dashboard',
        children:[]
    },
    {
        id   : 'profile',
        title: 'Profile',
        type : 'basic',
        icon : 'accountCustom',
        link : '/profile'
    },
    {
        id   : 'events',
        title: 'Events',
        type : 'basic',
        icon : 'eventsCustom',
        link : '/events'
    },
    {
        id   : 'score',
        title: 'Score',
        type : 'basic',
        icon : 'scoreCustom',
        link : '/scores'
    },
    {
        id   : 'feedback',
        title: 'Feedback',
        type : 'basic',
        icon : 'messageCustom',
        link : '/feedback'
    },
    {
        id   : 'settings',
        title: 'Settings',
        type : 'basic',
        icon : 'settingsCustom',
        link : '/settings'
    },
    {
        id   : 'logout',
        title: 'Logout',
        type : 'basic',
        icon : 'logoutCustom',
        link : '/sign-out'
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
