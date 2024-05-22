import { Component, InputSignal, input } from '@angular/core';
import {
  MyType,
  TestAbstractComponent,
} from '../test-abstract/test-abstract.component';

interface Type1 extends MyType {
  name: 'type-1';
}

@Component({
  selector: 'app-test1',
  standalone: true,
  imports: [],
  templateUrl: './test1.component.html',
})
export class Test1Component extends TestAbstractComponent<Type1> {
  myInput: InputSignal<Type1> = input({ id: '', name: 'type-1' });
  override myProp: Type1 = {
    id: 'test-1',
    name: 'type-1',
  };
}
