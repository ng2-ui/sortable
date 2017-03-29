# sortable

Mobile-friendly re-arrangable list element

<a href="https://rawgit.com/ng2-ui/sortable/master/app/index.html">
  DEMO
  <!-- img src="http://i.imgur.com/0qcxg8X.png" width="50% border="1" / -->
</a>

## Install

1. install @ngui/sortable node module

        $ npm install @ngui/sortable --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['@ngui/sortable'] = 'node_modules/sortable/dist/sortable.umd.js';

3. import NguiSortableModule to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { NguiSortableModule } from '@ngui/sortable';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, NguiSortableModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }


For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.

## Usage it in your code

add `hammer.js` in your html

    <script src="../node_modules/hammerjs/hammer.js"></script>
  
You are ready. use it in your template


    <ul ngui-sortable>
      <li id="order">Order</li>
      <li id="me">Me</li>
      <li id="right">Right</li>
      <li id="the">The</li>
      <li id="into">Into</li>
      <li id="put">Put</li>
    </ul>

## Without css, it still works, but for better styling, please use some css. e.g.;

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
      position: relative
    }
    ul[ngui-sortable] li.drag-enter {
      border-top: 2px solid yellow;
    }

## For Developers

  Things to know to understand the implementation;
  
  1.  **transform: 'translate(x, y)'**   
      when  drag an element. which sets the position of an element to a new one, described by two vectors (x, y). The y value is optional.</li>
      
  2. **document.elementFromPoint(x, y)**   
      The elementFromPoint() method of the Document interface returns the topmost element at the specified coordinates.
      https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint
  
  3. pan events(a gesture event)
  
      * event.center     {Object}  center position of the touches. contains pageX and pageY
      * event.deltaTime  {Number}  the total time of the touches in the screen
      * event.deltaX     {Number}  the delta on x axis we haved moved
      * event.deltaY     {Number}  the delta on y axis we haved moved
