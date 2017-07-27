import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ResumeSchema } from "./resume";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ResumeService {
  private resumeUrl = 'api/resume';

  constructor(private http: Http) { }

  getResume(): Promise<ResumeSchema> {
    return this.http.get(this.resumeUrl)
      .toPromise()
      .then(response => response.json().data as ResumeSchema)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
