import Template from '../Template';
import html from './app.html';
import { db } from '../../services/firebase';
import AddComic from '../addComic/AddComic';
import ComicList from '../list/ComicList';
import Filter from '../filter/Filter';
import './app.css';

const comics = db.ref('comics');
const template = new Template(html);

export default class App {

  handleFilter(filter) {
    if(this.comicList) this.comicList.unrender();
    this.comicSpot.innerHTML = null;

    let listRef;
    if(filter === 'all') listRef = comics;
    else {
      listRef = comics.orderByChild('seen').equalTo(filter === 'seen');
    }

    this.comicList = new ComicList({ list: listRef });
    this.comicSpot.appendChild(this.comicList.render());
  }

  render() {
    const dom = template.fragment;

    const addComicSection = dom.querySelector('#add-comic');
    const filterSection = dom.querySelector('#filter');
    this.comicSpot = dom.querySelector('#comics');

    const addComic = new AddComic();
    addComicSection.appendChild(addComic.render());

    const filter = new Filter({
      onFilter: (filter) => this.handleFilter(filter)
    });
    filterSection.appendChild(filter.render());

    this.handleFilter('all');

    return dom;
  }
}