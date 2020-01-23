import { SkillSet } from './../../interfaces/skillSet.interface';
import { Component, OnInit } from '@angular/core';

import { SikillSetService } from '../../services/sikill-set.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  SkillSetArray;
  carga = false;

  constructor( public skill: SikillSetService ) {
    this.skill.getSkills('assets/data/skillSet.json')
      .subscribe( (res: SkillSet) => {
      this.SkillSetArray = res;
    });
  }

  ngOnInit() {
  }

}
