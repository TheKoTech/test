import { Component, InputSignal, input } from '@angular/core';
import {
  MyType,
  TestAbstractComponent,
} from '../test-abstract/test-abstract.component';

interface Type2 extends MyType {
  name: 'type-2';
}

@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [],
  templateUrl: './test2.component.html',
})
export class Test2Component extends TestAbstractComponent<Type2> {
  myInput: InputSignal<Type2> = input({ id: '', name: 'type-2' });
  myProp: Type2 = { id: '1', name: 'type-2' };
}
