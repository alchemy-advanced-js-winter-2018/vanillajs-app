import html from './app.html';
import Template from '../template';
import AddItem from '../add/add';
import ItemList from '../list/listView';
import '../../style.css';
import { db } from '../../services/firebase';

const items = db.ref('items');

const template = new Template(html);

export default class App {

  render(){
    const dom = template.fragment;
    const addItemSection = dom.querySelector('#add-item');
    const list = dom.querySelector('#items');

    const addItem = new AddItem();
    const newList = new ItemList({ list: items });
    list.appendChild(newList.render());
    addItemSection.appendChild(addItem.render());

    return dom;
  }
}
