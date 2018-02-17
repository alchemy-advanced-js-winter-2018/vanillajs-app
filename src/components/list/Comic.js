import html from './Comic.html';
import Template from '../Template';
import { db } from '../../services/firebase';
import './list.css';

const template = new Template(html);
const comics = db.ref('comics');

export default class Comic {
  constructor({ key }) {
    this.key = key;
    this.comic = comics.child(key);
  }

  handleSeen(seen) {
    this.comic.child('seen').set(seen);
  }

  handleRemove() {
    this.comic.remove();
  }

  render() {
    const dom = template.clone();

    const comicSpot = dom.querySelector('.name');
    const seenCheckbox = dom.querySelector('input[type=checkbox]');
    const removeButton = dom.querySelector('button.remove');

    this.onValue = this.comic.on('value', data => {
      const comic = data.val();
      // if it is deleted, return...
      if(!comic) return;
      const { name, seen } = data.val();
      comicSpot.textContent = name;
      seenCheckbox.checked = seen;
    });

    seenCheckbox.addEventListener('change', () => {
      this.handleSeen(seenCheckbox.checked);
    });

    removeButton.addEventListener('click', () => {
      if(confirm('Are you sure you want to remove this comic?')) this.handleRemove();
    });

    return dom;
  }

  unrender() {
    this.comic.off('value', this.onValue);
  }
}