import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './whatsapp-chat.component.html',
  styleUrls: ['./whatsapp-chat.component.scss']
})
export class whatsappChatComponent {
  conversation:any;
  onConversationselected(user:any){
    this.conversation=user
  }

}
