import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-detailcontatcts',
  templateUrl: './detailcontatcts.component.html',
  styleUrls: ['./detailcontatcts.component.scss']
})
export class DetailcontatctsComponent implements OnInit {

  title = 'front-end-assessment';
  contacts: any;
  contactDetail: any;
  imgUrl: string = '';
  constructor(private service: ContactService) {

  }
  ngOnInit() {
    this.contact();
  }

  contact() {
    this.service.getData().subscribe((res: any) => {
      this.contacts = res
      this.contactDetail = res[0]
    })
  }
  getContactsByID(id: any) {
    this.service.getContactbyId(id).subscribe(res => {
      this.contactDetail = res
      this.imgUrl = this.contactDetail.image;
    })
  }

}
