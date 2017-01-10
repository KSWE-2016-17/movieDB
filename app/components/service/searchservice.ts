import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SearchService {

	private _searchText = new Subject<string>();

	public searchTextStream$ = this._searchText.asObservable();

	broadcastTextChange(text:string) {
		this._searchText.next(text);
	}

}