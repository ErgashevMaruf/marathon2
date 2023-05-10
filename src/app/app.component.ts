import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    /**
     * Constructor
     */
    constructor(
        private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    )
    {
        this.matIconRegistry.addSvgIcon(
            "dashboardCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/navigation/dashboardCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "accountCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/navigation/accountCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "eventsCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/navigation/eventsCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "scoreCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/navigation/scoreCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "payCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/navigation/payCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "messageCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/navigation/messageCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "settingsCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/navigation/settingsCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "logoutCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/navigation/logoutCustom.svg")
          );
    }
}
