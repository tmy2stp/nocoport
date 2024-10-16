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
      { id: 'sorry-coffee', name: 'Sorry Coffee Co.', year: '[lighting]', detail: '[steel]', image: 'assets/sorry1.jpg', additionalImage: 'assets/sorry2.jpg', description: 'Hand-forged geometric steel sculpture installation at flagship Yorkville location.' },
      { id: 'kit-and-ace', name: 'Kit & Ace', year: '[spring 2014]', detail: '[lighting]', image: 'assets/czolof2.jpg', additionalImage: 'assets/kitace2.jpg', description: 'One of two copper sculptures comissioned for Kit + Ace flagship Yorkville location' },
      { id: 'louis-vuitton', name: 'Louis Vuitton', year: '[winter 2019]', detail: '[lighting]', image: 'assets/detailLV.jpg', additionalImage: 'assets/lv2.jpg', description: 'Copper and steel pendant lighting sculptures' },
      { id: 'indigo', name: 'Indigo', year: '[summer 2019]', detail: '[retail]', image: 'assets/indigo.jpeg', additionalImage: 'assets/indigo2.jpg', description: 'Retail merchandising project for Indigo, anodized steel display risers for locations across North America  ' },
      { id: 'yxu', name: 'YxU', year: '[winter 2019]', detail: '[retail]', image: '/assets/main1.jpg', additionalImage: '/path/to/second-image.jpg', description: 'Custom welded steel pendant sculpture commissioned by YxU Toronto' },
      { id: 'steamwhistle', name: 'Steamwhistle', year: '[industrial design]', detail: '[black walnut]', image: 'assets/steamcarrier.jpg', additionalImage: 'assets/hop3.jpg', description: 'Retail display and industrial design for Toronto based brewery. Projects spanning 2014-2019' },
      { id: 'daag', name: 'Concrete', year: '[spring 2019]', detail: '[furniture]', image: 'assets/lavender.jpg', additionalImage: 'assets/daag2.jpg', description: 'Suspended concrete plinths poured into steel structure for Toronto design gallery'},
      { id: 'floating-foam', name: 'Side Tables', year: '[spring 2019]', detail: '[furniture]', image: 'assets/daag1.jpg', additionalImage: 'assets/floatform2.jpg', description: 'Side tables in dyed american white ash' },
      { id: 'american-ash', name: '324234', year: '[spring 2020]', detail: '[furniture]', image: 'assets/daag2.jpg', additionalImage: 'assets/amash.jpg', description: 'Side tables in dyed american white ash' },
      { id: 'sovereign-state', name: 'Ace Hotel', year: '[summer 2020]', detail: '[furniture]', image: 'assets/daag3.jpg', additionalImage: 'assets/sample3.jpg', description: 'Steel and american ash LP display for Ace Hotel Toronto' },
      { id: 'data-armada', name: 'Concrete ', year: '[winter 2018]', detail: '[retail]', image: 'assets/da1.jpg', additionalImage: 'assets/da2.jpg', description: 'Retail merchandising project in poured concrete and hand forged steel flat bar' },

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
