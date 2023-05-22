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
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/customSvg/dashboardCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "accountCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/customSvg/accountCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "eventsCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/customSvg/eventsCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "scoreCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/customSvg/scoreCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "payCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/customSvg/payCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "messageCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/customSvg/messageCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "settingsCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/customSvg/settingsCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "logoutCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/customSvg/logoutCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "createCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/customSvg/createCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "settingCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/customSvg/settingCustom.svg")
          );
          this.matIconRegistry.addSvgIcon(
            "monitorCustom",
            this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/customSvg/monitorCustom.svg")
          );
    }
}
