import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nocoport';

  mouseX = 0;
  mouseY = 0;
  textPositions: { x: number, y: number }[] = [];
  delay = 0.1;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initializeLetterPositions();
    this.trackMouseMovement();
    this.animateTextFollow();
  }

  initializeLetterPositions(): void {
    const letters = document.querySelectorAll('.letter');
    letters.forEach(() => {
      this.textPositions.push({ x: 0, y: 0 }); 
    });
  }

  trackMouseMovement(): void {
    this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
      this.mouseX = event.pageX;
      this.mouseY = event.pageY;
    });
  }

  animateTextFollow(): void {
    const letters = document.querySelectorAll('.letter');

    const updatePosition = () => {
      letters.forEach((letter, index) => {
        const letterElement = letter as HTMLElement;

        const staggerDelay = index * 15; 
        this.textPositions[index].x += (this.mouseX - this.textPositions[index].x + staggerDelay) * this.delay;
        this.textPositions[index].y += (this.mouseY - this.textPositions[index].y + staggerDelay) * this.delay;

        this.renderer.setStyle(letterElement, 'transform', `translate(${this.textPositions[index].x}px, ${this.textPositions[index].y}px)`);
      });

      requestAnimationFrame(updatePosition);
    };

    requestAnimationFrame(updatePosition);
  }
}
