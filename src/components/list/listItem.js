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

  render(){
    const dom = template.clone();
    
    const itemElement = dom.querySelector('.task');

    this.onValue = this.item.on('value', data => {
      const { task } = data.val();

      itemElement.textContent = task;
    });
    
    return dom;
  }

}