import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    constructor()
    {
        super();
        console.log("Child Constructor is called");
    }
 
    connectedCallback()
    {
        console.log("Child Connected Call Back Called");
    }
 
    renderedCallback()
    {
        console.log("Child rendered Call Back is Called");
    }
 
    disconnectedCallback()
    {
        console.log("Child diconnected Call Back called");
    }
    errorCallback()
    {
        console.log("Child error call back is called");
    }
}
