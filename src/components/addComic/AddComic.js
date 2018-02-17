import html from './addComic.html';
import Template from '../Template';
import { db } from '../../services/firebase';
import './addComic.css';

const template = new Template(html);
const comics = db.ref('comics');

export default class AddComic {

  handleSubmit(name) {
    const ref = comics.push();
    return ref.set({ name, seen: false });
  }

  render() {
    const dom = template.fragment;
    
    const form = dom.querySelector('form');
    const error = dom.querySelector('.error');

    form.addEventListener('submit', event => {
      event.preventDefault();
      error.textContent = '';

      const { name } = form.elements;
      
      this.handleSubmit(name.value)
        .then(() => {
          name.value = '';
        })
        .catch(err => {
          error.textContent = err.message;
        });
    });

    return dom;
  }
}