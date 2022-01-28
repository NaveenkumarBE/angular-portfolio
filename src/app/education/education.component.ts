import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      heading: "B.E-EEE - Electrical and Electronic Engineering",
      duration: "2017",
      subtitle: "Anna University, Chennai",
      content: "Successfully completed my B.E in Electrical and Electronic from Karpagam College Of Engineering, Coimbatore.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "D.EEE - Diploma In Electrical and Electronic Engineering",
      duration: "2014",
      subtitle: "DOTE, Chennai",
      content: "Successfully completed my Diploma studies in 2014 from Sree Kumaraguru Polytechnic college, Dharmapuri.\n",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2011",
      subtitle: "State Board",
      content: "Successfully completed my high school studies in 2011 from E.R.K Higher Secondary School, Dharmapuri.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
