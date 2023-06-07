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

export const admin: FuseNavigationItem[] = [
    {
        id      : 'profile',
        title   : 'Profil',
        type    : 'collapsable',
        icon    : 'mat_outline:supervised_user_circle',
        children: [
            {
                id      : 'profile.profiles',
                title   : 'Profillar',
                type    : 'basic',
                icon    : 'heroicons_outline:user-group',
                link: '/profiles'
            },
            {
                id      : 'profile.role',
                title   : 'Rollar',
                type    : 'basic',
                icon    : 'mat_outline:brightness_7',
                link: '/role'
            },
        ]
    },
    {
        id      : 'report',
        title   : 'Hisobotlar',
        type    : 'collapsable',
        icon    : 'mat_outline:list_alt',
        children: [
            {
                id      : 'report.event',
                title   : 'Tadbir',
                type    : 'basic',
                icon    : 'mat_outline:event',
                link: '/allevent'
            },
            {
                id      : 'report.score',
                title   : 'Natija',
                type    : 'basic',
                icon    : 'mat_outline:score',
                link: '/score'
            },
            {
                id      : 'report.organizer',
                title   : 'Tashkilot',
                type    : 'basic',
                icon    : 'mat_outline:location_city',
                link: '/organizer'
            },
            {
                id      : 'report.club',
                title   : 'Klub',
                type    : 'basic',
                icon    : 'mat_outline:class',
                link: '/club'
            },

        ],
    },
    {
        id:'finance',
        title:'Moliya hisobotlar',
        type:'basic',
        icon:'mat_outline:monetization_on',
        link:'/finance'
    },
    {
        id      : 'info',
        title   : `Ma'lumot`,
        type    : 'collapsable',
        icon    : 'mat_outline:badge',
        children: [
            {
                id      : 'info.event',
                title   : 'Tadbir',
                type    : 'basic',
                icon    : 'mat_outline:event',
                link: '/cevent'
            },
            {
                id      : 'info.score',
                title   : `E'lon`,
                type    : 'basic',
                icon    : 'heroicons_outline:speakerphone',
                link: '/announcement'
            },
            {
                id      : 'info.advertising',
                title   : 'Reklama',
                type    : 'basic',
                icon    : 'money',
                link: '/advertising'
            },
            {
                id      : 'info.club',
                title   : 'Klub',
                type    : 'basic',
                icon    : 'mat_outline:class',
                link: '/cclub'
            },
        ],
    },
    {
        id:'privilege',
        title:'Imtiyoz',
        type:'basic',
        icon:'list_alt',
        link:'/privilege'
    },
    {
        id:'sms',
        title:'Xabarlar',
        type:'basic',
        icon:'message',
        link:'/message'
    },
]
