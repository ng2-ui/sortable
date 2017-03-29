import {Component} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <ul ngui-sortable>
      <li id="order">Order</li>
      <li id="me">Me</li>
      <li id="right">Right</li>
      <li id="the">The</li>
      <li id="into">Into</li>
      <li id="put">Put</li>
    </ul>`,
  styles: [`
    ul[ngui-sortable] {
       padding: 10px; 
       border: 1px solid #ccc;
      list-style: none; 
      display: block
    }
    ul[ngui-sortable] li {
      padding: 10px 5px;
      background: #4986e7;
      color: #fff; 
      border: 1px solid #fff;
      display: block; 
      position: relative;
      cursor: pointer;
    }
    ul[ngui-sortable] li.drag-enter {
      border-top: 2px solid yellow;
    }
 `]
})
export class AppComponent {
}
