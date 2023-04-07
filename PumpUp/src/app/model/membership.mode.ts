import { Packet } from "./packets.model";

export class City{
    id:number;
    name:string;

    constructor(obj?:any){
        this.id = obj && obj.id || 0;
        this.name = obj && obj.name || '';
    }
}


export class Membership{
    start_date: Date;
    packet: Packet;

    constructor(obj?: any) {
        this.start_date = obj && obj.start_date && new Date(obj.start_date) || null;
        this.packet = obj && obj.packet && new Packet(obj.packet) || null;
    }

    get end_date(): Date {
        let end = new Date(this.start_date);
        end = new Date(end.setMonth(end.getMonth() + this.packet.months));
        return end;
    }

    get status(): number {
        return Math.round((new Date().getTime() - this.start_date.getTime())/(this.end_date.getTime() - this.start_date.getTime())*100);
    }
}

export class Account {
    email: string;
    password: string;
    name: string;
    city: City;
    memberships: Membership[] = [];

    constructor(obj?: any) {
        this.email = obj && obj.email || null;
        this.password = obj && obj.password || null;
        this.name = obj && obj.name || null;
        this.city = obj && obj.city && new City(obj.city) || null;
        this.memberships = obj && obj.memberships && obj.memberships.map((jsonMembership: any) => { return new Membership(jsonMembership); }) || [];
    }
}

export class AccountMembership {
    email: string;
    password: string;
    membership: Membership;

    constructor(obj?: any) {
        this.email = obj && obj.email || null;
        this.password = obj && obj.password || null;
        this.membership = obj && obj.membership && new Membership(obj.membership) || null;
    }
}