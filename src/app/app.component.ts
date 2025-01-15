import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.addToggleFunctionality('projects-title', 'project-content');
    this.addToggleFunctionality('voluntariado-title', 'voluntariado-content');
    this.addToggleFunctionality('formacao-title', 'formacao-content');
  }

  addToggleFunctionality(titleId: string, contentId: string): void {
    const title = document.getElementById(titleId);
    const content = document.getElementById(contentId);

    if (title && content) {
      content.style.display = 'none'; // Inicialmente escondido
      title.addEventListener('click', () => {
        // Alterna a visibilidade do conteúdo
        if (content.style.display === 'none') {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    }
  }
}
