import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/user/example/example.component';
import { SharedModule } from 'app/shared/shared.module';
const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    },
];

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        SharedModule
    ]
})
export class ExampleModule
{
}
