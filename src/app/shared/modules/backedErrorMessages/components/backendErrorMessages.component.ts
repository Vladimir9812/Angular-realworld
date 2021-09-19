import { Component, Input, OnInit } from "@angular/core";

import {BackendErrorsInterface} from '../../../types/backendErrors.interface'

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss']
})

export class BackendErrorMessagesComponent implements OnInit{
  @Input() backendErrors: BackendErrorsInterface

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(', ');
      return `${name} ${messages}`
    })
  }
}