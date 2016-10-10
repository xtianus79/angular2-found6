"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./dashboard/index');
var appRoutes = [
    {
        path: 'heroes',
        component: index_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: index_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: index_1.HeroDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map