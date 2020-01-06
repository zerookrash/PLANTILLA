import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SkillSet } from '../interfaces/skillSet.interface';

@Injectable({
  providedIn: 'root'
})
export class SikillSetService {


  constructor(private http: HttpClient) {}


  getSkills( url: string) {
    return this.http.get(url);
  }


}
