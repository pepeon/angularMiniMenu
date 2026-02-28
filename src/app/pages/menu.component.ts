import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: number;
  name: string;
  value: number;
}

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

  items: MenuItem[] = [
    { id: 1, name: 'Item 1', value: 20 },
    { id: 2, name: 'Item 2', value: 30 },
    { id: 3, name: 'Item 3', value: 40 },
    { id: 4, name: 'Item 4', value: 50 },
  ];

  selectedItems: MenuItem[] = [];

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
