import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountMembership, Membership } from '../model/membership.mode';
import { PacketList, Packet } from '../model/packets.model';
import { GymService } from '../service/gym.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  memberships:PacketList = new PacketList();
  packet: Packet = new Packet();
  accMembership: AccountMembership = new AccountMembership();
  membership:Membership = new Membership();

  form:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    packets: new FormControl('',Validators.required)
  });


  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get packets(){
    return this.form.get('packets')
  }

  constructor(private service: GymService) { }

  ngOnInit(): void {
    this.getPackets();
  }

  getPackets(){
    this.service.getPackets().subscribe({
      next:(data:PacketList)=>{
        this.memberships = data;
        console.log(this.memberships)
      },
      error:(err:any)=> console.log(err)
    })
  }

  buyMem(){
    for(let packet of this.memberships.results){
      if(packet.id == this.form.value.packets){
        this.packet = packet;
      }
    }

    this.membership.packet = this.packet;
    this.accMembership.email = this.form.value.email;
    this.accMembership.password = this.form.value.password;
    this.accMembership.membership = this.membership;

 }
}
