import { Route} from "@angular/router";
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from './user.resolver';


export const routeUser: Route[]=[
    {
        path: '',
        canMatch: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            {path:'dashboard', loadChildren:()=>import('app/modules/user/dashboard/dashboard.module').then(m => m.DashboardModule)},
            {path: 'scores', loadChildren: () => import('app/modules/user/scores/scores.module').then(m => m.ScoresModule)},
            {path: 'events', loadChildren: () => import('app/modules/user/events/events.module').then(m => m.EventsModule)},
            {path: 'feedback', loadChildren: () => import('app/modules/user/feedback/feedback.module').then(m => m.feedbackModule)},
            {path: 'pay', loadChildren: () => import('app/modules/user/pay/pay.module').then(m => m.PayModule)},
            {path: 'settings', loadChildren: () => import('app/modules/user/settings/settings.module').then(m => m.settingsModule)},
            {path: 'profile', loadChildren: () => import('app/modules/user/profile/profile.module').then(m => m.profileModule)},

        ]
    }
]



