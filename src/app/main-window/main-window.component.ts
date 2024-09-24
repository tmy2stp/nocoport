import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.scss']
})
export class MainWindowComponent implements OnInit {
  project: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('id');
      if (projectId) {
        this.loadProjectData(projectId);
      } else {
        console.error('no project id provided')
      }

    });
  }

  loadProjectData(projectId: string) {

    const projects = [
      { id: 'sorry-coffee', name: 'Sorry Coffee Co.', year: '[spring 2016]', detail: '[steel]', image: 'assets/sorry1.jpg', additionalImage: 'assets/sorry2.jpg', description: 'Detailed description of Kit and Ace' },
      { id: 'kit-and-ace', name: 'Kit & Ace', year: '[spring 2014]', detail: '[copper]', image: 'assets/czolof2.jpg', additionalImage: 'assets/kitace2.jpg', description: 'Detailed description of Kit and Ace' },
      { id: 'louis-vuitton', name: 'Louis Vuitton', year: '[winter 2016]', detail: '[copper]', image: 'assets/detailLV.jpg', additionalImage: 'assets/lv2.jpg', description: 'Detailed description of Kit and Ace' },
      { id: 'indigo', name: 'Indigo', year: '[summer 2018]', detail: '[brass]', image: 'assets/indigo.jpeg', additionalImage: 'assets/indigo2.jpg', description: 'Detailed description of Kit and Ace' },
      { id: 'yxu', name: 'YxU', year: '[winter 2016]', detail: '[aluminum]', image: '/assets/main1.jpg', additionalImage: '/path/to/second-image.jpg', description: 'Detailed description of Kit and Ace' },
      { id: 'steamwhistle', name: 'Steamwhistle', year: '[spring 2018]', detail: '[black walnut]', image: 'assets/steamcarrier.jpg', additionalImage: 'assets/steam2.jpg', description: 'Detailed description of Kit and Ace' },
      { id: 'daag', name: 'Daag', year: '[spring 2017]', detail: '[concrete]', image: 'assets/lavender.jpg', additionalImage: 'assets/daag2.jpg' },
      { id: 'floating-foam', name: 'Floating Foam', year: '[spring 2019]', detail: '[ink / ash]', image: 'assets/daag1.jpg', additionalImage: 'assets/floatform2.jpg', description: 'Detailed description of Kit and Ace' },
      { id: 'american-ash', name: 'American Ash', year: '[spring 2019]', detail: '[ash]', image: 'assets/daag2.jpg', additionalImage: 'assets/amash.jpg', description: 'Detailed description of Kit and Ace' },
      { id: 'sovereign-state', name: 'Sovereign State', year: '[summer 2019]', detail: '[ash]', image: 'assets/daag3.jpg', additionalImage: 'assets/sample3.jpg', description: 'Detailed description of Kit and Ace' },
      { id: 'data-armada', name: 'Data Armada', year: '[winter 2015]', detail: '[concrete]', image: 'assets/da1.jpg', additionalImage: 'assets/da2.jpg', description: 'Detailed description of Kit and Ace' },

    ];

    this.project = projects.find(p => p.id === projectId);

    console.log("Loaded project:", this.project); 

    if(!this.project) {
      console.error('project not found', projectId)
    }
  }

  navHome() {
    this.router.navigate(['/home']);
  }
}
