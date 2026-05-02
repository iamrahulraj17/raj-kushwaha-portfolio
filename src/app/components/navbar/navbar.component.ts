import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const target = this.document.getElementById(sectionId);

    if (!target) {
      return;
    }

    const navbarHeight = 96;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.history.replaceState(null, '', `#${sectionId}`);
    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth'
    });
  }

}
