import { Component, OnInit } from '@angular/core';

import {InfoService} from '../services/info-service.service';

import { Project } from './project.class';


@Component({
  selector: 'projects-jmchema',
  templateUrl: './project-comp.component.html',
  styleUrls: ['./project-comp.component.sass']
})

export class myProjects implements OnInit {
  projectsList: Array<Project>;

	constructor(private iSer: InfoService){}

	ngOnInit(){
		this.projectsList = this.iSer.getProjectsInfo().reverse();
		console.log(this.projectsList);
	}
}
