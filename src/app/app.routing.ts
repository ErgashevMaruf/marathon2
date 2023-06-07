import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboard'
    {path: '', pathMatch : 'full', redirectTo: 'dashboard'},

    // Redirect signed-in user to the '/dashboard'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboard'},

    // Auth routes for guests
    {
        path: '',
        canMatch: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canMatch: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [

            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },
    //...route,
   // User routes
    // {
    //     path: '',
    //     canMatch: [AuthGuard],
    //     component: LayoutComponent,
    //     resolve: {
    //         initialData: InitialDataResolver,
    //     },
    //     children: [
    //         {path:'dashboard', loadChildren:()=>import('app/modules/user/dashboard/dashboard.module').then(m => m.DashboardModule)},
    //         // {path: 'scores', loadChildren: () => import('app/modules/user/scores/scores.module').then(m => m.ScoresModule)},
    //         // {path: 'events', loadChildren: () => import('app/modules/user/events/events.module').then(m => m.EventsModule)},
    //         // {path: 'feedback', loadChildren: () => import('app/modules/user/feedback/feedback.module').then(m => m.feedbackModule)},
    //         // {path: 'pay', loadChildren: () => import('app/modules/user/pay/pay.module').then(m => m.PayModule)},
    //         // {path: 'settings', loadChildren: () => import('app/modules/user/settings/settings.module').then(m => m.settingsModule)},
    //         // {path: 'profile', loadChildren: () => import('app/modules/user/profile/profile.module').then(m => m.profileModule)},

    //     ]
    // }
];
