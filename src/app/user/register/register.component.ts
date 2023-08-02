import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MinimalChatServiceService } from 'src/app/services/minimal-chat-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registraionForm: any;

  constructor(private _formBuilder: FormBuilder,
    protected _router: Router,
    private _service:MinimalChatServiceService,
    private _toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.registraionForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**On Submiting the registration form */
  onSubmit() {
    this._service.userRegistration(this.registraionForm.value).subscribe(
      (result) => {
       this._router.navigate(['login']),
       this._toaster.success("Registration done sucessfully") },
    (error) => {
       this._toaster.error(error.error.message), 
       console.warn(error.error.message) }
 );
  }




}
