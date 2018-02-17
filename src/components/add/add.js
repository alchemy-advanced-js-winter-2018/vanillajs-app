import html from './add.html';
import Template from '../template';
import { db } from '../../services/firebase';

const template = new Template(html);
const items = db.ref('items');

export default class addItem{

  handleSubmit(task){
    const ref = items.push();
    console.log(ref);
    return ref.set({ task, ranking: 'good' });
  }

  render(){
    const dom = template.fragment;
    const form = dom.querySelector('form');

    form.addEventListener('submit', event => {
      event.preventDefault();
      
      const { task } = form.elements;

      this.handleSubmit(task.value)
        .then(() => {
          task.value = '';
        });
    });

    return dom;
  }
}