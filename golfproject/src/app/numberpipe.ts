import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'stringtonum'
}) export class stringtonum implements PipeTransform{
    transform(input: string): number{ 
        return parseInt(input, 10);
}}
