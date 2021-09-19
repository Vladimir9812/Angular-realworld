import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {GetArticleEffect} from './store/effects/getArticle.effect';
import {DeleteArticleEffect} from './store/effects/deleteArticle.effect';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {RouterModule} from '@angular/router';
import {ErrorMessageModule} from '../shared/modules/errorMessage/errorMessage.module';
import {LoadingModule} from '../shared/modules/loading/loading.module';
import {ArticleService as SharedArticleService} from '../shared/services/article.service';
import {ArticleComponent} from './components/article/article.component';
import {ArticleService} from './services/article.service';
import {TagListModule} from '../shared/modules/tagList/tagList.module';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
