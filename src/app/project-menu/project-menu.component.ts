import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-menu',
  templateUrl: './project-menu.component.html',
  styleUrl: './project-menu.component.scss'
})
export class ProjectMenuComponent {



  constructor(private router: Router) {}

   projects = [
    { id: 'sorry-coffee', name: 'Sorry Coffee Co.', year:'[spring 2016]', detail: '[steel]', image:  'assets/sorry1.jpg'},
    { id: 'kit-and-ace', name: 'Kit & Ace', year:'[spring 2014]', detail: '[copper]', image:  'assets/czolof2.jpg'},
    { id: 'louis-vuitton', name: 'Louis Vuitton', year:'[winter 2016]', detail: '[copper]', image: 'assets/detailLV.jpg' },
    { id: 'indigo', name: 'Indigo', year:'[summer 2018]', detail: '[brass]', image: 'assets/indigo.jpeg' },
    { id: 'yxu', name: 'YxU', year:'[winter 2016]', detail: '[aluminum]', image: '/assets/main1.jpg' },
    { id: 'steamwhistle',name: 'Steamwhistle', year:'[spring 2018]', detail: '[black walnut]', image: 'assets/steamcarrier.jpg' },
    { id: 'daag', name: 'Daag', year:'[spring 2017]', detail: '[concrete]', image: 'assets/lavender.jpg' },
    { id: 'floating-foam',name: 'Floating Foam', year:'[spring 2019]', detail: '[ink / ash]', image: 'assets/daag1.jpg' },
    { id: 'american-ash', name: 'American Ash', year:'[spring 2019]', detail: '[ash]', image: 'assets/daag2.jpg' },
    { id: 'sovereign-state',name: 'Sovereign State',year:'[summer 2019]', detail: '[ash]', image: 'assets/daag3.jpg' },
    { id: 'data-armada',name: 'Data Armada',year:'[winter 2015]', detail: '[concrete]', image: 'assets/da1.jpg' },

  ];
  

  selectedProject: any = null;
  selectedProjectIndex: any = null;
  selectedAbout: boolean = false;


  selectProject(project: any, index: any) {
    this.selectedProject = project;
    this.selectedProjectIndex = index;
  }

  unselectProject() {
    this.selectedProject = null;
    this.selectedProjectIndex = null;
  }


  selectAboutAndNavigate(): void {
    this.selectedAbout = true; 
    setTimeout(() => {
      this.router.navigate(['/grid']);
      this.selectedAbout = false; 
    }, 500); 
  }

  launchProduct(): void {
    if (this.selectedProject) {
      this.router.navigate(['/project', this.selectedProject.id]);
    }
  }


}
