import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../models/menu-item.model';
import { MENU_ITEMS } from '../data/menu-data';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  sections: string[] = ['Тип 1', 'Тип 2'];
  currentSection = 'Тип 1';

  allItems: MenuItem[] = MENU_ITEMS;

  selectedItems: MenuItem[] = [];

  get items(): MenuItem[] {
    return this.allItems.filter((item) => item.type === this.currentSection);
  }

  changeSection(section: string) {
    this.currentSection = section;
    this.selectedItems = [];
  }

  toggleItem(item: MenuItem, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      this.selectedItems = [...this.selectedItems, item];
    } else {
      this.selectedItems = this.selectedItems.filter((i) => i.id !== item.id);
    }
  }

  isSelected(item: MenuItem): boolean {
    return this.selectedItems.some((i) => i.id === item.id);
  }

  get selectedCount(): number {
    return this.selectedItems.length;
  }

  get totalValue(): number {
    return this.selectedItems.reduce((sum, item) => sum + item.value, 0);
  }

  trackById(index: number, item: MenuItem) {
    return item.id;
  }
}
