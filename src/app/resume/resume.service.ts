import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Resume } from "./resume";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResumeService {
  private resumeUrl = 'api/resume';

  constructor(private http: Http) { }

  getResume(): Promise<Resume> {
    return this.http.get(this.resumeUrl)
      .toPromise()
      .then(response => response.json().data as Resume)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
