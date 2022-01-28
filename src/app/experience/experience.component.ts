import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Fullstack Developer",
        company: "Vikas Global Solution",
        color: "#3781c2",
        companylogo: "../../../assets/images/vgsl_logo.png",
        date: "Jul 2021 - Present",
        desc: "Software Enginner  at Vikas Global Solution Pvt ltd",
      },
      {
        role: "Fullstack Developer",
        company: "Palle Technologies",
        color: "#ff9102",
        companylogo: "../../../assets/images/palle.png",
        date: "Feb 2021 – Jun 2021",
        desc: "The 6-Month  training focused on full-stack web development and helped learn to work in a team",
        },
      {
        role: "Design Engineer",
        company: "Trinity Technologies Bangalore",
        color: "#3f703f",
        companylogo: "../../../assets/images/trinity.png",
        date: "Sep 2018 – Dec 2020",
        desc: "I have 2-Years Hands on Experience in Schematic Design and Control Diagram For PLC Programming and Maintanance On Furnace Processing",
      },
     
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
