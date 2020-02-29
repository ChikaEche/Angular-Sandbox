import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'gcd'
})

export class gcdPipe implements PipeTransform {
    
    transform(x: Array<number>) : number {
        let divisor=Math.min(...x);
        
        while (x.map(x => x % divisor==0).includes(false)){
            --divisor;
        }
        return divisor;
    }
}

