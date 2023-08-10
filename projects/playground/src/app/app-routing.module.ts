import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CounterComponent } from './bases/counter/counter.component';
import { FetchComponent } from './bases/fetch/fetch.component';
import { LifeCycleComponent } from './bases/life-cycle/life-cycle.component';

const routes: Routes = [
  { path: '', redirectTo: '/counter', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch', component: FetchComponent },
  { path: 'life-cycle', component: LifeCycleComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
