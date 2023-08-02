import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MinimalChatServiceService } from '../../services/minimal-chat-service.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ResLogin } from 'src/app/model/interface.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm: any;
  constructor(private formBuilder: FormBuilder,
    private _service: MinimalChatServiceService,
    private _toaster: ToastrService,
    protected _router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }

  /**On Submition of Login form */
  onSubmit() {
    this._service.userLogIn(this.loginForm.value).subscribe((result:ResLogin) => {
      localStorage.setItem('jwtToken', result.token),
      localStorage.setItem('CurrentUserID', result.profile.userId),
      this._router.navigate(['chat'])
       },
      (error) => { this._toaster.error(error.error), console.warn(error) }
    );
    // this._route.navigate(['list']);
  }

}
