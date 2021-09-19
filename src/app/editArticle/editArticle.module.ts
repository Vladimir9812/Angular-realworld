import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ArticleFormModule} from '../shared/modules/articleForm/articleForm.module';
import {EditArticleService} from './services/editArticle.service';
import {ArticleService as SharedArticleService} from '../shared/services/article.service';
import {LoadingModule} from '../shared/modules/loading/loading.module';
import {EffectsModule} from '@ngrx/effects';
import {UpdateArticleEffect} from './store/effects/updateArticle.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {GetArticleEffect} from './store/effects/getArticle.effect';
import {EditArticleComponent} from './components/editArticle/editArticle.component';

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule,
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
