import { Component, InputSignal, input } from '@angular/core';

export interface MyType {
  id: string;
}

@Component({
  selector: 'app-test-abstract',
  standalone: true,
  imports: [],
  templateUrl: './test-abstract.component.html',
})
export abstract class TestAbstractComponent<T extends MyType = MyType> {
  abstract myInput: InputSignal<T>;
  abstract myProp: T;
}
