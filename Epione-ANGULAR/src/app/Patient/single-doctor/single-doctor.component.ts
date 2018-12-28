import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { doctor } from 'src/app/entities/doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-doctor',
  templateUrl: './single-doctor.component.html',
  styleUrls: ['./single-doctor.component.css']
})
export class SingleDoctorComponent implements OnInit {

  constructor(private fb:FormBuilder, private doctorService : UserService,private route:ActivatedRoute, private router:Router) { }

  d : doctor ;
  comments = [] ; 
  identifiant : number ;
  showMenu : boolean = false  ; 
  userId = localStorage.getItem('userId') ;
  noComment = "" ;
  msgError = "" ; 
  DoctorId : number ;
  form = this.fb.group({
    contenu : ['',Validators.required]  })

  
  ngOnInit() {
   
    this.route.params.subscribe(params => {
      this.DoctorId = params['param'] ; 
    })
    this.doctorService.getSingleDoctor(this.DoctorId).subscribe((Data) => {
      this.d = Data ; 
    })
    this.doctorService.getCommentaireDoctor(this.DoctorId).subscribe((Data)=>{
      this.comments = Data ; 
      if(Data[0] == null){
        this.noComment="No comments" ;
      }
     console.log("ya rabiiiiiiiiiiiiiiiiii"+Data[0].patient) ;
    })
   
  }

  OnSubmit(){
    let content = this.form.get('contenu').value ; 
    let comment : any={
      "content" : content 
    }
    this.doctorService.addComment(comment,this.DoctorId).subscribe((Data)=>{
      if(Data['error']=="une erreur est survenue"){
        this.msgError="please enter some content" ;
      } else {
        this.doctorService.getCommentaireDoctor(this.DoctorId).subscribe((Data)=>{
          this.comments = Data ; })
      }
    })
  }

  show(id){
    this.identifiant = id ; 
    if(this.showMenu==false){
    this.showMenu = true ; }
    else this.showMenu = false ; 
  }

  deleteComment(com){
   this.comments.splice(this.comments.indexOf(com),1);
   this.doctorService.deleteComment(com.id).subscribe((Data)=>{
   })
  }

  editComment(com){
    com.content = this.form.get('contenu').value ;
    this.doctorService.modifierComment(com).subscribe((Data)=>{
    })
  }

}
