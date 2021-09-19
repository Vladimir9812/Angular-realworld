import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArticleInterface} from '../../../types/article.interface';
import {GetArticleResponseInterface} from '../../../types/getArticleResponse.interface';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http
      .post<GetArticleResponseInterface>(url, {})
      .pipe(map((responce: GetArticleResponseInterface) => responce.article));
  }

  removeToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this.http
      .delete<GetArticleResponseInterface>(url, {})
      .pipe(map((responce: GetArticleResponseInterface) => responce.article));
  }
}
