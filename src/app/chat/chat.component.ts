import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { User } from '../User';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() persons: any

  dates: User[] = []
  time: number =  Date.now()
  jokes: any[] = []
  joke?: string = 'When Chuck Norris eats brussel sprouts, his farts smell like cotton candy.'
  

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {}
// --------------------------------create new messages-----------
  submitMessage(event: any) {
    let value = event.target.value.trim();
    event.target.value = '';

    if(value.length < 1){
      return false;
    } 

    this.persons.latestMessage = value
    this.persons.message.unshift({ 
      id: 1,
      body: value,
      time: this.time,
      me: true
    })
  }
// ------------------------create joke messages---------------
  getJoke(){
   setTimeout(()=>{
       this.chatService.getRandomJoke()
        .subscribe((joke: any) => this.joke = joke.value)
        this.persons.latestMessage = this.joke
      this.persons.message.unshift({
      id: 22,
      body: this.joke,
      time: this.time,
      me: false
    })
    },10000)
  }


}
