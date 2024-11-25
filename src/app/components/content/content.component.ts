import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() title: string = '';

  items = [
    { image: './assets/images/blender.svg', alt: 'Logo 1' },
    { image: './assets/images/unity.svg', alt: 'Logo 2' },
    { image: './assets/images/nvidia.svg', alt: 'Logo 3' },
    { image: './assets/images/pytorch.svg', alt: 'Logo 4' },
    { image: '/assets/images/tensorflow.svg', alt: 'Logo 5' },
    { image: '/assets/images/pandas.svg', alt: 'Logo 6' },
    { image: '/assets/images/opengl.svg', alt: 'Logo 7' },
    { image: '/assets/images/numpy.svg', alt: 'Logo 8' },
    { image: '/assets/images/matlab.svg', alt: 'Logo 9' },
  ];

  currentIndex = 0;
  transitionEnabled = true;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    setInterval(() => {
      if (this.currentIndex === this.items.length) {
        // Reiniciar sin transición
        this.transitionEnabled = false;
        this.currentIndex = 0;

        // Asegurarse de que la transición vuelva a habilitarse después de un ciclo
        setTimeout(() => {
          this.transitionEnabled = true;
        }, 50); // Breve retraso para evitar el parpadeo
      } else {
        this.transitionEnabled = true;
        this.currentIndex++;
      }
    }, 3000); // Cambiar de slide cada 3 segundos
  }
}
