import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-form',
  template: `
    <div>
      <form>
        <input placeholder="Name" />
        <button>Ok</button>
      </form>
    </div>
  `,
  styles: [

  ]
})
export class UserSettingsFromComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {}

}