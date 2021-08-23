import { Component, OnInit } from '@angular/core';
import { Enquete, Option } from 'src/app/models/enquete.model';
import { EnqueteService } from 'src/app/services/enquete.service';

@Component({
  selector: 'app-enquete-list',
  templateUrl: './enquete-list.component.html',
  styleUrls: ['./enquete-list.component.css']
})
export class EnqueteListComponent implements OnInit {

  enquetes?: Enquete[];
  currentEnquete: Enquete = {};
  options: any;
  votes: any;
  setVote:boolean = true;
  currentDate = new Date();
  currentIndex = -1;
  title = '';
  countVount: number = 0;

  constructor(private enqueteService: EnqueteService) { }

  ngOnInit(): void {
    this.retrieveenquetes();
  }

  retrieveenquetes(): void {
    this.enqueteService.getAll()
      .subscribe(
        data => {
          this.enquetes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveenquetes();
    this.currentEnquete = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(enquete: Enquete, index: number): void {

    this.currentEnquete = enquete;
    try{
      let start = new Date(enquete.dateStart);
      let end = new Date(enquete.dateEnd);
      if((start.getDate()  <= this.currentDate.getDate()) && (end.getDate >= this.currentDate.getDate)){
        this.setVote = true;
      }else{
        this.setVote = false;
      }
    }catch(e){
      console.log(e)
    }
  
    this.currentIndex = index;
  }

  removeAllenquetes(): void {
    this.enqueteService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  vote(id: any){
    this.enqueteService.vote(id).subscribe(res => {
      this.refreshList();});
      
   

  }

  searchTitle(): void {
    this.currentEnquete= {};
    this.currentIndex = -1;

    this.enqueteService.findByTitle(this.title)
      .subscribe(
        data => {
          this.enquetes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}