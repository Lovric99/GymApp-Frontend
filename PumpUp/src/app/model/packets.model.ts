export class Packet{
    id:number;
    name:string;
    trainings_per_month:number;
    months:number;
    price_per_month:number;
    price:number;

    constructor(obj?:any){
        this.id = obj && obj.id || 0;
        this.name = obj && obj.name || '';
        this.trainings_per_month = obj && obj.trainings_per_month || 0;
        this.months = obj && obj.months || 0;
        this.price_per_month = obj && obj.price_per_month || 0;
        this.price = obj && obj.price || 0;
    }
}

export class PacketList{
    count:number;
    results:Packet[];

    constructor(obj?:any){
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((elem: Packet)=> new Packet(elem)) || [];
    }
}