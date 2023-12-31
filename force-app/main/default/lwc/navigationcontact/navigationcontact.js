import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class Navigationcontact extends NavigationMixin(LightningElement) {
    openContactNew() {
        this[NavigationMixin.Navigate] ({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName:'new'
            }
        });
    }
}