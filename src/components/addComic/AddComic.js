import html from './addComic.html';
import Template from '../Template';
import { db } from '../../services/firebase';

const template = new Template(html);
const comics = db.ref('comics');

export default class AddComic {

  render() {
    const dom = template.fragment;

    const form = dom.querySelector('form');
    const error = dom.querySelector('.error');

    
  }
}