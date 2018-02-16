//Todo.js
import html from './listItem.html';
import Template from '../template';
import { db } from '../../services/firebase';

const template = new Template(html);
const items = db.ref('items');

export default class Item{
  constructor({ key }){
    this.key = key;
    this.item = items.child(key);
  }

  handleRemove(){
    this.item.remove();
  }

  render(){
    const dom = template.clone();
    const removeButton = dom.querySelector('button.remove');
    const itemElement = dom.querySelector('.task');

    this.onValue = this.item.on('value', data => {
      const item = data.val();
      if(!item) return;

      const { task } = data.val();
      itemElement.textContent = task;
    });

    removeButton.addEventListener('click', () => {
      this.handleRemove();
    });
    
    return dom;
  }

  unrender(){
    this.item.off('value', this.onValue);
  }

}