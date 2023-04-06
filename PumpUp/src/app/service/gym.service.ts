import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PacketList } from '../model/packets.model';

const packetsUrl = 'http://localhost:3000/api/packets'

@Injectable({
  providedIn: 'root'
})
export class GymService {

  constructor(private http: HttpClient) { }

  getPackets(params?: any): Observable<PacketList> {
    let options = {}
    if(params){
      options = {
        params: new HttpParams()
        .set('sort', params.sort || '')
        .set('sortDirection', params.sortDirection || '')
        .set('filter', params.filter && JSON.stringify(params.filter) || '')
      }
    }

    return this.http.get(packetsUrl, options).pipe(map((data: any) => {
        return new PacketList(data);
      }))
  }
}
