export class Player {
    constructor(
        public name: string,
        public hole = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        public isplaying?: boolean,
        public score?: number
    ){}
}
