import Template from '../Template';
import html from './app.html';
import { db } from '../../services/firebase';

const comics = db.ref('comics');
const template = new Template(html);

export default class App {

  render() {
    const dom = template.fragment;

    const addComicSection = dom.querySelector('#add-comic');

    const addComic = new AddComic();
    addComicSection.appendChild(addComic.render());
  }

}
