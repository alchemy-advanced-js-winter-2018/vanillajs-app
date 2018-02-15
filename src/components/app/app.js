import html from './app.html';
import Template from '../template';
import AddItem from '../add/add';
// import ItemList from '../list/listView';
// import Filter from '../filter/Filter';
// import { db } from '../../services/firebase';

// const todos = db.ref('todos');
const template = new Template(html);

export default class App {

  render(){
    const dom = template.fragment;
    const addItemSection = dom.querySelector('#add-item');
    const addItem = new AddItem();

    addItemSection.appendChild(addItem.render());

    return dom;
  }
}
