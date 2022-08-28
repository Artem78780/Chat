import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from '../chat.service';
import { User } from '../User';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.css']
})
export class SidebarContentComponent implements OnInit {

  @Output() selectedPerson: EventEmitter<any> = new EventEmitter<any>()

  date: User[] = []
  selected?: User
  time: number = Date.now()
  searchPerson?: any

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.getDate()
  }

// --------------------------------------get date with Service----------
  getDate(): void {
    this.chatService.getData()
      .subscribe(data => this.date = data)
  }

// ----------------------------------------filter users----------------
  get filterPersonName() {
    return this.date.filter(name => {
      return name.name
        .toLowerCase()
        .includes(this.searchPerson?.toLowerCase())
    })
  }

}
