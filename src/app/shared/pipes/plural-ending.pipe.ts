import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralEnding',
})
export class PluralEndingPipe implements PipeTransform {
  transform(word: string, itemsCount: number): string {
    return itemsCount > 1 ? `${word}s` : word;
  }
}
