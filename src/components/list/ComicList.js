import html from './ComicList.html';
import Template from '../Template';
import Comic from './Comic';
import './list.css';

const template = new Template(html);

export default class ComicList {
  constructor({ list }) {
    this.list = list;
  }

  render() {
    const dom = template.clone();
    const list = dom.querySelector('ul');

    const map = new Map();

    this.onAdded = this.list.on('child_added', data => {
      const comic = new Comic({ key: data.key });
      const comicDom = comic.render();
      map.set(data.key, {
        component: comic,
        dom: [...comicDom.childNodes]
      });

      list.appendChild(comicDom);
    });

    this.onRemoved = this.list.on('child_removed', data => {
      const { component, dom } = map.get(data.key);
      map.delete(data.key);
      component.unrender();
      dom.forEach(node => node.remove());
    });

    return dom;
  }

  unrender() {
    this.list.off('child_added', this.onAdded);
    this.list.off('child_removed', this.onRemoved);
  }
}