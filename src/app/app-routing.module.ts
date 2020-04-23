import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  {path: 'articles', component: ArticleListComponent},
  {path: 'about', component: AboutComponent},
  {path: '', pathMatch: 'full', redirectTo: 'articles'},
  {path: 'articles/:key', component: ArticleComponent},
  {path: '404', component: AboutComponent},
  {path: '**', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
