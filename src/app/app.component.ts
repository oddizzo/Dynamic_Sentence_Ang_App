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
  responseData:any = [];
  dynamicSentence = "";

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

  wordChanged(e: any){
    this.dynamicSentence += e.target.value + " "; 
  }

  submitClicked(){
    if(this.dynamicSentence){
      this.apiService.postSentene(this.dynamicSentence).subscribe(data =>{
        if(data){
          this.responseData = data;
          this.showAlert(this.responseData.Words);   
        }
      }); 
    }
  }

  showAlert(s: string){
    alert('Submitted: ' + s);    
  }
}
