import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component'
import { GeneratorIndexComponent } from './abgenerated/generator-index.component';

import { SampleXMLArchOSBStub } from './abgenerated/sample-xml-arch-osb/sample-xml-arch-osb-main.component';

import { SampleFormOneStub } from './abgenerated/sample-xml-arch-osb/sample-form-one.component';

import { GenReqFileFormStub } from './abgenerated/sample-xml-arch-osb/gen-req-file-form.component';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    GeneratorIndexComponent,
    
    SampleXMLArchOSBStub,
    
    SampleFormOneStub,
    
    GenReqFileFormStub,
    
  ],
  bootstrap: [AppComponent],
  providers: [
  ]
})


export class AppModule { }
