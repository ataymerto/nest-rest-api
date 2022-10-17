import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '345345345',
      name: 'Item One',
      qty: 100,
      description: 'Item desc',
    },
    {
      id: '345645345',
      name: 'Item Two',
      qty: 50,
      description: 'Item desc two',
    },
  ];
  findAll(): Item[] {
    return this.items;
  }
  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
