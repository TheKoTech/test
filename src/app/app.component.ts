import { ComponentType } from '@angular/cdk/overlay';
import { Component, Type } from '@angular/core';
import { MyType, TestAbstractComponent } from './components/test-abstract/test-abstract.component';
import { Test1Component } from './components/test1/test1.component';

type Comp<T, U extends MyType> = ComponentType<T> & typeof TestAbstractComponent<U>;

const COPMS: Record<string, Comp<unknown, MyType>> = {
  'test-1': Test1Component,
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
})
export class AppComponent {}
