import { Component } from '@angular/core';
import { Cta } from "../../home/cta/cta";
import { Hero } from "../../home/hero/hero";
import { Service } from "../../home/service/service";
import { Process } from "../../home/process/process";
import { Why } from "../../home/why/why";
import { Industry } from "../../home/industry/industry";
import { Client } from "../../home/client/client";



@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [Cta, Hero, Service, Process, Why, Industry, Client]
})
export class HomeComponent {}
