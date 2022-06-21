import {Injectable} from '@angular/core';
import {UnleashClient} from 'unleash-proxy-client';

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {

  async isEnabled(feature: string): Promise<boolean> {
    const unleash = new UnleashClient({
      appName: 'Unleash.Client.Web',
      environment: 'development',
      url: 'http://localhost:3000/proxy',
      clientKey: 'proxy-client-key',
    });
    await unleash.start();

    return unleash.isEnabled(feature);
  }

}
