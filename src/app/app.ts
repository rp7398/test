import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Header } from "./home/header/header";
import { Hero } from "./home/hero/hero";
import { Service } from './home/service/service';
import { Client } from "./home/client/client";
import { Process } from "./home/process/process";
import { Industry } from "./home/industry/industry";
import { Cta } from "./home/cta/cta";
import { Footer } from "./home/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Header, Hero, Service, Client, Process, Industry, Cta, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}
