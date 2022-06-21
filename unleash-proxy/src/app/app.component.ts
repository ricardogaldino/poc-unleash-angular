import {Component} from '@angular/core';
import {FeatureToggleService} from "./services/feature-toggle.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  FeatureToggleName = 'FT_RELEASE';
  FeatureToggleIsEnabled = false;

  constructor(private readonly featureToggleService: FeatureToggleService) {
  }

  ngOnInit(): void {
    this.featureToggleService.isEnabled(this.FeatureToggleName).then(
      result => this.FeatureToggleIsEnabled = result
    );
  }
}
