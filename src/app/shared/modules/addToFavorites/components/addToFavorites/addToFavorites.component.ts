import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {addToFavoritesAction} from '../../store/actions/addToFavorites.action';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss'],
})
export class AddToFavoritesComponent {
  @Input() isFavorited: boolean;
  @Input() favoritesCount: number;
  @Input() articleSlug: string;

  count: number;
  favorited: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.count = this.favoritesCount;
    this.favorited = this.isFavorited;
  }

  handleLike(): void {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlug,
      })
    );
    this.count = this.favorited ? this.count - 1 : this.count + 1;
    this.favorited = !this.favorited;
  }
}
