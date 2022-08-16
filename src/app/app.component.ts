import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dynamic Sentence Angular App';
  wordTypeList:any = [];
  wordsList:any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.reInitWordTypeList();
  }

  reInitWordTypeList() {
    this.apiService.getWordTypeList().subscribe(data =>{
      this.wordTypeList = data;
    });
  }

  wordTypeChanged(e: any){
    this.apiService.getWordsList(e.target.value).subscribe(data =>{
      this.wordsList = data;
    });
  }
}
