import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../../models/course";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  constructor(private http: HttpClient) {
    if (environment.production) {
      this.baseUrl = "https://tonyvu.dev/api/lms/course";
    } else {
      this.baseUrl = "http://localhost:58471/api/lms/course";
    }
  }

  allCourses: Course[];
  private baseUrl: string;

  getAllCourses() {
    const headers = {
      "Content-Type": "application/json",
    };

    this.http
      .get(this.baseUrl + "/getall" + { headers })
      .toPromise()
      .then((res) => {
        console.log(res);
      });
  }
}
