(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
      <h1>Hello World BK
      </h1>
    `;

// customElements.define(name, constructor, options);
// It defines a new custom element, by inheriting from — and extending — built-in HTML elements
//I the below, instead of constructor, the class itself has been defined,
    customElements.define('com-sap-sample-helloworld1bk', class HelloWorld1 extends HTMLElement {


		constructor() {
// 		Always call super first in constructor
			super(); 

//		Create a shadow root
			let shadowRoot = this.attachShadow({mode: "open"});
			shadowRoot.appendChild(tmpl.content.cloneNode(true));
		}


        //Fired when the widget is added to the html DOM of the page
       		 connectedCallback(){
            			this._firstConnection = true;
            			this.redraw();
       		 }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
        
        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
		onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        //When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default.  If it is enabled, SAP Analytics Cloud will track DOM size changes and call this callback as needed
        //  If you don't need to react to resizes, you can save CPU by leaving it uncommented.
        /*
        onCustomWidgetResize(width, height){
        
        }
        */

        redraw(){
        }
    
    
    });
        
})();
