import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {GithubService} from "./github/shared/github.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {RepoBrowserComponent} from "./github/repo-browser/repo-browser.component";
import {RepoListComponent} from "./github/repo-list/repo-list.component";
import {RepoDetailComponent} from "./github/repo-detail/repo-detail.component";
import {ContactComponent} from "./contact/contact.component";
import {WorkExperienceComponent} from "./work_experience/work_experience.component";
import {ApiService} from "./api/api_service";
import {BackgroundComponent} from "./background/background.component";
import {LogManager} from "./log_manager";
import {InterestsComponent} from "./interests/interests.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {HeaderComponent} from "./header/header.component";
import {SidenavManager} from "./sidenav/sidenav.manager";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent,
    WorkExperienceComponent,
    InterestsComponent,
    BackgroundComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService,
    ApiService,
    LogManager,
    SidenavManager,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
