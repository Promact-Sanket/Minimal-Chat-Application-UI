import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from "./user/user.module";
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ChatModule } from './chat/chat.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        UserModule,
        ChatModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        CommonModule,
        BrowserAnimationsModule, 
        ToastrModule.forRoot(), 
    ]
})
export class AppModule { }
