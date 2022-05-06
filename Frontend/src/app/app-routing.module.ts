import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CatsComponent } from './components/shopping-cart/categories/cats/cats.component';
import { DogsComponent } from './components/shopping-cart/categories/dogs/dogs.component';
import { BirdsComponent } from './components/shopping-cart/categories/birds/birds.component';
import { MonkeysComponent} from './components/shopping-cart/categories/monkeys/monkeys.component';
import { PeopleComponent} from './components/shopping-cart/categories/people/people.component';
import { SupportComponent } from './components/support/support.component';

const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'shop', component: ShoppingCartComponent },
    { path: 'cats', component: CatsComponent },
    { path: 'dogs', component: DogsComponent},
    { path: 'birds', component: BirdsComponent},
    { path: 'monkeys', component: MonkeysComponent},
    { path: 'people', component: PeopleComponent},
    { path: 'support', component: SupportComponent},
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
