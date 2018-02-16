import html from './Filter.html';
import Template from '../Template';

const template = new Template(html);

export default class Filter {

  constructor({ onFilter }) {
    this.onFilter = onFilter;
  }

  render() {
    const dom = template.fragment;
    const fieldset = dom.querySelector('fieldset');
    fieldset.addEventListener('change', event => {
      this.onFilter(event.srcElement.value);
    });
    return dom;
  }
}