// import { Todo } from './todo/Todo';


// import { Logout} from './logout/logout.component';

import { ListTodos } from './list-todos/list-todos';

import { Welcome } from './welcome/welcome';

import { Routes } from '@angular/router';

import { Login } from './login/login';

import { Error } from './error/error';
import { Logout } from './logout/logout';
import { RouteGuard } from './service/route-guard';




export const routes: Routes = [

{ path: '', component: Login },//canActivate, RouteGuardService

{ path: 'login', component: Login },

{ path: 'welcome/:name', component: Welcome, canActivate: [RouteGuard]},

{ path: 'todos', component: ListTodos, canActivate: [RouteGuard] },

{ path: 'logout', component: Logout, canActivate: [RouteGuard] },

{ path: '**', component: Error }

];

