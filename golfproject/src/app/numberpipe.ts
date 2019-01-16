import { Pipe, PipeTransform } from '@angular/core';
import { info } from './information';
import { isFormattedError } from '@angular/compiler';

@Pipe({name: 'namefixer'
}) export class namefixer implements PipeTransform{
    transform(input: string, plynum: number): string{ 
        if(input == 'Player' || input == 'Player2' || input == 'Player3' || input == 'Player4'){
            return input + '';
        }
        else{
        switch (plynum) {
            case 1:
                if(input == info[1].name || input == info[2].name || input == info[3].name){
                    return input + plynum; 
                }
                    return input;   
            case 2:
                if(input == info[0].name || input == info[2].name || input == info[3].name){
                    return input + plynum; 
                }
                    return input;
            case 3:
                if(input == info[0].name || input == info[1].name || input == info[3].name){
                    return input + plynum; 
                }
                    return input;
            case 4:
                if(input == info[0].name || input == info[1].name || input == info[2].name){
                    return input + plynum; 
                }
                    return input;
            }
            
        }
    }}
