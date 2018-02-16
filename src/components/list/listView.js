//TodoList.js

import html from './listView';
import Template from '../template';
import Item from './listItem';

const template = new Template(html);

export default class ItemList{
  constructor({ list }){
    this.list = list;
  }

  render(){
    const dom = template.clone();
    const list = dom.querySelector('ul');

    const map = new Map();

    this.onAdded = this.list.on('child_added', data => {
      const item = new Item({ key: data.key });
      const itemDom = item.render();
      map.set(data.key, {
        component: item,
        dom: [...itemDom.childNodes]
      });

      list.appendChild(itemDom);
    });
    return dom;

  }

}