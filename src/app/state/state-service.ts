import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {

    public logged: BehaviorSubject<boolean> = new BehaviorSubject(false);

}