import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-form',
  template: `
    <div class="conatiner">
      <h2>User settings</h2>
      <form>
        <div class="form-group">
        <label for="name"></label>
        <input id="name" name="name" class="form-control" placeholder="Name" />
        </div>
        <button class="btn btn-secondary">Ok</button>
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